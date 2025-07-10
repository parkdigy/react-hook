import {useRef,useEffect,useLayoutEffect,useState,useCallback}from'react';function useFirstSkipEffect(effect, deps) {
    var firstRef = useRef(true);
    useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}function useFirstSkipLayoutEffect(effect, deps) {
    var firstRef = useRef(true);
    useLayoutEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}function useAutoForceUpdate(interval) {
    var _a = useState(0), setTick = _a[1];
    useEffect(function () {
        var tm = setInterval(function () {
            setTick(function (old) {
                return old + 1;
            });
        }, interval);
        return function () {
            clearInterval(tm);
        };
    }, [interval]);
}function clearIntervalRef(ref) {
    if (ref.current) {
        clearInterval(ref.current);
        ref.current = undefined;
    }
}function clearTimeoutRef(ref) {
    if (ref.current) {
        clearTimeout(ref.current);
        ref.current = undefined;
    }
}function useIntervalRef() {
    var ref = useRef(undefined);
    useEffect(function () {
        return function () {
            clearIntervalRef(ref);
        };
    }, []);
    var setIntervalFunc = useCallback(function (callback, ms) {
        clearIntervalRef(ref);
        ref.current = setInterval(function () {
            callback(ref);
        }, ms);
    }, []);
    return [ref, setIntervalFunc];
}function useTimeoutRef() {
    var ref = useRef(undefined);
    useEffect(function () {
        return function () {
            clearTimeoutRef(ref);
        };
    }, []);
    var setTimeoutFunc = useCallback(function (callback, ms) {
        clearTimeoutRef(ref);
        ref.current = setTimeout(function () {
            ref.current = undefined;
            callback();
        }, ms);
    }, []);
    return [ref, setTimeoutFunc];
}function useForceUpdate(delayMilliseconds) {
    var _a = useTimeoutRef(), setDelayTimeout = _a[1];
    var _b = useState(0), setValue = _b[1];
    return useCallback(function (delay) {
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
}function useForwardLayoutRef(ref, value, onSet, onUnset) {
    useLayoutEffect(function () {
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
    useEffect(function () {
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
}function useMountedRef(initialValue) {
    if (initialValue === void 0) { initialValue = true; }
    var isMountedRef = useRef(initialValue);
    useEffect(function () {
        return function () {
            isMountedRef.current = false;
        };
    }, []);
    return isMountedRef;
}function useLayoutPerformance(name) {
    var beginTime = performance.now();
    useLayoutEffect(function () {
        console.log('Layout Performance', '-', name, performance.now() - beginTime);
    });
}function usePerformance(name) {
    var beginTime = performance.now();
    useEffect(function () {
        console.log('Performance', '-', name, performance.now() - beginTime);
    });
}function useAutoUpdateLayoutRef(value) {
    var valueRef = useRef(value);
    var _a = useState(0), setUpdateValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        valueRef.current = value;
        setUpdateValue(function (prev) { return prev + 1; });
    }, [value]);
    return valueRef;
}function useAutoUpdateRef(value) {
    var valueRef = useRef(value);
    var _a = useState(0), setUpdateValue = _a[1];
    useFirstSkipEffect(function () {
        valueRef.current = value;
        setUpdateValue(function (prev) { return prev + 1; });
    }, [value]);
    return valueRef;
}// 구현부
function useAutoUpdateRefState(state, callback) {
    var valueRef = useRef(callback ? callback(state) : state);
    var _a = useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipEffect(function () {
        var newValue = callback ? callback(state) : state;
        if (!equal(valueRef.current, newValue)) {
            valueRef.current = newValue;
            _setValue(newValue);
        }
    }, [state]);
    var setValue = useCallback(function (newValue, skipCallback) {
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
}// 구현부
function useAutoUpdateState(state, callback) {
    var _a = useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipEffect(function () {
        _setValue(callback ? callback(state) : state);
    }, [state]);
    var setValue = useCallback(function (newValue, skipCallback) {
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
}function useRefState(initialState) {
    var _a = useState(initialState), _value = _a[0], _setValue = _a[1];
    var valueRef = useRef(_value);
    var setValue = useCallback(function (value) {
        if (typeof value === 'function') {
            _setValue(function (prev) {
                var finalValue = value(prev);
                valueRef.current = finalValue;
                return finalValue;
            });
        }
        else {
            valueRef.current = value;
            _setValue(value);
        }
    }, []);
    return [valueRef, _value, setValue];
}function useSafeUpdate() {
    var mountedRef = useMountedRef();
    return useCallback(function (callback) {
        if (mountedRef.current) {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}export{clearIntervalRef,clearTimeoutRef,useAutoForceUpdate,useAutoUpdateLayoutRef,useAutoUpdateRef,useAutoUpdateRefState,useAutoUpdateState,useFirstSkipEffect,useFirstSkipLayoutEffect,useForceUpdate,useForwardLayoutRef,useForwardRef,useIntervalRef,useLayoutPerformance,useMountedRef,usePerformance,useRefState,useSafeUpdate,useTimeoutRef};