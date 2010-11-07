svgEditorAPI = (function(){
	var svgNS = "http://www.w3.org/2000/svg";

	var root = document.documentElement;
	var txt = document.getElementById("main")
	var cursor = document.getElementById("cursor")
	var modeText = document.getElementById("mode-text")
	var locationText = document.getElementById("location-text")
	

	//TODO: we need to figure out how to get the width/heigh of each glyph... we could do it by getting the bbox of the next glyph
	
	var cursorPosition = 0;

	//so, the question is, how do we want to encode this? we want to be able to get the bbox of a particular glyph... but i think this is only possible if he lives in his own dom node. really this has a lot to do with the SVG text APIs... whch I don't know very well. i think i should probably just use a fixed-width font to start out... simpler 
	
	//we want to be able to navigate easily between lines. and so it seems the best thing may be to encode stuff in DOM: a tspan for each line (sacrificing the \n character), and the textContent string to allow indexing to a particular character position
	
	
	//TODO: find better way to convert integer to ascii string
	var chars="abcdefghijklmnopqrstuvwxyz";
	function itoa(i){
		return chars[i-97]
	}
	

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
			//TODO: update location text
			cursor.x.baseVal.value-=20;
		},
		moveRight:function(){
			cursor.x.baseVal.value+=20;
		},
		moveUp:function(){
			cursor.y.baseVal.value-=20;
		},
		moveDown:function(){
			cursor.y.baseVal.value+=20;
		},
		writeChar:function(c){
			txt.textContent+=c
		},
		install:function(sc){
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

			/*
			var eventMap = {
				37: this.moveLeft,
				38: this.moveUp,
				39: this.moveRight,
				40: this.moveDown
			}

			root.addEventListener("keypress",function(e){
				if(eventMap[e.keyCode]){
					eventMap[e.keyCode]()
				}else{
					txt.textContent += itoa(e.charCode)
				}
			},true)
			*/
		}
	}
})()
