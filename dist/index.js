'use strict';var react=require('react');function useFirstSkipEffect(effect, deps) {
    const firstRef = react.useRef(true);
    react.useEffect(() => {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}function useFirstSkipLayoutEffect(effect, deps) {
    const firstRef = react.useRef(true);
    react.useLayoutEffect(() => {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}function useAutoForceUpdate(interval) {
    const [, setTick] = react.useState(0);
    react.useEffect(() => {
        const tm = setInterval(() => {
            setTick((old) => {
                return old + 1;
            });
        }, interval);
        return () => {
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
    const ref = react.useRef(undefined);
    react.useEffect(() => {
        return () => {
            clearIntervalRef(ref);
        };
    }, []);
    const setIntervalFunc = react.useCallback((callback, ms) => {
        clearIntervalRef(ref);
        ref.current = setInterval(() => {
            callback(ref);
        }, ms);
    }, []);
    return [ref, setIntervalFunc];
}function useTimeoutRef() {
    const ref = react.useRef(undefined);
    react.useEffect(() => {
        return () => {
            clearTimeoutRef(ref);
        };
    }, []);
    const setTimeoutFunc = react.useCallback((callback, ms) => {
        clearTimeoutRef(ref);
        ref.current = setTimeout(() => {
            ref.current = undefined;
            callback();
        }, ms);
    }, []);
    return [ref, setTimeoutFunc];
}function useForceUpdate(delayMilliseconds) {
    const [, setDelayTimeout] = useTimeoutRef();
    const [, setValue] = react.useState(0);
    return react.useCallback((delay) => {
        if (ifUndefined(delay, delayMilliseconds) !== undefined) {
            setDelayTimeout(() => {
                setValue((old) => old + 1);
            }, ifUndefined(delay, delayMilliseconds));
        }
        else {
            setValue((old) => old + 1);
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
    react.useLayoutEffect(() => {
        onSet === null || onSet === void 0 ? void 0 : onSet(value);
        if (ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            else {
                ref.current = value;
            }
        }
        return () => {
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
    react.useEffect(() => {
        onSet === null || onSet === void 0 ? void 0 : onSet(value);
        if (ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            else {
                ref.current = value;
            }
        }
        return () => {
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
}function useMountedRef(initialValue = true) {
    const isMountedRef = react.useRef(initialValue);
    react.useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);
    return isMountedRef;
}function useLayoutPerformance(name) {
    const beginTime = performance.now();
    react.useLayoutEffect(() => {
        console.log('Layout Performance', '-', name, performance.now() - beginTime);
    });
}function usePerformance(name) {
    const beginTime = performance.now();
    react.useEffect(() => {
        console.log('Performance', '-', name, performance.now() - beginTime);
    });
}function useAutoUpdateLayoutRef(value) {
    const valueRef = react.useRef(value);
    const [, setUpdateValue] = react.useState(0);
    useFirstSkipLayoutEffect(() => {
        valueRef.current = value;
        setUpdateValue((prev) => prev + 1);
    }, [value]);
    return valueRef;
}function useAutoUpdateRef(value) {
    const valueRef = react.useRef(value);
    const [, setUpdateValue] = react.useState(0);
    useFirstSkipEffect(() => {
        valueRef.current = value;
        setUpdateValue((prev) => prev + 1);
    }, [value]);
    return valueRef;
}// 구현부
function useAutoUpdateRefState(state, callback) {
    const valueRef = react.useRef(callback ? callback(state) : state);
    const [_value, _setValue] = react.useState(() => (callback ? callback(state) : state));
    useFirstSkipEffect(() => {
        const newValue = callback ? callback(state) : state;
        if (!equal(valueRef.current, newValue)) {
            valueRef.current = newValue;
            _setValue(newValue);
        }
    }, [state]);
    const setValue = react.useCallback((newValue, skipCallback) => {
        let finalNewValue = newValue;
        if (typeof finalNewValue === 'function') {
            _setValue((prev) => {
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
    const [_value, _setValue] = react.useState(() => (callback ? callback(state) : state));
    useFirstSkipEffect(() => {
        _setValue(callback ? callback(state) : state);
    }, [state]);
    const setValue = react.useCallback((newValue, skipCallback) => {
        let finalNewValue = newValue;
        if (typeof finalNewValue === 'function') {
            _setValue((prev) => {
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
    const [_value, _setValue] = react.useState(initialState);
    const valueRef = react.useRef(_value);
    const setValue = react.useCallback((value) => {
        if (typeof value === 'function') {
            _setValue((prev) => {
                const finalValue = value(prev);
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
}function useSafeState(initialState) {
    const mountedRef = useMountedRef();
    const [value, setValue] = react.useState(initialState);
    const safeSetValue = react.useCallback((newValue) => {
        if (mountedRef.current) {
            setValue(newValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [value, safeSetValue];
}function useSafeUpdate() {
    const mountedRef = useMountedRef();
    return react.useCallback((callback) => {
        if (mountedRef.current) {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}exports.clearIntervalRef=clearIntervalRef;exports.clearTimeoutRef=clearTimeoutRef;exports.useAutoForceUpdate=useAutoForceUpdate;exports.useAutoUpdateLayoutRef=useAutoUpdateLayoutRef;exports.useAutoUpdateRef=useAutoUpdateRef;exports.useAutoUpdateRefState=useAutoUpdateRefState;exports.useAutoUpdateState=useAutoUpdateState;exports.useFirstSkipEffect=useFirstSkipEffect;exports.useFirstSkipLayoutEffect=useFirstSkipLayoutEffect;exports.useForceUpdate=useForceUpdate;exports.useForwardLayoutRef=useForwardLayoutRef;exports.useForwardRef=useForwardRef;exports.useIntervalRef=useIntervalRef;exports.useLayoutPerformance=useLayoutPerformance;exports.useMountedRef=useMountedRef;exports.usePerformance=usePerformance;exports.useRefState=useRefState;exports.useSafeState=useSafeState;exports.useSafeUpdate=useSafeUpdate;exports.useTimeoutRef=useTimeoutRef;