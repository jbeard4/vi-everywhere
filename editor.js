function sum(a,b){
	return a + b;
}

function SVGEditor(cursor,modeText,scInstance,rootNode){

	this.makeCursorFat = function(){
		cursor.makeCursorFat();
	};
	this.makeCursorThin = function(){
		cursor.makeCursorThin();
	};
	this.updateModeText = function(s){
		modeText.textContent = s; 
	};
	this.moveLeft = function(){
		cursor.moveLeft()
	};
	this.moveRight = function(includeRightmostChar){
		cursor.moveRight(includeRightmostChar)
	};
	this.moveUp = function(){
		cursor.moveUp()
	};
	this.moveDown = function(){
		cursor.moveDown()
	};
	this.writeChar = function(c){
		cursor.writeChar(c);
	};
	this.writeNewLine = function(){
		cursor.writeNewLine(); 
	};
	this.writeBackspace = function(){
		cursor.writeBackspace();
	};
	this.moveToStartOfNextWord = function(){
		cursor.moveToStartOfNextWord();
	};
	this.moveToEndOfNextWord = function(){
		cursor.moveToEndOfNextWord();
	};
	this.moveToStartOfPreviousWord = function(){
		cursor.moveToStartOfPreviousWord();
	};
	this.moveToStartOfLine = function(){
		cursor.moveCursorTo(0);
	};
	this.moveToEndOfLine = function(){
		cursor.moveToEndOfLine();
	};
	this.moveToLastLineOfDocument = function(){
		//TODO
	};
	this.moveToFirstLineOfDocument = function(){
		//TODO
	};

	this.install = function(sc){

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

		rootNode.addEventListener("keypress",function(e){
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
		rootNode.addEventListener("keypress",function(e){
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

function Cursor(initialColNum,initialRowNum,lineManager,displayManager,cursorNode){
	this.colNum = initialColNum || 0;
	this.rowNum = initialRowNum || 0;

	cursorNode.y.baseVal.value=0;
	cursorNode.width.baseVal.value = displayManager.textExtent.width;


	function moveCursor(dx,dy){
			cursorNode.x.baseVal.value+=dx;
			cursorNode.y.baseVal.value+=dy;
	}

	function moveCursorTo(point){
			cursorNode.x.baseVal.value=point.x;
			cursorNode.y.baseVal.value=point.y;
	}

	this.writeChar = function(c){
		lineManager.getLine(this.rowNum).writeCharAt(String.fromCharCode(c),this.colNum)
		this.moveRight(true);
	};

	this.writeNewLine = function(){
		//delete everything on current line from cursor position to the end
		var currentLine = lineManager.getLine(this.rowNum);
		var deletedChars = currentLine.deleteRange(this.colNum,currentLine.getTotalNumberOfChars())

		//create a new line with this text
		lineManager.createLine(this.rowNum+1,deletedChars)
		//this.moveDown()

		this.moveCursorTo(0,this.rowNum+1)
	};

	this.writeBackspace = function(){
		this.moveLeft();
		lineManager.getLine(this.rowNum).writeBackspace(this.colNum)
	};

	this.moveLeft=function(){
		if(this.colNum > 0){
			this.colNum-=1
			moveCursorTo(lineManager.getCoords(this.colNum,this.rowNum));
		}
	}

	this.moveRight=function(includeRightmostChar){
		//FIXME: off-by-one error?
		var numChars = lineManager.getLine(this.rowNum).getTotalNumberOfChars();
		var condition = includeRightmostChar ? 
			this.colNum < numChars : 
			this.colNum < numChars-1;

		if(condition){
			this.colNum+=1
			moveCursorTo(lineManager.getCoords(this.colNum,this.rowNum));
		}
	}

	this.moveUp=function(){
		var nextLine = lineManager.getLine(this.rowNum-1);
		if(nextLine){

			this.rowNum-=1;

			var numChars = nextLine.getTotalNumberOfChars();
			if( this.colNum < numChars ){
				moveCursorTo(lineManager.getCoords(this.colNum,this.rowNum));
			}else{
				this.colNum = numChars;
				moveCursorTo(lineManager.getCoords(this.colNum,this.rowNum));
			}
		}
	}

	this.moveDown=function(){
		var nextLine = lineManager.getLine(this.rowNum+1);
		if(nextLine){

			this.rowNum+=1;

			var numChars = nextLine.getTotalNumberOfChars();
			if( this.colNum < numChars ){
				moveCursorTo(lineManager.getCoords(this.colNum,this.rowNum));
			}else{
				this.colNum = numChars;
				moveCursorTo(lineManager.getCoords(this.colNum,this.rowNum));
			}
		}
	}

	this.makeCursorFat = function(){
		cursorNode.width.baseVal.value = displayManager.textExtent.width;
	}

	this.makeCursorThin = function(){
		cursorNode.width.baseVal.value = 1;
	}

	this.moveCursorTo = function(pos,lineNumber){
		lineNumber = lineNumber || this.rowNum;	//default to this.rowNum

		var nextLine = lineManager.getLine(this.rowNum);

		//TODO: make sure we are not moving him somewhere illegal
		if(nextLine){ 
			this.colNum = pos;
			this.rowNum = lineNumber;

			moveCursorTo(lineManager.getCoords(this.colNum,this.rowNum));
		}


	}

	this.moveToStartOfNextWord = function(){
		var currentLine = lineManager.getLine(this.rowNum);
		var tc = currentLine.getTextContent()  
		var re = /\b\w/g;

		var match;

		while ((match = re.exec(tc)) && match.index < this.colNum);

		if (match){
			this.moveCursorTo(match.index);
		}else{
			this.moveCursorTo(tc.length-1);	//move cursor to end of line
		}
		
	}

	this.moveToEndOfNextWord = function(){
		var currentLine = lineManager.getLine(this.rowNum);
		var tc = currentLine.getTextContent()  
		var re = /\w\b/g;

		var match;

		while ((match = re.exec(tc)) && match.index < this.colNum);

		if (match){
			this.moveCursorTo(match.index);
		}else{
			this.moveCursorTo(tc.length-1);	//move cursor to end of line
		}
		
	}

	this.moveToStartOfPreviousWord = function(){
		var currentLine = lineManager.getLine(this.rowNum);
		var tc = currentLine.getTextContent()  
		var re = /\b\w/g;

		var matches = [];
		var match;

		while (match = re.exec(tc)){
			matches.push(match)
		}

		var self = this;

		var matchBeforeCursor = matches.filter(function(m){return m.index < self.x}).pop()

		if (matchBeforeCursor){
			this.moveCursorTo(matchBeforeCursor.index);
		}else{
			this.moveCursorTo(0);	//move cursor to start of line
		}
		
	}

	this.moveToEndOfLine = function(){
		this.moveCursorTo(lineManager.getLine(this.rowNum).getTotalNumberOfChars()-1);
	}

	this.makeCursorThin();
}

function LineManager(textNode,displayManager){

	var lines = [];

	this.getLine = function(pos){
		return lines[pos];
	}

	this.deleteLine = function(pos){
		lines[pos].removeFromDOM();
		lines.splice(pos,1);
	}

	this.createLine = function(pos, initialText){

		var lineToInsertBefore = lines[pos];

		//TODO: update params to constructor
		//lineToInsertBefore,initialText,isFirstLine,textNode,displayManager
		var newLine = new Line(lineToInsertBefore,initialText,!pos,textNode,displayManager)

		//put him into lines array
		lines.splice(pos,0,newLine);	
	}
	
	this.getCoords = function(colNum,rowNum){
		var linesExceptCurrent = lines.slice(0,rowNum)
		var heightOflinesExceptCurrent = 
			linesExceptCurrent.
				map(function(line){return line.getTotalHeight()}).
				reduce(sum,0); 

		var coords = lines[rowNum].getCoords(colNum);
		coords.y += heightOflinesExceptCurrent;

		return coords;
	}
}


function Line(lineToInsertBefore,initialText,isFirstLine,textNode,displayManager){

	initialText = initialText || "";

	//TODO: wordwrap the initial text
	var currenttspan = document.createElementNS(svgNS,"tspan");
	currenttspan.textContent = initialText;

	if(!isFirstLine){
		currenttspan.setAttributeNS(null,"dy",displayManager.textExtent.height);
	}
	currenttspan.setAttributeNS(null,"x",0);

	var tspanToInsertBefore = lineToInsertBefore && lineToInsertBefore.getFirstTSpan(); 

	textNode.insertBefore(currenttspan,tspanToInsertBefore);

	var tspans = [currenttspan];

	//public methods

	this.removeFromDOM = function(){
		tspans.forEach(function(tspan){
			textNode.removeChild(tspan);
		});
	}

	this.getFirstTSpan = function(){
		return tspans[0]; 
	}

	this.getCoords = function(colNum){
		var yPos = Math.floor(colNum / displayManager.displayCharWidth);
		var xPos = colNum - (yPos * displayManager.displayCharWidth);

		var y = yPos * displayManager.textExtent.width;
		var x = xPos  * displayManager.textExtent.width;
		return {x:x,y:y};
	}

	this.getTotalHeight = function(){
		//FIXME: use dy instead? or maybe the greater of the two...
		return displayManager.textExtent.height * tspans.length;
	}

	this.writeCharAt = function(c,pos){
		//TODO: wordwrap
		var tv = currenttspan.textContent;
		currenttspan.textContent = tv.substring(0,pos) + c + tv.substring(pos,tv.length);
	}

	this.writeBackspace = function(pos){
		//TODO: wordwrap
		var tv = currenttspan.textContent;
		currenttspan.textContent = tv.substring(0,pos) + tv.substring(pos+1,tv.length);
	}

	this.getTotalNumberOfChars = function(){
		return tspans.map(function(ts){return ts.textContent.length}).reduce(sum,0)
	}

	this.deleteRange = function(from,to){
		//FIXME, TODO: deal with case of multiple tspans
		var tspan = tspans[0];
		var toReturn = tspan.textContent.substring(from,to)
		tspan.textContent = tspan.textContent.substring(0,from) + tspan.textContent.substring(to) 
		return toReturn
	}

	this.getTextContent = function(){
		return tspans.map(function(ts){return ts.textContent}).reduce(sum,"")
	}
}

function DisplayManager(textExtent,displayWidth){
	this.textExtent = textExtent;
	this.displayWidth = displayWidth;

	this.displayCharWidth = displayWidth/textExtent.width;	//derived attribute
}


SVGEditorFactory = {

	//responsible for bootstrapping the system
	createNewSVGEditorInstance : function(rootNode,textNode,cursorNode,modeTextNode,locationTextNode,textExtent,displayWidth){

		var displayManager = new DisplayManager(textExtent,displayWidth);

		var lineManager = new LineManager(textNode,displayManager);

		lineManager.createLine(0); //create the initial line without text content 

		var cursor = new Cursor(0,0,lineManager,displayManager,cursorNode);

		var scInstance = new viBehaviourStatechartExecutionContext();

		var editor = new SVGEditor(cursor,modeTextNode,scInstance,rootNode);

		return editor;
	}
}
