

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
				

		var $default_Regexp_id2349651 = /^($default)/
				,
				init_Regexp_id2349660 = /^(init)/
				,
				P_keypress_Regexp_id2349665 = /^(P_keypress)/
				,
				p_keypress_Regexp_id2349671 = /^(p_keypress)/
				,
				colon_keypress_Regexp_id2349677 = /^(colon_keypress)/
				,
				v_keypress_Regexp_id2349682 = /^(v_keypress)/
				,
				V_keypress_Regexp_id2349688 = /^(V_keypress)/
				,
				ctrl_v_keypress_Regexp_id2349694 = /^(ctrl_v_keypress)/
				,
				i_keypress_Regexp_id2349699 = /^(i_keypress)/
				,
				a_keypress_Regexp_id2349705 = /^(a_keypress)/
				,
				esc_keypress_Regexp_id2349710 = /^(esc_keypress)/
				,
				star_Regexp_id2349716 = /.*/
				,
				ctrl_g_keypress_Regexp_id2349722 = /^(ctrl_g_keypress)/
				,
				y_keypress_Regexp_id2349728 = /^(y_keypress)/
				,
				x_keypress_Regexp_id2349733 = /^(x_keypress)/
				,
				d_keypress_Regexp_id2349739 = /^(d_keypress)/
				,
				c_keypress_Regexp_id2349744 = /^(c_keypress)/
				,
				enter_keypress_Regexp_id2349750 = /^(enter_keypress)/
				,
				backspace_keypress_Regexp_id2349756 = /^(backspace_keypress)/
				,
				bling_keypress_Regexp_id2349761 = /^(bling_keypress)/
				,
				w_keypress_Regexp_id2349767 = /^(w_keypress)/
				,
				e_keypress_Regexp_id2349773 = /^(e_keypress)/
				,
				b_keypress_Regexp_id2349778 = /^(b_keypress)/
				,
				zero_keypress_Regexp_id2349784 = /^(zero_keypress)/
				,
				h_keypress_Regexp_id2349790 = /^(h_keypress)/
				,
				l_keypress_Regexp_id2349795 = /^(l_keypress)/
				,
				k_keypress_Regexp_id2349801 = /^(k_keypress)/
				,
				j_keypress_Regexp_id2349806 = /^(j_keypress)/
				,
				left_keypress_Regexp_id2349812 = /^(left_keypress)/
				,
				right_keypress_Regexp_id2349818 = /^(right_keypress)/
				,
				up_keypress_Regexp_id2349824 = /^(up_keypress)/
				,
				down_keypress_Regexp_id2349829 = /^(down_keypress)/
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
			
				this.y_keypress = function(){};
			
				this.x_keypress = function(){};
			
				this.d_keypress = function(){};
			
				this.c_keypress = function(){};
			
				this.esc_keypress = function(){};
			
				this.enter_keypress = function(){};
			
				this.backspace_keypress = function(){};
			
				this.bling_keypress = function(){};
			
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
			

			this.$default = function(){};

			this.$dispatchPrefixEvent = function(){};
		}
	

				//states
				

		var scxml_id2338350 = (function(){

			function scxml_id2338350Constructor(){
				this.parent = AbstractState;

				this.initial = null;

				this.depth = 0;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "scxml_id2338350"
				}

				this.enterAction = function(){
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("scxml_id2338350");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2346877_iterator=0, 
			id2346877_hoist=listeners.length;
				id2346877_iterator < id2346877_hoist;
				id2346877_iterator++){
			var listener = listeners[id2346877_iterator];

			
								//from
								listener.onExit("scxml_id2338350");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return AbstractState.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			scxml_id2338350Constructor.prototype = AbstractState;
			return new scxml_id2338350Constructor();
		})();

	

		var _initial = (function(){

			function _initialConstructor(){
				this.parent = scxml_id2338350;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2338350
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "_initial"
				}

				this.enterAction = function(){
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2340263_iterator=0, 
			id2340263_hoist=listeners.length;
				id2340263_iterator < id2340263_hoist;
				id2340263_iterator++){
			var listener = listeners[id2340263_iterator];

			
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
                               ,main_dispatching_events : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					_initial.exitAction();
							

				//transition action
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		

			return scxml_id2338350['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2338350.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			_initialConstructor.prototype = scxml_id2338350;
			return new _initialConstructor();
		})();

	

		var initial_default = (function(){

			function initial_defaultConstructor(){
				this.parent = scxml_id2338350;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2338350
					];
				
				
				this.toString = function(){
					return "initial_default"
				}

				this.enterAction = function(){
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("initial_default");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2338407_iterator=0, 
			id2338407_hoist=listeners.length;
				id2338407_iterator < id2338407_hoist;
				id2338407_iterator++){
			var listener = listeners[id2338407_iterator];

			
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
                               ,main_dispatching_events : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		

			return scxml_id2338350['init']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(init_Regexp_id2349660)
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
                               ,main_dispatching_events : true
                               
               }
       ,
			action : function(){
				

					//exit states
					initial_default.exitAction();
							

				//transition action
				controller = _event.data;
	

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

			return scxml_id2338350.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			initial_defaultConstructor.prototype = scxml_id2338350;
			return new initial_defaultConstructor();
		})();

	

		var main = (function(){

			function mainConstructor(){
				this.parent = scxml_id2338350;

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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("main");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2341406_iterator=0, 
			id2341406_hoist=listeners.length;
				id2341406_iterator < id2341406_hoist;
				id2341406_iterator++){
			var listener = listeners[id2341406_iterator];

			
								//from
								listener.onExit("main");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2338350.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			mainConstructor.prototype = scxml_id2338350;
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
						scxml_id2338350
								,
							main
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "main_initial"
				}

				this.enterAction = function(){
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("main_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2341409_iterator=0, 
			id2341409_hoist=listeners.length;
				id2341409_iterator < id2341409_hoist;
				id2341409_iterator++){
			var listener = listeners[id2341409_iterator];

			
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
                               ,main_dispatching_events : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					main_initial.exitAction();
							

				//transition action
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("in_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2349803_iterator=0, 
			id2349803_hoist=listeners.length;
				id2349803_iterator < id2349803_hoist;
				id2349803_iterator++){
			var listener = listeners[id2349803_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("in_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2349809_iterator=0, 
			id2349809_hoist=listeners.length;
				id2349809_iterator < id2349809_hoist;
				id2349809_iterator++){
			var listener = listeners[id2349809_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("normal_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2340969_iterator=0, 
			id2340969_hoist=listeners.length;
				id2340969_iterator < id2340969_hoist;
				id2340969_iterator++){
			var listener = listeners[id2340969_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(P_keypress_Regexp_id2349665)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.putTextFromRegisterBeforeCursor();
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(p_keypress_Regexp_id2349671)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.putTextFromRegisterAfterCursor();
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(colon_keypress_Regexp_id2349677)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2349682)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2349688)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2349694)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(i_keypress_Regexp_id2349699)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(a_keypress_Regexp_id2349705)
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					
						controller.clearSelection(); 
					

		for(var id2340975_iterator=0, 
			id2340975_hoist=listeners.length;
				id2340975_iterator < id2340975_hoist;
				id2340975_iterator++){
			var listener = listeners[id2340975_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(esc_keypress_Regexp_id2349710)
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("visual_or_select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2340643_iterator=0, 
			id2340643_hoist=listeners.length;
				id2340643_iterator < id2340643_hoist;
				id2340643_iterator++){
			var listener = listeners[id2340643_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("select_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2342808_iterator=0, 
			id2342808_hoist=listeners.length;
				id2342808_iterator < id2342808_hoist;
				id2342808_iterator++){
			var listener = listeners[id2342808_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(star_Regexp_id2349716)
					
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.replaceSelectedTextIntoRegister(_event.data.charCode);  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("select_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2342818_iterator=0, 
			id2342818_hoist=listeners.length;
				id2342818_iterator < id2342818_hoist;
				id2342818_iterator++){
			var listener = listeners[id2342818_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
							

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("select_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2342970_iterator=0, 
			id2342970_hoist=listeners.length;
				id2342970_iterator < id2342970_hoist;
				id2342970_iterator++){
			var listener = listeners[id2342970_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2349694)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2349682)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2349722)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
							

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("select_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2343321_iterator=0, 
			id2343321_hoist=listeners.length;
				id2343321_iterator < id2343321_hoist;
				id2343321_iterator++){
			var listener = listeners[id2343321_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2349682)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2349688)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2349722)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
							

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("select_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2343601_iterator=0, 
			id2343601_hoist=listeners.length;
				id2343601_iterator < id2343601_hoist;
				id2343601_iterator++){
			var listener = listeners[id2343601_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2349694)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2349688)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2349722)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("visual_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2343890_iterator=0, 
			id2343890_hoist=listeners.length;
				id2343890_iterator < id2343890_hoist;
				id2343890_iterator++){
			var listener = listeners[id2343890_iterator];

			
								//from
								listener.onExit("visual_mode");
							
		}
	
	
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.copySelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"visual_mode_y_keypress_26" );
							
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

		

			return visual_or_select_mode['y_keypress']();
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(y_keypress_Regexp_id2349728)
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.copySelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
								listener.onTransition(
									"visual_mode",
									"normal_mode",
									"visual_mode_y_keypress_26" );
							
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
			
				
				if(e.match(x_keypress_Regexp_id2349733)
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(d_keypress_Regexp_id2349739)
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(c_keypress_Regexp_id2349744)
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

		for(var id2339051_iterator=0, 
			id2339051_hoist=nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2339051_iterator];

			
					if(state.ancestors.indexOf(lca)
			 !== -1
			){
						
				do{
					statesExited.push(state);
				}while((state = state.parent) &&
					state != lca && 
					statesExited.indexOf(state)
			 == -1)
			
					}
				
		}
	
	

		//sort by depth
		statesExited.sort(sortByDepthDeepToShallow);

		//execute actions for each of these states

		

		for(var id2339051_iterator=0, 
			id2339051_hoist=statesExited.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = statesExited[id2339051_iterator];

			
				state.exitAction();
			
		}
	
	

				//transition action
				
							controller.deleteSelectedTextIntoRegister();  
						

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("visual_mode_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2348610_iterator=0, 
			id2348610_hoist=listeners.length;
				id2348610_iterator < id2348610_hoist;
				id2348610_iterator++){
			var listener = listeners[id2348610_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
							

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("visual_line");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2348962_iterator=0, 
			id2348962_hoist=listeners.length;
				id2348962_iterator < id2348962_hoist;
				id2348962_iterator++){
			var listener = listeners[id2348962_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2349694)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2349682)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2349722)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
							

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("visual_block");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2349243_iterator=0, 
			id2349243_hoist=listeners.length;
				id2349243_iterator < id2349243_hoist;
				id2349243_iterator++){
			var listener = listeners[id2349243_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(v_keypress_Regexp_id2349682)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2349688)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2349722)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
							

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("visual_character");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2349523_iterator=0, 
			id2349523_hoist=listeners.length;
				id2349523_iterator < id2349523_hoist;
				id2349523_iterator++){
			var listener = listeners[id2349523_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_v_keypress_Regexp_id2349694)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(V_keypress_Regexp_id2349688)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(ctrl_g_keypress_Regexp_id2349722)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("insert_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2350580_iterator=0, 
			id2350580_hoist=listeners.length;
				id2350580_iterator < id2350580_hoist;
				id2350580_iterator++){
			var listener = listeners[id2350580_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['ctrl_g_keypress']();
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['y_keypress']();
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['backspace_keypress']();
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['b_keypress']();
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['zero_keypress']();
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return in_mode['down_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_keypress_Regexp_id2349710)
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(enter_keypress_Regexp_id2349750)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeNewLine()
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2349756)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       
               }
       ,
			action : function(){
				

				//transition action
				
						controller.writeBackspace()
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(star_Regexp_id2349716)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("command_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2350792_iterator=0, 
			id2350792_hoist=listeners.length;
				id2350792_iterator < id2350792_hoist;
				id2350792_iterator++){
			var listener = listeners[id2350792_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
			
				
				if(e.match(esc_keypress_Regexp_id2349710)
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("dispatching_events");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2351350_iterator=0, 
			id2351350_hoist=listeners.length;
				id2351350_iterator < id2351350_hoist;
				id2351350_iterator++){
			var listener = listeners[id2351350_iterator];

			
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
						scxml_id2338350
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("dispatching_events_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2351356_iterator=0, 
			id2351356_hoist=listeners.length;
				id2351356_iterator < id2351356_hoist;
				id2351356_iterator++){
			var listener = listeners[id2351356_iterator];

			
								//from
								listener.onExit("dispatching_events_initial");
							
		}
	
	
				}

				

		this.$default = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       main_dispatching_events : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

					//exit states
					dispatching_events_initial.exitAction();
							

				//transition action
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"main_dispatching_events",
									"dispatching_events_initial_$default_41" );
							
		}
	
	
					//enter states
					main_dispatching_events.enterAction();
					

					//update configuration
					

		currentConfiguration.splice(
			currentConfiguration.indexOf(dispatching_events_initial)
			
			,1,
			main_dispatching_events 
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
				
						true;
					
					this.ancestors = [
						scxml_id2338350
								,
							main
								,
							dispatching_events
					];
				
				
				this.toString = function(){
					return "main_dispatching_events"
				}

				this.enterAction = function(){
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
								//to
								listener.onEntry("main_dispatching_events");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2351433_iterator=0, 
			id2351433_hoist=listeners.length;
				id2351433_iterator < id2351433_hoist;
				id2351433_iterator++){
			var listener = listeners[id2351433_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['b_keypress']();
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['zero_keypress']();
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

		

			return dispatching_events['down_keypress']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(bling_keypress_Regexp_id2349761)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(backspace_keypress_Regexp_id2349756)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(enter_keypress_Regexp_id2349750)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(w_keypress_Regexp_id2349767)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(e_keypress_Regexp_id2349773)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(b_keypress_Regexp_id2349778)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(zero_keypress_Regexp_id2349784)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(h_keypress_Regexp_id2349790)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(l_keypress_Regexp_id2349795)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(k_keypress_Regexp_id2349801)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(j_keypress_Regexp_id2349806)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(left_keypress_Regexp_id2349812)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(right_keypress_Regexp_id2349818)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(up_keypress_Regexp_id2349824)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
			
				
				if(e.match(down_keypress_Regexp_id2349829)
					
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
					

		for(var id2339051_iterator=0, 
			id2339051_hoist=listeners.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var listener = listeners[id2339051_iterator];

			
							//transition id
							
		}
	
	
			}
		}

	
				}
				

			return dispatching_events.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			main_dispatching_eventsConstructor.prototype = dispatching_events;
			return new main_dispatching_eventsConstructor();
		})();

	

		
				//states enum for glass-box unit testing
				

		this._states = {
			_initial : _initial,initial_default : initial_default,main_initial : main_initial,in_mode_initial : in_mode_initial,normal_mode : normal_mode,visual_or_select_mode_initial : visual_or_select_mode_initial,select_mode_initial : select_mode_initial,select_line : select_line,select_block : select_block,select_character : select_character,visual_mode_initial : visual_mode_initial,visual_line : visual_line,visual_block : visual_block,visual_character : visual_character,insert_mode : insert_mode,command_mode : command_mode,dispatching_events_initial : dispatching_events_initial,main_dispatching_events : main_dispatching_events
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
	

				//initialization script
				
		function updateSelection(){
			return In(visual_mode);
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=currentConfiguration.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = currentConfiguration[id2339051_iterator];

			
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
				

		for(var id2339051_iterator=0, 
			id2339051_hoist=currentConfiguration.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var state = currentConfiguration[id2339051_iterator];

			
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
			

		for(var id2339051_iterator=0, 
			id2339051_hoist=enabledTransitions.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var t = enabledTransitions[id2339051_iterator];

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

		for(var id2339051_iterator=0, 
			id2339051_hoist=currentConfiguration.length;
				id2339051_iterator < id2339051_hoist;
				id2339051_iterator++){
			var s = currentConfiguration[id2339051_iterator];

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

	
