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
	
	var 	currentLineIndex = 0,		//current line index in lines[]
		currentLine = null;		//current line in lines[]
	
	var lines=[];	//each line is based around a set of tspan elements. a set, because we may want wordwrap later

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
				//var r = currentLine.getExtentOfCharAt(this.cursorPosition)
				//cursor.x.baseVal.value-=r.x;
				//cursor.width.baseVal.value = r.width;
				moveCursor(-1*textExtent.width,0)
			}
		}

		this.moveRight=function(){
			//FIXME: off-by-one error?
			if(this.cursorPosition < currentLine.getTotalNumberOfChars()){
				//var r = currentLine.getExtentOfCharAt(this.cursorPosition)
				this.cursorPosition+=1
				//cursor.x.baseVal.value+=r.x;
				//cursor.width.baseVal.value = r.width;
				moveCursor(textExtent.width,0)
			}
		}

		this.moveUp=function(){
			var nextLine = lines[currentLineIndex-1];
			if(nextLine){

				currentLineIndex-=1;
				currentLine = lines[currentLineIndex];

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
				currentLine = lines[currentLineIndex];

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
			cursorNode.x.baseVal.value = textExtent.width * this.cursorPosition-1; 
			cursorNode.width.baseVal.value = textExtent.width;
		}

		this.makeCursorThin = function(){
			cursorNode.x.baseVal.value = textExtent.width * this.cursorPosition; 
			cursorNode.width.baseVal.value = 1;
		}

		this.moveCursorTo = function(pos,lineNumber){
			moveTo(textExtent.width * this.cursorPosition,lineNumber*textExtent.height)
		}

		this.makeCursorThin();
	}

	function Line(pos){
		var currenttspan = document.createElementNS(svgNS,"tspan");

		if(pos > 0){
			currenttspan.setAttributeNS(null,"dy",textExtent.height);
			currenttspan.setAttributeNS(null,"x",0);
		}
	
		//FIXME: this is wrong. we need to append by the sum(numtspans,0:pos)
		txt.appendChild(currenttspan)
		//set dx as needed

		var tspans = [currenttspan];

		//put him into lines
		lines.splice(pos,0,this);
		
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
	}


	//initialization code...
	//if we are starting a new text document, create a line
	//FIXME: for now we just do this
	currentLineIndex = 0;
	currentLine  = new Line(currentLineIndex)

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
		moveRight:function(){
			cursor.moveRight()
		},
		moveUp:function(){
			cursor.moveUp()
		},
		moveDown:function(){
			cursor.moveDown()
		},
		writeChar:function(c){
			currentLine.writeCharAt(String.fromCharCode(c),cursor.cursorPosition)
			cursor.moveRight();
		},
		writeNewLine:function(){
			new Line(currentLineIndex+1)
			cursor.moveDown()
		},
		writeBackspace:function(){
			cursor.moveLeft();
			currentLine.writeBackspace(cursor.cursorPosition)
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

			root.addEventListener("keypress",function(e){
				//console.log(e);
				e.preventDefault();

				if(eventMap[e.keyCode]){
					scInstance[eventMap[e.keyCode]](e)
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
