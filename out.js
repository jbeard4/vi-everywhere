function viBehaviourStatechartExecutionContext() {
    var self = this; //used in the rare occasions we call public functions from inside this class
    //system variable declarations
    var _event = {
        name: undefined,
        data: undefined
    },
        _name = "viBehaviour",
        _sessionid;
    var _x = {
        _event: _event,
        _name: _name,
        _sessionid: _sessionid
    };
    //variable declarations relating to data model
    var controller;
    //send timeout id variables
    var $default_Regexp_id2400602 = /^($default)/,
        init_Regexp_id2400611 = /^(init)/,
        left_Regexp_id2400616 = /^(left)/,
        right_Regexp_id2400622 = /^(right)/,
        up_Regexp_id2400628 = /^(up)/,
        down_Regexp_id2400633 = /^(down)/,
        ctrl_g_Regexp_id2400639 = /^(ctrl_g)/,
        bling_Regexp_id2400645 = /^(bling)/,
        backspace_Regexp_id2400650 = /^(backspace)/,
        enter_Regexp_id2400656 = /^(enter)/,
        colon_Regexp_id2400662 = /^(colon)/,
        w_Regexp_id2400667 = /^(w)/,
        e_Regexp_id2400673 = /^(e)/,
        b_Regexp_id2400678 = /^(b)/,
        zero_Regexp_id2400684 = /^(zero)/,
        h_Regexp_id2400690 = /^(h)/,
        l_Regexp_id2400695 = /^(l)/,
        k_Regexp_id2400701 = /^(k)/,
        j_Regexp_id2400706 = /^(j)/,
        v_Regexp_id2400712 = /^(v)/,
        V_Regexp_id2400718 = /^(V)/,
        ctrl_v_Regexp_id2400723 = /^(ctrl_v)/,
        i_Regexp_id2400729 = /^(i)/,
        a_Regexp_id2400735 = /^(a)/,
        esc_Regexp_id2400740 = /^(esc)/,
        star_Regexp_id2400746 = /.*/;
    //abstract state
    var AbstractState = new
    function() {
        //triggers are methods
        this.$default = function() {};
        this.init = function() {};
        this.ctrl_g = function() {};
        this.v = function() {};
        this.V = function() {};
        this.ctrl_v = function() {};
        this.i = function() {};
        this.a = function() {};
        this.esc = function() {};
        this.bling = function() {};
        this.backspace = function() {};
        this.enter = function() {};
        this.colon = function() {};
        this.w = function() {};
        this.e = function() {};
        this.b = function() {};
        this.zero = function() {};
        this.h = function() {};
        this.l = function() {};
        this.k = function() {};
        this.j = function() {};
        this.left = function() {};
        this.right = function() {};
        this.up = function() {};
        this.down = function() {};
        this.$default = function() {};
        this.$dispatchPrefixEvent = function() {};
    }
    //states
    var scxml_id2395003 = (function() {
        function scxml_id2395003Constructor() {
            this.parent = AbstractState;
            this.initial = null;
            this.depth = 0;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "scxml_id2395003"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("scxml_id2395003");
                }
            }
            this.exitAction = function() {
                for (var id2394758_iterator = 0, id2394758_hoist = listeners.length;
                id2394758_iterator < id2394758_hoist;
                id2394758_iterator++) {
                    var listener = listeners[id2394758_iterator];
                    //from
                    listener.onExit("scxml_id2395003");
                }
            }
            this.$dispatchPrefixEvent = function(e) {
                return AbstractState.$dispatchPrefixEvent(e);
            }
        }
        scxml_id2395003Constructor.prototype = AbstractState;
        return new scxml_id2395003Constructor();
    })();
    var _initial = (function() {
        function _initialConstructor() {
            this.parent = scxml_id2395003;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "_initial"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("_initial");
                }
            }
            this.exitAction = function() {
                for (var id2395798_iterator = 0, id2395798_hoist = listeners.length;
                id2395798_iterator < id2395798_hoist;
                id2395798_iterator++) {
                    var listener = listeners[id2395798_iterator];
                    //from
                    listener.onExit("_initial");
                }
            }
            this.$default = function() {
                return {
                    preemptedBasicStates: {
                        initial_default: true,
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true,
                        command_mode: true
                    },
                    action: function() {
                        hasTakenDefaultTransition = true;
                        //exit states
                        _initial.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "initial_default", "_initial_$default_1");
                        }
                        //enter states
                        initial_default.enterAction();
                        //update configuration
                        currentConfiguration = [
                        initial_default];
                    }
                }
                return scxml_id2395003['$default']();
            }
            this.$dispatchPrefixEvent = function(e) {
                return scxml_id2395003.$dispatchPrefixEvent(e);
            }
        }
        _initialConstructor.prototype = scxml_id2395003;
        return new _initialConstructor();
    })();
    var initial_default = (function() {
        function initial_defaultConstructor() {
            this.parent = scxml_id2395003;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003];
            this.toString = function() {
                return "initial_default"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("initial_default");
                }
            }
            this.exitAction = function() {
                for (var id2396825_iterator = 0, id2396825_hoist = listeners.length;
                id2396825_iterator < id2396825_hoist;
                id2396825_iterator++) {
                    var listener = listeners[id2396825_iterator];
                    //from
                    listener.onExit("initial_default");
                }
            }
            this.init = function() {
                return {
                    preemptedBasicStates: {
                        initial_default: true,
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true,
                        command_mode: true
                    },
                    action: function() {
                        //exit states
                        initial_default.exitAction();
                        //transition action
                        controller = _event.data;
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "normal_mode", "initial_default_init_2");
                        }
                        //enter states
                        nonprintable_movement_keys_used_to_move_cursor.enterAction();
                        printable_movement_keys_used_to_move_cursor.enterAction();
                        normal_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        normal_mode];
                    }
                }
                return scxml_id2395003['init']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(init_Regexp_id2400611)) {
                    return {
                        preemptedBasicStates: {
                            initial_default: true,
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true,
                            command_mode: true
                        },
                        action: function() {
                            //exit states
                            initial_default.exitAction();
                            //transition action
                            controller = _event.data;
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("initial_default", "normal_mode", "initial_default_init_2");
                            }
                            //enter states
                            nonprintable_movement_keys_used_to_move_cursor.enterAction();
                            printable_movement_keys_used_to_move_cursor.enterAction();
                            normal_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            normal_mode];
                        }
                    }
                }
                return scxml_id2395003.$dispatchPrefixEvent(e);
            }
        }
        initial_defaultConstructor.prototype = scxml_id2395003;
        return new initial_defaultConstructor();
    })();
    var nonprintable_movement_keys_used_to_move_cursor = (function() {
        function nonprintable_movement_keys_used_to_move_cursorConstructor() {
            this.parent = scxml_id2395003;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "nonprintable_movement_keys_used_to_move_cursor"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("nonprintable_movement_keys_used_to_move_cursor");
                }
            }
            this.exitAction = function() {
                for (var id2395197_iterator = 0, id2395197_hoist = listeners.length;
                id2395197_iterator < id2395197_hoist;
                id2395197_iterator++) {
                    var listener = listeners[id2395197_iterator];
                    //from
                    listener.onExit("nonprintable_movement_keys_used_to_move_cursor");
                }
            }
            this.left = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveLeft()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return scxml_id2395003['left']();
            }
            this.right = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveRight(false)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return scxml_id2395003['right']();
            }
            this.up = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveUp()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return scxml_id2395003['up']();
            }
            this.down = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveDown()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return scxml_id2395003['down']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(left_Regexp_id2400616)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveLeft()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(right_Regexp_id2400622)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveRight(false)
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(up_Regexp_id2400628)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveUp()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(down_Regexp_id2400633)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveDown()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                return scxml_id2395003.$dispatchPrefixEvent(e);
            }
        }
        nonprintable_movement_keys_used_to_move_cursorConstructor.prototype = scxml_id2395003;
        return new nonprintable_movement_keys_used_to_move_cursorConstructor();
    })();
    var nonprintable_movement_keys_used_to_move_cursor_initial = (function() {
        function nonprintable_movement_keys_used_to_move_cursor_initialConstructor() {
            this.parent = nonprintable_movement_keys_used_to_move_cursor;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "nonprintable_movement_keys_used_to_move_cursor_initial"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("nonprintable_movement_keys_used_to_move_cursor_initial");
                }
            }
            this.exitAction = function() {
                for (var id2395206_iterator = 0, id2395206_hoist = listeners.length;
                id2395206_iterator < id2395206_hoist;
                id2395206_iterator++) {
                    var listener = listeners[id2395206_iterator];
                    //from
                    listener.onExit("nonprintable_movement_keys_used_to_move_cursor_initial");
                }
            }
            this.$default = function() {
                return {
                    preemptedBasicStates: {
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true
                    },
                    action: function() {
                        hasTakenDefaultTransition = true;
                        //exit states
                        nonprintable_movement_keys_used_to_move_cursor_initial.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "printable_movement_keys_used_to_move_cursor_initial", "nonprintable_movement_keys_used_to_move_cursor_initial_$default_3");
                        }
                        //enter states
                        printable_movement_keys_used_to_move_cursor.enterAction();
                        printable_movement_keys_used_to_move_cursor_initial.enterAction();
                        //update configuration
                        currentConfiguration = [
                        printable_movement_keys_used_to_move_cursor_initial];
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['$default']();
            }
            this.$dispatchPrefixEvent = function(e) {
                return nonprintable_movement_keys_used_to_move_cursor.$dispatchPrefixEvent(e);
            }
        }
        nonprintable_movement_keys_used_to_move_cursor_initialConstructor.prototype = nonprintable_movement_keys_used_to_move_cursor;
        return new nonprintable_movement_keys_used_to_move_cursor_initialConstructor();
    })();
    var select_mode = (function() {
        function select_modeConstructor() {
            this.parent = nonprintable_movement_keys_used_to_move_cursor;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor];
            this.toString = function() {
                return "select_mode"
            }
            this.enterAction = function() {
                controller.updateModeText("-- SELECT --")
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("select_mode");
                }
            }
            this.exitAction = function() {
                for (var id2397078_iterator = 0, id2397078_hoist = listeners.length;
                id2397078_iterator < id2397078_hoist;
                id2397078_iterator++) {
                    var listener = listeners[id2397078_iterator];
                    //from
                    listener.onExit("select_mode");
                }
            }
            this.ctrl_g = function() {
                return {
                    preemptedBasicStates: {
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true
                    },
                    action: function() {
                        //exit states
                        select_mode.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_mode_initial", "select_mode_ctrl_g_4");
                        }
                        //enter states
                        printable_movement_keys_used_to_move_cursor.enterAction();
                        visual_mode.enterAction();
                        visual_mode_initial.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_mode_initial];
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['ctrl_g']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(ctrl_g_Regexp_id2400639)) {
                    return {
                        preemptedBasicStates: {
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true
                        },
                        action: function() {
                            //exit states
                            select_mode.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("select_mode", "visual_mode_initial", "select_mode_ctrl_g_4");
                            }
                            //enter states
                            printable_movement_keys_used_to_move_cursor.enterAction();
                            visual_mode.enterAction();
                            visual_mode_initial.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_mode_initial];
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor.$dispatchPrefixEvent(e);
            }
        }
        select_modeConstructor.prototype = nonprintable_movement_keys_used_to_move_cursor;
        return new select_modeConstructor();
    })();
    var printable_movement_keys_used_to_move_cursor = (function() {
        function printable_movement_keys_used_to_move_cursorConstructor() {
            this.parent = nonprintable_movement_keys_used_to_move_cursor;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "printable_movement_keys_used_to_move_cursor"
            }
            this.enterAction = function() {
                controller.makeCursorFat()
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("printable_movement_keys_used_to_move_cursor");
                }
            }
            this.exitAction = function() {
                for (var id2396219_iterator = 0, id2396219_hoist = listeners.length;
                id2396219_iterator < id2396219_hoist;
                id2396219_iterator++) {
                    var listener = listeners[id2396219_iterator];
                    //from
                    listener.onExit("printable_movement_keys_used_to_move_cursor");
                }
            }
            this.bling = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveToEndOfLine()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['bling']();
            }
            this.backspace = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveLeft()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['backspace']();
            }
            this.enter = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveDown()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['enter']();
            }
            this.colon = function() {
                return {
                    preemptedBasicStates: {
                        initial_default: true,
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true,
                        command_mode: true
                    },
                    action: function() {
                        //exit states
                        var statesExited = [];
                        var lca = scxml_id2395003;
                        var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;
                        for (var id2398564_iterator = 0, id2398564_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2398564_iterator];
                            if (state.ancestors.indexOf(lca) !== -1) {
                                do {
                                    statesExited.push(state);
                                } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                            }
                        }
                        //sort by depth
                        statesExited.sort(sortByDepthDeepToShallow);
                        //execute actions for each of these states
                        for (var id2398564_iterator = 0, id2398564_hoist = statesExited.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var state = statesExited[id2398564_iterator];
                            state.exitAction();
                        }
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "command_mode", "printable_movement_keys_used_to_move_cursor_colon_6");
                        }
                        //enter states
                        command_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        command_mode];
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['colon']();
            }
            this.w = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveToStartOfNextWord()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['w']();
            }
            this.e = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveToEndOfNextWord()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['e']();
            }
            this.b = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveToStartOfPreviousWord()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['b']();
            }
            this.zero = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveToStartOfLine()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['zero']();
            }
            this.h = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveLeft()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['h']();
            }
            this.l = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveRight(false)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['l']();
            }
            this.k = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveUp()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['k']();
            }
            this.j = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.moveDown()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['j']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(bling_Regexp_id2400645)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveToEndOfLine()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(backspace_Regexp_id2400650)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveLeft()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(enter_Regexp_id2400656)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveDown()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(colon_Regexp_id2400662)) {
                    return {
                        preemptedBasicStates: {
                            initial_default: true,
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true,
                            command_mode: true
                        },
                        action: function() {
                            //exit states
                            var statesExited = [];
                            var lca = scxml_id2395003;
                            var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;
                            for (var id2398564_iterator = 0, id2398564_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2398564_iterator];
                                if (state.ancestors.indexOf(lca) !== -1) {
                                    do {
                                        statesExited.push(state);
                                    } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                                }
                            }
                            //sort by depth
                            statesExited.sort(sortByDepthDeepToShallow);
                            //execute actions for each of these states
                            for (var id2398564_iterator = 0, id2398564_hoist = statesExited.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var state = statesExited[id2398564_iterator];
                                state.exitAction();
                            }
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("printable_movement_keys_used_to_move_cursor", "command_mode", "printable_movement_keys_used_to_move_cursor_colon_6");
                            }
                            //enter states
                            command_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            command_mode];
                        }
                    }
                }
                if (e.match(w_Regexp_id2400667)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveToStartOfNextWord()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(e_Regexp_id2400673)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveToEndOfNextWord()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(b_Regexp_id2400678)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveToStartOfPreviousWord()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(zero_Regexp_id2400684)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveToStartOfLine()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(h_Regexp_id2400690)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveLeft()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(l_Regexp_id2400695)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveRight(false)
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(k_Regexp_id2400701)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveUp()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(j_Regexp_id2400706)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.moveDown()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor.$dispatchPrefixEvent(e);
            }
        }
        printable_movement_keys_used_to_move_cursorConstructor.prototype = nonprintable_movement_keys_used_to_move_cursor;
        return new printable_movement_keys_used_to_move_cursorConstructor();
    })();
    var printable_movement_keys_used_to_move_cursor_initial = (function() {
        function printable_movement_keys_used_to_move_cursor_initialConstructor() {
            this.parent = printable_movement_keys_used_to_move_cursor;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor, printable_movement_keys_used_to_move_cursor];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "printable_movement_keys_used_to_move_cursor_initial"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("printable_movement_keys_used_to_move_cursor_initial");
                }
            }
            this.exitAction = function() {
                for (var id2396228_iterator = 0, id2396228_hoist = listeners.length;
                id2396228_iterator < id2396228_hoist;
                id2396228_iterator++) {
                    var listener = listeners[id2396228_iterator];
                    //from
                    listener.onExit("printable_movement_keys_used_to_move_cursor_initial");
                }
            }
            this.$default = function() {
                return {
                    preemptedBasicStates: {
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        hasTakenDefaultTransition = true;
                        //exit states
                        printable_movement_keys_used_to_move_cursor_initial.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "normal_mode", "printable_movement_keys_used_to_move_cursor_initial_$default_5");
                        }
                        //enter states
                        normal_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        normal_mode];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['$default']();
            }
            this.$dispatchPrefixEvent = function(e) {
                return printable_movement_keys_used_to_move_cursor.$dispatchPrefixEvent(e);
            }
        }
        printable_movement_keys_used_to_move_cursor_initialConstructor.prototype = printable_movement_keys_used_to_move_cursor;
        return new printable_movement_keys_used_to_move_cursor_initialConstructor();
    })();
    var normal_mode = (function() {
        function normal_modeConstructor() {
            this.parent = printable_movement_keys_used_to_move_cursor;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor, printable_movement_keys_used_to_move_cursor];
            this.toString = function() {
                return "normal_mode"
            }
            this.enterAction = function() {
                controller.updateModeText("-- NORMAL --")
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("normal_mode");
                }
            }
            this.exitAction = function() {
                for (var id2395608_iterator = 0, id2395608_hoist = listeners.length;
                id2395608_iterator < id2395608_hoist;
                id2395608_iterator++) {
                    var listener = listeners[id2395608_iterator];
                    //from
                    listener.onExit("normal_mode");
                }
            }
            this.v = function() {
                return {
                    preemptedBasicStates: {
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        normal_mode.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_character", "normal_mode_v_7");
                        }
                        //enter states
                        visual_mode.enterAction();
                        visual_character.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_character];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['v']();
            }
            this.V = function() {
                return {
                    preemptedBasicStates: {
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        normal_mode.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_line", "normal_mode_V_8");
                        }
                        //enter states
                        visual_mode.enterAction();
                        visual_line.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_line];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['V']();
            }
            this.ctrl_v = function() {
                return {
                    preemptedBasicStates: {
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        normal_mode.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_block", "normal_mode_ctrl_v_9");
                        }
                        //enter states
                        visual_mode.enterAction();
                        visual_block.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_block];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['ctrl_v']();
            }
            this.i = function() {
                return {
                    preemptedBasicStates: {
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true
                    },
                    action: function() {
                        //exit states
                        normal_mode.exitAction();
                        printable_movement_keys_used_to_move_cursor.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "insert_mode", "normal_mode_i_10");
                        }
                        //enter states
                        insert_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        insert_mode];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['i']();
            }
            this.a = function() {
                return {
                    preemptedBasicStates: {
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true
                    },
                    action: function() {
                        //exit states
                        normal_mode.exitAction();
                        printable_movement_keys_used_to_move_cursor.exitAction();
                        //transition action
                        controller.moveRight(true);
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "insert_mode", "normal_mode_a_11");
                        }
                        //enter states
                        insert_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        insert_mode];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['a']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(v_Regexp_id2400712)) {
                    return {
                        preemptedBasicStates: {
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            normal_mode.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("normal_mode", "visual_character", "normal_mode_v_7");
                            }
                            //enter states
                            visual_mode.enterAction();
                            visual_character.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_character];
                        }
                    }
                }
                if (e.match(V_Regexp_id2400718)) {
                    return {
                        preemptedBasicStates: {
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            normal_mode.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("normal_mode", "visual_line", "normal_mode_V_8");
                            }
                            //enter states
                            visual_mode.enterAction();
                            visual_line.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_line];
                        }
                    }
                }
                if (e.match(ctrl_v_Regexp_id2400723)) {
                    return {
                        preemptedBasicStates: {
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            normal_mode.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("normal_mode", "visual_block", "normal_mode_ctrl_v_9");
                            }
                            //enter states
                            visual_mode.enterAction();
                            visual_block.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_block];
                        }
                    }
                }
                if (e.match(i_Regexp_id2400729)) {
                    return {
                        preemptedBasicStates: {
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true
                        },
                        action: function() {
                            //exit states
                            normal_mode.exitAction();
                            printable_movement_keys_used_to_move_cursor.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("normal_mode", "insert_mode", "normal_mode_i_10");
                            }
                            //enter states
                            insert_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            insert_mode];
                        }
                    }
                }
                if (e.match(a_Regexp_id2400735)) {
                    return {
                        preemptedBasicStates: {
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true
                        },
                        action: function() {
                            //exit states
                            normal_mode.exitAction();
                            printable_movement_keys_used_to_move_cursor.exitAction();
                            //transition action
                            controller.moveRight(true);
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("normal_mode", "insert_mode", "normal_mode_a_11");
                            }
                            //enter states
                            insert_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            insert_mode];
                        }
                    }
                }
                return printable_movement_keys_used_to_move_cursor.$dispatchPrefixEvent(e);
            }
        }
        normal_modeConstructor.prototype = printable_movement_keys_used_to_move_cursor;
        return new normal_modeConstructor();
    })();
    var visual_mode = (function() {
        function visual_modeConstructor() {
            this.parent = printable_movement_keys_used_to_move_cursor;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "visual_mode"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("visual_mode");
                }
            }
            this.exitAction = function() {
                for (var id2396909_iterator = 0, id2396909_hoist = listeners.length;
                id2396909_iterator < id2396909_hoist;
                id2396909_iterator++) {
                    var listener = listeners[id2396909_iterator];
                    //from
                    listener.onExit("visual_mode");
                }
            }
            this.ctrl_g = function() {
                return {
                    preemptedBasicStates: {
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true
                    },
                    action: function() {
                        //exit states
                        var statesExited = [];
                        var lca = nonprintable_movement_keys_used_to_move_cursor;
                        var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;
                        for (var id2398564_iterator = 0, id2398564_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2398564_iterator];
                            if (state.ancestors.indexOf(lca) !== -1) {
                                do {
                                    statesExited.push(state);
                                } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                            }
                        }
                        //sort by depth
                        statesExited.sort(sortByDepthDeepToShallow);
                        //execute actions for each of these states
                        for (var id2398564_iterator = 0, id2398564_hoist = statesExited.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var state = statesExited[id2398564_iterator];
                            state.exitAction();
                        }
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "select_mode", "visual_mode_ctrl_g_20");
                        }
                        //enter states
                        select_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        select_mode];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['ctrl_g']();
            }
            this.esc = function() {
                return {
                    preemptedBasicStates: {
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        var statesExited = [];
                        var lca = printable_movement_keys_used_to_move_cursor;
                        var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;
                        for (var id2398564_iterator = 0, id2398564_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2398564_iterator];
                            if (state.ancestors.indexOf(lca) !== -1) {
                                do {
                                    statesExited.push(state);
                                } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                            }
                        }
                        //sort by depth
                        statesExited.sort(sortByDepthDeepToShallow);
                        //execute actions for each of these states
                        for (var id2398564_iterator = 0, id2398564_hoist = statesExited.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var state = statesExited[id2398564_iterator];
                            state.exitAction();
                        }
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "normal_mode", "visual_mode_esc_19");
                        }
                        //enter states
                        normal_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        normal_mode];
                    }
                }
                return printable_movement_keys_used_to_move_cursor['esc']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(esc_Regexp_id2400740)) {
                    return {
                        preemptedBasicStates: {
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            var statesExited = [];
                            var lca = printable_movement_keys_used_to_move_cursor;
                            var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;
                            for (var id2398564_iterator = 0, id2398564_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2398564_iterator];
                                if (state.ancestors.indexOf(lca) !== -1) {
                                    do {
                                        statesExited.push(state);
                                    } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                                }
                            }
                            //sort by depth
                            statesExited.sort(sortByDepthDeepToShallow);
                            //execute actions for each of these states
                            for (var id2398564_iterator = 0, id2398564_hoist = statesExited.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var state = statesExited[id2398564_iterator];
                                state.exitAction();
                            }
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_mode", "normal_mode", "visual_mode_esc_19");
                            }
                            //enter states
                            normal_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            normal_mode];
                        }
                    }
                }
                if (e.match(ctrl_g_Regexp_id2400639)) {
                    return {
                        preemptedBasicStates: {
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true
                        },
                        action: function() {
                            //exit states
                            var statesExited = [];
                            var lca = nonprintable_movement_keys_used_to_move_cursor;
                            var nonBasicTriggerDispatcherExitBlockIteratorExpression = currentConfiguration;
                            for (var id2398564_iterator = 0, id2398564_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[id2398564_iterator];
                                if (state.ancestors.indexOf(lca) !== -1) {
                                    do {
                                        statesExited.push(state);
                                    } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                                }
                            }
                            //sort by depth
                            statesExited.sort(sortByDepthDeepToShallow);
                            //execute actions for each of these states
                            for (var id2398564_iterator = 0, id2398564_hoist = statesExited.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var state = statesExited[id2398564_iterator];
                                state.exitAction();
                            }
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_mode", "select_mode", "visual_mode_ctrl_g_20");
                            }
                            //enter states
                            select_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            select_mode];
                        }
                    }
                }
                return printable_movement_keys_used_to_move_cursor.$dispatchPrefixEvent(e);
            }
        }
        visual_modeConstructor.prototype = printable_movement_keys_used_to_move_cursor;
        return new visual_modeConstructor();
    })();
    var visual_mode_initial = (function() {
        function visual_mode_initialConstructor() {
            this.parent = visual_mode;
            this.initial = null;
            this.depth = 4;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor, printable_movement_keys_used_to_move_cursor, visual_mode];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "visual_mode_initial"
            }
            this.enterAction = function() {
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("visual_mode_initial");
                }
            }
            this.exitAction = function() {
                for (var id2396916_iterator = 0, id2396916_hoist = listeners.length;
                id2396916_iterator < id2396916_hoist;
                id2396916_iterator++) {
                    var listener = listeners[id2396916_iterator];
                    //from
                    listener.onExit("visual_mode_initial");
                }
            }
            this.$default = function() {
                return {
                    preemptedBasicStates: {
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        hasTakenDefaultTransition = true;
                        //exit states
                        visual_mode_initial.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_character", "visual_mode_initial_$default_12");
                        }
                        //enter states
                        visual_character.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_character];
                    }
                }
                return visual_mode['$default']();
            }
            this.$dispatchPrefixEvent = function(e) {
                return visual_mode.$dispatchPrefixEvent(e);
            }
        }
        visual_mode_initialConstructor.prototype = visual_mode;
        return new visual_mode_initialConstructor();
    })();
    var visual_line = (function() {
        function visual_lineConstructor() {
            this.parent = visual_mode;
            this.initial = null;
            this.depth = 4;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor, printable_movement_keys_used_to_move_cursor, visual_mode];
            this.toString = function() {
                return "visual_line"
            }
            this.enterAction = function() {
                controller.updateModeText("-- VISUAL LINE --")
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("visual_line");
                }
            }
            this.exitAction = function() {
                for (var id2397004_iterator = 0, id2397004_hoist = listeners.length;
                id2397004_iterator < id2397004_hoist;
                id2397004_iterator++) {
                    var listener = listeners[id2397004_iterator];
                    //from
                    listener.onExit("visual_line");
                }
            }
            this.v = function() {
                return {
                    preemptedBasicStates: {
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        visual_line.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_character", "visual_line_v_14");
                        }
                        //enter states
                        visual_character.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_character];
                    }
                }
                return visual_mode['v']();
            }
            this.ctrl_v = function() {
                return {
                    preemptedBasicStates: {
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        visual_line.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_block", "visual_line_ctrl_v_13");
                        }
                        //enter states
                        visual_block.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_block];
                    }
                }
                return visual_mode['ctrl_v']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(ctrl_v_Regexp_id2400723)) {
                    return {
                        preemptedBasicStates: {
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            visual_line.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_line", "visual_block", "visual_line_ctrl_v_13");
                            }
                            //enter states
                            visual_block.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_block];
                        }
                    }
                }
                if (e.match(v_Regexp_id2400712)) {
                    return {
                        preemptedBasicStates: {
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            visual_line.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_line", "visual_character", "visual_line_v_14");
                            }
                            //enter states
                            visual_character.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_character];
                        }
                    }
                }
                return visual_mode.$dispatchPrefixEvent(e);
            }
        }
        visual_lineConstructor.prototype = visual_mode;
        return new visual_lineConstructor();
    })();
    var visual_block = (function() {
        function visual_blockConstructor() {
            this.parent = visual_mode;
            this.initial = null;
            this.depth = 4;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor, printable_movement_keys_used_to_move_cursor, visual_mode];
            this.toString = function() {
                return "visual_block"
            }
            this.enterAction = function() {
                controller.updateModeText("-- VISUAL BLOCK --")
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("visual_block");
                }
            }
            this.exitAction = function() {
                for (var id2399118_iterator = 0, id2399118_hoist = listeners.length;
                id2399118_iterator < id2399118_hoist;
                id2399118_iterator++) {
                    var listener = listeners[id2399118_iterator];
                    //from
                    listener.onExit("visual_block");
                }
            }
            this.v = function() {
                return {
                    preemptedBasicStates: {
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        visual_block.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_character", "visual_block_v_15");
                        }
                        //enter states
                        visual_character.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_character];
                    }
                }
                return visual_mode['v']();
            }
            this.V = function() {
                return {
                    preemptedBasicStates: {
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        visual_block.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_line", "visual_block_V_16");
                        }
                        //enter states
                        visual_line.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_line];
                    }
                }
                return visual_mode['V']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(v_Regexp_id2400712)) {
                    return {
                        preemptedBasicStates: {
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            visual_block.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_block", "visual_character", "visual_block_v_15");
                            }
                            //enter states
                            visual_character.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_character];
                        }
                    }
                }
                if (e.match(V_Regexp_id2400718)) {
                    return {
                        preemptedBasicStates: {
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            visual_block.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_block", "visual_line", "visual_block_V_16");
                            }
                            //enter states
                            visual_line.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_line];
                        }
                    }
                }
                return visual_mode.$dispatchPrefixEvent(e);
            }
        }
        visual_blockConstructor.prototype = visual_mode;
        return new visual_blockConstructor();
    })();
    var visual_character = (function() {
        function visual_characterConstructor() {
            this.parent = visual_mode;
            this.initial = null;
            this.depth = 4;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor, printable_movement_keys_used_to_move_cursor, visual_mode];
            this.toString = function() {
                return "visual_character"
            }
            this.enterAction = function() {
                controller.updateModeText("-- VISUAL --")
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("visual_character");
                }
            }
            this.exitAction = function() {
                for (var id2399291_iterator = 0, id2399291_hoist = listeners.length;
                id2399291_iterator < id2399291_hoist;
                id2399291_iterator++) {
                    var listener = listeners[id2399291_iterator];
                    //from
                    listener.onExit("visual_character");
                }
            }
            this.V = function() {
                return {
                    preemptedBasicStates: {
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        visual_character.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_line", "visual_character_V_18");
                        }
                        //enter states
                        visual_line.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_line];
                    }
                }
                return visual_mode['V']();
            }
            this.ctrl_v = function() {
                return {
                    preemptedBasicStates: {
                        visual_line: true,
                        visual_block: true,
                        visual_character: true
                    },
                    action: function() {
                        //exit states
                        visual_character.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "visual_block", "visual_character_ctrl_v_17");
                        }
                        //enter states
                        visual_block.enterAction();
                        //update configuration
                        currentConfiguration = [
                        visual_block];
                    }
                }
                return visual_mode['ctrl_v']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(ctrl_v_Regexp_id2400723)) {
                    return {
                        preemptedBasicStates: {
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            visual_character.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_character", "visual_block", "visual_character_ctrl_v_17");
                            }
                            //enter states
                            visual_block.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_block];
                        }
                    }
                }
                if (e.match(V_Regexp_id2400718)) {
                    return {
                        preemptedBasicStates: {
                            visual_line: true,
                            visual_block: true,
                            visual_character: true
                        },
                        action: function() {
                            //exit states
                            visual_character.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("visual_character", "visual_line", "visual_character_V_18");
                            }
                            //enter states
                            visual_line.enterAction();
                            //update configuration
                            currentConfiguration = [
                            visual_line];
                        }
                    }
                }
                return visual_mode.$dispatchPrefixEvent(e);
            }
        }
        visual_characterConstructor.prototype = visual_mode;
        return new visual_characterConstructor();
    })();
    var insert_mode = (function() {
        function insert_modeConstructor() {
            this.parent = nonprintable_movement_keys_used_to_move_cursor;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003, nonprintable_movement_keys_used_to_move_cursor];
            this.toString = function() {
                return "insert_mode"
            }
            this.enterAction = function() {
                controller.makeCursorThin()
                controller.updateModeText("-- INSERT --")
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("insert_mode");
                }
            }
            this.exitAction = function() {
                for (var id2396223_iterator = 0, id2396223_hoist = listeners.length;
                id2396223_iterator < id2396223_hoist;
                id2396223_iterator++) {
                    var listener = listeners[id2396223_iterator];
                    //from
                    listener.onExit("insert_mode");
                }
            }
            this.init = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['init']();
            }
            this.ctrl_g = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['ctrl_g']();
            }
            this.v = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['v']();
            }
            this.V = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['V']();
            }
            this.ctrl_v = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['ctrl_v']();
            }
            this.i = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['i']();
            }
            this.a = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['a']();
            }
            this.esc = function() {
                return {
                    preemptedBasicStates: {
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true
                    },
                    action: function() {
                        //exit states
                        insert_mode.exitAction();
                        //transition action
                        controller.moveLeft()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "normal_mode", "insert_mode_esc_21");
                        }
                        //enter states
                        printable_movement_keys_used_to_move_cursor.enterAction();
                        normal_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        normal_mode];
                    }
                }
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['esc']();
            }
            this.bling = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['bling']();
            }
            this.backspace = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeBackspace()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['backspace']();
            }
            this.enter = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeNewLine()
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['enter']();
            }
            this.colon = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['colon']();
            }
            this.w = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['w']();
            }
            this.e = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['e']();
            }
            this.b = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['b']();
            }
            this.zero = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['zero']();
            }
            this.h = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['h']();
            }
            this.l = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['l']();
            }
            this.k = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['k']();
            }
            this.j = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['j']();
            }
            this.left = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['left']();
            }
            this.right = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['right']();
            }
            this.up = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['up']();
            }
            this.down = function() {
                return {
                    preemptedBasicStates: {},
                    action: function() {
                        //transition action
                        controller.writeChar(_event.data.charCode)
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor['down']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(esc_Regexp_id2400740)) {
                    return {
                        preemptedBasicStates: {
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true
                        },
                        action: function() {
                            //exit states
                            insert_mode.exitAction();
                            //transition action
                            controller.moveLeft()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("insert_mode", "normal_mode", "insert_mode_esc_21");
                            }
                            //enter states
                            printable_movement_keys_used_to_move_cursor.enterAction();
                            normal_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            normal_mode];
                        }
                    }
                }
                if (e.match(enter_Regexp_id2400656)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.writeNewLine()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(backspace_Regexp_id2400650)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.writeBackspace()
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                if (e.match(star_Regexp_id2400746)) {
                    return {
                        preemptedBasicStates: {},
                        action: function() {
                            //transition action
                            controller.writeChar(_event.data.charCode)
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                            }
                        }
                    }
                }
                return nonprintable_movement_keys_used_to_move_cursor.$dispatchPrefixEvent(e);
            }
        }
        insert_modeConstructor.prototype = nonprintable_movement_keys_used_to_move_cursor;
        return new insert_modeConstructor();
    })();
    var command_mode = (function() {
        function command_modeConstructor() {
            this.parent = scxml_id2395003;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
            scxml_id2395003];
            this.toString = function() {
                return "command_mode"
            }
            this.enterAction = function() {
                controller.updateModeText("-- COMMAND --")
                for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                id2398564_iterator < id2398564_hoist;
                id2398564_iterator++) {
                    var listener = listeners[id2398564_iterator];
                    //to
                    listener.onEntry("command_mode");
                }
            }
            this.exitAction = function() {
                for (var id2395200_iterator = 0, id2395200_hoist = listeners.length;
                id2395200_iterator < id2395200_hoist;
                id2395200_iterator++) {
                    var listener = listeners[id2395200_iterator];
                    //from
                    listener.onExit("command_mode");
                }
            }
            this.esc = function() {
                return {
                    preemptedBasicStates: {
                        initial_default: true,
                        select_mode: true,
                        normal_mode: true,
                        visual_line: true,
                        visual_block: true,
                        visual_character: true,
                        insert_mode: true,
                        command_mode: true
                    },
                    action: function() {
                        //exit states
                        command_mode.exitAction();
                        //transition action
                        for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                        id2398564_iterator < id2398564_hoist;
                        id2398564_iterator++) {
                            var listener = listeners[id2398564_iterator];
                            //transition id
                            listener.onTransition("", "normal_mode", "command_mode_esc_22");
                        }
                        //enter states
                        nonprintable_movement_keys_used_to_move_cursor.enterAction();
                        printable_movement_keys_used_to_move_cursor.enterAction();
                        normal_mode.enterAction();
                        //update configuration
                        currentConfiguration = [
                        normal_mode];
                    }
                }
                return scxml_id2395003['esc']();
            }
            this.$dispatchPrefixEvent = function(e) {
                if (e.match(esc_Regexp_id2400740)) {
                    return {
                        preemptedBasicStates: {
                            initial_default: true,
                            select_mode: true,
                            normal_mode: true,
                            visual_line: true,
                            visual_block: true,
                            visual_character: true,
                            insert_mode: true,
                            command_mode: true
                        },
                        action: function() {
                            //exit states
                            command_mode.exitAction();
                            //transition action
                            for (var id2398564_iterator = 0, id2398564_hoist = listeners.length;
                            id2398564_iterator < id2398564_hoist;
                            id2398564_iterator++) {
                                var listener = listeners[id2398564_iterator];
                                //transition id
                                listener.onTransition("command_mode", "normal_mode", "command_mode_esc_22");
                            }
                            //enter states
                            nonprintable_movement_keys_used_to_move_cursor.enterAction();
                            printable_movement_keys_used_to_move_cursor.enterAction();
                            normal_mode.enterAction();
                            //update configuration
                            currentConfiguration = [
                            normal_mode];
                        }
                    }
                }
                return scxml_id2395003.$dispatchPrefixEvent(e);
            }
        }
        command_modeConstructor.prototype = scxml_id2395003;
        return new command_modeConstructor();
    })();
    //states enum for glass-box unit testing
    this._states = {
        _initial: _initial,
        initial_default: initial_default,
        nonprintable_movement_keys_used_to_move_cursor_initial: nonprintable_movement_keys_used_to_move_cursor_initial,
        select_mode: select_mode,
        printable_movement_keys_used_to_move_cursor_initial: printable_movement_keys_used_to_move_cursor_initial,
        normal_mode: normal_mode,
        visual_mode_initial: visual_mode_initial,
        visual_line: visual_line,
        visual_block: visual_block,
        visual_character: visual_character,
        insert_mode: insert_mode,
        command_mode: command_mode
    }
    //trigger methods for synchronous interaction
    this["$default"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "$default", data, true)
        } else {
            return undefined;
        }
    }
    this["init"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "init", data, true)
        } else {
            return undefined;
        }
    }
    this["left"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "left", data, true)
        } else {
            return undefined;
        }
    }
    this["right"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "right", data, true)
        } else {
            return undefined;
        }
    }
    this["up"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "up", data, true)
        } else {
            return undefined;
        }
    }
    this["down"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "down", data, true)
        } else {
            return undefined;
        }
    }
    this["ctrl_g"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "ctrl_g", data, true)
        } else {
            return undefined;
        }
    }
    this["bling"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "bling", data, true)
        } else {
            return undefined;
        }
    }
    this["backspace"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "backspace", data, true)
        } else {
            return undefined;
        }
    }
    this["enter"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "enter", data, true)
        } else {
            return undefined;
        }
    }
    this["colon"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "colon", data, true)
        } else {
            return undefined;
        }
    }
    this["w"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "w", data, true)
        } else {
            return undefined;
        }
    }
    this["e"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "e", data, true)
        } else {
            return undefined;
        }
    }
    this["b"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "b", data, true)
        } else {
            return undefined;
        }
    }
    this["zero"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "zero", data, true)
        } else {
            return undefined;
        }
    }
    this["h"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "h", data, true)
        } else {
            return undefined;
        }
    }
    this["l"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "l", data, true)
        } else {
            return undefined;
        }
    }
    this["k"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "k", data, true)
        } else {
            return undefined;
        }
    }
    this["j"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "j", data, true)
        } else {
            return undefined;
        }
    }
    this["v"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "v", data, true)
        } else {
            return undefined;
        }
    }
    this["V"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "V", data, true)
        } else {
            return undefined;
        }
    }
    this["ctrl_v"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "ctrl_v", data, true)
        } else {
            return undefined;
        }
    }
    this["i"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "i", data, true)
        } else {
            return undefined;
        }
    }
    this["a"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "a", data, true)
        } else {
            return undefined;
        }
    }
    this["esc"] = function(data) {
        if (isInStableState && !destroyed) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            "esc", data, true)
        } else {
            return undefined;
        }
    }
    //initialization script
    //initialization method
    this.initialize = function() {
        currentConfiguration = [initial_default];
        runToCompletion();
        mainLoop();
    }
    //internal runtime functions

    function sortByDepthDeepToShallow(a, b) {
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
        if (!destroyed) {
            //take an event from the current outer event queue
            if (outerEventQueue.length && isInStableState) {
                runToCompletion(outerEventQueue.shift(), outerEventQueue.shift());
            }
            //call back
            mainLoopCallback = window.setTimeout(function() {
                mainLoop(); //FIXME: note that when calling mainloop this way, we won't have access to the "this" object. 
                //I don't think we ever use it though. Everything we need is private in function scope.
            }, 100);
        }
    }
    function runToCompletion(e, data, isEnumeratedEvent) {
        isInStableState = false;
        if (e) {
            innerEventQueue.push(e, data, isEnumeratedEvent);
        }
        do {
            //take any available default transitions
            microstep("$default", null, true);
            if (!hasTakenDefaultTransition) {
                if (!innerEventQueue.length) {
                    //we have no more generated events, and no default transitions fired, so
                    //we are done, and have run to completion
                    break;
                } else {
                    //microstep, then dequeue next event sending in event
                    microstep(innerEventQueue.shift(), innerEventQueue.shift(), innerEventQueue.shift());
                }
            } else {
                //he has taken a default transition, so reset the global variable to false and loop again
                hasTakenDefaultTransition = false;
            }
        } while (true)
        isInStableState = true;
    }
    function microstep(e, data, isEnumeratedEvent) {
        var enabledTransitions = [],
            transition = null,
            preemptedBasicStates = {};
        //we set the event as a global, rather than passing it into the function invocation as a parameter,
        //because in cases of default events, the event object will be populated with previous event's data
        if (e !== "$default") {
            _event.name = isEnumeratedEvent ? e : e;
            _event.data = data;
        }
        if (isEnumeratedEvent) {
            //e does not contain a dot, so dispatch as an enumerated event
            for (var id2398564_iterator = 0, id2398564_hoist = currentConfiguration.length;
            id2398564_iterator < id2398564_hoist;
            id2398564_iterator++) {
                var state = currentConfiguration[id2398564_iterator];
                //check to make sure he is not preempted
                if (!(state in preemptedBasicStates)) {
                    //lookup the transition
                    var transition = state[e]();
                    if (transition) {
                        enabledTransitions.push(transition.action);
                        mixin(transition.preemptedBasicStates, preemptedBasicStates);
                    }
                }
            }
        } else {
            //e contains a dot, so dispatch as a prefix event
            for (var id2398564_iterator = 0, id2398564_hoist = currentConfiguration.length;
            id2398564_iterator < id2398564_hoist;
            id2398564_iterator++) {
                var state = currentConfiguration[id2398564_iterator];
                //check to make sure he is not preempted
                if (!(state in preemptedBasicStates)) {
                    //lookup the transition
                    var transition = state.$dispatchPrefixEvent(e)
                    if (transition) {
                        enabledTransitions.push(transition.action);
                        mixin(transition.preemptedBasicStates, preemptedBasicStates);
                    }
                }
            }
        }
        //invoke selected transitions
        for (var id2398564_iterator = 0, id2398564_hoist = enabledTransitions.length;
        id2398564_iterator < id2398564_hoist;
        id2398564_iterator++) {
            var t = enabledTransitions[id2398564_iterator];
            t();
        }
    }
    function mixin(from, to) {
        for (var prop in from) {
            to[prop] = from[prop]
        }
    }
    this.destroy = function() {
        //right now, this only disables timer and sets global destroyed variable to prevent future callbacks
        window.clearTimeout(mainLoopCallback);
        mainLoopCallback = null;
        destroyed = true;
    }
    //this is for async communication
    this.GEN = function(e, data) {
        outerEventQueue.push(e, data);
    }
    //this may or may not be something we want to expose, but for right now, we at least need it for testing
    this.getCurrentConfiguration = function() {
        //slice it to return a copy of the configuration rather than the conf itself
        //this saves us all kinds of confusion involving references and stuff
        //TODO: refactor this name to be genCurrentConfigurationStatement 
        var currentConfigurationExpression = currentConfiguration.slice();
        return currentConfigurationExpression;
    }
    //public API for In predicate
    this.$in = function(state) {
        return In(state);
    }
    //end static boilerplate code

    function In(state) {
        state = typeof state == "string" ? self._states[state] : state;
        var toReturn;
        if (state.isBasic) {
            toReturn = currentConfiguration.indexOf(state) != -1;
        } else {
            var toReturn = false;
            for (var id2398564_iterator = 0, id2398564_hoist = currentConfiguration.length;
            id2398564_iterator < id2398564_hoist;
            id2398564_iterator++) {
                var s = currentConfiguration[id2398564_iterator];
                if (s.ancestors.indexOf(state) != -1) {
                    toReturn = true;
                    break;
                }
            }
        }
        return toReturn;
    }
    var listeners = [];
    //TODO:listeners support adding listeners for a particular state
    this.addListener = function(listener) {
        listeners.push(listener);
    }
    this.removeListener = function(listener) {
        listeners.splice(listeners.indexOf(listener), 1);
    }
}
