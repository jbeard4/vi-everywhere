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
		var line = lineManager.getLine(this.rowNum);
		if(line.getTotalNumberOfChars()){
			this.moveLeft();
			line.writeBackspace(this.colNum);
		}else{
			//we cannot delete the first line
			if(this.rowNum > 0){
				lineManager.deleteLine(this.rowNum);
				this.moveUp();
				this.moveToEndOfLine();
			}
		}
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

	this.moveToEndOfLine=function(){
		this.moveCursorTo(lineManager.getLine(this.rowNum).getTotalNumberOfChars()); 
	}


	this.makeCursorThin();
}

function LineManager(textNode,displayManager){

	var lines = [];

	this.getLine = function(pos){
		return lines[pos];
	}

	this.deleteLine = function(posOrLine){
		var pos = typeof posOrLine == "number" ? posOrLine : lines.indexOf(posOrLine); 

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

	//private vars
	var isEmpty,		//because we are relying on the tspan dy attribute for positioning, "empty" tspans will need to have a single whitespace. 
				//so we can't rely on simply using the length of the textContent to encode emptyness of a line, and need to use a separate
				//variable to keep track of changes in state
		tspans;

	var self = this;

	//private functions
	function init(){

		if(initialText && initialText.length){
			isEmpty = false;
		}else{
			isEmpty = true;
			initialText = " ";
		} 

		//TODO: move this initialization logic into its own function. would be cleaner
		//wordwrap the initial text
		tspans = [];
		do{
			var tmpTspanTxt = initialText.substring(0,displayManager.displayCharWidth);

			var currenttspan = createTspan(tmpTspanTxt);

			tspans.push(currenttspan);

			initialText = initialText.slice(displayManager.displayCharWidth);
		}while(initialText.length)

		var dyIndex = isFirstLine ? 1 : 0;
		tspans.slice(dyIndex).forEach(function(tspan){tspan.setAttributeNS(null,"dy",displayManager.textExtent.height)});

		var tspanToInsertBefore = lineToInsertBefore && lineToInsertBefore.getFirstTSpan(); 

		tspans.reverse().reduce(function(tmpTspanToInsertBefore,currenttspan){
			textNode.insertBefore(currenttspan,tmpTspanToInsertBefore);
			return currenttspan;
		},tspanToInsertBefore); 

		tspans.reverse();	//reverse changes the array, so we need to reverse him back to the right order
	}

	function createTspan(textContent,dy){
			var tspan = document.createElementNS(svgNS,"tspan");
			tspan.setAttributeNS(null,"x",0);
			tspan.textContent = textContent;

			if(dy){
				tspan.setAttributeNS(null,"dy",dy);
			}

			return tspan;
	}

	function deleteTspan(tspan){
		tspans.splice(tspans.indexOf(tspan),1);
		textNode.removeChild(tspan);
	}

	function deleteTspanIfEmpty(tspan){
		if(!tspan.textContent.length){
			deleteTspan(tspan);
		}
	}

	function deleteLastTspanIfEmpty(){
		deleteTspanIfEmpty(self.getLastTSpan());
	}

	function insertTspan(newtspan,tspanToInsertBefore){
		textNode.insertBefore(newtspan,tspanToInsertBefore);
		tspans.push(newtspan); //FIXME: instead of push, I think we need to use splice
	}

	function appendTspan(newtspan){
		var tspanToInsertBefore = self.getLastTSpan().nextSibling;

		insertTspan(newtspan,tspanToInsertBefore);
	}

	function wrapSingleChar(yPos){
		//apply wordwrap to all following rows by taking the first character of the next line and adding it to the end of the current line
		var charToAddToCurrentLine,tspanToUpdate,nextTspan;
		for(var i=yPos,l=tspans.length;i<l-1;i++){
			tspanToUpdate = tspans[i];
			nextTspan = tspans[i+1];
			charToAddToCurrentLine = nextTspan.textContent[0] || ""; 

			tspanToUpdate.textContent = tspanToUpdate.textContent + charToAddToCurrentLine;
			nextTspan.textContent = nextTspan.textContent.substring(1);
		}
	}

	//call init
	init();

	//public methods

	this.removeFromDOM = function(){
		tspans.forEach(function(tspan){
			textNode.removeChild(tspan);
		});
	}

	this.getFirstTSpan = function(){
		return tspans[0]; 
	}

	this.getLastTSpan = function(){
		return tspans[tspans.length-1]; 
	}

	this.getCoords = function(colNum){
		var yPos = Math.floor(colNum / displayManager.displayCharWidth);
		var xPos = colNum - (yPos * displayManager.displayCharWidth);
		console.log("ypos :", yPos )
		console.log("xpos :", xPos )

		var y = yPos * displayManager.textExtent.height;
		var x = xPos  * displayManager.textExtent.width;
		return {x:x,y:y};
	}

	this.getTotalHeight = function(){
		//FIXME: use dy instead? or maybe the greater of the two...
		return displayManager.textExtent.height * tspans.length;
	}

	this.writeCharAt = function(c,pos){
		//get the tspan where the cursor is at, and see if we've exceed the acceptable number of characters
		var yPos = Math.floor(pos / displayManager.displayCharWidth);
		var xPos = pos - (yPos * displayManager.displayCharWidth);

		var currenttspan = tspans[yPos];

		if(currenttspan === undefined){
			//create new tspan if we're starting a new line
			var newtspan = createTspan("",displayManager.textExtent.height);

			appendTspan(newtspan);

			currenttspan = newtspan;
		}

		var tv = isEmpty ? "" : currenttspan.textContent;
		currenttspan.textContent = tv.substring(0,xPos) + c + tv.substring(xPos,tv.length);

		//update isEmpty
		isEmpty = false;

		if(currenttspan.textContent.length > displayManager.displayCharWidth){
			//apply wordwrap if needed... actually letterwrap, as is currently done in vim
			//insert the character, then take the last character, and move him to the front of the next line. continue this for all other lines

			//check whether last line is full. if so, add a new tspan element to the end
			if(this.getLastTSpan().textContent.length+1 > displayManager.displayCharWidth){

				var newtspan = createTspan("",displayManager.textExtent.height);

				appendTspan(newtspan);
			}

			var charToAddToNextLine,tspanToUpdate;
			for(var i=yPos,l=tspans.length;i<l-1;i++){
				tspanToUpdate = tspans[i];

				//update text
				if(charToAddToNextLine){
					tspanToUpdate.textContent = charToAddToNextLine + tspanToUpdate.textContent;
				}

				var tc = tspanToUpdate.textContent;
				charToAddToNextLine = tc[tc.length-1];
				tspanToUpdate.textContent = tc.slice(0,tc.length-1);
			}

			tspanToUpdate = this.getLastTSpan();
			if(charToAddToNextLine){
				tspanToUpdate.textContent = charToAddToNextLine + tspanToUpdate.textContent;
			}

		}	
	}

	this.writeBackspace = function(pos){
		var yPos = Math.floor(pos / displayManager.displayCharWidth);
		var xPos = pos - (yPos * displayManager.displayCharWidth);

		var currenttspan = tspans[yPos];

		var tv = currenttspan.textContent;
		currenttspan.textContent = tv.substring(0,xPos) + tv.substring(xPos+1,tv.length);

		wrapSingleChar(yPos);

		var tspanToInsertBefore = this.getLastTSpan().nextSibling;

		deleteLastTspanIfEmpty();

		//if we have deleted all tspans, create new tspan, update isEmpty
		if(!tspans.length){

			var currenttspan = createTspan(" ");

			insertTspan(currenttspan,tspanToInsertBefore);

			isEmpty = true;
		}
	
	}

	this.getTotalNumberOfChars = function(){
		return isEmpty ? 0 : tspans.map(function(ts){return ts.textContent.length}).reduce(sum,0);
	}

	this.deleteRange = function(from,to){
		//up to, but not including "from" (like Array.slice or String.substring)
		//but does include "to"

		var totalNumChars = this.getTotalNumberOfChars();

		//FIXME: off by one error?
		var yPosFrom = totalNumChars == from ? tspans.length-1 : Math.floor(from / displayManager.displayCharWidth);
		var xPosFrom = from - (yPosFrom * displayManager.displayCharWidth);
		var currenttspanFrom = tspans[yPosFrom];

		var yPosTo = totalNumChars == to ? tspans.length-1 : Math.floor(to / displayManager.displayCharWidth);
		var xPosTo = to - (yPosTo * displayManager.displayCharWidth);
		var currenttspanTo = tspans[yPosTo];

		if(currenttspanTo === undefined){
			throw new Error("currenttspanTo is undefined");
		}

		//compute return value
		var toReturn;

		if(currenttspanFrom === currenttspanTo){
			var tspan = currenttspanFrom;
			toReturn = tspan.textContent.substring(xPosFrom,xPosTo);
			tspan.textContent = tspan.textContent.substring(0,xPosFrom) + tspan.textContent.substring(xPosTo); 
		}else{
			//remove all middle tspans
			var middleTspans = tspans.splice(yPosFrom+1,yPosTo-1 - yPosFrom);
			middleTspans.forEach(function(tspan){textNode.removeChild(tspan)});

			toReturn = "";
			toReturn += currenttspanFrom.textContent.substring(xPosFrom);
			toReturn += middleTspans.map(function(tspan){return tspan.textContent}).reduce(sum,"");
			toReturn += currenttspanTo.textContent.substring(0,xPosTo);

			//alter text on currenttspanFrom by slicing xPosFrom:
			currenttspanFrom.textContent = currenttspanFrom.textContent.substring(0,xPosFrom);

			//alter text on currenttspanTo by slicing :xPosTo
			currenttspanTo.textContent = currenttspanTo.textContent.substring(xPosTo);

			deleteTspanIfEmpty(currenttspanTo);

		}


		//then perform wordwrap... but we can't assume only one character has been deleted. 
		//have to do it for as many characters as have been deleted, or until until it is in a legal configuration
		while(!tspans.slice(0,-1).every(function(tspan){return tspan.textContent.length === displayManager.displayCharWidth})){
			
			wrapSingleChar(yPosFrom);

			//delete last tspan if it is empty
			deleteLastTspanIfEmpty();
		}

		//TODO: update isEmpty
		if(tspans[0].textContent.length === 0){
			tspans[0].textContent = " ";
			isEmpty = true;
		}
		
		return toReturn;
	}

	this.getTextContent = function(){
		return isEmpty ? "" : tspans.map(function(ts){return ts.textContent}).reduce(sum,"")
	}
}

function DisplayManager(textExtent,displayWidth){
	this.textExtent = textExtent;
	this.displayWidth = displayWidth;

	this.displayCharWidth = Math.floor(displayWidth/textExtent.width);	//derived attribute
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
