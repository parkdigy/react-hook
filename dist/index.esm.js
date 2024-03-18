import {useRef,useEffect,useState,useCallback,useLayoutEffect}from'react';function useFirstSkipEffect(effect, deps) {
    var firstRef = useRef(true);
    useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}var isSame = function (v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i += 1) {
            if (v1[i] !== v2[i])
                return false;
        }
    }
    else {
        return v1 === v2;
    }
    return true;
};function useAutoUpdateState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(0), setUpdateKey = _a[1];
    var _initState = useState(function () {
        return finalStateCallback ? finalStateCallback(state) : state;
    })[0];
    var _state = useRef(_initState);
    var forceUpdate = useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}function useFirstSkipLayoutEffect(effect, deps) {
    var firstRef = useRef(true);
    useLayoutEffect(function () {
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
    var _a = useState(0), setUpdateKey = _a[1];
    var _initState = useState(function () {
        return finalStateCallback ? finalStateCallback(state, 0) : state;
    })[0];
    var _state = useRef(_initState);
    var forceUpdate = useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}export{useAutoUpdateLayoutState,useAutoUpdateState,useFirstSkipEffect,useFirstSkipLayoutEffect};