"use strict";
(globalThis["webpackChunkexamples"] = globalThis["webpackChunkexamples"] || []).push([[763],{

/***/ 3388
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ DefaultLayout)
/* harmony export */ });
/* unused harmony export CardLayout */
/* harmony import */ var react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6420);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9252);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7899);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9775);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1887);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8000);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5362);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8957);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8392);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4960);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9282);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9431);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3626);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9552);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5755);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7810);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4198);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2297);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9499);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2913);
function insertStyle(css) {
    if (typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined{padding:5px 15px 4px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeLarge{padding:7px 21px 6px}.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-sizeSmall{padding:3px 9px 2px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained{padding:6px 16px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeLarge{padding:8px 22px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-sizeSmall{padding:4px 10px 3px}.MuiButtonBase-root.MuiButton-root.MuiButton-text{padding:6px 8px 5px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeLarge{padding:8px 11px 7px}.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-sizeSmall{padding:4px 5px 3px}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,main,input,button,textarea,pre,select,a{font-family:\"Pretendard\",\"Apple Gothic\",\"Dotum\",sans-serif;margin:0;padding:0;border:0;vertical-align:top;box-sizing:border-box;word-break:keep-all;line-height:unset}*:before,*:after{box-sizing:border-box}");var CardLayout = function CardLayout(t0) {
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
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
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
var StyledExpandMore = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  margin-top: auto;\n  margin-bottom: auto;\n  @keyframes open {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n  @keyframes close {\n    0% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n"])));
var StyledListItemIcon = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  min-width: 30px;\n"])));var useChange = function useChange(value, callback, t0) {
  var skipFirst = t0 === undefined ? false : t0;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_17__.useState(skipFirst ? false : "|||||skip|||||first|||||"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    _value = _React$useState2[0],
    _setValue = _React$useState2[1];
  if (value !== _value) {
    _setValue(value);
    callback();
  }
};var _SideMenuListItem = function SideMenuListItem(t0) {
  var $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(48);
  var info = t0.info,
    badgeVariant = t0.badgeVariant,
    expandedBackgroundColor = t0.expandedBackgroundColor;
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_18__/* .useLocation */ .zy)();
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_18__/* .useNavigate */ .Zp)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpandable = _useState2[0],
    setIsExpandable = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false),
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
  useChange(info, t1);
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
  useChange(location.pathname, t2);
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
    t7 = info.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      fontSize: "small"
    }, info.icon);
    $[15] = info.icon;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  var t8;
  if ($[17] !== t7) {
    t8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledListItemIcon, null, t7);
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
    t11 = info.badge ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("div", null, info.name)) : info.name;
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
    t12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
    t13 = isExpandable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledExpandMore, {
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
    t14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
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
    t15 = isExpandable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      "in": isExpand,
      style: {
        backgroundColor: isExpand ? expandedBackgroundColor : undefined
      }
    }, info.items && info.items.map(function (subInfo, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_SideMenuListItem, {
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
    t16 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(react__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, t14, t15);
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
var StyledList = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  padding: 0;\n"])));var SideMenuList = function SideMenuList(t0) {
  var $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(15);
  var list = t0.list,
    badgeVariant = t0.badgeVariant;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)();
  var T0;
  var t1;
  if ($[0] !== badgeVariant || $[1] !== list || $[2] !== theme.palette.action.selectedOpacity || $[3] !== theme.palette.primary.main) {
    var finalList = list.map(_temp2$2);
    var _t = theme.palette.action.selectedOpacity / 2;
    var t3;
    if ($[6] !== _t || $[7] !== theme.palette.primary.main) {
      t3 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__/* .alpha */ .X4)(theme.palette.primary.main, _t);
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_SideMenuListItem, {
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
    t2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(T0, null, t1);
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
var StyledSimpleBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(simplebar_react__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  max-height: 100%;\n"])));
var StyledLogoContainerBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    borderBottom: 'thin solid #f5f5f5',
    color: 'text.primary'
  });
});var SideMenu = function SideMenu(t0) {
  var $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(8);
  var logo = t0.logo,
    badgeVariant = t0.badgeVariant,
    list = t0.list;
  var t1;
  if ($[0] !== logo) {
    t1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledLogoContainerBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, logo));
    $[0] = logo;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] !== badgeVariant || $[3] !== list) {
    t2 = list && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(SideMenuList, {
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
    t3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledSimpleBar, null, t1, t2);
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
};var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var StyledContainerBox$1 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var StyledHeadContainerBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function (_ref) {
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
var StyledHeadIconContainerBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  margin-right: 0.25rem;\n  line-height: 0;\n"])));
var StyledHeadIcon = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n"])));
var StyledHeadTitleTypography = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 0.7rem;\n"])));
var StyledTitleContainerDiv = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n"])));
var StyledTitleIconContainerDiv = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)('div')(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  display: inline-flex;\n  margin-right: 0.3rem;\n"])));var Title = function Title(t0) {
  var $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(17);
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
    t3 = headTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledHeadContainerBox, null, finalHeadIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledHeadIconContainerBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledHeadIcon, null, finalHeadIcon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledHeadTitleTypography, null, headTitle));
    $[4] = finalHeadIcon;
    $[5] = headTitle;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var t4;
  if ($[7] !== finalIcon) {
    t4 = finalIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledTitleIconContainerDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      fontSize: "small"
    }, finalIcon));
    $[7] = finalIcon;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  var t5;
  if ($[9] !== title) {
    t5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("div", null, title);
    $[9] = title;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  var t6;
  if ($[11] !== t4 || $[12] !== t5) {
    t6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledTitleContainerDiv, null, t4, t5);
    $[11] = t4;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  var t7;
  if ($[14] !== t3 || $[15] !== t6) {
    t7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledContainerBox$1, null, t3, t6);
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
var _getNextScreen = function _getNextScreen(screen) {
  if (screen === 'xs') return 'sm';else if (screen === 'sm') return 'md';else if (screen === 'md') return 'lg';else return 'xl';
};
var DefaultLayout = function DefaultLayout(t0) {
  var $ = (0,react_compiler_runtime__WEBPACK_IMPORTED_MODULE_0__.c)(67);
  var children = t0.children,
    logo = t0.logo,
    badgeVariant = t0.badgeVariant,
    menu = t0.menu,
    t1 = t0.menuHideScreen,
    appBarControl = t0.appBarControl;
  var menuHideScreen = t1 === undefined ? "sm" : t1;
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_18__/* .useLocation */ .zy)();
  var getMenuTitles = _temp;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false),
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(t2),
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
  useChange(location.pathname, t3, true);
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
  useChange(menu, t4, true);
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
  var nextMenuScreen = _getNextScreen(menuHideScreen);
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
    t14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null);
    $[22] = t14;
  } else {
    t14 = $[22];
  }
  var t15;
  if ($[23] !== appBarIconButtonSx) {
    t15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
    t17 = titleData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(Title, {
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
    t18 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
    t19 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, t15, t18, appBarControl);
    $[30] = appBarControl;
    $[31] = t15;
    $[32] = t18;
    $[33] = t19;
  } else {
    t19 = $[33];
  }
  var t20;
  if ($[34] !== appBarSx || $[35] !== t19) {
    t20 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledAppBar, {
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
    t22 = menu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(SideMenu, {
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
    t23 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledSideMenuTemporaryDrawer, {
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
    t24 = menu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(SideMenu, {
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
    t25 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledSideMenuPermanentDrawer, {
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
    t26 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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
    t27 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null);
    $[57] = t27;
  } else {
    t27 = $[57];
  }
  var t28;
  if ($[58] !== children) {
    t28 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledMainContentDiv, null, children);
    $[58] = children;
    $[59] = t28;
  } else {
    t28 = $[59];
  }
  var t29;
  if ($[60] !== mainBoxSx || $[61] !== t28) {
    t29 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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
    t30 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(StyledContainerBox, null, t20, t26, t29);
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

var StyledContainerBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));
var StyledAppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function (_ref) {
  var theme = _ref.theme;
  return theme.unstable_sx({
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'text.primary',
    borderBottom: 'thin solid #f5f5f5'
  });
});
var StyledSideMenuTemporaryDrawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(function (_ref2) {
  var theme = _ref2.theme;
  return theme.unstable_sx({
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: SIDE_MENU_WIDTH
    }
  });
});
var StyledSideMenuPermanentDrawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(function (_ref3) {
  var theme = _ref3.theme;
  return theme.unstable_sx({
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: SIDE_MENU_WIDTH
    }
  });
});
var StyledMainContentDiv = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
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

/***/ }

}]);