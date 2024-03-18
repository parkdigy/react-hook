'use strict';var react=require('react'),util=require('@pdg/util');function useFirstSkipEffect(effect, deps) {
    var firstRef = react.useRef(true);
    react.useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}function useAutoUpdateState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = react.useState(0), setUpdateKey = _a[1];
    var _initState = react.useState(function () {
        return finalStateCallback ? finalStateCallback(state) : state;
    })[0];
    var _state = react.useRef(_initState);
    var forceUpdate = react.useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!util.equal(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!util.equal(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = react.useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!util.equal(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}function useFirstSkipLayoutEffect(effect, deps) {
    var firstRef = react.useRef(true);
    react.useLayoutEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}function useAutoUpdateLayoutState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = react.useState(0), setUpdateKey = _a[1];
    var _initState = react.useState(function () {
        return finalStateCallback ? finalStateCallback(state, 0) : state;
    })[0];
    var _state = react.useRef(_initState);
    var forceUpdate = react.useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!util.equal(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!util.equal(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = react.useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!util.equal(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}exports.useAutoUpdateLayoutState=useAutoUpdateLayoutState;exports.useAutoUpdateState=useAutoUpdateState;exports.useFirstSkipEffect=useFirstSkipEffect;exports.useFirstSkipLayoutEffect=useFirstSkipLayoutEffect;