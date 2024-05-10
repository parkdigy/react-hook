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
}// 구현부
function useAutoUpdateState(state, callback) {
    var _a = react.useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipEffect(function () {
        _setValue(callback ? callback(state) : state);
    }, [state]);
    var setValue = react.useCallback(function (newValue, skipCallback) {
        var finalNewValue = newValue;
        if (typeof finalNewValue === 'function') {
            _setValue(function (prev) {
                finalNewValue = finalNewValue(prev);
                finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
                return finalNewValue;
            });
        }
        else {
            finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
            _setValue(finalNewValue);
        }
        return finalNewValue;
    }, [callback]);
    return [_value, setValue];
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
}// 구현부
function useAutoUpdateLayoutState(state, callback) {
    var _a = react.useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        _setValue(callback ? callback(state) : state);
    }, [state]);
    var setValue = react.useCallback(function (newValue, skipCallback) {
        var finalNewValue = newValue;
        if (typeof finalNewValue === 'function') {
            _setValue(function (prev) {
                finalNewValue = finalNewValue(prev);
                finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
                return finalNewValue;
            });
        }
        else {
            finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
            _setValue(finalNewValue);
        }
        return finalNewValue;
    }, [callback]);
    return [_value, setValue];
}// 구현부
function useAutoUpdateRefState(state, callback) {
    var valueRef = react.useRef(callback ? callback(state) : state);
    var _a = react.useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipEffect(function () {
        var newValue = callback ? callback(state) : state;
        if (!util.equal(valueRef.current, newValue)) {
            valueRef.current = newValue;
            _setValue(newValue);
        }
    }, [state]);
    var setValue = react.useCallback(function (newValue, skipCallback) {
        var finalNewValue = newValue;
        if (typeof finalNewValue === 'function') {
            _setValue(function (prev) {
                finalNewValue = finalNewValue(prev);
                finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
                return finalNewValue;
            });
        }
        else {
            finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
            _setValue(finalNewValue);
        }
        valueRef.current = finalNewValue;
        return finalNewValue;
    }, [callback]);
    return [valueRef, _value, setValue];
}// 구현부
function useAutoUpdateLayoutRefState(state, callback) {
    var valueRef = react.useRef(callback ? callback(state) : state);
    var _a = react.useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        var newValue = callback ? callback(state) : state;
        if (!util.equal(valueRef.current, newValue)) {
            valueRef.current = newValue;
            _setValue(newValue);
        }
    }, [state]);
    var setValue = react.useCallback(function (newValue, skipCallback) {
        var finalNewValue = newValue;
        if (typeof finalNewValue === 'function') {
            _setValue(function (prev) {
                finalNewValue = finalNewValue(prev);
                finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
                return finalNewValue;
            });
        }
        else {
            finalNewValue = !skipCallback && callback ? callback(finalNewValue) : finalNewValue;
            _setValue(finalNewValue);
        }
        valueRef.current = finalNewValue;
        return finalNewValue;
    }, [callback]);
    return [valueRef, _value, setValue];
}function useForwardRef(ref, value) {
    react.useLayoutEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            else {
                ref.current = value;
            }
        }
        return function () {
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [ref, value]);
}function useAutoUpdateRef(value) {
    var valueRef = react.useRef(value);
    useFirstSkipEffect(function () {
        valueRef.current = value;
    }, [value]);
    return valueRef;
}function useAutoUpdateLayoutRef(value) {
    var valueRef = react.useRef(value);
    useFirstSkipLayoutEffect(function () {
        valueRef.current = value;
    }, [value]);
    return valueRef;
}exports.useAutoUpdateLayoutRef=useAutoUpdateLayoutRef;exports.useAutoUpdateLayoutRefState=useAutoUpdateLayoutRefState;exports.useAutoUpdateLayoutState=useAutoUpdateLayoutState;exports.useAutoUpdateRef=useAutoUpdateRef;exports.useAutoUpdateRefState=useAutoUpdateRefState;exports.useAutoUpdateState=useAutoUpdateState;exports.useFirstSkipEffect=useFirstSkipEffect;exports.useFirstSkipLayoutEffect=useFirstSkipLayoutEffect;exports.useForwardRef=useForwardRef;