

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
				
		var controller, repeatInput
					= '';
	
				//send timeout id variables
				

		var $default_Regexp_id2544684 = /^($default)/
				,
				init_Regexp_id2544872 = /^(init)/
				,
				P_keypress_Regexp_id2544878 = /^(P_keypress)/
				,
				p_keypress_Regexp_id2544884 = /^(p_keypress)/
				,
				colon_keypress_Regexp_id2544889 = /^(colon_keypress)/
				,
				v_keypress_Regexp_id2544895 = /^(v_keypress)/
				,
				V_keypress_Regexp_id2544900 = /^(V_keypress)/
				,
				ctrl_v_keypress_Regexp_id2544906 = /^(ctrl_v_keypress)/
				,
				i_keypress_Regexp_id2544912 = /^(i_keypress)/
				,
				a_keypress_Regexp_id2544917 = /^(a_keypress)/
				,
				esc_keypress_Regexp_id2544923 = /^(esc_keypress)/
				,
				star_Regexp_id2544928 = /.*/
				,
				ctrl_g_keypress_Regexp_id2544934 = /^(ctrl_g_keypress)/
				,
				yank_executed_Regexp_id2544940 = /^(yank_executed)/
				,
				x_keypress_Regexp_id2544946 = /^(x_keypress)/
				,
				d_keypress_Regexp_id2544951 = /^(d_keypress)/
				,
				c_keypress_Regexp_id2544957 = /^(c_keypress)/
				,
				enter_keypress_Regexp_id2544962 = /^(enter_keypress)/
				,
				backspace_keypress_Regexp_id2544968 = /^(backspace_keypress)/
				,
				bling_keypress_Regexp_id2544974 = /^(bling_keypress)/
				,
				w_keypress_Regexp_id2544980 = /^(w_keypress)/
				,
				e_keypress_Regexp_id2544985 = /^(e_keypress)/
				,
				b_keypress_Regexp_id2544991 = /^(b_keypress)/
				,
				h_keypress_Regexp_id2544996 = /^(h_keypress)/
				,
				l_keypress_Regexp_id2545002 = /^(l_keypress)/
				,
				k_keypress_Regexp_id2545008 = /^(k_keypress)/
				,
				j_keypress_Regexp_id2545013 = /^(j_keypress)/
				,
				left_keypress_Regexp_id2545019 = /^(left_keypress)/
				,
				right_keypress_Regexp_id2545024 = /^(right_keypress)/
				,
				up_keypress_Regexp_id2545030 = /^(up_keypress)/
				,
				down_keypress_Regexp_id2545036 = /^(down_keypress)/
				,
				g_keypress_Regexp_id2545041 = /^(g_keypress)/
				,
				y_keypress_Regexp_id2545047 = /^(y_keypress)/
				,
				zero_keypress_Regexp_id2545052 = /^(zero_keypress)/
				;
				

				//abstract state
				

		var AbstractState = new function(){
			//triggers are methods

			
				this.$default = function(){};
			
				this.init = function(){};
			
				this.P_keypress = function(){};
			
				this.p_keypress = function(){};
			
				this.colon_keypress = function(){};
			
				this.v_keypress = function(){};
			
				this.V_keypress = function(){};
			
				this.ctrl_v_keypress = function(){};
			
				this.i_keypress = function(){};
			
				this.a_keypress = function(){};
			
				this.ctrl_g_keypress = function(){};
			
				this.yank_executed = function(){};
			
				this.x_keypress = function(){};
			
				this.d_keypress = function(){};
			
				this.c_keypress = function(){};
			
				this.esc_keypress = function(){};
			
				this.enter_keypress = function(){};
			
				this.backspace_keypress = function(){};
			
				this.zero_keypress = function(){};
			
				this.bling_keypress = function(){};
			
				this.w_keypress = function(){};
			
				this.e_keypress = function(){};
			
				this.b_keypress = function(){};
			
				this.h_keypress = function(){};
			
				this.l_keypress = function(){};
			
				this.k_keypress = function(){};
			
				this.j_keypress = function(){};
			
				this.left_keypress = function(){};
			
				this.right_keypress = function(){};
			
				this.up_keypress = function(){};
			
				this.down_keypress = function(){};
			
				this.g_keypress = function(){};
			
				this.y_keypress = function(){};
			

			this.$default = function(){};

			this.$dispatchPrefixEvent = function(){};
		}
	

				//states
				

		var scxml_id2533521 = (function(){

			function scxml_id2533521Constructor(){
				this.parent = AbstractState;

				this.initial = null;

				this.depth = 0;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "scxml_id2533521"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("scxml_id2533521");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2534257_iterator=0, 
			id2534257_hoist=listeners.length;
				id2534257_iterator < id2534257_hoist;
				id2534257_iterator++){
			var listener = listeners[id2534257_iterator];

			
								//from
								listener.onExit("scxml_id2533521");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return AbstractState.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			scxml_id2533521Constructor.prototype = AbstractState;
			return new scxml_id2533521Constructor();
		})();

	

		var _initial = (function(){

			function _initialConstructor(){
				this.parent = scxml_id2533521;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "_initial"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2532893_iterator=0, 
			id2532893_hoist=listeners.length;
				id2532893_iterator < id2532893_hoist;
				id2532893_iterator++){
			var listener = listeners[id2532893_iterator];

			
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
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					_initial.exitAction();
							

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
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

		

			return scxml_id2533521['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2533521.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			_initialConstructor.prototype = scxml_id2533521;
			return new _initialConstructor();
		})();

	

		var initial_default = (function(){

			function initial_defaultConstructor(){
				this.parent = scxml_id2533521;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
					];
				
				
				this.toString = function(){
					return "initial_default"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("initial_default");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2533532_iterator=0, 
			id2533532_hoist=listeners.length;
				id2533532_iterator < id2533532_hoist;
				id2533532_iterator++){
			var listener = listeners[id2533532_iterator];

			
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
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_initial",
									"initial_default_init_2" );
							
		}
	
	
					//enter states
					main.enterAction();
					main_initial.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			main_initial
		]; 
	
			}
		}

		

			return scxml_id2533521['init']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(init_Regexp_id2544872)
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
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"initial_default",
									"main_initial",
									"initial_default_init_2" );
							
		}
	
	
					//enter states
					main.enterAction();
					main_initial.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			main_initial
		]; 
	
			}
		}

	
				}
				

			return scxml_id2533521.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			initial_defaultConstructor.prototype = scxml_id2533521;
			return new initial_defaultConstructor();
		})();

	

		var main = (function(){

			function mainConstructor(){
				this.parent = scxml_id2533521;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "main"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("main");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2536356_iterator=0, 
			id2536356_hoist=listeners.length;
				id2536356_iterator < id2536356_hoist;
				id2536356_iterator++){
			var listener = listeners[id2536356_iterator];

			
								//from
								listener.onExit("main");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2533521.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			mainConstructor.prototype = scxml_id2533521;
			return new mainConstructor();
		})();

	

		var main_initial = (function(){

			function main_initialConstructor(){
				this.parent = main;

				this.initial = null;

				this.depth = 2;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "main_initial"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("main_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2536360_iterator=0, 
			id2536360_hoist=listeners.length;
				id2536360_iterator < id2536360_hoist;
				id2536360_iterator++){
			var listener = listeners[id2536360_iterator];

			
								//from
								listener.onExit("main_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_line : true
                               ,select_block : true
                               ,select_character : true
                               ,visual_line : true
                               ,visual_block : true
                               ,visual_character : true
                               ,insert_mode : true
                               ,command_mode : true
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					main_initial.exitAction();
							

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"in_mode_initial",
									"main_initial_$default_3" );
							
								listener.onTransition(
									"",
									"dispatching_events_initial",
									"main_initial_$default_4" );
							
		}
	
	
					//enter states
					dispatching_events.enterAction();
					dispatching_events_initial.enterAction();
					in_mode.enterAction();
					in_mode_initial.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			in_mode_initial,dispatching_events_initial
		]; 
	
			}
		}

		

			return main['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return main.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			main_initialConstructor.prototype = main;
			return new main_initialConstructor();
		})();

	

		var in_mode = (function(){

			function in_modeConstructor(){
				this.parent = main;

				this.initial = null;

				this.depth = 2;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "in_mode"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("in_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2532249_iterator=0, 
			id2532249_hoist=listeners.length;
				id2532249_iterator < id2532249_hoist;
				id2532249_iterator++){
			var listener = listeners[id2532249_iterator];

			
								//from
								listener.onExit("in_mode");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return main.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			in_modeConstructor.prototype = main;
			return new in_modeConstructor();
		})();

	

		var in_mode_initial = (function(){

			function in_mode_initialConstructor(){
				this.parent = in_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "in_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("in_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2537029_iterator=0, 
			id2537029_hoist=listeners.length;
				id2537029_iterator < id2537029_hoist;
				id2537029_iterator++){
			var listener = listeners[id2537029_iterator];

			
								//from
								listener.onExit("in_mode_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
					in_mode_initial.exitAction();
							

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"in_mode_initial_$default_5" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(in_mode_initial)
			
			,1,
			normal_mode 
		); 
	
			}
		}

		

			return in_mode['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return in_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			in_mode_initialConstructor.prototype = in_mode;
			return new in_mode_initialConstructor();
		})();

	

		var normal_mode = (function(){

			function normal_modeConstructor(){
				this.parent = in_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
					];
				
				
				this.toString = function(){
					return "normal_mode"
				}

				this.enterAction = function(){
					
						controller.makeCursorFat();
						controller.updateModeText("-- NORMAL --")
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("normal_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2536169_iterator=0, 
			id2536169_hoist=listeners.length;
				id2536169_iterator < id2536169_hoist;
				id2536169_iterator++){
			var listener = listeners[id2536169_iterator];

			
								//from
								listener.onExit("normal_mode");
							
		}
	
	
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['P_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"command_mode",
									"normal_mode_colon_keypress_6" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			command_mode 
		); 
	
			}
		}

		

			return in_mode['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"normal_mode_v_keypress_7" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			visual_character 
		); 
	
			}
		}

		

			return in_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"normal_mode_V_keypress_8" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			visual_line 
		); 
	
			}
		}

		

			return in_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"normal_mode_ctrl_v_keypress_9" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			visual_block 
		); 
	
			}
		}

		

			return in_mode['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_i_keypress_10" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return in_mode['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_a_keypress_11" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return in_mode['a_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(P_keypress_Regexp_id2544878)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.putTextFromRegisterBeforeCursor();
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(p_keypress_Regexp_id2544884)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.putTextFromRegisterAfterCursor();
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_keypress_Regexp_id2544889)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"command_mode",
									"normal_mode_colon_keypress_6" );
							
		}
	
	
					//enter states
					command_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			command_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(v_keypress_Regexp_id2544895)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_character",
									"normal_mode_v_keypress_7" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			visual_character 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2544900)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_line",
									"normal_mode_V_keypress_8" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			visual_line 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2544906)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_block",
									"normal_mode_ctrl_v_keypress_9" );
							
		}
	
	
					//enter states
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			visual_block 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(i_keypress_Regexp_id2544912)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_i_keypress_10" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			insert_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(a_keypress_Regexp_id2544917)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_a_keypress_11" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(normal_mode)
			
			,1,
			insert_mode 
		); 
	
			}
		}

	
				}
				

			return in_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			normal_modeConstructor.prototype = in_mode;
			return new normal_modeConstructor();
		})();

	

		var visual_or_select_mode = (function(){

			function visual_or_select_modeConstructor(){
				this.parent = in_mode;

				this.initial = null;

				this.depth = 3;

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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					
						controller.clearSelection(); 
					

		for(var id2536174_iterator=0, 
			id2536174_hoist=listeners.length;
				id2536174_iterator < id2536174_hoist;
				id2536174_iterator++){
			var listener = listeners[id2536174_iterator];

			
								//from
								listener.onExit("visual_or_select_mode");
							
		}
	
	
				}

				

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_or_select_mode_esc_keypress_13" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

		

			return in_mode['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_keypress_Regexp_id2544923)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_or_select_mode",
									"normal_mode",
									"visual_or_select_mode_esc_keypress_13" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

	
				}
				

			return in_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_or_select_modeConstructor.prototype = in_mode;
			return new visual_or_select_modeConstructor();
		})();

	

		var visual_or_select_mode_initial = (function(){

			function visual_or_select_mode_initialConstructor(){
				this.parent = visual_or_select_mode;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
								,
							visual_or_select_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "visual_or_select_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2535219_iterator=0, 
			id2535219_hoist=listeners.length;
				id2535219_iterator < id2535219_hoist;
				id2535219_iterator++){
			var listener = listeners[id2535219_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_mode_initial",
									"visual_or_select_mode_initial_$default_12" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_mode_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_or_select_mode_initial)
			
			,1,
			visual_mode_initial 
		); 
	
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

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "select_mode"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2537218_iterator=0, 
			id2537218_hoist=listeners.length;
				id2537218_iterator < id2537218_hoist;
				id2537218_iterator++){
			var listener = listeners[id2537218_iterator];

			
								//from
								listener.onExit("select_mode");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['backspace_keypress']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['down_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['y_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2544928)
					
						&& (_event.data.charCode !== 0)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_mode",
									"insert_mode",
									"select_mode_*_15" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2537228_iterator=0, 
			id2537228_hoist=listeners.length;
				id2537228_iterator < id2537228_hoist;
				id2537228_iterator++){
			var listener = listeners[id2537228_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_mode_initial_$default_14" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_mode_initial)
			
			,1,
			select_character 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
							

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("select_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2537367_iterator=0, 
			id2537367_hoist=listeners.length;
				id2537367_iterator < id2537367_hoist;
				id2537367_iterator++){
			var listener = listeners[id2537367_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_line_v_keypress_17" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_line)
			
			,1,
			select_character 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"select_line_ctrl_v_keypress_16" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_line)
			
			,1,
			select_block 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"select_line_ctrl_g_keypress_18" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_line)
			
			,1,
			visual_line 
		); 
	
			}
		}

		

			return select_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2544906)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"select_block",
									"select_line_ctrl_v_keypress_16" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_line)
			
			,1,
			select_block 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(v_keypress_Regexp_id2544895)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"select_character",
									"select_line_v_keypress_17" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_line)
			
			,1,
			select_character 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2544934)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_line",
									"visual_line",
									"select_line_ctrl_g_keypress_18" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_line)
			
			,1,
			visual_line 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
							

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("select_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2534776_iterator=0, 
			id2534776_hoist=listeners.length;
				id2534776_iterator < id2534776_hoist;
				id2534776_iterator++){
			var listener = listeners[id2534776_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"select_block_v_keypress_19" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_block)
			
			,1,
			select_character 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"select_block_V_keypress_20" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_block)
			
			,1,
			select_line 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"select_block_ctrl_g_keypress_21" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_block)
			
			,1,
			visual_block 
		); 
	
			}
		}

		

			return select_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(v_keypress_Regexp_id2544895)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"select_character",
									"select_block_v_keypress_19" );
							
		}
	
	
					//enter states
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_block)
			
			,1,
			select_character 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2544900)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"select_line",
									"select_block_V_keypress_20" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_block)
			
			,1,
			select_line 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2544934)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_block",
									"visual_block",
									"select_block_ctrl_g_keypress_21" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_block)
			
			,1,
			visual_block 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
							

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("select_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2535037_iterator=0, 
			id2535037_hoist=listeners.length;
				id2535037_iterator < id2535037_hoist;
				id2535037_iterator++){
			var listener = listeners[id2535037_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"select_character_V_keypress_23" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_character)
			
			,1,
			select_line 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"select_character_ctrl_v_keypress_22" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_character)
			
			,1,
			select_block 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"select_character_ctrl_g_keypress_24" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_character)
			
			,1,
			visual_character 
		); 
	
			}
		}

		

			return select_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2544906)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"select_block",
									"select_character_ctrl_v_keypress_22" );
							
		}
	
	
					//enter states
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_character)
			
			,1,
			select_block 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2544900)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"select_line",
									"select_character_V_keypress_23" );
							
		}
	
	
					//enter states
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_character)
			
			,1,
			select_line 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2544934)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_character",
									"visual_character",
									"select_character_ctrl_g_keypress_24" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_character)
			
			,1,
			visual_character 
		); 
	
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

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "visual_mode"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("visual_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2537221_iterator=0, 
			id2537221_hoist=listeners.length;
				id2537221_iterator < id2537221_hoist;
				id2537221_iterator++){
			var listener = listeners[id2537221_iterator];

			
								//from
								listener.onExit("visual_mode");
							
		}
	
	
				}

				

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_yank_executed_26" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_x_keypress_27" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_d_keypress_28" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"visual_mode_c_keypress_29" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
			}
		}

		

			return visual_or_select_mode['c_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(yank_executed_Regexp_id2544940)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_yank_executed_26" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(x_keypress_Regexp_id2544946)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_x_keypress_27" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(d_keypress_Regexp_id2544951)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_d_keypress_28" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			normal_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(c_keypress_Regexp_id2544957)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"insert_mode",
									"visual_mode_c_keypress_29" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			insert_mode 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("visual_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2543359_iterator=0, 
			id2543359_hoist=listeners.length;
				id2543359_iterator < id2543359_hoist;
				id2543359_iterator++){
			var listener = listeners[id2543359_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_mode_initial_$default_25" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_mode_initial)
			
			,1,
			visual_character 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
							

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("visual_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2543670_iterator=0, 
			id2543670_hoist=listeners.length;
				id2543670_iterator < id2543670_hoist;
				id2543670_iterator++){
			var listener = listeners[id2543670_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_line_v_keypress_31" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_line)
			
			,1,
			visual_character 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"visual_line_ctrl_v_keypress_30" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_line)
			
			,1,
			visual_block 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_line",
									"visual_line_ctrl_g_keypress_32" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_line)
			
			,1,
			select_line 
		); 
	
			}
		}

		

			return visual_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2544906)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"visual_block",
									"visual_line_ctrl_v_keypress_30" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_line)
			
			,1,
			visual_block 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(v_keypress_Regexp_id2544895)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"visual_character",
									"visual_line_v_keypress_31" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_line)
			
			,1,
			visual_character 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2544934)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_line",
									"select_line",
									"visual_line_ctrl_g_keypress_32" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_line)
			
			,1,
			select_line 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
							

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("visual_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2543931_iterator=0, 
			id2543931_hoist=listeners.length;
				id2543931_iterator < id2543931_hoist;
				id2543931_iterator++){
			var listener = listeners[id2543931_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_character",
									"visual_block_v_keypress_33" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_block)
			
			,1,
			visual_character 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"visual_block_V_keypress_34" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_block)
			
			,1,
			visual_line 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_block",
									"visual_block_ctrl_g_keypress_35" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_block)
			
			,1,
			select_block 
		); 
	
			}
		}

		

			return visual_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(v_keypress_Regexp_id2544895)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"visual_character",
									"visual_block_v_keypress_33" );
							
		}
	
	
					//enter states
					visual_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_block)
			
			,1,
			visual_character 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2544900)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"visual_line",
									"visual_block_V_keypress_34" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_block)
			
			,1,
			visual_line 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2544934)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_block",
									"select_block",
									"visual_block_ctrl_g_keypress_35" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_block)
			
			,1,
			select_block 
		); 
	
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
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
							

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("visual_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2544192_iterator=0, 
			id2544192_hoist=listeners.length;
				id2544192_iterator < id2544192_hoist;
				id2544192_iterator++){
			var listener = listeners[id2544192_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_line",
									"visual_character_V_keypress_37" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_character)
			
			,1,
			visual_line 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_block",
									"visual_character_ctrl_v_keypress_36" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_character)
			
			,1,
			visual_block 
		); 
	
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_character",
									"visual_character_ctrl_g_keypress_38" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_character)
			
			,1,
			select_character 
		); 
	
			}
		}

		

			return visual_mode['ctrl_g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2544906)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"visual_block",
									"visual_character_ctrl_v_keypress_36" );
							
		}
	
	
					//enter states
					visual_block.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_character)
			
			,1,
			visual_block 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2544900)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"visual_line",
									"visual_character_V_keypress_37" );
							
		}
	
	
					//enter states
					visual_line.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_character)
			
			,1,
			visual_line 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2544934)
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_character",
									"select_character",
									"visual_character_ctrl_g_keypress_38" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					select_character.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_character)
			
			,1,
			select_character 
		); 
	
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
				this.parent = in_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
					];
				
				
				this.toString = function(){
					return "insert_mode"
				}

				this.enterAction = function(){
					
						controller.makeCursorThin()
						controller.updateModeText("-- INSERT --")
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("insert_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2544729_iterator=0, 
			id2544729_hoist=listeners.length;
				id2544729_iterator < id2544729_hoist;
				id2544729_iterator++){
			var listener = listeners[id2544729_iterator];

			
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['init']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['P_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['p_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['colon_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['v_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['V_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['ctrl_v_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['i_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['a_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['yank_executed']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['x_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['d_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"insert_mode_esc_keypress_39" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(insert_mode)
			
			,1,
			normal_mode 
		); 
	
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['esc_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['enter_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['backspace_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['zero_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['bling_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['w_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['e_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['b_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['h_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['l_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['k_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['down_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['g_keypress']();
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['y_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_keypress_Regexp_id2544923)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"normal_mode",
									"insert_mode_esc_keypress_39" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(insert_mode)
			
			,1,
			normal_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2544962)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeNewLine()
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2544968)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeBackspace()
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2544928)
					
						&& (_event.data.charCode)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return in_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			insert_modeConstructor.prototype = in_mode;
			return new insert_modeConstructor();
		})();

	

		var command_mode = (function(){

			function command_modeConstructor(){
				this.parent = in_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							in_mode
					];
				
				
				this.toString = function(){
					return "command_mode"
				}

				this.enterAction = function(){
					
						controller.updateModeText("-- COMMAND --")
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("command_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2544933_iterator=0, 
			id2544933_hoist=listeners.length;
				id2544933_iterator < id2544933_hoist;
				id2544933_iterator++){
			var listener = listeners[id2544933_iterator];

			
								//from
								listener.onExit("command_mode");
							
		}
	
	
				}

				

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"command_mode_esc_keypress_40" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(command_mode)
			
			,1,
			normal_mode 
		); 
	
			}
		}

		

			return in_mode['esc_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_keypress_Regexp_id2544923)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"command_mode",
									"normal_mode",
									"command_mode_esc_keypress_40" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(command_mode)
			
			,1,
			normal_mode 
		); 
	
			}
		}

	
				}
				

			return in_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			command_modeConstructor.prototype = in_mode;
			return new command_modeConstructor();
		})();

	

		var dispatching_events = (function(){

			function dispatching_eventsConstructor(){
				this.parent = main;

				this.initial = null;

				this.depth = 2;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "dispatching_events"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("dispatching_events");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545843_iterator=0, 
			id2545843_hoist=listeners.length;
				id2545843_iterator < id2545843_hoist;
				id2545843_iterator++){
			var listener = listeners[id2545843_iterator];

			
								//from
								listener.onExit("dispatching_events");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return main.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			dispatching_eventsConstructor.prototype = main;
			return new dispatching_eventsConstructor();
		})();

	

		var dispatching_events_initial = (function(){

			function dispatching_events_initialConstructor(){
				this.parent = dispatching_events;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							dispatching_events
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "dispatching_events_initial"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("dispatching_events_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545849_iterator=0, 
			id2545849_hoist=listeners.length;
				id2545849_iterator < id2545849_hoist;
				id2545849_iterator++){
			var listener = listeners[id2545849_iterator];

			
								//from
								listener.onExit("dispatching_events_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					dispatching_events_initial.exitAction();
							

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"dispatching_events_initial_$default_41" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(dispatching_events_initial)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return dispatching_events.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			dispatching_events_initialConstructor.prototype = dispatching_events;
			return new dispatching_events_initialConstructor();
		})();

	

		var main_dispatching_events = (function(){

			function main_dispatching_eventsConstructor(){
				this.parent = dispatching_events;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "main_dispatching_events"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("main_dispatching_events");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545938_iterator=0, 
			id2545938_hoist=listeners.length;
				id2545938_iterator < id2545938_hoist;
				id2545938_iterator++){
			var listener = listeners[id2545938_iterator];

			
								//from
								listener.onExit("main_dispatching_events");
							
		}
	
	
				}

				

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveDown(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveLeft(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['backspace_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToEndOfLine(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToStartOfNextWord(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToEndOfNextWord(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToStartOfPreviousWord(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveLeft(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveRight(false,updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveUp(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveDown(updateSelection())
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveLeft(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveRight(false,updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveUp(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveDown(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['down_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_g",
									"main_dispatching_events_g_keypress_43" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_g.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_g 
		); 
	
			}
		}

		

			return dispatching_events['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.copySelectedTextIntoRegister();  
					
				//send event
				innerEventQueue.push(
						

		"yank_executed"
	,
						{},
						true );
			

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_y",
									"main_dispatching_events_y_keypress_44" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_y.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_y 
		); 
	
			}
		}

		

			return dispatching_events['y_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(bling_keypress_Regexp_id2544974)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToEndOfLine(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2544968)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveLeft(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2544962)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveDown(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(w_keypress_Regexp_id2544980)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToStartOfNextWord(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_keypress_Regexp_id2544985)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToEndOfNextWord(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_keypress_Regexp_id2544991)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveToStartOfPreviousWord(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_keypress_Regexp_id2544996)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveLeft(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_keypress_Regexp_id2545002)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveRight(false,updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_keypress_Regexp_id2545008)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveUp(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_keypress_Regexp_id2545013)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveDown(updateSelection())
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(left_keypress_Regexp_id2545019)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveLeft(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2545024)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveRight(false,updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2545030)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveUp(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2545036)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveDown(updateSelection());
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(g_keypress_Regexp_id2545041)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"after_g",
									"main_dispatching_events_g_keypress_43" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_g.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_g 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(y_keypress_Regexp_id2545047)
					
						&& (In(visual_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.copySelectedTextIntoRegister();  
					
				//send event
				innerEventQueue.push(
						

		"yank_executed"
	,
						{},
						true );
			

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(y_keypress_Regexp_id2545047)
					
						&& (In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"after_y",
									"main_dispatching_events_y_keypress_44" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_y.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_y 
		); 
	
			}
		}

	
				}
				

			return dispatching_events.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			main_dispatching_eventsConstructor.prototype = dispatching_events;
			return new main_dispatching_eventsConstructor();
		})();

	

		var main_dispatching_events_initial = (function(){

			function main_dispatching_events_initialConstructor(){
				this.parent = main_dispatching_events;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							dispatching_events
								,
							main_dispatching_events
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "main_dispatching_events_initial"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("main_dispatching_events_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545954_iterator=0, 
			id2545954_hoist=listeners.length;
				id2545954_iterator < id2545954_hoist;
				id2545954_iterator++){
			var listener = listeners[id2545954_iterator];

			
								//from
								listener.onExit("main_dispatching_events_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					main_dispatching_events_initial.exitAction();
							

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"before_nonzero_digit",
									"main_dispatching_events_initial_$default_42" );
							
		}
	
	
					//enter states
					before_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(main_dispatching_events_initial)
			
			,1,
			before_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return main_dispatching_events.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			main_dispatching_events_initialConstructor.prototype = main_dispatching_events;
			return new main_dispatching_events_initialConstructor();
		})();

	

		var before_nonzero_digit = (function(){

			function before_nonzero_digitConstructor(){
				this.parent = main_dispatching_events;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							dispatching_events
								,
							main_dispatching_events
					];
				
				
				this.toString = function(){
					return "before_nonzero_digit"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("before_nonzero_digit");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2546370_iterator=0, 
			id2546370_hoist=listeners.length;
				id2546370_iterator < id2546370_hoist;
				id2546370_iterator++){
			var listener = listeners[id2546370_iterator];

			
								//from
								listener.onExit("before_nonzero_digit");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['backspace_keypress']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
							controller.moveToStartOfLine(updateSelection());
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['down_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

		

			return main_dispatching_events['y_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(zero_keypress_Regexp_id2545052)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
							controller.moveToStartOfLine(updateSelection());
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2544928)
					
						&& (/[1-9]/.exec(String.fromCharCode(_event.data.charCode)) &&         (In(normal_mode) || In(visual_mode)))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_nonzero_digit.exitAction();
							

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"before_nonzero_digit",
									"after_nonzero_digit",
									"before_nonzero_digit_*_45" );
							
		}
	
	
					//enter states
					after_nonzero_digit.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_nonzero_digit)
			
			,1,
			after_nonzero_digit 
		); 
	
			}
		}

	
				}
				

			return main_dispatching_events.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			before_nonzero_digitConstructor.prototype = main_dispatching_events;
			return new before_nonzero_digitConstructor();
		})();

	

		var after_nonzero_digit = (function(){

			function after_nonzero_digitConstructor(){
				this.parent = main_dispatching_events;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							dispatching_events
								,
							main_dispatching_events
					];
				
				
				this.toString = function(){
					return "after_nonzero_digit"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("after_nonzero_digit");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2546469_iterator=0, 
			id2546469_hoist=listeners.length;
				id2546469_iterator < id2546469_hoist;
				id2546469_iterator++){
			var listener = listeners[id2546469_iterator];

			
								//from
								listener.onExit("after_nonzero_digit");
							
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
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['backspace_keypress']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['down_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['y_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2544928)
					
						&& (/\d/.exec(String.fromCharCode(_event.data.charCode)) &&         (In(normal_mode) || In(visual_mode)))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = repeatInput + String.fromCharCode(_event.data.charCode);
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return main_dispatching_events.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			after_nonzero_digitConstructor.prototype = main_dispatching_events;
			return new after_nonzero_digitConstructor();
		})();

	

		var completing_two_part_command = (function(){

			function completing_two_part_commandConstructor(){
				this.parent = dispatching_events;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "completing_two_part_command"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("completing_two_part_command");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545946_iterator=0, 
			id2545946_hoist=listeners.length;
				id2545946_iterator < id2545946_hoist;
				id2545946_iterator++){
			var listener = listeners[id2545946_iterator];

			
								//from
								listener.onExit("completing_two_part_command");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['backspace_keypress']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['down_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return dispatching_events['y_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2544928)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2532772_iterator=0, 
			id2532772_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2532772_iterator];

			
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

		

		for(var id2532772_iterator=0, 
			id2532772_hoist=statesExited.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = statesExited[id2532772_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"completing_two_part_command",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_49" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

	
				}
				

			return dispatching_events.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			completing_two_part_commandConstructor.prototype = dispatching_events;
			return new completing_two_part_commandConstructor();
		})();

	

		var completing_two_part_command_initial = (function(){

			function completing_two_part_command_initialConstructor(){
				this.parent = completing_two_part_command;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							dispatching_events
								,
							completing_two_part_command
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "completing_two_part_command_initial"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("completing_two_part_command_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2548898_iterator=0, 
			id2548898_hoist=listeners.length;
				id2548898_iterator < id2548898_hoist;
				id2548898_iterator++){
			var listener = listeners[id2548898_iterator];

			
								//from
								listener.onExit("completing_two_part_command_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					completing_two_part_command_initial.exitAction();
							

				//transition action
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_g",
									"completing_two_part_command_initial_$default_46" );
							
		}
	
	
					//enter states
					after_g.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(completing_two_part_command_initial)
			
			,1,
			after_g 
		); 
	
			}
		}

		

			return completing_two_part_command['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return completing_two_part_command.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			completing_two_part_command_initialConstructor.prototype = completing_two_part_command;
			return new completing_two_part_command_initialConstructor();
		})();

	

		var after_g = (function(){

			function after_gConstructor(){
				this.parent = completing_two_part_command;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							dispatching_events
								,
							completing_two_part_command
					];
				
				
				this.toString = function(){
					return "after_g"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("after_g");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2548973_iterator=0, 
			id2548973_hoist=listeners.length;
				id2548973_iterator < id2548973_hoist;
				id2548973_iterator++){
			var listener = listeners[id2548973_iterator];

			
								//from
								listener.onExit("after_g");
							
		}
	
	
				}

				

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_g.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var parsedRepeatInput = parseInt(repeatInput);
							if(parsedRepeatInput){ 
								controller.moveCursorToLine(parsedRepeatInput-1);
							}else{
								controller.moveToFirstLineOfDocument();
							}
						repeatInput = '';
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_g_g_keypress_47" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_g)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['g_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(g_keypress_Regexp_id2545041)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_g.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var parsedRepeatInput = parseInt(repeatInput);
							if(parsedRepeatInput){ 
								controller.moveCursorToLine(parsedRepeatInput-1);
							}else{
								controller.moveToFirstLineOfDocument();
							}
						repeatInput = '';
	

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_g",
									"main_dispatching_events_initial",
									"after_g_g_keypress_47" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_g)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

	
				}
				

			return completing_two_part_command.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			after_gConstructor.prototype = completing_two_part_command;
			return new after_gConstructor();
		})();

	

		var after_y = (function(){

			function after_yConstructor(){
				this.parent = completing_two_part_command;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533521
								,
							main
								,
							dispatching_events
								,
							completing_two_part_command
					];
				
				
				this.toString = function(){
					return "after_y"
				}

				this.enterAction = function(){
					

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
								//to
								listener.onEntry("after_y");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2549103_iterator=0, 
			id2549103_hoist=listeners.length;
				id2549103_iterator < id2549103_hoist;
				id2549103_iterator++){
			var listener = listeners[id2549103_iterator];

			
								//from
								listener.onExit("after_y");
							
		}
	
	
				}

				

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_y.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							controller.yankCurrentLineIntoRegister();
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_y_y_keypress_48" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_y)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['y_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(y_keypress_Regexp_id2545047)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_g : true
                               ,after_y : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_y.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							controller.yankCurrentLineIntoRegister();
						

		for(var id2532772_iterator=0, 
			id2532772_hoist=listeners.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var listener = listeners[id2532772_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_y",
									"main_dispatching_events_initial",
									"after_y_y_keypress_48" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_y)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

	
				}
				

			return completing_two_part_command.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			after_yConstructor.prototype = completing_two_part_command;
			return new after_yConstructor();
		})();

	

		
				//states enum for glass-box unit testing
				

		this._states = {
			_initial : _initial,initial_default : initial_default,main_initial : main_initial,in_mode_initial : in_mode_initial,normal_mode : normal_mode,visual_or_select_mode_initial : visual_or_select_mode_initial,select_mode_initial : select_mode_initial,select_line : select_line,select_block : select_block,select_character : select_character,visual_mode_initial : visual_mode_initial,visual_line : visual_line,visual_block : visual_block,visual_character : visual_character,insert_mode : insert_mode,command_mode : command_mode,dispatching_events_initial : dispatching_events_initial,main_dispatching_events_initial : main_dispatching_events_initial,before_nonzero_digit : before_nonzero_digit,after_nonzero_digit : after_nonzero_digit,completing_two_part_command_initial : completing_two_part_command_initial,after_g : after_g,after_y : after_y
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
	

		this["yank_executed"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"yank_executed"
	
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
	

		this["g_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"g_keypress"
	
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
	

				//initialization script
				
		function updateSelection(){
			return In(visual_or_select_mode);
		}
	

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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=currentConfiguration.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = currentConfiguration[id2532772_iterator];

			
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
				

		for(var id2532772_iterator=0, 
			id2532772_hoist=currentConfiguration.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var state = currentConfiguration[id2532772_iterator];

			
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
			

		for(var id2532772_iterator=0, 
			id2532772_hoist=enabledTransitions.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var t = enabledTransitions[id2532772_iterator];

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

		for(var id2532772_iterator=0, 
			id2532772_hoist=currentConfiguration.length;
				id2532772_iterator < id2532772_hoist;
				id2532772_iterator++){
			var s = currentConfiguration[id2532772_iterator];

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

	
