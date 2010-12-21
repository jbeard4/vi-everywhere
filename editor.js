svgEditorAPI = (function(){
	var svgNS = "http://www.w3.org/2000/svg";

	var root = document.documentElement;
	var txt = document.getElementById("main")
	var cursorNode = document.getElementById("cursor")
	var modeText = document.getElementById("mode-text")
	var locationText = document.getElementById("location-text")
	
	//there may be a nicer way to do this, but we assume a fixed-width font, so here we create a character, insert it into DOM to get its dimensions, then remove it
	var tmptxt = document.createElementNS(svgNS,"text");
	tmptxt.textContent="b";
	document.documentElement.appendChild(tmptxt)
	var textExtent = tmptxt.getExtentOfChar(0)
	document.documentElement.removeChild(tmptxt)
	//console.log("textExtent",textExtent)

	//TODO: we need to figure out how to get the width/heigh of each glyph... we could do it by getting the bbox of the next glyph
	
	var currentLineIndex = 0;		//current line index in lines[]
	var lines=[];				//each line is based around a set of tspan elements. a set, because we may want wordwrap later

	function Cursor(pos){
		this.cursorPosition = 0;

		cursorNode.y.baseVal.value=0;
		cursorNode.width.baseVal.value = textExtent.width;


		function moveCursor(dx,dy){
				cursorNode.x.baseVal.value+=dx;
				cursorNode.y.baseVal.value+=dy;
		}

		function moveCursorTo(x,y){
				cursorNode.x.baseVal.value=x;
				cursorNode.y.baseVal.value=y;
		}
	
		this.moveLeft=function(){
			if(this.cursorPosition > 0){
				this.cursorPosition-=1
				//var r = lines[currentLineIndex].getExtentOfCharAt(this.cursorPosition)
				//cursor.x.baseVal.value-=r.x;
				//cursor.width.baseVal.value = r.width;
				moveCursor(-1*textExtent.width,0)
			}

			//console.log("position: ", this.cursorPosition)
		}

		this.moveRight=function(includeRightmostChar){
			//FIXME: off-by-one error?
			var numChars = lines[currentLineIndex].getTotalNumberOfChars();
			var condition = includeRightmostChar ? 
				this.cursorPosition < numChars : 
				this.cursorPosition < numChars-1;

			if(condition){
				//var r = lines[currentLineIndex].getExtentOfCharAt(this.cursorPosition)
				this.cursorPosition+=1
				//cursor.x.baseVal.value+=r.x;
				//cursor.width.baseVal.value = r.width;
				moveCursor(textExtent.width,0)
			}

			//console.log("position: ", this.cursorPosition)
		}

		this.moveUp=function(){
			var nextLine = lines[currentLineIndex-1];
			if(nextLine){

				currentLineIndex-=1;

				var numChars = nextLine.getTotalNumberOfChars();
				if( this.cursorPosition < numChars ){
					//var r = nextLine.getExtentOfCharAt(this.cursorPosition);
					//cursor.x.baseVal.value+=r.x;
					//cursor.width.baseVal.value = r.width;
					moveCursor(0,-textExtent.height)
				}else{
					moveCursor(numChars*textExtent.width-this.cursorPosition*textExtent.width,-textExtent.height)
					this.cursorPosition = numChars;
				}
			}
		}

		this.moveDown=function(){
			var nextLine = lines[currentLineIndex+1];
			if(nextLine){

				currentLineIndex+=1;

				var numChars = nextLine.getTotalNumberOfChars();
				if( this.cursorPosition < numChars ){
					//var r = nextLine.getExtentOfCharAt(this.cursorPosition);
					//cursor.x.baseVal.value+=r.x;
					//cursor.width.baseVal.value = r.width;
					moveCursor(0,textExtent.height)
				}else{
					//var r = nextLine.getExtentOfCharAt(numChars);
					moveCursor(numChars*textExtent.width-this.cursorPosition*textExtent.width,textExtent.height)
					this.cursorPosition = numChars;
				}
			}
		}

		this.makeCursorFat = function(){
			cursorNode.width.baseVal.value = textExtent.width;
			//cursorNode.setAttributeNS(null,"transform","translate(" + -textExtent.width + ",0)" ); //reflection, so he overs the thing he is currently on
		}

		this.makeCursorThin = function(){
			cursorNode.width.baseVal.value = 1;
			//cursorNode.removeAttributeNS(null,"transform");
		}

		this.moveCursorTo = function(pos,lineNumber){
			lineNumber = lineNumber || currentLineIndex;	//default to currentLineIndex

			var nextLine = lines[lineNumber];

			//TODO: make sure we are not moving him somewhere illegal
			if(nextLine){ 
				this.cursorPosition = pos;
				currentLineIndex = lineNumber;

				moveCursorTo(textExtent.width * this.cursorPosition,lineNumber*textExtent.height)
			}


		}

		this.moveToStartOfNextWord = function(){
			var currentLine = lines[currentLineIndex];
			var tc = currentLine.getTextContent()  
			var re = /\b\w/g;

			var match;

			while ((match = re.exec(tc)) && match.index < this.cursorPosition);

			if (match){
				this.moveCursorTo(match.index);
			}else{
				this.moveCursorTo(tc.length-1);	//move cursor to end of line
			}
			
		}

		this.moveToEndOfNextWord = function(){
			var currentLine = lines[currentLineIndex];
			var tc = currentLine.getTextContent()  
			var re = /\w\b/g;

			var match;

			while ((match = re.exec(tc)) && match.index < this.cursorPosition);

			if (match){
				this.moveCursorTo(match.index);
			}else{
				this.moveCursorTo(tc.length-1);	//move cursor to end of line
			}
			
		}

		this.moveToStartOfPreviousWord = function(){
			var currentLine = lines[currentLineIndex];
			var tc = currentLine.getTextContent()  
			var re = /\b\w/g;

			var matches = [];
			var match;

			while (match = re.exec(tc)){
				matches.push(match)
			}

			var self = this;

			var matchBeforeCursor = matches.filter(function(m){return m.index < self.cursorPosition}).pop()

			if (matchBeforeCursor){
				this.moveCursorTo(matchBeforeCursor.index);
			}else{
				this.moveCursorTo(0);	//move cursor to start of line
			}
			
		}


		this.makeCursorThin();
	}

	function Line(lineIndex,initialText){
		var currenttspan = document.createElementNS(svgNS,"tspan");

		if(initialText){
			currenttspan.textContent = initialText;
		}

		if(lineIndex > 0){
			currenttspan.setAttributeNS(null,"dy",textExtent.height);
			currenttspan.setAttributeNS(null,"x",0);
		}
	

		var tspans = [currenttspan];

		//add him to nodelist
		//TODO: have special data structure that binds arra data model to nodelist data model
		var lineToInsertBefore = txt.childNodes[lineIndex];
		txt.insertBefore(currenttspan,lineToInsertBefore);

		//put him into lines
		lines.splice(lineIndex,0,this);	
		
		this.writeCharAt = function(c,pos){
			//TODO: wordwrap
			var tv = currenttspan.textContent;
			currenttspan.textContent = tv.substring(0,pos) + c + tv.substring(pos,tv.length);
		}

		this.writeBackspace = function(pos){
			var tv = currenttspan.textContent;
			currenttspan.textContent = tv.substring(0,pos) + tv.substring(pos+1,tv.length);
		}

		this.getExtentOfCharAt = function(pos){
			//TODO: wordwrap: we will need to count through the arrays
			return currenttspan.getExtentOfChar(pos)
		}

		this.getTotalNumberOfChars = function(){
			return tspans.map(function(ts){return ts.textContent.length}).reduce(function(l1,l2){return l1+l2})
		}

		this.deleteRange = function(from,to){
			//FIXME, TODO: deal with case of multiple tspans
			var tspan = tspans[0];
			var toReturn = tspan.textContent.substring(from,to)
			tspan.textContent = tspan.textContent.substring(0,from) + tspan.textContent.substring(to) 
			return toReturn
		}

		this.getTextContent = function(){
			return tspans.map(function(ts){return ts.textContent}).reduce(function(l1,l2){return l1+l2})
		}
	}


	//initialization code...
	//if we are starting a new text document, create a line
	//FIXME: for now we just do this
	currentLineIndex = 0;
	new Line(currentLineIndex)

	var cursor = new Cursor();
	
	return {
		makeCursorFat:function(){
			cursor.makeCursorFat();
		},
		makeCursorThin:function(){
			cursor.makeCursorThin();
		},
		updateModeText:function(s){
			modeText.textContent = s; 
		},
		moveLeft:function(){
			cursor.moveLeft()
		},
		moveRight:function(includeRightmostChar){
			cursor.moveRight(includeRightmostChar)
		},
		moveUp:function(){
			cursor.moveUp()
		},
		moveDown:function(){
			cursor.moveDown()
		},
		writeChar:function(c){
			lines[currentLineIndex].writeCharAt(String.fromCharCode(c),cursor.cursorPosition)
			cursor.moveRight(true);
		},
		writeNewLine:function(){
			//delete everything on current line from cursor position to the end
			var currentLine = lines[currentLineIndex];
			var deletedChars = currentLine.deleteRange(cursor.cursorPosition,currentLine.getTotalNumberOfChars())

			//create a new line with this text
			new Line(currentLineIndex+1,deletedChars)
			//cursor.moveDown()

			cursor.moveCursorTo(0,currentLineIndex+1)
		},
		writeBackspace:function(){
			cursor.moveLeft();
			lines[currentLineIndex].writeBackspace(cursor.cursorPosition)
		},
		moveToStartOfNextWord:function(){
			cursor.moveToStartOfNextWord();
		},
		moveToEndOfNextWord:function(){
			cursor.moveToEndOfNextWord();
		},
		moveToStartOfPreviousWord:function(){
			cursor.moveToStartOfPreviousWord();
		},
		moveToStartOfLine:function(){
			cursor.moveCursorTo(0)
		},
		moveToEndOfLine:function(){
			cursor.moveCursorTo(lines[currentLineIndex].getTotalNumberOfChars()-1)
		},
		install:function(sc){
			var scInstance = new sc();
			//start mainloop
			scInstance.initialize();  

			//FIXME: how do we capture <esc>? requires crazy hack? maybe...
			var eventMap = {
				8:  "backspace",
				13: "enter",
				27: "esc",
				37: "left",
				38: "up",
				39: "right",
				40: "down",
			}

			var charCodeEventMap = {
				36: "bling",
				48 : "zero",
				49 : "one",
				50 : "two",
				51 : "three",
				52 : "four"
				
			}

			root.addEventListener("keypress",function(e){
				//console.log(e);
				e.preventDefault();

				if(eventMap[e.keyCode] || charCodeEventMap[e.charCode] ){
					scInstance[eventMap[e.keyCode] || charCodeEventMap[e.charCode]](e)
				}else if(e.charCode){
					scInstance.GEN(String.fromCharCode(e.charCode),e)
				}else{
					console.log("fail",e)
				}
			},true)

			//send init event
			scInstance.init(this);

			/*
			var eventMap = {
				8:  this.writeBackspace,
				13: this.writeNewLine,
				37: this.moveLeft,
				38: this.moveUp,
				39: this.moveRight,
				40: this.moveDown
			}

			var self = this;
			root.addEventListener("keypress",function(e){
				e.preventDefault();
				console.log(e)
				if(eventMap[e.keyCode]){
					eventMap[e.keyCode]()
				}else{
					self.writeChar(e.charCode);
				}
			},true)
			*/
		}
	}
})()
