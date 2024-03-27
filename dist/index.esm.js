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
}function useAutoUpdateState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var callback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipEffect(function () {
        _setValue(callback ? callback(state) : state);
    }, [state, callback]);
    var setValue = useCallback(function (newValue) {
        _setValue(callback ? callback(newValue) : newValue);
    }, [callback]);
    return [_value, setValue];
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
    var callback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        _setValue(callback ? callback(state) : state);
    }, [state, callback]);
    var setValue = useCallback(function (newValue) {
        _setValue(callback ? callback(newValue) : newValue);
    }, [callback]);
    return [_value, setValue];
}export{useAutoUpdateLayoutState,useAutoUpdateState,useFirstSkipEffect,useFirstSkipLayoutEffect};