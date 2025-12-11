import {useRef,useEffect,useLayoutEffect,useState,useCallback}from'react';function useFirstSkipEffect(effect, deps) {
    const firstRef = useRef(true);
    useEffect(() => {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}function useFirstSkipLayoutEffect(effect, deps) {
    const firstRef = useRef(true);
    useLayoutEffect(() => {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}function useAutoForceUpdate(interval) {
    const [, setTick] = useState(0);
    useEffect(() => {
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
    const ref = useRef(undefined);
    useEffect(() => {
        return () => {
            clearIntervalRef(ref);
        };
    }, []);
    const setIntervalFunc = useCallback((callback, ms) => {
        clearIntervalRef(ref);
        ref.current = setInterval(() => {
            callback(ref);
        }, ms);
    }, []);
    return [ref, setIntervalFunc];
}function useTimeoutRef() {
    const ref = useRef(undefined);
    useEffect(() => {
        return () => {
            clearTimeoutRef(ref);
        };
    }, []);
    const setTimeoutFunc = useCallback((callback, ms) => {
        clearTimeoutRef(ref);
        ref.current = setTimeout(() => {
            ref.current = undefined;
            callback();
        }, ms);
    }, []);
    return [ref, setTimeoutFunc];
}function useForceUpdate(delayMilliseconds) {
    const [, setDelayTimeout] = useTimeoutRef();
    const [, setValue] = useState(0);
    return useCallback((delay) => {
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
    useLayoutEffect(() => {
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
    useEffect(() => {
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
    const isMountedRef = useRef(initialValue);
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);
    return isMountedRef;
}function useLayoutPerformance(name) {
    const beginTime = performance.now();
    useLayoutEffect(() => {
        console.log('Layout Performance', '-', name, performance.now() - beginTime);
    });
}function usePerformance(name) {
    const beginTime = performance.now();
    useEffect(() => {
        console.log('Performance', '-', name, performance.now() - beginTime);
    });
}function useAutoUpdateLayoutRef(value) {
    const valueRef = useRef(value);
    const [, setUpdateValue] = useState(0);
    useFirstSkipLayoutEffect(() => {
        valueRef.current = value;
        setUpdateValue((prev) => prev + 1);
    }, [value]);
    return valueRef;
}function useAutoUpdateRef(value) {
    const valueRef = useRef(value);
    const [, setUpdateValue] = useState(0);
    useFirstSkipEffect(() => {
        valueRef.current = value;
        setUpdateValue((prev) => prev + 1);
    }, [value]);
    return valueRef;
}// 구현부
function useAutoUpdateRefState(state, callback) {
    const valueRef = useRef(callback ? callback(state) : state);
    const [_value, _setValue] = useState(() => (callback ? callback(state) : state));
    useFirstSkipEffect(() => {
        const newValue = callback ? callback(state) : state;
        if (!equal(valueRef.current, newValue)) {
            valueRef.current = newValue;
            _setValue(newValue);
        }
    }, [state]);
    const setValue = useCallback((newValue, skipCallback) => {
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
    const [_value, _setValue] = useState(() => (callback ? callback(state) : state));
    useFirstSkipEffect(() => {
        _setValue(callback ? callback(state) : state);
    }, [state]);
    const setValue = useCallback((newValue, skipCallback) => {
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
    const [_value, _setValue] = useState(initialState);
    const valueRef = useRef(_value);
    const setValue = useCallback((value) => {
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
    const [value, setValue] = useState(initialState);
    const safeSetValue = useCallback((newValue) => {
        if (mountedRef.current) {
            setValue(newValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [value, safeSetValue];
}function useSafeUpdate() {
    const mountedRef = useMountedRef();
    return useCallback((callback) => {
        if (mountedRef.current) {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}export{clearIntervalRef,clearTimeoutRef,useAutoForceUpdate,useAutoUpdateLayoutRef,useAutoUpdateRef,useAutoUpdateRefState,useAutoUpdateState,useFirstSkipEffect,useFirstSkipLayoutEffect,useForceUpdate,useForwardLayoutRef,useForwardRef,useIntervalRef,useLayoutPerformance,useMountedRef,usePerformance,useRefState,useSafeState,useSafeUpdate,useTimeoutRef};