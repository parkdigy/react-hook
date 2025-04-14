import {useRef,useEffect,useState,useCallback,useLayoutEffect}from'react';import {equal,ifUndefined}from'@pdg/util';function useFirstSkipEffect(effect, deps) {
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
}// 구현부
function useAutoUpdateLayoutState(state, callback) {
    var _a = useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipLayoutEffect(function () {
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
}// 구현부
function useAutoUpdateLayoutRefState(state, callback) {
    var valueRef = useRef(callback ? callback(state) : state);
    var _a = useState(function () { return (callback ? callback(state) : state); }), _value = _a[0], _setValue = _a[1];
    useFirstSkipLayoutEffect(function () {
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
}function useForwardRef(ref, value) {
    useLayoutEffect(function () {
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
    var valueRef = useRef(value);
    var _a = useState(0), setUpdateValue = _a[1];
    useFirstSkipEffect(function () {
        valueRef.current = value;
        setUpdateValue(function (prev) { return prev + 1; });
    }, [value]);
    return valueRef;
}function useAutoUpdateLayoutRef(value) {
    var valueRef = useRef(value);
    var _a = useState(0), setUpdateValue = _a[1];
    useFirstSkipLayoutEffect(function () {
        valueRef.current = value;
        setUpdateValue(function (prev) { return prev + 1; });
    }, [value]);
    return valueRef;
}function usePerformance(name) {
    var beginTime = performance.now();
    useEffect(function () {
        console.log('Performance', '-', name, performance.now() - beginTime);
    });
}function useLayoutPerformance(name) {
    var beginTime = performance.now();
    useLayoutEffect(function () {
        console.log('Layout Performance', '-', name, performance.now() - beginTime);
    });
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
}function clearTimeoutRef(ref) {
    if (ref.current) {
        clearTimeout(ref.current);
        ref.current = undefined;
    }
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
}function clearIntervalRef(ref) {
    if (ref.current) {
        clearInterval(ref.current);
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
}export{clearIntervalRef,clearTimeoutRef,useAutoForceUpdate,useAutoUpdateLayoutRef,useAutoUpdateLayoutRefState,useAutoUpdateLayoutState,useAutoUpdateRef,useAutoUpdateRefState,useAutoUpdateState,useFirstSkipEffect,useFirstSkipLayoutEffect,useForceUpdate,useForwardRef,useIntervalRef,useLayoutPerformance,usePerformance,useTimeoutRef};