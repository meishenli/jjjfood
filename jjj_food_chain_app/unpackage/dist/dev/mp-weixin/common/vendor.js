(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // ??????atob??????????????????????????????????????????`const Base64 = {atob};Base64.atob('xxxx')`??????????????????
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('?????????????????????????????????????????????????????????' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context????????????
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// ??????????????????
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime ??????????????? uni ???????????????????????????????????? uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // ???????????? $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // ?????????????????????????????????????????????????????????__id__???????????????????????????mp-weixin??????navigateTo???AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// ?????? api ???????????????
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue ??? false ???????????????????????????????????????????????????????????????????????????
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// ??????????????????
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// ???????????? key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}????????????????????? key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// ???????????? returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// ??????????????? api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// ?????? api ??????????????????
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// ?????? api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // ??????????????? triggerEvent ?????????
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // ?????? Vue.prototype ???????????????
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('?????? Vue ??? data ???????????????????????? data ???????????????????????? data ?????????????????? vm ??????????????????????????????????????????????????????', data);
      }
    }
  } else {
    try {
      // ??? data ?????????
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // ????????????????????? render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // ?????????????????????????????????????????????
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // ??????????????????????????? $slots ??? props??????????????? vueSlots ????????? $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO ???????????? mpvue ??? mp ??????
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for ???????????????????????????', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent ????????????????????? event ??????
  if (isCustom) {// ???????????????
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// ???????????????????????? event ??? detail ??????
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent ?????????????????????
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // ???????????? scoped slots ??????????????????????????????????????????
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('?????????????????????');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // ????????? web-view ?????? dataset ?????????
  if (!eventOpts) {
    return console.warn('?????????????????????');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao ?????????????????? scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // ??????????????????????????????????????????????????????????????????????????????
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // ???????????????????????????getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// ?????????????????????????????????????????????????????? onShow ??? onLaunch ??????
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// ?????? ???2.2.3 ????????????????????? 2.3.0 ??? nextTick ??????
          console.error('?????????????????????????????????????????? ?????????????????????-??????-????????????-????????????????????? ?????????`2.3.0`??????');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm ???????????? globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // ??????????????? globalData
  appOptions.globalData = vm.$options.globalData || {};
  // ??? methods ?????????????????? getApp() ???
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // ??????????????????(????????????:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // ??????????????????
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO ???????????? for ?????? scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail ?????????,value ?????????(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // ?????? multipleSlots ??????????????? bug??????????????????????????? ??? u-list?????????????????????
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // ??????????????????
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // ????????? vue ??????
        this.$vm = new VueComponent(options);

        // ??????$slots,$scopedSlots???????????????????????????$slots???
        initSlots(this.$vm, properties.vueSlots);

        // ???????????? setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // ????????? props ???????????? true????????????????????? false ????????? created,ready ??????, ??? attached ?????????
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // ?????? mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 10:
/*!*************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/config.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var app_url = 'http://www.qi.com:8000';
// ???????????????????????????
if (true) {



}
// ????????????????????????h5?????????????????????url
if (false) {}var _default =
{
  /*???????????????*/
  app_url: app_url,
  /*appid*/
  app_id: 10001,
  //h5????????????
  h5_addr: '/h5',
  //inonfont ??????url
  font_url: 'https://at.alicdn.com/t/font_2184879_i7r5f24ts0d.ttf' };exports.default = _default;

/***/ }),

/***/ 13:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 14:
/*!***********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var defaultImg = __webpack_require__(/*! @/static/default.png */ 15);

/*????????????*/
_vue.default.directive('demo', {
  bind: function bind(el, binding, vnode) {
    var s = JSON.stringify;
    el.innerHTML =
    'name: ' + s(binding.name) + '<br>' +
    'value: ' + s(binding.value) + '<br>' +
    'expression: ' + s(binding.expression) + '<br>' +
    'argument: ' + s(binding.arg) + '<br>' +
    'modifiers: ' + s(binding.modifiers) + '<br>' +
    'vnode keys: ' + Object.keys(vnode).join(', ');
  } });

/***/ }),

/***/ 15:
/*!**********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/static/default.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzRkI1RkU5MjU4MjExRUFCQTlGRjhBRjJBMDVGM0JBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzRkI1RkVBMjU4MjExRUFCQTlGRjhBRjJBMDVGM0JBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDNGQjVGRTcyNTgyMTFFQUJBOUZGOEFGMkEwNUYzQkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDNGQjVGRTgyNTgyMTFFQUJBOUZGOEFGMkEwNUYzQkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6N5rJgAAAb9klEQVR42uyda1PjuNZGCSSEBMJl6O7pqvn/P22mpq80IdAhEHifis7rk+PId0mWkrU+THUxYBsTLe+9pS0PVqvVEQBAChxzCwAAYQEAICwAQFgAAAgLAABhAQDCAgBAWAAACAsAEBYAAMICAEBYAICwAAAQFgAAwgIAhAUAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABAWAAACAsAEBYAAMICAEBYAICwAAAQFgAAwgIAhAUAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABAWAAACAsAAGEBAMICAEBYAAAICwAQFgAAwgIAQFgAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQB0YMgtgPh52bBarV43rNfr9/d3fX0wGJycnAw3nJ6ejjZwu/aYgT4E3AWIE4np9+/fy+Xy+fn57e2tOl84Ph6Px2dnZ5PJRCLjBiIsgBAojHp6epKt2n0+FW3JWdPpVJEXNxNhAXjkcYOiqo7HUbR1voFbujfw/IG4AqvFYvHw8ODkaM8bXl5eLi4uCLWIsABcIrlIVUoDnR9Z6eFsNlPAxU0mwgJwwHK5nM/n3dNAK5Lg29vb5eXl2dkZtzppWIcFUcRW/mwV7BSAsGD/eX19VSYYQCUm5dTpuOcIC6Ali8XCR92qKDfU6bjnCAugDY+Pj67mBGui0+mk3HmEBdA4GezFHTopiWGiMEt4cLy8vDw/P69WK/1D4/bt7e34+Hg4HI5Go9PT0/F4HKwd7+npqZcquE6qU19eXvJhQFgQL5KU6XfJxRdy1mqDQg+ZyzS1SF5eL8b0CfZ1K3Tq8/Nz+g0RFkTKYoOiqso07eHhYblcXmzwqoweFy3r1LoAr78g+IAa1v7z/v5+f39/d3dXaavttFHfr58yu7j4QE7s97b0fgGAsMDCfEPIH6wjxN7XcJo2Qz4eCAviygS7SEc/62PhkkxRZ38rr+gCEBbCgohYrVbddaMjOC82RdJyT+c/woKIeHp66h5E6Ag6jtsLi2QZFKuxEBbEgkTjat2AjuM2e0JYgLDgf3h+fnY1IHUctzXy9Xodwy2K5DIAYYHjAo3bo/lbLZHiZQDCgiO3SRwTaoCwwCNuCzRujzYYDGK4RZFcBiAsOHK70Mnt0SJp4qOXEGFBNH/a4+NojxbJO2x4lQ7CglhwOxpjPhrCQliQPG63tXJ7NN9716R1GYCwwPFodHs06c9tjtkuyQ22VSEgLKhgPB67Snl0HLdvIZUpen+taci9VQFhQbUUJpOJk0PpOM7Hdu/vNOWlqggL4mI6nXYXjY6g4zi/NkmwxxKSTu3K5oCwwNmw7L4LsI7gwywnJyc9KkOnZhEWwoLokG66vB5GP+tv43MFbr1UsnRSHzEjICxwwOWGkD9Yk+FweH5+Hv6G6KSswEoU/mz7z2AwuLq6UgZU5605htFo5PutOZk7dEkhX/48m816sSQgLGiWG56enlrfS5iLesK8l3D7wnQ9Yd5RqF+NV3ul/fRlW+tDI543P2foeu7v732/R0e/miLN3td/AcKC5Fkul/P53J+z5KnLy0vWXpESAjhAKhkMBg8PDz5yQ2WCs9mM2AphAbgMgk5OTpScuq3BS1UXFxdMC5ISAnjhcUP39FAGPN/ALUVYAB55fX01E5rtPp+m82Y6nRJYISyAQKzXazlruVwq2qqzR/Px8bGiqrOzMzpvEBZAb7xs0Gf1dYNEZt7QNRgMTNlLKKoabeB2ISwAgP6hlxAAEBYAAMICAIQFAICwAAAQFgAgLACASDmIxoW7u7vHx8fBYOD1LLe3t853L1kulz9+/HB4QN2Et7c3s+py+4vOb45OYQ6bO1eXK9ehcuvdfbyNVWe5vr52uM+fDvjt27eae712OctkMtGHEGElz/n5uYRVp7ejC/f39+Px2O3IlwFHo5Hvne3eNzj+YA2HJfuausLH31RX7vYVFYvFwvdfMPuckxLuA6enpwHekrJarZ6enpwf1utrIHw9BofDDx8+JNoloxvuMHCTUiWsAJetT/ghbE94KDWs2WzmI33I8fDw4PyZr09hcu+kUj5lXmPBs00fiQCRpuJ6fcIPYSAfirA0fgIEzC8vL8o9fdjWdwHOx63Wf3t8t3Pr8MrhrZaqwoRXKd5qhFU97ANsOaIn6nq9TjGldR7MJvfYN/vSRB5xW8bw8fGBhFeHJSzZKkCSIlv5eKiGSWmduzWtworbYe8p3LYm4IezT+FhrcMK86eVsJyXLcKktD5SqlQe/s7dOp/Pnc+99vUYRlg9/bZBgmdlAT5eZRwmpXWeUiUxaeA8e31+fvYxZZzipwJhdSJMeVK5gPOFgvE/S4vGfPyTBs4/FT6eWOnG3QgromepFeUCyggOqlpRklJFPmngPO7+vSHMEyKJyibCiqtaYUUZgfP1zdHOB1U+Btyuxoz8MRAmvEpr7hhheUle3OIjyIpzxU3lVckIceazzhNtHw+qRBNthOUM5yturCyXS+epQYSLm2rGffJChOVht1flqRRg/QAfYHh1dMjby7hd01ySHTif245tcVPNlCrCSQPncZ+PyZYeUwSEFRFhSgCeprfj+bw20lBskwbO+5zDVK8OpM8ZYVmGfZiOaOdBVpiU1nlKFdWkgfMnlo8Fw0nUBBBWIIJ1RPto1gmT0jpPqeKZNHBbtA7W5yzJHkifM8Kyf2oDVIL1Ud7LjugWIWokAYLzorWPP7E1RE1xfzSE5YwwlWBPj99+1w3KmO3i0xhKMM77nINtI3M4fc4Iyw4d0eFTqn6DLOfG9FGmtD5cD7l6hbD+G2bTER04pepx0sB5TrparYJtI3NQfc4IqyzSpiM6cIjU16SB86J1mJWi0bYKIKx9eOpa2ZuOaCcpVS+TBs6jaR/NDEVPiEPrc0ZYQesaVvagI9qh3MMPQoXSbt/lEya8aj2/gbD2mTDD3kclK+TiJocpVeBJA+dFa/qcEVafhKkE+9gsSZ/mMC8BdB7NhZw0oM8ZYe0bwTqi3R7w5eUlzIa8bxvcRj1hVEufM8LaQ4J1RLudCA+zDsiHbZcbklNtsD5nhfwH2+eMsOo+0NLqiA62DshHShsmq3KumGB9zgfeiIOwqkmuIzrYmHceZAUrWrtN4jy9enKXA+9zRlgNgqwwHdHdk5Rg64ByKW33klmworXzM/p4ubdlZB7S+5wRVieCdUR3D1XCh1fZeTumtMGK1m5jupB9zmGmIxDWPpBER3TglMrhuA1WtHaez9LnjLCivC/Rd0SHT6kcprRhitZWukwa0OeMsOIl8o7oXlKqXErbLsgKVrR2HmTR54yw4iXmjugeU6rugVKYonUJ7SYN6HNGWLEznU7H47Hvs7QoRfWYUnWMlYIVrStjpaalKPqcEVYChFm51yhc6j2lyqmzUWYaclG+Q2/S54yw0iBYR3T9DpXeU6pcSlvftqvVKkzPY03V1pw0CDa/oXCePmeElcZDr+aQiCSl2ubx8bFm9NF99ZZD6k8aBJvfoBEHYSXz3KtZCY4kpWqR0vayKL8yyKosBdLnjLAIsloGIFGlVE1T2n5XjVmpUw2kzxlhpcdoNAqwNEZ5R/m6xKhSqkY+6nFRfqWPStI9+pwRVqqEWXys7KOoEhxhSlUzpW1UmA9M+bXR54ywUiXM+uOSSnCEKVXNAFBho5LZaC+7aNKgMuB1BX3OCMtXkBWmI3r3qR5tSlU5wiNZlF8Z2DaKdh1CnzPCSjt0l61y4yfmlKpykEeyKL+c3UmDYPMb9DkjrOSj91wlOPKUqiSljWpRfmU+Wye9TbHOgLAOlzDTz9shVRIpVVFKG9Wi/HK2Jw3oc0ZY+8NkMgnTEW2iqiRSKmtKG6xo7TDIMlEVfc4Ia6+CrDDbzpjwJJWUaht5yuSGAYrWDjGvd1R4RZ9zvKMvleJIbHz//t131qBkYTgcJvoHUvggZ6UlrKNNUeloU4nzfSIF6Z8+fWIcEWEFIsDjUaM93ceJrjw5WxlVhUnAacRBWEFhJxBoDX3OCGs/gyzYP8LUQBEW5AnTEQ17Rph9txEWWGCZMhBeIaxkSHqlslTLqsXwTzj6nBFWzx/BAB3RPri5uUnUtrrhKVYP9YSghoCw+r6DaW5mNB6PJ5OJxk9yQZZUdXt7G+DNIDzbENZ+kuJ+RmYdUIrPfLM5Z3KXTZ8zworomZ9WkLW9Diitx352qxUhptWIR58zworrsZ/KXHVOr2kFWdtF64TWwema6XNGWARZbtyaytRVzq0JWUAJOGuMEVZ0eVb8lWCrWFOx7W72mkSeRRcXwoqU+Id9UTAVf0prLVonUclmpSjC4lnqIKVKK8gqWoER+aRBEnE3wjroICvaakX52I55C4GSts2YJw1oxEFYsRPtvrd1sqdoa8Plj4Fo18HR54yw0giyIuyIrrOo3Sx/jzDRLn8GxNlsQHiFsNJAsUxsQVb9nXAiTGnrDPsIYxn6nBFWMsRWCa6f68WW0tYsWscWztDnjLBSIqrPa9O5y3gWNzXSUFTzcZI+fc4IK7EgK5KMoGnoEc/ipqaJXiRBlm4g1SuElRiRJCnt4o4YUtoWNzCSdXApbtqDsKD/SnBracaQ0rYLUXtfmcFO/wiLIKsHY/ab0ipCaTfse++I5l1KCCtheqwEd9Rlv7btkpP2OGlAnzPCSp6+hn33EKmvlLZj0brHSQPCK4SVPL08dVunVDEEWd2L1r28fo0+Z4S1P0FW4Aevq2m+8B3RTorWslV41bKUAWHtCYGXj7vNiczrKpKTe+COaPqcEda+BVnBKsFuE6KQKa3Dc4XsiJZhA2sdYUFKUY/vlKqvlNbticwLwQJcdorveUNYUB34BFg+7kMuYVLas7Mzt0XrMIFPom/SRVhQQYDl4/7StwAprQ+5BJg04H3OCGtv8Z07+MvdfKe0/orWXoMs3ueMsPb6dvtMH3yvA/K3uMlr7uZ10qCXBV8IC8LhrxLsu5Lib3FTooEnfc4Ia//xFE2EWQfkwywBitaeJg1oxEFYB4HzSnCwdUA+5BJs8tTtpAF9zgjrgHDrl5DrgNymtMGK1s5PRHiFsA6IRJd0O4/mQhatHZ7L+ZIxQFix4+oRHX4dkKuUNnDR2uGkAY04COvgcFIJ7msdkJORHz6rcpI70+eMsA43yEpx4yeTE3VMafvaJqyjaulzRliHS8f4qN91QB3jo76K1h0nDehzRlgHTZcQqd+Jqi4pbY9F6y4hEn3OCOvQaV0JjmEdUOuUtt+sqvWkAX3OCAtaZhkxrANql9LGULRu8ZCI4V2NgLAi+Bs0TzTiWQfUNKWN5IXYLSYNdNn0OSMs+E/Q0agSHM9EVdOUVuFkmF1A3Yaovb+fFRBWRDSqBMe2Dqh+ShtV0brRpEGPL2cFhBUjNSvBkaRU7TQUW9G6poakNvqcERZYxk9CKVXTlDbConXNSQMFv/Q5IyzIU1kJjnYdUJ2UNs6ideWkAX3OCAvKRnXJwzzmdUDlKW20RevKSQMacRAWFFJSCY5/HVDJyI+5aF0yaUCfM8KC6mFvHdvxrwMqSmkjL1oXJdoRzm8AwooOayU4lXVA1pQ2/qK1ddIgzvkNhAXRsVsJTmUd0G5Km0TRenfSgD5nhAV1yVWC01oHlHNrKsM+N2lAnzPCggYoTskGTFrrgLZTWnnW95vi3ao2e2DQ54ywoMkf5vjYJCkprgPKUtq0sqps0oA+53gfh9yCaNHgWSwWKT7qNdoVIa7X6+SK1rrbr6+v9DlHy2C1WnEXokWDR4M/xb4Q2cqYK63Lfn9/15VTvUJYAABdoYYFAAgLAABhAQDCAgBAWAAACAsAEBYAAMICAEBYAICwAAAQFgAAwgIAhAUAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABIF95wmyrv7+9fv34dDofj8Vj/HY1GEb5m+cePH/rv6P/p8Y3Kuy8MPj095VOEsCAQy+XydYP+8Z9o+fhYg/D6+joSc63Xa3Nt2RWKs7Oz8/Nz/TfwxXz79i33lb/++otPESkhBGKxWOS+8vb2Jn/FE2c9Pj5aPatQiz8fEGHFznw+f3l5afGDV1dXuWRqtWH3Oy8vL7tc4e/fv5+enlr84HQ6nUwmuYzVKiyFVxGmroCwII9stZ0c1Wc2m+W+YtWKUsKOqVaWxDVlPB7vRlKK+Kxq63iFsmrNbz7dwAcPYUGfaNBagxd5bTAYxBNO7n5RPu1oEP3u9/f39SPTLqdrFBHf3t7yyURYYOHh4aEooXt+fm6XwblFV/L6+rr7dX3RzBtWMhqNOqa3PUbEgLCgIrw6ss3c18/gAoRXRlhWkflDp7NmpiW3S5l1j8svAGHtFb9+/Yr8CheLRWArlaD8sShK2l3okOWt5HcIC452p/OtY2m3cK5nfhYUeE1STk5OcmfXGXcjlNPT0+ySsh80/3h/fy/KWAEQVkrsFmX+/vvv3W8rebzXrze3Y7Jh+ys/fvzYVWRJMVu2KkrBXEn/48ePJVHS9fV19mCQRmsW9QBhgWMeHx/rV6l6QZmg7/BqMBiUT/zJVv6WMpyfn5vylu8nByCstFGqZa1ka/zc3NwU/dR6vf7586f1p3xcZNEwVsyYSyFzQdxuUBbnavjpdGpsiLAQFpTx69cva6qlNLMkoCiaT/QxS6hzWetr5Z2DRbN4rqKkTHy5azN9l9b/BQgLOqERZV3ariFXvpzKmkLqp5yvL1UoZw0A5YXdZfrbFNWYXCk1qxvmyoW6CVmt0FpJhDih+TmBZPDu7s76v66ursolYtWcjyWjRQGgbFXeObjbwn20mSeNZ8k+ICxw4IKsnlISl1m/7nxrl6JkcDgcKh8s+cGidaThN58BhAVusEYoSrUqO1eswctwg+PP0AZrAFgeKFmvEGFBCdSwwrFarYpWV2+TK6l8/PhRccp8Pt/O7ypTLZ3LGryUhzxH9Qo6ud9CYvr8+bPirO25s7MN5amudd8F/VSLLDJDdymr3Cn5ZSsbhAU9BFk3NzdyzcPDg5IvhUgXFxflP1K0HspTz7MiKV2SDq7zmqnJ6+vrykSy3f4z5UsKtidGlTIjLIQF/WAmthSVVA7Cog6eyuClu1jlKRlnvV6Xn6iog6f7ll6AsCAi6oRIReFVZT7oSqyV31MUXukKmR+EEii67xtF4ZUSyUiCl5IG6TBKBYQFsVBU4ul9P7ztALAovPKUsSpF5YNBSgjN0GjMLfW0yiX3PY3GcFGDdP3aUO7sOuDubGPWA1w/B8woaZCuud17/d0asn8gLIQFbYSVm92zCqtyBrAkjija6lPhVc3aUO7sz8/Pu8KqXLNaQtGq/frH7HG3BiAlBGcUrYmvXHEejMViUbRDTuCM1fcm0YCwoMIFRb04stj7+3vvVyhVlSyh8pq1Rb6PGCCsw0KqKnGBhFW0z0ww5KPy9+UE3liZxRMIC/rh9fW1qDC0rYMeC8+K737+/Fm+dfJyg6cL2N3EJs4NAgFhJS+jX79+lfhILrDu2LkbZBXV47uHTspGv3z5UvI9+hXqJGUKEj2lrrvzBiU7oELMMEsYqaeenp6y15EWrUjQ8P7+/XvNd2rpgJPJxNXaUfNS++1O4xJbWbflsv7WigSdV991l3ZvEW8eRFjgBkUrdRxkbNWonKxI7fPnz93LNzpOTUvKVo3KZxJW99fZ59h93TzrHkgJwWP+0sJW1jGpxFA/FeYKK21VZA1luF3KbSb0U/77Y8ORbYqQ8AphQeMxX76v0za5Iaef/fr1a4mtZrPZH3/8UXSomu+O1si3LnOvYzFTWSu31cePH63ikFV//vzZupiln9WpzT485iu7FXciLFJCqDWkNXhMc3Kjt41uf7N+vLzKrpTKlIHOz8+tyijZr0qS0vGfNzR93Xx2SebdYiU+PT4+/vDhw9Fmsaj1LWT6WUWC+h5r9qr/u95Q+ZLUk5MTiW938rH1FOFudgkIaz/5/fu3dXA2Qq4pj48UO2Sx1dXVlU5qVZvVWVLAv//+2/EKK30qWym2MiYykwDW1QxFzrK+ibrwwz0c7n7z9gu+mlIzOAWElTwtBomGlhnSQpFC5XSbTrE9wvUPhTBFY0zO0jHlrOz7FY9ohDcNrKbTqblCHUdJbvl2oMZW25mgrFokIOOsm5ub7e9vup3D7h3LzZPG0AMACCs66utA3yZPSQTZQNWQvru7K88ic7YyKCssWZBpFiXc3t5mJxqPx3WucNukWbarKyyfsty1lfll5awizZld8GXVbNvCRvVyXdXu754TVmVeCQjrQDFbnte3gHn+11nHZLWVQRmiEr0i2WlIf/nyRcowW33q1OWrELbjqeyLlYFVka0MFxcXskZJI6RSaZ1X0aKRfh3j64aMRiOrjLZvr4QYuCUIEFbaWaHVU1nWNp/PK8vzJbYyiaFMoTil5DjSjdmPtGgPA6unzICvsyarxFaZVctXaUjZspWcVXQQc/H6v/KUSRut+5rqF/nnn3/4KCIsqCangyIL1MywsoNs16GKIg59T0nJfzabGV3qONJfdl7921zkbuWoZuhnDpKrQ1mtqu8psaoOYqY+s+PoH7qf0pPxlNXCu0czqWX5ZZfsPKPLMD09/toeAWHFgtFBpqqS+nHN0rJEU7ORRQNVUYzVWZkLsuGqcZ4roll/lzor5vVr6rx1vlPnKooE5YjtZWW3t7dZGFWEjL+b25oocr1elwur5LdW7mz+gnXe3ggIK3lKcrecDvSd8kvRk1xjWCFJo8bAImfpOO0kqKhNl1FSA9LwbrR7apGzTPVqW4KVh7K2i5vfq3wRVjyv6gD7J59bEDjIqv+dCiWsO4XqIf/p06cW40rO+vPPP7c3KpB0cgFFo05DKcC6pN4UrVrs9ayL+fz583axT4Fe0+1Sla7uRklm7vWodH2JLlv3nE9p1COIzRgjJ9eR1zRs2SVbiS7lORmfuTWxdcpqlca5v7/Xby2DtO7WNhucZh9viTVbG6EgbvtjbypTyoVzb0VUXpmL9RSdsfMfwoJazpJfZCtXjbvz+dzha7WMs8yiKlcplY5pVlp0OYiZaTUvzeaDhLAgEMvlMvLaij5IcQYgiiitSSIgLAAAj1B0BwCEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABAWAAACAsAAGEBAMICAEBYAAAICwAQFgAAwgIAQFgAgLAAABAWAADCAgCEBQCAsAAAEBYAICwAAIQFAICwAABhAQAgLABAWNwCAEBYAAAICwAQFgAAwgIAQFgAgLAAABAWAADCAgCEBQCAsAAAEBYAICwAAIQFAICwAABhAQAgLAAAhAUACAsAAGEBACAsAEBYAAAICwAAYQEAwgIAQFgAAAgLABAWAADCAgCEBQCAsAAAEBYAICwAAIQFAICwAABhAQAgLAAAhAUACAsAAGEBACAsAEBYAAAICwAAYQEAwgIAQFgAAAgLABAWAADCAgBAWACAsAAAEBYAAMICAIQFAICwAAAQFgAgLAAAhAUACAsAIA3+T4ABAKDsGlePpqaeAAAAAElFTkSuQmCC"

/***/ }),

/***/ 16:
/*!********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/onfire.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
               * mini (~300 b) version for event-emitter.
               */

Object.defineProperty(exports, "__esModule", {
  value: true });

/**
                   * const ee = new OnFire();
                   *
                   * ee.on('click', () => {});
                   *
                   * ee.on('mouseover', () => {});
                   *
                   * ee.emit('click', 1, 2, 3);
                   * ee.fire('mouseover', {}); // same with emit
                   *
                   * ee.off();
                   */

var OnFire =
/** @class */
function () {
  function OnFire() {
    // ????????????????????????
    this.es = {}; // cname of fire

    this.emit = this.fire;
  }

  OnFire.prototype.on = function (eventName, cb, once) {
    if (once === void 0) {
      once = false;
    }

    if (!this.es[eventName]) {
      this.es[eventName] = [];
    }

    this.es[eventName].push({
      cb: cb,
      once: once });

  };

  OnFire.prototype.once = function (eventName, cb) {
    this.on(eventName, cb, true);
  };

  OnFire.prototype.fire = function (eventName) {
    var params = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }

    var listeners = this.es[eventName] || [];

    for (var i = 0; i < listeners.length; i++) {
      var _a = listeners[i],
      cb = _a.cb,
      once = _a.once;
      cb.apply(this, params);

      if (once) {
        listeners.splice(i, 1);
        i--;
      }
    }
  };

  OnFire.prototype.off = function (eventName, cb) {
    // clean all
    if (eventName === undefined) {
      this.es = {};
    } else {
      if (cb === undefined) {
        // clean the eventName's listeners
        delete this.es[eventName];
      } else {
        var listeners = this.es[eventName] || []; // clean the event and listener

        for (var i = 0; i < listeners.length; i++) {
          if (listeners[i].cb === cb) {
            listeners.splice(i, 1);
            i--;
          }
        }
      }
    }
  };

  OnFire.ver = "2.0.0";
  return OnFire;
}();

exports.default = OnFire;

/***/ }),

/***/ 17:
/*!**********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/gotopage.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.gotopage = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ../config.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
/*?????????????????????*/
var tabBarLinks = [
'/pages/index/index',
'/pages/product/list/takeaway',
'/pages/order/myorder',
'/pages/user/index/index'];


/*????????????,???????????????*/
var shareLinks = [
'/pages/plus/assemble/fight-group-detail/fight-group-detail',
'/pages/plus/bargain/haggle/haggle',
'/pages/user/invite/invite',
'/pages/product/detail/detail'];


/*
                                  * ????????????
                                  */
var gotopage = function gotopage(url) {
  if (!url || url.length == 0) {
    return false;
  }

  if (url.substr(0, 1) !== '/') {
    url = '/' + url;
  }
  var p = url;
  if (url.indexOf('?') != -1) {
    p = url.substr(0, url.indexOf('?'));
  }
  // tabBar??????
  if (tabBarLinks.indexOf(p) > -1) {
    uni.reLaunch({
      url: url });

  } else {
    if (false) {}
    // ????????????
    uni.navigateTo({
      url: url });

  }
};exports.gotopage = gotopage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/store/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);var _default =

new _vuex.default.Store({
  // ??????????????????
  state: { // state???????????????????????????????????????????????????
    theme: 'red_theme' },

  // ????????????????????????methods{this.$store.commit("changeTheme")}
  mutations: {
    changeTheme: function changeTheme(state, value) {
      state.theme = value;
    } },

  getters: {},


  actions: {} });exports.default = _default;

/***/ }),

/***/ 19:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('?????? log end ??????');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 273:
/*!*****************************************************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/components/mpvue-citypicker/city-data/province.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var provinceData = [{
  "label": "?????????",
  "value": 1 },
{
  "label": "?????????",
  "value": 19 },
{
  "label": "?????????",
  "value": 37 },
{
  "label": "?????????",
  "value": 220 },
{
  "label": "??????????????????",
  "value": 351 },
{
  "label": "?????????",
  "value": 466 },
{
  "label": "?????????",
  "value": 585 },
{
  "label": "????????????",
  "value": 655 },
{
  "label": "?????????",
  "value": 801 },
{
  "label": "?????????",
  "value": 820 },
{
  "label": "?????????",
  "value": 933 },
{
  "label": "?????????",
  "value": 1046 },
{
  "label": "?????????",
  "value": 1168 },
{
  "label": "?????????",
  "value": 1263 },
{
  "label": "?????????",
  "value": 1375 },
{
  "label": "?????????",
  "value": 1532 },
{
  "label": "?????????",
  "value": 1709 },
{
  "label": "?????????",
  "value": 1827 },
{
  "label": "?????????",
  "value": 1964 },
{
  "label": "?????????????????????",
  "value": 2162 },
{
  "label": "?????????",
  "value": 2291 },
{
  "label": "?????????",
  "value": 2323 },
{
  "label": "?????????",
  "value": 2367 },
{
  "label": "?????????",
  "value": 2572 },
{
  "label": "?????????",
  "value": 2670 },
{
  "label": "???????????????",
  "value": 2816 },
{
  "label": "?????????",
  "value": 2898 },
{
  "label": "?????????",
  "value": 3022 },
{
  "label": "?????????",
  "value": 3126 },
{
  "label": "?????????????????????",
  "value": 3178 },
{
  "label": "????????????????????????",
  "value": 3206 },
{
  "label": "?????????",
  "value": 3325 },
{
  "label": "?????????????????????",
  "value": 3716 },
{
  "label": "?????????????????????",
  "value": 3738 }];var _default =

provinceData;exports.default = _default;

/***/ }),

/***/ 274:
/*!*************************************************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/components/mpvue-citypicker/city-data/city.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var cityData = [
[{
  "label": "?????????",
  "value": 2 }],

[{
  "label": "?????????",
  "value": 20 }],

[{
  "label": "????????????",
  "value": 38 },
{
  "label": "?????????",
  "value": 61 },
{
  "label": "????????????",
  "value": 76 },
{
  "label": "?????????",
  "value": 84 },
{
  "label": "?????????",
  "value": 104 },
{
  "label": "?????????",
  "value": 124 },
{
  "label": "????????????",
  "value": 150 },
{
  "label": "?????????",
  "value": 168 },
{
  "label": "?????????",
  "value": 180 },
{
  "label": "?????????",
  "value": 197 },
{
  "label": "?????????",
  "value": 208 }],

[{
  "label": "?????????",
  "value": 221 },
{
  "label": "?????????",
  "value": 232 },
{
  "label": "?????????",
  "value": 244 },
{
  "label": "?????????",
  "value": 250 },
{
  "label": "?????????",
  "value": 264 },
{
  "label": "?????????",
  "value": 271 },
{
  "label": "?????????",
  "value": 278 },
{
  "label": "?????????",
  "value": 290 },
{
  "label": "?????????",
  "value": 304 },
{
  "label": "?????????",
  "value": 319 },
{
  "label": "?????????",
  "value": 337 }],

[{
  "label": "???????????????",
  "value": 352 },
{
  "label": "?????????",
  "value": 362 },
{
  "label": "?????????",
  "value": 372 },
{
  "label": "?????????",
  "value": 376 },
{
  "label": "?????????",
  "value": 389 },
{
  "label": "???????????????",
  "value": 398 },
{
  "label": "???????????????",
  "value": 407 },
{
  "label": "???????????????",
  "value": 422 },
{
  "label": "???????????????",
  "value": 430 },
{
  "label": "?????????",
  "value": 442 },
{
  "label": "???????????????",
  "value": 449 },
{
  "label": "????????????",
  "value": 462 }],

[{
  "label": "?????????",
  "value": 467 },
{
  "label": "?????????",
  "value": 481 },
{
  "label": "?????????",
  "value": 492 },
{
  "label": "?????????",
  "value": 500 },
{
  "label": "?????????",
  "value": 508 },
{
  "label": "?????????",
  "value": 515 },
{
  "label": "?????????",
  "value": 522 },
{
  "label": "?????????",
  "value": 530 },
{
  "label": "?????????",
  "value": 537 },
{
  "label": "?????????",
  "value": 545 },
{
  "label": "?????????",
  "value": 553 },
{
  "label": "?????????",
  "value": 558 },
{
  "label": "?????????",
  "value": 566 },
{
  "label": "????????????",
  "value": 574 },
{
  "label": "????????????",
  "value": 581 }],

[{
  "label": "?????????",
  "value": 586 },
{
  "label": "?????????",
  "value": 597 },
{
  "label": "?????????",
  "value": 607 },
{
  "label": "?????????",
  "value": 614 },
{
  "label": "?????????",
  "value": 619 },
{
  "label": "?????????",
  "value": 627 },
{
  "label": "?????????",
  "value": 634 },
{
  "label": "?????????",
  "value": 640 },
{
  "label": "????????????????????????",
  "value": 646 }],

[{
  "label": "????????????",
  "value": 656 },
{
  "label": "???????????????",
  "value": 675 },
{
  "label": "?????????",
  "value": 692 },
{
  "label": "?????????",
  "value": 702 },
{
  "label": "????????????",
  "value": 711 },
{
  "label": "?????????",
  "value": 720 },
{
  "label": "?????????",
  "value": 730 },
{
  "label": "????????????",
  "value": 748 },
{
  "label": "????????????",
  "value": 759 },
{
  "label": "????????????",
  "value": 764 },
{
  "label": "?????????",
  "value": 775 },
{
  "label": "?????????",
  "value": 782 },
{
  "label": "??????????????????",
  "value": 793 }],

[{
  "label": "?????????",
  "value": 802 }],

[{
  "label": "?????????",
  "value": 821 },
{
  "label": "?????????",
  "value": 833 },
{
  "label": "?????????",
  "value": 842 },
{
  "label": "?????????",
  "value": 853 },
{
  "label": "?????????",
  "value": 861 },
{
  "label": "?????????",
  "value": 871 },
{
  "label": "????????????",
  "value": 880 },
{
  "label": "?????????",
  "value": 887 },
{
  "label": "?????????",
  "value": 896 },
{
  "label": "?????????",
  "value": 906 },
{
  "label": "?????????",
  "value": 913 },
{
  "label": "?????????",
  "value": 920 },
{
  "label": "?????????",
  "value": 927 }],

[{
  "label": "?????????",
  "value": 934 },
{
  "label": "?????????",
  "value": 948 },
{
  "label": "?????????",
  "value": 960 },
{
  "label": "?????????",
  "value": 972 },
{
  "label": "?????????",
  "value": 980 },
{
  "label": "?????????",
  "value": 986 },
{
  "label": "?????????",
  "value": 993 },
{
  "label": "?????????",
  "value": 1003 },
{
  "label": "?????????",
  "value": 1010 },
{
  "label": "?????????",
  "value": 1015 },
{
  "label": "?????????",
  "value": 1025 },
{
  "label": "??????????????????",
  "value": 1035 }],

[{
  "label": "?????????",
  "value": 1047 },
{
  "label": "?????????",
  "value": 1057 },
{
  "label": "?????????",
  "value": 1066 },
{
  "label": "?????????",
  "value": 1074 },
{
  "label": "????????????",
  "value": 1081 },
{
  "label": "?????????",
  "value": 1088 },
{
  "label": "?????????",
  "value": 1093 },
{
  "label": "?????????",
  "value": 1098 },
{
  "label": "?????????",
  "value": 1110 },
{
  "label": "?????????",
  "value": 1118 },
{
  "label": "?????????",
  "value": 1127 },
{
  "label": "?????????",
  "value": 1136 },
{
  "label": "?????????",
  "value": 1142 },
{
  "label": "?????????",
  "value": 1150 },
{
  "label": "?????????",
  "value": 1155 },
{
  "label": "?????????",
  "value": 1160 }],

[{
  "label": "?????????",
  "value": 1169 },
{
  "label": "?????????",
  "value": 1183 },
{
  "label": "?????????",
  "value": 1190 },
{
  "label": "?????????",
  "value": 1196 },
{
  "label": "?????????",
  "value": 1209 },
{
  "label": "?????????",
  "value": 1222 },
{
  "label": "?????????",
  "value": 1234 },
{
  "label": "?????????",
  "value": 1245 },
{
  "label": "?????????",
  "value": 1253 }],

[{
  "label": "?????????",
  "value": 1264 },
{
  "label": "????????????",
  "value": 1274 },
{
  "label": "?????????",
  "value": 1279 },
{
  "label": "?????????",
  "value": 1285 },
{
  "label": "?????????",
  "value": 1299 },
{
  "label": "?????????",
  "value": 1302 },
{
  "label": "?????????",
  "value": 1306 },
{
  "label": "?????????",
  "value": 1325 },
{
  "label": "?????????",
  "value": 1339 },
{
  "label": "?????????",
  "value": 1350 },
{
  "label": "?????????",
  "value": 1362 }],

[{
  "label": "?????????",
  "value": 1376 },
{
  "label": "?????????",
  "value": 1387 },
{
  "label": "?????????",
  "value": 1399 },
{
  "label": "?????????",
  "value": 1408 },
{
  "label": "?????????",
  "value": 1415 },
{
  "label": "?????????",
  "value": 1421 },
{
  "label": "?????????",
  "value": 1434 },
{
  "label": "?????????",
  "value": 1447 },
{
  "label": "?????????",
  "value": 1459 },
{
  "label": "?????????",
  "value": 1466 },
{
  "label": "?????????",
  "value": 1471 },
{
  "label": "?????????",
  "value": 1476 },
{
  "label": "?????????",
  "value": 1479 },
{
  "label": "?????????",
  "value": 1492 },
{
  "label": "?????????",
  "value": 1504 },
{
  "label": "?????????",
  "value": 1513 },
{
  "label": "?????????",
  "value": 1522 }],

[{
  "label": "?????????",
  "value": 1533 },
{
  "label": "?????????",
  "value": 1546 },
{
  "label": "?????????",
  "value": 1556 },
{
  "label": "????????????",
  "value": 1572 },
{
  "label": "?????????",
  "value": 1583 },
{
  "label": "?????????",
  "value": 1593 },
{
  "label": "?????????",
  "value": 1599 },
{
  "label": "?????????",
  "value": 1612 },
{
  "label": "?????????",
  "value": 1623 },
{
  "label": "?????????",
  "value": 1630 },
{
  "label": "?????????",
  "value": 1637 },
{
  "label": "????????????",
  "value": 1643 },
{
  "label": "?????????",
  "value": 1650 },
{
  "label": "?????????",
  "value": 1664 },
{
  "label": "?????????",
  "value": 1674 },
{
  "label": "?????????",
  "value": 1685 },
{
  "label": "????????????",
  "value": 1696 },
{
  "label": "????????????",
  "value": 1707 }],

[{
  "label": "?????????",
  "value": 1710 },
{
  "label": "?????????",
  "value": 1724 },
{
  "label": "?????????",
  "value": 1731 },
{
  "label": "?????????",
  "value": 1740 },
{
  "label": "?????????",
  "value": 1754 },
{
  "label": "?????????",
  "value": 1764 },
{
  "label": "?????????",
  "value": 1768 },
{
  "label": "?????????",
  "value": 1774 },
{
  "label": "?????????",
  "value": 1782 },
{
  "label": "?????????",
  "value": 1791 },
{
  "label": "?????????",
  "value": 1802 },
{
  "label": "?????????",
  "value": 1809 },
{
  "label": "??????????????????????????????",
  "value": 1813 },
{
  "label": "????????????",
  "value": 1822 }],

[{
  "label": "?????????",
  "value": 1828 },
{
  "label": "?????????",
  "value": 1838 },
{
  "label": "?????????",
  "value": 1848 },
{
  "label": "?????????",
  "value": 1854 },
{
  "label": "?????????",
  "value": 1867 },
{
  "label": "?????????",
  "value": 1880 },
{
  "label": "?????????",
  "value": 1890 },
{
  "label": "????????????",
  "value": 1900 },
{
  "label": "?????????",
  "value": 1905 },
{
  "label": "?????????",
  "value": 1912 },
{
  "label": "?????????",
  "value": 1924 },
{
  "label": "?????????",
  "value": 1936 },
{
  "label": "?????????",
  "value": 1949 },
{
  "label": "??????????????????????????????",
  "value": 1955 }],

[{
  "label": "?????????",
  "value": 1965 },
{
  "label": "?????????",
  "value": 1977 },
{
  "label": "?????????",
  "value": 1988 },
{
  "label": "?????????",
  "value": 1999 },
{
  "label": "?????????",
  "value": 2003 },
{
  "label": "?????????",
  "value": 2011 },
{
  "label": "?????????",
  "value": 2017 },
{
  "label": "?????????",
  "value": 2025 },
{
  "label": "?????????",
  "value": 2035 },
{
  "label": "?????????",
  "value": 2041 },
{
  "label": "?????????",
  "value": 2050 },
{
  "label": "?????????",
  "value": 2056 },
{
  "label": "?????????",
  "value": 2065 },
{
  "label": "?????????",
  "value": 2070 },
{
  "label": "?????????",
  "value": 2077 },
{
  "label": "?????????",
  "value": 2082 },
{
  "label": "?????????",
  "value": 2091 },
{
  "label": "?????????",
  "value": 2123 },
{
  "label": "?????????",
  "value": 2146 },
{
  "label": "?????????",
  "value": 2150 },
{
  "label": "?????????",
  "value": 2156 }],

[{
  "label": "?????????",
  "value": 2163 },
{
  "label": "?????????",
  "value": 2177 },
{
  "label": "?????????",
  "value": 2189 },
{
  "label": "?????????",
  "value": 2207 },
{
  "label": "?????????",
  "value": 2215 },
{
  "label": "????????????",
  "value": 2220 },
{
  "label": "?????????",
  "value": 2225 },
{
  "label": "?????????",
  "value": 2230 },
{
  "label": "?????????",
  "value": 2236 },
{
  "label": "?????????",
  "value": 2245 },
{
  "label": "?????????",
  "value": 2258 },
{
  "label": "?????????",
  "value": 2264 },
{
  "label": "?????????",
  "value": 2276 },
{
  "label": "?????????",
  "value": 2283 }],

[{
  "label": "?????????",
  "value": 2292 },
{
  "label": "?????????",
  "value": 2297 },
{
  "label": "?????????",
  "value": 2302 },
{
  "label": "????????????",
  "value": 2306 }],

[{
  "label": "?????????",
  "value": 2324 },
{
  "label": "????????????",
  "value": 2363 }],

[{
  "label": "?????????",
  "value": 2368 },
{
  "label": "?????????",
  "value": 2388 },
{
  "label": "????????????",
  "value": 2395 },
{
  "label": "?????????",
  "value": 2401 },
{
  "label": "?????????",
  "value": 2409 },
{
  "label": "?????????",
  "value": 2416 },
{
  "label": "?????????",
  "value": 2426 },
{
  "label": "?????????",
  "value": 2434 },
{
  "label": "?????????",
  "value": 2440 },
{
  "label": "?????????",
  "value": 2446 },
{
  "label": "?????????",
  "value": 2458 },
{
  "label": "?????????",
  "value": 2468 },
{
  "label": "?????????",
  "value": 2475 },
{
  "label": "?????????",
  "value": 2486 },
{
  "label": "?????????",
  "value": 2493 },
{
  "label": "?????????",
  "value": 2501 },
{
  "label": "?????????",
  "value": 2510 },
{
  "label": "?????????",
  "value": 2516 },
{
  "label": "???????????????????????????",
  "value": 2521 },
{
  "label": "?????????????????????",
  "value": 2535 },
{
  "label": "?????????????????????",
  "value": 2554 }],

[{
  "label": "?????????",
  "value": 2573 },
{
  "label": "????????????",
  "value": 2584 },
{
  "label": "?????????",
  "value": 2589 },
{
  "label": "?????????",
  "value": 2604 },
{
  "label": "?????????",
  "value": 2611 },
{
  "label": "?????????",
  "value": 2620 },
{
  "label": "?????????????????????????????????",
  "value": 2631 },
{
  "label": "??????????????????????????????",
  "value": 2640 },
{
  "label": "??????????????????????????????",
  "value": 2657 }],

[{
  "label": "?????????",
  "value": 2671 },
{
  "label": "?????????",
  "value": 2686 },
{
  "label": "?????????",
  "value": 2696 },
{
  "label": "?????????",
  "value": 2706 },
{
  "label": "?????????",
  "value": 2712 },
{
  "label": "?????????",
  "value": 2724 },
{
  "label": "?????????",
  "value": 2730 },
{
  "label": "?????????",
  "value": 2741 },
{
  "label": "?????????????????????",
  "value": 2750 },
{
  "label": "??????????????????????????????",
  "value": 2761 },
{
  "label": "???????????????????????????",
  "value": 2775 },
{
  "label": "???????????????????????????",
  "value": 2784 },
{
  "label": "?????????????????????",
  "value": 2788 },
{
  "label": "??????????????????????????????",
  "value": 2801 },
{
  "label": "????????????????????????",
  "value": 2807 },
{
  "label": "?????????????????????",
  "value": 2812 }],

[{
  "label": "?????????",
  "value": 2817 },
{
  "label": "????????????",
  "value": 2826 },
{
  "label": "?????????",
  "value": 2845 },
{
  "label": "????????????",
  "value": 2857 },
{
  "label": "????????????",
  "value": 2870 },
{
  "label": "????????????",
  "value": 2882 },
{
  "label": "????????????",
  "value": 2890 }],

[{
  "label": "?????????",
  "value": 2899 },
{
  "label": "?????????",
  "value": 2913 },
{
  "label": "?????????",
  "value": 2918 },
{
  "label": "?????????",
  "value": 2931 },
{
  "label": "?????????",
  "value": 2946 },
{
  "label": "?????????",
  "value": 2958 },
{
  "label": "?????????",
  "value": 2972 },
{
  "label": "?????????",
  "value": 2984 },
{
  "label": "?????????",
  "value": 2997 },
{
  "label": "?????????",
  "value": 3008 },
{
  "label": "????????????",
  "value": 3016 }],

[{
  "label": "?????????",
  "value": 3023 },
{
  "label": "????????????",
  "value": 3032 },
{
  "label": "?????????",
  "value": 3036 },
{
  "label": "?????????",
  "value": 3039 },
{
  "label": "?????????",
  "value": 3045 },
{
  "label": "?????????",
  "value": 3053 },
{
  "label": "?????????",
  "value": 3058 },
{
  "label": "?????????",
  "value": 3065 },
{
  "label": "?????????",
  "value": 3073 },
{
  "label": "?????????",
  "value": 3081 },
{
  "label": "?????????",
  "value": 3090 },
{
  "label": "?????????",
  "value": 3098 },
{
  "label": "?????????????????????",
  "value": 3108 },
{
  "label": "?????????????????????",
  "value": 3117 }],

[{
  "label": "?????????",
  "value": 3127 },
{
  "label": "?????????",
  "value": 3135 },
{
  "label": "?????????????????????",
  "value": 3142 },
{
  "label": "?????????????????????",
  "value": 3147 },
{
  "label": "?????????????????????",
  "value": 3152 },
{
  "label": "?????????????????????",
  "value": 3158 },
{
  "label": "?????????????????????",
  "value": 3165 },
{
  "label": "??????????????????????????????",
  "value": 3172 }],

[{
  "label": "?????????",
  "value": 3179 },
{
  "label": "????????????",
  "value": 3186 },
{
  "label": "?????????",
  "value": 3190 },
{
  "label": "?????????",
  "value": 3196 },
{
  "label": "?????????",
  "value": 3202 }],

[{
  "label": "???????????????",
  "value": 3207 },
{
  "label": "???????????????",
  "value": 3216 },
{
  "label": "???????????????",
  "value": 3221 },
{
  "label": "????????????",
  "value": 3225 },
{
  "label": "?????????????????????",
  "value": 3229 },
{
  "label": "???????????????????????????",
  "value": 3237 },
{
  "label": "???????????????????????????",
  "value": 3242 },
{
  "label": "???????????????",
  "value": 3252 },
{
  "label": "?????????????????????????????????",
  "value": 3262 },
{
  "label": "????????????",
  "value": 3267 },
{
  "label": "????????????",
  "value": 3280 },
{
  "label": "????????????????????????",
  "value": 3289 },
{
  "label": "????????????",
  "value": 3301 },
{
  "label": "???????????????",
  "value": 3309 },
{
  "label": "????????????",
  "value": 3317 }],

[{
  "label": "?????????",
  "value": 3326 },
{
  "label": "?????????",
  "value": 3339 },
{
  "label": "?????????",
  "value": 3378 },
{
  "label": "?????????",
  "value": 3386 },
{
  "label": "?????????",
  "value": 3416 },
{
  "label": "?????????",
  "value": 3454 },
{
  "label": "?????????",
  "value": 3458 },
{
  "label": "?????????",
  "value": 3461 },
{
  "label": "?????????",
  "value": 3491 },
{
  "label": "?????????",
  "value": 3504 },
{
  "label": "?????????",
  "value": 3518 },
{
  "label": "?????????",
  "value": 3532 },
{
  "label": "?????????",
  "value": 3551 },
{
  "label": "?????????",
  "value": 3578 },
{
  "label": "?????????",
  "value": 3592 },
{
  "label": "?????????",
  "value": 3613 },
{
  "label": "?????????",
  "value": 3632 },
{
  "label": "?????????",
  "value": 3666 },
{
  "label": "?????????",
  "value": 3683 },
{
  "label": "?????????",
  "value": 3697 },
{
  "label": "?????????",
  "value": 3704 },
{
  "label": "?????????",
  "value": 3711 }],

[{
  "label": "?????????",
  "value": 3717 },
{
  "label": "??????",
  "value": 3722 },
{
  "label": "??????",
  "value": 3728 }],

[{
  "label": "????????????",
  "value": 3739 },
{
  "label": "?????????",
  "value": 3745 },
{
  "label": "?????????",
  "value": 3747 }]];var _default =


cityData;exports.default = _default;

/***/ }),

/***/ 275:
/*!*************************************************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/components/mpvue-citypicker/city-data/area.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var areaData = [
[
[{
  "label": "?????????",
  "value": 3 },
{
  "label": "?????????",
  "value": 4 },
{
  "label": "?????????",
  "value": 5 },
{
  "label": "?????????",
  "value": 6 },
{
  "label": "????????????",
  "value": 7 },
{
  "label": "?????????",
  "value": 8 },
{
  "label": "????????????",
  "value": 9 },
{
  "label": "?????????",
  "value": 10 },
{
  "label": "?????????",
  "value": 11 },
{
  "label": "?????????",
  "value": 12 },
{
  "label": "?????????",
  "value": 13 },
{
  "label": "?????????",
  "value": 14 },
{
  "label": "?????????",
  "value": 15 },
{
  "label": "?????????",
  "value": 16 },
{
  "label": "?????????",
  "value": 17 },
{
  "label": "?????????",
  "value": 18 }]],


[
[{
  "label": "?????????",
  "value": 21 },
{
  "label": "?????????",
  "value": 22 },
{
  "label": "?????????",
  "value": 23 },
{
  "label": "?????????",
  "value": 24 },
{
  "label": "?????????",
  "value": 25 },
{
  "label": "?????????",
  "value": 26 },
{
  "label": "?????????",
  "value": 27 },
{
  "label": "?????????",
  "value": 28 },
{
  "label": "?????????",
  "value": 29 },
{
  "label": "?????????",
  "value": 30 },
{
  "label": "?????????",
  "value": 31 },
{
  "label": "?????????",
  "value": 32 },
{
  "label": "????????????",
  "value": 33 },
{
  "label": "?????????",
  "value": 34 },
{
  "label": "?????????",
  "value": 35 },
{
  "label": "??????",
  "value": 36 }]],


[
[{
  "label": "?????????",
  "value": 39 },
{
  "label": "?????????",
  "value": 40 },
{
  "label": "?????????",
  "value": 41 },
{
  "label": "????????????",
  "value": 42 },
{
  "label": "?????????",
  "value": 43 },
{
  "label": "?????????",
  "value": 44 },
{
  "label": "?????????",
  "value": 45 },
{
  "label": "?????????",
  "value": 46 },
{
  "label": "?????????",
  "value": 47 },
{
  "label": "?????????",
  "value": 48 },
{
  "label": "?????????",
  "value": 49 },
{
  "label": "?????????",
  "value": 50 },
{
  "label": "?????????",
  "value": 51 },
{
  "label": "?????????",
  "value": 52 },
{
  "label": "?????????",
  "value": 53 },
{
  "label": "?????????",
  "value": 54 },
{
  "label": "?????????",
  "value": 55 },
{
  "label": "?????????",
  "value": 56 },
{
  "label": "??????",
  "value": 57 },
{
  "label": "?????????",
  "value": 58 },
{
  "label": "?????????",
  "value": 59 },
{
  "label": "?????????",
  "value": 60 }],

[{
  "label": "?????????",
  "value": 62 },
{
  "label": "?????????",
  "value": 63 },
{
  "label": "?????????",
  "value": 64 },
{
  "label": "?????????",
  "value": 65 },
{
  "label": "?????????",
  "value": 66 },
{
  "label": "?????????",
  "value": 67 },
{
  "label": "????????????",
  "value": 68 },
{
  "label": "??????",
  "value": 69 },
{
  "label": "?????????",
  "value": 70 },
{
  "label": "?????????",
  "value": 71 },
{
  "label": "?????????",
  "value": 72 },
{
  "label": "?????????",
  "value": 73 },
{
  "label": "?????????",
  "value": 74 },
{
  "label": "?????????",
  "value": 75 }],

[{
  "label": "?????????",
  "value": 77 },
{
  "label": "????????????",
  "value": 78 },
{
  "label": "????????????",
  "value": 79 },
{
  "label": "?????????????????????",
  "value": 80 },
{
  "label": "?????????",
  "value": 81 },
{
  "label": "?????????",
  "value": 82 },
{
  "label": "?????????",
  "value": 83 }],

[{
  "label": "?????????",
  "value": 85 },
{
  "label": "?????????",
  "value": 86 },
{
  "label": "?????????",
  "value": 87 },
{
  "label": "????????????",
  "value": 88 },
{
  "label": "?????????",
  "value": 89 },
{
  "label": "?????????",
  "value": 90 },
{
  "label": "?????????",
  "value": 91 },
{
  "label": "?????????",
  "value": 92 },
{
  "label": "??????",
  "value": 93 },
{
  "label": "??????",
  "value": 94 },
{
  "label": "?????????",
  "value": 95 },
{
  "label": "?????????",
  "value": 96 },
{
  "label": "??????",
  "value": 97 },
{
  "label": "?????????",
  "value": 98 },
{
  "label": "?????????",
  "value": 99 },
{
  "label": "?????????",
  "value": 100 },
{
  "label": "??????",
  "value": 101 },
{
  "label": "?????????",
  "value": 102 },
{
  "label": "?????????",
  "value": 103 }],

[{
  "label": "?????????",
  "value": 105 },
{
  "label": "?????????",
  "value": 106 },
{
  "label": "?????????",
  "value": 107 },
{
  "label": "?????????",
  "value": 108 },
{
  "label": "?????????",
  "value": 109 },
{
  "label": "?????????",
  "value": 110 },
{
  "label": "?????????",
  "value": 111 },
{
  "label": "??????",
  "value": 112 },
{
  "label": "?????????",
  "value": 113 },
{
  "label": "?????????",
  "value": 114 },
{
  "label": "?????????",
  "value": 115 },
{
  "label": "?????????",
  "value": 116 },
{
  "label": "?????????",
  "value": 117 },
{
  "label": "?????????",
  "value": 118 },
{
  "label": "??????",
  "value": 119 },
{
  "label": "?????????",
  "value": 120 },
{
  "label": "?????????",
  "value": 121 },
{
  "label": "?????????",
  "value": 122 },
{
  "label": "?????????",
  "value": 123 }],

[{
  "label": "?????????",
  "value": 125 },
{
  "label": "?????????",
  "value": 126 },
{
  "label": "?????????",
  "value": 127 },
{
  "label": "?????????",
  "value": 128 },
{
  "label": "?????????",
  "value": 129 },
{
  "label": "?????????",
  "value": 130 },
{
  "label": "?????????",
  "value": 131 },
{
  "label": "?????????",
  "value": 132 },
{
  "label": "?????????",
  "value": 133 },
{
  "label": "??????",
  "value": 134 },
{
  "label": "?????????",
  "value": 135 },
{
  "label": "?????????",
  "value": 136 },
{
  "label": "?????????",
  "value": 137 },
{
  "label": "?????????",
  "value": 138 },
{
  "label": "?????????",
  "value": 139 },
{
  "label": "??????",
  "value": 140 },
{
  "label": "?????????",
  "value": 141 },
{
  "label": "??????",
  "value": 142 },
{
  "label": "?????????",
  "value": 143 },
{
  "label": "?????????",
  "value": 144 },
{
  "label": "??????",
  "value": 145 },
{
  "label": "?????????",
  "value": 146 },
{
  "label": "?????????",
  "value": 147 },
{
  "label": "?????????",
  "value": 148 },
{
  "label": "????????????",
  "value": 149 }],

[{
  "label": "?????????",
  "value": 151 },
{
  "label": "?????????",
  "value": 152 },
{
  "label": "?????????",
  "value": 153 },
{
  "label": "????????????",
  "value": 154 },
{
  "label": "?????????",
  "value": 155 },
{
  "label": "?????????",
  "value": 156 },
{
  "label": "?????????",
  "value": 157 },
{
  "label": "?????????",
  "value": 158 },
{
  "label": "?????????",
  "value": 159 },
{
  "label": "??????",
  "value": 160 },
{
  "label": "?????????",
  "value": 161 },
{
  "label": "?????????",
  "value": 162 },
{
  "label": "?????????",
  "value": 163 },
{
  "label": "?????????",
  "value": 164 },
{
  "label": "?????????",
  "value": 165 },
{
  "label": "?????????",
  "value": 166 },
{
  "label": "?????????",
  "value": 167 }],

[{
  "label": "?????????",
  "value": 169 },
{
  "label": "?????????",
  "value": 170 },
{
  "label": "??????????????????",
  "value": 171 },
{
  "label": "?????????",
  "value": 172 },
{
  "label": "?????????",
  "value": 173 },
{
  "label": "?????????",
  "value": 174 },
{
  "label": "?????????",
  "value": 175 },
{
  "label": "?????????",
  "value": 176 },
{
  "label": "?????????????????????",
  "value": 177 },
{
  "label": "?????????????????????",
  "value": 178 },
{
  "label": "??????????????????????????????",
  "value": 179 }],

[{
  "label": "?????????",
  "value": 181 },
{
  "label": "?????????",
  "value": 182 },
{
  "label": "??????",
  "value": 183 },
{
  "label": "??????",
  "value": 184 },
{
  "label": "?????????",
  "value": 185 },
{
  "label": "?????????",
  "value": 186 },
{
  "label": "?????????",
  "value": 187 },
{
  "label": "?????????",
  "value": 188 },
{
  "label": "?????????",
  "value": 189 },
{
  "label": "?????????",
  "value": 190 },
{
  "label": "??????",
  "value": 191 },
{
  "label": "?????????????????????",
  "value": 192 },
{
  "label": "?????????",
  "value": 193 },
{
  "label": "?????????",
  "value": 194 },
{
  "label": "?????????",
  "value": 195 },
{
  "label": "?????????",
  "value": 196 }],

[{
  "label": "?????????",
  "value": 198 },
{
  "label": "?????????",
  "value": 199 },
{
  "label": "?????????",
  "value": 200 },
{
  "label": "?????????",
  "value": 201 },
{
  "label": "?????????",
  "value": 202 },
{
  "label": "?????????",
  "value": 203 },
{
  "label": "?????????",
  "value": 204 },
{
  "label": "?????????????????????",
  "value": 205 },
{
  "label": "?????????",
  "value": 206 },
{
  "label": "?????????",
  "value": 207 }],

[{
  "label": "?????????",
  "value": 209 },
{
  "label": "?????????",
  "value": 210 },
{
  "label": "?????????",
  "value": 211 },
{
  "label": "?????????",
  "value": 212 },
{
  "label": "?????????",
  "value": 213 },
{
  "label": "?????????",
  "value": 214 },
{
  "label": "?????????",
  "value": 215 },
{
  "label": "??????",
  "value": 216 },
{
  "label": "?????????",
  "value": 217 },
{
  "label": "?????????",
  "value": 218 },
{
  "label": "?????????",
  "value": 219 }]],


[
[{
  "label": "?????????",
  "value": 222 },
{
  "label": "?????????",
  "value": 223 },
{
  "label": "????????????",
  "value": 224 },
{
  "label": "????????????",
  "value": 225 },
{
  "label": "????????????",
  "value": 226 },
{
  "label": "?????????",
  "value": 227 },
{
  "label": "?????????",
  "value": 228 },
{
  "label": "?????????",
  "value": 229 },
{
  "label": "?????????",
  "value": 230 },
{
  "label": "?????????",
  "value": 231 }],

[{
  "label": "??????",
  "value": 233 },
{
  "label": "??????",
  "value": 234 },
{
  "label": "?????????",
  "value": 235 },
{
  "label": "?????????",
  "value": 236 },
{
  "label": "?????????",
  "value": 237 },
{
  "label": "?????????",
  "value": 238 },
{
  "label": "?????????",
  "value": 239 },
{
  "label": "?????????",
  "value": 240 },
{
  "label": "?????????",
  "value": 241 },
{
  "label": "?????????",
  "value": 242 },
{
  "label": "?????????",
  "value": 243 }],

[{
  "label": "??????",
  "value": 245 },
{
  "label": "??????",
  "value": 246 },
{
  "label": "??????",
  "value": 247 },
{
  "label": "?????????",
  "value": 248 },
{
  "label": "??????",
  "value": 249 }],

[{
  "label": "??????",
  "value": 251 },
{
  "label": "??????",
  "value": 252 },
{
  "label": "?????????",
  "value": 253 },
{
  "label": "?????????",
  "value": 254 },
{
  "label": "?????????",
  "value": 255 },
{
  "label": "?????????",
  "value": 256 },
{
  "label": "?????????",
  "value": 257 },
{
  "label": "?????????",
  "value": 258 },
{
  "label": "?????????",
  "value": 259 },
{
  "label": "?????????",
  "value": 260 },
{
  "label": "??????",
  "value": 261 },
{
  "label": "?????????",
  "value": 262 },
{
  "label": "?????????",
  "value": 263 }],

[{
  "label": "??????",
  "value": 265 },
{
  "label": "?????????",
  "value": 266 },
{
  "label": "?????????",
  "value": 267 },
{
  "label": "?????????",
  "value": 268 },
{
  "label": "?????????",
  "value": 269 },
{
  "label": "?????????",
  "value": 270 }],

[{
  "label": "?????????",
  "value": 272 },
{
  "label": "?????????",
  "value": 273 },
{
  "label": "?????????",
  "value": 274 },
{
  "label": "??????",
  "value": 275 },
{
  "label": "?????????",
  "value": 276 },
{
  "label": "?????????",
  "value": 277 }],

[{
  "label": "?????????",
  "value": 279 },
{
  "label": "?????????",
  "value": 280 },
{
  "label": "?????????",
  "value": 281 },
{
  "label": "?????????",
  "value": 282 },
{
  "label": "?????????",
  "value": 283 },
{
  "label": "?????????",
  "value": 284 },
{
  "label": "?????????",
  "value": 285 },
{
  "label": "??????",
  "value": 286 },
{
  "label": "?????????",
  "value": 287 },
{
  "label": "?????????",
  "value": 288 },
{
  "label": "?????????",
  "value": 289 }],

[{
  "label": "?????????",
  "value": 291 },
{
  "label": "?????????",
  "value": 292 },
{
  "label": "?????????",
  "value": 293 },
{
  "label": "?????????",
  "value": 294 },
{
  "label": "?????????",
  "value": 295 },
{
  "label": "?????????",
  "value": 296 },
{
  "label": "??????",
  "value": 297 },
{
  "label": "?????????",
  "value": 298 },
{
  "label": "??????",
  "value": 299 },
{
  "label": "?????????",
  "value": 300 },
{
  "label": "?????????",
  "value": 301 },
{
  "label": "?????????",
  "value": 302 },
{
  "label": "?????????",
  "value": 303 }],

[{
  "label": "?????????",
  "value": 305 },
{
  "label": "?????????",
  "value": 306 },
{
  "label": "?????????",
  "value": 307 },
{
  "label": "??????",
  "value": 308 },
{
  "label": "?????????",
  "value": 309 },
{
  "label": "?????????",
  "value": 310 },
{
  "label": "?????????",
  "value": 311 },
{
  "label": "?????????",
  "value": 312 },
{
  "label": "?????????",
  "value": 313 },
{
  "label": "?????????",
  "value": 314 },
{
  "label": "?????????",
  "value": 315 },
{
  "label": "?????????",
  "value": 316 },
{
  "label": "?????????",
  "value": 317 },
{
  "label": "?????????",
  "value": 318 }],

[{
  "label": "?????????",
  "value": 320 },
{
  "label": "?????????",
  "value": 321 },
{
  "label": "?????????",
  "value": 322 },
{
  "label": "?????????",
  "value": 323 },
{
  "label": "?????????",
  "value": 324 },
{
  "label": "??????",
  "value": 325 },
{
  "label": "?????????",
  "value": 326 },
{
  "label": "?????????",
  "value": 327 },
{
  "label": "??????",
  "value": 328 },
{
  "label": "?????????",
  "value": 329 },
{
  "label": "?????????",
  "value": 330 },
{
  "label": "??????",
  "value": 331 },
{
  "label": "?????????",
  "value": 332 },
{
  "label": "??????",
  "value": 333 },
{
  "label": "?????????",
  "value": 334 },
{
  "label": "?????????",
  "value": 335 },
{
  "label": "?????????",
  "value": 336 }],

[{
  "label": "?????????",
  "value": 338 },
{
  "label": "?????????",
  "value": 339 },
{
  "label": "?????????",
  "value": 340 },
{
  "label": "??????",
  "value": 341 },
{
  "label": "??????",
  "value": 342 },
{
  "label": "?????????",
  "value": 343 },
{
  "label": "?????????",
  "value": 344 },
{
  "label": "??????",
  "value": 345 },
{
  "label": "?????????",
  "value": 346 },
{
  "label": "?????????",
  "value": 347 },
{
  "label": "?????????",
  "value": 348 },
{
  "label": "?????????",
  "value": 349 },
{
  "label": "?????????",
  "value": 350 }]],


[
[{
  "label": "?????????",
  "value": 353 },
{
  "label": "?????????",
  "value": 354 },
{
  "label": "?????????",
  "value": 355 },
{
  "label": "?????????",
  "value": 356 },
{
  "label": "???????????????",
  "value": 357 },
{
  "label": "????????????",
  "value": 358 },
{
  "label": "???????????????",
  "value": 359 },
{
  "label": "????????????",
  "value": 360 },
{
  "label": "?????????",
  "value": 361 }],

[{
  "label": "?????????",
  "value": 363 },
{
  "label": "????????????",
  "value": 364 },
{
  "label": "?????????",
  "value": 365 },
{
  "label": "?????????",
  "value": 366 },
{
  "label": "??????????????????",
  "value": 367 },
{
  "label": "?????????",
  "value": 368 },
{
  "label": "???????????????",
  "value": 369 },
{
  "label": "?????????",
  "value": 370 },
{
  "label": "???????????????????????????",
  "value": 371 }],

[{
  "label": "????????????",
  "value": 373 },
{
  "label": "?????????",
  "value": 374 },
{
  "label": "?????????",
  "value": 375 }],

[{
  "label": "?????????",
  "value": 377 },
{
  "label": "????????????",
  "value": 378 },
{
  "label": "?????????",
  "value": 379 },
{
  "label": "??????????????????",
  "value": 380 },
{
  "label": "????????????",
  "value": 381 },
{
  "label": "????????????",
  "value": 382 },
{
  "label": "?????????",
  "value": 383 },
{
  "label": "???????????????",
  "value": 384 },
{
  "label": "????????????",
  "value": 385 },
{
  "label": "????????????",
  "value": 386 },
{
  "label": "?????????",
  "value": 387 },
{
  "label": "?????????",
  "value": 388 }],

[{
  "label": "????????????",
  "value": 390 },
{
  "label": "?????????????????????",
  "value": 391 },
{
  "label": "?????????????????????",
  "value": 392 },
{
  "label": "?????????",
  "value": 393 },
{
  "label": "?????????",
  "value": 394 },
{
  "label": "?????????",
  "value": 395 },
{
  "label": "????????????",
  "value": 396 },
{
  "label": "???????????????",
  "value": 397 }],

[{
  "label": "?????????",
  "value": 399 },
{
  "label": "????????????",
  "value": 400 },
{
  "label": "????????????",
  "value": 401 },
{
  "label": "???????????????",
  "value": 402 },
{
  "label": "????????????",
  "value": 403 },
{
  "label": "?????????",
  "value": 404 },
{
  "label": "?????????",
  "value": 405 },
{
  "label": "???????????????",
  "value": 406 }],

[{
  "label": "????????????",
  "value": 408 },
{
  "label": "???????????????",
  "value": 409 },
{
  "label": "?????????",
  "value": 410 },
{
  "label": "?????????????????????????????????",
  "value": 411 },
{
  "label": "??????????????????",
  "value": 412 },
{
  "label": "?????????????????????",
  "value": 413 },
{
  "label": "???????????????",
  "value": 414 },
{
  "label": "??????????????????",
  "value": 415 },
{
  "label": "??????????????????",
  "value": 416 },
{
  "label": "????????????",
  "value": 417 },
{
  "label": "????????????",
  "value": 418 },
{
  "label": "????????????",
  "value": 419 },
{
  "label": "???????????????",
  "value": 420 },
{
  "label": "?????????",
  "value": 421 }],

[{
  "label": "?????????",
  "value": 423 },
{
  "label": "?????????",
  "value": 424 },
{
  "label": "?????????",
  "value": 425 },
{
  "label": "???????????????",
  "value": 426 },
{
  "label": "???????????????",
  "value": 427 },
{
  "label": "???????????????",
  "value": 428 },
{
  "label": "????????????",
  "value": 429 }],

[{
  "label": "?????????",
  "value": 431 },
{
  "label": "?????????",
  "value": 432 },
{
  "label": "?????????",
  "value": 433 },
{
  "label": "?????????",
  "value": 434 },
{
  "label": "?????????",
  "value": 435 },
{
  "label": "?????????",
  "value": 436 },
{
  "label": "?????????????????????",
  "value": 437 },
{
  "label": "?????????????????????",
  "value": 438 },
{
  "label": "?????????????????????",
  "value": 439 },
{
  "label": "????????????",
  "value": 440 },
{
  "label": "?????????",
  "value": 441 }],

[{
  "label": "???????????????",
  "value": 443 },
{
  "label": "????????????",
  "value": 444 },
{
  "label": "?????????????????????",
  "value": 445 },
{
  "label": "?????????????????????",
  "value": 446 },
{
  "label": "????????????",
  "value": 447 },
{
  "label": "?????????",
  "value": 448 }],

[{
  "label": "???????????????",
  "value": 450 },
{
  "label": "???????????????",
  "value": 451 },
{
  "label": "????????????",
  "value": 452 },
{
  "label": "???????????????",
  "value": 453 },
{
  "label": "???????????????",
  "value": 454 },
{
  "label": "??????????????????",
  "value": 455 },
{
  "label": "??????????????????",
  "value": 456 },
{
  "label": "????????????",
  "value": 457 },
{
  "label": "?????????",
  "value": 458 },
{
  "label": "????????????",
  "value": 459 },
{
  "label": "?????????",
  "value": 460 },
{
  "label": "?????????",
  "value": 461 }],

[{
  "label": "???????????????",
  "value": 463 },
{
  "label": "???????????????",
  "value": 464 },
{
  "label": "????????????",
  "value": 465 }]],


[
[{
  "label": "?????????",
  "value": 468 },
{
  "label": "?????????",
  "value": 469 },
{
  "label": "?????????",
  "value": 470 },
{
  "label": "?????????",
  "value": 471 },
{
  "label": "?????????",
  "value": 472 },
{
  "label": "????????????",
  "value": 473 },
{
  "label": "?????????",
  "value": 474 },
{
  "label": "????????????",
  "value": 475 },
{
  "label": "?????????",
  "value": 476 },
{
  "label": "?????????",
  "value": 477 },
{
  "label": "?????????",
  "value": 478 },
{
  "label": "?????????",
  "value": 479 },
{
  "label": "?????????",
  "value": 480 }],

[{
  "label": "?????????",
  "value": 482 },
{
  "label": "?????????",
  "value": 483 },
{
  "label": "????????????",
  "value": 484 },
{
  "label": "????????????",
  "value": 485 },
{
  "label": "????????????",
  "value": 486 },
{
  "label": "?????????",
  "value": 487 },
{
  "label": "?????????",
  "value": 488 },
{
  "label": "????????????",
  "value": 489 },
{
  "label": "????????????",
  "value": 490 },
{
  "label": "?????????",
  "value": 491 }],

[{
  "label": "?????????",
  "value": 493 },
{
  "label": "?????????",
  "value": 494 },
{
  "label": "?????????",
  "value": 495 },
{
  "label": "?????????",
  "value": 496 },
{
  "label": "?????????",
  "value": 497 },
{
  "label": "?????????????????????",
  "value": 498 },
{
  "label": "?????????",
  "value": 499 }],

[{
  "label": "?????????",
  "value": 501 },
{
  "label": "?????????",
  "value": 502 },
{
  "label": "?????????",
  "value": 503 },
{
  "label": "?????????",
  "value": 504 },
{
  "label": "?????????",
  "value": 505 },
{
  "label": "?????????????????????",
  "value": 506 },
{
  "label": "?????????????????????",
  "value": 507 }],

[{
  "label": "?????????",
  "value": 509 },
{
  "label": "?????????",
  "value": 510 },
{
  "label": "?????????",
  "value": 511 },
{
  "label": "?????????",
  "value": 512 },
{
  "label": "?????????????????????",
  "value": 513 },
{
  "label": "?????????????????????",
  "value": 514 }],

[{
  "label": "?????????",
  "value": 516 },
{
  "label": "?????????",
  "value": 517 },
{
  "label": "?????????",
  "value": 518 },
{
  "label": "?????????????????????",
  "value": 519 },
{
  "label": "?????????",
  "value": 520 },
{
  "label": "?????????",
  "value": 521 }],

[{
  "label": "?????????",
  "value": 523 },
{
  "label": "?????????",
  "value": 524 },
{
  "label": "?????????",
  "value": 525 },
{
  "label": "?????????",
  "value": 526 },
{
  "label": "??????",
  "value": 527 },
{
  "label": "?????????",
  "value": 528 },
{
  "label": "?????????",
  "value": 529 }],

[{
  "label": "?????????",
  "value": 531 },
{
  "label": "?????????",
  "value": 532 },
{
  "label": "????????????",
  "value": 533 },
{
  "label": "?????????",
  "value": 534 },
{
  "label": "?????????",
  "value": 535 },
{
  "label": "????????????",
  "value": 536 }],

[{
  "label": "?????????",
  "value": 538 },
{
  "label": "?????????",
  "value": 539 },
{
  "label": "?????????",
  "value": 540 },
{
  "label": "????????????",
  "value": 541 },
{
  "label": "?????????",
  "value": 542 },
{
  "label": "????????????????????????",
  "value": 543 },
{
  "label": "?????????",
  "value": 544 }],

[{
  "label": "?????????",
  "value": 546 },
{
  "label": "?????????",
  "value": 547 },
{
  "label": "?????????",
  "value": 548 },
{
  "label": "????????????",
  "value": 549 },
{
  "label": "????????????",
  "value": 550 },
{
  "label": "?????????",
  "value": 551 },
{
  "label": "?????????",
  "value": 552 }],

[{
  "label": "????????????",
  "value": 554 },
{
  "label": "????????????",
  "value": 555 },
{
  "label": "?????????",
  "value": 556 },
{
  "label": "?????????",
  "value": 557 }],

[{
  "label": "?????????",
  "value": 559 },
{
  "label": "?????????",
  "value": 560 },
{
  "label": "?????????",
  "value": 561 },
{
  "label": "?????????",
  "value": 562 },
{
  "label": "?????????",
  "value": 563 },
{
  "label": "????????????",
  "value": 564 },
{
  "label": "?????????",
  "value": 565 }],

[{
  "label": "?????????",
  "value": 567 },
{
  "label": "?????????",
  "value": 568 },
{
  "label": "?????????",
  "value": 569 },
{
  "label": "?????????",
  "value": 570 },
{
  "label": "?????????????????????????????????",
  "value": 571 },
{
  "label": "?????????",
  "value": 572 },
{
  "label": "?????????",
  "value": 573 }],

[{
  "label": "?????????",
  "value": 575 },
{
  "label": "?????????",
  "value": 576 },
{
  "label": "?????????",
  "value": 577 },
{
  "label": "?????????",
  "value": 578 },
{
  "label": "?????????",
  "value": 579 },
{
  "label": "?????????",
  "value": 580 }],

[{
  "label": "????????????",
  "value": 582 },
{
  "label": "????????????",
  "value": 583 },
{
  "label": "?????????",
  "value": 584 }]],


[
[{
  "label": "?????????",
  "value": 587 },
{
  "label": "?????????",
  "value": 588 },
{
  "label": "?????????",
  "value": 589 },
{
  "label": "?????????",
  "value": 590 },
{
  "label": "?????????",
  "value": 591 },
{
  "label": "?????????",
  "value": 592 },
{
  "label": "?????????",
  "value": 593 },
{
  "label": "?????????",
  "value": 594 },
{
  "label": "?????????",
  "value": 595 },
{
  "label": "?????????",
  "value": 596 }],

[{
  "label": "?????????",
  "value": 598 },
{
  "label": "?????????",
  "value": 599 },
{
  "label": "?????????",
  "value": 600 },
{
  "label": "?????????",
  "value": 601 },
{
  "label": "?????????",
  "value": 602 },
{
  "label": "?????????",
  "value": 603 },
{
  "label": "?????????",
  "value": 604 },
{
  "label": "?????????",
  "value": 605 },
{
  "label": "?????????",
  "value": 606 }],

[{
  "label": "?????????",
  "value": 608 },
{
  "label": "?????????",
  "value": 609 },
{
  "label": "?????????",
  "value": 610 },
{
  "label": "?????????????????????",
  "value": 611 },
{
  "label": "????????????",
  "value": 612 },
{
  "label": "?????????",
  "value": 613 }],

[{
  "label": "?????????",
  "value": 615 },
{
  "label": "?????????",
  "value": 616 },
{
  "label": "?????????",
  "value": 617 },
{
  "label": "?????????",
  "value": 618 }],

[{
  "label": "?????????",
  "value": 620 },
{
  "label": "????????????",
  "value": 621 },
{
  "label": "?????????",
  "value": 622 },
{
  "label": "?????????",
  "value": 623 },
{
  "label": "?????????",
  "value": 624 },
{
  "label": "????????????",
  "value": 625 },
{
  "label": "?????????",
  "value": 626 }],

[{
  "label": "?????????",
  "value": 628 },
{
  "label": "?????????",
  "value": 629 },
{
  "label": "?????????",
  "value": 630 },
{
  "label": "?????????",
  "value": 631 },
{
  "label": "????????????????????????",
  "value": 632 },
{
  "label": "?????????",
  "value": 633 }],

[{
  "label": "?????????",
  "value": 635 },
{
  "label": "?????????????????????????????????",
  "value": 636 },
{
  "label": "?????????",
  "value": 637 },
{
  "label": "?????????",
  "value": 638 },
{
  "label": "?????????",
  "value": 639 }],

[{
  "label": "?????????",
  "value": 641 },
{
  "label": "?????????",
  "value": 642 },
{
  "label": "?????????",
  "value": 643 },
{
  "label": "?????????",
  "value": 644 },
{
  "label": "?????????",
  "value": 645 }],

[{
  "label": "?????????",
  "value": 647 },
{
  "label": "?????????",
  "value": 648 },
{
  "label": "?????????",
  "value": 649 },
{
  "label": "?????????",
  "value": 650 },
{
  "label": "?????????",
  "value": 651 },
{
  "label": "?????????",
  "value": 652 },
{
  "label": "?????????",
  "value": 653 },
{
  "label": "?????????",
  "value": 654 }]],


[
[{
  "label": "?????????",
  "value": 657 },
{
  "label": "?????????",
  "value": 658 },
{
  "label": "?????????",
  "value": 659 },
{
  "label": "?????????",
  "value": 660 },
{
  "label": "?????????",
  "value": 661 },
{
  "label": "?????????",
  "value": 662 },
{
  "label": "?????????",
  "value": 663 },
{
  "label": "?????????",
  "value": 664 },
{
  "label": "?????????",
  "value": 665 },
{
  "label": "?????????",
  "value": 666 },
{
  "label": "?????????",
  "value": 667 },
{
  "label": "??????",
  "value": 668 },
{
  "label": "?????????",
  "value": 669 },
{
  "label": "?????????",
  "value": 670 },
{
  "label": "?????????",
  "value": 671 },
{
  "label": "?????????",
  "value": 672 },
{
  "label": "?????????",
  "value": 673 },
{
  "label": "?????????",
  "value": 674 }],

[{
  "label": "?????????",
  "value": 676 },
{
  "label": "?????????",
  "value": 677 },
{
  "label": "?????????",
  "value": 678 },
{
  "label": "????????????",
  "value": 679 },
{
  "label": "???????????????",
  "value": 680 },
{
  "label": "????????????",
  "value": 681 },
{
  "label": "????????????????????????",
  "value": 682 },
{
  "label": "?????????",
  "value": 683 },
{
  "label": "?????????",
  "value": 684 },
{
  "label": "?????????",
  "value": 685 },
{
  "label": "?????????",
  "value": 686 },
{
  "label": "?????????",
  "value": 687 },
{
  "label": "?????????",
  "value": 688 },
{
  "label": "?????????",
  "value": 689 },
{
  "label": "?????????",
  "value": 690 },
{
  "label": "?????????",
  "value": 691 }],

[{
  "label": "?????????",
  "value": 693 },
{
  "label": "?????????",
  "value": 694 },
{
  "label": "?????????",
  "value": 695 },
{
  "label": "?????????",
  "value": 696 },
{
  "label": "????????????",
  "value": 697 },
{
  "label": "?????????",
  "value": 698 },
{
  "label": "?????????",
  "value": 699 },
{
  "label": "?????????",
  "value": 700 },
{
  "label": "?????????",
  "value": 701 }],

[{
  "label": "?????????",
  "value": 703 },
{
  "label": "?????????",
  "value": 704 },
{
  "label": "?????????",
  "value": 705 },
{
  "label": "?????????",
  "value": 706 },
{
  "label": "?????????",
  "value": 707 },
{
  "label": "?????????",
  "value": 708 },
{
  "label": "?????????",
  "value": 709 },
{
  "label": "?????????",
  "value": 710 }],

[{
  "label": "?????????",
  "value": 712 },
{
  "label": "?????????",
  "value": 713 },
{
  "label": "????????????",
  "value": 714 },
{
  "label": "?????????",
  "value": 715 },
{
  "label": "?????????",
  "value": 716 },
{
  "label": "?????????",
  "value": 717 },
{
  "label": "?????????",
  "value": 718 },
{
  "label": "?????????",
  "value": 719 }],

[{
  "label": "????????????",
  "value": 721 },
{
  "label": "?????????",
  "value": 722 },
{
  "label": "????????????",
  "value": 723 },
{
  "label": "?????????",
  "value": 724 },
{
  "label": "?????????",
  "value": 725 },
{
  "label": "?????????",
  "value": 726 },
{
  "label": "?????????",
  "value": 727 },
{
  "label": "?????????",
  "value": 728 },
{
  "label": "??????????????????????????????",
  "value": 729 }],

[{
  "label": "?????????",
  "value": 731 },
{
  "label": "?????????",
  "value": 732 },
{
  "label": "?????????",
  "value": 733 },
{
  "label": "?????????",
  "value": 734 },
{
  "label": "?????????",
  "value": 735 },
{
  "label": "?????????",
  "value": 736 },
{
  "label": "?????????",
  "value": 737 },
{
  "label": "????????????",
  "value": 738 },
{
  "label": "?????????",
  "value": 739 },
{
  "label": "????????????",
  "value": 740 },
{
  "label": "????????????",
  "value": 741 },
{
  "label": "?????????",
  "value": 742 },
{
  "label": "????????????",
  "value": 743 },
{
  "label": "?????????",
  "value": 744 },
{
  "label": "????????????",
  "value": 745 },
{
  "label": "?????????",
  "value": 746 },
{
  "label": "?????????",
  "value": 747 }],

[{
  "label": "?????????",
  "value": 749 },
{
  "label": "?????????",
  "value": 750 },
{
  "label": "?????????",
  "value": 751 },
{
  "label": "??????",
  "value": 752 },
{
  "label": "?????????",
  "value": 753 },
{
  "label": "?????????",
  "value": 754 },
{
  "label": "?????????",
  "value": 755 },
{
  "label": "?????????",
  "value": 756 },
{
  "label": "?????????",
  "value": 757 },
{
  "label": "?????????",
  "value": 758 }],

[{
  "label": "?????????",
  "value": 760 },
{
  "label": "?????????",
  "value": 761 },
{
  "label": "????????????",
  "value": 762 },
{
  "label": "?????????",
  "value": 763 }],

[{
  "label": "?????????",
  "value": 765 },
{
  "label": "?????????",
  "value": 766 },
{
  "label": "?????????",
  "value": 767 },
{
  "label": "?????????",
  "value": 768 },
{
  "label": "?????????",
  "value": 769 },
{
  "label": "?????????",
  "value": 770 },
{
  "label": "????????????",
  "value": 771 },
{
  "label": "?????????",
  "value": 772 },
{
  "label": "?????????",
  "value": 773 },
{
  "label": "?????????",
  "value": 774 }],

[{
  "label": "?????????",
  "value": 776 },
{
  "label": "?????????",
  "value": 777 },
{
  "label": "?????????",
  "value": 778 },
{
  "label": "?????????",
  "value": 779 },
{
  "label": "?????????",
  "value": 780 },
{
  "label": "???????????????",
  "value": 781 }],

[{
  "label": "?????????",
  "value": 783 },
{
  "label": "?????????",
  "value": 784 },
{
  "label": "?????????",
  "value": 785 },
{
  "label": "?????????",
  "value": 786 },
{
  "label": "?????????",
  "value": 787 },
{
  "label": "?????????",
  "value": 788 },
{
  "label": "?????????",
  "value": 789 },
{
  "label": "?????????",
  "value": 790 },
{
  "label": "?????????",
  "value": 791 },
{
  "label": "?????????",
  "value": 792 }],

[{
  "label": "???????????????",
  "value": 794 },
{
  "label": "?????????",
  "value": 795 },
{
  "label": "?????????",
  "value": 796 },
{
  "label": "?????????",
  "value": 797 },
{
  "label": "?????????",
  "value": 798 },
{
  "label": "?????????",
  "value": 799 },
{
  "label": "?????????",
  "value": 800 }]],


[
[{
  "label": "?????????",
  "value": 803 },
{
  "label": "?????????",
  "value": 804 },
{
  "label": "?????????",
  "value": 805 },
{
  "label": "?????????",
  "value": 806 },
{
  "label": "?????????",
  "value": 807 },
{
  "label": "?????????",
  "value": 808 },
{
  "label": "?????????",
  "value": 809 },
{
  "label": "?????????",
  "value": 810 },
{
  "label": "?????????",
  "value": 811 },
{
  "label": "?????????",
  "value": 812 },
{
  "label": "?????????",
  "value": 813 },
{
  "label": "????????????",
  "value": 814 },
{
  "label": "?????????",
  "value": 815 },
{
  "label": "?????????",
  "value": 816 },
{
  "label": "?????????",
  "value": 817 },
{
  "label": "?????????",
  "value": 818 },
{
  "label": "?????????",
  "value": 819 }]],


[
[{
  "label": "?????????",
  "value": 822 },
{
  "label": "?????????",
  "value": 823 },
{
  "label": "?????????",
  "value": 824 },
{
  "label": "?????????",
  "value": 825 },
{
  "label": "?????????",
  "value": 826 },
{
  "label": "?????????",
  "value": 827 },
{
  "label": "????????????",
  "value": 828 },
{
  "label": "?????????",
  "value": 829 },
{
  "label": "?????????",
  "value": 830 },
{
  "label": "?????????",
  "value": 831 },
{
  "label": "?????????",
  "value": 832 }],

[{
  "label": "?????????",
  "value": 834 },
{
  "label": "?????????",
  "value": 835 },
{
  "label": "?????????",
  "value": 837 },
{
  "label": "?????????",
  "value": 838 },
{
  "label": "?????????",
  "value": 839 },
{
  "label": "?????????",
  "value": 840 },
{
  "label": "?????????",
  "value": 841 }],

[{
  "label": "?????????",
  "value": 843 },
{
  "label": "?????????",
  "value": 844 },
{
  "label": "?????????",
  "value": 845 },
{
  "label": "?????????",
  "value": 846 },
{
  "label": "?????????",
  "value": 847 },
{
  "label": "??????",
  "value": 848 },
{
  "label": "??????",
  "value": 849 },
{
  "label": "?????????",
  "value": 850 },
{
  "label": "?????????",
  "value": 851 },
{
  "label": "?????????",
  "value": 852 }],

[{
  "label": "?????????",
  "value": 854 },
{
  "label": "?????????",
  "value": 855 },
{
  "label": "????????????",
  "value": 856 },
{
  "label": "?????????",
  "value": 857 },
{
  "label": "?????????",
  "value": 858 },
{
  "label": "?????????",
  "value": 859 },
{
  "label": "?????????",
  "value": 860 }],

[{
  "label": "?????????",
  "value": 862 },
{
  "label": "?????????",
  "value": 863 },
{
  "label": "?????????",
  "value": 864 },
{
  "label": "?????????",
  "value": 865 },
{
  "label": "?????????",
  "value": 866 },
{
  "label": "?????????",
  "value": 867 },
{
  "label": "????????????",
  "value": 868 },
{
  "label": "?????????",
  "value": 869 },
{
  "label": "?????????",
  "value": 870 }],

[{
  "label": "?????????",
  "value": 872 },
{
  "label": "?????????",
  "value": 873 },
{
  "label": "?????????",
  "value": 874 },
{
  "label": "?????????",
  "value": 875 },
{
  "label": "?????????",
  "value": 876 },
{
  "label": "?????????",
  "value": 877 },
{
  "label": "?????????",
  "value": 878 },
{
  "label": "?????????",
  "value": 879 }],

[{
  "label": "?????????",
  "value": 881 },
{
  "label": "?????????",
  "value": 882 },
{
  "label": "?????????",
  "value": 883 },
{
  "label": "?????????",
  "value": 884 },
{
  "label": "?????????",
  "value": 885 },
{
  "label": "?????????",
  "value": 886 }],

[{
  "label": "?????????",
  "value": 888 },
{
  "label": "?????????",
  "value": 889 },
{
  "label": "?????????",
  "value": 890 },
{
  "label": "?????????",
  "value": 891 },
{
  "label": "?????????",
  "value": 892 },
{
  "label": "?????????",
  "value": 893 },
{
  "label": "?????????",
  "value": 894 },
{
  "label": "?????????",
  "value": 895 }],

[{
  "label": "?????????",
  "value": 897 },
{
  "label": "?????????",
  "value": 898 },
{
  "label": "?????????",
  "value": 899 },
{
  "label": "?????????",
  "value": 900 },
{
  "label": "?????????",
  "value": 901 },
{
  "label": "?????????",
  "value": 902 },
{
  "label": "?????????",
  "value": 903 },
{
  "label": "?????????",
  "value": 904 },
{
  "label": "?????????",
  "value": 905 }],

[{
  "label": "?????????",
  "value": 907 },
{
  "label": "?????????",
  "value": 908 },
{
  "label": "?????????",
  "value": 909 },
{
  "label": "?????????",
  "value": 910 },
{
  "label": "?????????",
  "value": 911 },
{
  "label": "?????????",
  "value": 912 }],

[{
  "label": "?????????",
  "value": 914 },
{
  "label": "?????????",
  "value": 915 },
{
  "label": "?????????",
  "value": 916 },
{
  "label": "?????????",
  "value": 917 },
{
  "label": "?????????",
  "value": 918 },
{
  "label": "?????????",
  "value": 919 }],

[{
  "label": "?????????",
  "value": 921 },
{
  "label": "?????????",
  "value": 922 },
{
  "label": "?????????",
  "value": 923 },
{
  "label": "?????????",
  "value": 924 },
{
  "label": "?????????",
  "value": 925 },
{
  "label": "?????????",
  "value": 926 }],

[{
  "label": "?????????",
  "value": 928 },
{
  "label": "?????????",
  "value": 929 },
{
  "label": "?????????",
  "value": 930 },
{
  "label": "?????????",
  "value": 931 },
{
  "label": "?????????",
  "value": 932 }]],


[
[{
  "label": "?????????",
  "value": 935 },
{
  "label": "?????????",
  "value": 936 },
{
  "label": "?????????",
  "value": 937 },
{
  "label": "?????????",
  "value": 938 },
{
  "label": "?????????",
  "value": 939 },
{
  "label": "?????????",
  "value": 940 },
{
  "label": "?????????",
  "value": 941 },
{
  "label": "?????????",
  "value": 942 },
{
  "label": "?????????",
  "value": 943 },
{
  "label": "?????????",
  "value": 944 },
{
  "label": "?????????",
  "value": 945 },
{
  "label": "?????????",
  "value": 946 },
{
  "label": "?????????",
  "value": 947 }],

[{
  "label": "?????????",
  "value": 949 },
{
  "label": "?????????",
  "value": 950 },
{
  "label": "?????????",
  "value": 951 },
{
  "label": "?????????",
  "value": 952 },
{
  "label": "?????????",
  "value": 953 },
{
  "label": "?????????",
  "value": 954 },
{
  "label": "?????????",
  "value": 955 },
{
  "label": "?????????",
  "value": 956 },
{
  "label": "?????????",
  "value": 957 },
{
  "label": "?????????",
  "value": 958 },
{
  "label": "?????????",
  "value": 959 }],

[{
  "label": "?????????",
  "value": 961 },
{
  "label": "?????????",
  "value": 962 },
{
  "label": "?????????",
  "value": 963 },
{
  "label": "?????????",
  "value": 964 },
{
  "label": "?????????",
  "value": 965 },
{
  "label": "?????????",
  "value": 966 },
{
  "label": "?????????",
  "value": 967 },
{
  "label": "?????????",
  "value": 968 },
{
  "label": "?????????",
  "value": 969 },
{
  "label": "?????????",
  "value": 970 },
{
  "label": "?????????",
  "value": 971 }],

[{
  "label": "?????????",
  "value": 973 },
{
  "label": "?????????",
  "value": 974 },
{
  "label": "?????????",
  "value": 975 },
{
  "label": "?????????",
  "value": 976 },
{
  "label": "?????????",
  "value": 977 },
{
  "label": "?????????",
  "value": 978 },
{
  "label": "?????????",
  "value": 979 }],

[{
  "label": "?????????",
  "value": 981 },
{
  "label": "?????????",
  "value": 982 },
{
  "label": "?????????",
  "value": 983 },
{
  "label": "?????????",
  "value": 984 },
{
  "label": "?????????",
  "value": 985 }],

[{
  "label": "?????????",
  "value": 987 },
{
  "label": "?????????",
  "value": 988 },
{
  "label": "?????????",
  "value": 989 },
{
  "label": "?????????",
  "value": 990 },
{
  "label": "?????????",
  "value": 991 },
{
  "label": "?????????",
  "value": 992 }],

[{
  "label": "?????????",
  "value": 994 },
{
  "label": "?????????",
  "value": 995 },
{
  "label": "?????????",
  "value": 996 },
{
  "label": "?????????",
  "value": 997 },
{
  "label": "?????????",
  "value": 998 },
{
  "label": "?????????",
  "value": 999 },
{
  "label": "?????????",
  "value": 1000 },
{
  "label": "?????????",
  "value": 1001 },
{
  "label": "?????????",
  "value": 1002 }],

[{
  "label": "?????????",
  "value": 1004 },
{
  "label": "?????????",
  "value": 1005 },
{
  "label": "?????????",
  "value": 1006 },
{
  "label": "?????????",
  "value": 1007 },
{
  "label": "?????????",
  "value": 1008 },
{
  "label": "?????????",
  "value": 1009 }],

[{
  "label": "?????????",
  "value": 1011 },
{
  "label": "?????????",
  "value": 1012 },
{
  "label": "?????????",
  "value": 1013 },
{
  "label": "?????????",
  "value": 1014 }],

[{
  "label": "?????????",
  "value": 1016 },
{
  "label": "?????????",
  "value": 1017 },
{
  "label": "?????????",
  "value": 1018 },
{
  "label": "?????????",
  "value": 1019 },
{
  "label": "?????????",
  "value": 1020 },
{
  "label": "?????????",
  "value": 1021 },
{
  "label": "?????????",
  "value": 1022 },
{
  "label": "?????????",
  "value": 1023 },
{
  "label": "?????????",
  "value": 1024 }],

[{
  "label": "?????????",
  "value": 1026 },
{
  "label": "?????????",
  "value": 1027 },
{
  "label": "?????????",
  "value": 1028 },
{
  "label": "?????????",
  "value": 1029 },
{
  "label": "?????????",
  "value": 1030 },
{
  "label": "?????????",
  "value": 1031 },
{
  "label": "?????????",
  "value": 1032 },
{
  "label": "?????????????????????",
  "value": 1033 },
{
  "label": "?????????",
  "value": 1034 }],

[{
  "label": "?????????",
  "value": 1036 },
{
  "label": "?????????",
  "value": 1037 },
{
  "label": "?????????",
  "value": 1038 },
{
  "label": "?????????????????????",
  "value": 1039 },
{
  "label": "??????????????????",
  "value": 1040 },
{
  "label": "?????????",
  "value": 1041 },
{
  "label": "????????????",
  "value": 1042 },
{
  "label": "?????????",
  "value": 1043 },
{
  "label": "?????????",
  "value": 1044 },
{
  "label": "?????????",
  "value": 1045 }]],


[
[{
  "label": "?????????",
  "value": 1048 },
{
  "label": "?????????",
  "value": 1049 },
{
  "label": "?????????",
  "value": 1050 },
{
  "label": "?????????",
  "value": 1051 },
{
  "label": "?????????",
  "value": 1052 },
{
  "label": "?????????",
  "value": 1053 },
{
  "label": "?????????",
  "value": 1054 },
{
  "label": "?????????",
  "value": 1055 },
{
  "label": "?????????",
  "value": 1056 }],

[{
  "label": "?????????",
  "value": 1058 },
{
  "label": "?????????",
  "value": 1059 },
{
  "label": "?????????",
  "value": 1060 },
{
  "label": "?????????",
  "value": 1061 },
{
  "label": "?????????",
  "value": 1062 },
{
  "label": "?????????",
  "value": 1063 },
{
  "label": "?????????",
  "value": 1064 },
{
  "label": "?????????",
  "value": 1065 }],

[{
  "label": "????????????",
  "value": 1067 },
{
  "label": "?????????",
  "value": 1068 },
{
  "label": "?????????",
  "value": 1069 },
{
  "label": "?????????",
  "value": 1070 },
{
  "label": "?????????",
  "value": 1071 },
{
  "label": "?????????",
  "value": 1072 },
{
  "label": "?????????",
  "value": 1073 }],

[{
  "label": "?????????",
  "value": 1075 },
{
  "label": "????????????",
  "value": 1076 },
{
  "label": "????????????",
  "value": 1077 },
{
  "label": "????????????",
  "value": 1078 },
{
  "label": "?????????",
  "value": 1079 },
{
  "label": "?????????",
  "value": 1080 }],

[{
  "label": "?????????",
  "value": 1082 },
{
  "label": "?????????",
  "value": 1083 },
{
  "label": "?????????",
  "value": 1084 },
{
  "label": "?????????",
  "value": 1085 },
{
  "label": "?????????",
  "value": 1086 },
{
  "label": "??????",
  "value": 1087 }],

[{
  "label": "?????????",
  "value": 1089 },
{
  "label": "?????????",
  "value": 1090 },
{
  "label": "?????????",
  "value": 1091 },
{
  "label": "?????????",
  "value": 1092 }],

[{
  "label": "????????????",
  "value": 1094 },
{
  "label": "????????????",
  "value": 1095 },
{
  "label": "??????",
  "value": 1096 },
{
  "label": "?????????",
  "value": 1097 }],

[{
  "label": "?????????",
  "value": 1099 },
{
  "label": "?????????",
  "value": 1100 },
{
  "label": "?????????",
  "value": 1101 },
{
  "label": "?????????",
  "value": 1102 },
{
  "label": "?????????",
  "value": 1103 },
{
  "label": "?????????",
  "value": 1104 },
{
  "label": "?????????",
  "value": 1105 },
{
  "label": "?????????",
  "value": 1106 },
{
  "label": "?????????",
  "value": 1107 },
{
  "label": "?????????",
  "value": 1108 },
{
  "label": "?????????",
  "value": 1109 }],

[{
  "label": "?????????",
  "value": 1111 },
{
  "label": "?????????",
  "value": 1112 },
{
  "label": "?????????",
  "value": 1113 },
{
  "label": "??????",
  "value": 1114 },
{
  "label": "?????????",
  "value": 1115 },
{
  "label": "??????",
  "value": 1116 },
{
  "label": "?????????",
  "value": 1117 }],

[{
  "label": "?????????",
  "value": 1119 },
{
  "label": "?????????",
  "value": 1120 },
{
  "label": "?????????",
  "value": 1121 },
{
  "label": "?????????",
  "value": 1122 },
{
  "label": "?????????",
  "value": 1123 },
{
  "label": "?????????",
  "value": 1124 },
{
  "label": "?????????",
  "value": 1125 },
{
  "label": "?????????",
  "value": 1126 }],

[{
  "label": "?????????",
  "value": 1128 },
{
  "label": "?????????",
  "value": 1129 },
{
  "label": "?????????",
  "value": 1130 },
{
  "label": "?????????",
  "value": 1131 },
{
  "label": "?????????",
  "value": 1132 },
{
  "label": "?????????",
  "value": 1133 },
{
  "label": "?????????",
  "value": 1134 },
{
  "label": "?????????",
  "value": 1135 }],

[{
  "label": "?????????",
  "value": 1137 },
{
  "label": "?????????",
  "value": 1138 },
{
  "label": "??????",
  "value": 1139 },
{
  "label": "?????????",
  "value": 1140 },
{
  "label": "??????",
  "value": 1141 }],

[{
  "label": "?????????",
  "value": 1143 },
{
  "label": "?????????",
  "value": 1144 },
{
  "label": "??????",
  "value": 1145 },
{
  "label": "?????????",
  "value": 1146 },
{
  "label": "?????????",
  "value": 1147 },
{
  "label": "?????????",
  "value": 1148 },
{
  "label": "?????????",
  "value": 1149 }],

[{
  "label": "?????????",
  "value": 1151 },
{
  "label": "?????????",
  "value": 1152 },
{
  "label": "?????????",
  "value": 1153 },
{
  "label": "?????????",
  "value": 1154 }],

[{
  "label": "?????????",
  "value": 1156 },
{
  "label": "?????????",
  "value": 1157 },
{
  "label": "?????????",
  "value": 1158 },
{
  "label": "?????????",
  "value": 1159 }],

[{
  "label": "?????????",
  "value": 1161 },
{
  "label": "?????????",
  "value": 1162 },
{
  "label": "?????????",
  "value": 1163 },
{
  "label": "??????",
  "value": 1164 },
{
  "label": "?????????",
  "value": 1165 },
{
  "label": "?????????",
  "value": 1166 },
{
  "label": "?????????",
  "value": 1167 }]],


[
[{
  "label": "?????????",
  "value": 1170 },
{
  "label": "?????????",
  "value": 1171 },
{
  "label": "?????????",
  "value": 1172 },
{
  "label": "?????????",
  "value": 1173 },
{
  "label": "?????????",
  "value": 1174 },
{
  "label": "?????????",
  "value": 1175 },
{
  "label": "?????????",
  "value": 1176 },
{
  "label": "?????????",
  "value": 1177 },
{
  "label": "?????????",
  "value": 1178 },
{
  "label": "?????????",
  "value": 1179 },
{
  "label": "?????????",
  "value": 1180 },
{
  "label": "?????????",
  "value": 1181 },
{
  "label": "?????????",
  "value": 1182 }],

[{
  "label": "?????????",
  "value": 1184 },
{
  "label": "?????????",
  "value": 1185 },
{
  "label": "?????????",
  "value": 1186 },
{
  "label": "?????????",
  "value": 1187 },
{
  "label": "?????????",
  "value": 1188 },
{
  "label": "?????????",
  "value": 1189 }],

[{
  "label": "?????????",
  "value": 1191 },
{
  "label": "?????????",
  "value": 1192 },
{
  "label": "?????????",
  "value": 1193 },
{
  "label": "?????????",
  "value": 1194 },
{
  "label": "?????????",
  "value": 1195 }],

[{
  "label": "?????????",
  "value": 1197 },
{
  "label": "?????????",
  "value": 1198 },
{
  "label": "?????????",
  "value": 1199 },
{
  "label": "?????????",
  "value": 1200 },
{
  "label": "?????????",
  "value": 1201 },
{
  "label": "?????????",
  "value": 1202 },
{
  "label": "?????????",
  "value": 1203 },
{
  "label": "??????",
  "value": 1204 },
{
  "label": "?????????",
  "value": 1205 },
{
  "label": "?????????",
  "value": 1206 },
{
  "label": "?????????",
  "value": 1207 },
{
  "label": "?????????",
  "value": 1208 }],

[{
  "label": "?????????",
  "value": 1210 },
{
  "label": "?????????",
  "value": 1211 },
{
  "label": "?????????",
  "value": 1212 },
{
  "label": "?????????",
  "value": 1213 },
{
  "label": "?????????",
  "value": 1214 },
{
  "label": "?????????",
  "value": 1215 },
{
  "label": "?????????",
  "value": 1216 },
{
  "label": "?????????",
  "value": 1217 },
{
  "label": "?????????",
  "value": 1218 },
{
  "label": "?????????",
  "value": 1219 },
{
  "label": "?????????",
  "value": 1220 },
{
  "label": "?????????",
  "value": 1221 }],

[{
  "label": "?????????",
  "value": 1223 },
{
  "label": "?????????",
  "value": 1224 },
{
  "label": "?????????",
  "value": 1225 },
{
  "label": "?????????",
  "value": 1226 },
{
  "label": "?????????",
  "value": 1227 },
{
  "label": "?????????",
  "value": 1228 },
{
  "label": "?????????",
  "value": 1229 },
{
  "label": "?????????",
  "value": 1230 },
{
  "label": "?????????",
  "value": 1231 },
{
  "label": "?????????",
  "value": 1232 },
{
  "label": "?????????",
  "value": 1233 }],

[{
  "label": "?????????",
  "value": 1235 },
{
  "label": "?????????",
  "value": 1236 },
{
  "label": "?????????",
  "value": 1237 },
{
  "label": "?????????",
  "value": 1238 },
{
  "label": "?????????",
  "value": 1239 },
{
  "label": "?????????",
  "value": 1240 },
{
  "label": "?????????",
  "value": 1241 },
{
  "label": "?????????",
  "value": 1242 },
{
  "label": "????????????",
  "value": 1243 },
{
  "label": "?????????",
  "value": 1244 }],

[{
  "label": "?????????",
  "value": 1246 },
{
  "label": "?????????",
  "value": 1247 },
{
  "label": "?????????",
  "value": 1248 },
{
  "label": "?????????",
  "value": 1249 },
{
  "label": "?????????",
  "value": 1250 },
{
  "label": "?????????",
  "value": 1251 },
{
  "label": "?????????",
  "value": 1252 }],

[{
  "label": "?????????",
  "value": 1254 },
{
  "label": "?????????",
  "value": 1255 },
{
  "label": "?????????",
  "value": 1256 },
{
  "label": "?????????",
  "value": 1257 },
{
  "label": "?????????",
  "value": 1258 },
{
  "label": "?????????",
  "value": 1259 },
{
  "label": "?????????",
  "value": 1260 },
{
  "label": "?????????",
  "value": 1261 },
{
  "label": "?????????",
  "value": 1262 }]],


[
[{
  "label": "?????????",
  "value": 1265 },
{
  "label": "?????????",
  "value": 1266 },
{
  "label": "????????????",
  "value": 1267 },
{
  "label": "?????????",
  "value": 1268 },
{
  "label": "????????????",
  "value": 1269 },
{
  "label": "?????????",
  "value": 1270 },
{
  "label": "?????????",
  "value": 1271 },
{
  "label": "?????????",
  "value": 1272 },
{
  "label": "?????????",
  "value": 1273 }],

[{
  "label": "?????????",
  "value": 1275 },
{
  "label": "?????????",
  "value": 1276 },
{
  "label": "?????????",
  "value": 1277 },
{
  "label": "?????????",
  "value": 1278 }],

[{
  "label": "?????????",
  "value": 1280 },
{
  "label": "?????????",
  "value": 1281 },
{
  "label": "?????????",
  "value": 1282 },
{
  "label": "?????????",
  "value": 1283 },
{
  "label": "?????????",
  "value": 1284 }],

[{
  "label": "?????????",
  "value": 1286 },
{
  "label": "?????????",
  "value": 1287 },
{
  "label": "?????????",
  "value": 1288 },
{
  "label": "?????????",
  "value": 1289 },
{
  "label": "?????????",
  "value": 1290 },
{
  "label": "?????????",
  "value": 1291 },
{
  "label": "?????????",
  "value": 1292 },
{
  "label": "?????????",
  "value": 1293 },
{
  "label": "?????????",
  "value": 1294 },
{
  "label": "?????????",
  "value": 1295 },
{
  "label": "?????????",
  "value": 1296 },
{
  "label": "?????????",
  "value": 1297 },
{
  "label": "????????????",
  "value": 1298 }],

[{
  "label": "?????????",
  "value": 1300 },
{
  "label": "?????????",
  "value": 1301 }],

[{
  "label": "?????????",
  "value": 1303 },
{
  "label": "?????????",
  "value": 1304 },
{
  "label": "?????????",
  "value": 1305 }],

[{
  "label": "?????????",
  "value": 1307 },
{
  "label": "?????????",
  "value": 1308 },
{
  "label": "??????",
  "value": 1309 },
{
  "label": "?????????",
  "value": 1310 },
{
  "label": "?????????",
  "value": 1311 },
{
  "label": "?????????",
  "value": 1312 },
{
  "label": "?????????",
  "value": 1313 },
{
  "label": "?????????",
  "value": 1314 },
{
  "label": "?????????",
  "value": 1315 },
{
  "label": "?????????",
  "value": 1316 },
{
  "label": "?????????",
  "value": 1317 },
{
  "label": "?????????",
  "value": 1318 },
{
  "label": "?????????",
  "value": 1319 },
{
  "label": "?????????",
  "value": 1320 },
{
  "label": "?????????",
  "value": 1321 },
{
  "label": "?????????",
  "value": 1322 },
{
  "label": "?????????",
  "value": 1323 },
{
  "label": "?????????",
  "value": 1324 }],

[{
  "label": "?????????",
  "value": 1326 },
{
  "label": "?????????",
  "value": 1327 },
{
  "label": "?????????",
  "value": 1328 },
{
  "label": "?????????",
  "value": 1329 },
{
  "label": "?????????",
  "value": 1330 },
{
  "label": "?????????",
  "value": 1331 },
{
  "label": "?????????",
  "value": 1332 },
{
  "label": "?????????",
  "value": 1333 },
{
  "label": "?????????",
  "value": 1334 },
{
  "label": "?????????",
  "value": 1335 },
{
  "label": "?????????",
  "value": 1336 },
{
  "label": "?????????",
  "value": 1337 },
{
  "label": "????????????",
  "value": 1338 }],

[{
  "label": "?????????",
  "value": 1340 },
{
  "label": "?????????",
  "value": 1341 },
{
  "label": "?????????",
  "value": 1342 },
{
  "label": "?????????",
  "value": 1343 },
{
  "label": "?????????",
  "value": 1344 },
{
  "label": "?????????",
  "value": 1345 },
{
  "label": "?????????",
  "value": 1346 },
{
  "label": "?????????",
  "value": 1347 },
{
  "label": "?????????",
  "value": 1348 },
{
  "label": "?????????",
  "value": 1349 }],

[{
  "label": "?????????",
  "value": 1351 },
{
  "label": "?????????",
  "value": 1352 },
{
  "label": "?????????",
  "value": 1353 },
{
  "label": "?????????",
  "value": 1354 },
{
  "label": "?????????",
  "value": 1355 },
{
  "label": "?????????",
  "value": 1356 },
{
  "label": "?????????",
  "value": 1357 },
{
  "label": "?????????",
  "value": 1358 },
{
  "label": "?????????",
  "value": 1359 },
{
  "label": "?????????",
  "value": 1360 },
{
  "label": "?????????",
  "value": 1361 }],

[{
  "label": "?????????",
  "value": 1363 },
{
  "label": "?????????",
  "value": 1364 },
{
  "label": "?????????",
  "value": 1365 },
{
  "label": "?????????",
  "value": 1366 },
{
  "label": "?????????",
  "value": 1367 },
{
  "label": "?????????",
  "value": 1368 },
{
  "label": "?????????",
  "value": 1369 },
{
  "label": "?????????",
  "value": 1370 },
{
  "label": "?????????",
  "value": 1371 },
{
  "label": "?????????",
  "value": 1372 },
{
  "label": "?????????",
  "value": 1373 },
{
  "label": "?????????",
  "value": 1374 }]],


[
[{
  "label": "?????????",
  "value": 1377 },
{
  "label": "?????????",
  "value": 1378 },
{
  "label": "?????????",
  "value": 1379 },
{
  "label": "?????????",
  "value": 1380 },
{
  "label": "?????????",
  "value": 1381 },
{
  "label": "?????????",
  "value": 1382 },
{
  "label": "?????????",
  "value": 1383 },
{
  "label": "?????????",
  "value": 1384 },
{
  "label": "?????????",
  "value": 1385 },
{
  "label": "?????????",
  "value": 1386 }],

[{
  "label": "?????????",
  "value": 1388 },
{
  "label": "?????????",
  "value": 1389 },
{
  "label": "?????????",
  "value": 1390 },
{
  "label": "?????????",
  "value": 1391 },
{
  "label": "?????????",
  "value": 1392 },
{
  "label": "?????????",
  "value": 1393 },
{
  "label": "?????????",
  "value": 1394 },
{
  "label": "?????????",
  "value": 1395 },
{
  "label": "?????????",
  "value": 1396 },
{
  "label": "?????????",
  "value": 1397 },
{
  "label": "???????????????",
  "value": 1398 }],

[{
  "label": "?????????",
  "value": 1400 },
{
  "label": "?????????",
  "value": 1401 },
{
  "label": "?????????",
  "value": 1402 },
{
  "label": "?????????",
  "value": 1403 },
{
  "label": "?????????",
  "value": 1404 },
{
  "label": "?????????",
  "value": 1405 },
{
  "label": "?????????",
  "value": 1406 },
{
  "label": "?????????",
  "value": 1407 }],

[{
  "label": "?????????",
  "value": 1409 },
{
  "label": "?????????",
  "value": 1410 },
{
  "label": "?????????",
  "value": 1411 },
{
  "label": "????????????",
  "value": 1412 },
{
  "label": "?????????",
  "value": 1413 },
{
  "label": "?????????",
  "value": 1414 }],

[{
  "label": "?????????",
  "value": 1416 },
{
  "label": "?????????",
  "value": 1417 },
{
  "label": "?????????",
  "value": 1418 },
{
  "label": "?????????",
  "value": 1419 },
{
  "label": "?????????",
  "value": 1420 }],

[{
  "label": "?????????",
  "value": 1422 },
{
  "label": "?????????",
  "value": 1423 },
{
  "label": "?????????",
  "value": 1424 },
{
  "label": "?????????",
  "value": 1425 },
{
  "label": "?????????",
  "value": 1426 },
{
  "label": "?????????",
  "value": 1427 },
{
  "label": "?????????",
  "value": 1428 },
{
  "label": "?????????",
  "value": 1429 },
{
  "label": "?????????",
  "value": 1430 },
{
  "label": "?????????",
  "value": 1431 },
{
  "label": "?????????",
  "value": 1432 },
{
  "label": "?????????",
  "value": 1433 }],

[{
  "label": "?????????",
  "value": 1435 },
{
  "label": "?????????",
  "value": 1436 },
{
  "label": "?????????",
  "value": 1437 },
{
  "label": "?????????",
  "value": 1438 },
{
  "label": "?????????",
  "value": 1439 },
{
  "label": "?????????",
  "value": 1440 },
{
  "label": "?????????",
  "value": 1441 },
{
  "label": "?????????",
  "value": 1442 },
{
  "label": "?????????",
  "value": 1443 },
{
  "label": "?????????",
  "value": 1444 },
{
  "label": "?????????",
  "value": 1445 },
{
  "label": "?????????",
  "value": 1446 }],

[{
  "label": "?????????",
  "value": 1448 },
{
  "label": "?????????",
  "value": 1449 },
{
  "label": "?????????",
  "value": 1450 },
{
  "label": "?????????",
  "value": 1451 },
{
  "label": "?????????",
  "value": 1452 },
{
  "label": "?????????",
  "value": 1453 },
{
  "label": "?????????",
  "value": 1454 },
{
  "label": "?????????",
  "value": 1455 },
{
  "label": "?????????",
  "value": 1456 },
{
  "label": "?????????",
  "value": 1457 },
{
  "label": "?????????",
  "value": 1458 }],

[{
  "label": "?????????",
  "value": 1460 },
{
  "label": "?????????",
  "value": 1461 },
{
  "label": "?????????",
  "value": 1462 },
{
  "label": "?????????",
  "value": 1463 },
{
  "label": "?????????",
  "value": 1464 },
{
  "label": "?????????",
  "value": 1465 }],

[{
  "label": "?????????",
  "value": 1467 },
{
  "label": "?????????",
  "value": 1468 },
{
  "label": "?????????",
  "value": 1469 },
{
  "label": "?????????",
  "value": 1470 }],

[{
  "label": "?????????",
  "value": 1472 },
{
  "label": "?????????",
  "value": 1473 },
{
  "label": "?????????",
  "value": 1474 },
{
  "label": "??????",
  "value": 1475 }],

[{
  "label": "?????????",
  "value": 1477 },
{
  "label": "?????????",
  "value": 1478 }],

[{
  "label": "?????????",
  "value": 1480 },
{
  "label": "?????????",
  "value": 1481 },
{
  "label": "?????????",
  "value": 1482 },
{
  "label": "?????????",
  "value": 1483 },
{
  "label": "?????????",
  "value": 1484 },
{
  "label": "?????????",
  "value": 1485 },
{
  "label": "?????????",
  "value": 1486 },
{
  "label": "??????",
  "value": 1487 },
{
  "label": "?????????",
  "value": 1488 },
{
  "label": "?????????",
  "value": 1489 },
{
  "label": "?????????",
  "value": 1490 },
{
  "label": "?????????",
  "value": 1491 }],

[{
  "label": "?????????",
  "value": 1493 },
{
  "label": "?????????",
  "value": 1494 },
{
  "label": "?????????",
  "value": 1495 },
{
  "label": "?????????",
  "value": 1496 },
{
  "label": "?????????",
  "value": 1497 },
{
  "label": "?????????",
  "value": 1498 },
{
  "label": "?????????",
  "value": 1499 },
{
  "label": "?????????",
  "value": 1500 },
{
  "label": "?????????",
  "value": 1501 },
{
  "label": "?????????",
  "value": 1502 },
{
  "label": "?????????",
  "value": 1503 }],

[{
  "label": "????????????",
  "value": 1505 },
{
  "label": "?????????",
  "value": 1506 },
{
  "label": "??????",
  "value": 1507 },
{
  "label": "?????????",
  "value": 1508 },
{
  "label": "?????????",
  "value": 1509 },
{
  "label": "??????",
  "value": 1510 },
{
  "label": "?????????",
  "value": 1511 },
{
  "label": "?????????",
  "value": 1512 }],

[{
  "label": "?????????",
  "value": 1514 },
{
  "label": "?????????",
  "value": 1515 },
{
  "label": "?????????",
  "value": 1516 },
{
  "label": "?????????",
  "value": 1517 },
{
  "label": "?????????",
  "value": 1518 },
{
  "label": "?????????",
  "value": 1519 },
{
  "label": "?????????",
  "value": 1520 },
{
  "label": "????????????",
  "value": 1521 }],

[{
  "label": "?????????",
  "value": 1523 },
{
  "label": "??????",
  "value": 1524 },
{
  "label": "??????",
  "value": 1525 },
{
  "label": "?????????",
  "value": 1526 },
{
  "label": "?????????",
  "value": 1527 },
{
  "label": "?????????",
  "value": 1528 },
{
  "label": "?????????",
  "value": 1529 },
{
  "label": "?????????",
  "value": 1530 },
{
  "label": "?????????",
  "value": 1531 }]],


[
[{
  "label": "?????????",
  "value": 1534 },
{
  "label": "?????????",
  "value": 1535 },
{
  "label": "???????????????",
  "value": 1536 },
{
  "label": "?????????",
  "value": 1537 },
{
  "label": "?????????",
  "value": 1538 },
{
  "label": "?????????",
  "value": 1539 },
{
  "label": "?????????",
  "value": 1540 },
{
  "label": "?????????",
  "value": 1541 },
{
  "label": "?????????",
  "value": 1542 },
{
  "label": "?????????",
  "value": 1543 },
{
  "label": "?????????",
  "value": 1544 },
{
  "label": "?????????",
  "value": 1545 }],

[{
  "label": "?????????",
  "value": 1547 },
{
  "label": "???????????????",
  "value": 1548 },
{
  "label": "?????????",
  "value": 1549 },
{
  "label": "????????????",
  "value": 1550 },
{
  "label": "?????????",
  "value": 1551 },
{
  "label": "??????",
  "value": 1552 },
{
  "label": "?????????",
  "value": 1553 },
{
  "label": "?????????",
  "value": 1554 },
{
  "label": "?????????",
  "value": 1555 }],

[{
  "label": "?????????",
  "value": 1557 },
{
  "label": "?????????",
  "value": 1558 },
{
  "label": "???????????????",
  "value": 1559 },
{
  "label": "?????????",
  "value": 1560 },
{
  "label": "?????????",
  "value": 1561 },
{
  "label": "?????????",
  "value": 1562 },
{
  "label": "?????????",
  "value": 1563 },
{
  "label": "?????????",
  "value": 1564 },
{
  "label": "?????????",
  "value": 1565 },
{
  "label": "??????",
  "value": 1566 },
{
  "label": "?????????",
  "value": 1567 },
{
  "label": "?????????",
  "value": 1568 },
{
  "label": "?????????",
  "value": 1569 },
{
  "label": "?????????",
  "value": 1570 },
{
  "label": "?????????",
  "value": 1571 }],

[{
  "label": "?????????",
  "value": 1573 },
{
  "label": "?????????",
  "value": 1574 },
{
  "label": "?????????",
  "value": 1575 },
{
  "label": "?????????",
  "value": 1576 },
{
  "label": "?????????",
  "value": 1577 },
{
  "label": "??????",
  "value": 1578 },
{
  "label": "?????????",
  "value": 1579 },
{
  "label": "??????",
  "value": 1580 },
{
  "label": "?????????",
  "value": 1581 },
{
  "label": "?????????",
  "value": 1582 }],

[{
  "label": "?????????",
  "value": 1584 },
{
  "label": "?????????",
  "value": 1585 },
{
  "label": "?????????",
  "value": 1586 },
{
  "label": "?????????",
  "value": 1587 },
{
  "label": "?????????",
  "value": 1588 },
{
  "label": "?????????",
  "value": 1589 },
{
  "label": "??????",
  "value": 1590 },
{
  "label": "?????????",
  "value": 1591 },
{
  "label": "?????????",
  "value": 1592 }],

[{
  "label": "?????????",
  "value": 1594 },
{
  "label": "?????????",
  "value": 1595 },
{
  "label": "?????????",
  "value": 1596 },
{
  "label": "??????",
  "value": 1597 },
{
  "label": "??????",
  "value": 1598 }],

[{
  "label": "?????????",
  "value": 1600 },
{
  "label": "?????????",
  "value": 1601 },
{
  "label": "?????????",
  "value": 1602 },
{
  "label": "?????????",
  "value": 1603 },
{
  "label": "?????????",
  "value": 1604 },
{
  "label": "?????????",
  "value": 1605 },
{
  "label": "?????????",
  "value": 1606 },
{
  "label": "?????????",
  "value": 1607 },
{
  "label": "?????????",
  "value": 1608 },
{
  "label": "?????????",
  "value": 1609 },
{
  "label": "?????????",
  "value": 1610 },
{
  "label": "?????????",
  "value": 1611 }],

[{
  "label": "?????????",
  "value": 1613 },
{
  "label": "?????????",
  "value": 1614 },
{
  "label": "?????????",
  "value": 1615 },
{
  "label": "?????????",
  "value": 1616 },
{
  "label": "?????????",
  "value": 1617 },
{
  "label": "?????????",
  "value": 1618 },
{
  "label": "?????????",
  "value": 1619 },
{
  "label": "??????",
  "value": 1620 },
{
  "label": "?????????",
  "value": 1621 },
{
  "label": "?????????",
  "value": 1622 }],

[{
  "label": "?????????",
  "value": 1624 },
{
  "label": "?????????",
  "value": 1625 },
{
  "label": "?????????",
  "value": 1626 },
{
  "label": "??????",
  "value": 1627 },
{
  "label": "?????????",
  "value": 1628 },
{
  "label": "?????????",
  "value": 1629 }],

[{
  "label": "?????????",
  "value": 1631 },
{
  "label": "?????????",
  "value": 1632 },
{
  "label": "?????????",
  "value": 1633 },
{
  "label": "?????????",
  "value": 1634 },
{
  "label": "?????????",
  "value": 1635 },
{
  "label": "?????????",
  "value": 1636 }],

[{
  "label": "?????????",
  "value": 1638 },
{
  "label": "?????????",
  "value": 1639 },
{
  "label": "?????????",
  "value": 1640 },
{
  "label": "?????????",
  "value": 1641 },
{
  "label": "?????????",
  "value": 1642 }],

[{
  "label": "?????????",
  "value": 1644 },
{
  "label": "?????????",
  "value": 1645 },
{
  "label": "??????",
  "value": 1646 },
{
  "label": "?????????",
  "value": 1647 },
{
  "label": "?????????",
  "value": 1648 },
{
  "label": "?????????",
  "value": 1649 }],

[{
  "label": "?????????",
  "value": 1651 },
{
  "label": "?????????",
  "value": 1652 },
{
  "label": "?????????",
  "value": 1653 },
{
  "label": "?????????",
  "value": 1654 },
{
  "label": "?????????",
  "value": 1655 },
{
  "label": "?????????",
  "value": 1656 },
{
  "label": "?????????",
  "value": 1657 },
{
  "label": "?????????",
  "value": 1658 },
{
  "label": "?????????",
  "value": 1659 },
{
  "label": "?????????",
  "value": 1660 },
{
  "label": "?????????",
  "value": 1661 },
{
  "label": "?????????",
  "value": 1662 },
{
  "label": "?????????",
  "value": 1663 }],

[{
  "label": "?????????",
  "value": 1665 },
{
  "label": "?????????",
  "value": 1666 },
{
  "label": "?????????",
  "value": 1667 },
{
  "label": "??????",
  "value": 1668 },
{
  "label": "?????????",
  "value": 1669 },
{
  "label": "?????????",
  "value": 1670 },
{
  "label": "?????????",
  "value": 1671 },
{
  "label": "?????????",
  "value": 1672 },
{
  "label": "?????????",
  "value": 1673 }],

[{
  "label": "?????????",
  "value": 1675 },
{
  "label": "?????????",
  "value": 1676 },
{
  "label": "?????????",
  "value": 1677 },
{
  "label": "?????????",
  "value": 1678 },
{
  "label": "??????",
  "value": 1679 },
{
  "label": "?????????",
  "value": 1680 },
{
  "label": "?????????",
  "value": 1681 },
{
  "label": "?????????",
  "value": 1682 },
{
  "label": "?????????",
  "value": 1683 },
{
  "label": "??????",
  "value": 1684 }],

[{
  "label": "?????????",
  "value": 1686 },
{
  "label": "?????????",
  "value": 1687 },
{
  "label": "?????????",
  "value": 1688 },
{
  "label": "?????????",
  "value": 1689 },
{
  "label": "?????????",
  "value": 1690 },
{
  "label": "?????????",
  "value": 1691 },
{
  "label": "?????????",
  "value": 1692 },
{
  "label": "?????????",
  "value": 1693 },
{
  "label": "?????????",
  "value": 1694 },
{
  "label": "?????????",
  "value": 1695 }],

[{
  "label": "?????????",
  "value": 1697 },
{
  "label": "?????????",
  "value": 1698 },
{
  "label": "?????????",
  "value": 1699 },
{
  "label": "?????????",
  "value": 1700 },
{
  "label": "?????????",
  "value": 1701 },
{
  "label": "?????????",
  "value": 1702 },
{
  "label": "?????????",
  "value": 1703 },
{
  "label": "?????????",
  "value": 1704 },
{
  "label": "?????????",
  "value": 1705 },
{
  "label": "?????????",
  "value": 1706 }],

[{
  "label": "?????????",
  "value": 1708 }]],


[
[{
  "label": "?????????",
  "value": 1711 },
{
  "label": "?????????",
  "value": 1712 },
{
  "label": "?????????",
  "value": 1713 },
{
  "label": "?????????",
  "value": 1714 },
{
  "label": "?????????",
  "value": 1715 },
{
  "label": "?????????",
  "value": 1716 },
{
  "label": "?????????",
  "value": 1717 },
{
  "label": "????????????",
  "value": 1718 },
{
  "label": "?????????",
  "value": 1719 },
{
  "label": "?????????",
  "value": 1720 },
{
  "label": "?????????",
  "value": 1721 },
{
  "label": "?????????",
  "value": 1722 },
{
  "label": "?????????",
  "value": 1723 }],

[{
  "label": "????????????",
  "value": 1725 },
{
  "label": "????????????",
  "value": 1726 },
{
  "label": "?????????",
  "value": 1727 },
{
  "label": "?????????",
  "value": 1728 },
{
  "label": "?????????",
  "value": 1729 },
{
  "label": "?????????",
  "value": 1730 }],

[{
  "label": "?????????",
  "value": 1732 },
{
  "label": "?????????",
  "value": 1733 },
{
  "label": "?????????",
  "value": 1734 },
{
  "label": "?????????",
  "value": 1735 },
{
  "label": "?????????",
  "value": 1736 },
{
  "label": "?????????",
  "value": 1737 },
{
  "label": "??????",
  "value": 1738 },
{
  "label": "????????????",
  "value": 1739 }],

[{
  "label": "?????????",
  "value": 1741 },
{
  "label": "????????????",
  "value": 1742 },
{
  "label": "?????????",
  "value": 1743 },
{
  "label": "?????????",
  "value": 1744 },
{
  "label": "?????????",
  "value": 1745 },
{
  "label": "?????????",
  "value": 1746 },
{
  "label": "?????????",
  "value": 1747 },
{
  "label": "?????????",
  "value": 1748 },
{
  "label": "????????????????????????",
  "value": 1749 },
{
  "label": "????????????????????????",
  "value": 1750 },
{
  "label": "?????????",
  "value": 1751 },
{
  "label": "?????????",
  "value": 1752 },
{
  "label": "?????????",
  "value": 1753 }],

[{
  "label": "?????????",
  "value": 1755 },
{
  "label": "?????????",
  "value": 1756 },
{
  "label": "?????????",
  "value": 1757 },
{
  "label": "?????????",
  "value": 1758 },
{
  "label": "?????????",
  "value": 1759 },
{
  "label": "?????????",
  "value": 1760 },
{
  "label": "????????????",
  "value": 1761 },
{
  "label": "?????????",
  "value": 1762 },
{
  "label": "?????????",
  "value": 1763 }],

[{
  "label": "????????????",
  "value": 1765 },
{
  "label": "?????????",
  "value": 1766 },
{
  "label": "?????????",
  "value": 1767 }],

[{
  "label": "?????????",
  "value": 1769 },
{
  "label": "?????????",
  "value": 1770 },
{
  "label": "?????????",
  "value": 1771 },
{
  "label": "?????????",
  "value": 1772 },
{
  "label": "?????????",
  "value": 1773 }],

[{
  "label": "?????????",
  "value": 1775 },
{
  "label": "?????????",
  "value": 1776 },
{
  "label": "?????????",
  "value": 1777 },
{
  "label": "?????????",
  "value": 1778 },
{
  "label": "?????????",
  "value": 1779 },
{
  "label": "?????????",
  "value": 1780 },
{
  "label": "?????????",
  "value": 1781 }],

[{
  "label": "?????????",
  "value": 1783 },
{
  "label": "?????????",
  "value": 1784 },
{
  "label": "?????????",
  "value": 1785 },
{
  "label": "?????????",
  "value": 1786 },
{
  "label": "?????????",
  "value": 1787 },
{
  "label": "?????????",
  "value": 1788 },
{
  "label": "?????????",
  "value": 1789 },
{
  "label": "?????????",
  "value": 1790 }],

[{
  "label": "?????????",
  "value": 1792 },
{
  "label": "?????????",
  "value": 1793 },
{
  "label": "?????????",
  "value": 1794 },
{
  "label": "?????????",
  "value": 1795 },
{
  "label": "?????????",
  "value": 1796 },
{
  "label": "?????????",
  "value": 1797 },
{
  "label": "?????????",
  "value": 1798 },
{
  "label": "?????????",
  "value": 1799 },
{
  "label": "?????????",
  "value": 1800 },
{
  "label": "?????????",
  "value": 1801 }],

[{
  "label": "?????????",
  "value": 1803 },
{
  "label": "?????????",
  "value": 1804 },
{
  "label": "?????????",
  "value": 1805 },
{
  "label": "?????????",
  "value": 1806 },
{
  "label": "?????????",
  "value": 1807 },
{
  "label": "?????????",
  "value": 1808 }],

[{
  "label": "?????????",
  "value": 1810 },
{
  "label": "??????",
  "value": 1811 },
{
  "label": "?????????",
  "value": 1812 }],

[{
  "label": "?????????",
  "value": 1814 },
{
  "label": "?????????",
  "value": 1815 },
{
  "label": "?????????",
  "value": 1816 },
{
  "label": "?????????",
  "value": 1817 },
{
  "label": "?????????",
  "value": 1818 },
{
  "label": "?????????",
  "value": 1819 },
{
  "label": "?????????",
  "value": 1820 },
{
  "label": "?????????",
  "value": 1821 }],

[{
  "label": "?????????",
  "value": 1823 },
{
  "label": "?????????",
  "value": 1824 },
{
  "label": "?????????",
  "value": 1825 },
{
  "label": "???????????????",
  "value": 1826 }]],


[
[{
  "label": "?????????",
  "value": 1829 },
{
  "label": "?????????",
  "value": 1830 },
{
  "label": "?????????",
  "value": 1831 },
{
  "label": "?????????",
  "value": 1832 },
{
  "label": "?????????",
  "value": 1833 },
{
  "label": "?????????",
  "value": 1834 },
{
  "label": "?????????",
  "value": 1835 },
{
  "label": "?????????",
  "value": 1836 },
{
  "label": "?????????",
  "value": 1837 }],

[{
  "label": "?????????",
  "value": 1839 },
{
  "label": "?????????",
  "value": 1840 },
{
  "label": "?????????",
  "value": 1841 },
{
  "label": "?????????",
  "value": 1842 },
{
  "label": "?????????",
  "value": 1843 },
{
  "label": "??????",
  "value": 1844 },
{
  "label": "?????????",
  "value": 1845 },
{
  "label": "?????????",
  "value": 1846 },
{
  "label": "?????????",
  "value": 1847 }],

[{
  "label": "?????????",
  "value": 1849 },
{
  "label": "?????????",
  "value": 1850 },
{
  "label": "?????????",
  "value": 1851 },
{
  "label": "?????????",
  "value": 1852 },
{
  "label": "?????????",
  "value": 1853 }],

[{
  "label": "?????????",
  "value": 1855 },
{
  "label": "?????????",
  "value": 1856 },
{
  "label": "?????????",
  "value": 1857 },
{
  "label": "?????????",
  "value": 1858 },
{
  "label": "?????????",
  "value": 1859 },
{
  "label": "?????????",
  "value": 1860 },
{
  "label": "?????????",
  "value": 1861 },
{
  "label": "?????????",
  "value": 1862 },
{
  "label": "?????????",
  "value": 1863 },
{
  "label": "?????????",
  "value": 1864 },
{
  "label": "?????????",
  "value": 1865 },
{
  "label": "?????????",
  "value": 1866 }],

[{
  "label": "?????????",
  "value": 1868 },
{
  "label": "?????????",
  "value": 1869 },
{
  "label": "?????????",
  "value": 1870 },
{
  "label": "?????????",
  "value": 1871 },
{
  "label": "?????????",
  "value": 1872 },
{
  "label": "?????????",
  "value": 1873 },
{
  "label": "?????????",
  "value": 1874 },
{
  "label": "?????????",
  "value": 1875 },
{
  "label": "?????????",
  "value": 1876 },
{
  "label": "?????????",
  "value": 1877 },
{
  "label": "?????????????????????",
  "value": 1878 },
{
  "label": "?????????",
  "value": 1879 }],

[{
  "label": "????????????",
  "value": 1881 },
{
  "label": "?????????",
  "value": 1882 },
{
  "label": "?????????",
  "value": 1883 },
{
  "label": "?????????",
  "value": 1884 },
{
  "label": "?????????",
  "value": 1885 },
{
  "label": "?????????",
  "value": 1886 },
{
  "label": "?????????",
  "value": 1887 },
{
  "label": "?????????",
  "value": 1888 },
{
  "label": "?????????",
  "value": 1889 }],

[{
  "label": "?????????",
  "value": 1891 },
{
  "label": "?????????",
  "value": 1892 },
{
  "label": "?????????",
  "value": 1893 },
{
  "label": "?????????",
  "value": 1894 },
{
  "label": "??????",
  "value": 1895 },
{
  "label": "?????????",
  "value": 1896 },
{
  "label": "?????????",
  "value": 1897 },
{
  "label": "?????????",
  "value": 1898 },
{
  "label": "?????????",
  "value": 1899 }],

[{
  "label": "?????????",
  "value": 1901 },
{
  "label": "????????????",
  "value": 1902 },
{
  "label": "?????????",
  "value": 1903 },
{
  "label": "?????????",
  "value": 1904 }],

[{
  "label": "?????????",
  "value": 1906 },
{
  "label": "?????????",
  "value": 1907 },
{
  "label": "??????",
  "value": 1908 },
{
  "label": "?????????",
  "value": 1909 },
{
  "label": "?????????",
  "value": 1910 },
{
  "label": "?????????",
  "value": 1911 }],

[{
  "label": "?????????",
  "value": 1913 },
{
  "label": "?????????",
  "value": 1914 },
{
  "label": "?????????",
  "value": 1915 },
{
  "label": "?????????",
  "value": 1916 },
{
  "label": "?????????",
  "value": 1917 },
{
  "label": "?????????",
  "value": 1918 },
{
  "label": "?????????",
  "value": 1919 },
{
  "label": "?????????",
  "value": 1920 },
{
  "label": "?????????",
  "value": 1921 },
{
  "label": "?????????",
  "value": 1922 },
{
  "label": "?????????",
  "value": 1923 }],

[{
  "label": "?????????",
  "value": 1925 },
{
  "label": "????????????",
  "value": 1926 },
{
  "label": "?????????",
  "value": 1927 },
{
  "label": "?????????",
  "value": 1928 },
{
  "label": "?????????",
  "value": 1929 },
{
  "label": "??????",
  "value": 1930 },
{
  "label": "?????????",
  "value": 1931 },
{
  "label": "?????????",
  "value": 1932 },
{
  "label": "?????????",
  "value": 1933 },
{
  "label": "?????????",
  "value": 1934 },
{
  "label": "?????????????????????",
  "value": 1935 }],

[{
  "label": "?????????",
  "value": 1937 },
{
  "label": "?????????",
  "value": 1938 },
{
  "label": "?????????",
  "value": 1939 },
{
  "label": "?????????",
  "value": 1940 },
{
  "label": "?????????",
  "value": 1941 },
{
  "label": "?????????",
  "value": 1942 },
{
  "label": "?????????????????????",
  "value": 1943 },
{
  "label": "?????????????????????",
  "value": 1944 },
{
  "label": "?????????????????????",
  "value": 1945 },
{
  "label": "???????????????????????????",
  "value": 1946 },
{
  "label": "?????????????????????",
  "value": 1947 },
{
  "label": "?????????",
  "value": 1948 }],

[{
  "label": "?????????",
  "value": 1950 },
{
  "label": "?????????",
  "value": 1951 },
{
  "label": "?????????",
  "value": 1952 },
{
  "label": "????????????",
  "value": 1953 },
{
  "label": "?????????",
  "value": 1954 }],

[{
  "label": "?????????",
  "value": 1956 },
{
  "label": "?????????",
  "value": 1957 },
{
  "label": "?????????",
  "value": 1958 },
{
  "label": "?????????",
  "value": 1959 },
{
  "label": "?????????",
  "value": 1960 },
{
  "label": "?????????",
  "value": 1961 },
{
  "label": "?????????",
  "value": 1962 },
{
  "label": "?????????",
  "value": 1963 }]],


[
[{
  "label": "?????????",
  "value": 1966 },
{
  "label": "?????????",
  "value": 1967 },
{
  "label": "?????????",
  "value": 1968 },
{
  "label": "?????????",
  "value": 1969 },
{
  "label": "?????????",
  "value": 1970 },
{
  "label": "?????????",
  "value": 1971 },
{
  "label": "?????????",
  "value": 1972 },
{
  "label": "?????????",
  "value": 1973 },
{
  "label": "?????????",
  "value": 1974 },
{
  "label": "?????????",
  "value": 1975 },
{
  "label": "?????????",
  "value": 1976 }],

[{
  "label": "?????????",
  "value": 1978 },
{
  "label": "?????????",
  "value": 1979 },
{
  "label": "?????????",
  "value": 1980 },
{
  "label": "?????????",
  "value": 1981 },
{
  "label": "?????????",
  "value": 1982 },
{
  "label": "?????????",
  "value": 1983 },
{
  "label": "?????????????????????",
  "value": 1984 },
{
  "label": "?????????",
  "value": 1985 },
{
  "label": "?????????",
  "value": 1986 },
{
  "label": "?????????",
  "value": 1987 }],

[{
  "label": "?????????",
  "value": 1989 },
{
  "label": "?????????",
  "value": 1990 },
{
  "label": "?????????",
  "value": 1991 },
{
  "label": "?????????",
  "value": 1992 },
{
  "label": "?????????",
  "value": 1993 },
{
  "label": "?????????",
  "value": 1994 },
{
  "label": "????????????",
  "value": 1995 },
{
  "label": "????????????",
  "value": 1996 },
{
  "label": "????????????",
  "value": 1997 },
{
  "label": "????????????",
  "value": 1998 }],

[{
  "label": "?????????",
  "value": 2000 },
{
  "label": "?????????",
  "value": 2001 },
{
  "label": "?????????",
  "value": 2002 }],

[{
  "label": "?????????",
  "value": 2004 },
{
  "label": "?????????",
  "value": 2005 },
{
  "label": "?????????",
  "value": 2006 },
{
  "label": "?????????",
  "value": 2007 },
{
  "label": "?????????",
  "value": 2008 },
{
  "label": "?????????",
  "value": 2009 },
{
  "label": "?????????",
  "value": 2010 }],

[{
  "label": "?????????",
  "value": 2012 },
{
  "label": "?????????",
  "value": 2013 },
{
  "label": "?????????",
  "value": 2014 },
{
  "label": "?????????",
  "value": 2015 },
{
  "label": "?????????",
  "value": 2016 }],

[{
  "label": "?????????",
  "value": 2018 },
{
  "label": "?????????",
  "value": 2019 },
{
  "label": "?????????",
  "value": 2020 },
{
  "label": "?????????",
  "value": 2021 },
{
  "label": "?????????",
  "value": 2022 },
{
  "label": "?????????",
  "value": 2023 },
{
  "label": "?????????",
  "value": 2024 }],

[{
  "label": "?????????",
  "value": 2026 },
{
  "label": "?????????",
  "value": 2027 },
{
  "label": "?????????",
  "value": 2028 },
{
  "label": "?????????",
  "value": 2029 },
{
  "label": "?????????",
  "value": 2030 },
{
  "label": "?????????",
  "value": 2031 },
{
  "label": "?????????",
  "value": 2032 },
{
  "label": "?????????",
  "value": 2033 },
{
  "label": "?????????",
  "value": 2034 }],

[{
  "label": "?????????",
  "value": 2036 },
{
  "label": "?????????",
  "value": 2037 },
{
  "label": "?????????",
  "value": 2038 },
{
  "label": "?????????",
  "value": 2039 },
{
  "label": "?????????",
  "value": 2040 }],

[{
  "label": "?????????",
  "value": 2042 },
{
  "label": "?????????",
  "value": 2043 },
{
  "label": "?????????",
  "value": 2044 },
{
  "label": "?????????",
  "value": 2045 },
{
  "label": "?????????",
  "value": 2046 },
{
  "label": "?????????",
  "value": 2047 },
{
  "label": "?????????",
  "value": 2048 },
{
  "label": "?????????",
  "value": 2049 }],

[{
  "label": "?????????",
  "value": 2051 },
{
  "label": "?????????",
  "value": 2052 },
{
  "label": "?????????",
  "value": 2053 },
{
  "label": "?????????",
  "value": 2054 },
{
  "label": "?????????",
  "value": 2055 }],

[{
  "label": "?????????",
  "value": 2057 },
{
  "label": "?????????",
  "value": 2058 },
{
  "label": "?????????",
  "value": 2059 },
{
  "label": "?????????",
  "value": 2060 },
{
  "label": "?????????",
  "value": 2061 },
{
  "label": "?????????",
  "value": 2062 },
{
  "label": "?????????",
  "value": 2063 },
{
  "label": "?????????",
  "value": 2064 }],

[{
  "label": "??????",
  "value": 2066 },
{
  "label": "?????????",
  "value": 2067 },
{
  "label": "?????????",
  "value": 2068 },
{
  "label": "?????????",
  "value": 2069 }],

[{
  "label": "?????????",
  "value": 2071 },
{
  "label": "?????????",
  "value": 2072 },
{
  "label": "?????????",
  "value": 2073 },
{
  "label": "?????????",
  "value": 2074 },
{
  "label": "?????????",
  "value": 2075 },
{
  "label": "?????????",
  "value": 2076 }],

[{
  "label": "?????????",
  "value": 2078 },
{
  "label": "?????????",
  "value": 2079 },
{
  "label": "?????????",
  "value": 2080 },
{
  "label": "?????????",
  "value": 2081 }],

[{
  "label": "?????????",
  "value": 2083 },
{
  "label": "?????????",
  "value": 2084 },
{
  "label": "?????????",
  "value": 2085 },
{
  "label": "?????????",
  "value": 2086 },
{
  "label": "???????????????????????????",
  "value": 2087 },
{
  "label": "?????????????????????",
  "value": 2088 },
{
  "label": "?????????",
  "value": 2089 },
{
  "label": "?????????",
  "value": 2090 }],

[{
  "label": "?????????",
  "value": 2092 },
{
  "label": "?????????",
  "value": 2093 },
{
  "label": "?????????",
  "value": 2094 },
{
  "label": "?????????",
  "value": 2095 },
{
  "label": "?????????",
  "value": 2096 },
{
  "label": "?????????",
  "value": 2097 },
{
  "label": "?????????",
  "value": 2098 },
{
  "label": "?????????",
  "value": 2099 },
{
  "label": "?????????",
  "value": 2100 },
{
  "label": "?????????",
  "value": 2101 },
{
  "label": "?????????",
  "value": 2102 },
{
  "label": "?????????",
  "value": 2103 },
{
  "label": "?????????",
  "value": 2104 },
{
  "label": "?????????",
  "value": 2105 },
{
  "label": "?????????",
  "value": 2106 },
{
  "label": "?????????",
  "value": 2107 },
{
  "label": "?????????",
  "value": 2108 },
{
  "label": "?????????",
  "value": 2109 },
{
  "label": "????????????",
  "value": 2110 },
{
  "label": "????????????",
  "value": 2111 },
{
  "label": "????????????",
  "value": 2112 },
{
  "label": "?????????",
  "value": 2113 },
{
  "label": "?????????",
  "value": 2114 },
{
  "label": "?????????",
  "value": 2115 },
{
  "label": "?????????",
  "value": 2116 },
{
  "label": "?????????",
  "value": 2117 },
{
  "label": "?????????",
  "value": 2118 },
{
  "label": "?????????",
  "value": 2119 },
{
  "label": "?????????",
  "value": 2120 },
{
  "label": "?????????",
  "value": 2121 },
{
  "label": "?????????",
  "value": 2122 }],

[{
  "label": "?????????",
  "value": 2124 },
{
  "label": "??????",
  "value": 2125 },
{
  "label": "????????????",
  "value": 2126 },
{
  "label": "???????????????",
  "value": 2127 },
{
  "label": "?????????",
  "value": 2128 },
{
  "label": "?????????",
  "value": 2129 },
{
  "label": "?????????",
  "value": 2130 },
{
  "label": "?????????",
  "value": 2131 },
{
  "label": "?????????",
  "value": 2132 },
{
  "label": "?????????",
  "value": 2133 },
{
  "label": "?????????",
  "value": 2134 },
{
  "label": "?????????",
  "value": 2135 },
{
  "label": "?????????",
  "value": 2136 },
{
  "label": "?????????",
  "value": 2137 },
{
  "label": "?????????",
  "value": 2138 },
{
  "label": "?????????",
  "value": 2139 },
{
  "label": "?????????",
  "value": 2140 },
{
  "label": "?????????",
  "value": 2141 },
{
  "label": "?????????",
  "value": 2142 },
{
  "label": "?????????",
  "value": 2143 },
{
  "label": "?????????",
  "value": 2144 },
{
  "label": "?????????",
  "value": 2145 }],

[{
  "label": "?????????",
  "value": 2147 },
{
  "label": "?????????",
  "value": 2148 },
{
  "label": "?????????",
  "value": 2149 }],

[{
  "label": "?????????",
  "value": 2151 },
{
  "label": "?????????",
  "value": 2152 },
{
  "label": "?????????",
  "value": 2153 },
{
  "label": "?????????",
  "value": 2154 },
{
  "label": "?????????",
  "value": 2155 }],

[{
  "label": "?????????",
  "value": 2157 },
{
  "label": "?????????",
  "value": 2158 },
{
  "label": "?????????",
  "value": 2159 },
{
  "label": "?????????",
  "value": 2160 },
{
  "label": "?????????",
  "value": 2161 }]],


[
[{
  "label": "?????????",
  "value": 2164 },
{
  "label": "?????????",
  "value": 2165 },
{
  "label": "?????????",
  "value": 2166 },
{
  "label": "????????????",
  "value": 2167 },
{
  "label": "?????????",
  "value": 2168 },
{
  "label": "?????????",
  "value": 2169 },
{
  "label": "?????????",
  "value": 2170 },
{
  "label": "?????????",
  "value": 2171 },
{
  "label": "?????????",
  "value": 2172 },
{
  "label": "?????????",
  "value": 2173 },
{
  "label": "?????????",
  "value": 2174 },
{
  "label": "??????",
  "value": 2175 },
{
  "label": "????????????",
  "value": 2176 }],

[{
  "label": "?????????",
  "value": 2178 },
{
  "label": "?????????",
  "value": 2179 },
{
  "label": "?????????",
  "value": 2180 },
{
  "label": "?????????",
  "value": 2181 },
{
  "label": "?????????",
  "value": 2182 },
{
  "label": "?????????",
  "value": 2183 },
{
  "label": "?????????",
  "value": 2184 },
{
  "label": "?????????",
  "value": 2185 },
{
  "label": "?????????????????????",
  "value": 2186 },
{
  "label": "?????????????????????",
  "value": 2187 },
{
  "label": "????????????",
  "value": 2188 }],

[{
  "label": "?????????",
  "value": 2190 },
{
  "label": "?????????",
  "value": 2191 },
{
  "label": "?????????",
  "value": 2192 },
{
  "label": "?????????",
  "value": 2193 },
{
  "label": "?????????",
  "value": 2194 },
{
  "label": "?????????",
  "value": 2195 },
{
  "label": "?????????",
  "value": 2196 },
{
  "label": "?????????",
  "value": 2197 },
{
  "label": "?????????",
  "value": 2198 },
{
  "label": "?????????",
  "value": 2199 },
{
  "label": "?????????",
  "value": 2200 },
{
  "label": "?????????",
  "value": 2201 },
{
  "label": "?????????????????????",
  "value": 2202 },
{
  "label": "?????????",
  "value": 2203 },
{
  "label": "?????????",
  "value": 2204 },
{
  "label": "?????????",
  "value": 2205 },
{
  "label": "?????????????????????",
  "value": 2206 }],

[{
  "label": "?????????",
  "value": 2208 },
{
  "label": "?????????",
  "value": 2209 },
{
  "label": "?????????",
  "value": 2210 },
{
  "label": "?????????",
  "value": 2211 },
{
  "label": "??????",
  "value": 2212 },
{
  "label": "?????????",
  "value": 2213 },
{
  "label": "?????????",
  "value": 2214 }],

[{
  "label": "?????????",
  "value": 2216 },
{
  "label": "?????????",
  "value": 2217 },
{
  "label": "????????????",
  "value": 2218 },
{
  "label": "?????????",
  "value": 2219 }],

[{
  "label": "?????????",
  "value": 2221 },
{
  "label": "?????????",
  "value": 2222 },
{
  "label": "?????????",
  "value": 2223 },
{
  "label": "?????????",
  "value": 2224 }],

[{
  "label": "?????????",
  "value": 2226 },
{
  "label": "?????????",
  "value": 2227 },
{
  "label": "?????????",
  "value": 2228 },
{
  "label": "?????????",
  "value": 2229 }],

[{
  "label": "?????????",
  "value": 2231 },
{
  "label": "?????????",
  "value": 2232 },
{
  "label": "?????????",
  "value": 2233 },
{
  "label": "?????????",
  "value": 2234 },
{
  "label": "?????????",
  "value": 2235 }],

[{
  "label": "?????????",
  "value": 2237 },
{
  "label": "?????????",
  "value": 2238 },
{
  "label": "????????????",
  "value": 2239 },
{
  "label": "??????",
  "value": 2240 },
{
  "label": "?????????",
  "value": 2241 },
{
  "label": "?????????",
  "value": 2242 },
{
  "label": "?????????",
  "value": 2243 },
{
  "label": "?????????",
  "value": 2244 }],

[{
  "label": "?????????",
  "value": 2246 },
{
  "label": "?????????",
  "value": 2247 },
{
  "label": "?????????",
  "value": 2248 },
{
  "label": "?????????",
  "value": 2249 },
{
  "label": "?????????",
  "value": 2250 },
{
  "label": "?????????",
  "value": 2251 },
{
  "label": "?????????",
  "value": 2252 },
{
  "label": "?????????",
  "value": 2253 },
{
  "label": "?????????",
  "value": 2254 },
{
  "label": "?????????",
  "value": 2255 },
{
  "label": "?????????",
  "value": 2256 },
{
  "label": "?????????????????????",
  "value": 2257 }],

[{
  "label": "?????????",
  "value": 2259 },
{
  "label": "?????????",
  "value": 2260 },
{
  "label": "?????????",
  "value": 2261 },
{
  "label": "?????????????????????",
  "value": 2262 },
{
  "label": "???????????????",
  "value": 2263 }],

[{
  "label": "????????????",
  "value": 2265 },
{
  "label": "?????????",
  "value": 2266 },
{
  "label": "?????????",
  "value": 2267 },
{
  "label": "?????????",
  "value": 2268 },
{
  "label": "?????????",
  "value": 2269 },
{
  "label": "????????????????????????",
  "value": 2270 },
{
  "label": "????????????????????????",
  "value": 2271 },
{
  "label": "?????????????????????",
  "value": 2272 },
{
  "label": "?????????????????????",
  "value": 2273 },
{
  "label": "?????????????????????",
  "value": 2274 },
{
  "label": "?????????",
  "value": 2275 }],

[{
  "label": "?????????",
  "value": 2277 },
{
  "label": "?????????",
  "value": 2278 },
{
  "label": "?????????",
  "value": 2279 },
{
  "label": "?????????",
  "value": 2280 },
{
  "label": "?????????????????????",
  "value": 2281 },
{
  "label": "?????????",
  "value": 2282 }],

[{
  "label": "?????????",
  "value": 2284 },
{
  "label": "?????????",
  "value": 2285 },
{
  "label": "?????????",
  "value": 2286 },
{
  "label": "?????????",
  "value": 2287 },
{
  "label": "?????????",
  "value": 2288 },
{
  "label": "?????????",
  "value": 2289 },
{
  "label": "?????????",
  "value": 2290 }]],


[
[{
  "label": "?????????",
  "value": 2293 },
{
  "label": "?????????",
  "value": 2294 },
{
  "label": "?????????",
  "value": 2295 },
{
  "label": "?????????",
  "value": 2296 }],

[{
  "label": "?????????",
  "value": 2298 },
{
  "label": "?????????",
  "value": 2299 },
{
  "label": "?????????",
  "value": 2300 },
{
  "label": "?????????",
  "value": 2301 }],

[{
  "label": "????????????",
  "value": 2303 },
{
  "label": "????????????",
  "value": 2304 },
{
  "label": "????????????",
  "value": 2305 }],

[{
  "label": "????????????",
  "value": 2307 },
{
  "label": "?????????",
  "value": 2308 },
{
  "label": "?????????",
  "value": 2309 },
{
  "label": "?????????",
  "value": 2310 },
{
  "label": "?????????",
  "value": 2311 },
{
  "label": "?????????",
  "value": 2312 },
{
  "label": "?????????",
  "value": 2313 },
{
  "label": "?????????",
  "value": 2314 },
{
  "label": "?????????",
  "value": 2315 },
{
  "label": "?????????",
  "value": 2316 },
{
  "label": "?????????????????????",
  "value": 2317 },
{
  "label": "?????????????????????",
  "value": 2318 },
{
  "label": "?????????????????????",
  "value": 2319 },
{
  "label": "?????????????????????",
  "value": 2320 },
{
  "label": "???????????????????????????",
  "value": 2321 },
{
  "label": "???????????????????????????",
  "value": 2322 }]],


[
[{
  "label": "?????????",
  "value": 2325 },
{
  "label": "?????????",
  "value": 2326 },
{
  "label": "?????????",
  "value": 2327 },
{
  "label": "????????????",
  "value": 2328 },
{
  "label": "?????????",
  "value": 2329 },
{
  "label": "????????????",
  "value": 2330 },
{
  "label": "????????????",
  "value": 2331 },
{
  "label": "?????????",
  "value": 2332 },
{
  "label": "?????????",
  "value": 2333 },
{
  "label": "?????????",
  "value": 2334 },
{
  "label": "?????????",
  "value": 2335 },
{
  "label": "?????????",
  "value": 2336 },
{
  "label": "?????????",
  "value": 2337 },
{
  "label": "?????????",
  "value": 2338 },
{
  "label": "?????????",
  "value": 2339 },
{
  "label": "?????????",
  "value": 2340 },
{
  "label": "?????????",
  "value": 2341 },
{
  "label": "?????????",
  "value": 2342 },
{
  "label": "?????????",
  "value": 2343 },
{
  "label": "?????????",
  "value": 2344 },
{
  "label": "?????????",
  "value": 2345 },
{
  "label": "?????????",
  "value": 2346 },
{
  "label": "?????????",
  "value": 2347 },
{
  "label": "?????????",
  "value": 2348 },
{
  "label": "?????????",
  "value": 2349 },
{
  "label": "?????????",
  "value": 2350 },
{
  "label": "?????????",
  "value": 2351 },
{
  "label": "?????????",
  "value": 2352 },
{
  "label": "??????",
  "value": 2353 },
{
  "label": "??????",
  "value": 2354 },
{
  "label": "?????????",
  "value": 2355 },
{
  "label": "?????????",
  "value": 2356 },
{
  "label": "?????????",
  "value": 2357 },
{
  "label": "?????????",
  "value": 2358 },
{
  "label": "????????????????????????",
  "value": 2359 },
{
  "label": "??????????????????????????????",
  "value": 2360 },
{
  "label": "??????????????????????????????",
  "value": 2361 },
{
  "label": "??????????????????????????????",
  "value": 2362 }],

[{
  "label": "????????????",
  "value": 2364 },
{
  "label": "????????????",
  "value": 2365 },
{
  "label": "????????????",
  "value": 2366 }]],


[
[{
  "label": "?????????",
  "value": 2369 },
{
  "label": "?????????",
  "value": 2370 },
{
  "label": "?????????",
  "value": 2371 },
{
  "label": "?????????",
  "value": 2372 },
{
  "label": "?????????",
  "value": 2373 },
{
  "label": "????????????",
  "value": 2374 },
{
  "label": "????????????",
  "value": 2375 },
{
  "label": "?????????",
  "value": 2376 },
{
  "label": "?????????",
  "value": 2377 },
{
  "label": "?????????",
  "value": 2378 },
{
  "label": "?????????",
  "value": 2379 },
{
  "label": "??????",
  "value": 2380 },
{
  "label": "?????????",
  "value": 2381 },
{
  "label": "?????????",
  "value": 2382 },
{
  "label": "?????????",
  "value": 2383 },
{
  "label": "????????????",
  "value": 2384 },
{
  "label": "?????????",
  "value": 2385 },
{
  "label": "?????????",
  "value": 2386 },
{
  "label": "?????????",
  "value": 2387 }],

[{
  "label": "????????????",
  "value": 2389 },
{
  "label": "?????????",
  "value": 2390 },
{
  "label": "?????????",
  "value": 2391 },
{
  "label": "?????????",
  "value": 2392 },
{
  "label": "??????",
  "value": 2393 },
{
  "label": "?????????",
  "value": 2394 }],

[{
  "label": "??????",
  "value": 2396 },
{
  "label": "??????",
  "value": 2397 },
{
  "label": "?????????",
  "value": 2398 },
{
  "label": "?????????",
  "value": 2399 },
{
  "label": "?????????",
  "value": 2400 }],

[{
  "label": "?????????",
  "value": 2402 },
{
  "label": "?????????",
  "value": 2403 },
{
  "label": "????????????",
  "value": 2404 },
{
  "label": "??????",
  "value": 2405 },
{
  "label": "?????????",
  "value": 2406 },
{
  "label": "?????????",
  "value": 2407 },
{
  "label": "?????????",
  "value": 2408 }],

[{
  "label": "?????????",
  "value": 2410 },
{
  "label": "?????????",
  "value": 2411 },
{
  "label": "?????????",
  "value": 2412 },
{
  "label": "?????????",
  "value": 2413 },
{
  "label": "?????????",
  "value": 2414 },
{
  "label": "?????????",
  "value": 2415 }],

[{
  "label": "?????????",
  "value": 2417 },
{
  "label": "?????????",
  "value": 2418 },
{
  "label": "?????????",
  "value": 2419 },
{
  "label": "?????????",
  "value": 2420 },
{
  "label": "??????",
  "value": 2421 },
{
  "label": "?????????",
  "value": 2422 },
{
  "label": "?????????????????????",
  "value": 2423 },
{
  "label": "?????????",
  "value": 2424 },
{
  "label": "?????????",
  "value": 2425 }],

[{
  "label": "?????????",
  "value": 2427 },
{
  "label": "?????????",
  "value": 2428 },
{
  "label": "?????????",
  "value": 2429 },
{
  "label": "?????????",
  "value": 2430 },
{
  "label": "?????????",
  "value": 2431 },
{
  "label": "?????????",
  "value": 2432 },
{
  "label": "?????????",
  "value": 2433 }],

[{
  "label": "?????????",
  "value": 2435 },
{
  "label": "?????????",
  "value": 2436 },
{
  "label": "?????????",
  "value": 2437 },
{
  "label": "?????????",
  "value": 2438 },
{
  "label": "?????????",
  "value": 2439 }],

[{
  "label": "?????????",
  "value": 2441 },
{
  "label": "?????????",
  "value": 2442 },
{
  "label": "?????????",
  "value": 2443 },
{
  "label": "?????????",
  "value": 2444 },
{
  "label": "?????????",
  "value": 2445 }],

[{
  "label": "?????????",
  "value": 2447 },
{
  "label": "?????????",
  "value": 2448 },
{
  "label": "????????????",
  "value": 2449 },
{
  "label": "????????????",
  "value": 2450 },
{
  "label": "?????????",
  "value": 2451 },
{
  "label": "?????????",
  "value": 2452 },
{
  "label": "?????????",
  "value": 2453 },
{
  "label": "?????????",
  "value": 2454 },
{
  "label": "?????????????????????",
  "value": 2455 },
{
  "label": "?????????????????????",
  "value": 2456 },
{
  "label": "????????????",
  "value": 2457 }],

[{
  "label": "?????????",
  "value": 2459 },
{
  "label": "?????????",
  "value": 2460 },
{
  "label": "?????????",
  "value": 2461 },
{
  "label": "?????????",
  "value": 2462 },
{
  "label": "?????????",
  "value": 2463 },
{
  "label": "?????????",
  "value": 2464 },
{
  "label": "?????????",
  "value": 2465 },
{
  "label": "?????????",
  "value": 2466 },
{
  "label": "?????????",
  "value": 2467 }],

[{
  "label": "?????????",
  "value": 2469 },
{
  "label": "?????????",
  "value": 2470 },
{
  "label": "?????????",
  "value": 2471 },
{
  "label": "?????????",
  "value": 2472 },
{
  "label": "?????????",
  "value": 2473 },
{
  "label": "?????????",
  "value": 2474 }],

[{
  "label": "?????????",
  "value": 2476 },
{
  "label": "?????????",
  "value": 2477 },
{
  "label": "?????????",
  "value": 2478 },
{
  "label": "?????????",
  "value": 2479 },
{
  "label": "?????????",
  "value": 2480 },
{
  "label": "??????",
  "value": 2481 },
{
  "label": "??????",
  "value": 2482 },
{
  "label": "?????????",
  "value": 2483 },
{
  "label": "?????????",
  "value": 2484 },
{
  "label": "?????????",
  "value": 2485 }],

[{
  "label": "?????????",
  "value": 2487 },
{
  "label": "?????????",
  "value": 2488 },
{
  "label": "?????????",
  "value": 2489 },
{
  "label": "?????????",
  "value": 2490 },
{
  "label": "?????????",
  "value": 2491 },
{
  "label": "?????????",
  "value": 2492 }],

[{
  "label": "?????????",
  "value": 2494 },
{
  "label": "?????????",
  "value": 2495 },
{
  "label": "?????????",
  "value": 2496 },
{
  "label": "?????????",
  "value": 2497 },
{
  "label": "?????????",
  "value": 2498 },
{
  "label": "??????",
  "value": 2499 },
{
  "label": "?????????",
  "value": 2500 }],

[{
  "label": "?????????",
  "value": 2502 },
{
  "label": "?????????",
  "value": 2503 },
{
  "label": "?????????",
  "value": 2504 },
{
  "label": "?????????",
  "value": 2505 },
{
  "label": "?????????",
  "value": 2506 },
{
  "label": "?????????",
  "value": 2507 },
{
  "label": "?????????",
  "value": 2508 },
{
  "label": "?????????",
  "value": 2509 }],

[{
  "label": "?????????",
  "value": 2511 },
{
  "label": "?????????",
  "value": 2512 },
{
  "label": "?????????",
  "value": 2513 },
{
  "label": "?????????",
  "value": 2514 },
{
  "label": "?????????",
  "value": 2515 }],

[{
  "label": "?????????",
  "value": 2517 },
{
  "label": "?????????",
  "value": 2518 },
{
  "label": "?????????",
  "value": 2519 },
{
  "label": "?????????",
  "value": 2520 }],

[{
  "label": "?????????",
  "value": 2522 },
{
  "label": "??????",
  "value": 2523 },
{
  "label": "??????",
  "value": 2524 },
{
  "label": "?????????",
  "value": 2525 },
{
  "label": "????????????",
  "value": 2526 },
{
  "label": "?????????",
  "value": 2527 },
{
  "label": "?????????",
  "value": 2528 },
{
  "label": "?????????",
  "value": 2529 },
{
  "label": "????????????",
  "value": 2530 },
{
  "label": "?????????",
  "value": 2531 },
{
  "label": "?????????",
  "value": 2532 },
{
  "label": "????????????",
  "value": 2533 },
{
  "label": "?????????",
  "value": 2534 }],

[{
  "label": "?????????",
  "value": 2536 },
{
  "label": "?????????",
  "value": 2537 },
{
  "label": "?????????",
  "value": 2538 },
{
  "label": "?????????",
  "value": 2539 },
{
  "label": "?????????",
  "value": 2540 },
{
  "label": "?????????",
  "value": 2541 },
{
  "label": "?????????",
  "value": 2542 },
{
  "label": "?????????",
  "value": 2543 },
{
  "label": "?????????",
  "value": 2544 },
{
  "label": "?????????",
  "value": 2545 },
{
  "label": "?????????",
  "value": 2546 },
{
  "label": "?????????",
  "value": 2547 },
{
  "label": "?????????",
  "value": 2548 },
{
  "label": "?????????",
  "value": 2549 },
{
  "label": "?????????",
  "value": 2550 },
{
  "label": "?????????",
  "value": 2551 },
{
  "label": "?????????",
  "value": 2552 },
{
  "label": "?????????",
  "value": 2553 }],

[{
  "label": "?????????",
  "value": 2555 },
{
  "label": "?????????????????????",
  "value": 2556 },
{
  "label": "?????????",
  "value": 2557 },
{
  "label": "?????????",
  "value": 2558 },
{
  "label": "?????????",
  "value": 2559 },
{
  "label": "?????????",
  "value": 2560 },
{
  "label": "?????????",
  "value": 2561 },
{
  "label": "?????????",
  "value": 2562 },
{
  "label": "?????????",
  "value": 2563 },
{
  "label": "?????????",
  "value": 2564 },
{
  "label": "?????????",
  "value": 2565 },
{
  "label": "?????????",
  "value": 2566 },
{
  "label": "?????????",
  "value": 2567 },
{
  "label": "?????????",
  "value": 2568 },
{
  "label": "?????????",
  "value": 2569 },
{
  "label": "?????????",
  "value": 2570 },
{
  "label": "?????????",
  "value": 2571 }]],


[
[{
  "label": "?????????",
  "value": 2574 },
{
  "label": "?????????",
  "value": 2575 },
{
  "label": "?????????",
  "value": 2576 },
{
  "label": "?????????",
  "value": 2577 },
{
  "label": "?????????",
  "value": 2578 },
{
  "label": "????????????",
  "value": 2579 },
{
  "label": "?????????",
  "value": 2580 },
{
  "label": "?????????",
  "value": 2581 },
{
  "label": "?????????",
  "value": 2582 },
{
  "label": "?????????",
  "value": 2583 }],

[{
  "label": "?????????",
  "value": 2585 },
{
  "label": "????????????",
  "value": 2586 },
{
  "label": "?????????",
  "value": 2587 },
{
  "label": "??????",
  "value": 2588 }],

[{
  "label": "????????????",
  "value": 2590 },
{
  "label": "?????????",
  "value": 2591 },
{
  "label": "?????????",
  "value": 2592 },
{
  "label": "?????????",
  "value": 2593 },
{
  "label": "?????????",
  "value": 2594 },
{
  "label": "?????????",
  "value": 2595 },
{
  "label": "??????????????????????????????",
  "value": 2596 },
{
  "label": "??????????????????????????????",
  "value": 2597 },
{
  "label": "?????????",
  "value": 2598 },
{
  "label": "?????????",
  "value": 2599 },
{
  "label": "?????????",
  "value": 2600 },
{
  "label": "?????????",
  "value": 2601 },
{
  "label": "?????????",
  "value": 2602 },
{
  "label": "?????????",
  "value": 2603 }],

[{
  "label": "?????????",
  "value": 2605 },
{
  "label": "?????????",
  "value": 2606 },
{
  "label": "?????????",
  "value": 2607 },
{
  "label": "??????????????????????????????",
  "value": 2608 },
{
  "label": "??????????????????????????????",
  "value": 2609 },
{
  "label": "??????????????????????????????",
  "value": 2610 }],

[{
  "label": "????????????",
  "value": 2612 },
{
  "label": "?????????",
  "value": 2613 },
{
  "label": "?????????",
  "value": 2614 },
{
  "label": "?????????",
  "value": 2615 },
{
  "label": "?????????",
  "value": 2616 },
{
  "label": "?????????",
  "value": 2617 },
{
  "label": "?????????????????????????????????",
  "value": 2618 },
{
  "label": "?????????",
  "value": 2619 }],

[{
  "label": "?????????",
  "value": 2621 },
{
  "label": "?????????",
  "value": 2622 },
{
  "label": "?????????",
  "value": 2623 },
{
  "label": "?????????????????????",
  "value": 2624 },
{
  "label": "?????????",
  "value": 2625 },
{
  "label": "?????????",
  "value": 2626 },
{
  "label": "??????????????????????????????",
  "value": 2627 },
{
  "label": "?????????",
  "value": 2628 },
{
  "label": "????????????????????????",
  "value": 2629 },
{
  "label": "?????????????????????",
  "value": 2630 }],

[{
  "label": "????????? ",
  "value": 2632 },
{
  "label": "?????????",
  "value": 2633 },
{
  "label": "?????????",
  "value": 2634 },
{
  "label": "?????????",
  "value": 2635 },
{
  "label": "?????????",
  "value": 2636 },
{
  "label": "?????????",
  "value": 2637 },
{
  "label": "?????????",
  "value": 2638 },
{
  "label": "?????????",
  "value": 2639 }],

[{
  "label": "?????????",
  "value": 2641 },
{
  "label": "?????????",
  "value": 2642 },
{
  "label": "?????????",
  "value": 2643 },
{
  "label": "?????????",
  "value": 2644 },
{
  "label": "?????????",
  "value": 2645 },
{
  "label": "?????????",
  "value": 2646 },
{
  "label": "?????????",
  "value": 2647 },
{
  "label": "?????????",
  "value": 2648 },
{
  "label": "?????????",
  "value": 2649 },
{
  "label": "?????????",
  "value": 2650 },
{
  "label": "?????????",
  "value": 2651 },
{
  "label": "?????????",
  "value": 2652 },
{
  "label": "?????????",
  "value": 2653 },
{
  "label": "?????????",
  "value": 2654 },
{
  "label": "?????????",
  "value": 2655 },
{
  "label": "?????????",
  "value": 2656 }],

[{
  "label": "?????????",
  "value": 2658 },
{
  "label": "?????????",
  "value": 2659 },
{
  "label": "?????????",
  "value": 2660 },
{
  "label": "?????????",
  "value": 2661 },
{
  "label": "?????????",
  "value": 2662 },
{
  "label": "?????????",
  "value": 2663 },
{
  "label": "?????????",
  "value": 2664 },
{
  "label": "?????????",
  "value": 2665 },
{
  "label": "?????????",
  "value": 2666 },
{
  "label": "?????????",
  "value": 2667 },
{
  "label": "?????????",
  "value": 2668 },
{
  "label": "?????????????????????",
  "value": 2669 }]],


[
[{
  "label": "?????????",
  "value": 2672 },
{
  "label": "?????????",
  "value": 2673 },
{
  "label": "?????????",
  "value": 2674 },
{
  "label": "?????????",
  "value": 2675 },
{
  "label": "?????????",
  "value": 2676 },
{
  "label": "?????????",
  "value": 2677 },
{
  "label": "?????????",
  "value": 2678 },
{
  "label": "?????????",
  "value": 2679 },
{
  "label": "?????????",
  "value": 2680 },
{
  "label": "?????????????????????",
  "value": 2681 },
{
  "label": "?????????",
  "value": 2682 },
{
  "label": "???????????????????????????",
  "value": 2683 },
{
  "label": "??????????????????????????? ",
  "value": 2684 },
{
  "label": "?????????",
  "value": 2685 }],

[{
  "label": "?????????",
  "value": 2687 },
{
  "label": "?????????",
  "value": 2688 },
{
  "label": "?????????",
  "value": 2689 },
{
  "label": "?????????",
  "value": 2690 },
{
  "label": "?????????",
  "value": 2691 },
{
  "label": "?????????",
  "value": 2692 },
{
  "label": "?????????",
  "value": 2693 },
{
  "label": "?????????",
  "value": 2694 },
{
  "label": "?????????",
  "value": 2695 }],

[{
  "label": "?????????",
  "value": 2697 },
{
  "label": "?????????",
  "value": 2698 },
{
  "label": "?????????",
  "value": 2699 },
{
  "label": "?????????",
  "value": 2700 },
{
  "label": "?????????",
  "value": 2701 },
{
  "label": "?????????",
  "value": 2702 },
{
  "label": "?????????????????????",
  "value": 2703 },
{
  "label": "???????????????????????????",
  "value": 2704 },
{
  "label": "????????????????????????????????????",
  "value": 2705 }],

[{
  "label": "?????????",
  "value": 2707 },
{
  "label": "?????????",
  "value": 2708 },
{
  "label": "?????????",
  "value": 2709 },
{
  "label": "?????????",
  "value": 2710 },
{
  "label": "?????????",
  "value": 2711 }],

[{
  "label": "?????????",
  "value": 2713 },
{
  "label": "?????????",
  "value": 2714 },
{
  "label": "?????????",
  "value": 2715 },
{
  "label": "?????????",
  "value": 2716 },
{
  "label": "?????????",
  "value": 2717 },
{
  "label": "?????????",
  "value": 2718 },
{
  "label": "?????????",
  "value": 2719 },
{
  "label": "?????????",
  "value": 2720 },
{
  "label": "?????????",
  "value": 2721 },
{
  "label": "?????????",
  "value": 2722 },
{
  "label": "?????????",
  "value": 2723 }],

[{
  "label": "?????????",
  "value": 2725 },
{
  "label": "????????????????????????",
  "value": 2726 },
{
  "label": "?????????",
  "value": 2727 },
{
  "label": "?????????",
  "value": 2728 },
{
  "label": "?????????????????????",
  "value": 2729 }],

[{
  "label": "?????????",
  "value": 2731 },
{
  "label": "??????????????????????????????",
  "value": 2732 },
{
  "label": "????????????????????????",
  "value": 2733 },
{
  "label": "?????????????????????",
  "value": 2734 },
{
  "label": "???????????????????????????",
  "value": 2735 },
{
  "label": "???????????????????????????????????????",
  "value": 2736 },
{
  "label": "??????????????????????????????",
  "value": 2737 },
{
  "label": "????????????????????????????????????",
  "value": 2738 },
{
  "label": "????????????????????????",
  "value": 2739 },
{
  "label": "?????????????????????",
  "value": 2740 }],

[{
  "label": "?????????",
  "value": 2742 },
{
  "label": "?????????",
  "value": 2743 },
{
  "label": "??????",
  "value": 2744 },
{
  "label": "?????????",
  "value": 2745 },
{
  "label": "?????????",
  "value": 2746 },
{
  "label": "?????????????????????????????????????????????",
  "value": 2747 },
{
  "label": "???????????????????????????",
  "value": 2748 },
{
  "label": "?????????????????????",
  "value": 2749 }],

[{
  "label": "?????????",
  "value": 2751 },
{
  "label": "?????????",
  "value": 2752 },
{
  "label": "?????????",
  "value": 2753 },
{
  "label": "?????????",
  "value": 2754 },
{
  "label": "?????????",
  "value": 2755 },
{
  "label": "?????????",
  "value": 2756 },
{
  "label": "?????????",
  "value": 2757 },
{
  "label": "?????????",
  "value": 2758 },
{
  "label": "?????????",
  "value": 2759 },
{
  "label": "?????????",
  "value": 2760 }],

[{
  "label": "?????????",
  "value": 2762 },
{
  "label": "?????????",
  "value": 2763 },
{
  "label": "?????????",
  "value": 2764 },
{
  "label": "?????????",
  "value": 2765 },
{
  "label": "?????????????????????",
  "value": 2766 },
{
  "label": "?????????",
  "value": 2767 },
{
  "label": "?????????",
  "value": 2768 },
{
  "label": "?????????",
  "value": 2769 },
{
  "label": "?????????",
  "value": 2770 },
{
  "label": "?????????",
  "value": 2771 },
{
  "label": "?????????????????????????????????",
  "value": 2772 },
{
  "label": "?????????",
  "value": 2773 },
{
  "label": "?????????????????????",
  "value": 2774 }],

[{
  "label": "?????????",
  "value": 2776 },
{
  "label": "?????????",
  "value": 2777 },
{
  "label": "?????????",
  "value": 2778 },
{
  "label": "????????????",
  "value": 2779 },
{
  "label": "?????????",
  "value": 2780 },
{
  "label": "?????????",
  "value": 2781 },
{
  "label": "?????????",
  "value": 2782 },
{
  "label": "?????????",
  "value": 2783 }],

[{
  "label": "?????????",
  "value": 2785 },
{
  "label": "?????????",
  "value": 2786 },
{
  "label": "?????????",
  "value": 2787 }],

[{
  "label": "?????????",
  "value": 2789 },
{
  "label": "?????????????????????",
  "value": 2790 },
{
  "label": "?????????",
  "value": 2791 },
{
  "label": "?????????",
  "value": 2792 },
{
  "label": "?????????",
  "value": 2793 },
{
  "label": "?????????????????????",
  "value": 2794 },
{
  "label": "???????????????????????????",
  "value": 2795 },
{
  "label": "?????????",
  "value": 2796 },
{
  "label": "?????????",
  "value": 2797 },
{
  "label": "?????????",
  "value": 2798 },
{
  "label": "?????????",
  "value": 2799 },
{
  "label": "?????????",
  "value": 2800 }],

[{
  "label": "?????????",
  "value": 2802 },
{
  "label": "??????",
  "value": 2803 },
{
  "label": "?????????",
  "value": 2804 },
{
  "label": "?????????",
  "value": 2805 },
{
  "label": "?????????",
  "value": 2806 }],

[{
  "label": "?????????",
  "value": 2808 },
{
  "label": "?????????",
  "value": 2809 },
{
  "label": "??????????????????????????????",
  "value": 2810 },
{
  "label": "??????????????????????????????",
  "value": 2811 }],

[{
  "label": "???????????????",
  "value": 2813 },
{
  "label": "?????????",
  "value": 2814 },
{
  "label": "????????????????????????",
  "value": 2815 }]],


[
[{
  "label": "?????????",
  "value": 2818 },
{
  "label": "?????????",
  "value": 2819 },
{
  "label": "?????????",
  "value": 2820 },
{
  "label": "?????????",
  "value": 2821 },
{
  "label": "?????????",
  "value": 2822 },
{
  "label": "???????????????",
  "value": 2823 },
{
  "label": "?????????",
  "value": 2824 },
{
  "label": "???????????????",
  "value": 2825 }],

[{
  "label": "????????????",
  "value": 2827 },
{
  "label": "????????????",
  "value": 2828 },
{
  "label": "?????????",
  "value": 2829 },
{
  "label": "?????????",
  "value": 2830 },
{
  "label": "?????????",
  "value": 2831 },
{
  "label": "?????????",
  "value": 2832 },
{
  "label": "?????????",
  "value": 2833 },
{
  "label": "????????????",
  "value": 2834 },
{
  "label": "?????????",
  "value": 2835 },
{
  "label": "?????????",
  "value": 2836 },
{
  "label": "?????????",
  "value": 2837 },
{
  "label": "?????????",
  "value": 2838 },
{
  "label": "?????????",
  "value": 2839 },
{
  "label": "?????????",
  "value": 2840 },
{
  "label": "?????????",
  "value": 2841 },
{
  "label": "????????????",
  "value": 2842 },
{
  "label": "?????????",
  "value": 2843 },
{
  "label": "?????????",
  "value": 2844 }],

[{
  "label": "?????????",
  "value": 2846 },
{
  "label": "?????????",
  "value": 2847 },
{
  "label": "?????????",
  "value": 2848 },
{
  "label": "????????????",
  "value": 2849 },
{
  "label": "?????????",
  "value": 2850 },
{
  "label": "?????????",
  "value": 2851 },
{
  "label": "?????????",
  "value": 2852 },
{
  "label": "?????????",
  "value": 2853 },
{
  "label": "?????????",
  "value": 2854 },
{
  "label": "?????????",
  "value": 2855 },
{
  "label": "?????????",
  "value": 2856 }],

[{
  "label": "?????????",
  "value": 2858 },
{
  "label": "?????????",
  "value": 2859 },
{
  "label": "?????????",
  "value": 2860 },
{
  "label": "?????????",
  "value": 2861 },
{
  "label": "?????????",
  "value": 2862 },
{
  "label": "?????????",
  "value": 2863 },
{
  "label": "?????????",
  "value": 2864 },
{
  "label": "?????????",
  "value": 2865 },
{
  "label": "?????????",
  "value": 2866 },
{
  "label": "?????????",
  "value": 2867 },
{
  "label": "?????????",
  "value": 2868 },
{
  "label": "????????????",
  "value": 2869 }],

[{
  "label": "?????????",
  "value": 2871 },
{
  "label": "?????????",
  "value": 2872 },
{
  "label": "?????????",
  "value": 2873 },
{
  "label": "?????????",
  "value": 2874 },
{
  "label": "?????????",
  "value": 2875 },
{
  "label": "?????????",
  "value": 2876 },
{
  "label": "??????",
  "value": 2877 },
{
  "label": "?????????",
  "value": 2878 },
{
  "label": "?????????",
  "value": 2879 },
{
  "label": "?????????",
  "value": 2880 },
{
  "label": "?????????",
  "value": 2881 }],

[{
  "label": "?????????",
  "value": 2883 },
{
  "label": "?????????",
  "value": 2884 },
{
  "label": "?????????",
  "value": 2885 },
{
  "label": "?????????",
  "value": 2886 },
{
  "label": "?????????",
  "value": 2887 },
{
  "label": "?????????",
  "value": 2888 },
{
  "label": "?????????",
  "value": 2889 }],

[{
  "label": "?????????",
  "value": 2891 },
{
  "label": "???????????????",
  "value": 2892 },
{
  "label": "?????????",
  "value": 2893 },
{
  "label": "?????????",
  "value": 2894 },
{
  "label": "?????????",
  "value": 2895 },
{
  "label": "?????????",
  "value": 2896 },
{
  "label": "??????",
  "value": 2897 }]],


[
[{
  "label": "?????????",
  "value": 2900 },
{
  "label": "?????????",
  "value": 2901 },
{
  "label": "?????????",
  "value": 2902 },
{
  "label": "?????????",
  "value": 2903 },
{
  "label": "?????????",
  "value": 2904 },
{
  "label": "?????????",
  "value": 2905 },
{
  "label": "?????????",
  "value": 2906 },
{
  "label": "?????????",
  "value": 2907 },
{
  "label": "?????????",
  "value": 2908 },
{
  "label": "?????????",
  "value": 2909 },
{
  "label": "?????????",
  "value": 2910 },
{
  "label": "??????",
  "value": 2911 },
{
  "label": "?????????",
  "value": 2912 }],

[{
  "label": "?????????",
  "value": 2914 },
{
  "label": "?????????",
  "value": 2915 },
{
  "label": "?????????",
  "value": 2916 },
{
  "label": "?????????",
  "value": 2917 }],

[{
  "label": "?????????",
  "value": 2919 },
{
  "label": "?????????",
  "value": 2920 },
{
  "label": "?????????",
  "value": 2921 },
{
  "label": "?????????",
  "value": 2922 },
{
  "label": "?????????",
  "value": 2923 },
{
  "label": "?????????",
  "value": 2924 },
{
  "label": "??????",
  "value": 2925 },
{
  "label": "??????",
  "value": 2926 },
{
  "label": "?????????",
  "value": 2927 },
{
  "label": "?????????",
  "value": 2928 },
{
  "label": "??????",
  "value": 2929 },
{
  "label": "?????????",
  "value": 2930 }],

[{
  "label": "?????????",
  "value": 2932 },
{
  "label": "?????????",
  "value": 2933 },
{
  "label": "?????????",
  "value": 2934 },
{
  "label": "?????????",
  "value": 2935 },
{
  "label": "?????????",
  "value": 2936 },
{
  "label": "??????",
  "value": 2937 },
{
  "label": "?????????",
  "value": 2938 },
{
  "label": "?????????",
  "value": 2939 },
{
  "label": "??????",
  "value": 2940 },
{
  "label": "?????????",
  "value": 2941 },
{
  "label": "?????????",
  "value": 2942 },
{
  "label": "?????????",
  "value": 2943 },
{
  "label": "?????????",
  "value": 2944 },
{
  "label": "?????????",
  "value": 2945 }],

[{
  "label": "?????????",
  "value": 2947 },
{
  "label": "??????",
  "value": 2948 },
{
  "label": "?????????",
  "value": 2949 },
{
  "label": "?????????",
  "value": 2950 },
{
  "label": "?????????",
  "value": 2951 },
{
  "label": "?????????",
  "value": 2952 },
{
  "label": "?????????",
  "value": 2953 },
{
  "label": "?????????",
  "value": 2954 },
{
  "label": "?????????",
  "value": 2955 },
{
  "label": "?????????",
  "value": 2956 },
{
  "label": "?????????",
  "value": 2957 }],

[{
  "label": "?????????",
  "value": 2959 },
{
  "label": "?????????",
  "value": 2960 },
{
  "label": "?????????",
  "value": 2961 },
{
  "label": "?????????",
  "value": 2962 },
{
  "label": "?????????",
  "value": 2963 },
{
  "label": "?????????",
  "value": 2964 },
{
  "label": "?????????",
  "value": 2965 },
{
  "label": "?????????",
  "value": 2966 },
{
  "label": "??????",
  "value": 2967 },
{
  "label": "?????????",
  "value": 2968 },
{
  "label": "?????????",
  "value": 2969 },
{
  "label": "?????????",
  "value": 2970 },
{
  "label": "?????????",
  "value": 2971 }],

[{
  "label": "?????????",
  "value": 2973 },
{
  "label": "?????????",
  "value": 2974 },
{
  "label": "?????????",
  "value": 2975 },
{
  "label": "??????",
  "value": 2976 },
{
  "label": "?????????",
  "value": 2977 },
{
  "label": "??????",
  "value": 2978 },
{
  "label": "?????????",
  "value": 2979 },
{
  "label": "?????????",
  "value": 2980 },
{
  "label": "?????????",
  "value": 2981 },
{
  "label": "?????????",
  "value": 2982 },
{
  "label": "?????????",
  "value": 2983 }],

[{
  "label": "?????????",
  "value": 2985 },
{
  "label": "?????????",
  "value": 2986 },
{
  "label": "?????????",
  "value": 2987 },
{
  "label": "?????????",
  "value": 2988 },
{
  "label": "?????????",
  "value": 2989 },
{
  "label": "?????????",
  "value": 2990 },
{
  "label": "?????????",
  "value": 2991 },
{
  "label": "?????????",
  "value": 2992 },
{
  "label": "??????",
  "value": 2993 },
{
  "label": "?????????",
  "value": 2994 },
{
  "label": "?????????",
  "value": 2995 },
{
  "label": "?????????",
  "value": 2996 }],

[{
  "label": "?????????",
  "value": 2998 },
{
  "label": "?????????",
  "value": 2999 },
{
  "label": "?????????",
  "value": 3000 },
{
  "label": "?????????",
  "value": 3001 },
{
  "label": "?????????",
  "value": 3002 },
{
  "label": "?????????",
  "value": 3003 },
{
  "label": "?????????",
  "value": 3004 },
{
  "label": "?????????",
  "value": 3005 },
{
  "label": "?????????",
  "value": 3006 },
{
  "label": "?????????",
  "value": 3007 }],

[{
  "label": "?????????",
  "value": 3009 },
{
  "label": "?????????",
  "value": 3010 },
{
  "label": "?????????",
  "value": 3011 },
{
  "label": "?????????",
  "value": 3012 },
{
  "label": "?????????",
  "value": 3013 },
{
  "label": "?????????",
  "value": 3014 },
{
  "label": "?????????",
  "value": 3015 }],

[{
  "label": "????????????",
  "value": 3017 },
{
  "label": "????????????",
  "value": 3018 },
{
  "label": "????????????",
  "value": 3019 },
{
  "label": "????????????",
  "value": 3020 },
{
  "label": "????????????",
  "value": 3021 }]],


[
[{
  "label": "?????????",
  "value": 3024 },
{
  "label": "????????????",
  "value": 3025 },
{
  "label": "?????????",
  "value": 3026 },
{
  "label": "?????????",
  "value": 3027 },
{
  "label": "?????????",
  "value": 3028 },
{
  "label": "?????????",
  "value": 3029 },
{
  "label": "?????????",
  "value": 3030 },
{
  "label": "?????????",
  "value": 3031 }],

[{
  "label": "?????????",
  "value": 3033 },
{
  "label": "?????????",
  "value": 3034 },
{
  "label": "?????????",
  "value": 3035 }],

[{
  "label": "?????????",
  "value": 3037 },
{
  "label": "?????????",
  "value": 3038 }],

[{
  "label": "?????????",
  "value": 3040 },
{
  "label": "?????????",
  "value": 3041 },
{
  "label": "?????????",
  "value": 3042 },
{
  "label": "?????????",
  "value": 3043 },
{
  "label": "?????????",
  "value": 3044 }],

[{
  "label": "?????????",
  "value": 3046 },
{
  "label": "?????????",
  "value": 3047 },
{
  "label": "?????????",
  "value": 3048 },
{
  "label": "?????????",
  "value": 3049 },
{
  "label": "?????????",
  "value": 3050 },
{
  "label": "?????????",
  "value": 3051 },
{
  "label": "????????????????????????",
  "value": 3052 }],

[{
  "label": "?????????",
  "value": 3054 },
{
  "label": "?????????",
  "value": 3055 },
{
  "label": "?????????",
  "value": 3056 },
{
  "label": "?????????????????????",
  "value": 3057 }],

[{
  "label": "?????????",
  "value": 3059 },
{
  "label": "????????????????????????",
  "value": 3060 },
{
  "label": "?????????",
  "value": 3061 },
{
  "label": "?????????",
  "value": 3062 },
{
  "label": "?????????",
  "value": 3063 },
{
  "label": "?????????",
  "value": 3064 }],

[{
  "label": "?????????",
  "value": 3066 },
{
  "label": "?????????",
  "value": 3067 },
{
  "label": "?????????",
  "value": 3068 },
{
  "label": "?????????",
  "value": 3069 },
{
  "label": "?????????",
  "value": 3070 },
{
  "label": "?????????",
  "value": 3071 },
{
  "label": "?????????",
  "value": 3072 }],

[{
  "label": "?????????",
  "value": 3074 },
{
  "label": "?????????",
  "value": 3075 },
{
  "label": "?????????",
  "value": 3076 },
{
  "label": "????????????????????????",
  "value": 3077 },
{
  "label": "??????????????????????????????",
  "value": 3078 },
{
  "label": "?????????",
  "value": 3079 },
{
  "label": "?????????",
  "value": 3080 }],

[{
  "label": "?????????",
  "value": 3082 },
{
  "label": "?????????",
  "value": 3083 },
{
  "label": "??????",
  "value": 3084 },
{
  "label": "?????????",
  "value": 3085 },
{
  "label": "?????????",
  "value": 3086 },
{
  "label": "?????????",
  "value": 3087 },
{
  "label": "??????",
  "value": 3088 },
{
  "label": "?????????",
  "value": 3089 }],

[{
  "label": "?????????",
  "value": 3091 },
{
  "label": "?????????",
  "value": 3092 },
{
  "label": "?????????",
  "value": 3093 },
{
  "label": "?????????",
  "value": 3094 },
{
  "label": "?????????",
  "value": 3095 },
{
  "label": "??????",
  "value": 3096 },
{
  "label": "??????",
  "value": 3097 }],

[{
  "label": "?????????",
  "value": 3099 },
{
  "label": "??????",
  "value": 3100 },
{
  "label": "??????",
  "value": 3101 },
{
  "label": "?????????",
  "value": 3102 },
{
  "label": "??????",
  "value": 3103 },
{
  "label": "?????????",
  "value": 3104 },
{
  "label": "??????",
  "value": 3105 },
{
  "label": "??????",
  "value": 3106 },
{
  "label": "?????????",
  "value": 3107 }],

[{
  "label": "?????????",
  "value": 3109 },
{
  "label": "?????????",
  "value": 3110 },
{
  "label": "?????????",
  "value": 3111 },
{
  "label": "?????????",
  "value": 3112 },
{
  "label": "?????????",
  "value": 3113 },
{
  "label": "?????????",
  "value": 3114 },
{
  "label": "??????????????????",
  "value": 3115 },
{
  "label": "?????????????????????????????????????????????",
  "value": 3116 }],

[{
  "label": "?????????",
  "value": 3118 },
{
  "label": "?????????",
  "value": 3119 },
{
  "label": "?????????",
  "value": 3120 },
{
  "label": "?????????",
  "value": 3121 },
{
  "label": "?????????",
  "value": 3122 },
{
  "label": "?????????",
  "value": 3123 },
{
  "label": "?????????",
  "value": 3124 },
{
  "label": "?????????",
  "value": 3125 }]],


[
[{
  "label": "?????????",
  "value": 3128 },
{
  "label": "?????????",
  "value": 3129 },
{
  "label": "?????????",
  "value": 3130 },
{
  "label": "?????????",
  "value": 3131 },
{
  "label": "???????????????????????????",
  "value": 3132 },
{
  "label": "?????????",
  "value": 3133 },
{
  "label": "?????????",
  "value": 3134 }],

[{
  "label": "?????????",
  "value": 3136 },
{
  "label": "?????????",
  "value": 3137 },
{
  "label": "???????????????????????????",
  "value": 3138 },
{
  "label": "?????????????????????",
  "value": 3139 },
{
  "label": "?????????????????????",
  "value": 3140 },
{
  "label": "????????????????????????",
  "value": 3141 }],

[{
  "label": "?????????????????????",
  "value": 3143 },
{
  "label": "?????????",
  "value": 3144 },
{
  "label": "?????????",
  "value": 3145 },
{
  "label": "?????????",
  "value": 3146 }],

[{
  "label": "?????????",
  "value": 3148 },
{
  "label": "?????????",
  "value": 3149 },
{
  "label": "?????????",
  "value": 3150 },
{
  "label": "????????????????????????",
  "value": 3151 }],

[{
  "label": "?????????",
  "value": 3153 },
{
  "label": "?????????",
  "value": 3154 },
{
  "label": "?????????",
  "value": 3155 },
{
  "label": "?????????",
  "value": 3156 },
{
  "label": "?????????",
  "value": 3157 }],

[{
  "label": "?????????",
  "value": 3159 },
{
  "label": "?????????",
  "value": 3160 },
{
  "label": "?????????",
  "value": 3161 },
{
  "label": "?????????",
  "value": 3162 },
{
  "label": "?????????",
  "value": 3163 },
{
  "label": "?????????",
  "value": 3164 }],

[{
  "label": "?????????",
  "value": 3166 },
{
  "label": "?????????",
  "value": 3167 },
{
  "label": "?????????",
  "value": 3168 },
{
  "label": "?????????",
  "value": 3169 },
{
  "label": "?????????",
  "value": 3170 },
{
  "label": "????????????",
  "value": 3171 }],

[{
  "label": "????????????",
  "value": 3173 },
{
  "label": "????????????",
  "value": 3174 },
{
  "label": "?????????",
  "value": 3175 },
{
  "label": "?????????",
  "value": 3176 },
{
  "label": "?????????",
  "value": 3177 }]],


[
[{
  "label": "?????????",
  "value": 3180 },
{
  "label": "?????????",
  "value": 3181 },
{
  "label": "?????????",
  "value": 3182 },
{
  "label": "?????????",
  "value": 3183 },
{
  "label": "?????????",
  "value": 3184 },
{
  "label": "?????????",
  "value": 3185 }],

[{
  "label": "????????????",
  "value": 3187 },
{
  "label": "?????????",
  "value": 3188 },
{
  "label": "?????????",
  "value": 3189 }],

[{
  "label": "?????????",
  "value": 3191 },
{
  "label": "????????????",
  "value": 3192 },
{
  "label": "?????????",
  "value": 3193 },
{
  "label": "?????????",
  "value": 3194 },
{
  "label": "????????????",
  "value": 3195 }],

[{
  "label": "?????????",
  "value": 3197 },
{
  "label": "?????????",
  "value": 3198 },
{
  "label": "?????????",
  "value": 3199 },
{
  "label": "?????????",
  "value": 3200 },
{
  "label": "?????????",
  "value": 3201 }],

[{
  "label": "????????????",
  "value": 3203 },
{
  "label": "?????????",
  "value": 3204 },
{
  "label": "?????????",
  "value": 3205 }]],


[
[{
  "label": "?????????",
  "value": 3208 },
{
  "label": "???????????????",
  "value": 3209 },
{
  "label": "?????????",
  "value": 3210 },
{
  "label": "????????????",
  "value": 3211 },
{
  "label": "????????????",
  "value": 3212 },
{
  "label": "????????????",
  "value": 3213 },
{
  "label": "?????????",
  "value": 3214 },
{
  "label": "???????????????",
  "value": 3215 }],

[{
  "label": "????????????",
  "value": 3217 },
{
  "label": "???????????????",
  "value": 3218 },
{
  "label": "????????????",
  "value": 3219 },
{
  "label": "????????????",
  "value": 3220 }],

[{
  "label": "????????????",
  "value": 3222 },
{
  "label": "?????????",
  "value": 3223 },
{
  "label": "????????????",
  "value": 3224 }],

[{
  "label": "?????????",
  "value": 3226 },
{
  "label": "???????????????????????????",
  "value": 3227 },
{
  "label": "?????????",
  "value": 3228 }],

[{
  "label": "?????????",
  "value": 3230 },
{
  "label": "?????????",
  "value": 3231 },
{
  "label": "????????????",
  "value": 3232 },
{
  "label": "????????????",
  "value": 3233 },
{
  "label": "?????????",
  "value": 3234 },
{
  "label": "???????????????",
  "value": 3235 },
{
  "label": "????????????????????????",
  "value": 3236 }],

[{
  "label": "?????????",
  "value": 3238 },
{
  "label": "???????????????",
  "value": 3239 },
{
  "label": "?????????",
  "value": 3240 },
{
  "label": "?????????",
  "value": 3241 }],

[{
  "label": "????????????",
  "value": 3243 },
{
  "label": "?????????",
  "value": 3244 },
{
  "label": "?????????",
  "value": 3245 },
{
  "label": "?????????",
  "value": 3246 },
{
  "label": "?????????",
  "value": 3247 },
{
  "label": "?????????????????????",
  "value": 3248 },
{
  "label": "?????????",
  "value": 3249 },
{
  "label": "?????????",
  "value": 3250 },
{
  "label": "?????????",
  "value": 3251 }],

[{
  "label": "????????????",
  "value": 3253 },
{
  "label": "?????????",
  "value": 3254 },
{
  "label": "?????????",
  "value": 3255 },
{
  "label": "?????????",
  "value": 3256 },
{
  "label": "?????????",
  "value": 3257 },
{
  "label": "?????????",
  "value": 3258 },
{
  "label": "?????????",
  "value": 3259 },
{
  "label": "????????????",
  "value": 3260 },
{
  "label": "?????????",
  "value": 3261 }],

[{
  "label": "????????????",
  "value": 3263 },
{
  "label": "????????????",
  "value": 3264 },
{
  "label": "????????????",
  "value": 3265 },
{
  "label": "?????????",
  "value": 3266 }],

[{
  "label": "?????????",
  "value": 3268 },
{
  "label": "?????????",
  "value": 3269 },
{
  "label": "?????????",
  "value": 3270 },
{
  "label": "????????????",
  "value": 3271 },
{
  "label": "?????????",
  "value": 3272 },
{
  "label": "?????????",
  "value": 3273 },
{
  "label": "?????????",
  "value": 3274 },
{
  "label": "????????????",
  "value": 3275 },
{
  "label": "????????????",
  "value": 3276 },
{
  "label": "?????????",
  "value": 3277 },
{
  "label": "?????????",
  "value": 3278 },
{
  "label": "?????????????????????????????????",
  "value": 3279 }],

[{
  "label": "?????????",
  "value": 3281 },
{
  "label": "?????????",
  "value": 3282 },
{
  "label": "?????????",
  "value": 3283 },
{
  "label": "?????????",
  "value": 3284 },
{
  "label": "?????????",
  "value": 3285 },
{
  "label": "?????????",
  "value": 3286 },
{
  "label": "?????????",
  "value": 3287 },
{
  "label": "?????????",
  "value": 3288 }],

[{
  "label": "?????????",
  "value": 3290 },
{
  "label": "?????????",
  "value": 3291 },
{
  "label": "???????????????",
  "value": 3292 },
{
  "label": "?????????",
  "value": 3293 },
{
  "label": "???????????????????????????",
  "value": 3294 },
{
  "label": "?????????",
  "value": 3295 },
{
  "label": "?????????",
  "value": 3296 },
{
  "label": "?????????",
  "value": 3297 },
{
  "label": "?????????",
  "value": 3298 },
{
  "label": "????????????",
  "value": 3299 },
{
  "label": "????????????",
  "value": 3300 }],

[{
  "label": "?????????",
  "value": 3302 },
{
  "label": "?????????",
  "value": 3303 },
{
  "label": "?????????",
  "value": 3304 },
{
  "label": "?????????",
  "value": 3305 },
{
  "label": "?????????",
  "value": 3306 },
{
  "label": "?????????",
  "value": 3307 },
{
  "label": "??????????????????????????????",
  "value": 3308 }],

[{
  "label": "????????????",
  "value": 3310 },
{
  "label": "????????????",
  "value": 3311 },
{
  "label": "?????????",
  "value": 3312 },
{
  "label": "?????????",
  "value": 3313 },
{
  "label": "????????????",
  "value": 3314 },
{
  "label": "?????????",
  "value": 3315 },
{
  "label": "????????????",
  "value": 3316 }],

[{
  "label": "????????????",
  "value": 3318 },
{
  "label": "????????????",
  "value": 3319 },
{
  "label": "???????????????",
  "value": 3320 },
{
  "label": "????????????",
  "value": 3321 },
{
  "label": "?????????",
  "value": 3322 },
{
  "label": "????????????",
  "value": 3323 },
{
  "label": "?????????",
  "value": 3324 }]],


[
[{
  "label": "?????????",
  "value": 3327 },
{
  "label": "?????????",
  "value": 3328 },
{
  "label": "?????????",
  "value": 3329 },
{
  "label": "?????????",
  "value": 3330 },
{
  "label": "?????????",
  "value": 3331 },
{
  "label": "?????????",
  "value": 3332 },
{
  "label": "?????????",
  "value": 3333 },
{
  "label": "?????????",
  "value": 3334 },
{
  "label": "?????????",
  "value": 3335 },
{
  "label": "?????????",
  "value": 3336 },
{
  "label": "?????????",
  "value": 3337 },
{
  "label": "?????????",
  "value": 3338 }],

[{
  "label": "?????????",
  "value": 3340 },
{
  "label": "?????????",
  "value": 3341 },
{
  "label": "?????????",
  "value": 3342 },
{
  "label": "?????????",
  "value": 3343 },
{
  "label": "?????????",
  "value": 3344 },
{
  "label": "?????????",
  "value": 3345 },
{
  "label": "?????????",
  "value": 3346 },
{
  "label": "?????????",
  "value": 3347 },
{
  "label": "?????????",
  "value": 3348 },
{
  "label": "?????????",
  "value": 3349 },
{
  "label": "?????????",
  "value": 3350 },
{
  "label": "?????????",
  "value": 3351 },
{
  "label": "?????????",
  "value": 3352 },
{
  "label": "?????????",
  "value": 3353 },
{
  "label": "?????????",
  "value": 3354 },
{
  "label": "?????????",
  "value": 3355 },
{
  "label": "?????????",
  "value": 3356 },
{
  "label": "?????????",
  "value": 3357 },
{
  "label": "?????????",
  "value": 3358 },
{
  "label": "?????????",
  "value": 3359 },
{
  "label": "?????????",
  "value": 3360 },
{
  "label": "?????????",
  "value": 3361 },
{
  "label": "?????????",
  "value": 3362 },
{
  "label": "?????????",
  "value": 3363 },
{
  "label": "?????????",
  "value": 3364 },
{
  "label": "?????????",
  "value": 3365 },
{
  "label": "?????????",
  "value": 3366 },
{
  "label": "?????????",
  "value": 3367 },
{
  "label": "?????????",
  "value": 3368 },
{
  "label": "?????????",
  "value": 3369 },
{
  "label": "?????????",
  "value": 3370 },
{
  "label": "?????????",
  "value": 3371 },
{
  "label": "?????????",
  "value": 3372 },
{
  "label": "?????????",
  "value": 3373 },
{
  "label": "?????????",
  "value": 3374 },
{
  "label": "?????????",
  "value": 3375 },
{
  "label": "?????????",
  "value": 3376 },
{
  "label": "????????????",
  "value": 3377 }],

[{
  "label": "?????????",
  "value": 3379 },
{
  "label": "?????????",
  "value": 3380 },
{
  "label": "?????????",
  "value": 3381 },
{
  "label": "?????????",
  "value": 3382 },
{
  "label": "?????????",
  "value": 3383 },
{
  "label": "?????????",
  "value": 3384 },
{
  "label": "?????????",
  "value": 3385 }],

[{
  "label": "??????",
  "value": 3387 },
{
  "label": "??????",
  "value": 3388 },
{
  "label": "??????",
  "value": 3389 },
{
  "label": "??????",
  "value": 3390 },
{
  "label": "??????",
  "value": 3391 },
{
  "label": "?????????",
  "value": 3392 },
{
  "label": "?????????",
  "value": 3393 },
{
  "label": "?????????",
  "value": 3394 },
{
  "label": "?????????",
  "value": 3395 },
{
  "label": "?????????",
  "value": 3396 },
{
  "label": "?????????",
  "value": 3397 },
{
  "label": "?????????",
  "value": 3398 },
{
  "label": "?????????",
  "value": 3399 },
{
  "label": "?????????",
  "value": 3400 },
{
  "label": "?????????",
  "value": 3401 },
{
  "label": "?????????",
  "value": 3402 },
{
  "label": "?????????",
  "value": 3403 },
{
  "label": "?????????",
  "value": 3404 },
{
  "label": "?????????",
  "value": 3405 },
{
  "label": "?????????",
  "value": 3406 },
{
  "label": "?????????",
  "value": 3407 },
{
  "label": "?????????",
  "value": 3408 },
{
  "label": "?????????",
  "value": 3409 },
{
  "label": "?????????",
  "value": 3410 },
{
  "label": "?????????",
  "value": 3411 },
{
  "label": "?????????",
  "value": 3412 },
{
  "label": "?????????",
  "value": 3413 },
{
  "label": "?????????",
  "value": 3414 },
{
  "label": "?????????",
  "value": 3415 }],

[{
  "label": "??????",
  "value": 3417 },
{
  "label": "??????",
  "value": 3418 },
{
  "label": "??????",
  "value": 3419 },
{
  "label": "?????????",
  "value": 3420 },
{
  "label": "?????????",
  "value": 3421 },
{
  "label": "?????????",
  "value": 3422 },
{
  "label": "?????????",
  "value": 3423 },
{
  "label": "?????????",
  "value": 3424 },
{
  "label": "?????????",
  "value": 3425 },
{
  "label": "?????????",
  "value": 3426 },
{
  "label": "?????????",
  "value": 3427 },
{
  "label": "?????????",
  "value": 3428 },
{
  "label": "?????????",
  "value": 3429 },
{
  "label": "?????????",
  "value": 3430 },
{
  "label": "?????????",
  "value": 3431 },
{
  "label": "?????????",
  "value": 3432 },
{
  "label": "?????????",
  "value": 3433 },
{
  "label": "?????????",
  "value": 3434 },
{
  "label": "?????????",
  "value": 3435 },
{
  "label": "?????????",
  "value": 3436 },
{
  "label": "?????????",
  "value": 3437 },
{
  "label": "?????????",
  "value": 3438 },
{
  "label": "?????????",
  "value": 3439 },
{
  "label": "?????????",
  "value": 3440 },
{
  "label": "?????????",
  "value": 3441 },
{
  "label": "?????????",
  "value": 3442 },
{
  "label": "?????????",
  "value": 3443 },
{
  "label": "?????????",
  "value": 3444 },
{
  "label": "?????????",
  "value": 3445 },
{
  "label": "?????????",
  "value": 3446 },
{
  "label": "?????????",
  "value": 3447 },
{
  "label": "?????????",
  "value": 3448 },
{
  "label": "?????????",
  "value": 3449 },
{
  "label": "?????????",
  "value": 3450 },
{
  "label": "?????????",
  "value": 3451 },
{
  "label": "?????????",
  "value": 3452 },
{
  "label": "?????????",
  "value": 3453 }],

[{
  "label": "??????",
  "value": 3455 },
{
  "label": "??????",
  "value": 3456 },
{
  "label": "?????????",
  "value": 3457 }],

[{
  "label": "??????",
  "value": 3459 },
{
  "label": "??????",
  "value": 3460 }],

[{
  "label": "?????????",
  "value": 3462 },
{
  "label": "?????????",
  "value": 3463 },
{
  "label": "?????????",
  "value": 3464 },
{
  "label": "?????????",
  "value": 3465 },
{
  "label": "?????????",
  "value": 3466 },
{
  "label": "?????????",
  "value": 3467 },
{
  "label": "?????????",
  "value": 3468 },
{
  "label": "?????????",
  "value": 3469 },
{
  "label": "?????????",
  "value": 3470 },
{
  "label": "?????????",
  "value": 3471 },
{
  "label": "?????????",
  "value": 3472 },
{
  "label": "?????????",
  "value": 3473 },
{
  "label": "?????????",
  "value": 3474 },
{
  "label": "?????????",
  "value": 3475 },
{
  "label": "?????????",
  "value": 3476 },
{
  "label": "?????????",
  "value": 3477 },
{
  "label": "?????????",
  "value": 3478 },
{
  "label": "?????????",
  "value": 3479 },
{
  "label": "?????????",
  "value": 3480 },
{
  "label": "?????????",
  "value": 3481 },
{
  "label": "?????????",
  "value": 3482 },
{
  "label": "?????????",
  "value": 3483 },
{
  "label": "?????????",
  "value": 3484 },
{
  "label": "?????????",
  "value": 3485 },
{
  "label": "?????????",
  "value": 3486 },
{
  "label": "?????????",
  "value": 3487 },
{
  "label": "?????????",
  "value": 3488 },
{
  "label": "?????????",
  "value": 3489 },
{
  "label": "?????????",
  "value": 3490 }],

[{
  "label": "?????????",
  "value": 3492 },
{
  "label": "?????????",
  "value": 3493 },
{
  "label": "?????????",
  "value": 3494 },
{
  "label": "?????????",
  "value": 3495 },
{
  "label": "?????????",
  "value": 3496 },
{
  "label": "?????????",
  "value": 3497 },
{
  "label": "?????????",
  "value": 3498 },
{
  "label": "?????????",
  "value": 3499 },
{
  "label": "?????????",
  "value": 3500 },
{
  "label": "?????????",
  "value": 3501 },
{
  "label": "?????????",
  "value": 3502 },
{
  "label": "?????????",
  "value": 3503 }],

[{
  "label": "?????????",
  "value": 3505 },
{
  "label": "?????????",
  "value": 3506 },
{
  "label": "?????????",
  "value": 3507 },
{
  "label": "?????????",
  "value": 3508 },
{
  "label": "?????????",
  "value": 3509 },
{
  "label": "?????????",
  "value": 3510 },
{
  "label": "?????????",
  "value": 3511 },
{
  "label": "?????????",
  "value": 3512 },
{
  "label": "?????????",
  "value": 3513 },
{
  "label": "?????????",
  "value": 3514 },
{
  "label": "?????????",
  "value": 3515 },
{
  "label": "?????????",
  "value": 3516 },
{
  "label": "?????????",
  "value": 3517 }],

[{
  "label": "?????????",
  "value": 3519 },
{
  "label": "?????????",
  "value": 3520 },
{
  "label": "?????????",
  "value": 3521 },
{
  "label": "?????????",
  "value": 3522 },
{
  "label": "?????????",
  "value": 3523 },
{
  "label": "?????????",
  "value": 3524 },
{
  "label": "?????????",
  "value": 3525 },
{
  "label": "?????????",
  "value": 3526 },
{
  "label": "?????????",
  "value": 3527 },
{
  "label": "?????????",
  "value": 3528 },
{
  "label": "?????????",
  "value": 3529 },
{
  "label": "?????????",
  "value": 3530 },
{
  "label": "?????????",
  "value": 3531 }],

[{
  "label": "?????????",
  "value": 3533 },
{
  "label": "?????????",
  "value": 3534 },
{
  "label": "?????????",
  "value": 3535 },
{
  "label": "?????????",
  "value": 3536 },
{
  "label": "?????????",
  "value": 3537 },
{
  "label": "?????????",
  "value": 3538 },
{
  "label": "?????????",
  "value": 3539 },
{
  "label": "?????????",
  "value": 3540 },
{
  "label": "?????????",
  "value": 3541 },
{
  "label": "?????????",
  "value": 3542 },
{
  "label": "?????????",
  "value": 3543 },
{
  "label": "?????????",
  "value": 3544 },
{
  "label": "?????????",
  "value": 3545 },
{
  "label": "?????????",
  "value": 3546 },
{
  "label": "?????????",
  "value": 3547 },
{
  "label": "?????????",
  "value": 3548 },
{
  "label": "?????????",
  "value": 3549 },
{
  "label": "?????????",
  "value": 3550 }],

[{
  "label": "?????????",
  "value": 3552 },
{
  "label": "?????????",
  "value": 3553 },
{
  "label": "?????????",
  "value": 3554 },
{
  "label": "?????????",
  "value": 3555 },
{
  "label": "?????????",
  "value": 3556 },
{
  "label": "?????????",
  "value": 3557 },
{
  "label": "?????????",
  "value": 3558 },
{
  "label": "?????????",
  "value": 3559 },
{
  "label": "?????????",
  "value": 3560 },
{
  "label": "?????????",
  "value": 3561 },
{
  "label": "?????????",
  "value": 3562 },
{
  "label": "?????????",
  "value": 3563 },
{
  "label": "?????????",
  "value": 3564 },
{
  "label": "?????????",
  "value": 3565 },
{
  "label": "?????????",
  "value": 3566 },
{
  "label": "?????????",
  "value": 3567 },
{
  "label": "?????????",
  "value": 3568 },
{
  "label": "?????????",
  "value": 3569 },
{
  "label": "?????????",
  "value": 3570 },
{
  "label": "?????????",
  "value": 3571 },
{
  "label": "?????????",
  "value": 3572 },
{
  "label": "?????????",
  "value": 3573 },
{
  "label": "?????????",
  "value": 3574 },
{
  "label": "?????????",
  "value": 3575 },
{
  "label": "?????????",
  "value": 3576 },
{
  "label": "?????????",
  "value": 3577 }],

[{
  "label": "?????????",
  "value": 3579 },
{
  "label": "?????????",
  "value": 3580 },
{
  "label": "?????????",
  "value": 3581 },
{
  "label": "?????????",
  "value": 3582 },
{
  "label": "?????????",
  "value": 3583 },
{
  "label": "?????????",
  "value": 3584 },
{
  "label": "?????????",
  "value": 3585 },
{
  "label": "?????????",
  "value": 3586 },
{
  "label": "?????????",
  "value": 3587 },
{
  "label": "?????????",
  "value": 3588 },
{
  "label": "?????????",
  "value": 3589 },
{
  "label": "?????????",
  "value": 3590 },
{
  "label": "?????????",
  "value": 3591 }],

[{
  "label": "?????????",
  "value": 3593 },
{
  "label": "?????????",
  "value": 3594 },
{
  "label": "?????????",
  "value": 3595 },
{
  "label": "?????????",
  "value": 3596 },
{
  "label": "?????????",
  "value": 3597 },
{
  "label": "?????????",
  "value": 3598 },
{
  "label": "?????????",
  "value": 3599 },
{
  "label": "?????????",
  "value": 3600 },
{
  "label": "?????????",
  "value": 3601 },
{
  "label": "?????????",
  "value": 3602 },
{
  "label": "?????????",
  "value": 3603 },
{
  "label": "?????????",
  "value": 3604 },
{
  "label": "?????????",
  "value": 3605 },
{
  "label": "?????????",
  "value": 3606 },
{
  "label": "?????????",
  "value": 3607 },
{
  "label": "?????????",
  "value": 3608 },
{
  "label": "?????????",
  "value": 3609 },
{
  "label": "?????????",
  "value": 3610 },
{
  "label": "?????????",
  "value": 3611 },
{
  "label": "?????????",
  "value": 3612 }],

[{
  "label": "?????????",
  "value": 3614 },
{
  "label": "?????????",
  "value": 3615 },
{
  "label": "?????????",
  "value": 3616 },
{
  "label": "?????????",
  "value": 3617 },
{
  "label": "?????????",
  "value": 3618 },
{
  "label": "?????????",
  "value": 3619 },
{
  "label": "?????????",
  "value": 3620 },
{
  "label": "?????????",
  "value": 3621 },
{
  "label": "?????????",
  "value": 3622 },
{
  "label": "?????????",
  "value": 3623 },
{
  "label": "?????????",
  "value": 3624 },
{
  "label": "?????????",
  "value": 3625 },
{
  "label": "?????????",
  "value": 3626 },
{
  "label": "?????????",
  "value": 3627 },
{
  "label": "?????????",
  "value": 3628 },
{
  "label": "?????????",
  "value": 3629 },
{
  "label": "?????????",
  "value": 3630 },
{
  "label": "????????????",
  "value": 3631 }],

[{
  "label": "?????????",
  "value": 3633 },
{
  "label": "?????????",
  "value": 3634 },
{
  "label": "?????????",
  "value": 3635 },
{
  "label": "?????????",
  "value": 3636 },
{
  "label": "?????????",
  "value": 3637 },
{
  "label": "?????????",
  "value": 3638 },
{
  "label": "?????????",
  "value": 3639 },
{
  "label": "?????????",
  "value": 3640 },
{
  "label": "?????????",
  "value": 3641 },
{
  "label": "?????????",
  "value": 3642 },
{
  "label": "?????????",
  "value": 3643 },
{
  "label": "?????????",
  "value": 3644 },
{
  "label": "?????????",
  "value": 3645 },
{
  "label": "?????????",
  "value": 3646 },
{
  "label": "?????????",
  "value": 3647 },
{
  "label": "?????????",
  "value": 3648 },
{
  "label": "?????????",
  "value": 3649 },
{
  "label": "?????????",
  "value": 3650 },
{
  "label": "?????????",
  "value": 3651 },
{
  "label": "?????????",
  "value": 3652 },
{
  "label": "?????????",
  "value": 3653 },
{
  "label": "?????????",
  "value": 3654 },
{
  "label": "?????????",
  "value": 3655 },
{
  "label": "?????????",
  "value": 3656 },
{
  "label": "?????????",
  "value": 3657 },
{
  "label": "????????????",
  "value": 3658 },
{
  "label": "?????????",
  "value": 3659 },
{
  "label": "?????????",
  "value": 3660 },
{
  "label": "?????????",
  "value": 3661 },
{
  "label": "?????????",
  "value": 3662 },
{
  "label": "?????????",
  "value": 3663 },
{
  "label": "?????????",
  "value": 3664 },
{
  "label": "?????????",
  "value": 3665 }],

[{
  "label": "?????????",
  "value": 3667 },
{
  "label": "?????????",
  "value": 3668 },
{
  "label": "?????????",
  "value": 3669 },
{
  "label": "?????????",
  "value": 3670 },
{
  "label": "?????????",
  "value": 3671 },
{
  "label": "?????????",
  "value": 3672 },
{
  "label": "?????????",
  "value": 3673 },
{
  "label": "?????????",
  "value": 3674 },
{
  "label": "????????????",
  "value": 3675 },
{
  "label": "?????????",
  "value": 3676 },
{
  "label": "?????????",
  "value": 3677 },
{
  "label": "?????????",
  "value": 3678 },
{
  "label": "?????????",
  "value": 3679 },
{
  "label": "?????????",
  "value": 3680 },
{
  "label": "?????????",
  "value": 3681 },
{
  "label": "?????????",
  "value": 3682 }],

[{
  "label": "?????????",
  "value": 3684 },
{
  "label": "?????????",
  "value": 3685 },
{
  "label": "?????????",
  "value": 3686 },
{
  "label": "?????????",
  "value": 3687 },
{
  "label": "?????????",
  "value": 3688 },
{
  "label": "?????????",
  "value": 3689 },
{
  "label": "?????????",
  "value": 3690 },
{
  "label": "?????????",
  "value": 3691 },
{
  "label": "?????????",
  "value": 3692 },
{
  "label": "?????????",
  "value": 3693 },
{
  "label": "?????????",
  "value": 3694 },
{
  "label": "?????????",
  "value": 3695 },
{
  "label": "?????????",
  "value": 3696 }],

[{
  "label": "?????????",
  "value": 3698 },
{
  "label": "?????????",
  "value": 3699 },
{
  "label": "?????????",
  "value": 3700 },
{
  "label": "?????????",
  "value": 3701 },
{
  "label": "?????????",
  "value": 3702 },
{
  "label": "?????????",
  "value": 3703 }],

[{
  "label": "?????????",
  "value": 3705 },
{
  "label": "?????????",
  "value": 3706 },
{
  "label": "?????????",
  "value": 3707 },
{
  "label": "?????????",
  "value": 3708 },
{
  "label": "?????????",
  "value": 3709 },
{
  "label": "?????????",
  "value": 3710 }],

[{
  "label": "?????????",
  "value": 3712 },
{
  "label": "?????????",
  "value": 3713 },
{
  "label": "?????????",
  "value": 3714 },
{
  "label": "?????????",
  "value": 3715 }]],


[
[{
  "label": "?????????",
  "value": 3718 },
{
  "label": "?????????",
  "value": 3719 },
{
  "label": "??????",
  "value": 3720 },
{
  "label": "??????",
  "value": 3721 }],

[{
  "label": "????????????",
  "value": 3723 },
{
  "label": "????????????",
  "value": 3724 },
{
  "label": "????????????",
  "value": 3725 },
{
  "label": "????????????",
  "value": 3726 },
{
  "label": "?????????",
  "value": 3727 }],

[{
  "label": "?????????",
  "value": 3729 },
{
  "label": "?????????",
  "value": 3730 },
{
  "label": "?????????",
  "value": 3731 },
{
  "label": "??????",
  "value": 3732 },
{
  "label": "?????????",
  "value": 3733 },
{
  "label": "?????????",
  "value": 3734 },
{
  "label": "?????????",
  "value": 3735 },
{
  "label": "?????????",
  "value": 3736 },
{
  "label": "?????????",
  "value": 3737 }]],


[
[{
  "label": "???????????????",
  "value": 3740 },
{
  "label": "??????????????????",
  "value": 3741 },
{
  "label": "?????????",
  "value": 3742 },
{
  "label": "????????????",
  "value": 3743 },
{
  "label": "????????????",
  "value": 3744 }],

[{
  "label": "????????????",
  "value": 3746 }],

[{
  "label": "??????????????????",
  "value": 3748 }]]];var _default =



areaData;exports.default = _default;

/***/ }),

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx ????????????????????? plugins ???????????????????????????????????????????????????????????????????????? copyAugment ??????
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // ?????? externalClass ????????????(????????? externalClass ????????????????????????)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx ?????? hack ??? uni-app ???????????? name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//??????????????? observer ??? setData callback ?????????????????????????????? warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field ????????????
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE ????????? != ????????? !==????????????????????????????????????????????????????????????????????????????????????????????????
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick ?????? ??? setData ??? setData ??????????????????
    //2.nextTick ???????????? render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // ???????????? vm ?????????????????????
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO ??????????????????????????????????????? list=>l0 ??? list ??????????????????????????????????????????
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //????????? data ???????????????
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"????????????","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']????????????',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js ?????? new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay ???????????? selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO ???????????? string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // ??????????????????????????????????????????
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // ???????????????????????????????????????
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // ???????????????????????????
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // ???????????????????????????
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // ???????????? watch ??????????????????????????????
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // ??????????????????uni ??? uni-i18n ????????????????????????????????? uni????????? global ????????? getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // ?????????????????????
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // ????????????????????????uni-i18n ??? uni ????????????????????????????????? uni ????????? undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // ??????$vm????????????????????????????????????????????????????????????????????????props???default????????????t()????????????uni-goods-nav????????????app???????????????
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // ???????????????
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // ???????????????
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // ????????????????????????
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 64:
/*!*****************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/pay.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.pay = void 0; /*
                                                                                                  * ??????
                                                                                                  */
var pay = function pay(result, self, _success, _fail) {
  if (result.code === -10) {
    self.showError(result.msg);
    return false;
  }

  // ??????????????????
  if (result.data.pay_type == 20) {
    //???????????????

    uni.requestPayment({
      provider: 'wxpay',
      timeStamp: result.data.payment.timeStamp,
      nonceStr: result.data.payment.nonceStr,
      package: 'prepay_id=' + result.data.payment.prepay_id,
      signType: 'MD5',
      paySign: result.data.payment.paySign,
      success: function success(res) {
        paySuccess(result, self, _success);
      },
      fail: function fail(res) {
        self.showError('?????????????????????', function () {
          payError(result, _fail);
        });
      } });


    //???????????????






























  }
  // ????????????
  if (result.data.pay_type == 10) {
    paySuccess(result, self, _success);
  }
  // ???????????????
  if (result.data.pay_type == 30) {








  }
};

/*?????????????????????*/exports.pay = pay;
function paySuccess(result, self, success) {
  if (success) {
    success(result);
    return;
  }
  gotoSuccess(result);
}
/*?????????????????????*/
function gotoSuccess(result) {
  uni.reLaunch({
    url: '/pages/order/pay-success/pay-success?order_id=' + result.data.order_id });

}

/*???????????????????????????*/
function payError(result, fail) {
  if (fail) {
    fail(result);
    return;
  }
  uni.redirectTo({
    url: '/pages/order/order-detail?order_id=' + result.data.order_id });

}

function wxAppPay(result, self, _success2, _fail2) {
  // ??????????????????  
  plus.payment.getChannels(function (channels) {
    self.channel = channels[0];
    console.log(self.channel);
    uni.requestPayment({
      provider: 'wxpay',
      orderInfo: result.data.payment,
      success: function success(res) {
        paySuccess(result, self, _success2);
      },
      fail: function fail(error) {
        console.log(error);
        self.showError('?????????????????????', function () {
          payError(result, _fail2);
        });
      } });

  }, function (e) {
    console.log("???????????????????????????" + e.message);
  });
}

function aliAppPay(result, self, _success3, _fail3) {
  console.log(result.data.payment);
  uni.requestPayment({
    provider: 'alipay',
    orderInfo: result.data.payment,
    success: function success(res) {
      paySuccess(result, self, _success3);
    },
    fail: function fail(error) {
      console.log(error);
      self.showError('?????????????????????', function () {
        payError(result, _fail3);
      });
    } });

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 9:
/*!*******************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/utils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * ?????????
                                                                                                      */
var utils = {
  /**
               * scene??????
               */
  scene_decode: function scene_decode(e) {
    if (e === undefined)
    return {};
    var scene = decodeURIComponent(e),
    params = scene.split(','),
    data = {};
    for (var i in params) {
      var val = params[i].split(':');
      val.length > 0 && val[0] && (data[val[0]] = val[1] || null);
    }
    return data;
  },

  /**
      * ????????????????????? (????????????ios Date??????)
      */
  format_date: function format_date(time) {
    // ???xxxx-xx-xx??????????????????????????? xxxx/xx/xx????????? 
    return time.replace(/\-/g, "/");
  },

  /**
      * ?????????????????????,????????????????????????????????????????????????100%
      */
  format_content: function format_content(str) {
    return str.replace(/\<img/gi, '<img style="display:block; margin:0 auto; max-width:100%;" ');
  },

  /**
      * ?????????URL
      */
  urlEncode: function urlEncode(data) {
    var _result = [];
    for (var key in data) {
      var value = data[key];
      if (value.constructor == Array) {
        value.forEach(function (_value) {
          _result.push(key + "=" + _value);
        });
      } else {
        _result.push(key + '=' + value);
      }
    }
    return _result.join('&');
  },

  /**
      * ????????????
      */
  objForEach: function objForEach(obj, callback) {
    Object.keys(obj).forEach(function (key) {
      callback(obj[key], key);
    });
  },

  /**
      * ??????????????????
      */
  inArray: function inArray(search, array) {
    for (var i in array) {
      if (array[i] == search) {
        return true;
      }
    }
    return false;
  },

  /**
      * ????????????????????????
      */
  isPositiveInteger: function isPositiveInteger(value) {
    return /(^[0-9]\d*$)/.test(value);
  },

  /**
      * ???????????????(scene)
      */
  getSceneData: function getSceneData(query) {
    return query.scene ? this.scene_decode(query.scene) : {};
  },
  /* ?????????????????? */
  getMebutype: function getMebutype() {

  } };var _default =

utils;exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map