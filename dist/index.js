'use strict';var react=require('react');function useFirstSkipEffect(effect, deps) {
    var firstRef = react.useRef(true);
    react.useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        if (!equal$1(valueRef.current, newValue)) {
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
}
/********************************************************************************************************************
 * equal
 * ******************************************************************************************************************/
function equal$1(v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (typeof v1 === 'object' && typeof v2 === 'object') {
        return JSON.stringify(v1) === JSON.stringify(v2);
    }
    else {
        return v1 === v2;
    }
}// 구현부
function useAutoUpdateLayoutRefState(state, callback) {
    var valueRef = react.useRef(callback ? callback(state) : state);
    var _a = react.useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        var newValue = callback ? callback(state) : state;
        if (!equal(valueRef.current, newValue)) {
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
}
/********************************************************************************************************************
 * equal
 * ******************************************************************************************************************/
function equal(v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (typeof v1 === 'object' && typeof v2 === 'object') {
        return JSON.stringify(v1) === JSON.stringify(v2);
    }
    else {
        return v1 === v2;
    }
}function useForwardLayoutRef(ref, value, onSet, onUnset) {
    react.useLayoutEffect(function () {
        onSet === null || onSet === void 0 ? void 0 : onSet(value);
        if (ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            else {
                ref.current = value;
            }
        }
        return function () {
            onUnset === null || onUnset === void 0 ? void 0 : onUnset();
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [onSet, onUnset, ref, value]);
}function useForwardRef(ref, value, onSet, onUnset) {
    react.useEffect(function () {
        onSet === null || onSet === void 0 ? void 0 : onSet(value);
        if (ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            else {
                ref.current = value;
            }
        }
        return function () {
            onUnset === null || onUnset === void 0 ? void 0 : onUnset();
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [onSet, onUnset, ref, value]);
}function useAutoUpdateRef(value) {
    var valueRef = react.useRef(value);
    var _a = react.useState(0), setUpdateValue = _a[1];
    useFirstSkipEffect(function () {
        valueRef.current = value;
        setUpdateValue(function (prev) { return prev + 1; });
    }, [value]);
    return valueRef;
}function useAutoUpdateLayoutRef(value) {
    var valueRef = react.useRef(value);
    var _a = react.useState(0), setUpdateValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        valueRef.current = value;
        setUpdateValue(function (prev) { return prev + 1; });
    }, [value]);
    return valueRef;
}function usePerformance(name) {
    var beginTime = performance.now();
    react.useEffect(function () {
        console.log('Performance', '-', name, performance.now() - beginTime);
    });
}function useLayoutPerformance(name) {
    var beginTime = performance.now();
    react.useLayoutEffect(function () {
        console.log('Layout Performance', '-', name, performance.now() - beginTime);
    });
}function useAutoForceUpdate(interval) {
    var _a = react.useState(0), setTick = _a[1];
    react.useEffect(function () {
        var tm = setInterval(function () {
            setTick(function (old) {
                return old + 1;
            });
        }, interval);
        return function () {
            clearInterval(tm);
        };
    }, [interval]);
}function clearTimeoutRef(ref) {
    if (ref.current) {
        clearTimeout(ref.current);
        ref.current = undefined;
    }
}function useTimeoutRef() {
    var ref = react.useRef(undefined);
    react.useEffect(function () {
        return function () {
            clearTimeoutRef(ref);
        };
    }, []);
    var setTimeoutFunc = react.useCallback(function (callback, ms) {
        clearTimeoutRef(ref);
        ref.current = setTimeout(function () {
            ref.current = undefined;
            callback();
        }, ms);
    }, []);
    return [ref, setTimeoutFunc];
}function useForceUpdate(delayMilliseconds) {
    var _a = useTimeoutRef(), setDelayTimeout = _a[1];
    var _b = react.useState(0), setValue = _b[1];
    return react.useCallback(function (delay) {
        if (ifUndefined(delay, delayMilliseconds) !== undefined) {
            setDelayTimeout(function () {
                setValue(function (old) { return old + 1; });
            }, ifUndefined(delay, delayMilliseconds));
        }
        else {
            setValue(function (old) { return old + 1; });
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [delayMilliseconds]);
}
/********************************************************************************************************************
 * ifUndefined
 * ******************************************************************************************************************/
function ifUndefined(v, v2) {
    return v === undefined ? v2 : v;
}function clearIntervalRef(ref) {
    if (ref.current) {
        clearInterval(ref.current);
        ref.current = undefined;
    }
}function useIntervalRef() {
    var ref = react.useRef(undefined);
    react.useEffect(function () {
        return function () {
            clearIntervalRef(ref);
        };
    }, []);
    var setIntervalFunc = react.useCallback(function (callback, ms) {
        clearIntervalRef(ref);
        ref.current = setInterval(function () {
            callback(ref);
        }, ms);
    }, []);
    return [ref, setIntervalFunc];
}exports.clearIntervalRef=clearIntervalRef;exports.clearTimeoutRef=clearTimeoutRef;exports.useAutoForceUpdate=useAutoForceUpdate;exports.useAutoUpdateLayoutRef=useAutoUpdateLayoutRef;exports.useAutoUpdateLayoutRefState=useAutoUpdateLayoutRefState;exports.useAutoUpdateLayoutState=useAutoUpdateLayoutState;exports.useAutoUpdateRef=useAutoUpdateRef;exports.useAutoUpdateRefState=useAutoUpdateRefState;exports.useAutoUpdateState=useAutoUpdateState;exports.useFirstSkipEffect=useFirstSkipEffect;exports.useFirstSkipLayoutEffect=useFirstSkipLayoutEffect;exports.useForceUpdate=useForceUpdate;exports.useForwardLayoutRef=useForwardLayoutRef;exports.useForwardRef=useForwardRef;exports.useIntervalRef=useIntervalRef;exports.useLayoutPerformance=useLayoutPerformance;exports.usePerformance=usePerformance;exports.useTimeoutRef=useTimeoutRef;