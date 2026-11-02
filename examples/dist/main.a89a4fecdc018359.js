"use strict";
(globalThis["rspackChunkexamples"] ||= []).push([[889], {
8284(__unused_rspack_module, __unused_rspack___webpack_exports__, __webpack_require__) {

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/compiler-runtime.js
var compiler_runtime = __webpack_require__(6522);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/dom/lib.js + 2 modules
var lib = __webpack_require__(9526);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/components.js + 1 modules
var components = __webpack_require__(3101);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js + 1 modules
var styled = __webpack_require__(2972);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js + 1 modules
var ListItemIcon = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Icon/Icon.js + 1 modules
var Icon = __webpack_require__(9566);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Badge/Badge.js + 3 modules
var Badge = __webpack_require__(6877);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/ListItemText/ListItemText.js + 1 modules
var ListItemText = __webpack_require__(1968);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/ListItemButton/ListItemButton.js + 2 modules
var ListItemButton = __webpack_require__(5782);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(2589);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/List/List.js + 1 modules
var List = __webpack_require__(2288);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(3356);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(2371);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Box/Box.js + 2 modules
var Box = __webpack_require__(3729);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(6973);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(5124);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/IconButton/IconButton.js + 4 modules
var IconButton = __webpack_require__(4941);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(8316);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Drawer/Drawer.js + 26 modules
var Drawer = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/hooks.js + 2 modules
var hooks = __webpack_require__(537);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(8629);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Menu.js
var Menu = __webpack_require__(2215);
;// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* export default */ const lodash_es_isObject = (isObject);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* export default */ const _freeGlobal = (freeGlobal);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var _root_root = _freeGlobal || freeSelf || Function('return this')();

/* export default */ const _root = (_root_root);

;// CONCATENATED MODULE: ./node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

/* export default */ const lodash_es_now = (now);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* export default */ const _trimmedEndIndex = (trimmedEndIndex);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/* export default */ const _baseTrim = (baseTrim);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root.Symbol;

/* export default */ const _Symbol = (_Symbol_Symbol);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* export default */ const _getRawTag = (getRawTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* export default */ const _objectToString = (objectToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* export default */ const _baseGetTag = (baseGetTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* export default */ const lodash_es_isObjectLike = (isObjectLike);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag);
}

/* export default */ const lodash_es_isSymbol = (isSymbol);

;// CONCATENATED MODULE: ./node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (lodash_es_isSymbol(value)) {
    return NAN;
  }
  if (lodash_es_isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = lodash_es_isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* export default */ const lodash_es_toNumber = (toNumber);

;// CONCATENATED MODULE: ./node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if (lodash_es_isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }

  function debounced() {
    var time = lodash_es_now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* export default */ const lodash_es_debounce = (debounce);

;// CONCATENATED MODULE: ./node_modules/lodash-es/throttle.js



/** Error message constants. */
var throttle_FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(throttle_FUNC_ERROR_TEXT);
  }
  if (lodash_es_isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return lodash_es_debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* export default */ const lodash_es_throttle = (throttle);

;// CONCATENATED MODULE: ./node_modules/simplebar-core/dist/index.mjs
/**
 * simplebar-core - v1.3.2
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */




/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var dist_assign = function() {
    dist_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return dist_assign.apply(this, arguments);
};

function getElementWindow$1(element) {
    if (!element ||
        !element.ownerDocument ||
        !element.ownerDocument.defaultView) {
        return window;
    }
    return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
    if (!element || !element.ownerDocument) {
        return document;
    }
    return element.ownerDocument;
}
// Helper function to retrieve options from element attributes
var getOptions$1 = function (obj) {
    var initialObj = {};
    var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
        var option = attribute.name.match(/data-simplebar-(.+)/);
        if (option) {
            var key = option[1].replace(/\W+(.)/g, function (_, chr) { return chr.toUpperCase(); });
            switch (attribute.value) {
                case 'true':
                    acc[key] = true;
                    break;
                case 'false':
                    acc[key] = false;
                    break;
                case undefined:
                    acc[key] = true;
                    break;
                default:
                    acc[key] = attribute.value;
            }
        }
        return acc;
    }, initialObj);
    return options;
};
function addClasses$1(el, classes) {
    var _a;
    if (!el)
        return;
    (_a = el.classList).add.apply(_a, classes.split(' '));
}
function removeClasses$1(el, classes) {
    if (!el)
        return;
    classes.split(' ').forEach(function (className) {
        el.classList.remove(className);
    });
}
function classNamesToQuery$1(classNames) {
    return ".".concat(classNames.split(' ').join('.'));
}
var canUseDOM = !!(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);

var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addClasses: addClasses$1,
    canUseDOM: canUseDOM,
    classNamesToQuery: classNamesToQuery$1,
    getElementDocument: getElementDocument$1,
    getElementWindow: getElementWindow$1,
    getOptions: getOptions$1,
    removeClasses: removeClasses$1
});

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM) {
    window.addEventListener('resize', function () {
        if (cachedDevicePixelRatio !== window.devicePixelRatio) {
            cachedDevicePixelRatio = window.devicePixelRatio;
            cachedScrollbarWidth = null;
        }
    });
}
function scrollbarWidth() {
    if (cachedScrollbarWidth === null) {
        if (typeof document === 'undefined') {
            cachedScrollbarWidth = 0;
            return cachedScrollbarWidth;
        }
        var body = document.body;
        var box = document.createElement('div');
        box.classList.add('simplebar-hide-scrollbar');
        body.appendChild(box);
        var width = box.getBoundingClientRect().right;
        body.removeChild(box);
        cachedScrollbarWidth = width;
    }
    return cachedScrollbarWidth;
}

var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions = getOptions$1, addClasses = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
var dist_SimpleBarCore = /** @class */ (function () {
    function SimpleBarCore(element, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.removePreventClickId = null;
        this.minScrollbarWidth = 20;
        this.stopScrollDelay = 175;
        this.isScrolling = false;
        this.isMouseEntering = false;
        this.isDragging = false;
        this.scrollXTicking = false;
        this.scrollYTicking = false;
        this.wrapperEl = null;
        this.contentWrapperEl = null;
        this.contentEl = null;
        this.offsetEl = null;
        this.maskEl = null;
        this.placeholderEl = null;
        this.heightAutoObserverWrapperEl = null;
        this.heightAutoObserverEl = null;
        this.rtlHelpers = null;
        this.scrollbarWidth = 0;
        this.resizeObserver = null;
        this.mutationObserver = null;
        this.elStyles = null;
        this.isRtl = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.onMouseMove = function () { };
        this.onWindowResize = function () { };
        this.onStopScrolling = function () { };
        this.onMouseEntered = function () { };
        /**
         * On scroll event handling
         */
        this.onScroll = function () {
            var elWindow = getElementWindow(_this.el);
            if (!_this.scrollXTicking) {
                elWindow.requestAnimationFrame(_this.scrollX);
                _this.scrollXTicking = true;
            }
            if (!_this.scrollYTicking) {
                elWindow.requestAnimationFrame(_this.scrollY);
                _this.scrollYTicking = true;
            }
            if (!_this.isScrolling) {
                _this.isScrolling = true;
                addClasses(_this.el, _this.classNames.scrolling);
            }
            _this.showScrollbar('x');
            _this.showScrollbar('y');
            _this.onStopScrolling();
        };
        this.scrollX = function () {
            if (_this.axis.x.isOverflowing) {
                _this.positionScrollbar('x');
            }
            _this.scrollXTicking = false;
        };
        this.scrollY = function () {
            if (_this.axis.y.isOverflowing) {
                _this.positionScrollbar('y');
            }
            _this.scrollYTicking = false;
        };
        this._onStopScrolling = function () {
            removeClasses(_this.el, _this.classNames.scrolling);
            if (_this.options.autoHide) {
                _this.hideScrollbar('x');
                _this.hideScrollbar('y');
            }
            _this.isScrolling = false;
        };
        this.onMouseEnter = function () {
            if (!_this.isMouseEntering) {
                addClasses(_this.el, _this.classNames.mouseEntered);
                _this.showScrollbar('x');
                _this.showScrollbar('y');
                _this.isMouseEntering = true;
            }
            _this.onMouseEntered();
        };
        this._onMouseEntered = function () {
            removeClasses(_this.el, _this.classNames.mouseEntered);
            if (_this.options.autoHide) {
                _this.hideScrollbar('x');
                _this.hideScrollbar('y');
            }
            _this.isMouseEntering = false;
        };
        this._onMouseMove = function (e) {
            _this.mouseX = e.clientX;
            _this.mouseY = e.clientY;
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                _this.onMouseMoveForAxis('x');
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                _this.onMouseMoveForAxis('y');
            }
        };
        this.onMouseLeave = function () {
            _this.onMouseMove.cancel();
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                _this.onMouseLeaveForAxis('x');
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                _this.onMouseLeaveForAxis('y');
            }
            _this.mouseX = -1;
            _this.mouseY = -1;
        };
        this._onWindowResize = function () {
            // Recalculate scrollbarWidth in case it's a zoom
            _this.scrollbarWidth = _this.getScrollbarWidth();
            _this.hideNativeScrollbar();
        };
        this.onPointerEvent = function (e) {
            if (!_this.axis.x.track.el ||
                !_this.axis.y.track.el ||
                !_this.axis.x.scrollbar.el ||
                !_this.axis.y.scrollbar.el)
                return;
            var isWithinTrackXBounds, isWithinTrackYBounds;
            _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
            _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
            }
            // If any pointer event is called on the scrollbar
            if (isWithinTrackXBounds || isWithinTrackYBounds) {
                // Prevent event leaking
                e.stopPropagation();
                if (e.type === 'pointerdown' && e.pointerType !== 'touch') {
                    if (isWithinTrackXBounds) {
                        _this.axis.x.scrollbar.rect =
                            _this.axis.x.scrollbar.el.getBoundingClientRect();
                        if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                            _this.onDragStart(e, 'x');
                        }
                        else {
                            _this.onTrackClick(e, 'x');
                        }
                    }
                    if (isWithinTrackYBounds) {
                        _this.axis.y.scrollbar.rect =
                            _this.axis.y.scrollbar.el.getBoundingClientRect();
                        if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                            _this.onDragStart(e, 'y');
                        }
                        else {
                            _this.onTrackClick(e, 'y');
                        }
                    }
                }
            }
        };
        /**
         * Drag scrollbar handle
         */
        this.drag = function (e) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (!_this.draggedAxis || !_this.contentWrapperEl)
                return;
            var eventOffset;
            var track = _this.axis[_this.draggedAxis].track;
            var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
            var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
            var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
            var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : '0px', 10);
            e.preventDefault();
            e.stopPropagation();
            if (_this.draggedAxis === 'y') {
                eventOffset = e.pageY;
            }
            else {
                eventOffset = e.pageX;
            }
            // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).
            var dragPos = eventOffset -
                ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) -
                _this.axis[_this.draggedAxis].dragOffset;
            dragPos =
                _this.draggedAxis === 'x' && _this.isRtl
                    ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) -
                        scrollbar.size -
                        dragPos
                    : dragPos;
            // Convert the mouse position into a percentage of the scrollbar height/width.
            var dragPerc = dragPos / (trackSize - scrollbar.size);
            // Scroll the content by the same percentage.
            var scrollPos = dragPerc * (contentSize - hostSize);
            // Fix browsers inconsistency on RTL
            if (_this.draggedAxis === 'x' && _this.isRtl) {
                scrollPos = ((_l = SimpleBarCore.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative)
                    ? -scrollPos
                    : scrollPos;
            }
            _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] =
                scrollPos;
        };
        /**
         * End scroll handle drag
         */
        this.onEndDrag = function (e) {
            _this.isDragging = false;
            var elDocument = getElementDocument(_this.el);
            var elWindow = getElementWindow(_this.el);
            e.preventDefault();
            e.stopPropagation();
            removeClasses(_this.el, _this.classNames.dragging);
            _this.onStopScrolling();
            elDocument.removeEventListener('mousemove', _this.drag, true);
            elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
            _this.removePreventClickId = elWindow.setTimeout(function () {
                // Remove these asynchronously so we still suppress click events
                // generated simultaneously with mouseup.
                elDocument.removeEventListener('click', _this.preventClick, true);
                elDocument.removeEventListener('dblclick', _this.preventClick, true);
                _this.removePreventClickId = null;
            });
        };
        /**
         * Handler to ignore click events during drag
         */
        this.preventClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
        this.el = element;
        this.options = dist_assign(dist_assign({}, SimpleBarCore.defaultOptions), options);
        this.classNames = dist_assign(dist_assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
        this.axis = {
            x: {
                scrollOffsetAttr: 'scrollLeft',
                sizeAttr: 'width',
                scrollSizeAttr: 'scrollWidth',
                offsetSizeAttr: 'offsetWidth',
                offsetAttr: 'left',
                overflowAttr: 'overflowX',
                dragOffset: 0,
                isOverflowing: true,
                forceVisible: false,
                track: { size: null, el: null, rect: null, isVisible: false },
                scrollbar: { size: null, el: null, rect: null, isVisible: false }
            },
            y: {
                scrollOffsetAttr: 'scrollTop',
                sizeAttr: 'height',
                scrollSizeAttr: 'scrollHeight',
                offsetSizeAttr: 'offsetHeight',
                offsetAttr: 'top',
                overflowAttr: 'overflowY',
                dragOffset: 0,
                isOverflowing: true,
                forceVisible: false,
                track: { size: null, el: null, rect: null, isVisible: false },
                scrollbar: { size: null, el: null, rect: null, isVisible: false }
            }
        };
        if (typeof this.el !== 'object' || !this.el.nodeName) {
            throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
        }
        this.onMouseMove = lodash_es_throttle(this._onMouseMove, 64);
        this.onWindowResize = lodash_es_debounce(this._onWindowResize, 64, { leading: true });
        this.onStopScrolling = lodash_es_debounce(this._onStopScrolling, this.stopScrollDelay);
        this.onMouseEntered = lodash_es_debounce(this._onMouseEntered, this.stopScrollDelay);
        this.init();
    }
    /**
     * Helper to fix browsers inconsistency on RTL:
     *  - Firefox inverts the scrollbar initial position
     *  - IE11 inverts both scrollbar position and scrolling offset
     * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
     */
    SimpleBarCore.getRtlHelpers = function () {
        if (SimpleBarCore.rtlHelpers) {
            return SimpleBarCore.rtlHelpers;
        }
        var dummyDiv = document.createElement('div');
        dummyDiv.innerHTML =
            '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var scrollbarDummyEl = dummyDiv.firstElementChild;
        var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
        if (!dummyChild)
            return null;
        document.body.appendChild(scrollbarDummyEl);
        scrollbarDummyEl.scrollLeft = 0;
        var dummyContainerOffset = SimpleBarCore.getOffset(scrollbarDummyEl);
        var dummyChildOffset = SimpleBarCore.getOffset(dummyChild);
        scrollbarDummyEl.scrollLeft = -999;
        var dummyChildOffsetAfterScroll = SimpleBarCore.getOffset(dummyChild);
        document.body.removeChild(scrollbarDummyEl);
        SimpleBarCore.rtlHelpers = {
            // determines if the scrolling is responding with negative values
            isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
            // determines if the origin scrollbar position is inverted or not (positioned on left or right)
            isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
        };
        return SimpleBarCore.rtlHelpers;
    };
    SimpleBarCore.prototype.getScrollbarWidth = function () {
        // Try/catch for FF 56 throwing on undefined computedStyles
        try {
            // Detect browsers supporting CSS scrollbar styling and do not calculate
            if ((this.contentWrapperEl &&
                getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar')
                    .display === 'none') ||
                'scrollbarWidth' in document.documentElement.style ||
                '-ms-overflow-style' in document.documentElement.style) {
                return 0;
            }
            else {
                return scrollbarWidth();
            }
        }
        catch (e) {
            return scrollbarWidth();
        }
    };
    SimpleBarCore.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        var elDocument = getElementDocument(el);
        var elWindow = getElementWindow(el);
        return {
            top: rect.top +
                (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
            left: rect.left +
                (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
        };
    };
    SimpleBarCore.prototype.init = function () {
        // We stop here on server-side
        if (canUseDOM) {
            this.initDOM();
            this.rtlHelpers = SimpleBarCore.getRtlHelpers();
            this.scrollbarWidth = this.getScrollbarWidth();
            this.recalculate();
            this.initListeners();
        }
    };
    SimpleBarCore.prototype.initDOM = function () {
        var _a, _b;
        // assume that element has his DOM already initiated
        this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
        this.contentWrapperEl =
            this.options.scrollableNode ||
                this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
        this.contentEl =
            this.options.contentNode ||
                this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
        this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
        this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
        this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
        this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
        this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
        this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
        this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
        this.axis.x.scrollbar.el =
            ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        this.axis.y.scrollbar.el =
            ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        if (!this.options.autoHide) {
            addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
            addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
        }
    };
    SimpleBarCore.prototype.initListeners = function () {
        var _this = this;
        var _a;
        var elWindow = getElementWindow(this.el);
        // Event listeners
        this.el.addEventListener('mouseenter', this.onMouseEnter);
        this.el.addEventListener('pointerdown', this.onPointerEvent, true);
        this.el.addEventListener('mousemove', this.onMouseMove);
        this.el.addEventListener('mouseleave', this.onMouseLeave);
        (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', this.onScroll);
        // Browser zoom triggers a window resize
        elWindow.addEventListener('resize', this.onWindowResize);
        if (!this.contentEl)
            return;
        if (window.ResizeObserver) {
            // Hack for https://github.com/WICG/ResizeObserver/issues/38
            var resizeObserverStarted_1 = false;
            var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
            this.resizeObserver = new resizeObserver(function () {
                if (!resizeObserverStarted_1)
                    return;
                elWindow.requestAnimationFrame(function () {
                    _this.recalculate();
                });
            });
            this.resizeObserver.observe(this.el);
            this.resizeObserver.observe(this.contentEl);
            elWindow.requestAnimationFrame(function () {
                resizeObserverStarted_1 = true;
            });
        }
        // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.
        this.mutationObserver = new elWindow.MutationObserver(function () {
            elWindow.requestAnimationFrame(function () {
                _this.recalculate();
            });
        });
        this.mutationObserver.observe(this.contentEl, {
            childList: true,
            subtree: true,
            characterData: true
        });
    };
    SimpleBarCore.prototype.recalculate = function () {
        if (!this.heightAutoObserverEl ||
            !this.contentEl ||
            !this.contentWrapperEl ||
            !this.wrapperEl ||
            !this.placeholderEl)
            return;
        var elWindow = getElementWindow(this.el);
        this.elStyles = elWindow.getComputedStyle(this.el);
        this.isRtl = this.elStyles.direction === 'rtl';
        var contentElOffsetWidth = this.contentEl.offsetWidth;
        var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
        var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
        var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
        var elOverflowX = this.elStyles.overflowX;
        var elOverflowY = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
        this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var contentElScrollHeight = this.contentEl.scrollHeight;
        var contentElScrollWidth = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%';
        // Determine placeholder size
        this.placeholderEl.style.width = isWidthAuto
            ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px")
            : 'auto';
        this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
        var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing =
            contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
        this.axis.y.isOverflowing =
            contentElScrollHeight > contentWrapperElOffsetHeight;
        // Set isOverflowing to false if user explicitely set hidden overflow
        this.axis.x.isOverflowing =
            elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
        this.axis.y.isOverflowing =
            elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
        this.axis.x.forceVisible =
            this.options.forceVisible === 'x' || this.options.forceVisible === true;
        this.axis.y.forceVisible =
            this.options.forceVisible === 'y' || this.options.forceVisible === true;
        this.hideNativeScrollbar();
        // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)
        var offsetForXScrollbar = this.axis.x.isOverflowing
            ? this.scrollbarWidth
            : 0;
        var offsetForYScrollbar = this.axis.y.isOverflowing
            ? this.scrollbarWidth
            : 0;
        this.axis.x.isOverflowing =
            this.axis.x.isOverflowing &&
                contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
        this.axis.y.isOverflowing =
            this.axis.y.isOverflowing &&
                contentElScrollHeight >
                    contentWrapperElOffsetHeight - offsetForXScrollbar;
        this.axis.x.scrollbar.size = this.getScrollbarSize('x');
        this.axis.y.scrollbar.size = this.getScrollbarSize('y');
        if (this.axis.x.scrollbar.el)
            this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
        if (this.axis.y.scrollbar.el)
            this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
        this.positionScrollbar('x');
        this.positionScrollbar('y');
        this.toggleTrackVisibility('x');
        this.toggleTrackVisibility('y');
    };
    /**
     * Calculate scrollbar size
     */
    SimpleBarCore.prototype.getScrollbarSize = function (axis) {
        var _a, _b;
        if (axis === void 0) { axis = 'y'; }
        if (!this.axis[axis].isOverflowing || !this.contentEl) {
            return 0;
        }
        var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
        var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
        var scrollbarRatio = trackSize / contentSize;
        var scrollbarSize;
        // Calculate new height/position of drag handle.
        scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
        if (this.options.scrollbarMaxSize) {
            scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
        }
        return scrollbarSize;
    };
    SimpleBarCore.prototype.positionScrollbar = function (axis) {
        var _a, _b, _c;
        if (axis === void 0) { axis = 'y'; }
        var scrollbar = this.axis[axis].scrollbar;
        if (!this.axis[axis].isOverflowing ||
            !this.contentWrapperEl ||
            !scrollbar.el ||
            !this.elStyles) {
            return;
        }
        var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
        var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        scrollOffset =
            axis === 'x' &&
                this.isRtl &&
                ((_b = SimpleBarCore.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero)
                ? -scrollOffset
                : scrollOffset;
        if (axis === 'x' && this.isRtl) {
            scrollOffset = ((_c = SimpleBarCore.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative)
                ? scrollOffset
                : -scrollOffset;
        }
        var scrollPourcent = scrollOffset / (contentSize - hostSize);
        var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
        handleOffset =
            axis === 'x' && this.isRtl
                ? -handleOffset + (trackSize - scrollbar.size)
                : handleOffset;
        scrollbar.el.style.transform =
            axis === 'x'
                ? "translate3d(".concat(handleOffset, "px, 0, 0)")
                : "translate3d(0, ".concat(handleOffset, "px, 0)");
    };
    SimpleBarCore.prototype.toggleTrackVisibility = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        var track = this.axis[axis].track.el;
        var scrollbar = this.axis[axis].scrollbar.el;
        if (!track || !scrollbar || !this.contentWrapperEl)
            return;
        if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
            track.style.visibility = 'visible';
            this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
            this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
        }
        else {
            track.style.visibility = 'hidden';
            this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
            this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
        }
        // Even if forceVisible is enabled, scrollbar itself should be hidden
        if (this.axis[axis].isOverflowing) {
            scrollbar.style.display = 'block';
        }
        else {
            scrollbar.style.display = 'none';
        }
    };
    SimpleBarCore.prototype.showScrollbar = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
            addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
            this.axis[axis].scrollbar.isVisible = true;
        }
    };
    SimpleBarCore.prototype.hideScrollbar = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        if (this.isDragging)
            return;
        if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
            removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
            this.axis[axis].scrollbar.isVisible = false;
        }
    };
    SimpleBarCore.prototype.hideNativeScrollbar = function () {
        if (!this.offsetEl)
            return;
        this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-".concat(this.scrollbarWidth, "px")
                : '0px';
        this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
                ? "-".concat(this.scrollbarWidth, "px")
                : '0px';
    };
    SimpleBarCore.prototype.onMouseMoveForAxis = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        var currentAxis = this.axis[axis];
        if (!currentAxis.track.el || !currentAxis.scrollbar.el)
            return;
        currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
        currentAxis.scrollbar.rect =
            currentAxis.scrollbar.el.getBoundingClientRect();
        if (this.isWithinBounds(currentAxis.track.rect)) {
            this.showScrollbar(axis);
            addClasses(currentAxis.track.el, this.classNames.hover);
            if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
                addClasses(currentAxis.scrollbar.el, this.classNames.hover);
            }
            else {
                removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
            }
        }
        else {
            removeClasses(currentAxis.track.el, this.classNames.hover);
            if (this.options.autoHide) {
                this.hideScrollbar(axis);
            }
        }
    };
    SimpleBarCore.prototype.onMouseLeaveForAxis = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        removeClasses(this.axis[axis].track.el, this.classNames.hover);
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
        if (this.options.autoHide) {
            this.hideScrollbar(axis);
        }
    };
    /**
     * on scrollbar handle drag movement starts
     */
    SimpleBarCore.prototype.onDragStart = function (e, axis) {
        var _a;
        if (axis === void 0) { axis = 'y'; }
        this.isDragging = true;
        var elDocument = getElementDocument(this.el);
        var elWindow = getElementWindow(this.el);
        var scrollbar = this.axis[axis].scrollbar;
        // Measure how far the user's mouse is from the top of the scrollbar drag handle.
        var eventOffset = axis === 'y' ? e.pageY : e.pageX;
        this.axis[axis].dragOffset =
            eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);
        this.draggedAxis = axis;
        addClasses(this.el, this.classNames.dragging);
        elDocument.addEventListener('mousemove', this.drag, true);
        elDocument.addEventListener('mouseup', this.onEndDrag, true);
        if (this.removePreventClickId === null) {
            elDocument.addEventListener('click', this.preventClick, true);
            elDocument.addEventListener('dblclick', this.preventClick, true);
        }
        else {
            elWindow.clearTimeout(this.removePreventClickId);
            this.removePreventClickId = null;
        }
    };
    SimpleBarCore.prototype.onTrackClick = function (e, axis) {
        var _this = this;
        var _a, _b, _c, _d;
        if (axis === void 0) { axis = 'y'; }
        var currentAxis = this.axis[axis];
        if (!this.options.clickOnTrack ||
            !currentAxis.scrollbar.el ||
            !this.contentWrapperEl)
            return;
        // Preventing the event's default to trigger click underneath
        e.preventDefault();
        var elWindow = getElementWindow(this.el);
        this.axis[axis].scrollbar.rect =
            currentAxis.scrollbar.el.getBoundingClientRect();
        var scrollbar = this.axis[axis].scrollbar;
        var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
        var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : '0px', 10);
        var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        var t = axis === 'y'
            ? this.mouseY - scrollbarOffset
            : this.mouseX - scrollbarOffset;
        var dir = t < 0 ? -1 : 1;
        var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
        var speed = 40;
        var scrollTo = function () {
            if (!_this.contentWrapperEl)
                return;
            if (dir === -1) {
                if (scrolled > scrollSize) {
                    scrolled -= speed;
                    _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                    elWindow.requestAnimationFrame(scrollTo);
                }
            }
            else {
                if (scrolled < scrollSize) {
                    scrolled += speed;
                    _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                    elWindow.requestAnimationFrame(scrollTo);
                }
            }
        };
        scrollTo();
    };
    /**
     * Getter for content element
     */
    SimpleBarCore.prototype.getContentElement = function () {
        return this.contentEl;
    };
    /**
     * Getter for original scrolling element
     */
    SimpleBarCore.prototype.getScrollElement = function () {
        return this.contentWrapperEl;
    };
    SimpleBarCore.prototype.removeListeners = function () {
        var elWindow = getElementWindow(this.el);
        // Event listeners
        this.el.removeEventListener('mouseenter', this.onMouseEnter);
        this.el.removeEventListener('pointerdown', this.onPointerEvent, true);
        this.el.removeEventListener('mousemove', this.onMouseMove);
        this.el.removeEventListener('mouseleave', this.onMouseLeave);
        if (this.contentWrapperEl) {
            this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
        }
        elWindow.removeEventListener('resize', this.onWindowResize);
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        // Cancel all debounced functions
        this.onMouseMove.cancel();
        this.onWindowResize.cancel();
        this.onStopScrolling.cancel();
        this.onMouseEntered.cancel();
    };
    /**
     * Remove all listeners from DOM nodes
     */
    SimpleBarCore.prototype.unMount = function () {
        this.removeListeners();
    };
    /**
     * Check if mouse is within bounds
     */
    SimpleBarCore.prototype.isWithinBounds = function (bbox) {
        return (this.mouseX >= bbox.left &&
            this.mouseX <= bbox.left + bbox.width &&
            this.mouseY >= bbox.top &&
            this.mouseY <= bbox.top + bbox.height);
    };
    /**
     * Find element children matches query
     */
    SimpleBarCore.prototype.findChild = function (el, query) {
        var matches = el.matches ||
            el.webkitMatchesSelector ||
            el.mozMatchesSelector ||
            el.msMatchesSelector;
        return Array.prototype.filter.call(el.children, function (child) {
            return matches.call(child, query);
        })[0];
    };
    SimpleBarCore.rtlHelpers = null;
    SimpleBarCore.defaultOptions = {
        forceVisible: false,
        clickOnTrack: true,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: 'scrollable content',
        tabIndex: 0,
        classNames: {
            contentEl: 'simplebar-content',
            contentWrapper: 'simplebar-content-wrapper',
            offset: 'simplebar-offset',
            mask: 'simplebar-mask',
            wrapper: 'simplebar-wrapper',
            placeholder: 'simplebar-placeholder',
            scrollbar: 'simplebar-scrollbar',
            track: 'simplebar-track',
            heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
            heightAutoObserverEl: 'simplebar-height-auto-observer',
            visible: 'simplebar-visible',
            horizontal: 'simplebar-horizontal',
            vertical: 'simplebar-vertical',
            hover: 'simplebar-hover',
            dragging: 'simplebar-dragging',
            scrolling: 'simplebar-scrolling',
            scrollable: 'simplebar-scrollable',
            mouseEntered: 'simplebar-mouse-entered'
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: true
    };
    /**
     * Static functions
     */
    SimpleBarCore.getOptions = getOptions;
    SimpleBarCore.helpers = helpers;
    return SimpleBarCore;
}());


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/simplebar-react/dist/index.mjs
/**
 * simplebar-react - v3.3.2
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */




/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var simplebar_react_dist_assign = function() {
    simplebar_react_dist_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return simplebar_react_dist_assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var SimpleBar = react.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.scrollableNodeProps, scrollableNodeProps = _b === void 0 ? {} : _b, otherProps = __rest(_a, ["children", "scrollableNodeProps"]);
    var elRef = react.useRef();
    var scrollableNodeRef = react.useRef();
    var contentNodeRef = react.useRef();
    var options = {};
    var rest = {};
    Object.keys(otherProps).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(dist_SimpleBarCore.defaultOptions, key)) {
            options[key] = otherProps[key];
        }
        else {
            rest[key] = otherProps[key];
        }
    });
    var classNames = simplebar_react_dist_assign(simplebar_react_dist_assign({}, dist_SimpleBarCore.defaultOptions.classNames), options.classNames);
    var scrollableNodeFullProps = simplebar_react_dist_assign(simplebar_react_dist_assign({}, scrollableNodeProps), { className: "".concat(classNames.contentWrapper).concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : ''), tabIndex: options.tabIndex || dist_SimpleBarCore.defaultOptions.tabIndex, role: 'region', 'aria-label': options.ariaLabel || dist_SimpleBarCore.defaultOptions.ariaLabel });
    react.useEffect(function () {
        var instance;
        scrollableNodeRef.current = scrollableNodeFullProps.ref
            ? scrollableNodeFullProps.ref.current
            : scrollableNodeRef.current;
        if (elRef.current) {
            instance = new dist_SimpleBarCore(elRef.current, simplebar_react_dist_assign(simplebar_react_dist_assign(simplebar_react_dist_assign({}, options), (scrollableNodeRef.current && {
                scrollableNode: scrollableNodeRef.current
            })), (contentNodeRef.current && {
                contentNode: contentNodeRef.current
            })));
            if (typeof ref === 'function') {
                ref(instance);
            }
            else if (ref) {
                ref.current = instance;
            }
        }
        return function () {
            instance === null || instance === void 0 ? void 0 : instance.unMount();
            instance = null;
            if (typeof ref === 'function') {
                ref(null);
            }
        };
    }, []);
    return (react.createElement("div", simplebar_react_dist_assign({ "data-simplebar": "init", ref: elRef }, rest),
        react.createElement("div", { className: classNames.wrapper },
            react.createElement("div", { className: classNames.heightAutoObserverWrapperEl },
                react.createElement("div", { className: classNames.heightAutoObserverEl })),
            react.createElement("div", { className: classNames.mask },
                react.createElement("div", { className: classNames.offset }, typeof children === 'function' ? (children({
                    scrollableNodeRef: scrollableNodeRef,
                    scrollableNodeProps: simplebar_react_dist_assign(simplebar_react_dist_assign({}, scrollableNodeFullProps), { ref: scrollableNodeRef }),
                    contentNodeRef: contentNodeRef,
                    contentNodeProps: {
                        className: classNames.contentEl,
                        ref: contentNodeRef
                    }
                })) : (react.createElement("div", simplebar_react_dist_assign({}, scrollableNodeFullProps),
                    react.createElement("div", { className: classNames.contentEl }, children))))),
            react.createElement("div", { className: classNames.placeholder })),
        react.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.horizontal) },
            react.createElement("div", { className: classNames.scrollbar })),
        react.createElement("div", { className: "".concat(classNames.track, " ").concat(classNames.vertical) },
            react.createElement("div", { className: classNames.scrollbar }))));
});
SimpleBar.displayName = 'SimpleBar';



;// CONCATENATED MODULE: ./node_modules/@pdg/react-admin-layout/dist/index.esm.js
function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined{padding:5px 15px 4px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeLarge{padding:7px 21px 6px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeSmall{padding:3px 9px 2px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained{padding:6px 16px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeLarge{padding:8px 22px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeSmall{padding:4px 10px 3px}.MuiButtonBase-root.MuiButton-root.MuiButton-text{padding:6px 8px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeLarge{padding:8px 11px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeSmall{padding:4px 5px 3px}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,main,input,button,textarea,pre,select,a{font-family:\"Pretendard\",\"Apple Gothic\",\"Dotum\",sans-serif;margin:0;padding:0;border:0;vertical-align:top;box-sizing:border-box;word-break:keep-all;line-height:unset}*:before,*:after{box-sizing:border-box}");var index_esm_CardLayout = function CardLayout(t0) {
  var $ = c(5);
  var children = t0.children,
    t1 = t0.backgroundColor;
  var backgroundColor = t1 === undefined ? "#eff3f8" : t1;
  var t2;
  if ($[0] !== children) {
    t2 = /*#__PURE__*/React.createElement(Grid, null, children);
    $[0] = children;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var t3;
  if ($[2] !== backgroundColor || $[3] !== t2) {
    t3 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: backgroundColor,
      minHeight: "100vh"
    }, t2);
    $[2] = backgroundColor;
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
};function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toPrimitive(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}var _templateObject$4, _templateObject2$2;
var StyledExpandMore = (0,styled/* ["default"] */.A)(ExpandMore/* ["default"] */.A)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  margin-top: auto;\n  margin-bottom: auto;\n  @keyframes open {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes close {\n    0% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n"])));
var StyledListItemIcon = (0,styled/* ["default"] */.A)(ListItemIcon/* ["default"] */.A)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  min-width: 30px;\n"])));var index_esm_useChange = function useChange(value, callback, t0) {
  var skipFirst = t0 === undefined ? false : t0;
  var _React$useState = react.useState(skipFirst ? false : "|||||skip|||||first|||||"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    _value = _React$useState2[0],
    _setValue = _React$useState2[1];
  if (value !== _value) {
    _setValue(value);
    callback();
  }
};var _SideMenuListItem = function SideMenuListItem(t0) {
  var $ = (0,compiler_runtime.c)(48);
  var info = t0.info,
    badgeVariant = t0.badgeVariant,
    expandedBackgroundColor = t0.expandedBackgroundColor;
  var location = (0,hooks/* .useLocation */.zy)();
  var navigate = (0,hooks/* .useNavigate */.Zp)();
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpandable = _useState2[0],
    setIsExpandable = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isExpand = _useState4[0],
    setIsExpand = _useState4[1];
  var t1;
  if ($[0] !== info.items || $[1] !== location.pathname) {
    t1 = function t1() {
      setIsExpandable(!!info.items && info.items.length > 0);
      if (info.items && info.items.find(function (info_0) {
        return location.pathname === info_0.uri;
      })) {
        setIsExpand(true);
      }
    };
    $[0] = info.items;
    $[1] = location.pathname;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  index_esm_useChange(info, t1);
  var t2;
  if ($[3] !== info.items || $[4] !== info.uri || $[5] !== isExpand || $[6] !== isExpandable || $[7] !== location.pathname) {
    t2 = function t2() {
      if (isExpandable && isExpand != null) {
        if (info.uri !== location.pathname) {
          if (info.items && !info.items.find(function (info_1) {
            return location.pathname === info_1.uri;
          })) {
            if (isExpand) {
              setIsExpand(false);
            }
          }
        }
      }
      if (isExpandable && !isExpand) {
        if (info.items && info.items.find(function (info_2) {
          return location.pathname === info_2.uri;
        })) {
          setIsExpand(true);
        }
      }
    };
    $[3] = info.items;
    $[4] = info.uri;
    $[5] = isExpand;
    $[6] = isExpandable;
    $[7] = location.pathname;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  index_esm_useChange(location.pathname, t2);
  var t3;
  if ($[9] !== info.uri || $[10] !== isExpandable || $[11] !== navigate) {
    t3 = isExpandable ? function () {
      return setIsExpand(_temp$3);
    } : function () {
      return info.uri && navigate(info.uri);
    };
    $[9] = info.uri;
    $[10] = isExpandable;
    $[11] = navigate;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  var t4 = isExpandable ? false : info.uri === location.pathname;
  var t5 = isExpandable && isExpand ? expandedBackgroundColor : undefined;
  var t6;
  if ($[13] !== t5) {
    t6 = {
      backgroundColor: t5
    };
    $[13] = t5;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  var t7;
  if ($[15] !== info.icon) {
    t7 = info.icon && /*#__PURE__*/react.createElement(Icon/* ["default"] */.A, {
      fontSize: "small"
    }, info.icon);
    $[15] = info.icon;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  var t8;
  if ($[17] !== t7) {
    t8 = /*#__PURE__*/react.createElement(StyledListItemIcon, null, t7);
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  var t9 = info.depth === 1 ? 600 : undefined;
  var t10;
  if ($[19] !== t9) {
    t10 = {
      primary: {
        style: {
          fontWeight: t9
        }
      }
    };
    $[19] = t9;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  var t11;
  if ($[21] !== badgeVariant || $[22] !== info.badge || $[23] !== info.badgeVariant || $[24] !== info.name) {
    t11 = info.badge ? /*#__PURE__*/react.createElement(Badge/* ["default"] */.A, {
      badgeContent: info.badge,
      color: "error",
      variant: badgeVariant !== undefined ? badgeVariant : info.badgeVariant,
      anchorOrigin: {
        horizontal: "left",
        vertical: "top"
      },
      slotProps: {
        badge: {
          style: {
            left: "100%",
            top: "50%",
            transform: "scale(.8) translate(10px, -50%)"
          }
        }
      }
    }, /*#__PURE__*/react.createElement("div", null, info.name)) : info.name;
    $[21] = badgeVariant;
    $[22] = info.badge;
    $[23] = info.badgeVariant;
    $[24] = info.name;
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  var t12;
  if ($[26] !== t10 || $[27] !== t11) {
    t12 = /*#__PURE__*/react.createElement(ListItemText/* ["default"] */.A, {
      slotProps: t10
    }, t11);
    $[26] = t10;
    $[27] = t11;
    $[28] = t12;
  } else {
    t12 = $[28];
  }
  var t13;
  if ($[29] !== isExpand || $[30] !== isExpandable) {
    t13 = isExpandable && /*#__PURE__*/react.createElement(StyledExpandMore, {
      sx: {
        animation: "".concat(isExpand ? "open" : "close", " 0.1s linear"),
        transform: "rotate(".concat(isExpand ? 180 : 0, "deg)")
      }
    });
    $[29] = isExpand;
    $[30] = isExpandable;
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  var t14;
  if ($[32] !== t12 || $[33] !== t13 || $[34] !== t3 || $[35] !== t4 || $[36] !== t6 || $[37] !== t8) {
    t14 = /*#__PURE__*/react.createElement(ListItemButton/* ["default"] */.A, {
      onClick: t3,
      selected: t4,
      style: t6
    }, t8, t12, t13);
    $[32] = t12;
    $[33] = t13;
    $[34] = t3;
    $[35] = t4;
    $[36] = t6;
    $[37] = t8;
    $[38] = t14;
  } else {
    t14 = $[38];
  }
  var t15;
  if ($[39] !== badgeVariant || $[40] !== expandedBackgroundColor || $[41] !== info.items || $[42] !== isExpand || $[43] !== isExpandable) {
    t15 = isExpandable && /*#__PURE__*/react.createElement(Collapse/* ["default"] */.A, {
      "in": isExpand,
      style: {
        backgroundColor: isExpand ? expandedBackgroundColor : undefined
      }
    }, info.items && info.items.map(function (subInfo, idx) {
      return /*#__PURE__*/react.createElement(_SideMenuListItem, {
        key: idx,
        badgeVariant: badgeVariant,
        info: subInfo
      });
    }));
    $[39] = badgeVariant;
    $[40] = expandedBackgroundColor;
    $[41] = info.items;
    $[42] = isExpand;
    $[43] = isExpandable;
    $[44] = t15;
  } else {
    t15 = $[44];
  }
  var t16;
  if ($[45] !== t14 || $[46] !== t15) {
    t16 = /*#__PURE__*/react.createElement(react.Fragment, null, t14, t15);
    $[45] = t14;
    $[46] = t15;
    $[47] = t16;
  } else {
    t16 = $[47];
  }
  return t16;
};
function _temp$3(old) {
  return !old;
}var _templateObject$3;
var StyledList = (0,styled/* ["default"] */.A)(List/* ["default"] */.A)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  padding: 0;\n"])));var index_esm_SideMenuList = function SideMenuList(t0) {
  var $ = (0,compiler_runtime.c)(15);
  var list = t0.list,
    badgeVariant = t0.badgeVariant;
  var theme = (0,useTheme/* ["default"] */.A)();
  var T0;
  var t1;
  if ($[0] !== badgeVariant || $[1] !== list || $[2] !== theme.palette.action.selectedOpacity || $[3] !== theme.palette.primary.main) {
    var finalList = list.map(_temp2$2);
    var _t = theme.palette.action.selectedOpacity / 2;
    var t3;
    if ($[6] !== _t || $[7] !== theme.palette.primary.main) {
      t3 = (0,colorManipulator/* .alpha */.X4)(theme.palette.primary.main, _t);
      $[6] = _t;
      $[7] = theme.palette.primary.main;
      $[8] = t3;
    } else {
      t3 = $[8];
    }
    var expandedBackgroundColor = t3;
    T0 = StyledList;
    var t4;
    if ($[9] !== badgeVariant || $[10] !== expandedBackgroundColor) {
      t4 = function t4(info, idx_0) {
        return /*#__PURE__*/react.createElement(_SideMenuListItem, {
          key: idx_0,
          info: info,
          badgeVariant: badgeVariant,
          expandedBackgroundColor: expandedBackgroundColor
        });
      };
      $[9] = badgeVariant;
      $[10] = expandedBackgroundColor;
      $[11] = t4;
    } else {
      t4 = $[11];
    }
    t1 = finalList.map(t4);
    $[0] = badgeVariant;
    $[1] = list;
    $[2] = theme.palette.action.selectedOpacity;
    $[3] = theme.palette.primary.main;
    $[4] = T0;
    $[5] = t1;
  } else {
    T0 = $[4];
    t1 = $[5];
  }
  var t2;
  if ($[12] !== T0 || $[13] !== t1) {
    t2 = /*#__PURE__*/react.createElement(T0, null, t1);
    $[12] = T0;
    $[13] = t1;
    $[14] = t2;
  } else {
    t2 = $[14];
  }
  return t2;
};
function _temp$2(letter, idx) {
  return "".concat(idx > 0 ? "_" : "").concat(letter.toLowerCase());
}
function _temp2$2(item) {
  return _objectSpread2(_objectSpread2({}, item), {}, {
    icon: item.icon ? item.icon.replace(/[A-Z]/g, _temp$2) : undefined
  });
}var _templateObject$2;
var StyledSimpleBar = (0,styled/* ["default"] */.A)(SimpleBar)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  max-height: 100%;\n"])));
var StyledLogoContainerBox = (0,styled/* ["default"] */.A)(Box/* ["default"] */.A)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    borderBottom: 'thin solid #f5f5f5',
    color: 'text.primary'
  });
});var index_esm_SideMenu = function SideMenu(t0) {
  var $ = (0,compiler_runtime.c)(8);
  var logo = t0.logo,
    badgeVariant = t0.badgeVariant,
    list = t0.list;
  var t1;
  if ($[0] !== logo) {
    t1 = /*#__PURE__*/react.createElement(StyledLogoContainerBox, null, /*#__PURE__*/react.createElement(Toolbar/* ["default"] */.A, null, logo));
    $[0] = logo;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] !== badgeVariant || $[3] !== list) {
    t2 = list && /*#__PURE__*/react.createElement(index_esm_SideMenuList, {
      badgeVariant: badgeVariant,
      list: list
    });
    $[2] = badgeVariant;
    $[3] = list;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  var t3;
  if ($[5] !== t1 || $[6] !== t2) {
    t3 = /*#__PURE__*/react.createElement(StyledSimpleBar, null, t1, t2);
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
};var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var StyledContainerBox$1 = (0,styled/* ["default"] */.A)(Box/* ["default"] */.A)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var StyledHeadContainerBox = (0,styled/* ["default"] */.A)(Box/* ["default"] */.A)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    display: {
      xs: 'none',
      sm: 'flex'
    },
    alignItems: 'center',
    opacity: 0.5
  });
});
var StyledHeadIconContainerBox = (0,styled/* ["default"] */.A)(Box/* ["default"] */.A)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  margin-right: 0.25rem;\n  line-height: 0;\n"])));
var StyledHeadIcon = (0,styled/* ["default"] */.A)(Icon/* ["default"] */.A)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n"])));
var StyledHeadTitleTypography = (0,styled/* ["default"] */.A)(Typography/* ["default"] */.A)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 0.7rem;\n"])));
var StyledTitleContainerDiv = (0,styled/* ["default"] */.A)('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"])));
var StyledTitleIconContainerDiv = (0,styled/* ["default"] */.A)('div')(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"])));var index_esm_Title = function Title(t0) {
  var $ = (0,compiler_runtime.c)(17);
  var title = t0.title,
    icon = t0.icon,
    headTitle = t0.headTitle,
    headIcon = t0.headIcon;
  var t1;
  if ($[0] !== headIcon) {
    t1 = headIcon ? headIcon.replace(/[A-Z]/g, _temp$1) : undefined;
    $[0] = headIcon;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var finalHeadIcon = t1;
  var t2;
  if ($[2] !== icon) {
    t2 = icon ? icon.replace(/[A-Z]/g, _temp2$1) : undefined;
    $[2] = icon;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var finalIcon = t2;
  var t3;
  if ($[4] !== finalHeadIcon || $[5] !== headTitle) {
    t3 = headTitle && /*#__PURE__*/react.createElement(StyledHeadContainerBox, null, finalHeadIcon && /*#__PURE__*/react.createElement(StyledHeadIconContainerBox, null, /*#__PURE__*/react.createElement(StyledHeadIcon, null, finalHeadIcon)), /*#__PURE__*/react.createElement(StyledHeadTitleTypography, null, headTitle));
    $[4] = finalHeadIcon;
    $[5] = headTitle;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var t4;
  if ($[7] !== finalIcon) {
    t4 = finalIcon && /*#__PURE__*/react.createElement(StyledTitleIconContainerDiv, null, /*#__PURE__*/react.createElement(Icon/* ["default"] */.A, {
      fontSize: "small"
    }, finalIcon));
    $[7] = finalIcon;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  var t5;
  if ($[9] !== title) {
    t5 = /*#__PURE__*/react.createElement("div", null, title);
    $[9] = title;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  var t6;
  if ($[11] !== t4 || $[12] !== t5) {
    t6 = /*#__PURE__*/react.createElement(StyledTitleContainerDiv, null, t4, t5);
    $[11] = t4;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  var t7;
  if ($[14] !== t3 || $[15] !== t6) {
    t7 = /*#__PURE__*/react.createElement(StyledContainerBox$1, null, t3, t6);
    $[14] = t3;
    $[15] = t6;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  return t7;
};
function _temp$1(letter, idx) {
  return "".concat(idx > 0 ? "_" : "").concat(letter.toLowerCase());
}
function _temp2$1(letter_0, idx_0) {
  return "".concat(idx_0 > 0 ? "_" : "").concat(letter_0.toLowerCase());
}var _templateObject, _templateObject2;
var SIDE_MENU_WIDTH = 220;
var SCREENS = ['xs', 'sm', 'md', 'lg', 'xl'];
var index_esm_getNextScreen = function _getNextScreen(screen) {
  if (screen === 'xs') return 'sm';else if (screen === 'sm') return 'md';else if (screen === 'md') return 'lg';else return 'xl';
};
var index_esm_DefaultLayout = function DefaultLayout(t0) {
  var $ = (0,compiler_runtime.c)(67);
  var children = t0.children,
    logo = t0.logo,
    badgeVariant = t0.badgeVariant,
    menu = t0.menu,
    t1 = t0.menuHideScreen,
    appBarControl = t0.appBarControl;
  var menuHideScreen = t1 === undefined ? "sm" : t1;
  var location = (0,hooks/* .useLocation */.zy)();
  var getMenuTitles = _temp;
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobileOpen = _useState2[0],
    setIsMobileOpen = _useState2[1];
  var t2;
  if ($[0] !== menu) {
    t2 = getMenuTitles(menu);
    $[0] = menu;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var _useState3 = (0,react.useState)(t2),
    _useState4 = _slicedToArray(_useState3, 2),
    menuTitles_0 = _useState4[0],
    setMenuTitles = _useState4[1];
  var t3;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3() {
      return setIsMobileOpen(false);
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  index_esm_useChange(location.pathname, t3, true);
  var t4;
  if ($[3] !== menu) {
    t4 = function t4() {
      return setMenuTitles(getMenuTitles(menu));
    };
    $[3] = menu;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  index_esm_useChange(menu, t4, true);
  var t5;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      setIsMobileOpen(_temp2);
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var toggleIsMobileOpen = t5;
  var t6;
  if ($[6] !== menuHideScreen) {
    t6 = SCREENS.reduce(function (acc, screen) {
      if (screen === menuHideScreen) {
        acc.found = true;
        acc.display[screen] = "block";
      } else {
        acc.display[screen] = acc.found ? "none" : "block";
      }
      return acc;
    }, {
      found: false,
      display: {}
    });
    $[6] = menuHideScreen;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var t7;
  if ($[8] !== t6.display) {
    t7 = {
      display: t6.display
    };
    $[8] = t6.display;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  var sideMenuTemporaryDrawerSx = t7;
  var t8;
  if ($[10] !== menuHideScreen) {
    t8 = SCREENS.reduce(function (acc_0, screen_0) {
      if (screen_0 === menuHideScreen) {
        acc_0.found = true;
        acc_0.display[screen_0] = "none";
      } else {
        acc_0.display[screen_0] = acc_0.found ? "block" : "none";
      }
      return acc_0;
    }, {
      found: false,
      display: {}
    });
    $[10] = menuHideScreen;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  var t9;
  if ($[12] !== t8.display) {
    t9 = {
      display: t8.display
    };
    $[12] = t8.display;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  var sideMenuPermanentDrawerSx = t9;
  var nextMenuScreen = index_esm_getNextScreen(menuHideScreen);
  var t10;
  if ($[14] !== nextMenuScreen) {
    t10 = {
      width: _defineProperty({}, nextMenuScreen, "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)")),
      ml: _defineProperty({}, nextMenuScreen, "".concat(SIDE_MENU_WIDTH, "px"))
    };
    $[14] = nextMenuScreen;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  var appBarSx = t10;
  var t11;
  if ($[16] !== nextMenuScreen) {
    t11 = {
      mr: 2,
      display: _defineProperty({}, nextMenuScreen, "none")
    };
    $[16] = nextMenuScreen;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  var appBarIconButtonSx = t11;
  var t12;
  if ($[18] !== nextMenuScreen) {
    t12 = {
      width: _defineProperty({}, nextMenuScreen, SIDE_MENU_WIDTH),
      flexShrink: _defineProperty({}, nextMenuScreen, 0)
    };
    $[18] = nextMenuScreen;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  var sideMenuContainerBoxSx = t12;
  var t13;
  if ($[20] !== nextMenuScreen) {
    t13 = {
      width: _defineProperty({}, nextMenuScreen, "calc(100% - ".concat(SIDE_MENU_WIDTH, "px)")),
      flexGrow: 1,
      p: 2,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    };
    $[20] = nextMenuScreen;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  var mainBoxSx = t13;
  var titleData = menuTitles_0[location.pathname];
  var t14;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = /*#__PURE__*/react.createElement(Menu/* ["default"] */.A, null);
    $[22] = t14;
  } else {
    t14 = $[22];
  }
  var t15;
  if ($[23] !== appBarIconButtonSx) {
    t15 = /*#__PURE__*/react.createElement(IconButton/* ["default"] */.A, {
      color: "inherit",
      "aria-label": "open drawer",
      edge: "start",
      onClick: toggleIsMobileOpen,
      sx: appBarIconButtonSx
    }, t14);
    $[23] = appBarIconButtonSx;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  var t16;
  if ($[25] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = {
      flexGrow: 1
    };
    $[25] = t16;
  } else {
    t16 = $[25];
  }
  var t17;
  if ($[26] !== titleData) {
    t17 = titleData && /*#__PURE__*/react.createElement(index_esm_Title, {
      title: titleData.name,
      icon: titleData.icon,
      headTitle: titleData.parentName,
      headIcon: titleData.parentIcon
    });
    $[26] = titleData;
    $[27] = t17;
  } else {
    t17 = $[27];
  }
  var t18;
  if ($[28] !== t17) {
    t18 = /*#__PURE__*/react.createElement(Typography/* ["default"] */.A, {
      variant: "h6",
      noWrap: true,
      component: "div",
      sx: t16
    }, t17);
    $[28] = t17;
    $[29] = t18;
  } else {
    t18 = $[29];
  }
  var t19;
  if ($[30] !== appBarControl || $[31] !== t15 || $[32] !== t18) {
    t19 = /*#__PURE__*/react.createElement(Toolbar/* ["default"] */.A, null, t15, t18, appBarControl);
    $[30] = appBarControl;
    $[31] = t15;
    $[32] = t18;
    $[33] = t19;
  } else {
    t19 = $[33];
  }
  var t20;
  if ($[34] !== appBarSx || $[35] !== t19) {
    t20 = /*#__PURE__*/react.createElement(StyledAppBar, {
      position: "fixed",
      elevation: 0,
      sx: appBarSx
    }, t19);
    $[34] = appBarSx;
    $[35] = t19;
    $[36] = t20;
  } else {
    t20 = $[36];
  }
  var t21;
  if ($[37] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = {
      keepMounted: true
    };
    $[37] = t21;
  } else {
    t21 = $[37];
  }
  var t22;
  if ($[38] !== badgeVariant || $[39] !== logo || $[40] !== menu) {
    t22 = menu && /*#__PURE__*/react.createElement(index_esm_SideMenu, {
      logo: logo,
      badgeVariant: badgeVariant,
      list: menu
    });
    $[38] = badgeVariant;
    $[39] = logo;
    $[40] = menu;
    $[41] = t22;
  } else {
    t22 = $[41];
  }
  var t23;
  if ($[42] !== isMobileOpen || $[43] !== sideMenuTemporaryDrawerSx || $[44] !== t22) {
    t23 = /*#__PURE__*/react.createElement(StyledSideMenuTemporaryDrawer, {
      variant: "temporary",
      open: isMobileOpen,
      onClose: toggleIsMobileOpen,
      sx: sideMenuTemporaryDrawerSx,
      ModalProps: t21
    }, t22);
    $[42] = isMobileOpen;
    $[43] = sideMenuTemporaryDrawerSx;
    $[44] = t22;
    $[45] = t23;
  } else {
    t23 = $[45];
  }
  var t24;
  if ($[46] !== badgeVariant || $[47] !== logo || $[48] !== menu) {
    t24 = menu && /*#__PURE__*/react.createElement(index_esm_SideMenu, {
      logo: logo,
      badgeVariant: badgeVariant,
      list: menu
    });
    $[46] = badgeVariant;
    $[47] = logo;
    $[48] = menu;
    $[49] = t24;
  } else {
    t24 = $[49];
  }
  var t25;
  if ($[50] !== sideMenuPermanentDrawerSx || $[51] !== t24) {
    t25 = /*#__PURE__*/react.createElement(StyledSideMenuPermanentDrawer, {
      variant: "permanent",
      open: true,
      sx: sideMenuPermanentDrawerSx
    }, t24);
    $[50] = sideMenuPermanentDrawerSx;
    $[51] = t24;
    $[52] = t25;
  } else {
    t25 = $[52];
  }
  var t26;
  if ($[53] !== sideMenuContainerBoxSx || $[54] !== t23 || $[55] !== t25) {
    t26 = /*#__PURE__*/react.createElement(Box/* ["default"] */.A, {
      component: "nav",
      "aria-label": "mailbox folders",
      sx: sideMenuContainerBoxSx
    }, t23, t25);
    $[53] = sideMenuContainerBoxSx;
    $[54] = t23;
    $[55] = t25;
    $[56] = t26;
  } else {
    t26 = $[56];
  }
  var t27;
  if ($[57] === Symbol["for"]("react.memo_cache_sentinel")) {
    t27 = /*#__PURE__*/react.createElement(Toolbar/* ["default"] */.A, null);
    $[57] = t27;
  } else {
    t27 = $[57];
  }
  var t28;
  if ($[58] !== children) {
    t28 = /*#__PURE__*/react.createElement(StyledMainContentDiv, null, children);
    $[58] = children;
    $[59] = t28;
  } else {
    t28 = $[59];
  }
  var t29;
  if ($[60] !== mainBoxSx || $[61] !== t28) {
    t29 = /*#__PURE__*/react.createElement(Box/* ["default"] */.A, {
      component: "main",
      sx: mainBoxSx
    }, t27, t28);
    $[60] = mainBoxSx;
    $[61] = t28;
    $[62] = t29;
  } else {
    t29 = $[62];
  }
  var t30;
  if ($[63] !== t20 || $[64] !== t26 || $[65] !== t29) {
    t30 = /*#__PURE__*/react.createElement(StyledContainerBox, null, t20, t26, t29);
    $[63] = t20;
    $[64] = t26;
    $[65] = t29;
    $[66] = t30;
  } else {
    t30 = $[66];
  }
  return t30;
};

/********************************************************************************************************************
 * Types
 * ******************************************************************************************************************/

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

var StyledContainerBox = (0,styled/* ["default"] */.A)(Box/* ["default"] */.A)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));
var StyledAppBar = (0,styled/* ["default"] */.A)(AppBar/* ["default"] */.A)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'text.primary',
    borderBottom: 'thin solid #f5f5f5'
  });
});
var StyledSideMenuTemporaryDrawer = (0,styled/* ["default"] */.A)(Drawer/* ["default"] */.Ay)(function (_ref2) {
  var theme = _ref2.theme;
  return theme.unstable_sx({
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: SIDE_MENU_WIDTH
    }
  });
});
var StyledSideMenuPermanentDrawer = (0,styled/* ["default"] */.A)(Drawer/* ["default"] */.Ay)(function (_ref3) {
  var theme = _ref3.theme;
  return theme.unstable_sx({
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: SIDE_MENU_WIDTH
    }
  });
});
var StyledMainContentDiv = (0,styled/* ["default"] */.A)('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
function _temp(m) {
  var menuTitles = {};
  if (m) {
    m.forEach(function (info) {
      if ((info.uri == null || info.uri === "") && info.items && info.items.length > 0) {
        info.items.map(function (subInfo) {
          menuTitles[subInfo.uri] = {
            name: subInfo.name,
            parentName: info.name,
            parentIcon: info.icon
          };
        });
      } else {
        if (info.uri) {
          menuTitles[info.uri] = {
            name: info.name,
            icon: info.icon
          };
        }
      }
    });
  }
  return menuTitles;
}
function _temp2(isMobileOpen_0) {
  return !isMobileOpen_0;
}
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(8868);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/ThemeProvider.js + 13 modules
var ThemeProvider = __webpack_require__(5930);
;// CONCATENATED MODULE: ./src/layout/DefaultLayout/menu.json
var menu_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"Home","name":"Home","depth":1,"uri":"/","icon":"Home"}]')
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/createTheme.js + 24 modules
var createTheme = __webpack_require__(1124);
;// CONCATENATED MODULE: ./src/layout/DefaultLayout/LinkBehavior.tsx
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



const LinkBehavior = t0 => {
  const $ = (0,compiler_runtime.c)(6);
  let href;
  let props;
  if ($[0] !== t0) {
    ({
      href,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = href;
    $[2] = props;
  } else {
    href = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== href || $[4] !== props) {
    t1 = /*#__PURE__*/react.createElement(lib/* .Link */.N_, _extends({
      "data-testid": "custom-link",
      to: href
    }, props));
    $[3] = href;
    $[4] = props;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  return t1;
};
/* export default */ const DefaultLayout_LinkBehavior = (LinkBehavior);
;// CONCATENATED MODULE: ./src/layout/DefaultLayout/DefaultLayout.types.ts


const DefaultLayout_types_theme = (0,createTheme/* ["default"] */.A)({
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    fontSize: 12,
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: DefaultLayout_LinkBehavior
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'outlined'
      }
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: DefaultLayout_LinkBehavior
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 16
          }
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ../src/changed/useChanged.ts

const useChanged = (callback, deps) => {
  const [prevValues, setPrevValues] = (0,react.useState)();
  let changed = false;
  if (prevValues === undefined) {
    changed = true;
    setPrevValues(deps);
  } else {
    if (deps !== prevValues) {
      if (deps.length !== prevValues.length || deps.some((v, i) => v !== prevValues[i])) {
        changed = true;
      }
      setPrevValues(deps);
    }
  }
  if (changed) {
    callback();
  }
};
;// CONCATENATED MODULE: ../src/changed/useFirstSkipChanged.ts

const useFirstSkipChanged = (callback, deps) => {
  const [prevDeps, setPrevDeps] = (0,react.useState)(deps);
  const [isFirst, setIsFirst] = (0,react.useState)(true);
  if (isFirst) {
    setIsFirst(false);
    return true;
  }
  let changed = false;
  if (deps !== prevDeps) {
    if (deps.length !== prevDeps.length || deps.some((v, i) => v !== prevDeps[i])) {
      changed = true;
    }
    setPrevDeps(deps);
  }
  if (changed) {
    callback();
  }
};
;// CONCATENATED MODULE: ../src/changed/index.ts


;// CONCATENATED MODULE: ../src/effect/useEventEffect.ts


const useEventEffect_useEventEffect = (effectEventCallback, deps) => {
  const $ = (0,compiler_runtime.c)(2);
  const effectEvent = (0,react.useEffectEvent)(effectEventCallback);
  let t0;
  if ($[0] !== effectEvent) {
    t0 = () => effectEvent();
    $[0] = effectEvent;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  (0,react.useEffect)(t0, deps);
};
;// CONCATENATED MODULE: ../src/effect/useEventLayoutEffect.ts


const useEventLayoutEffect = (effectEventCallback, deps) => {
  const $ = _c(2);
  const effectEvent = useEffectEvent(effectEventCallback);
  let t0;
  if ($[0] !== effectEvent) {
    t0 = () => effectEvent();
    $[0] = effectEvent;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  useLayoutEffect(t0, deps);
};
;// CONCATENATED MODULE: ../src/effect/useFirstSkipEffect.ts


const useFirstSkipEffect = (effectEventCallback, deps) => {
  const $ = _c(2);
  const effectEvent = useEffectEvent(effectEventCallback);
  const firstSkipRef = useRef(true);
  let t0;
  if ($[0] !== effectEvent) {
    t0 = () => {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        return effectEvent();
      }
    };
    $[0] = effectEvent;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  useEffect(t0, deps);
};
;// CONCATENATED MODULE: ../src/effect/useFirstSkipLayoutEffect.ts


const useFirstSkipLayoutEffect = (effectEventCallback, deps) => {
  const $ = _c(2);
  const effectEvent = useEffectEvent(effectEventCallback);
  const firstSkipRef = useRef(true);
  let t0;
  if ($[0] !== effectEvent) {
    t0 = () => {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        return effectEvent();
      }
    };
    $[0] = effectEvent;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  useLayoutEffect(t0, deps);
};
;// CONCATENATED MODULE: ../src/effect/index.ts




;// CONCATENATED MODULE: ../src/mount/useMounted.ts



function useMounted(t0) {
  const $ = _c(1);
  const initialValue = t0 === undefined ? true : t0;
  const [isMounted, setIsMounted] = useState(initialValue);
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      setIsMounted(true);
      return () => {
        setIsMounted(false);
      };
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useEventEffect(t1);
  return isMounted;
}
;// CONCATENATED MODULE: ../src/mount/useMountedRef.ts


function useMountedRef(t0) {
  const $ = _c(2);
  const initialValue = t0 === undefined ? true : t0;
  const isMountedRef = useRef(initialValue);
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      isMountedRef.current = true;
      return () => {
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
}
;// CONCATENATED MODULE: ../src/mount/index.ts


;// CONCATENATED MODULE: ../src/ref/useAutoUpdateRef.ts


function useAutoUpdateRef_useAutoUpdateRef(value) {
  const $ = _c(3);
  const valueRef = useRef(value);
  let t0;
  let t1;
  if ($[0] !== value) {
    t0 = () => {
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
}
;// CONCATENATED MODULE: ../src/ref/index.ts

;// CONCATENATED MODULE: ../src/timeoutInterval/clearIntervalRef.ts
function clearIntervalRef(ref) {
  if (ref.current) {
    clearInterval(ref.current);
    ref.current = undefined;
  }
}
;// CONCATENATED MODULE: ../src/timeoutInterval/useIntervalRef.ts



function useIntervalRef() {
  const $ = (0,compiler_runtime.c)(3);
  const ref = (0,react.useRef)(undefined);
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => () => {
      clearIntervalRef(ref);
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  (0,react.useEffect)(t0, t1);
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    const setIntervalFunc = (callback, ms) => {
      clearIntervalRef(ref);
      ref.current = setInterval(() => {
        callback(ref);
      }, ms);
    };
    t2 = [ref, setIntervalFunc];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
;// CONCATENATED MODULE: ../src/timeoutInterval/useTimeoutRef.ts



function useTimeoutRef() {
  const $ = _c(3);
  const ref = useRef(undefined);
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => () => {
      clearTimeoutRef(ref);
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  useEffect(t0, t1);
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    const setTimeoutFunc = (callback, ms) => {
      clearTimeoutRef(ref);
      ref.current = setTimeout(() => {
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
}
;// CONCATENATED MODULE: ../src/timeoutInterval/index.ts




;// CONCATENATED MODULE: ../src/forwardRef/useForewardRef.ts



function useForwardRef(ref, value, onSet, onUnset) {
  const $ = _c(8);
  const onSetRef = useAutoUpdateRef(onSet);
  const onUnsetRef = useAutoUpdateRef(onUnset);
  let t0;
  let t1;
  if ($[0] !== value) {
    t0 = () => value;
    t1 = [value];
    $[0] = value;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useImperativeHandle(ref, t0, t1);
  let t2;
  let t3;
  if ($[3] !== onSetRef || $[4] !== onUnsetRef || $[5] !== value) {
    t2 = () => {
      onSetRef.current?.(value);
      return () => {
        onUnsetRef.current?.();
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
}
;// CONCATENATED MODULE: ../src/forwardRef/index.ts

;// CONCATENATED MODULE: ../src/index.ts






;// CONCATENATED MODULE: ./src/component/Home/Home.tsx



const Home_Home = () => {
  const $ = (0,compiler_runtime.c)(24);
  const [, setUpdateInterval] = useIntervalRef();
  const [value1, setValue1] = (0,react.useState)(0);
  const [value2, setValue2] = (0,react.useState)(0);
  const [value3, setValue3] = (0,react.useState)(0);
  let t0;
  let t1;
  if ($[0] !== value1) {
    t0 = () => {
      setValue2(value1 * 2);
    };
    t1 = [value1];
    $[0] = value1;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useFirstSkipChanged(t0, t1);
  let t2;
  let t3;
  if ($[3] !== value2) {
    t2 = () => {
      setValue3(value2 * 2);
    };
    t3 = [value2];
    $[3] = value2;
    $[4] = t2;
    $[5] = t3;
  } else {
    t2 = $[4];
    t3 = $[5];
  }
  useChanged(t2, t3);
  let t4;
  let t5;
  if ($[6] !== value1 || $[7] !== value2 || $[8] !== value3) {
    t4 = () => {
      (
  (message, ...args) => {
    
  }
)({
        value1,
        value2,
        value3
      });
    };
    t5 = [value1, value2, value3];
    $[6] = value1;
    $[7] = value2;
    $[8] = value3;
    $[9] = t4;
    $[10] = t5;
  } else {
    t4 = $[9];
    t5 = $[10];
  }
  useEventEffect_useEventEffect(t4, t5);
  let t6;
  let t7;
  if ($[11] !== setUpdateInterval) {
    t6 = () => {
      setUpdateInterval(() => {
        setValue1(Home_temp);
      }, 1000);
    };
    t7 = [setUpdateInterval];
    $[11] = setUpdateInterval;
    $[12] = t6;
    $[13] = t7;
  } else {
    t6 = $[12];
    t7 = $[13];
  }
  (0,react.useEffect)(t6, t7);
  let t8;
  if ($[14] !== value1) {
    t8 = /*#__PURE__*/react.createElement("div", null, "value1 : ", value1);
    $[14] = value1;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] !== value2) {
    t9 = /*#__PURE__*/react.createElement("div", null, "value2 : ", value2);
    $[16] = value2;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  let t10;
  if ($[18] !== value3) {
    t10 = /*#__PURE__*/react.createElement("div", null, "value3 : ", value3);
    $[18] = value3;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] !== t10 || $[21] !== t8 || $[22] !== t9) {
    t11 = /*#__PURE__*/react.createElement("div", null, t8, t9, t10);
    $[20] = t10;
    $[21] = t8;
    $[22] = t9;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  return t11;
};
/* export default */ const component_Home_Home = (Home_Home);
function Home_temp(prev) {
  return prev + 1;
}
;// CONCATENATED MODULE: ./src/component/Home/index.ts

/* export default */ const component_Home = ((/* unused pure expression or super */ null && (Home)));


;// CONCATENATED MODULE: ./src/component/index.ts

;// CONCATENATED MODULE: ./src/router/index.tsx




const RootRoutes = () => {
  const $ = (0,compiler_runtime.c)(4);
  const rootPath = {"mode":"production","isDevelopment":false,"isProduction":true,"name":"react-hook"}.isProduction ? `/${{"mode":"production","isDevelopment":false,"isProduction":true,"name":"react-hook"}.name}/` : "/";
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/react.createElement(components/* .Route */.qh, {
      path: "/",
      element: /*#__PURE__*/react.createElement(component_Home_Home, null)
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/react.createElement(react.Fragment, null, t0, /*#__PURE__*/react.createElement(components/* .Route */.qh, {
      path: "*",
      element: /*#__PURE__*/react.createElement(components/* .Navigate */.C5, {
        to: rootPath
      })
    }));
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const basicRoutes = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/react.createElement(components/* .Route */.qh, {
      path: `${rootPath}*`,
      element: /*#__PURE__*/react.createElement(components/* .Routes */.BV, null, basicRoutes)
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/react.createElement(components/* .Routes */.BV, null, t2, /*#__PURE__*/react.createElement(components/* .Route */.qh, {
      path: "*",
      element: /*#__PURE__*/react.createElement(components/* .Navigate */.C5, {
        to: rootPath
      })
    }));
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};
/* export default */ const router = (RootRoutes);
;// CONCATENATED MODULE: ./src/layout/DefaultLayout/DefaultLayout.tsx







const DefaultLayout_menu = menu_namespaceObject.map(info => ({
  ...info,
  uri: !info.uri ? info.uri : {"mode":"production","isDevelopment":false,"isProduction":true,"name":"react-hook"}.isProduction ? `/${{"mode":"production","isDevelopment":false,"isProduction":true,"name":"react-hook"}.name}${info.uri}` : info.uri
}));
const DefaultLayout_DefaultLayout = () => {
  const $ = (0,compiler_runtime.c)(2);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/react.createElement(CssBaseline/* ["default"] */.Ay, null);
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/react.createElement(ThemeProvider/* ["default"] */.A, {
      theme: DefaultLayout_types_theme
    }, t0, /*#__PURE__*/react.createElement(index_esm_DefaultLayout, {
      logo: "react-hook",
      menu: DefaultLayout_menu
    }, /*#__PURE__*/react.createElement(router, null)));
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
};
/* export default */ const layout_DefaultLayout_DefaultLayout = (DefaultLayout_DefaultLayout);
;// CONCATENATED MODULE: ./src/layout/DefaultLayout/index.ts

/* export default */ const layout_DefaultLayout = (layout_DefaultLayout_DefaultLayout);
;// CONCATENATED MODULE: ./src/layout/index.ts

;// CONCATENATED MODULE: ./src/App.tsx

/********************************************************************************************************************
 * App 컴포넌트
 * ******************************************************************************************************************/






const App = () => {
  const $ = (0,compiler_runtime.c)(2);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = [];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  (0,react.useEffect)(App_temp, t0);
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/react.createElement(lib/* .BrowserRouter */.Kd, null, /*#__PURE__*/react.createElement(components/* .Routes */.BV, null, /*#__PURE__*/react.createElement(components/* .Route */.qh, {
      path: "/*",
      element: /*#__PURE__*/react.createElement(layout_DefaultLayout, null)
    })));
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
};
/* export default */ const src_App = (App);
function App_temp() {
  const el = document.getElementById("___appLoading");
  el?.remove();
}
;// CONCATENATED MODULE: ./src/index.tsx



const container = document.getElementById('root');
if (container) {
  const root = (0,client.createRoot)(container);
  root.render(
  /*#__PURE__*/
  // <React.StrictMode>
  react.createElement(src_App, null)
  // </React.StrictMode>
  );
}

},
4146(module, __unused_rspack_exports, __webpack_require__) {


var reactIs = __webpack_require__(4363);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


},
4405(__unused_rspack_module, exports) {
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function typeOf(object) {
  if ("object" === typeof object && null !== object) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        switch (((object = object.type), object)) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
          case REACT_VIEW_TRANSITION_TYPE:
            return object;
          default:
            switch (((object = object && object.$$typeof), object)) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
                return object;
              case REACT_CONSUMER_TYPE:
                return object;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }
}
exports.ContextConsumer = REACT_CONSUMER_TYPE;
exports.ContextProvider = REACT_CONTEXT_TYPE;
exports.Element = REACT_ELEMENT_TYPE;
exports.ForwardRef = REACT_FORWARD_REF_TYPE;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Lazy = REACT_LAZY_TYPE;
exports.Memo = REACT_MEMO_TYPE;
exports.Portal = REACT_PORTAL_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
exports.isContextConsumer = function (object) {
  return typeOf(object) === REACT_CONSUMER_TYPE;
};
exports.isContextProvider = function (object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
};
exports.isElement = function (object) {
  return (
    "object" === typeof object &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
};
exports.isForwardRef = function (object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
};
exports.isFragment = function (object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
};
exports.isLazy = function (object) {
  return typeOf(object) === REACT_LAZY_TYPE;
};
exports.isMemo = function (object) {
  return typeOf(object) === REACT_MEMO_TYPE;
};
exports.isPortal = function (object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
};
exports.isProfiler = function (object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
};
exports.isStrictMode = function (object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
};
exports.isSuspense = function (object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
};
exports.isSuspenseList = function (object) {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
};
exports.isValidElementType = function (type) {
  return "string" === typeof type ||
    "function" === typeof type ||
    type === REACT_FRAGMENT_TYPE ||
    type === REACT_PROFILER_TYPE ||
    type === REACT_STRICT_MODE_TYPE ||
    type === REACT_SUSPENSE_TYPE ||
    type === REACT_SUSPENSE_LIST_TYPE ||
    type === REACT_VIEW_TRANSITION_TYPE ||
    ("object" === typeof type &&
      null !== type &&
      (type.$$typeof === REACT_LAZY_TYPE ||
        type.$$typeof === REACT_MEMO_TYPE ||
        type.$$typeof === REACT_CONTEXT_TYPE ||
        type.$$typeof === REACT_CONSUMER_TYPE ||
        type.$$typeof === REACT_FORWARD_REF_TYPE ||
        type.$$typeof === REACT_CLIENT_REFERENCE ||
        void 0 !== type.getModuleId))
    ? !0
    : !1;
};
exports.typeOf = typeOf;


},
4363(module, __unused_rspack_exports, __webpack_require__) {


if (true) {
  module.exports = __webpack_require__(4405);
} else {}


},
7016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ esm_Transition)
});

// UNUSED EXPORTS: ENTERED, ENTERING, EXITED, EXITING, UNMOUNTED

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(5561);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(961);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* export default */ const config = ({
  disabled: false
});
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(7241);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/reflow.js
var reflow_forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* ["default"] */.A)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) reflow_forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,objectWithoutPropertiesLoose/* ["default"] */.A)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext/* ["default"].Provider */.A.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition_Transition.contextType = TransitionGroupContext/* ["default"] */.A;
Transition_Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = UNMOUNTED;
Transition_Transition.EXITED = EXITED;
Transition_Transition.ENTERING = ENTERING;
Transition_Transition.ENTERED = ENTERED;
Transition_Transition.EXITING = EXITING;
/* export default */ const esm_Transition = (Transition_Transition);

},
7626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_TransitionGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(5561);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(7241);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup_TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* ["default"] */.A)(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* ["default"] */.A)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,objectWithoutPropertiesLoose/* ["default"] */.A)(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext/* ["default"].Provider */.A.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext/* ["default"].Provider */.A.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup_TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup_TransitionGroup.defaultProps = defaultProps;
/* export default */ const esm_TransitionGroup = (TransitionGroup_TransitionGroup);

},
7241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(6540);

/* export default */ const __rspack_default_export = (react__rspack_import_0.createContext(null));
__webpack_require__.d(__webpack_exports__, {
}, {
  A: __rspack_default_export
});


},
9434(__unused_rspack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactSharedInternals =
  (__webpack_require__(6540)/* .__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE */.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE);
exports.c = function (size) {
  return ReactSharedInternals.H.useMemoCache(size);
};


},
9698(__unused_rspack_module, exports) {
var __rspack_unused_export;
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function jsxProd(type, config, maybeKey) {
  var key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  if ("key" in config) {
    maybeKey = {};
    for (var propName in config)
      "key" !== propName && (maybeKey[propName] = config[propName]);
  } else maybeKey = config;
  config = maybeKey.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== config ? config : null,
    props: maybeKey
  };
}
__rspack_unused_export = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxs = jsxProd;


},
9869(__unused_rspack_module, exports) {
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  assign = Object.assign,
  emptyObject = {};
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function (partialState, callback) {
  if (
    "object" !== typeof partialState &&
    "function" !== typeof partialState &&
    null != partialState
  )
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
var isArrayImpl = Array.isArray;
function noop() {}
var ReactSharedInternals = { H: null, A: null, T: null, S: null },
  hasOwnProperty = Object.prototype.hasOwnProperty;
function ReactElement(type, key, props) {
  var refProp = props.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== refProp ? refProp : null,
    props: props
  };
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(oldElement.type, newKey, oldElement.props);
}
function isValidElement(object) {
  return (
    "object" === typeof object &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
function escape(key) {
  var escaperLookup = { "=": "=0", ":": "=2" };
  return (
    "$" +
    key.replace(/[=:]/g, function (match) {
      return escaperLookup[match];
    })
  );
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
  return "object" === typeof element && null !== element && null != element.key
    ? escape("" + element.key)
    : index.toString(36);
}
function resolveThenable(thenable) {
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      switch (
        ("string" === typeof thenable.status
          ? thenable.then(noop, noop)
          : ((thenable.status = "pending"),
            thenable.then(
              function (fulfilledValue) {
                "pending" === thenable.status &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = fulfilledValue));
              },
              function (error) {
                "pending" === thenable.status &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
              }
            )),
        thenable.status)
      ) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;
  if ("undefined" === type || "boolean" === type) children = null;
  var invokeCallback = !1;
  if (null === children) invokeCallback = !0;
  else
    switch (type) {
      case "bigint":
      case "string":
      case "number":
        invokeCallback = !0;
        break;
      case "object":
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = !0;
            break;
          case REACT_LAZY_TYPE:
            return (
              (invokeCallback = children._init),
              mapIntoArray(
                invokeCallback(children._payload),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              )
            );
        }
    }
  if (invokeCallback)
    return (
      (callback = callback(children)),
      (invokeCallback =
        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
      isArrayImpl(callback)
        ? ((escapedPrefix = ""),
          null != invokeCallback &&
            (escapedPrefix =
              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
            return c;
          }))
        : null != callback &&
          (isValidElement(callback) &&
            (callback = cloneAndReplaceKey(
              callback,
              escapedPrefix +
                (null == callback.key ||
                (children && children.key === callback.key)
                  ? ""
                  : ("" + callback.key).replace(
                      userProvidedKeyEscapeRegex,
                      "$&/"
                    ) + "/") +
                invokeCallback
            )),
          array.push(callback)),
      1
    );
  invokeCallback = 0;
  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
  if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
      (nameSoFar = children[i]),
        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if (((i = getIteratorFn(children)), "function" === typeof i))
    for (
      children = i.call(children), i = 0;
      !(nameSoFar = children.next()).done;

    )
      (nameSoFar = nameSoFar.value),
        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if ("object" === type) {
    if ("function" === typeof children.then)
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === array
          ? "object with keys {" + Object.keys(children).join(", ") + "}"
          : array) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context) {
  if (null == children) return children;
  var result = [],
    count = 0;
  mapIntoArray(children, result, "", "", function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (-1 === payload._status) {
    var ctor = payload._result,
      thenable = ctor();
    thenable.then(
      function (moduleObject) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 1),
            (payload._result = moduleObject),
            void 0 === thenable.status &&
              ((thenable.status = "fulfilled"),
              (thenable.value = moduleObject));
      },
      function (error) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 2),
            (payload._result = error),
            void 0 === thenable.status &&
              ((thenable.status = "rejected"), (thenable.reason = error));
      }
    );
    -1 === payload._status &&
      ((payload._status = 0), (payload._result = thenable));
  }
  if (1 === payload._status) return payload._result.default;
  throw payload._result;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function startTransition(scope) {
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  currentTransition.types =
    null !== prevTransition ? prevTransition.types : null;
  ReactSharedInternals.T = currentTransition;
  try {
    var returnValue = scope(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    "object" === typeof returnValue &&
      null !== returnValue &&
      "function" === typeof returnValue.then &&
      returnValue.then(noop, reportGlobalError);
  } catch (error) {
    reportGlobalError(error);
  } finally {
    null !== prevTransition &&
      null !== currentTransition.types &&
      (prevTransition.types = currentTransition.types),
      (ReactSharedInternals.T = prevTransition);
  }
}
function addTransitionType(type) {
  var transition = ReactSharedInternals.T;
  if (null !== transition) {
    var transitionTypes = transition.types;
    null === transitionTypes
      ? (transition.types = [type])
      : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
  } else startTransition(addTransitionType.bind(null, type));
}
var Children = {
  map: mapChildren,
  forEach: function (children, forEachFunc, forEachContext) {
    mapChildren(
      children,
      function () {
        forEachFunc.apply(this, arguments);
      },
      forEachContext
    );
  },
  count: function (children) {
    var n = 0;
    mapChildren(children, function () {
      n++;
    });
    return n;
  },
  toArray: function (children) {
    return (
      mapChildren(children, function (child) {
        return child;
      }) || []
    );
  },
  only: function (children) {
    if (!isValidElement(children))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return children;
  }
};
exports.Activity = REACT_ACTIVITY_TYPE;
exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  ReactSharedInternals;
exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (size) {
    return ReactSharedInternals.H.useMemoCache(size);
  }
};
exports.addTransitionType = addTransitionType;
exports.cache = function (fn) {
  return function () {
    return fn.apply(null, arguments);
  };
};
exports.cacheSignal = function () {
  return null;
};
exports.cloneElement = function (element, config, children) {
  if (null === element || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  var props = assign({}, element.props),
    key = element.key;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      !hasOwnProperty.call(config, propName) ||
        "key" === propName ||
        "__self" === propName ||
        "__source" === propName ||
        ("ref" === propName && void 0 === config.ref) ||
        (props[propName] = config[propName]);
  var propName = arguments.length - 2;
  if (1 === propName) props.children = children;
  else if (1 < propName) {
    for (var childArray = Array(propName), i = 0; i < propName; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  return ReactElement(element.type, key, props);
};
exports.createContext = function (defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  defaultValue.Provider = defaultValue;
  defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE,
    _context: defaultValue
  };
  return defaultValue;
};
exports.createElement = function (type, config, children) {
  var propName,
    props = {},
    key = null;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] = config[propName]);
  var childrenLength = arguments.length - 2;
  if (1 === childrenLength) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in ((childrenLength = type.defaultProps), childrenLength))
      void 0 === props[propName] &&
        (props[propName] = childrenLength[propName]);
  return ReactElement(type, key, props);
};
exports.createRef = function () {
  return { current: null };
};
exports.forwardRef = function (render) {
  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
};
exports.isValidElement = isValidElement;
exports.lazy = function (ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
exports.memo = function (type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: void 0 === compare ? null : compare
  };
};
exports.startTransition = startTransition;
exports.unstable_useCacheRefresh = function () {
  return ReactSharedInternals.H.useCacheRefresh();
};
exports.use = function (usable) {
  return ReactSharedInternals.H.use(usable);
};
exports.useActionState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
};
exports.useCallback = function (callback, deps) {
  return ReactSharedInternals.H.useCallback(callback, deps);
};
exports.useContext = function (Context) {
  return ReactSharedInternals.H.useContext(Context);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (value, initialValue) {
  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
};
exports.useEffect = function (create, deps) {
  return ReactSharedInternals.H.useEffect(create, deps);
};
exports.useEffectEvent = function (callback) {
  return ReactSharedInternals.H.useEffectEvent(callback);
};
exports.useId = function () {
  return ReactSharedInternals.H.useId();
};
exports.useImperativeHandle = function (ref, create, deps) {
  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
};
exports.useInsertionEffect = function (create, deps) {
  return ReactSharedInternals.H.useInsertionEffect(create, deps);
};
exports.useLayoutEffect = function (create, deps) {
  return ReactSharedInternals.H.useLayoutEffect(create, deps);
};
exports.useMemo = function (create, deps) {
  return ReactSharedInternals.H.useMemo(create, deps);
};
exports.useOptimistic = function (passthrough, reducer) {
  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
};
exports.useReducer = function (reducer, initialArg, init) {
  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
};
exports.useRef = function (initialValue) {
  return ReactSharedInternals.H.useRef(initialValue);
};
exports.useState = function (initialState) {
  return ReactSharedInternals.H.useState(initialState);
};
exports.useSyncExternalStore = function (
  subscribe,
  getSnapshot,
  getServerSnapshot
) {
  return ReactSharedInternals.H.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
exports.useTransition = function () {
  return ReactSharedInternals.H.useTransition();
};
exports.version = "19.3.1";


},
6522(module, __unused_rspack_exports, __webpack_require__) {
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  module.exports = __webpack_require__(9434);
} else {}


},
6540(module, __unused_rspack_exports, __webpack_require__) {


if (true) {
  module.exports = __webpack_require__(9869);
} else {}


},
4848(module, __unused_rspack_exports, __webpack_require__) {


if (true) {
  module.exports = __webpack_require__(9698);
} else {}


},
4477(__unused_rspack_module, exports) {
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  a: for (; 0 < index; ) {
    var parentIndex = (index - 1) >>> 1,
      parent = heap[parentIndex];
    if (0 < compare(parent, node))
      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
    else break a;
  }
}
function peek(heap) {
  return 0 === heap.length ? null : heap[0];
}
function pop(heap) {
  if (0 === heap.length) return null;
  var first = heap[0],
    last = heap.pop();
  if (last !== first) {
    heap[0] = last;
    a: for (
      var index = 0, length = heap.length, halfLength = length >>> 1;
      index < halfLength;

    ) {
      var leftIndex = 2 * (index + 1) - 1,
        left = heap[leftIndex],
        rightIndex = leftIndex + 1,
        right = heap[rightIndex];
      if (0 > compare(left, last))
        rightIndex < length && 0 > compare(right, left)
          ? ((heap[index] = right),
            (heap[rightIndex] = last),
            (index = rightIndex))
          : ((heap[index] = left),
            (heap[leftIndex] = last),
            (index = leftIndex));
      else if (rightIndex < length && 0 > compare(right, last))
        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
      else break a;
    }
  }
  return first;
}
function compare(a, b) {
  var diff = a.sortIndex - b.sortIndex;
  return 0 !== diff ? diff : a.id - b.id;
}
exports.unstable_now = void 0;
if ("object" === typeof performance && "function" === typeof performance.now) {
  var localPerformance = performance;
  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date,
    initialTime = localDate.now();
  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}
var taskQueue = [],
  timerQueue = [],
  taskIdCounter = 1,
  currentTask = null,
  currentPriorityLevel = 3,
  isPerformingWork = !1,
  isHostCallbackScheduled = !1,
  isHostTimeoutScheduled = !1,
  needsPaint = !1,
  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
function advanceTimers(currentTime) {
  for (var timer = peek(timerQueue); null !== timer; ) {
    if (null === timer.callback) pop(timerQueue);
    else if (timer.startTime <= currentTime)
      pop(timerQueue),
        (timer.sortIndex = timer.expirationTime),
        push(taskQueue, timer);
    else break;
    timer = peek(timerQueue);
  }
}
function handleTimeout(currentTime) {
  isHostTimeoutScheduled = !1;
  advanceTimers(currentTime);
  if (!isHostCallbackScheduled)
    if (null !== peek(taskQueue))
      (isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline());
    else {
      var firstTimer = peek(timerQueue);
      null !== firstTimer &&
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }
}
var isMessageLoopRunning = !1,
  taskTimeoutID = -1,
  frameInterval = 5,
  startTime = -1;
function shouldYieldToHost() {
  return needsPaint
    ? !0
    : exports.unstable_now() - startTime < frameInterval
      ? !1
      : !0;
}
function performWorkUntilDeadline() {
  needsPaint = !1;
  if (isMessageLoopRunning) {
    var currentTime = exports.unstable_now();
    startTime = currentTime;
    var hasMoreWork = !0;
    try {
      a: {
        isHostCallbackScheduled = !1;
        isHostTimeoutScheduled &&
          ((isHostTimeoutScheduled = !1),
          localClearTimeout(taskTimeoutID),
          (taskTimeoutID = -1));
        isPerformingWork = !0;
        var previousPriorityLevel = currentPriorityLevel;
        try {
          b: {
            advanceTimers(currentTime);
            for (
              currentTask = peek(taskQueue);
              null !== currentTask &&
              !(
                currentTask.expirationTime > currentTime && shouldYieldToHost()
              );

            ) {
              var callback = currentTask.callback;
              if ("function" === typeof callback) {
                currentTask.callback = null;
                currentPriorityLevel = currentTask.priorityLevel;
                var continuationCallback = callback(
                  currentTask.expirationTime <= currentTime
                );
                currentTime = exports.unstable_now();
                if ("function" === typeof continuationCallback) {
                  currentTask.callback = continuationCallback;
                  advanceTimers(currentTime);
                  hasMoreWork = !0;
                  break b;
                }
                currentTask === peek(taskQueue) && pop(taskQueue);
                advanceTimers(currentTime);
              } else pop(taskQueue);
              currentTask = peek(taskQueue);
            }
            if (null !== currentTask) hasMoreWork = !0;
            else {
              var firstTimer = peek(timerQueue);
              null !== firstTimer &&
                requestHostTimeout(
                  handleTimeout,
                  firstTimer.startTime - currentTime
                );
              hasMoreWork = !1;
            }
          }
          break a;
        } finally {
          (currentTask = null),
            (currentPriorityLevel = previousPriorityLevel),
            (isPerformingWork = !1);
        }
        hasMoreWork = void 0;
      }
    } finally {
      hasMoreWork
        ? schedulePerformWorkUntilDeadline()
        : (isMessageLoopRunning = !1);
    }
  }
}
var schedulePerformWorkUntilDeadline;
if ("function" === typeof localSetImmediate)
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
else if ("undefined" !== typeof MessageChannel) {
  var channel = new MessageChannel(),
    port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;
  schedulePerformWorkUntilDeadline = function () {
    port.postMessage(null);
  };
} else
  schedulePerformWorkUntilDeadline = function () {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
function requestHostTimeout(callback, ms) {
  taskTimeoutID = localSetTimeout(function () {
    callback(exports.unstable_now());
  }, ms);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (task) {
  task.callback = null;
};
exports.unstable_forceFrameRate = function (fps) {
  0 > fps || 125 < fps
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
};
exports.unstable_getCurrentPriorityLevel = function () {
  return currentPriorityLevel;
};
exports.unstable_next = function (eventHandler) {
  switch (currentPriorityLevel) {
    case 1:
    case 2:
    case 3:
      var priorityLevel = 3;
      break;
    default:
      priorityLevel = currentPriorityLevel;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_requestPaint = function () {
  needsPaint = !0;
};
exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      priorityLevel = 3;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_scheduleCallback = function (
  priorityLevel,
  callback,
  options
) {
  var currentTime = exports.unstable_now();
  "object" === typeof options && null !== options
    ? ((options = options.delay),
      (options =
        "number" === typeof options && 0 < options
          ? currentTime + options
          : currentTime))
    : (options = currentTime);
  switch (priorityLevel) {
    case 1:
      var timeout = -1;
      break;
    case 2:
      timeout = 250;
      break;
    case 5:
      timeout = 1073741823;
      break;
    case 4:
      timeout = 1e4;
      break;
    default:
      timeout = 5e3;
  }
  timeout = options + timeout;
  priorityLevel = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: options,
    expirationTime: timeout,
    sortIndex: -1
  };
  options > currentTime
    ? ((priorityLevel.sortIndex = options),
      push(timerQueue, priorityLevel),
      null === peek(taskQueue) &&
        priorityLevel === peek(timerQueue) &&
        (isHostTimeoutScheduled
          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
          : (isHostTimeoutScheduled = !0),
        requestHostTimeout(handleTimeout, options - currentTime)))
    : ((priorityLevel.sortIndex = timeout),
      push(taskQueue, priorityLevel),
      isHostCallbackScheduled ||
        isPerformingWork ||
        ((isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline())));
  return priorityLevel;
};
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = function (callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;
    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
};


},
9982(module, __unused_rspack_exports, __webpack_require__) {


if (true) {
  module.exports = __webpack_require__(4477);
} else {}


},
8168(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

__webpack_require__.d(__webpack_exports__, {
  A: () => (_extends)
});


},
5561(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _inheritsLoose)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}


},
8587(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

__webpack_require__.d(__webpack_exports__, {
}, {
  A: _objectWithoutPropertiesLoose
});


},
4164(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* export default */ const __rspack_default_export = (clsx);
__webpack_require__.d(__webpack_exports__, {
}, {
  A: __rspack_default_export
});


},
4534(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'

__webpack_require__.d(__webpack_exports__, {
}, {
  IO: LAYER,
  LU: DECLARATION,
  MS: MS,
  Sv: KEYFRAMES,
  XZ: RULESET,
  YK: COMMENT,
  j: WEBKIT,
  vd: MOZ,
  yE: IMPORT
});


},
9503(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _Utility_js__rspack_import_0 = __webpack_require__(9735);






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__rspack_import_0/* .sizeof */.FK)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children)
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(element.props, function (value) {
							switch (match(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return serialize([copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return serialize([
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}

__webpack_require__.d(__webpack_exports__, {
}, {
  MY: rulesheet,
  r1: middleware
});


},
3716(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _Enum_js__rspack_import_2 = __webpack_require__(4534);
/* import */ var _Utility_js__rspack_import_1 = __webpack_require__(9735);
/* import */ var _Tokenizer_js__rspack_import_0 = __webpack_require__(390);




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__rspack_import_0/* .dealloc */.VF)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__rspack_import_0/* .alloc */.c4)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__rspack_import_0/* .next */.K2)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__rspack_import_1/* .charat */.wN)(characters, length - 1) == 58) {
					if ((0,_Utility_js__rspack_import_1/* .indexof */.K5)(characters += (0,_Utility_js__rspack_import_1/* .replace */.HC)((0,_Tokenizer_js__rspack_import_0/* .delimit */.Tb)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__rspack_import_0/* .delimit */.Tb)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__rspack_import_0/* .whitespace */.mw)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__rspack_import_0/* .escaping */.Nc)((0,_Tokenizer_js__rspack_import_0/* .caret */.OW)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__rspack_import_0/* .peek */.se)()) {
					case 42: case 47:
						;(0,_Utility_js__rspack_import_1/* .append */.BC)(comment((0,_Tokenizer_js__rspack_import_0/* .commenter */.nf)((0,_Tokenizer_js__rspack_import_0/* .next */.K2)(), (0,_Tokenizer_js__rspack_import_0/* .caret */.OW)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__rspack_import_1/* .strlen */.b2)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__rspack_import_1/* .replace */.HC)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__rspack_import_1/* .strlen */.b2)(characters) - length))
							(0,_Utility_js__rspack_import_1/* .append */.BC)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__rspack_import_1/* .replace */.HC)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__rspack_import_1/* .append */.BC)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__rspack_import_1/* .charat */.wN)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__rspack_import_1/* .append */.BC)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__rspack_import_1/* .strlen */.b2)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__rspack_import_0/* .prev */.YL)() == 125)
						continue

				switch (characters += (0,_Utility_js__rspack_import_1/* .from */.HT)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__rspack_import_1/* .strlen */.b2)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__rspack_import_0/* .peek */.se)() === 45)
							characters += (0,_Tokenizer_js__rspack_import_0/* .delimit */.Tb)((0,_Tokenizer_js__rspack_import_0/* .next */.K2)())

						atrule = (0,_Tokenizer_js__rspack_import_0/* .peek */.se)(), offset = length = (0,_Utility_js__rspack_import_1/* .strlen */.b2)(type = characters += (0,_Tokenizer_js__rspack_import_0/* .identifier */.Cv)((0,_Tokenizer_js__rspack_import_0/* .caret */.OW)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__rspack_import_1/* .strlen */.b2)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__rspack_import_1/* .sizeof */.FK)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__rspack_import_1/* .substr */.c1)(value, post + 1, post = (0,_Utility_js__rspack_import_1/* .abs */.tn)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__rspack_import_1/* .trim */.Bq)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__rspack_import_1/* .replace */.HC)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__rspack_import_0/* .node */.rH)(value, root, parent, offset === 0 ? _Enum_js__rspack_import_2/* .RULESET */.XZ : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__rspack_import_0/* .node */.rH)(value, root, parent, _Enum_js__rspack_import_2/* .COMMENT */.YK, (0,_Utility_js__rspack_import_1/* .from */.HT)((0,_Tokenizer_js__rspack_import_0/* .char */.Tp)()), (0,_Utility_js__rspack_import_1/* .substr */.c1)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__rspack_import_0/* .node */.rH)(value, root, parent, _Enum_js__rspack_import_2/* .DECLARATION */.LU, (0,_Utility_js__rspack_import_1/* .substr */.c1)(value, 0, length), (0,_Utility_js__rspack_import_1/* .substr */.c1)(value, length + 1, -1), length)
}

__webpack_require__.d(__webpack_exports__, {
}, {
  wE: compile
});


},
483(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _Enum_js__rspack_import_1 = __webpack_require__(4534);
/* import */ var _Utility_js__rspack_import_0 = __webpack_require__(9735);



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__rspack_import_0/* .sizeof */.FK)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__rspack_import_1/* .LAYER */.IO: if (element.children.length) break
		case _Enum_js__rspack_import_1/* .IMPORT */.yE: case _Enum_js__rspack_import_1/* .DECLARATION */.LU: return element.return = element.return || element.value
		case _Enum_js__rspack_import_1/* .COMMENT */.YK: return ''
		case _Enum_js__rspack_import_1/* .KEYFRAMES */.Sv: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__rspack_import_1/* .RULESET */.XZ: element.value = element.props.join(',')
	}

	return (0,_Utility_js__rspack_import_0/* .strlen */.b2)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

__webpack_require__.d(__webpack_exports__, {
}, {
  A: stringify,
  l: serialize
});


},
390(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _Utility_js__rspack_import_0 = __webpack_require__(9735);


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__rspack_import_0/* .assign */.kp)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__rspack_import_0/* .charat */.wN)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__rspack_import_0/* .charat */.wN)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__rspack_import_0/* .charat */.wN)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__rspack_import_0/* .substr */.c1)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__rspack_import_0/* .strlen */.b2)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__rspack_import_0/* .trim */.Bq)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__rspack_import_0/* .from */.HT)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}

__webpack_require__.d(__webpack_exports__, {
  G1: () => (position)
}, {
  C: copy,
  Cv: identifier,
  K2: next,
  Nc: escaping,
  OW: caret,
  Sh: token,
  Tb: delimit,
  Tp: char,
  VF: dealloc,
  YL: prev,
  c4: alloc,
  di: slice,
  mw: whitespace,
  nf: commenter,
  rH: node,
  se: peek
});


},
9735(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

__webpack_require__.d(__webpack_exports__, {
}, {
  BC: append,
  Bq: trim,
  FK: sizeof,
  HC: replace,
  HT: from,
  K5: indexof,
  YW: match,
  b2: strlen,
  c1: substr,
  kg: combine,
  kp: assign,
  tW: hash,
  tn: abs,
  wN: charat
});


},

},function(__webpack_require__) {
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId) }
__webpack_require__.O(0, [43,523,644,939], function() {
        return __webpack_exec__(8284);
      });
var __webpack_exports__ = __webpack_require__.O();

}
]);