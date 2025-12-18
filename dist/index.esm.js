import {c}from'react/compiler-runtime';import {useRef,useEffect,useLayoutEffect,useState,useImperativeHandle}from'react';function useMountedRef(t0) {
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
}function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}// state 값을 Function 으로 지정한 경우 (사용 불가)

// state 값만 받는 경우 (state 에 function 지정 불가)

// state 값을 Function 으로 지정한 경우 (사용 불가)

// state 와 callback 함수를 받는 경우 (T를 지정한경우) (state 에 function 지정 불가)

// 구현부
function useAutoUpdateRefState(state, callback) {
  var $ = c(16);
  var t0;
  if ($[0] !== callback || $[1] !== state) {
    t0 = {
      state: state,
      callback: callback
    };
    $[0] = callback;
    $[1] = state;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  var _useState = useState(t0),
    _useState2 = _slicedToArray(_useState, 2),
    prevProps = _useState2[0],
    setPrevProps = _useState2[1];
  var t1;
  if ($[3] !== callback || $[4] !== state) {
    t1 = function t1() {
      return callback ? callback(state) : state;
    };
    $[3] = callback;
    $[4] = state;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var _useState3 = useState(t1),
    _useState4 = _slicedToArray(_useState3, 2),
    _value = _useState4[0],
    _setValue = _useState4[1];
  var finalValue = _value;
  if (state !== prevProps.state || callback !== prevProps.callback) {
    var _t;
    if ($[6] !== callback || $[7] !== state) {
      _t = callback ? callback(state) : state;
      $[6] = callback;
      $[7] = state;
      $[8] = _t;
    } else {
      _t = $[8];
    }
    finalValue = _t;
    setPrevProps({
      state: state,
      callback: callback
    });
    _setValue(finalValue);
  }
  var finalValueRef = useAutoUpdateRef(finalValue);
  var callbackRef = useAutoUpdateRef(callback);
  var t2;
  if ($[9] !== callbackRef || $[10] !== finalValueRef) {
    t2 = function t2(newValue, skipCallback) {
      var resolvedValue = typeof newValue === "function" ? newValue(finalValueRef.current) : newValue;
      var nextValue = !skipCallback && callbackRef.current ? callbackRef.current(resolvedValue) : resolvedValue;
      finalValueRef.current = nextValue;
      _setValue(nextValue);
      return nextValue;
    };
    $[9] = callbackRef;
    $[10] = finalValueRef;
    $[11] = t2;
  } else {
    t2 = $[11];
  }
  var setValue = t2;
  var t3;
  if ($[12] !== _value || $[13] !== finalValueRef || $[14] !== setValue) {
    t3 = [finalValueRef, _value, setValue];
    $[12] = _value;
    $[13] = finalValueRef;
    $[14] = setValue;
    $[15] = t3;
  } else {
    t3 = $[15];
  }
  return t3;
}// state 값을 Function 으로 지정한 경우 (사용 불가)

// state 값만 받는 경우 (state 에 function 지정 불가)

// state 값을 Function 으로 지정한 경우 (사용 불가)

// state 와 callback 함수를 받는 경우 (T를 지정한경우) (state 에 function 지정 불가)

// 구현부
function useAutoUpdateState(state, callback) {
  var $ = c(15);
  var t0;
  if ($[0] !== callback || $[1] !== state) {
    t0 = {
      state: state,
      callback: callback
    };
    $[0] = callback;
    $[1] = state;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  var _useState = useState(t0),
    _useState2 = _slicedToArray(_useState, 2),
    prevProps = _useState2[0],
    setPrevProps = _useState2[1];
  var t1;
  if ($[3] !== callback || $[4] !== state) {
    t1 = function t1() {
      return callback ? callback(state) : state;
    };
    $[3] = callback;
    $[4] = state;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var _useState3 = useState(t1),
    _useState4 = _slicedToArray(_useState3, 2),
    _value = _useState4[0],
    _setValue = _useState4[1];
  var finalValue = _value;
  if (state !== prevProps.state || callback !== prevProps.callback) {
    var _t;
    if ($[6] !== callback || $[7] !== state) {
      _t = callback ? callback(state) : state;
      $[6] = callback;
      $[7] = state;
      $[8] = _t;
    } else {
      _t = $[8];
    }
    finalValue = _t;
    setPrevProps({
      state: state,
      callback: callback
    });
    _setValue(finalValue);
  }
  var finalValueRef = useAutoUpdateRef(finalValue);
  var callbackRef = useAutoUpdateRef(callback);
  var t2;
  if ($[9] !== callbackRef || $[10] !== finalValueRef) {
    t2 = function t2(newValue, skipCallback) {
      var resolvedValue = typeof newValue === "function" ? newValue(finalValueRef.current) : newValue;
      var nextValue = !skipCallback && callbackRef.current ? callbackRef.current(resolvedValue) : resolvedValue;
      finalValueRef.current = nextValue;
      _setValue(nextValue);
      return nextValue;
    };
    $[9] = callbackRef;
    $[10] = finalValueRef;
    $[11] = t2;
  } else {
    t2 = $[11];
  }
  var setValue = t2;
  var t3;
  if ($[12] !== finalValue || $[13] !== setValue) {
    t3 = [finalValue, setValue];
    $[12] = finalValue;
    $[13] = setValue;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  return t3;
}function useRefState(initialState) {
  var $ = c(3);
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    _value = _useState2[0],
    _setValue = _useState2[1];
  var valueRef = useRef(_value);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = function t0(value) {
      _setValue(function (prev) {
        var nextValue = typeof value === "function" ? value(prev) : value;
        valueRef.current = nextValue;
        return nextValue;
      });
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var setValue = t0;
  var t1;
  if ($[1] !== _value) {
    t1 = [valueRef, _value, setValue];
    $[1] = _value;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}function useSafeState(initialState) {
  var $ = c(5);
  var mountedRef = useRef(false);
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var t0;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = function t0() {
      mountedRef.current = true;
      return function () {
        mountedRef.current = false;
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
    t2 = function t2(newValue) {
      if (mountedRef.current) {
        setValue(newValue);
      }
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var safeSetValue = t2;
  var t3;
  if ($[3] !== value) {
    t3 = [value, safeSetValue];
    $[3] = value;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
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
}function useSafeUpdate() {
  var $ = c(2);
  var mountedRef = useMountedRef();
  var t0;
  if ($[0] !== mountedRef) {
    t0 = function t0(callback) {
      if (mountedRef.current) {
        callback();
      }
    };
    $[0] = mountedRef;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
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
}export{clearIntervalRef,clearTimeoutRef,useAutoUpdateRef,useAutoUpdateRefState,useAutoUpdateState,useForwardRef,useIntervalRef,useMountedRef,useRefState,useSafeState,useSafeUpdate,useTimeoutRef};