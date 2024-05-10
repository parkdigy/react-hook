import {useRef,useEffect,useState,useCallback,useLayoutEffect}from'react';import {equal}from'@pdg/util';function useFirstSkipEffect(effect, deps) {
    var firstRef = useRef(true);
    useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
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
    useFirstSkipEffect(function () {
        valueRef.current = value;
    }, [value]);
    return valueRef;
}function useAutoUpdateLayoutRef(value) {
    var valueRef = useRef(value);
    useFirstSkipLayoutEffect(function () {
        valueRef.current = value;
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
}function useAutoForceUpdate(name, interval) {
    var _a = useState(0), setTick = _a[1];
    useEffect(function () {
        var tm = setInterval(function () {
            setTick(function (old) {
                console.log('Auto Force Update', '-', name, old + 1);
                return old + 1;
            });
        }, interval);
        return function () {
            clearInterval(tm);
        };
    }, [interval]);
}function useForceUpdate() {
    var _a = useState(0), setValue = _a[1];
    return useCallback(function () {
        setValue(function (old) { return old + 1; });
    }, []);
}export{useAutoForceUpdate,useAutoUpdateLayoutRef,useAutoUpdateLayoutRefState,useAutoUpdateLayoutState,useAutoUpdateRef,useAutoUpdateRefState,useAutoUpdateState,useFirstSkipEffect,useFirstSkipLayoutEffect,useForceUpdate,useForwardRef,useLayoutPerformance,usePerformance};