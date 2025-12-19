import {useState,useRef,useEffect,useLayoutEffect,useImperativeHandle}from'react';import {c}from'react/compiler-runtime';function _arrayLikeToArray(r, a) {
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
}var useChanged = function useChanged(value, t0) {
  var initial = t0 === undefined ? false : t0;
  var _useState = useState(initial ? value === undefined ? null : undefined : value),
    _useState2 = _slicedToArray(_useState, 2),
    prevValue = _useState2[0],
    setPrevValue = _useState2[1];
  var changed = false;
  if (value !== prevValue) {
    setPrevValue(value);
    changed = true;
  }
  return changed;
};function useMountedRef(t0) {
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
}export{clearIntervalRef,clearTimeoutRef,useAutoUpdateRef,useChanged,useForwardRef,useIntervalRef,useMountedRef,useTimeoutRef};