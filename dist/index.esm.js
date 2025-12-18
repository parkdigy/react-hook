import {c}from'react/compiler-runtime';import {useRef,useEffect,useLayoutEffect,useImperativeHandle}from'react';function useMountedRef(t0) {
  var $ = c(2);
  var initialValue = t0 === undefined ? true : t0;
  var isMountedRef = useRef(initialValue);
  var t1;
  var t2;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      isMountedRef.current = true;
      return function () {
        isMountedRef.current = false;
      };
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  useEffect(t1, t2);
  return isMountedRef;
}function useAutoUpdateRef(value) {
  var $ = c(3);
  var valueRef = useRef(value);
  var t0;
  var t1;
  if ($[0] !== value) {
    t0 = function t0() {
      valueRef.current = value;
    };
    t1 = [value];
    $[0] = value;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useLayoutEffect(t0, t1);
  return valueRef;
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
  var $ = c(3);
  var ref = useRef(undefined);
  var t0;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = function t0() {
      return function () {
        clearIntervalRef(ref);
      };
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  useEffect(t0, t1);
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    var setIntervalFunc = function setIntervalFunc(callback, ms) {
      clearIntervalRef(ref);
      ref.current = setInterval(function () {
        callback(ref);
      }, ms);
    };
    t2 = [ref, setIntervalFunc];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}function useTimeoutRef() {
  var $ = c(3);
  var ref = useRef(undefined);
  var t0;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = function t0() {
      return function () {
        clearTimeoutRef(ref);
      };
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  useEffect(t0, t1);
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    var setTimeoutFunc = function setTimeoutFunc(callback, ms) {
      clearTimeoutRef(ref);
      ref.current = setTimeout(function () {
        ref.current = undefined;
        callback();
      }, ms);
    };
    t2 = [ref, setTimeoutFunc];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}function useForwardRef(ref, value, onSet, onUnset) {
  var $ = c(8);
  var onSetRef = useAutoUpdateRef(onSet);
  var onUnsetRef = useAutoUpdateRef(onUnset);
  var t0;
  var t1;
  if ($[0] !== value) {
    t0 = function t0() {
      return value;
    };
    t1 = [value];
    $[0] = value;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useImperativeHandle(ref, t0, t1);
  var t2;
  var t3;
  if ($[3] !== onSetRef || $[4] !== onUnsetRef || $[5] !== value) {
    t2 = function t2() {
      var _onSetRef$current;
      (_onSetRef$current = onSetRef.current) === null || _onSetRef$current === void 0 || _onSetRef$current.call(onSetRef, value);
      return function () {
        var _onUnsetRef$current;
        (_onUnsetRef$current = onUnsetRef.current) === null || _onUnsetRef$current === void 0 || _onUnsetRef$current.call(onUnsetRef);
        onUnsetRef.current = undefined;
      };
    };
    t3 = [onSetRef, onUnsetRef, value];
    $[3] = onSetRef;
    $[4] = onUnsetRef;
    $[5] = value;
    $[6] = t2;
    $[7] = t3;
  } else {
    t2 = $[6];
    t3 = $[7];
  }
  useEffect(t2, t3);
}export{clearIntervalRef,clearTimeoutRef,useAutoUpdateRef,useForwardRef,useIntervalRef,useMountedRef,useTimeoutRef};