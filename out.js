

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
				

		var $default_Regexp_id2461332 = /^($default)/
				,
				init_Regexp_id2461340 = /^(init)/
				,
				bling_keypress_Regexp_id2461346 = /^(bling_keypress)/
				,
				backspace_keypress_Regexp_id2461352 = /^(backspace_keypress)/
				,
				enter_keypress_Regexp_id2461358 = /^(enter_keypress)/
				,
				colon_keypress_Regexp_id2461363 = /^(colon_keypress)/
				,
				w_keypress_Regexp_id2461369 = /^(w_keypress)/
				,
				e_keypress_Regexp_id2461375 = /^(e_keypress)/
				,
				b_keypress_Regexp_id2461380 = /^(b_keypress)/
				,
				zero_keypress_Regexp_id2461386 = /^(zero_keypress)/
				,
				h_keypress_Regexp_id2461392 = /^(h_keypress)/
				,
				l_keypress_Regexp_id2461397 = /^(l_keypress)/
				,
				k_keypress_Regexp_id2461403 = /^(k_keypress)/
				,
				j_keypress_Regexp_id2461408 = /^(j_keypress)/
				,
				left_keypress_Regexp_id2461414 = /^(left_keypress)/
				,
				right_keypress_Regexp_id2461420 = /^(right_keypress)/
				,
				up_keypress_Regexp_id2461426 = /^(up_keypress)/
				,
				down_keypress_Regexp_id2461431 = /^(down_keypress)/
				,
				P_keypress_Regexp_id2461437 = /^(P_keypress)/
				,
				p_keypress_Regexp_id2461442 = /^(p_keypress)/
				,
				v_keypress_Regexp_id2461448 = /^(v_keypress)/
				,
				V_keypress_Regexp_id2461454 = /^(V_keypress)/
				,
				ctrl_v_keypress_Regexp_id2461459 = /^(ctrl_v_keypress)/
				,
				i_keypress_Regexp_id2461465 = /^(i_keypress)/
				,
				a_keypress_Regexp_id2461471 = /^(a_keypress)/
				,
				esc_keypress_Regexp_id2461476 = /^(esc_keypress)/
				,
				star_Regexp_id2461482 = /.*/
				,
				ctrl_g_keypress_Regexp_id2461488 = /^(ctrl_g_keypress)/
				,
				y_keypress_Regexp_id2461493 = /^(y_keypress)/
				,
				x_keypress_Regexp_id2461499 = /^(x_keypress)/
				,
				d_keypress_Regexp_id2461504 = /^(d_keypress)/
				,
				c_keypress_Regexp_id2461510 = /^(c_keypress)/
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
			
				this.P_keypress = function(){};
			
				this.p_keypress = function(){};
			
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
				

		var scxml_id2451249 = (function(){

			function scxml_id2451249Constructor(){
				this.parent = AbstractState;

				this.initial = null;

				this.depth = 0;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "scxml_id2451249"
				}

				this.enterAction = function(){
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("scxml_id2451249");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2451471_iterator=0, 
			id2451471_hoist=listeners.length;
				id2451471_iterator < id2451471_hoist;
				id2451471_iterator++){
			var listener = listeners[id2451471_iterator];

			
								//from
								listener.onExit("scxml_id2451249");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return AbstractState.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			scxml_id2451249Constructor.prototype = AbstractState;
			return new scxml_id2451249Constructor();
		})();

	

		var _initial = (function(){

			function _initialConstructor(){
				this.parent = scxml_id2451249;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2451249
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "_initial"
				}

				this.enterAction = function(){
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2450654_iterator=0, 
			id2450654_hoist=listeners.length;
				id2450654_iterator < id2450654_hoist;
				id2450654_iterator++){
			var listener = listeners[id2450654_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2451249.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			_initialConstructor.prototype = scxml_id2451249;
			return new _initialConstructor();
		})();

	

		var initial_default = (function(){

			function initial_defaultConstructor(){
				this.parent = scxml_id2451249;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2451249
					];
				
				
				this.toString = function(){
					return "initial_default"
				}

				this.enterAction = function(){
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("initial_default");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2453090_iterator=0, 
			id2453090_hoist=listeners.length;
				id2453090_iterator < id2453090_hoist;
				id2453090_iterator++){
			var listener = listeners[id2453090_iterator];

			
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
	

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['init']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(init_Regexp_id2461340)
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
	

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

			return scxml_id2451249.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			initial_defaultConstructor.prototype = scxml_id2451249;
			return new initial_defaultConstructor();
		})();

	

		var normal_mode = (function(){

			function normal_modeConstructor(){
				this.parent = scxml_id2451249;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2451249
					];
				
				
				this.toString = function(){
					return "normal_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorFat();
				controller.updateModeText("-- NORMAL --")
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("normal_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2450161_iterator=0, 
			id2450161_hoist=listeners.length;
				id2450161_iterator < id2450161_hoist;
				id2450161_iterator++){
			var listener = listeners[id2450161_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['bling_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['backspace_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['enter_keypress']();
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['colon_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['w_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['e_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['b_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['zero_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['h_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['l_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['k_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['j_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['left_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['right_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['up_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['down_keypress']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.putTextFromRegisterBeforeCursor();
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.putTextFromRegisterAfterCursor();
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['p_keypress']();
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['v_keypress']();
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['V_keypress']();
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['ctrl_v_keypress']();
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['i_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['a_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(bling_keypress_Regexp_id2461346)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2461352)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2461358)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_keypress_Regexp_id2461363)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(w_keypress_Regexp_id2461369)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_keypress_Regexp_id2461375)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_keypress_Regexp_id2461380)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(zero_keypress_Regexp_id2461386)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_keypress_Regexp_id2461392)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_keypress_Regexp_id2461397)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_keypress_Regexp_id2461403)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_keypress_Regexp_id2461408)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(false)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(left_keypress_Regexp_id2461414)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2461420)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2461426)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2461431)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(P_keypress_Regexp_id2461437)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.putTextFromRegisterBeforeCursor();
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(p_keypress_Regexp_id2461442)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.putTextFromRegisterAfterCursor();
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(v_keypress_Regexp_id2461448)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2461454)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2461459)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(i_keypress_Regexp_id2461465)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(a_keypress_Regexp_id2461471)
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

			return scxml_id2451249.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			normal_modeConstructor.prototype = scxml_id2451249;
			return new normal_modeConstructor();
		})();

	

		var visual_or_select_mode = (function(){

			function visual_or_select_modeConstructor(){
				this.parent = scxml_id2451249;

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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					
				controller.clearSelection(); 
			

		for(var id2453648_iterator=0, 
			id2453648_hoist=listeners.length;
				id2453648_iterator < id2453648_hoist;
				id2453648_iterator++){
			var listener = listeners[id2453648_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['left_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['right_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['up_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['down_keypress']();
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(left_keypress_Regexp_id2461414)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2461420)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2461426)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2461431)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(esc_keypress_Regexp_id2461476)
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

			return scxml_id2451249.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_or_select_modeConstructor.prototype = scxml_id2451249;
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
						scxml_id2451249
								,
							visual_or_select_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "visual_or_select_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2452365_iterator=0, 
			id2452365_hoist=listeners.length;
				id2452365_iterator < id2452365_hoist;
				id2452365_iterator++){
			var listener = listeners[id2452365_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2452590_iterator=0, 
			id2452590_hoist=listeners.length;
				id2452590_iterator < id2452590_hoist;
				id2452590_iterator++){
			var listener = listeners[id2452590_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
	

		this.P_keypress = function(){

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

			return visual_or_select_mode['P_keypress']();
		}
	

		this.p_keypress = function(){

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

			return visual_or_select_mode['p_keypress']();
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(star_Regexp_id2461482)
					
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2452598_iterator=0, 
			id2452598_hoist=listeners.length;
				id2452598_iterator < id2452598_hoist;
				id2452598_iterator++){
			var listener = listeners[id2452598_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("select_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2452756_iterator=0, 
			id2452756_hoist=listeners.length;
				id2452756_iterator < id2452756_hoist;
				id2452756_iterator++){
			var listener = listeners[id2452756_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2461459)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2461448)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2461488)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("select_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2455150_iterator=0, 
			id2455150_hoist=listeners.length;
				id2455150_iterator < id2455150_hoist;
				id2455150_iterator++){
			var listener = listeners[id2455150_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2461448)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2461454)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2461488)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("select_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2455429_iterator=0, 
			id2455429_hoist=listeners.length;
				id2455429_iterator < id2455429_hoist;
				id2455429_iterator++){
			var listener = listeners[id2455429_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2461459)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2461454)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2461488)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("visual_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2460715_iterator=0, 
			id2460715_hoist=listeners.length;
				id2460715_iterator < id2460715_hoist;
				id2460715_iterator++){
			var listener = listeners[id2460715_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.copySelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(y_keypress_Regexp_id2461493)
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.copySelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(x_keypress_Regexp_id2461499)
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(d_keypress_Regexp_id2461504)
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(c_keypress_Regexp_id2461510)
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
					controller.deleteSelectedTextIntoRegister();  
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(bling_keypress_Regexp_id2461346)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfLine(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2461352)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2461358)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_keypress_Regexp_id2461363)
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
		var lca = scxml_id2451249;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2454875_iterator=0, 
			id2454875_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2454875_iterator];

			
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

		

		for(var id2454875_iterator=0, 
			id2454875_hoist=statesExited.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = statesExited[id2454875_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(w_keypress_Regexp_id2461369)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfNextWord(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_keypress_Regexp_id2461375)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToEndOfNextWord(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_keypress_Regexp_id2461380)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfPreviousWord(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(zero_keypress_Regexp_id2461386)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveToStartOfLine(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_keypress_Regexp_id2461392)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_keypress_Regexp_id2461397)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_keypress_Regexp_id2461403)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_keypress_Regexp_id2461408)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("visual_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2459777_iterator=0, 
			id2459777_hoist=listeners.length;
				id2459777_iterator < id2459777_hoist;
				id2459777_iterator++){
			var listener = listeners[id2459777_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("visual_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2460320_iterator=0, 
			id2460320_hoist=listeners.length;
				id2460320_iterator < id2460320_hoist;
				id2460320_iterator++){
			var listener = listeners[id2460320_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2461459)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2461448)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2461488)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("visual_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2460600_iterator=0, 
			id2460600_hoist=listeners.length;
				id2460600_iterator < id2460600_hoist;
				id2460600_iterator++){
			var listener = listeners[id2460600_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2461448)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2461454)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2461488)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
						scxml_id2451249
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
					

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("visual_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2462084_iterator=0, 
			id2462084_hoist=listeners.length;
				id2462084_iterator < id2462084_hoist;
				id2462084_iterator++){
			var listener = listeners[id2462084_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2461459)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2461454)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2461488)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				this.parent = scxml_id2451249;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2451249
					];
				
				
				this.toString = function(){
					return "insert_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorThin()
				controller.updateModeText("-- INSERT --")
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("insert_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2462880_iterator=0, 
			id2462880_hoist=listeners.length;
				id2462880_iterator < id2462880_hoist;
				id2462880_iterator++){
			var listener = listeners[id2462880_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['init']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['bling_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['backspace_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['enter_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['colon_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['w_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['e_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['b_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['zero_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['h_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['l_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['k_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['j_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['left_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['right_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['up_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['down_keypress']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['p_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['v_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['V_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['ctrl_v_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['i_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['a_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['ctrl_g_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['y_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['x_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['d_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['c_keypress']();
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return scxml_id2451249['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(left_keypress_Regexp_id2461414)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveLeft(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2461420)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveRight(false,true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2461426)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveUp(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2461431)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.moveDown(true)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(esc_keypress_Regexp_id2461476)
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
			
				
				if(e.match(enter_keypress_Regexp_id2461358)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeNewLine()
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2461352)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeBackspace()
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2461482)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return scxml_id2451249.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			insert_modeConstructor.prototype = scxml_id2451249;
			return new insert_modeConstructor();
		})();

	

		var command_mode = (function(){

			function command_modeConstructor(){
				this.parent = scxml_id2451249;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2451249
					];
				
				
				this.toString = function(){
					return "command_mode"
				}

				this.enterAction = function(){
					
				controller.updateModeText("-- COMMAND --")
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
								//to
								listener.onEntry("command_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2463168_iterator=0, 
			id2463168_hoist=listeners.length;
				id2463168_iterator < id2463168_hoist;
				id2463168_iterator++){
			var listener = listeners[id2463168_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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

		

			return scxml_id2451249['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_keypress_Regexp_id2461476)
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=listeners.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var listener = listeners[id2454875_iterator];

			
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
				

			return scxml_id2451249.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			command_modeConstructor.prototype = scxml_id2451249;
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
	

		this["P_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"P_keypress"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["p_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"p_keypress"
	
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=currentConfiguration.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = currentConfiguration[id2454875_iterator];

			
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
				

		for(var id2454875_iterator=0, 
			id2454875_hoist=currentConfiguration.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var state = currentConfiguration[id2454875_iterator];

			
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
			

		for(var id2454875_iterator=0, 
			id2454875_hoist=enabledTransitions.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var t = enabledTransitions[id2454875_iterator];

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

		for(var id2454875_iterator=0, 
			id2454875_hoist=currentConfiguration.length;
				id2454875_iterator < id2454875_hoist;
				id2454875_iterator++){
			var s = currentConfiguration[id2454875_iterator];

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

	
