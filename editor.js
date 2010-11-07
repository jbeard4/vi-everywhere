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

		cursorNode.x.baseVal.value=0;
		cursorNode.y.baseVal.value=0;
		cursorNode.height.baseVal.value = textExtent.height;
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
			var nextLine = lines[currentLineIndex+1];
			if(nextLine){

				currentLineIndex+=1;
				currentLine = lines[currentLineIndex];

				var numChars = nextLine.getTotalNumberOfChars();
				if( numChars <= this.cursorPosition){
					//var r = nextLine.getExtentOfCharAt(this.cursorPosition);
					//cursor.x.baseVal.value+=r.x;
					//cursor.width.baseVal.value = r.width;
					//TODO: compute
					//moveCursor(r)
				}else{
					var r = nextLine.getExtentOfCharAt(numChars);
					//TODO: compute
					//moveCursor(r)
				}
			}
		}

		this.moveDown=function(){
			var nextLine = lines[currentLineIndex-1];
			if(nextLine){

				currentLineIndex-=1;
				currentLine = lines[currentLineIndex];

				var numChars = nextLine.getTotalNumberOfChars();
				if( numChars <= this.cursorPosition){
					//var r = nextLine.getExtentOfCharAt(this.cursorPosition);
					//cursor.x.baseVal.value+=r.x;
					//cursor.width.baseVal.value = r.width;
					//TODO: compute
					//moveCursor(r)
				}else{
					//var r = nextLine.getExtentOfCharAt(numChars);
					//TODO: compute
					//moveCursor(r)
				}
			}
		}
	}

	function Line(pos){
		var currenttspan = document.createElementNS(svgNS,"tspan");
	
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
			cursor.width.baseVal.value=20;
		},
		makeCursorThin:function(){
			cursor.width.baseVal.value=1;
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
			//cursor.cursorPosition++
			cursor.moveRight();
		},
		install:function(sc){
			/*
			var scInstance = new sc();
			//start mainloop
			scInstance.initialize();  

			//FIXME: how do we capture <esc>? requires crazy hack? maybe...
			var eventMap = {
				37: "left",
				38: "up",
				39: "right",
				40: "down",
			}

			root.addEventListener("keypress",function(e){
				console.log(e);

				if(eventMap[e.keyCode]){
					scInstance[eventMap[e.keyCode]](e)
				}else if(itoa(e.keyCode)){
					scInstance.GEN(itoa(e.keyCode),e)
				}else{
					console.log("fail")
				}
			},true)

			//send init event
			scInstance.init(this);
			*/

			var eventMap = {
				37: this.moveLeft,
				38: this.moveUp,
				39: this.moveRight,
				40: this.moveDown
			}

			var self = this;
			root.addEventListener("keypress",function(e){
				e.preventDefault();
				if(eventMap[e.keyCode]){
					eventMap[e.keyCode]()
				}else{
					self.writeChar(e.charCode);
				}
			},true)
		}
	}
})()
