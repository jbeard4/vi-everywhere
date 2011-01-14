

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
				

		var $default_Regexp_id2358249 = /^($default)/
				,
				init_Regexp_id2358257 = /^(init)/
				,
				bling_keypress_Regexp_id2358263 = /^(bling_keypress)/
				,
				backspace_keypress_Regexp_id2358269 = /^(backspace_keypress)/
				,
				enter_keypress_Regexp_id2358275 = /^(enter_keypress)/
				,
				colon_keypress_Regexp_id2358280 = /^(colon_keypress)/
				,
				w_keypress_Regexp_id2358286 = /^(w_keypress)/
				,
				e_keypress_Regexp_id2358292 = /^(e_keypress)/
				,
				b_keypress_Regexp_id2358297 = /^(b_keypress)/
				,
				zero_keypress_Regexp_id2358303 = /^(zero_keypress)/
				,
				h_keypress_Regexp_id2358309 = /^(h_keypress)/
				,
				l_keypress_Regexp_id2358314 = /^(l_keypress)/
				,
				k_keypress_Regexp_id2358320 = /^(k_keypress)/
				,
				j_keypress_Regexp_id2358326 = /^(j_keypress)/
				,
				left_keypress_Regexp_id2358331 = /^(left_keypress)/
				,
				right_keypress_Regexp_id2358337 = /^(right_keypress)/
				,
				up_keypress_Regexp_id2358343 = /^(up_keypress)/
				,
				down_keypress_Regexp_id2358348 = /^(down_keypress)/
				,
				v_keypress_Regexp_id2358354 = /^(v_keypress)/
				,
				V_keypress_Regexp_id2358360 = /^(V_keypress)/
				,
				ctrl_v_keypress_Regexp_id2358365 = /^(ctrl_v_keypress)/
				,
				i_keypress_Regexp_id2358371 = /^(i_keypress)/
				,
				a_keypress_Regexp_id2358376 = /^(a_keypress)/
				,
				esc_keypress_Regexp_id2358382 = /^(esc_keypress)/
				,
				star_Regexp_id2358388 = /.*/
				,
				ctrl_g_keypress_Regexp_id2358393 = /^(ctrl_g_keypress)/
				,
				y_keypress_Regexp_id2358399 = /^(y_keypress)/
				,
				x_keypress_Regexp_id2358405 = /^(x_keypress)/
				,
				d_keypress_Regexp_id2358410 = /^(d_keypress)/
				,
				c_keypress_Regexp_id2358416 = /^(c_keypress)/
				;
				

				//abstract state
				

		var AbstractState = new function(){
			//triggers are methods

			
				this.$default = function(){};
			
				this.init = function(){};
			
				this.bling_keypress = function(){};
			
				this.backspace_keypress = function(){};
			
				this.enter_keypress = function(){};
			
				this.colon_keypress = function(){};
			
				this.w_keypress = function(){};
			
				this.e_keypress = function(){};
			
				this.b_keypress = function(){};
			
				this.zero_keypress = function(){};
			
				this.h_keypress = function(){};
			
				this.l_keypress = function(){};
			
				this.k_keypress = function(){};
			
				this.j_keypress = function(){};
			
				this.left_keypress = function(){};
			
				this.right_keypress = function(){};
			
				this.up_keypress = function(){};
			
				this.down_keypress = function(){};
			
				this.v_keypress = function(){};
			
				this.V_keypress = function(){};
			
				this.ctrl_v_keypress = function(){};
			
				this.i_keypress = function(){};
			
				this.a_keypress = function(){};
			
				this.ctrl_g_keypress = function(){};
			
				this.y_keypress = function(){};
			
				this.x_keypress = function(){};
			
				this.d_keypress = function(){};
			
				this.c_keypress = function(){};
			
				this.esc_keypress = function(){};
			

			this.$default = function(){};

			this.$dispatchPrefixEvent = function(){};
		}
	

				//states
				

		var scxml_id2348408 = (function(){

			function scxml_id2348408Constructor(){
				this.parent = AbstractState;

				this.initial = null;

				this.depth = 0;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "scxml_id2348408"
				}

				this.enterAction = function(){
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("scxml_id2348408");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2347981_iterator=0, 
			id2347981_hoist=listeners.length;
				id2347981_iterator < id2347981_hoist;
				id2347981_iterator++){
			var listener = listeners[id2347981_iterator];

			
								//from
								listener.onExit("scxml_id2348408");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return AbstractState.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			scxml_id2348408Constructor.prototype = AbstractState;
			return new scxml_id2348408Constructor();
		})();

	

		var _initial = (function(){

			function _initialConstructor(){
				this.parent = scxml_id2348408;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2348408
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "_initial"
				}

				this.enterAction = function(){
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2351833_iterator=0, 
			id2351833_hoist=listeners.length;
				id2351833_iterator < id2351833_hoist;
				id2351833_iterator++){
			var listener = listeners[id2351833_iterator];

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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

		

			return scxml_id2348408['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2348408.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			_initialConstructor.prototype = scxml_id2348408;
			return new _initialConstructor();
		})();

	

		var initial_default = (function(){

			function initial_defaultConstructor(){
				this.parent = scxml_id2348408;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2348408
					];
				
				
				this.toString = function(){
					return "initial_default"
				}

				this.enterAction = function(){
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("initial_default");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2348067_iterator=0, 
			id2348067_hoist=listeners.length;
				id2348067_iterator < id2348067_hoist;
				id2348067_iterator++){
			var listener = listeners[id2348067_iterator];

			
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
	

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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

		

			return scxml_id2348408['init']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(init_Regexp_id2358257)
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
	

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
				

			return scxml_id2348408.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			initial_defaultConstructor.prototype = scxml_id2348408;
			return new initial_defaultConstructor();
		})();

	

		var normal_mode = (function(){

			function normal_modeConstructor(){
				this.parent = scxml_id2348408;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2348408
					];
				
				
				this.toString = function(){
					return "normal_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorFat();
				controller.updateModeText("-- NORMAL --")
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("normal_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2349294_iterator=0, 
			id2349294_hoist=listeners.length;
				id2349294_iterator < id2349294_hoist;
				id2349294_iterator++){
			var listener = listeners[id2349294_iterator];

			
								//from
								listener.onExit("normal_mode");
							
		}
	
	
				}

				

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['bling_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['backspace_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['enter_keypress']();
		}
	

		this.colon_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"command_mode",
									"normal_mode_colon_keypress_3" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			command_mode
		]; 
	
			}
		}

		

			return scxml_id2348408['colon_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['b_keypress']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['zero_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['down_keypress']();
		}
	

		this.v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"normal_mode_v_keypress_4" );
							
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

		

			return scxml_id2348408['v_keypress']();
		}
	

		this.V_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"normal_mode_V_keypress_5" );
							
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

		

			return scxml_id2348408['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"normal_mode_ctrl_v_keypress_6" );
							
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

		

			return scxml_id2348408['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_i_keypress_7" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2348408['i_keypress']();
		}
	

		this.a_keypress = function(){

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_a_keypress_8" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2348408['a_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(bling_keypress_Regexp_id2358263)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2358269)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2358275)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_keypress_Regexp_id2358280)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"command_mode",
									"normal_mode_colon_keypress_3" );
							
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
			
				
				if(e.match(w_keypress_Regexp_id2358286)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_keypress_Regexp_id2358292)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_keypress_Regexp_id2358297)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(zero_keypress_Regexp_id2358303)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_keypress_Regexp_id2358309)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_keypress_Regexp_id2358314)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_keypress_Regexp_id2358320)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_keypress_Regexp_id2358326)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(left_keypress_Regexp_id2358331)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2358337)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2358343)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2358348)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(v_keypress_Regexp_id2358354)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_character",
									"normal_mode_v_keypress_4" );
							
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
			
				
				if(e.match(V_keypress_Regexp_id2358360)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_line",
									"normal_mode_V_keypress_5" );
							
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2358365)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_block",
									"normal_mode_ctrl_v_keypress_6" );
							
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
			
				
				if(e.match(i_keypress_Regexp_id2358371)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_i_keypress_7" );
							
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
			
				
				if(e.match(a_keypress_Regexp_id2358376)
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_a_keypress_8" );
							
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
				

			return scxml_id2348408.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			normal_modeConstructor.prototype = scxml_id2348408;
			return new normal_modeConstructor();
		})();

	

		var visual_or_select_mode = (function(){

			function visual_or_select_modeConstructor(){
				this.parent = scxml_id2348408;

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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					
				controller.clearSelection(); 
			

		for(var id2351452_iterator=0, 
			id2351452_hoist=listeners.length;
				id2351452_iterator < id2351452_hoist;
				id2351452_iterator++){
			var listener = listeners[id2351452_iterator];

			
								//from
								listener.onExit("visual_or_select_mode");
							
		}
	
	
				}

				

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['down_keypress']();
		}
	

		this.esc_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_or_select_mode_esc_keypress_10" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2348408['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(left_keypress_Regexp_id2358331)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2358337)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2358343)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2358348)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(esc_keypress_Regexp_id2358382)
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_or_select_mode",
									"normal_mode",
									"visual_or_select_mode_esc_keypress_10" );
							
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
				

			return scxml_id2348408.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_or_select_modeConstructor.prototype = scxml_id2348408;
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
						scxml_id2348408
								,
							visual_or_select_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "visual_or_select_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2349766_iterator=0, 
			id2349766_hoist=listeners.length;
				id2349766_iterator < id2349766_hoist;
				id2349766_iterator++){
			var listener = listeners[id2349766_iterator];

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2350549_iterator=0, 
			id2350549_hoist=listeners.length;
				id2350549_iterator < id2350549_hoist;
				id2350549_iterator++){
			var listener = listeners[id2350549_iterator];

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['init']();
		}
	

		this.bling_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['bling_keypress']();
		}
	

		this.backspace_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['backspace_keypress']();
		}
	

		this.enter_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['enter_keypress']();
		}
	

		this.colon_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['colon_keypress']();
		}
	

		this.w_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['w_keypress']();
		}
	

		this.e_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['e_keypress']();
		}
	

		this.b_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['b_keypress']();
		}
	

		this.zero_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['zero_keypress']();
		}
	

		this.h_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['h_keypress']();
		}
	

		this.l_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['l_keypress']();
		}
	

		this.k_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['k_keypress']();
		}
	

		this.j_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['j_keypress']();
		}
	

		this.left_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['left_keypress']();
		}
	

		this.right_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['right_keypress']();
		}
	

		this.up_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['up_keypress']();
		}
	

		this.down_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['down_keypress']();
		}
	

		this.v_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['i_keypress']();
		}
	

		this.a_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['ctrl_g_keypress']();
		}
	

		this.y_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['y_keypress']();
		}
	

		this.x_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['x_keypress']();
		}
	

		this.d_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['d_keypress']();
		}
	

		this.c_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_12" );
							
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
				

			return visual_or_select_mode['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2358388)
					
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_mode",
									"insert_mode",
									"select_mode_*_12" );
							
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2350557_iterator=0, 
			id2350557_hoist=listeners.length;
				id2350557_iterator < id2350557_hoist;
				id2350557_iterator++){
			var listener = listeners[id2350557_iterator];

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("select_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2350715_iterator=0, 
			id2350715_hoist=listeners.length;
				id2350715_iterator < id2350715_hoist;
				id2350715_iterator++){
			var listener = listeners[id2350715_iterator];

			
								//from
								listener.onExit("select_line");
							
		}
	
	
				}

				

		this.v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_line_v_keypress_14" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

		

			return select_mode['v_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"select_line_ctrl_v_keypress_13" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

		

			return select_mode['ctrl_v_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"select_line_ctrl_g_keypress_15" );
							
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

		

			return select_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2358365)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"select_block",
									"select_line_ctrl_v_keypress_13" );
							
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
			
				
				if(e.match(v_keypress_Regexp_id2358354)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"select_character",
									"select_line_v_keypress_14" );
							
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2358393)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"visual_line",
									"select_line_ctrl_g_keypress_15" );
							
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("select_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2352103_iterator=0, 
			id2352103_hoist=listeners.length;
				id2352103_iterator < id2352103_hoist;
				id2352103_iterator++){
			var listener = listeners[id2352103_iterator];

			
								//from
								listener.onExit("select_block");
							
		}
	
	
				}

				

		this.v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_block_v_keypress_16" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_character
		]; 
	
			}
		}

		

			return select_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"select_block_V_keypress_17" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

		

			return select_mode['V_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"select_block_ctrl_g_keypress_18" );
							
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

		

			return select_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(v_keypress_Regexp_id2358354)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"select_character",
									"select_block_v_keypress_16" );
							
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
			
				
				if(e.match(V_keypress_Regexp_id2358360)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"select_line",
									"select_block_V_keypress_17" );
							
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2358393)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"visual_block",
									"select_block_ctrl_g_keypress_18" );
							
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("select_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2352382_iterator=0, 
			id2352382_hoist=listeners.length;
				id2352382_iterator < id2352382_hoist;
				id2352382_iterator++){
			var listener = listeners[id2352382_iterator];

			
								//from
								listener.onExit("select_character");
							
		}
	
	
				}

				

		this.V_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"select_character_V_keypress_20" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_line
		]; 
	
			}
		}

		

			return select_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"select_character_ctrl_v_keypress_19" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			select_block
		]; 
	
			}
		}

		

			return select_mode['ctrl_v_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"select_character_ctrl_g_keypress_21" );
							
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

		

			return select_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2358365)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"select_block",
									"select_character_ctrl_v_keypress_19" );
							
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
			
				
				if(e.match(V_keypress_Regexp_id2358360)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"select_line",
									"select_character_V_keypress_20" );
							
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2358393)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"visual_character",
									"select_character_ctrl_g_keypress_21" );
							
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("visual_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2357679_iterator=0, 
			id2357679_hoist=listeners.length;
				id2357679_iterator < id2357679_hoist;
				id2357679_iterator++){
			var listener = listeners[id2357679_iterator];

			
								//from
								listener.onExit("visual_mode");
							
		}
	
	
				}

				

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['bling_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['backspace_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['enter_keypress']();
		}
	

		this.colon_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"command_mode",
									"visual_mode_colon_keypress_27" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			command_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['colon_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['b_keypress']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['zero_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return visual_or_select_mode['j_keypress']();
		}
	

		this.y_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.copySelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_y_keypress_23" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['y_keypress']();
		}
	

		this.x_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_x_keypress_24" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['x_keypress']();
		}
	

		this.d_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_d_keypress_25" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['d_keypress']();
		}
	

		this.c_keypress = function(){

			
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"visual_mode_c_keypress_26" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['c_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(y_keypress_Regexp_id2358399)
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.copySelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_y_keypress_23" );
							
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
			
				
				if(e.match(x_keypress_Regexp_id2358405)
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_x_keypress_24" );
							
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
			
				
				if(e.match(d_keypress_Regexp_id2358410)
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_d_keypress_25" );
							
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
			
				
				if(e.match(c_keypress_Regexp_id2358416)
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"insert_mode",
									"visual_mode_c_keypress_26" );
							
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
			
				
				if(e.match(bling_keypress_Regexp_id2358263)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2358269)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2358275)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_keypress_Regexp_id2358280)
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
		var lca = scxml_id2348408;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2345551_iterator=0, 
			id2345551_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2345551_iterator];

			
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

		

		for(var id2345551_iterator=0, 
			id2345551_hoist=statesExited.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = statesExited[id2345551_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"command_mode",
									"visual_mode_colon_keypress_27" );
							
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
			
				
				if(e.match(w_keypress_Regexp_id2358286)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_keypress_Regexp_id2358292)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_keypress_Regexp_id2358297)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(zero_keypress_Regexp_id2358303)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_keypress_Regexp_id2358309)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_keypress_Regexp_id2358314)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_keypress_Regexp_id2358320)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_keypress_Regexp_id2358326)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("visual_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2356665_iterator=0, 
			id2356665_hoist=listeners.length;
				id2356665_iterator < id2356665_hoist;
				id2356665_iterator++){
			var listener = listeners[id2356665_iterator];

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("visual_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2357208_iterator=0, 
			id2357208_hoist=listeners.length;
				id2357208_iterator < id2357208_hoist;
				id2357208_iterator++){
			var listener = listeners[id2357208_iterator];

			
								//from
								listener.onExit("visual_line");
							
		}
	
	
				}

				

		this.v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_line_v_keypress_29" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

		

			return visual_mode['v_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"visual_line_ctrl_v_keypress_28" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

		

			return visual_mode['ctrl_v_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"visual_line_ctrl_g_keypress_30" );
							
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

		

			return visual_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2358365)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"visual_block",
									"visual_line_ctrl_v_keypress_28" );
							
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
			
				
				if(e.match(v_keypress_Regexp_id2358354)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"visual_character",
									"visual_line_v_keypress_29" );
							
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2358393)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"select_line",
									"visual_line_ctrl_g_keypress_30" );
							
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("visual_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2357487_iterator=0, 
			id2357487_hoist=listeners.length;
				id2357487_iterator < id2357487_hoist;
				id2357487_iterator++){
			var listener = listeners[id2357487_iterator];

			
								//from
								listener.onExit("visual_block");
							
		}
	
	
				}

				

		this.v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_block_v_keypress_31" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_character
		]; 
	
			}
		}

		

			return visual_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"visual_block_V_keypress_32" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

		

			return visual_mode['V_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"visual_block_ctrl_g_keypress_33" );
							
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

		

			return visual_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(v_keypress_Regexp_id2358354)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"visual_character",
									"visual_block_v_keypress_31" );
							
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
			
				
				if(e.match(V_keypress_Regexp_id2358360)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"visual_line",
									"visual_block_V_keypress_32" );
							
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2358393)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"select_block",
									"visual_block_ctrl_g_keypress_33" );
							
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
						scxml_id2348408
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
					

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("visual_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2358852_iterator=0, 
			id2358852_hoist=listeners.length;
				id2358852_iterator < id2358852_hoist;
				id2358852_iterator++){
			var listener = listeners[id2358852_iterator];

			
								//from
								listener.onExit("visual_character");
							
		}
	
	
				}

				

		this.V_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"visual_character_V_keypress_35" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_line
		]; 
	
			}
		}

		

			return visual_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"visual_character_ctrl_v_keypress_34" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_block
		]; 
	
			}
		}

		

			return visual_mode['ctrl_v_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"visual_character_ctrl_g_keypress_36" );
							
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

		

			return visual_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2358365)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"visual_block",
									"visual_character_ctrl_v_keypress_34" );
							
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
			
				
				if(e.match(V_keypress_Regexp_id2358360)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"visual_line",
									"visual_character_V_keypress_35" );
							
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2358393)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"select_character",
									"visual_character_ctrl_g_keypress_36" );
							
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
				this.parent = scxml_id2348408;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2348408
					];
				
				
				this.toString = function(){
					return "insert_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorThin()
				controller.updateModeText("-- INSERT --")
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("insert_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2359649_iterator=0, 
			id2359649_hoist=listeners.length;
				id2359649_iterator < id2359649_hoist;
				id2359649_iterator++){
			var listener = listeners[id2359649_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['init']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['bling_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeBackspace()
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['backspace_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeNewLine()
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['enter_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['colon_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['b_keypress']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['zero_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['down_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['ctrl_g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['y_keypress']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"insert_mode_esc_keypress_37" );
							
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2348408['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(left_keypress_Regexp_id2358331)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2358337)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2358343)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2358348)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(esc_keypress_Regexp_id2358382)
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"normal_mode",
									"insert_mode_esc_keypress_37" );
							
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
			
				
				if(e.match(enter_keypress_Regexp_id2358275)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeNewLine()
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2358269)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeBackspace()
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2358388)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return scxml_id2348408.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			insert_modeConstructor.prototype = scxml_id2348408;
			return new insert_modeConstructor();
		})();

	

		var command_mode = (function(){

			function command_modeConstructor(){
				this.parent = scxml_id2348408;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2348408
					];
				
				
				this.toString = function(){
					return "command_mode"
				}

				this.enterAction = function(){
					
				controller.updateModeText("-- COMMAND --")
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
								//to
								listener.onEntry("command_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2359937_iterator=0, 
			id2359937_hoist=listeners.length;
				id2359937_iterator < id2359937_hoist;
				id2359937_iterator++){
			var listener = listeners[id2359937_iterator];

			
								//from
								listener.onExit("command_mode");
							
		}
	
	
				}

				

		this.esc_keypress = function(){

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"command_mode_esc_keypress_38" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2348408['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_keypress_Regexp_id2358382)
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=listeners.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var listener = listeners[id2345551_iterator];

			
							//transition id
							
								listener.onTransition(
									"command_mode",
									"normal_mode",
									"command_mode_esc_keypress_38" );
							
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
				

			return scxml_id2348408.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			command_modeConstructor.prototype = scxml_id2348408;
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
	

		this["bling_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"bling_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["backspace_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"backspace_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["enter_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"enter_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["colon_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"colon_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["w_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"w_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["e_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"e_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["b_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"b_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["zero_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"zero_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["h_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"h_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["l_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"l_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["k_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"k_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["j_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"j_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["left_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"left_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["right_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"right_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["up_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"up_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["down_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"down_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["v_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"v_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["V_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"V_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["ctrl_v_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"ctrl_v_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["i_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"i_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["a_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"a_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["esc_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"esc_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["ctrl_g_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"ctrl_g_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["y_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"y_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["x_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"x_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["d_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"d_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["c_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"c_keypress"
	
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=currentConfiguration.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = currentConfiguration[id2345551_iterator];

			
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
				

		for(var id2345551_iterator=0, 
			id2345551_hoist=currentConfiguration.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var state = currentConfiguration[id2345551_iterator];

			
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
			

		for(var id2345551_iterator=0, 
			id2345551_hoist=enabledTransitions.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var t = enabledTransitions[id2345551_iterator];

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

		for(var id2345551_iterator=0, 
			id2345551_hoist=currentConfiguration.length;
				id2345551_iterator < id2345551_hoist;
				id2345551_iterator++){
			var s = currentConfiguration[id2345551_iterator];

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

	
