

		function viBehaviourStatechartExecutionContext(){

				var self = this;	//used in the rare occasions we call public functions from inside this class

				//system variable declarations
				var _event = { name : undefined, data : undefined }, 
					_name = "viBehaviour", 
					_sessionid; 

				var _x = {
					_event : _event,
					_name : _name,
					_sessionid : _sessionid 
				};

				//variable declarations relating to data model
				
		var controller;
	
				//send timeout id variables
				

		var $default_Regexp_id2429398 = /^($default)/
				,
				init_Regexp_id2429407 = /^(init)/
				,
				bling_Regexp_id2429412 = /^(bling)/
				,
				backspace_Regexp_id2429418 = /^(backspace)/
				,
				enter_Regexp_id2429424 = /^(enter)/
				,
				colon_Regexp_id2429429 = /^(colon)/
				,
				w_Regexp_id2429435 = /^(w)/
				,
				e_Regexp_id2429440 = /^(e)/
				,
				b_Regexp_id2429446 = /^(b)/
				,
				zero_Regexp_id2429452 = /^(zero)/
				,
				h_Regexp_id2429457 = /^(h)/
				,
				l_Regexp_id2429463 = /^(l)/
				,
				k_Regexp_id2429468 = /^(k)/
				,
				j_Regexp_id2429474 = /^(j)/
				,
				left_Regexp_id2429480 = /^(left)/
				,
				right_Regexp_id2429486 = /^(right)/
				,
				up_Regexp_id2429491 = /^(up)/
				,
				down_Regexp_id2429497 = /^(down)/
				,
				v_Regexp_id2429502 = /^(v)/
				,
				V_Regexp_id2429508 = /^(V)/
				,
				ctrl_v_Regexp_id2429514 = /^(ctrl_v)/
				,
				i_Regexp_id2429519 = /^(i)/
				,
				a_Regexp_id2429525 = /^(a)/
				,
				esc_Regexp_id2429530 = /^(esc)/
				,
				star_Regexp_id2429536 = /.*/
				,
				ctrl_g_Regexp_id2429542 = /^(ctrl_g)/
				,
				y_Regexp_id2429547 = /^(y)/
				;
				

				//abstract state
				

		var AbstractState = new function(){
			//triggers are methods

			
				this.$default = function(){};
			
				this.init = function(){};
			
				this.bling = function(){};
			
				this.backspace = function(){};
			
				this.enter = function(){};
			
				this.colon = function(){};
			
				this.w = function(){};
			
				this.e = function(){};
			
				this.b = function(){};
			
				this.zero = function(){};
			
				this.h = function(){};
			
				this.l = function(){};
			
				this.k = function(){};
			
				this.j = function(){};
			
				this.left = function(){};
			
				this.right = function(){};
			
				this.up = function(){};
			
				this.down = function(){};
			
				this.v = function(){};
			
				this.V = function(){};
			
				this.ctrl_v = function(){};
			
				this.i = function(){};
			
				this.a = function(){};
			
				this.ctrl_g = function(){};
			
				this.y = function(){};
			
				this.esc = function(){};
			

			this.$default = function(){};

			this.$dispatchPrefixEvent = function(){};
		}
	

				//states
				

		var scxml_id2419154 = (function(){

			function scxml_id2419154Constructor(){
				this.parent = AbstractState;

				this.initial = null;

				this.depth = 0;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "scxml_id2419154"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("scxml_id2419154");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2420179_iterator=0, 
			id2420179_hoist=listeners.length;
				id2420179_iterator < id2420179_hoist;
				id2420179_iterator++){
			var listener = listeners[id2420179_iterator];

			
								//from
								listener.onExit("scxml_id2419154");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return AbstractState.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			scxml_id2419154Constructor.prototype = AbstractState;
			return new scxml_id2419154Constructor();
		})();

	

		var _initial = (function(){

			function _initialConstructor(){
				this.parent = scxml_id2419154;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "_initial"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2420602_iterator=0, 
			id2420602_hoist=listeners.length;
				id2420602_iterator < id2420602_hoist;
				id2420602_iterator++){
			var listener = listeners[id2420602_iterator];

			
								//from
								listener.onExit("_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					_initial.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"initial_default",
									"_initial_$default_1" );
							
		}
	
	
					//enter states
					initial_default.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			initial_default
		]; 
	
			}
		}

		

			return scxml_id2419154['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2419154.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			_initialConstructor.prototype = scxml_id2419154;
			return new _initialConstructor();
		})();

	

		var initial_default = (function(){

			function initial_defaultConstructor(){
				this.parent = scxml_id2419154;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
					];
				
				
				this.toString = function(){
					return "initial_default"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("initial_default");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2419960_iterator=0, 
			id2419960_hoist=listeners.length;
				id2419960_iterator < id2419960_hoist;
				id2419960_iterator++){
			var listener = listeners[id2419960_iterator];

			
								//from
								listener.onExit("initial_default");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"initial_default_init_2" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2419154['init']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(init_Regexp_id2429407)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"initial_default",
									"normal_mode",
									"initial_default_init_2" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return scxml_id2419154.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			initial_defaultConstructor.prototype = scxml_id2419154;
			return new initial_defaultConstructor();
		})();

	

		var normal_mode = (function(){

			function normal_modeConstructor(){
				this.parent = scxml_id2419154;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
					];
				
				
				this.toString = function(){
					return "normal_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorFat();
				controller.updateModeText("-- NORMAL --")
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("normal_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2422650_iterator=0, 
			id2422650_hoist=listeners.length;
				id2422650_iterator < id2422650_hoist;
				id2422650_iterator++){
			var listener = listeners[id2422650_iterator];

			
								//from
								listener.onExit("normal_mode");
							
		}
	
	
				}

				

		this.bling = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['bling']();
		}
	

		this.backspace = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['backspace']();
		}
	

		this.enter = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['enter']();
		}
	

		this.colon = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"command_mode",
									"normal_mode_colon_3" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			command_mode
		]; 
	
			}
		}

		

			return scxml_id2419154['colon']();
		}
	

		this.w = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['w']();
		}
	

		this.e = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['e']();
		}
	

		this.b = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['b']();
		}
	

		this.zero = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['zero']();
		}
	

		this.h = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['h']();
		}
	

		this.l = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['l']();
		}
	

		this.k = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['k']();
		}
	

		this.j = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['j']();
		}
	

		this.left = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['left']();
		}
	

		this.right = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['right']();
		}
	

		this.up = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['up']();
		}
	

		this.down = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['down']();
		}
	

		this.v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"normal_mode_v_4" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

		

			return scxml_id2419154['v']();
		}
	

		this.V = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"normal_mode_V_5" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

		

			return scxml_id2419154['V']();
		}
	

		this.ctrl_v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"normal_mode_ctrl_v_6" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

		

			return scxml_id2419154['ctrl_v']();
		}
	

		this.i = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_i_7" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2419154['i']();
		}
	

		this.a = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				
				controller.moveRight(true);
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_a_8" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2419154['a']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(bling_Regexp_id2429412)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_Regexp_id2429418)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_Regexp_id2429424)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_Regexp_id2429429)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"command_mode",
									"normal_mode_colon_3" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			command_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(w_Regexp_id2429435)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_Regexp_id2429440)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_Regexp_id2429446)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(zero_Regexp_id2429452)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_Regexp_id2429457)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_Regexp_id2429463)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_Regexp_id2429468)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_Regexp_id2429474)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(left_Regexp_id2429480)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_Regexp_id2429486)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_Regexp_id2429491)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_Regexp_id2429497)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(v_Regexp_id2429502)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_character",
									"normal_mode_v_4" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(V_Regexp_id2429508)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_line",
									"normal_mode_V_5" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_v_Regexp_id2429514)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_block",
									"normal_mode_ctrl_v_6" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(i_Regexp_id2429519)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_i_7" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(a_Regexp_id2429525)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				
				controller.moveRight(true);
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_a_8" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
				}
				

			return scxml_id2419154.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			normal_modeConstructor.prototype = scxml_id2419154;
			return new normal_modeConstructor();
		})();

	

		var visual_or_select_mode = (function(){

			function visual_or_select_modeConstructor(){
				this.parent = scxml_id2419154;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "visual_or_select_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorFat();
				controller.startSelection(); 
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					
				controller.clearSelection(); 
			

		for(var id2422578_iterator=0, 
			id2422578_hoist=listeners.length;
				id2422578_iterator < id2422578_hoist;
				id2422578_iterator++){
			var listener = listeners[id2422578_iterator];

			
								//from
								listener.onExit("visual_or_select_mode");
							
		}
	
	
				}

				

		this.left = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['left']();
		}
	

		this.right = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['right']();
		}
	

		this.up = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['up']();
		}
	

		this.down = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['down']();
		}
	

		this.esc = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_or_select_mode_esc_10" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2419154['esc']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(left_Regexp_id2429480)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_Regexp_id2429486)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_Regexp_id2429491)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_Regexp_id2429497)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(esc_Regexp_id2429530)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_or_select_mode",
									"normal_mode",
									"visual_or_select_mode_esc_10" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return scxml_id2419154.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_or_select_modeConstructor.prototype = scxml_id2419154;
			return new visual_or_select_modeConstructor();
		})();

	

		var visual_or_select_mode_initial = (function(){

			function visual_or_select_mode_initialConstructor(){
				this.parent = visual_or_select_mode;

				this.initial = null;

				this.depth = 2;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "visual_or_select_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2421143_iterator=0, 
			id2421143_hoist=listeners.length;
				id2421143_iterator < id2421143_hoist;
				id2421143_iterator++){
			var listener = listeners[id2421143_iterator];

			
								//from
								listener.onExit("visual_or_select_mode_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					visual_or_select_mode_initial.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_mode_initial",
									"visual_or_select_mode_initial_$default_9" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_mode_initial.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_mode_initial
		]; 
	
			}
		}

		

			return visual_or_select_mode['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return visual_or_select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_or_select_mode_initialConstructor.prototype = visual_or_select_mode;
			return new visual_or_select_mode_initialConstructor();
		})();

	

		var select_mode = (function(){

			function select_modeConstructor(){
				this.parent = visual_or_select_mode;

				this.initial = null;

				this.depth = 2;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "select_mode"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2421463_iterator=0, 
			id2421463_hoist=listeners.length;
				id2421463_iterator < id2421463_hoist;
				id2421463_iterator++){
			var listener = listeners[id2421463_iterator];

			
								//from
								listener.onExit("select_mode");
							
		}
	
	
				}

				

		this.init = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['init']();
		}
	

		this.bling = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['bling']();
		}
	

		this.backspace = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['backspace']();
		}
	

		this.enter = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['enter']();
		}
	

		this.colon = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['colon']();
		}
	

		this.w = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['w']();
		}
	

		this.e = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['e']();
		}
	

		this.b = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['b']();
		}
	

		this.zero = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['zero']();
		}
	

		this.h = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['h']();
		}
	

		this.l = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['l']();
		}
	

		this.k = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['k']();
		}
	

		this.j = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['j']();
		}
	

		this.left = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['left']();
		}
	

		this.right = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['right']();
		}
	

		this.up = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['up']();
		}
	

		this.down = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['down']();
		}
	

		this.v = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['v']();
		}
	

		this.V = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['V']();
		}
	

		this.ctrl_v = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['ctrl_v']();
		}
	

		this.i = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['i']();
		}
	

		this.a = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['a']();
		}
	

		this.ctrl_g = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['ctrl_g']();
		}
	

		this.y = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['y']();
		}
	

		this.esc = function(){

			
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return visual_or_select_mode['esc']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2429536)
					
						&& _event.data.charCode !== 0){
					
				if(_event.data.charCode !== 0){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					//TODO: delete text in selection, replace with event data
					var c = String.fromCharCode(_event.data.charCode);
					alert("replaced text with " + c);
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_mode",
									"normal_mode",
									"select_mode_*_12" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
			
				}
				

			return visual_or_select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			select_modeConstructor.prototype = visual_or_select_mode;
			return new select_modeConstructor();
		})();

	

		var select_mode_initial = (function(){

			function select_mode_initialConstructor(){
				this.parent = select_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							select_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "select_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2421471_iterator=0, 
			id2421471_hoist=listeners.length;
				id2421471_iterator < id2421471_hoist;
				id2421471_iterator++){
			var listener = listeners[id2421471_iterator];

			
								//from
								listener.onExit("select_mode_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					select_mode_initial.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_mode_initial_$default_11" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

		

			return select_mode['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			select_mode_initialConstructor.prototype = select_mode;
			return new select_mode_initialConstructor();
		})();

	

		var select_line = (function(){

			function select_lineConstructor(){
				this.parent = select_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							select_mode
					];
				
				
				this.toString = function(){
					return "select_line"
				}

				this.enterAction = function(){
					
						controller.updateModeText("-- SELECT LINE --")
						controller.setSelectionMode(controller.SELECTION_MODE.LINE);
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("select_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2421630_iterator=0, 
			id2421630_hoist=listeners.length;
				id2421630_iterator < id2421630_hoist;
				id2421630_iterator++){
			var listener = listeners[id2421630_iterator];

			
								//from
								listener.onExit("select_line");
							
		}
	
	
				}

				

		this.v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_line_v_14" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

		

			return select_mode['v']();
		}
	

		this.ctrl_v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"select_line_ctrl_v_13" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

		

			return select_mode['ctrl_v']();
		}
	

		this.ctrl_g = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_line.exitAction();
							select_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"select_line_ctrl_g_15" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

		

			return select_mode['ctrl_g']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_Regexp_id2429514)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"select_block",
									"select_line_ctrl_v_13" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(v_Regexp_id2429502)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"select_character",
									"select_line_v_14" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_Regexp_id2429542)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_line.exitAction();
							select_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"visual_line",
									"select_line_ctrl_g_15" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

	
				}
				

			return select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			select_lineConstructor.prototype = select_mode;
			return new select_lineConstructor();
		})();

	

		var select_block = (function(){

			function select_blockConstructor(){
				this.parent = select_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							select_mode
					];
				
				
				this.toString = function(){
					return "select_block"
				}

				this.enterAction = function(){
					
						controller.updateModeText("-- SELECT BLOCK --")
						controller.setSelectionMode(controller.SELECTION_MODE.BLOCK);
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("select_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2423833_iterator=0, 
			id2423833_hoist=listeners.length;
				id2423833_iterator < id2423833_hoist;
				id2423833_iterator++){
			var listener = listeners[id2423833_iterator];

			
								//from
								listener.onExit("select_block");
							
		}
	
	
				}

				

		this.v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_block_v_16" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

		

			return select_mode['v']();
		}
	

		this.V = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"select_block_V_17" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

		

			return select_mode['V']();
		}
	

		this.ctrl_g = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_block.exitAction();
							select_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"select_block_ctrl_g_18" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

		

			return select_mode['ctrl_g']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(v_Regexp_id2429502)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"select_character",
									"select_block_v_16" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(V_Regexp_id2429508)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"select_line",
									"select_block_V_17" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_Regexp_id2429542)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_block.exitAction();
							select_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"visual_block",
									"select_block_ctrl_g_18" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

	
				}
				

			return select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			select_blockConstructor.prototype = select_mode;
			return new select_blockConstructor();
		})();

	

		var select_character = (function(){

			function select_characterConstructor(){
				this.parent = select_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							select_mode
					];
				
				
				this.toString = function(){
					return "select_character"
				}

				this.enterAction = function(){
					
						controller.updateModeText("-- SELECT --")
						controller.setSelectionMode(controller.SELECTION_MODE.CHARACTER);
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("select_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2424109_iterator=0, 
			id2424109_hoist=listeners.length;
				id2424109_iterator < id2424109_hoist;
				id2424109_iterator++){
			var listener = listeners[id2424109_iterator];

			
								//from
								listener.onExit("select_character");
							
		}
	
	
				}

				

		this.V = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"select_character_V_20" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

		

			return select_mode['V']();
		}
	

		this.ctrl_v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"select_character_ctrl_v_19" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

		

			return select_mode['ctrl_v']();
		}
	

		this.ctrl_g = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_character.exitAction();
							select_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"select_character_ctrl_g_21" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

		

			return select_mode['ctrl_g']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_Regexp_id2429514)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"select_block",
									"select_character_ctrl_v_19" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(V_Regexp_id2429508)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"select_line",
									"select_character_V_20" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_Regexp_id2429542)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_character.exitAction();
							select_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"visual_character",
									"select_character_ctrl_g_21" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

	
				}
				

			return select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			select_characterConstructor.prototype = select_mode;
			return new select_characterConstructor();
		})();

	

		var visual_mode = (function(){

			function visual_modeConstructor(){
				this.parent = visual_or_select_mode;

				this.initial = null;

				this.depth = 2;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "visual_mode"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("visual_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2427019_iterator=0, 
			id2427019_hoist=listeners.length;
				id2427019_iterator < id2427019_hoist;
				id2427019_iterator++){
			var listener = listeners[id2427019_iterator];

			
								//from
								listener.onExit("visual_mode");
							
		}
	
	
				}

				

		this.bling = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['bling']();
		}
	

		this.backspace = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['backspace']();
		}
	

		this.enter = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['enter']();
		}
	

		this.colon = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"command_mode",
									"visual_mode_colon_24" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			command_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['colon']();
		}
	

		this.w = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['w']();
		}
	

		this.e = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['e']();
		}
	

		this.b = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['b']();
		}
	

		this.zero = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['zero']();
		}
	

		this.h = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['h']();
		}
	

		this.l = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['l']();
		}
	

		this.k = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['k']();
		}
	

		this.j = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['j']();
		}
	

		this.y = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.copySelectedTextIntoRegister();  
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_y_23" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['y']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(y_Regexp_id2429547)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.copySelectedTextIntoRegister();  
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_y_23" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(bling_Regexp_id2429412)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_Regexp_id2429418)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_Regexp_id2429424)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_Regexp_id2429429)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = scxml_id2419154;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2426860_iterator=0, 
			id2426860_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2426860_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2426860_iterator=0, 
			id2426860_hoist=statesExited.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = statesExited[id2426860_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"command_mode",
									"visual_mode_colon_24" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			command_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(w_Regexp_id2429435)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_Regexp_id2429440)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_Regexp_id2429446)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(zero_Regexp_id2429452)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_Regexp_id2429457)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_Regexp_id2429463)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_Regexp_id2429468)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_Regexp_id2429474)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return visual_or_select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_modeConstructor.prototype = visual_or_select_mode;
			return new visual_modeConstructor();
		})();

	

		var visual_mode_initial = (function(){

			function visual_mode_initialConstructor(){
				this.parent = visual_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							visual_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "visual_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("visual_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2428679_iterator=0, 
			id2428679_hoist=listeners.length;
				id2428679_iterator < id2428679_hoist;
				id2428679_iterator++){
			var listener = listeners[id2428679_iterator];

			
								//from
								listener.onExit("visual_mode_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					visual_mode_initial.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_mode_initial_$default_22" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

		

			return visual_mode['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return visual_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_mode_initialConstructor.prototype = visual_mode;
			return new visual_mode_initialConstructor();
		})();

	

		var visual_line = (function(){

			function visual_lineConstructor(){
				this.parent = visual_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							visual_mode
					];
				
				
				this.toString = function(){
					return "visual_line"
				}

				this.enterAction = function(){
					
						controller.updateModeText("-- VISUAL LINE --")
						controller.setSelectionMode(controller.SELECTION_MODE.LINE);
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("visual_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2429011_iterator=0, 
			id2429011_hoist=listeners.length;
				id2429011_iterator < id2429011_hoist;
				id2429011_iterator++){
			var listener = listeners[id2429011_iterator];

			
								//from
								listener.onExit("visual_line");
							
		}
	
	
				}

				

		this.v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_line_v_26" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

		

			return visual_mode['v']();
		}
	

		this.ctrl_v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"visual_line_ctrl_v_25" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

		

			return visual_mode['ctrl_v']();
		}
	

		this.ctrl_g = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_line.exitAction();
							visual_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"visual_line_ctrl_g_27" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

		

			return visual_mode['ctrl_g']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_Regexp_id2429514)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"visual_block",
									"visual_line_ctrl_v_25" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(v_Regexp_id2429502)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_line.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"visual_character",
									"visual_line_v_26" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_Regexp_id2429542)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_line.exitAction();
							visual_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"select_line",
									"visual_line_ctrl_g_27" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

	
				}
				

			return visual_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_lineConstructor.prototype = visual_mode;
			return new visual_lineConstructor();
		})();

	

		var visual_block = (function(){

			function visual_blockConstructor(){
				this.parent = visual_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							visual_mode
					];
				
				
				this.toString = function(){
					return "visual_block"
				}

				this.enterAction = function(){
					
						controller.updateModeText("-- VISUAL BLOCK --")
						controller.setSelectionMode(controller.SELECTION_MODE.BLOCK);
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("visual_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2429289_iterator=0, 
			id2429289_hoist=listeners.length;
				id2429289_iterator < id2429289_hoist;
				id2429289_iterator++){
			var listener = listeners[id2429289_iterator];

			
								//from
								listener.onExit("visual_block");
							
		}
	
	
				}

				

		this.v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_block_v_28" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

		

			return visual_mode['v']();
		}
	

		this.V = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"visual_block_V_29" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

		

			return visual_mode['V']();
		}
	

		this.ctrl_g = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_block.exitAction();
							visual_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"visual_block_ctrl_g_30" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

		

			return visual_mode['ctrl_g']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(v_Regexp_id2429502)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"visual_character",
									"visual_block_v_28" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(V_Regexp_id2429508)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_block.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"visual_line",
									"visual_block_V_29" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_Regexp_id2429542)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_block.exitAction();
							visual_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"select_block",
									"visual_block_ctrl_g_30" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

	
				}
				

			return visual_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_blockConstructor.prototype = visual_mode;
			return new visual_blockConstructor();
		})();

	

		var visual_character = (function(){

			function visual_characterConstructor(){
				this.parent = visual_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
								,
							visual_or_select_mode
								,
							visual_mode
					];
				
				
				this.toString = function(){
					return "visual_character"
				}

				this.enterAction = function(){
					
						controller.updateModeText("-- VISUAL --")
						controller.setSelectionMode(controller.SELECTION_MODE.CHARACTER);
					

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("visual_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2430000_iterator=0, 
			id2430000_hoist=listeners.length;
				id2430000_iterator < id2430000_hoist;
				id2430000_iterator++){
			var listener = listeners[id2430000_iterator];

			
								//from
								listener.onExit("visual_character");
							
		}
	
	
				}

				

		this.V = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"visual_character_V_32" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

		

			return visual_mode['V']();
		}
	

		this.ctrl_v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"visual_character_ctrl_v_31" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

		

			return visual_mode['ctrl_v']();
		}
	

		this.ctrl_g = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_character.exitAction();
							visual_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"visual_character_ctrl_g_33" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

		

			return visual_mode['ctrl_g']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_Regexp_id2429514)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"visual_block",
									"visual_character_ctrl_v_31" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(V_Regexp_id2429508)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_character.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"visual_line",
									"visual_character_V_32" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_Regexp_id2429542)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_character.exitAction();
							visual_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"select_character",
									"visual_character_ctrl_g_33" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

	
				}
				

			return visual_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_characterConstructor.prototype = visual_mode;
			return new visual_characterConstructor();
		})();

	

		var insert_mode = (function(){

			function insert_modeConstructor(){
				this.parent = scxml_id2419154;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
					];
				
				
				this.toString = function(){
					return "insert_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorThin()
				controller.updateModeText("-- INSERT --")
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("insert_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2430604_iterator=0, 
			id2430604_hoist=listeners.length;
				id2430604_iterator < id2430604_hoist;
				id2430604_iterator++){
			var listener = listeners[id2430604_iterator];

			
								//from
								listener.onExit("insert_mode");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['init']();
		}
	

		this.bling = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['bling']();
		}
	

		this.backspace = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeBackspace()
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['backspace']();
		}
	

		this.enter = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeNewLine()
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['enter']();
		}
	

		this.colon = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['colon']();
		}
	

		this.w = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['w']();
		}
	

		this.e = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['e']();
		}
	

		this.b = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['b']();
		}
	

		this.zero = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['zero']();
		}
	

		this.h = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['h']();
		}
	

		this.l = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['l']();
		}
	

		this.k = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['k']();
		}
	

		this.j = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['j']();
		}
	

		this.left = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['left']();
		}
	

		this.right = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['right']();
		}
	

		this.up = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['up']();
		}
	

		this.down = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['down']();
		}
	

		this.v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['v']();
		}
	

		this.V = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['V']();
		}
	

		this.ctrl_v = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['ctrl_v']();
		}
	

		this.i = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['i']();
		}
	

		this.a = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['a']();
		}
	

		this.ctrl_g = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['ctrl_g']();
		}
	

		this.y = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['y']();
		}
	

		this.esc = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					insert_mode.exitAction();
							

				//transition action
				
				controller.moveLeft()
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"insert_mode_esc_34" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2419154['esc']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(left_Regexp_id2429480)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_Regexp_id2429486)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_Regexp_id2429491)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_Regexp_id2429497)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(esc_Regexp_id2429530)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					insert_mode.exitAction();
							

				//transition action
				
				controller.moveLeft()
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"normal_mode",
									"insert_mode_esc_34" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(enter_Regexp_id2429424)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeNewLine()
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_Regexp_id2429418)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeBackspace()
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2429536)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return scxml_id2419154.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			insert_modeConstructor.prototype = scxml_id2419154;
			return new insert_modeConstructor();
		})();

	

		var command_mode = (function(){

			function command_modeConstructor(){
				this.parent = scxml_id2419154;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2419154
					];
				
				
				this.toString = function(){
					return "command_mode"
				}

				this.enterAction = function(){
					
				controller.updateModeText("-- COMMAND --")
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
								//to
								listener.onEntry("command_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2430888_iterator=0, 
			id2430888_hoist=listeners.length;
				id2430888_iterator < id2430888_hoist;
				id2430888_iterator++){
			var listener = listeners[id2430888_iterator];

			
								//from
								listener.onExit("command_mode");
							
		}
	
	
				}

				

		this.esc = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"command_mode_esc_35" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2419154['esc']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_Regexp_id2429530)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=listeners.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var listener = listeners[id2426860_iterator];

			
							//transition id
							
								listener.onTransition(
									"command_mode",
									"normal_mode",
									"command_mode_esc_35" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

	
				}
				

			return scxml_id2419154.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			command_modeConstructor.prototype = scxml_id2419154;
			return new command_modeConstructor();
		})();

	

		
				//states enum for glass-box unit testing
				

		this._states = {
			_initial : _initial,initial_default : initial_default,normal_mode : normal_mode,visual_or_select_mode_initial : visual_or_select_mode_initial,select_mode_initial : select_mode_initial,select_line : select_line,select_block : select_block,select_character : select_character,visual_mode_initial : visual_mode_initial,visual_line : visual_line,visual_block : visual_block,visual_character : visual_character,insert_mode : insert_mode,command_mode : command_mode
		}

	

				//trigger methods for synchronous interaction
				

		this["$default"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"$default"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["init"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"init"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["bling"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"bling"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["backspace"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"backspace"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["enter"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"enter"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["colon"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"colon"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["w"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"w"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["e"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"e"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["b"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"b"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["zero"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"zero"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["h"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"h"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["l"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"l"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["k"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"k"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["j"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"j"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["left"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"left"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["right"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"right"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["up"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"up"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["down"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"down"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["v"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"v"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["V"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"V"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["ctrl_v"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"ctrl_v"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["i"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"i"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["a"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"a"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["esc"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"esc"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["ctrl_g"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"ctrl_g"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["y"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"y"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

				//initialization script
				

				//initialization method
				
 
		this.initialize = function(){
			currentConfiguration = [initial_default];
			runToCompletion();
			mainLoop();
		}

	

				//internal runtime functions
				
		function sortByDepthDeepToShallow(a,b){
			return b.depth - a.depth;
		}
	

				//start static boilerplate code
				
		//static private member variables
		var currentConfiguration = []; //current configuration
		var innerEventQueue = []; //inner event queue
		var outerEventQueue = []; //outer event queue
		var isInStableState = true;
		var hasTakenDefaultTransition = false;
		var destroyed = false;
		var mainLoopCallback = null;

		//static private member functions
		function mainLoop() {

			if(!destroyed){
				//take an event from the current outer event queue
				if (outerEventQueue.length && isInStableState) {
					runToCompletion(outerEventQueue.shift(),outerEventQueue.shift());
				}
				//call back
				mainLoopCallback = window.setTimeout(function() {
					mainLoop(); //FIXME: note that when calling mainloop this way, we won't have access to the "this" object. 
					//I don't think we ever use it though. Everything we need is private in function scope.
				},
				100);
			}
		}

		function runToCompletion(e,data,isEnumeratedEvent){
			isInStableState = false;

			if(e){
				innerEventQueue.push(e,data,isEnumeratedEvent);
			}

			do{
				//take any available default transitions
				microstep("$default",null,true);

				if(!hasTakenDefaultTransition){
					
					if(!innerEventQueue.length){
						//we have no more generated events, and no default transitions fired, so
						//we are done, and have run to completion
						break;
					}else{
						//microstep, then dequeue next event sending in event
						microstep(innerEventQueue.shift(),innerEventQueue.shift(),innerEventQueue.shift());
					}
				}else{
					//he has taken a default transition, so reset the global variable to false and loop again
					hasTakenDefaultTransition = false;
				}

			}while(true)

			isInStableState = true;
		}

		function microstep(e,data,isEnumeratedEvent){
			var enabledTransitions = [], transition = null, preemptedBasicStates = {};

			//we set the event as a global, rather than passing it into the function invocation as a parameter,
			//because in cases of default events, the event object will be populated with previous event's data
			if(e !== "$default" ){
				_event.name= isEnumeratedEvent ? e : e;
				_event.data=data;
			}

			if(isEnumeratedEvent){
				//e does not contain a dot, so dispatch as an enumerated event
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=currentConfiguration.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = currentConfiguration[id2426860_iterator];

			
						//check to make sure he is not preempted
						if(!(state in preemptedBasicStates)){
							//lookup the transition
							var transition = state[e]();
							if(transition){ 
								enabledTransitions.push(transition.action);
								mixin(transition.preemptedBasicStates,preemptedBasicStates);
							}
						}
					
		}
	
	
			}else{
				//e contains a dot, so dispatch as a prefix event
				

		for(var id2426860_iterator=0, 
			id2426860_hoist=currentConfiguration.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var state = currentConfiguration[id2426860_iterator];

			
						//check to make sure he is not preempted
						if(!(state in preemptedBasicStates)){
							//lookup the transition
							var transition = state.$dispatchPrefixEvent(e)
 
							if(transition){ 
								enabledTransitions.push(transition.action);
								mixin(transition.preemptedBasicStates,preemptedBasicStates);
							}
						}
					
		}
	
	
			}

			//invoke selected transitions
			

		for(var id2426860_iterator=0, 
			id2426860_hoist=enabledTransitions.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var t = enabledTransitions[id2426860_iterator];

			 t(); 
		}
	
	

		}

		function mixin(from,to){
			for(var prop in from){
				to[prop] = from[prop]
			}
		}

		this.destroy = function(){
			//right now, this only disables timer and sets global destroyed variable to prevent future callbacks
			window.clearTimeout(mainLoopCallback);
			mainLoopCallback = null;
			destroyed = true;
		}


		//this is for async communication
		this.GEN = function(e,data){
			outerEventQueue.push(e,data);
		}

		//this may or may not be something we want to expose, but for right now, we at least need it for testing
		this.getCurrentConfiguration = function(){
			//slice it to return a copy of the configuration rather than the conf itself
			//this saves us all kinds of confusion involving references and stuff
			//TODO: refactor this name to be genCurrentConfigurationStatement 
			var currentConfigurationExpression = currentConfiguration.slice();
			return currentConfigurationExpression;
		}

		//public API for In predicate
		this.$in = function(state){
			return In(state);
		}

		//end static boilerplate code
	
		function In(state){
			state = typeof state == "string" ? self._states[state] : state;

			var toReturn;

			if(state.isBasic){
				toReturn = 	currentConfiguration.indexOf(state)
			 != -1;
			}else{
				

		var toReturn = false;

		for(var id2426860_iterator=0, 
			id2426860_hoist=currentConfiguration.length;
				id2426860_iterator < id2426860_hoist;
				id2426860_iterator++){
			var s = currentConfiguration[id2426860_iterator];

			if(s.ancestors
							.indexOf(state)
			 != -1
					){
				toReturn = true;
				break;
			}
		}
	
			}

			return toReturn;
		}
	
		var listeners = [];
		//TODO:listeners support adding listeners for a particular state
		this.addListener = function(listener){
			listeners.push(listener); 
		}

		this.removeListener = function(listener){
			listeners.splice(	listeners.indexOf(listener)
			 ,1);
		}
	
			}

	
