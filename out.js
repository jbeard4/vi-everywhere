

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
				

		var $default_Regexp_id2849479 = /^($default)/
				,
				init_Regexp_id2849487 = /^(init)/
				,
				i_Regexp_id2849492 = /^(i)/
				,
				a_Regexp_id2849498 = /^(a)/
				,
				w_Regexp_id2849504 = /^(w)/
				,
				e_Regexp_id2849509 = /^(e)/
				,
				b_Regexp_id2849515 = /^(b)/
				,
				zero_Regexp_id2849520 = /^(zero)/
				,
				bling_Regexp_id2849526 = /^(bling)/
				,
				left_Regexp_id2849532 = /^(left)/
				,
				right_Regexp_id2849537 = /^(right)/
				,
				up_Regexp_id2849543 = /^(up)/
				,
				down_Regexp_id2849548 = /^(down)/
				,
				h_Regexp_id2849554 = /^(h)/
				,
				backspace_Regexp_id2849560 = /^(backspace)/
				,
				l_Regexp_id2849565 = /^(l)/
				,
				k_Regexp_id2849571 = /^(k)/
				,
				j_Regexp_id2849576 = /^(j)/
				,
				enter_Regexp_id2849582 = /^(enter)/
				,
				esc_Regexp_id2849588 = /^(esc)/
				,
				star_Regexp_id2849593 = /.*/
				;
				

				//abstract state
				

		var AbstractState = new function(){
			//triggers are methods

			
				this.$default = function(){};
			
				this.init = function(){};
			
				this.i = function(){};
			
				this.a = function(){};
			
				this.w = function(){};
			
				this.e = function(){};
			
				this.b = function(){};
			
				this.zero = function(){};
			
				this.bling = function(){};
			
				this.left = function(){};
			
				this.right = function(){};
			
				this.up = function(){};
			
				this.down = function(){};
			
				this.h = function(){};
			
				this.backspace = function(){};
			
				this.l = function(){};
			
				this.k = function(){};
			
				this.j = function(){};
			
				this.enter = function(){};
			
				this.esc = function(){};
			

			this.$default = function(){};

			this.$dispatchPrefixEvent = function(){};
		}
	

				//states
				

		var scxml_id2843412 = (function(){

			function scxml_id2843412Constructor(){
				this.parent = AbstractState;

				this.initial = null;

				this.depth = 0;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						false;
					
				
				this.toString = function(){
					return "scxml_id2843412"
				}

				this.enterAction = function(){
					

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
								//to
								listener.onEntry("scxml_id2843412");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2844634_iterator=0, 
			id2844634_hoist=listeners.length;
				id2844634_iterator < id2844634_hoist;
				id2844634_iterator++){
			var listener = listeners[id2844634_iterator];

			
								//from
								listener.onExit("scxml_id2843412");
							
		}
	
	
				}

				
		this.$dispatchPrefixEvent = function(e){
				

			return AbstractState.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			scxml_id2843412Constructor.prototype = AbstractState;
			return new scxml_id2843412Constructor();
		})();

	

		var _initial = (function(){

			function _initialConstructor(){
				this.parent = scxml_id2843412;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2843412
					];
				
					this.parent.initial = this; //init parent's pointer to initial state
				
				
				this.toString = function(){
					return "_initial"
				}

				this.enterAction = function(){
					

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
								//to
								listener.onEntry("_initial");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2845246_iterator=0, 
			id2845246_hoist=listeners.length;
				id2845246_iterator < id2845246_hoist;
				id2845246_iterator++){
			var listener = listeners[id2845246_iterator];

			
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
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				
					hasTakenDefaultTransition = true;
				

				//exit states
				_initial.exitAction();
						

				//transition action
				

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
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

		

			return scxml_id2843412['$default']();
		}
	
		this.$dispatchPrefixEvent = function(e){
				

			return scxml_id2843412.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			_initialConstructor.prototype = scxml_id2843412;
			return new _initialConstructor();
		})();

	

		var initial_default = (function(){

			function initial_defaultConstructor(){
				this.parent = scxml_id2843412;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2843412
					];
				
				
				this.toString = function(){
					return "initial_default"
				}

				this.enterAction = function(){
					

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
								//to
								listener.onEntry("initial_default");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2844576_iterator=0, 
			id2844576_hoist=listeners.length;
				id2844576_iterator < id2844576_hoist;
				id2844576_iterator++){
			var listener = listeners[id2844576_iterator];

			
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
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				initial_default.exitAction();
						

				//transition action
				controller = _event.data;
	

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
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

		

			return scxml_id2843412['init']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(init_Regexp_id2849487)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				initial_default.exitAction();
						

				//transition action
				controller = _event.data;
	

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
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
				

			return scxml_id2843412.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			initial_defaultConstructor.prototype = scxml_id2843412;
			return new initial_defaultConstructor();
		})();

	

		var normal_mode = (function(){

			function normal_modeConstructor(){
				this.parent = scxml_id2843412;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2843412
					];
				
				
				this.toString = function(){
					return "normal_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorFat()
				controller.updateModeText("-- NORMAL --")
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
								//to
								listener.onEntry("normal_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2843431_iterator=0, 
			id2843431_hoist=listeners.length;
				id2843431_iterator < id2843431_hoist;
				id2843431_iterator++){
			var listener = listeners[id2843431_iterator];

			
								//from
								listener.onExit("normal_mode");
							
		}
	
	
				}

				

		this.i = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_i_3" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['i']();
		}
	

		this.a = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveRight(true);
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"normal_mode_a_4" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['a']();
		}
	

		this.w = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToStartOfNextWord()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_w_5" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['w']();
		}
	

		this.e = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToEndOfNextWord()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_e_6" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['e']();
		}
	

		this.b = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToStartOfPreviousWord()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_b_7" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['b']();
		}
	

		this.zero = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToStartOfLine()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_zero_8" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['zero']();
		}
	

		this.bling = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToEndOfLine()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_bling_9" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['bling']();
		}
	

		this.left = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_left_10" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['left']();
		}
	

		this.right = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveRight(false)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_right_11" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['right']();
		}
	

		this.up = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveUp()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_up_12" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['up']();
		}
	

		this.down = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_down_13" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['down']();
		}
	

		this.h = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_h_14" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['h']();
		}
	

		this.backspace = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_backspace_15" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['backspace']();
		}
	

		this.l = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveRight(false)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_l_16" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['l']();
		}
	

		this.k = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveUp()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_k_17" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['k']();
		}
	

		this.j = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_j_18" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['j']();
		}
	

		this.enter = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"normal_mode_enter_19" );
							
		}
	
	

				//enter states
				normal_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			normal_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['enter']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(i_Regexp_id2849492)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_i_3" );
							
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
			
				
				if(e.match(a_Regexp_id2849498)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveRight(true);
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"insert_mode",
									"normal_mode_a_4" );
							
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
			
				
				if(e.match(w_Regexp_id2849504)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToStartOfNextWord()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_w_5" );
							
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
			
				
				if(e.match(e_Regexp_id2849509)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToEndOfNextWord()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_e_6" );
							
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
			
				
				if(e.match(b_Regexp_id2849515)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToStartOfPreviousWord()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_b_7" );
							
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
			
				
				if(e.match(zero_Regexp_id2849520)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToStartOfLine()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_zero_8" );
							
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
			
				
				if(e.match(bling_Regexp_id2849526)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveToEndOfLine()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_bling_9" );
							
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
			
				
				if(e.match(left_Regexp_id2849532)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_left_10" );
							
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
			
				
				if(e.match(right_Regexp_id2849537)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveRight(false)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_right_11" );
							
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
			
				
				if(e.match(up_Regexp_id2849543)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveUp()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_up_12" );
							
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
			
				
				if(e.match(down_Regexp_id2849548)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_down_13" );
							
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
			
				
				if(e.match(h_Regexp_id2849554)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_h_14" );
							
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
			
				
				if(e.match(backspace_Regexp_id2849560)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_backspace_15" );
							
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
			
				
				if(e.match(l_Regexp_id2849565)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveRight(false)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_l_16" );
							
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
			
				
				if(e.match(k_Regexp_id2849571)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveUp()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_k_17" );
							
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
			
				
				if(e.match(j_Regexp_id2849576)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_j_18" );
							
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
			
				
				if(e.match(enter_Regexp_id2849582)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				normal_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"normal_mode",
									"normal_mode",
									"normal_mode_enter_19" );
							
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
				

			return scxml_id2843412.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			normal_modeConstructor.prototype = scxml_id2843412;
			return new normal_modeConstructor();
		})();

	

		var insert_mode = (function(){

			function insert_modeConstructor(){
				this.parent = scxml_id2843412;

				this.initial = null;

				this.depth = 1;

				this.historyState = null;

				//these variables facilitate fast In predicate
				this.isBasic = 
				
						true;
					
					this.ancestors = [
						scxml_id2843412
					];
				
				
				this.toString = function(){
					return "insert_mode"
				}

				this.enterAction = function(){
					
				controller.makeCursorThin()
				controller.updateModeText("-- INSERT --")
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
								//to
								listener.onEntry("insert_mode");
							
		}
	
	
				}

				this.exitAction = function(){
					

		for(var id2843439_iterator=0, 
			id2843439_hoist=listeners.length;
				id2843439_iterator < id2843439_hoist;
				id2843439_iterator++){
			var listener = listeners[id2843439_iterator];

			
								//from
								listener.onExit("insert_mode");
							
		}
	
	
				}

				

		this.init = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['init']();
		}
	

		this.i = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['i']();
		}
	

		this.a = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['a']();
		}
	

		this.w = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['w']();
		}
	

		this.e = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['e']();
		}
	

		this.b = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['b']();
		}
	

		this.zero = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['zero']();
		}
	

		this.bling = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['bling']();
		}
	

		this.left = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_left_21" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['left']();
		}
	

		this.right = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveRight(true)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_right_22" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['right']();
		}
	

		this.up = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveUp()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_up_23" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['up']();
		}
	

		this.down = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_down_24" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['down']();
		}
	

		this.h = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['h']();
		}
	

		this.backspace = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeBackspace()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_backspace_26" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['backspace']();
		}
	

		this.l = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['l']();
		}
	

		this.k = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['k']();
		}
	

		this.j = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['j']();
		}
	

		this.enter = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeNewLine()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_enter_25" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

	
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['enter']();
		}
	

		this.esc = function(){

			
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"normal_mode",
									"insert_mode_esc_20" );
							
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
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"",
									"insert_mode",
									"insert_mode_*_27" );
							
		}
	
	

				//enter states
				insert_mode.enterAction();
				

				//update configuration
				

		currentConfiguration = [
			insert_mode
		]; 
	
			}
		}

		

			return scxml_id2843412['esc']();
		}
	
		this.$dispatchPrefixEvent = function(e){
			
				
				if(e.match(esc_Regexp_id2849588)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"normal_mode",
									"insert_mode_esc_20" );
							
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
			
				
				if(e.match(left_Regexp_id2849532)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveLeft()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"insert_mode",
									"insert_mode_left_21" );
							
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
			
				
				if(e.match(right_Regexp_id2849537)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveRight(true)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"insert_mode",
									"insert_mode_right_22" );
							
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
			
				
				if(e.match(up_Regexp_id2849543)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveUp()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"insert_mode",
									"insert_mode_up_23" );
							
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
			
				
				if(e.match(down_Regexp_id2849548)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.moveDown()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"insert_mode",
									"insert_mode_down_24" );
							
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
			
				
				if(e.match(enter_Regexp_id2849582)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeNewLine()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"insert_mode",
									"insert_mode_enter_25" );
							
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
			
				
				if(e.match(backspace_Regexp_id2849560)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeBackspace()
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"insert_mode",
									"insert_mode_backspace_26" );
							
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
			
				
				if(e.match(star_Regexp_id2849593)
					){
					
		return {
			preemptedBasicStates : 
               
               {
                       initial_default : true
                               ,normal_mode : true
                               ,insert_mode : true
                               
               }
       ,
			action : function(){
				

				//exit states
				insert_mode.exitAction();
						

				//transition action
				
				controller.writeChar(_event.data.charCode)
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=listeners.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var listener = listeners[id2847897_iterator];

			
							//transition id
							
								listener.onTransition(
									"insert_mode",
									"insert_mode",
									"insert_mode_*_27" );
							
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
				

			return scxml_id2843412.$dispatchPrefixEvent(e);
		}
		
	
				

			}
			insert_modeConstructor.prototype = scxml_id2843412;
			return new insert_modeConstructor();
		})();

	

		
				//states enum for glass-box unit testing
				

		this._states = {
			_initial : _initial,initial_default : initial_default,normal_mode : normal_mode,insert_mode : insert_mode
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
				

		for(var id2847897_iterator=0, 
			id2847897_hoist=currentConfiguration.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var state = currentConfiguration[id2847897_iterator];

			
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
				

		for(var id2847897_iterator=0, 
			id2847897_hoist=currentConfiguration.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var state = currentConfiguration[id2847897_iterator];

			
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
			

		for(var id2847897_iterator=0, 
			id2847897_hoist=enabledTransitions.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var t = enabledTransitions[id2847897_iterator];

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

		for(var id2847897_iterator=0, 
			id2847897_hoist=currentConfiguration.length;
				id2847897_iterator < id2847897_hoist;
				id2847897_iterator++){
			var s = currentConfiguration[id2847897_iterator];

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

	
