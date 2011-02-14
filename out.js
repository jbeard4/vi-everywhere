

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
					= 0, registerName, recordedMacroEventsMap
					= {}, recordedMacroEventName, recordedMacroEventList, visualOrSelectUpdateModeTextFunction
					= updateVisualAndSelectModeText;
	
				//send timeout id variables
				

		var $default_Regexp_id2549358 = /^($default)/
				,
				init_Regexp_id2549577 = /^(init)/
				,
				P_keypress_Regexp_id2549583 = /^(P_keypress)/
				,
				p_keypress_Regexp_id2549588 = /^(p_keypress)/
				,
				colon_keypress_Regexp_id2549594 = /^(colon_keypress)/
				,
				v_keypress_Regexp_id2549599 = /^(v_keypress)/
				,
				V_keypress_Regexp_id2549605 = /^(V_keypress)/
				,
				ctrl_v_keypress_Regexp_id2549611 = /^(ctrl_v_keypress)/
				,
				i_keypress_Regexp_id2549616 = /^(i_keypress)/
				,
				a_keypress_Regexp_id2549622 = /^(a_keypress)/
				,
				esc_keypress_Regexp_id2549628 = /^(esc_keypress)/
				,
				ctrl_g_keypress_Regexp_id2549633 = /^(ctrl_g_keypress)/
				,
				star_Regexp_id2549639 = /.*/
				,
				yank_executed_Regexp_id2549645 = /^(yank_executed)/
				,
				x_keypress_Regexp_id2549650 = /^(x_keypress)/
				,
				d_keypress_Regexp_id2549656 = /^(d_keypress)/
				,
				c_keypress_Regexp_id2549662 = /^(c_keypress)/
				,
				enter_keypress_Regexp_id2549667 = /^(enter_keypress)/
				,
				backspace_keypress_Regexp_id2549673 = /^(backspace_keypress)/
				,
				first_command_line_char_deleted_Regexp_id2549678 = /^(first_command_line_char_deleted)/
				,
				command_executed_Regexp_id2549684 = /^(command_executed)/
				,
				bling_keypress_Regexp_id2549690 = /^(bling_keypress)/
				,
				w_keypress_Regexp_id2549696 = /^(w_keypress)/
				,
				e_keypress_Regexp_id2549701 = /^(e_keypress)/
				,
				b_keypress_Regexp_id2549707 = /^(b_keypress)/
				,
				h_keypress_Regexp_id2549713 = /^(h_keypress)/
				,
				l_keypress_Regexp_id2549718 = /^(l_keypress)/
				,
				k_keypress_Regexp_id2549724 = /^(k_keypress)/
				,
				j_keypress_Regexp_id2549729 = /^(j_keypress)/
				,
				left_keypress_Regexp_id2549735 = /^(left_keypress)/
				,
				right_keypress_Regexp_id2549741 = /^(right_keypress)/
				,
				up_keypress_Regexp_id2549746 = /^(up_keypress)/
				,
				down_keypress_Regexp_id2549752 = /^(down_keypress)/
				,
				at_keypress_Regexp_id2549758 = /^(at_keypress)/
				,
				g_keypress_Regexp_id2549763 = /^(g_keypress)/
				,
				y_keypress_Regexp_id2549769 = /^(y_keypress)/
				,
				double_quote_keypress_Regexp_id2549775 = /^(double_quote_keypress)/
				,
				zero_keypress_Regexp_id2549780 = /^(zero_keypress)/
				,
				q_keypress_Regexp_id2549786 = /^(q_keypress)/
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
			
				this.first_command_line_char_deleted = function(){};
			
				this.command_executed = function(){};
			
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
			
				this.at_keypress = function(){};
			
				this.g_keypress = function(){};
			
				this.y_keypress = function(){};
			
				this.double_quote_keypress = function(){};
			
				this.q_keypress = function(){};
			

			this.$default = function(){};

			this.$dispatchPrefixEvent = function(){};
		}
	

				//states
				

		var scxml_id2533533 = (function(){

			function scxml_id2533533Constructor(){
				this.parent = AbstractState;

				this.initial = null;

				this.depth = 0;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "scxml_id2533533"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("scxml_id2533533");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2534634_iterator=0, 
			id2534634_hoist=listeners.length;
				id2534634_iterator < id2534634_hoist;
				id2534634_iterator++){
			var listener = listeners[id2534634_iterator];

			
								//from
								listener.onExit("scxml_id2533533");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return AbstractState.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			scxml_id2533533Constructor.prototype = AbstractState;
			return new scxml_id2533533Constructor();
		})();

	

		var _initial = (function(){

			function _initialConstructor(){
				this.parent = scxml_id2533533;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "_initial"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2532251_iterator=0, 
			id2532251_hoist=listeners.length;
				id2532251_iterator < id2532251_hoist;
				id2532251_iterator++){
			var listener = listeners[id2532251_iterator];

			
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
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               ,before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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

		

			return scxml_id2533533['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2533533.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			_initialConstructor.prototype = scxml_id2533533;
			return new _initialConstructor();
		})();

	

		var initial_default = (function(){

			function initial_defaultConstructor(){
				this.parent = scxml_id2533533;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
					];
				
				
				this.toString = function(){
					return "initial_default"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("initial_default");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2535042_iterator=0, 
			id2535042_hoist=listeners.length;
				id2535042_iterator < id2535042_hoist;
				id2535042_iterator++){
			var listener = listeners[id2535042_iterator];

			
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
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               ,before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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

		

			return scxml_id2533533['init']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(init_Regexp_id2549577)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               ,before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				

			return scxml_id2533533.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			initial_defaultConstructor.prototype = scxml_id2533533;
			return new initial_defaultConstructor();
		})();

	

		var main = (function(){

			function mainConstructor(){
				this.parent = scxml_id2533533;

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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("main");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2532724_iterator=0, 
			id2532724_hoist=listeners.length;
				id2532724_iterator < id2532724_hoist;
				id2532724_iterator++){
			var listener = listeners[id2532724_iterator];

			
								//from
								listener.onExit("main");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2533533.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			mainConstructor.prototype = scxml_id2533533;
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
						scxml_id2533533
								,
							main
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "main_initial"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("main_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2532727_iterator=0, 
			id2532727_hoist=listeners.length;
				id2532727_iterator < id2532727_hoist;
				id2532727_iterator++){
			var listener = listeners[id2532727_iterator];

			
								//from
								listener.onExit("main_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               ,before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               ,before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					main_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"in_mode_initial",
									"main_initial_$default_3" );
							
								listener.onTransition(
									"",
									"dispatching_events_initial",
									"main_initial_$default_4" );
							
								listener.onTransition(
									"",
									"recording_macro_initial",
									"main_initial_$default_5" );
							
		}
	
	
					//enter states
					recording_macro.enterAction();
					recording_macro_initial.enterAction();
					dispatching_events.enterAction();
					dispatching_events_initial.enterAction();
					in_mode.enterAction();
					in_mode_initial.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			in_mode_initial,dispatching_events_initial,recording_macro_initial
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
						
					controller.unhideCursor();
					controller.hideCmdCursor();
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("in_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2536926_iterator=0, 
			id2536926_hoist=listeners.length;
				id2536926_iterator < id2536926_hoist;
				id2536926_iterator++){
			var listener = listeners[id2536926_iterator];

			
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("in_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2536934_iterator=0, 
			id2536934_hoist=listeners.length;
				id2536934_iterator < id2536934_hoist;
				id2536934_iterator++){
			var listener = listeners[id2536934_iterator];

			
								//from
								listener.onExit("in_mode_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					in_mode_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"in_mode_initial_$default_6" );
							
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
						scxml_id2533533
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
						updateModeText("-- NORMAL --");
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("normal_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2534727_iterator=0, 
			id2534727_hoist=listeners.length;
				id2534727_iterator < id2534727_hoist;
				id2534727_iterator++){
			var listener = listeners[id2534727_iterator];

			
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
				
						controller.putTextFromRegisterBeforeCursor(registerName);
						registerName = null;
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				
						controller.putTextFromRegisterAfterCursor(registerName);
						registerName = null;
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"command_mode",
									"normal_mode_colon_keypress_7" );
							
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
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_mode",
									"normal_mode_v_keypress_8" );
							
								listener.onTransition(
									"",
									"character_mode",
									"normal_mode_v_keypress_9" );
							
		}
	
	
					//enter states
					visual_and_select_modes.enterAction();
					line_or_block_or_character_mode.enterAction();
					character_mode.enterAction();
					visual_and_select_modes.enterAction();
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_mode,character_mode
		]; 
	
			}
		}

		

			return in_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_mode",
									"normal_mode_V_keypress_10" );
							
								listener.onTransition(
									"",
									"line_mode",
									"normal_mode_V_keypress_11" );
							
		}
	
	
					//enter states
					visual_and_select_modes.enterAction();
					line_or_block_or_character_mode.enterAction();
					line_mode.enterAction();
					visual_and_select_modes.enterAction();
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_mode,line_mode
		]; 
	
			}
		}

		

			return in_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_mode",
									"normal_mode_ctrl_v_keypress_12" );
							
								listener.onTransition(
									"",
									"block_mode",
									"normal_mode_ctrl_v_keypress_13" );
							
		}
	
	
					//enter states
					visual_and_select_modes.enterAction();
					line_or_block_or_character_mode.enterAction();
					block_mode.enterAction();
					visual_and_select_modes.enterAction();
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_mode,block_mode
		]; 
	
			}
		}

		

			return in_mode['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_i_keypress_14" );
							
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
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				
						controller.moveRight(true);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_a_keypress_15" );
							
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
			
				
				if(e.match(P_keypress_Regexp_id2549583)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.putTextFromRegisterBeforeCursor(registerName);
						registerName = null;
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(p_keypress_Regexp_id2549588)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.putTextFromRegisterAfterCursor(registerName);
						registerName = null;
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_keypress_Regexp_id2549594)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"command_mode",
									"normal_mode_colon_keypress_7" );
							
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
			
				
				if(e.match(v_keypress_Regexp_id2549599)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_mode",
									"normal_mode_v_keypress_8" );
							
								listener.onTransition(
									"normal_mode",
									"character_mode",
									"normal_mode_v_keypress_9" );
							
		}
	
	
					//enter states
					visual_and_select_modes.enterAction();
					line_or_block_or_character_mode.enterAction();
					character_mode.enterAction();
					visual_and_select_modes.enterAction();
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_mode,character_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2549605)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_mode",
									"normal_mode_V_keypress_10" );
							
								listener.onTransition(
									"normal_mode",
									"line_mode",
									"normal_mode_V_keypress_11" );
							
		}
	
	
					//enter states
					visual_and_select_modes.enterAction();
					line_or_block_or_character_mode.enterAction();
					line_mode.enterAction();
					visual_and_select_modes.enterAction();
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_mode,line_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2549611)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"visual_mode",
									"normal_mode_ctrl_v_keypress_12" );
							
								listener.onTransition(
									"normal_mode",
									"block_mode",
									"normal_mode_ctrl_v_keypress_13" );
							
		}
	
	
					//enter states
					visual_and_select_modes.enterAction();
					line_or_block_or_character_mode.enterAction();
					block_mode.enterAction();
					visual_and_select_modes.enterAction();
					visual_or_select_mode.enterAction();
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_mode,block_mode
		]; 
	
			}
		}

	
				}
			
				
				if(e.match(i_keypress_Regexp_id2549616)
					
						&& (!In(after_double_quote) && !In(after_at) && !In(after_q_keypress_selecting_register))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_i_keypress_14" );
							
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
			
				
				if(e.match(a_keypress_Regexp_id2549622)
					
						&& (!In(after_double_quote) && !In(after_at) && !In(after_q_keypress_selecting_register))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					normal_mode.exitAction();
							

				//transition action
				
						controller.moveRight(true);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_a_keypress_15" );
							
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

	

		var visual_and_select_modes = (function(){

			function visual_and_select_modesConstructor(){
				this.parent = in_mode;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "visual_and_select_modes"
				}

				this.enterAction = function(){
					
						controller.makeCursorFat();
						controller.startSelection(); 
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("visual_and_select_modes");
							
		}
	
	
				}

				this.exitAction = function(){
					
						controller.clearSelection(); 
						visualOrSelectUpdateModeTextFunction = updateVisualAndSelectModeText;
					

		for(var id2534732_iterator=0, 
			id2534732_hoist=listeners.length;
				id2534732_iterator < id2534732_hoist;
				id2534732_iterator++){
			var listener = listeners[id2534732_iterator];

			
								//from
								listener.onExit("visual_and_select_modes");
							
		}
	
	
				}

				

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_and_select_modes_esc_keypress_18" );
							
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
			
				
				if(e.match(esc_keypress_Regexp_id2549628)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_and_select_modes",
									"normal_mode",
									"visual_and_select_modes_esc_keypress_18" );
							
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
			visual_and_select_modesConstructor.prototype = in_mode;
			return new visual_and_select_modesConstructor();
		})();

	

		var visual_and_select_modes_initial = (function(){

			function visual_and_select_modes_initialConstructor(){
				this.parent = visual_and_select_modes;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "visual_and_select_modes_initial"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("visual_and_select_modes_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2538437_iterator=0, 
			id2538437_hoist=listeners.length;
				id2538437_iterator < id2538437_hoist;
				id2538437_iterator++){
			var listener = listeners[id2538437_iterator];

			
								//from
								listener.onExit("visual_and_select_modes_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					visual_and_select_modes_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_or_select_mode_initial",
									"visual_and_select_modes_initial_$default_16" );
							
								listener.onTransition(
									"",
									"line_or_block_or_character_mode_initial",
									"visual_and_select_modes_initial_$default_17" );
							
		}
	
	
					//enter states
					line_or_block_or_character_mode.enterAction();
					line_or_block_or_character_mode_initial.enterAction();
					visual_or_select_mode.enterAction();
					visual_or_select_mode_initial.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			visual_or_select_mode_initial,line_or_block_or_character_mode_initial
		]; 
	
			}
		}

		

			return visual_and_select_modes['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return visual_and_select_modes.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_and_select_modes_initialConstructor.prototype = visual_and_select_modes;
			return new visual_and_select_modes_initialConstructor();
		})();

	

		var visual_or_select_mode = (function(){

			function visual_or_select_modeConstructor(){
				this.parent = visual_and_select_modes;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "visual_or_select_mode"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2538632_iterator=0, 
			id2538632_hoist=listeners.length;
				id2538632_iterator < id2538632_hoist;
				id2538632_iterator++){
			var listener = listeners[id2538632_iterator];

			
								//from
								listener.onExit("visual_or_select_mode");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return visual_and_select_modes.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_or_select_modeConstructor.prototype = visual_and_select_modes;
			return new visual_or_select_modeConstructor();
		})();

	

		var visual_or_select_mode_initial = (function(){

			function visual_or_select_mode_initialConstructor(){
				this.parent = visual_or_select_mode;

				this.initial = null;

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
								,
							visual_or_select_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "visual_or_select_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2538640_iterator=0, 
			id2538640_hoist=listeners.length;
				id2538640_iterator < id2538640_hoist;
				id2538640_iterator++){
			var listener = listeners[id2538640_iterator];

			
								//from
								listener.onExit("visual_or_select_mode_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_mode : true
                               ,visual_mode : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					visual_or_select_mode_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_mode",
									"visual_or_select_mode_initial_$default_19" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_or_select_mode_initial)
			
			,1,
			visual_mode 
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

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
								,
							visual_or_select_mode
					];
				
				
				this.toString = function(){
					return "select_mode"
				}

				this.enterAction = function(){
					
								visualOrSelectUpdateModeTextFunction = visualOrSelectUpdateModeTextFunction({visual_or_select_state:select_mode});
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2538715_iterator=0, 
			id2538715_hoist=listeners.length;
				id2538715_iterator < id2538715_hoist;
				id2538715_iterator++){
			var listener = listeners[id2538715_iterator];

			
								//from
								listener.onExit("select_mode");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_mode : true
                               ,visual_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"visual_mode",
									"select_mode_ctrl_g_keypress_20" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_mode)
			
			,1,
			visual_mode 
		); 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
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
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['y_keypress']();
		}
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"select_mode_*_21" );
							
		}
	
	
					//enter states
					insert_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2549633)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_mode : true
                               ,visual_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					select_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_mode",
									"visual_mode",
									"select_mode_ctrl_g_keypress_20" );
							
		}
	
	
					//enter states
					visual_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(select_mode)
			
			,1,
			visual_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2549639)
					
						&& (_event.data.charCode !== 0)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.replaceSelectedTextIntoRegister(_event.data.charCode,registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"select_mode",
									"insert_mode",
									"select_mode_*_21" );
							
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
				

			return visual_or_select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			select_modeConstructor.prototype = visual_or_select_mode;
			return new select_modeConstructor();
		})();

	

		var visual_mode = (function(){

			function visual_modeConstructor(){
				this.parent = visual_or_select_mode;

				this.initial = null;

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
								,
							visual_or_select_mode
					];
				
				
				this.toString = function(){
					return "visual_mode"
				}

				this.enterAction = function(){
					
								visualOrSelectUpdateModeTextFunction = visualOrSelectUpdateModeTextFunction({visual_or_select_state:visual_mode});
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("visual_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2537209_iterator=0, 
			id2537209_hoist=listeners.length;
				id2537209_iterator < id2537209_hoist;
				id2537209_iterator++){
			var listener = listeners[id2537209_iterator];

			
								//from
								listener.onExit("visual_mode");
							
		}
	
	
				}

				

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       select_mode : true
                               ,visual_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"select_mode",
									"visual_mode_ctrl_g_keypress_22" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_mode)
			
			,1,
			select_mode 
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
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_yank_executed_23" );
							
		}
	
	
					//enter states
					normal_mode.enterAction();
					

					//update configuration
					

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return visual_or_select_mode['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.deleteSelectedTextIntoRegister(registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.deleteSelectedTextIntoRegister(registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.deleteSelectedTextIntoRegister(registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2549633)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       select_mode : true
                               ,visual_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					visual_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"select_mode",
									"visual_mode_ctrl_g_keypress_22" );
							
		}
	
	
					//enter states
					select_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(visual_mode)
			
			,1,
			select_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(yank_executed_Regexp_id2549645)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_yank_executed_23" );
							
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
			
				
				if(e.match(x_keypress_Regexp_id2549650)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.deleteSelectedTextIntoRegister(registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
			
				
				if(e.match(d_keypress_Regexp_id2549656)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.deleteSelectedTextIntoRegister(registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
			
				
				if(e.match(c_keypress_Regexp_id2549662)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = in_mode;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
								controller.deleteSelectedTextIntoRegister(registerName);  
								registerName = null;
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				

			return visual_or_select_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			visual_modeConstructor.prototype = visual_or_select_mode;
			return new visual_modeConstructor();
		})();

	

		var line_or_block_or_character_mode = (function(){

			function line_or_block_or_character_modeConstructor(){
				this.parent = visual_and_select_modes;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "line_or_block_or_character_mode"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("line_or_block_or_character_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545642_iterator=0, 
			id2545642_hoist=listeners.length;
				id2545642_iterator < id2545642_hoist;
				id2545642_iterator++){
			var listener = listeners[id2545642_iterator];

			
								//from
								listener.onExit("line_or_block_or_character_mode");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return visual_and_select_modes.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			line_or_block_or_character_modeConstructor.prototype = visual_and_select_modes;
			return new line_or_block_or_character_modeConstructor();
		})();

	

		var line_or_block_or_character_mode_initial = (function(){

			function line_or_block_or_character_mode_initialConstructor(){
				this.parent = line_or_block_or_character_mode;

				this.initial = null;

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
								,
							line_or_block_or_character_mode
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "line_or_block_or_character_mode_initial"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("line_or_block_or_character_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545652_iterator=0, 
			id2545652_hoist=listeners.length;
				id2545652_iterator < id2545652_hoist;
				id2545652_iterator++){
			var listener = listeners[id2545652_iterator];

			
								//from
								listener.onExit("line_or_block_or_character_mode_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					line_or_block_or_character_mode_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"character_mode",
									"line_or_block_or_character_mode_initial_$default_27" );
							
		}
	
	
					//enter states
					character_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(line_or_block_or_character_mode_initial)
			
			,1,
			character_mode 
		); 
	
			}
		}

		

			return line_or_block_or_character_mode['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return line_or_block_or_character_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			line_or_block_or_character_mode_initialConstructor.prototype = line_or_block_or_character_mode;
			return new line_or_block_or_character_mode_initialConstructor();
		})();

	

		var line_mode = (function(){

			function line_modeConstructor(){
				this.parent = line_or_block_or_character_mode;

				this.initial = null;

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
								,
							line_or_block_or_character_mode
					];
				
				
				this.toString = function(){
					return "line_mode"
				}

				this.enterAction = function(){
					
								visualOrSelectUpdateModeTextFunction = visualOrSelectUpdateModeTextFunction({line_or_block_or_char_state:line_mode});
								controller.setSelectionMode(controller.SELECTION_MODE.LINE);
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("line_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545729_iterator=0, 
			id2545729_hoist=listeners.length;
				id2545729_iterator < id2545729_hoist;
				id2545729_iterator++){
			var listener = listeners[id2545729_iterator];

			
								//from
								listener.onExit("line_mode");
							
		}
	
	
				}

				

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					line_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"character_mode",
									"line_mode_v_keypress_29" );
							
		}
	
	
					//enter states
					character_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(line_mode)
			
			,1,
			character_mode 
		); 
	
			}
		}

		

			return line_or_block_or_character_mode['v_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					line_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"block_mode",
									"line_mode_ctrl_v_keypress_28" );
							
		}
	
	
					//enter states
					block_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(line_mode)
			
			,1,
			block_mode 
		); 
	
			}
		}

		

			return line_or_block_or_character_mode['ctrl_v_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2549611)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					line_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"line_mode",
									"block_mode",
									"line_mode_ctrl_v_keypress_28" );
							
		}
	
	
					//enter states
					block_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(line_mode)
			
			,1,
			block_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(v_keypress_Regexp_id2549599)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					line_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"line_mode",
									"character_mode",
									"line_mode_v_keypress_29" );
							
		}
	
	
					//enter states
					character_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(line_mode)
			
			,1,
			character_mode 
		); 
	
			}
		}

	
				}
				

			return line_or_block_or_character_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			line_modeConstructor.prototype = line_or_block_or_character_mode;
			return new line_modeConstructor();
		})();

	

		var block_mode = (function(){

			function block_modeConstructor(){
				this.parent = line_or_block_or_character_mode;

				this.initial = null;

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
								,
							line_or_block_or_character_mode
					];
				
				
				this.toString = function(){
					return "block_mode"
				}

				this.enterAction = function(){
					
								visualOrSelectUpdateModeTextFunction = visualOrSelectUpdateModeTextFunction({line_or_block_or_char_state:block_mode});
								controller.setSelectionMode(controller.SELECTION_MODE.BLOCK);
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("block_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2545895_iterator=0, 
			id2545895_hoist=listeners.length;
				id2545895_iterator < id2545895_hoist;
				id2545895_iterator++){
			var listener = listeners[id2545895_iterator];

			
								//from
								listener.onExit("block_mode");
							
		}
	
	
				}

				

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					block_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"character_mode",
									"block_mode_v_keypress_30" );
							
		}
	
	
					//enter states
					character_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(block_mode)
			
			,1,
			character_mode 
		); 
	
			}
		}

		

			return line_or_block_or_character_mode['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					block_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"line_mode",
									"block_mode_V_keypress_31" );
							
		}
	
	
					//enter states
					line_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(block_mode)
			
			,1,
			line_mode 
		); 
	
			}
		}

		

			return line_or_block_or_character_mode['V_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(v_keypress_Regexp_id2549599)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					block_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"block_mode",
									"character_mode",
									"block_mode_v_keypress_30" );
							
		}
	
	
					//enter states
					character_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(block_mode)
			
			,1,
			character_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2549605)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					block_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"block_mode",
									"line_mode",
									"block_mode_V_keypress_31" );
							
		}
	
	
					//enter states
					line_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(block_mode)
			
			,1,
			line_mode 
		); 
	
			}
		}

	
				}
				

			return line_or_block_or_character_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			block_modeConstructor.prototype = line_or_block_or_character_mode;
			return new block_modeConstructor();
		})();

	

		var character_mode = (function(){

			function character_modeConstructor(){
				this.parent = line_or_block_or_character_mode;

				this.initial = null;

				this.depth = 5;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							in_mode
								,
							visual_and_select_modes
								,
							line_or_block_or_character_mode
					];
				
				
				this.toString = function(){
					return "character_mode"
				}

				this.enterAction = function(){
					
								visualOrSelectUpdateModeTextFunction = visualOrSelectUpdateModeTextFunction({line_or_block_or_char_state:character_mode});
								controller.setSelectionMode(controller.SELECTION_MODE.CHARACTER);
							

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("character_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2546060_iterator=0, 
			id2546060_hoist=listeners.length;
				id2546060_iterator < id2546060_hoist;
				id2546060_iterator++){
			var listener = listeners[id2546060_iterator];

			
								//from
								listener.onExit("character_mode");
							
		}
	
	
				}

				

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					character_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"line_mode",
									"character_mode_V_keypress_33" );
							
		}
	
	
					//enter states
					line_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(character_mode)
			
			,1,
			line_mode 
		); 
	
			}
		}

		

			return line_or_block_or_character_mode['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					character_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"block_mode",
									"character_mode_ctrl_v_keypress_32" );
							
		}
	
	
					//enter states
					block_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(character_mode)
			
			,1,
			block_mode 
		); 
	
			}
		}

		

			return line_or_block_or_character_mode['ctrl_v_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2549611)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					character_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"character_mode",
									"block_mode",
									"character_mode_ctrl_v_keypress_32" );
							
		}
	
	
					//enter states
					block_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(character_mode)
			
			,1,
			block_mode 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(V_keypress_Regexp_id2549605)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					character_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"character_mode",
									"line_mode",
									"character_mode_V_keypress_33" );
							
		}
	
	
					//enter states
					line_mode.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(character_mode)
			
			,1,
			line_mode 
		); 
	
			}
		}

	
				}
				

			return line_or_block_or_character_mode.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			character_modeConstructor.prototype = line_or_block_or_character_mode;
			return new character_modeConstructor();
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
						scxml_id2533533
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
						updateModeText("-- INSERT --")
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("insert_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2546271_iterator=0, 
			id2546271_hoist=listeners.length;
				id2546271_iterator < id2546271_hoist;
				id2546271_iterator++){
			var listener = listeners[id2546271_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					insert_mode.exitAction();
							

				//transition action
				
						controller.moveLeft()
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"insert_mode_esc_keypress_34" );
							
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['command_executed']();
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['at_keypress']();
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['y_keypress']();
		}
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_keypress_Regexp_id2549628)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					insert_mode.exitAction();
							

				//transition action
				
						controller.moveLeft()
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"normal_mode",
									"insert_mode_esc_keypress_34" );
							
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
			
				
				if(e.match(enter_keypress_Regexp_id2549667)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeNewLine()
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2549673)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeBackspace()
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2549639)
					
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
						scxml_id2533533
								,
							main
								,
							in_mode
					];
				
				
				this.toString = function(){
					return "command_mode"
				}

				this.enterAction = function(){
					
						controller.updateModeText("")

						controller.hideCursor();
						controller.unhideCmdCursor();

						controller.writeCmdChar(":");
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("command_mode");
							
		}
	
	
				}

				this.exitAction = function(){
						
						controller.unhideCursor();
						controller.hideCmdCursor();
						controller.clearCmdLine();
					

		for(var id2546474_iterator=0, 
			id2546474_hoist=listeners.length;
				id2546474_iterator < id2546474_hoist;
				id2546474_iterator++){
			var listener = listeners[id2546474_iterator];

			
								//from
								listener.onExit("command_mode");
							
		}
	
	
				}

				

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"command_mode_esc_keypress_37" );
							
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
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"command_mode_first_command_line_char_deleted_35" );
							
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

		

			return in_mode['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"command_mode_command_executed_36" );
							
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

		

			return in_mode['command_executed']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(first_command_line_char_deleted_Regexp_id2549678)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"command_mode",
									"normal_mode",
									"command_mode_first_command_line_char_deleted_35" );
							
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
			
				
				if(e.match(command_executed_Regexp_id2549684)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"command_mode",
									"normal_mode",
									"command_mode_command_executed_36" );
							
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
			
				
				if(e.match(esc_keypress_Regexp_id2549628)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       normal_mode : true
                               ,select_mode : true
                               ,visual_mode : true
                               ,line_mode : true
                               ,block_mode : true
                               ,character_mode : true
                               ,insert_mode : true
                               ,command_mode : true
                               
               }
       ,
			action : function(){
				

					//exit states
					command_mode.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"command_mode",
									"normal_mode",
									"command_mode_esc_keypress_37" );
							
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("dispatching_events");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2547320_iterator=0, 
			id2547320_hoist=listeners.length;
				id2547320_iterator < id2547320_hoist;
				id2547320_iterator++){
			var listener = listeners[id2547320_iterator];

			
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("dispatching_events_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2547326_iterator=0, 
			id2547326_hoist=listeners.length;
				id2547326_iterator < id2547326_hoist;
				id2547326_iterator++){
			var listener = listeners[id2547326_iterator];

			
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					dispatching_events_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"dispatching_events_initial_$default_38" );
							
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
					repeatInput = 0;
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("main_dispatching_events");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2547429_iterator=0, 
			id2547429_hoist=listeners.length;
				id2547429_iterator < id2547429_hoist;
				id2547429_iterator++){
			var listener = listeners[id2547429_iterator];

			
								//from
								listener.onExit("main_dispatching_events");
							
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
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_d",
									"main_dispatching_events_d_keypress_57" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_d.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_d 
		); 
	
			}
		}

		

			return dispatching_events['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveDown(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_enter_keypress_42" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.executeCommand();
					
				//send event
				innerEventQueue.push(
						

		"command_executed"
	,
						{},
						true );
			

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveLeft(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_backspace_keypress_41" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdBackspace();
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToEndOfLine(updateSelection());
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_bling_keypress_40" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToStartOfNextWord(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_w_keypress_43" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToEndOfNextWord(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_e_keypress_44" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToStartOfPreviousWord(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_b_keypress_45" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveLeft(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_h_keypress_46" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveRight(false,updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_l_keypress_47" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveUp(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_k_keypress_48" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveDown(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_j_keypress_49" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveLeft(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_left_keypress_50" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveCmdLeft();
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveRight(false,updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_right_keypress_51" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveCmdRight();
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveUp(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_up_keypress_52" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveDown(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"main_dispatching_events_down_keypress_53" );
							
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

	
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_at",
									"main_dispatching_events_at_keypress_54" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_at.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_at 
		); 
	
			}
		}

		

			return dispatching_events['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_g",
									"main_dispatching_events_g_keypress_55" );
							
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
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				
						controller.copySelectedTextIntoRegister(registerName); 
						registerName = null;
					
				//send event
				innerEventQueue.push(
						

		"yank_executed"
	,
						{},
						true );
			

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_y",
									"main_dispatching_events_y_keypress_56" );
							
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
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_double_quote",
									"main_dispatching_events_double_quote_keypress_58" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_double_quote.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_double_quote 
		); 
	
			}
		}

		

			return dispatching_events['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(bling_keypress_Regexp_id2549690)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToEndOfLine(updateSelection());
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_bling_keypress_40" );
							
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
			
				
				if(e.match(backspace_keypress_Regexp_id2549673)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveLeft(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_backspace_keypress_41" );
							
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
			
				
				if(e.match(enter_keypress_Regexp_id2549667)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveDown(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_enter_keypress_42" );
							
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
			
				
				if(e.match(w_keypress_Regexp_id2549696)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToStartOfNextWord(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_w_keypress_43" );
							
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
			
				
				if(e.match(e_keypress_Regexp_id2549701)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToEndOfNextWord(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_e_keypress_44" );
							
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
			
				
				if(e.match(b_keypress_Regexp_id2549707)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveToStartOfPreviousWord(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_b_keypress_45" );
							
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
			
				
				if(e.match(h_keypress_Regexp_id2549713)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveLeft(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_h_keypress_46" );
							
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
			
				
				if(e.match(l_keypress_Regexp_id2549718)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveRight(false,updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_l_keypress_47" );
							
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
			
				
				if(e.match(k_keypress_Regexp_id2549724)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveUp(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_k_keypress_48" );
							
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
			
				
				if(e.match(j_keypress_Regexp_id2549729)
					
						&& (In(visual_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveDown(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_j_keypress_49" );
							
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
			
				
				if(e.match(left_keypress_Regexp_id2549735)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveLeft(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_left_keypress_50" );
							
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
			
				
				if(e.match(right_keypress_Regexp_id2549741)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveRight(false,updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_right_keypress_51" );
							
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
			
				
				if(e.match(up_keypress_Regexp_id2549746)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveUp(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_up_keypress_52" );
							
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
			
				
				if(e.match(down_keypress_Regexp_id2549752)
					
						&& (In(insert_mode) || In(visual_or_select_mode) || In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
						controller.moveDown(updateSelection(),repeatInput);
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"main_dispatching_events_initial",
									"main_dispatching_events_down_keypress_53" );
							
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
			
				
				if(e.match(left_keypress_Regexp_id2549735)
					
						&& (In(command_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveCmdLeft();
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2549741)
					
						&& (In(command_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.moveCmdRight();
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2549673)
					
						&& (In(command_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdBackspace();
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2549667)
					
						&& (In(command_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.executeCommand();
					
				//send event
				innerEventQueue.push(
						

		"command_executed"
	,
						{},
						true );
			

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2549639)
					
						&& (In(command_mode) && _event.data.charCode)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeCmdChar(_event.data.charCode)
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(at_keypress_Regexp_id2549758)
					
						&& (In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"after_at",
									"main_dispatching_events_at_keypress_54" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_at.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_at 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(g_keypress_Regexp_id2549763)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"after_g",
									"main_dispatching_events_g_keypress_55" );
							
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
			
				
				if(e.match(y_keypress_Regexp_id2549769)
					
						&& (In(visual_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.copySelectedTextIntoRegister(registerName); 
						registerName = null;
					
				//send event
				innerEventQueue.push(
						

		"yank_executed"
	,
						{},
						true );
			

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(y_keypress_Regexp_id2549769)
					
						&& (In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"after_y",
									"main_dispatching_events_y_keypress_56" );
							
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
			
				
				if(e.match(d_keypress_Regexp_id2549656)
					
						&& (In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"after_d",
									"main_dispatching_events_d_keypress_57" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_d.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_d 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(double_quote_keypress_Regexp_id2549775)
					
						&& (In(normal_mode) || In(visual_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"main_dispatching_events",
									"after_double_quote",
									"main_dispatching_events_double_quote_keypress_58" );
							
		}
	
	
					//enter states
					completing_two_part_command.enterAction();
					after_double_quote.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(statesExited[0])
			
			,1,
			after_double_quote 
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("main_dispatching_events_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2547443_iterator=0, 
			id2547443_hoist=listeners.length;
				id2547443_iterator < id2547443_hoist;
				id2547443_iterator++){
			var listener = listeners[id2547443_iterator];

			
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
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"before_nonzero_digit",
									"main_dispatching_events_initial_$default_39" );
							
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("before_nonzero_digit");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2548747_iterator=0, 
			id2548747_hoist=listeners.length;
				id2548747_iterator < id2548747_hoist;
				id2548747_iterator++){
			var listener = listeners[id2548747_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
	

		this.first_command_line_char_deleted = function(){

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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

		

			return main_dispatching_events['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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

		

			return main_dispatching_events['command_executed']();
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
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
	

		this.at_keypress = function(){

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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

		

			return main_dispatching_events['at_keypress']();
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
	

		this.double_quote_keypress = function(){

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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

		

			return main_dispatching_events['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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

		

			return main_dispatching_events['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(zero_keypress_Regexp_id2549780)
					
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
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2549639)
					
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"before_nonzero_digit",
									"after_nonzero_digit",
									"before_nonzero_digit_*_59" );
							
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("after_nonzero_digit");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2548844_iterator=0, 
			id2548844_hoist=listeners.length;
				id2548844_iterator < id2548844_hoist;
				id2548844_iterator++){
			var listener = listeners[id2548844_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['y_keypress']();
		}
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return main_dispatching_events['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2549639)
					
						&& (/\d/.exec(String.fromCharCode(_event.data.charCode)) &&         (In(normal_mode) || In(visual_mode)))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				repeatInput = parseInt(repeatInput + String.fromCharCode(_event.data.charCode));
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("completing_two_part_command");
							
		}
	
	
				}

				this.exitAction = function(){
					
						
					

		for(var id2552331_iterator=0, 
			id2552331_hoist=listeners.length;
				id2552331_iterator < id2552331_hoist;
				id2552331_iterator++){
			var listener = listeners[id2552331_iterator];

			
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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

		

			return dispatching_events['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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

		

			return dispatching_events['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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

		

			return dispatching_events['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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

		

			return dispatching_events['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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

		

			return dispatching_events['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2549639)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					 

		var statesExited = [];
		var lca = dispatching_events;

		var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;

		for(var id2533314_iterator=0, 
			id2533314_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2533314_iterator];

			
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

		

		for(var id2533314_iterator=0, 
			id2533314_hoist=statesExited.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = statesExited[id2533314_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"completing_two_part_command",
									"main_dispatching_events_initial",
									"completing_two_part_command_*_66" );
							
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("completing_two_part_command_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2554018_iterator=0, 
			id2554018_hoist=listeners.length;
				id2554018_iterator < id2554018_hoist;
				id2554018_iterator++){
			var listener = listeners[id2554018_iterator];

			
								//from
								listener.onExit("completing_two_part_command_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					completing_two_part_command_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_g",
									"completing_two_part_command_initial_$default_60" );
							
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

	

		var after_double_quote = (function(){

			function after_double_quoteConstructor(){
				this.parent = completing_two_part_command;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							dispatching_events
								,
							completing_two_part_command
					];
				
				
				this.toString = function(){
					return "after_double_quote"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("after_double_quote");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2554121_iterator=0, 
			id2554121_hoist=listeners.length;
				id2554121_iterator < id2554121_hoist;
				id2554121_iterator++){
			var listener = listeners[id2554121_iterator];

			
								//from
								listener.onExit("after_double_quote");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['y_keypress']();
		}
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2549639)
					
						&& (_event.data.charCode)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_double_quote.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				registerName = String.fromCharCode(_event.data.charCode);
	

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_double_quote",
									"main_dispatching_events_initial",
									"after_double_quote_*_61" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_double_quote)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

	
				}
				

			return completing_two_part_command.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			after_double_quoteConstructor.prototype = completing_two_part_command;
			return new after_double_quoteConstructor();
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("after_g");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2554203_iterator=0, 
			id2554203_hoist=listeners.length;
				id2554203_iterator < id2554203_hoist;
				id2554203_iterator++){
			var listener = listeners[id2554203_iterator];

			
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_g.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							if(parsedRepeatInput){ 
								controller.moveCursorToLine(parsedRepeatInput-1);
							}else{
								controller.moveToFirstLineOfDocument();
							}
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_g_g_keypress_62" );
							
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
			
				
				if(e.match(g_keypress_Regexp_id2549763)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_g.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							if(parsedRepeatInput){ 
								controller.moveCursorToLine(parsedRepeatInput-1);
							}else{
								controller.moveToFirstLineOfDocument();
							}
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_g",
									"main_dispatching_events_initial",
									"after_g_g_keypress_62" );
							
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
						scxml_id2533533
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
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("after_y");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2556647_iterator=0, 
			id2556647_hoist=listeners.length;
				id2556647_iterator < id2556647_hoist;
				id2556647_iterator++){
			var listener = listeners[id2556647_iterator];

			
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
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_y.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							controller.yankCurrentLineIntoRegister(registerName);
							registerName = null;
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_y_y_keypress_63" );
							
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
			
				
				if(e.match(y_keypress_Regexp_id2549769)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_y.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							controller.yankCurrentLineIntoRegister(registerName);
							registerName = null;
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_y",
									"main_dispatching_events_initial",
									"after_y_y_keypress_63" );
							
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

	

		var after_d = (function(){

			function after_dConstructor(){
				this.parent = completing_two_part_command;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							dispatching_events
								,
							completing_two_part_command
					];
				
				
				this.toString = function(){
					return "after_d"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("after_d");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2556775_iterator=0, 
			id2556775_hoist=listeners.length;
				id2556775_iterator < id2556775_hoist;
				id2556775_iterator++){
			var listener = listeners[id2556775_iterator];

			
								//from
								listener.onExit("after_d");
							
		}
	
	
				}

				

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_d.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							controller.deleteCurrentLineIntoRegister(registerName);
							registerName = null;
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_d_d_keypress_64" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_d)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['d_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(d_keypress_Regexp_id2549656)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_d.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							controller.deleteCurrentLineIntoRegister(registerName);
							registerName = null;
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_d",
									"main_dispatching_events_initial",
									"after_d_d_keypress_64" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_d)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

	
				}
				

			return completing_two_part_command.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			after_dConstructor.prototype = completing_two_part_command;
			return new after_dConstructor();
		})();

	

		var after_at = (function(){

			function after_atConstructor(){
				this.parent = completing_two_part_command;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							dispatching_events
								,
							completing_two_part_command
					];
				
				
				this.toString = function(){
					return "after_at"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("after_at");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2556903_iterator=0, 
			id2556903_hoist=listeners.length;
				id2556903_iterator < id2556903_hoist;
				id2556903_iterator++){
			var listener = listeners[id2556903_iterator];

			
								//from
								listener.onExit("after_at");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['y_keypress']();
		}
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

		

			return completing_two_part_command['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2549639)
					
						&& (_event.data.charCode)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_nonzero_digit : true
                               ,after_nonzero_digit : true
                               ,after_double_quote : true
                               ,after_g : true
                               ,after_y : true
                               ,after_d : true
                               ,after_at : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_at.exitAction();
							completing_two_part_command.exitAction();
							

				//transition action
				
							var eventsList = recordedMacroEventsMap[String.fromCharCode(_event.data.charCode)];
							eventsList.forEach(function(e){
								innerEventQueue.push(e.name,e.data,false);	//send event. FIXME: inner or outer queue?
							});
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_at",
									"main_dispatching_events_initial",
									"after_at_*_65" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					main_dispatching_events_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_at)
			
			,1,
			main_dispatching_events_initial 
		); 
	
			}
		}

	
				}
				

			return completing_two_part_command.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			after_atConstructor.prototype = completing_two_part_command;
			return new after_atConstructor();
		})();

	

		var recording_macro = (function(){

			function recording_macroConstructor(){
				this.parent = main;

				this.initial = null;

				this.depth = 2;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "recording_macro"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("recording_macro");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2547438_iterator=0, 
			id2547438_hoist=listeners.length;
				id2547438_iterator < id2547438_hoist;
				id2547438_iterator++){
			var listener = listeners[id2547438_iterator];

			
								//from
								listener.onExit("recording_macro");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return main.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			recording_macroConstructor.prototype = main;
			return new recording_macroConstructor();
		})();

	

		var recording_macro_initial = (function(){

			function recording_macro_initialConstructor(){
				this.parent = recording_macro;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							recording_macro
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "recording_macro_initial"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("recording_macro_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2561147_iterator=0, 
			id2561147_hoist=listeners.length;
				id2561147_iterator < id2561147_hoist;
				id2561147_iterator++){
			var listener = listeners[id2561147_iterator];

			
								//from
								listener.onExit("recording_macro_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					recording_macro_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_off_initial",
									"recording_macro_initial_$default_67" );
							
		}
	
	
					//enter states
					recording_off.enterAction();
					recording_off_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(recording_macro_initial)
			
			,1,
			recording_off_initial 
		); 
	
			}
		}

		

			return recording_macro['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return recording_macro.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			recording_macro_initialConstructor.prototype = recording_macro;
			return new recording_macro_initialConstructor();
		})();

	

		var recording_off = (function(){

			function recording_offConstructor(){
				this.parent = recording_macro;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "recording_off"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("recording_off");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2561232_iterator=0, 
			id2561232_hoist=listeners.length;
				id2561232_iterator < id2561232_hoist;
				id2561232_iterator++){
			var listener = listeners[id2561232_iterator];

			
								//from
								listener.onExit("recording_off");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return recording_macro.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			recording_offConstructor.prototype = recording_macro;
			return new recording_offConstructor();
		})();

	

		var recording_off_initial = (function(){

			function recording_off_initialConstructor(){
				this.parent = recording_off;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							recording_macro
								,
							recording_off
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "recording_off_initial"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("recording_off_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2561242_iterator=0, 
			id2561242_hoist=listeners.length;
				id2561242_iterator < id2561242_hoist;
				id2561242_iterator++){
			var listener = listeners[id2561242_iterator];

			
								//from
								listener.onExit("recording_off_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					recording_off_initial.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"before_q_keypress",
									"recording_off_initial_$default_68" );
							
		}
	
	
					//enter states
					before_q_keypress.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(recording_off_initial)
			
			,1,
			before_q_keypress 
		); 
	
			}
		}

		

			return recording_off['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return recording_off.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			recording_off_initialConstructor.prototype = recording_off;
			return new recording_off_initialConstructor();
		})();

	

		var before_q_keypress = (function(){

			function before_q_keypressConstructor(){
				this.parent = recording_off;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							recording_macro
								,
							recording_off
					];
				
				
				this.toString = function(){
					return "before_q_keypress"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("before_q_keypress");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2561315_iterator=0, 
			id2561315_hoist=listeners.length;
				id2561315_iterator < id2561315_hoist;
				id2561315_iterator++){
			var listener = listeners[id2561315_iterator];

			
								//from
								listener.onExit("before_q_keypress");
							
		}
	
	
				}

				

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_q_keypress.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"after_q_keypress_selecting_register",
									"before_q_keypress_q_keypress_69" );
							
		}
	
	
					//enter states
					after_q_keypress_selecting_register.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_q_keypress)
			
			,1,
			after_q_keypress_selecting_register 
		); 
	
			}
		}

		

			return recording_off['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(q_keypress_Regexp_id2549786)
					
						&& (In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               
               }
       ,
			action : function(){
				

					//exit states
					before_q_keypress.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"before_q_keypress",
									"after_q_keypress_selecting_register",
									"before_q_keypress_q_keypress_69" );
							
		}
	
	
					//enter states
					after_q_keypress_selecting_register.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(before_q_keypress)
			
			,1,
			after_q_keypress_selecting_register 
		); 
	
			}
		}

	
				}
				

			return recording_off.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			before_q_keypressConstructor.prototype = recording_off;
			return new before_q_keypressConstructor();
		})();

	

		var after_q_keypress_selecting_register = (function(){

			function after_q_keypress_selecting_registerConstructor(){
				this.parent = recording_off;

				this.initial = null;

				this.depth = 4;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							recording_macro
								,
							recording_off
					];
				
				
				this.toString = function(){
					return "after_q_keypress_selecting_register"
				}

				this.enterAction = function(){
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("after_q_keypress_selecting_register");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2561401_iterator=0, 
			id2561401_hoist=listeners.length;
				id2561401_iterator < id2561401_hoist;
				id2561401_iterator++){
			var listener = listeners[id2561401_iterator];

			
								//from
								listener.onExit("after_q_keypress_selecting_register");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['y_keypress']();
		}
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

		

			return recording_off['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2549639)
					
						&& (_event.data.charCode)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					after_q_keypress_selecting_register.exitAction();
							recording_off.exitAction();
							

				//transition action
				
							recordedMacroEventName = String.fromCharCode(_event.data.charCode);

							//reset register
							recordedMacroEventList = [];
							recordedMacroEventsMap[recordedMacroEventName] = recordedMacroEventList; 
						

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"after_q_keypress_selecting_register",
									"recording_on",
									"after_q_keypress_selecting_register_*_70" );
							
		}
	
	
					//enter states
					recording_on.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(after_q_keypress_selecting_register)
			
			,1,
			recording_on 
		); 
	
			}
		}

	
				}
				

			return recording_off.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			after_q_keypress_selecting_registerConstructor.prototype = recording_off;
			return new after_q_keypress_selecting_registerConstructor();
		})();

	

		var recording_on = (function(){

			function recording_onConstructor(){
				this.parent = recording_macro;

				this.initial = null;

				this.depth = 3;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2533533
								,
							main
								,
							recording_macro
					];
				
				
				this.toString = function(){
					return "recording_on"
				}

				this.enterAction = function(){
					
						controller.appendToModeText(" recording"); 
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
								//to
								listener.onEntry("recording_on");
							
		}
	
	
				}

				this.exitAction = function(){
					
						controller.removeStringFromModeText(" recording"); 
					

		for(var id2563325_iterator=0, 
			id2563325_hoist=listeners.length;
				id2563325_iterator < id2563325_hoist;
				id2563325_iterator++){
			var listener = listeners[id2563325_iterator];

			
								//from
								listener.onExit("recording_on");
							
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
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['init']();
		}
	

		this.P_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['P_keypress']();
		}
	

		this.p_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['p_keypress']();
		}
	

		this.colon_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['colon_keypress']();
		}
	

		this.v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['v_keypress']();
		}
	

		this.V_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['V_keypress']();
		}
	

		this.ctrl_v_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['ctrl_v_keypress']();
		}
	

		this.i_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['i_keypress']();
		}
	

		this.a_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['a_keypress']();
		}
	

		this.ctrl_g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['ctrl_g_keypress']();
		}
	

		this.yank_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['yank_executed']();
		}
	

		this.x_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['x_keypress']();
		}
	

		this.d_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['d_keypress']();
		}
	

		this.c_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['c_keypress']();
		}
	

		this.esc_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['esc_keypress']();
		}
	

		this.enter_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['enter_keypress']();
		}
	

		this.backspace_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['backspace_keypress']();
		}
	

		this.first_command_line_char_deleted = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['first_command_line_char_deleted']();
		}
	

		this.command_executed = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['command_executed']();
		}
	

		this.zero_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['zero_keypress']();
		}
	

		this.bling_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['bling_keypress']();
		}
	

		this.w_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['w_keypress']();
		}
	

		this.e_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['e_keypress']();
		}
	

		this.b_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['b_keypress']();
		}
	

		this.h_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['h_keypress']();
		}
	

		this.l_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['l_keypress']();
		}
	

		this.k_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['k_keypress']();
		}
	

		this.j_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['j_keypress']();
		}
	

		this.left_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['left_keypress']();
		}
	

		this.right_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['right_keypress']();
		}
	

		this.up_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['up_keypress']();
		}
	

		this.down_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['down_keypress']();
		}
	

		this.at_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['at_keypress']();
		}
	

		this.g_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['g_keypress']();
		}
	

		this.y_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['y_keypress']();
		}
	

		this.double_quote_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['double_quote_keypress']();
		}
	

		this.q_keypress = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					recording_on.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"recording_off_initial",
									"recording_on_q_keypress_71" );
							
		}
	
	
					//enter states
					recording_off.enterAction();
					recording_off_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(recording_on)
			
			,1,
			recording_off_initial 
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
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return recording_macro['q_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(q_keypress_Regexp_id2549786)
					
						&& (In(normal_mode))
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       before_q_keypress : true
                               ,after_q_keypress_selecting_register : true
                               ,recording_on : true
                               
               }
       ,
			action : function(){
				

					//exit states
					recording_on.exitAction();
							

				//transition action
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
								listener.onTransition(
									"recording_on",
									"recording_off_initial",
									"recording_on_q_keypress_71" );
							
		}
	
	
					//enter states
					recording_off.enterAction();
					recording_off_initial.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(recording_on)
			
			,1,
			recording_off_initial 
		); 
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2549639)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						recordedMacroEventList.push(clone(_event));
					

		for(var id2533314_iterator=0, 
			id2533314_hoist=listeners.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var listener = listeners[id2533314_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return recording_macro.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			recording_onConstructor.prototype = recording_macro;
			return new recording_onConstructor();
		})();

	

		
				//states enum for glass-box unit testing
				

		this._states = {
			_initial : _initial,initial_default : initial_default,main_initial : main_initial,in_mode_initial : in_mode_initial,normal_mode : normal_mode,visual_and_select_modes_initial : visual_and_select_modes_initial,visual_or_select_mode_initial : visual_or_select_mode_initial,select_mode : select_mode,visual_mode : visual_mode,line_or_block_or_character_mode_initial : line_or_block_or_character_mode_initial,line_mode : line_mode,block_mode : block_mode,character_mode : character_mode,insert_mode : insert_mode,command_mode : command_mode,dispatching_events_initial : dispatching_events_initial,main_dispatching_events_initial : main_dispatching_events_initial,before_nonzero_digit : before_nonzero_digit,after_nonzero_digit : after_nonzero_digit,completing_two_part_command_initial : completing_two_part_command_initial,after_double_quote : after_double_quote,after_g : after_g,after_y : after_y,after_d : after_d,after_at : after_at,recording_macro_initial : recording_macro_initial,recording_off_initial : recording_off_initial,before_q_keypress : before_q_keypress,after_q_keypress_selecting_register : after_q_keypress_selecting_register,recording_on : recording_on
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
	

		this["first_command_line_char_deleted"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"first_command_line_char_deleted"
	
				,data,
				true)
			}else{
				return undefined;
			}
		}
	

		this["command_executed"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"command_executed"
	
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
	

		this["at_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"at_keypress"
	
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
	

		this["double_quote_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"double_quote_keypress"
	
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
	

		this["q_keypress"] = function(data){
			if(isInStableState && !destroyed){
				runToCompletion(
				//TODO: conditionally wrap in quotes for enumerated pattern
					

		"q_keypress"
	
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

		function repeatCommand(fn,count){
			for(var i=0;i<count;i++){
				fn();
			}
		}

		function updateModeText(txt){
			if(In(recording_on)){
				controller.updateModeText(txt + " recording");
			}
			else{
				controller.updateModeText(txt);
			}
		}

		function updateVisualAndSelectModeText(arg1){
		
			function firstInnerUpdateVisualAndSelectModeText(arg2){

				var visual_or_select_state = arg1.visual_or_select_state || arg2.visual_or_select_state,
					line_or_block_or_char_state = arg1.line_or_block_or_char_state || arg2.line_or_block_or_char_state;

				function doUpdateVisualAndSelectModeText(){

					var visual_or_select_string, line_or_block_or_char_string;

					switch(visual_or_select_state){
						case visual_mode:
							visual_or_select_string = "VISUAL";
							break;
						case select_mode:
							visual_or_select_string = "SELECT";
							break;
					}

					switch(line_or_block_or_char_state){
						case character_mode:
							line_or_block_or_char_string = "CHARACTER";
							break;
						case line_mode:
							line_or_block_or_char_string = "LINE";
							break;
						case block_mode:
							line_or_block_or_char_string = "BLOCK";
					}

					var mode_text_string = "-- " + visual_or_select_string + " " + line_or_block_or_char_string + " --";

					updateModeText(mode_text_string);

					return secondUpdateVisualAndSelectModeText;
				}

				function secondUpdateVisualAndSelectModeText(arg3){
					visual_or_select_state = visual_or_select_state || arg3.visual_or_select_state,
						line_or_block_or_char_state = line_or_block_or_char_state || arg3.line_or_block_or_char_state;

					return doUpdateVisualAndSelectModeText();
				}

				return doUpdateVisualAndSelectModeText();
			}

			return firstInnerUpdateVisualAndSelectModeText;
		}

		function clone(o){
			var toReturn = {};
			for(var p in o){
				if(o.hasOwnProperty(p)){
					toReturn[p] = o[p];
				}
			}
			return toReturn;
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
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=currentConfiguration.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = currentConfiguration[id2533314_iterator];

			
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
				

		for(var id2533314_iterator=0, 
			id2533314_hoist=currentConfiguration.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var state = currentConfiguration[id2533314_iterator];

			
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
			

		for(var id2533314_iterator=0, 
			id2533314_hoist=enabledTransitions.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var t = enabledTransitions[id2533314_iterator];

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

		for(var id2533314_iterator=0, 
			id2533314_hoist=currentConfiguration.length;
				id2533314_iterator < id2533314_hoist;
				id2533314_iterator++){
			var s = currentConfiguration[id2533314_iterator];

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

	
