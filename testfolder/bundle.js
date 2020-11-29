/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export k [provided] [no usage info] [missing usage info prevents renaming] */
/*! export min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sec [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sec": () => /* binding */ sec,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "k": () => /* binding */ k
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sound_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound.mp3 */ "./src/sound.mp3");
/* harmony import */ var _module_sound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/sound.js */ "./src/module/sound.js");
/* harmony import */ var _module_gameWin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/gameWin.js */ "./src/module/gameWin.js");
/* harmony import */ var _module_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/counter.js */ "./src/module/counter.js");
/* harmony import */ var _module_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/menu.js */ "./src/module/menu.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var k = 0;
var min = 0;
var sec = 0;

var game = document.createElement('div');
game.className = 'game';
document.body.prepend(game);
var header = document.createElement('header');
game.append(header);
var btnMenu = document.createElement('button');
btnMenu.className = 'btn-menu';
btnMenu.innerHTML = 'Menu';
header.append(btnMenu); // const time = document.createElement('div');

_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.time.className = 'time';
_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.time.innerHTML = 'Time ' + '00:00';
header.append(_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.time); // const moves = document.createElement('div');

_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.moves.className = 'moves';
_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.moves.innerHTML = 'Moves: 0';
header.append(_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.moves); // const play = document.createElement('button');

_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.play.className = 'btn-play';
_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.play.innerHTML = 'play';
header.append(_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.play);
var container = document.createElement('div');
container.className = 'container';
game.append(container); // const menu = document.createElement('ul');

_module_menu_js__WEBPACK_IMPORTED_MODULE_5__.menu.className = 'menu';
container.append(_module_menu_js__WEBPACK_IMPORTED_MODULE_5__.menu);
(0,_module_menu_js__WEBPACK_IMPORTED_MODULE_5__.initList)(_module_menu_js__WEBPACK_IMPORTED_MODULE_5__.arr);
var btnBack = document.createElement('button');
btnBack.className = 'btn-back';
btnBack.textContent = 'back';
container.append(btnBack);
var menuItem = document.querySelector('.menu__item');
menuItem.addEventListener('click', function () {
  newGame();
  min = 0;
  sec = 0;
  localStorage.setItem('minutes', min);
  localStorage.setItem('seconds', sec);
  (0,_module_menu_js__WEBPACK_IMPORTED_MODULE_5__.openMenu)();
});
var field = document.createElement('div');
field.className = 'field';
game.append(field);
var cellSize = 75;
var empty = {
  value: 0,
  top: 0,
  left: 0
};
var cells = [];
cells.push(empty);

function move(index) {
  var cell = cells[index];
  var leftDiff = Math.abs(empty.left - cell.left);
  var topDiff = Math.abs(empty.top - cell.top);

  if (leftDiff + topDiff > 1 || !_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.playTime) {
    return;
  }

  cell.element.style.left = "".concat(empty.left * cellSize, "px");
  cell.element.style.top = "".concat(empty.top * cellSize, "px");
  var emptyLeft = empty.left;
  var emptyTop = empty.top;
  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = emptyLeft;
  cell.top = emptyTop;
  (0,_module_sound_js__WEBPACK_IMPORTED_MODULE_2__.soundPlay)();

  if (_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.playTime) {
    k++;
    (0,_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.getMoves)(k);
  }

  var isFinished = cells.every(function (cell) {
    return cell.value === cell.top * 4 + cell.left;
  });

  if (isFinished) {
    (0,_module_gameWin_js__WEBPACK_IMPORTED_MODULE_3__.win)();
  }
}

var numbers = _toConsumableArray(Array(15).keys()).sort(function () {
  return Math.random() - 0.5;
});

var _loop = function _loop(i) {
  var cell = document.createElement('div');
  var value = numbers[i - 1] + 1;
  cell.className = 'cell';
  cell.innerHTML = value;
  var left = i % 4;
  var top = (i - left) / 4;
  cells.push({
    value: value,
    left: left,
    top: top,
    element: cell
  });
  cell.style.left = "".concat(left * cellSize, "px");
  cell.style.top = "".concat(top * cellSize, "px");
  field.append(cell);
  cell.addEventListener('click', function () {
    move(i);
  });
};

for (var i = 1; i <= 15; i++) {
  _loop(i);
}

function newGame() {
  k = 0;
  _module_counter_js__WEBPACK_IMPORTED_MODULE_4__.moves.innerHTML = "Moves: ".concat(k);
  min = 0;
  sec = 0;
  _module_counter_js__WEBPACK_IMPORTED_MODULE_4__.time.innerHTML = 'Time ' + "".concat((0,_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.addZero)(min), "<span>:</span>").concat((0,_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.addZero)(sec));
  field.innerHTML = '';
  cells.length = 0;
  empty.top = 0;
  empty.left = 0;
  cells.push(empty);

  var numbers = _toConsumableArray(Array(15).keys()).sort(function () {
    return Math.random() - 0.5;
  });

  var _loop2 = function _loop2(_i) {
    var cell = document.createElement('div');
    var value = numbers[_i - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;
    var left = _i % 4;
    var top = (_i - left) / 4;
    cells.push({
      value: value,
      left: left,
      top: top,
      element: cell
    });
    cell.style.left = "".concat(left * cellSize, "px");
    cell.style.top = "".concat(top * cellSize, "px");
    field.append(cell);
    cell.addEventListener('click', function () {
      move(_i);
    });
  };

  for (var _i = 1; _i <= 15; _i++) {
    _loop2(_i);
  }
}

_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.play.addEventListener('click', _module_counter_js__WEBPACK_IMPORTED_MODULE_4__.playTimer);
btnMenu.addEventListener('click', function () {
  (0,_module_menu_js__WEBPACK_IMPORTED_MODULE_5__.openMenu)();
});
var solution = document.querySelector('#solution');
solution.addEventListener('click', function () {
  autoFinish();
});

function autoFinish() {
  _module_counter_js__WEBPACK_IMPORTED_MODULE_4__.moves.innerHTML = "Moves: ".concat(k);
  _module_counter_js__WEBPACK_IMPORTED_MODULE_4__.time.innerHTML = 'Time ' + "".concat((0,_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.addZero)(min), "<span>:</span>").concat((0,_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.addZero)(sec));
  field.innerHTML = '';
  cells.length = 0;
  empty.top = 0;
  empty.left = 0;
  cells.push(empty);

  var numbers = _toConsumableArray(Array(15).keys());

  var _loop3 = function _loop3(_i2) {
    var cell = document.createElement('div');
    var value = numbers[_i2 - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;
    var left = _i2 % 4;
    var top = (_i2 - left) / 4;
    cells.push({
      value: value,
      left: left,
      top: top,
      element: cell
    });
    cell.style.left = "".concat(left * cellSize, "px");
    cell.style.top = "".concat(top * cellSize, "px");
    field.append(cell);
    cell.addEventListener('click', function () {
      move(_i2);
    });
  };

  for (var _i2 = 1; _i2 <= 15; _i2++) {
    _loop3(_i2);
  }

  (0,_module_menu_js__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
  (0,_module_gameWin_js__WEBPACK_IMPORTED_MODULE_3__.win)();

  if (_module_counter_js__WEBPACK_IMPORTED_MODULE_4__.playTime) {
    _module_counter_js__WEBPACK_IMPORTED_MODULE_4__.play.innerHTML = 'play';
    _module_counter_js__WEBPACK_IMPORTED_MODULE_4__.playTime = false;
  }
}

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/*! namespace exports */
/*! export addZero [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMoves [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hour [provided] [no usage info] [missing usage info prevents renaming] */
/*! export min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export moves [provided] [no usage info] [missing usage info prevents renaming] */
/*! export play [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playTime [provided] [no usage info] [missing usage info prevents renaming] */
/*! export playTimer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sec [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showTime [provided] [no usage info] [missing usage info prevents renaming] */
/*! export time [provided] [no usage info] [missing usage info prevents renaming] */
/*! export timeId [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playTimer": () => /* binding */ playTimer,
/* harmony export */   "showTime": () => /* binding */ showTime,
/* harmony export */   "addZero": () => /* binding */ addZero,
/* harmony export */   "getMoves": () => /* binding */ getMoves,
/* harmony export */   "play": () => /* binding */ play,
/* harmony export */   "time": () => /* binding */ time,
/* harmony export */   "moves": () => /* binding */ moves,
/* harmony export */   "playTime": () => /* binding */ playTime,
/* harmony export */   "timeId": () => /* binding */ timeId,
/* harmony export */   "hour": () => /* binding */ hour,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "sec": () => /* binding */ sec
/* harmony export */ });
var time = document.createElement('div');
var play = document.createElement('button');
var moves = document.createElement('div');
var playTime = false;
var timeId;
var hour = 0;
var min = 0;
var sec = 0;
var timeOut;

function playTimer() {
  if (!playTime) {
    showTime();
    play.innerHTML = 'pause';
    playTime = true;
  } else {
    clearTimeout(timeId);
    play.innerHTML = 'play';
    playTime = false;
  }
}

function showTime() {
  time.innerHTML = 'Time ' + "".concat(addZero(min), "<span>:</span>").concat(addZero(sec));
  timeId = setTimeout(showTime, 1000);

  if (sec === 59) {
    sec = -1;
    min = min + 1;
    localStorage.setItem('minutes', min);
    localStorage.setItem('seconds', sec);
  }

  if (min === 59) {
    min = 0;
    hour = hour + 1;
  }

  localStorage.setItem('minutes', min);
  localStorage.setItem('seconds', sec);
  sec = sec + 1;
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function getMoves(k) {
  moves.innerHTML = "Moves: ".concat(k);
}




/***/ }),

/***/ "./src/module/gameWin.js":
/*!*******************************!*\
  !*** ./src/module/gameWin.js ***!
  \*******************************/
/*! namespace exports */
/*! export win [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "win": () => /* binding */ win
/* harmony export */ });
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ "./src/module/counter.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");



var textWin = document.createElement('h1');
document.body.prepend(textWin);

function win() {
  clearTimeout(_counter_js__WEBPACK_IMPORTED_MODULE_0__.timeId);
  textWin.className = 'active';
  textWin.innerHTML = "You won <span>Time ".concat((0,_counter_js__WEBPACK_IMPORTED_MODULE_0__.addZero)(_counter_js__WEBPACK_IMPORTED_MODULE_0__.min), ":").concat((0,_counter_js__WEBPACK_IMPORTED_MODULE_0__.addZero)(_counter_js__WEBPACK_IMPORTED_MODULE_0__.sec), "\n  </span> <span>Moves: ").concat(_index_js__WEBPACK_IMPORTED_MODULE_1__.k, "</span>"); // textWin.innerHTML = `You won <span>${timeOut}</span> <span>Moves: ${k}</span>`;

  textWin.addEventListener('click', function () {
    textWin.classList.remove('active');
  });
}



/***/ }),

/***/ "./src/module/menu.js":
/*!****************************!*\
  !*** ./src/module/menu.js ***!
  \****************************/
/*! namespace exports */
/*! export arr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export closeMenu [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! export openMenu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => /* binding */ menu,
/* harmony export */   "arr": () => /* binding */ arr,
/* harmony export */   "initList": () => /* binding */ initList,
/* harmony export */   "openMenu": () => /* binding */ openMenu,
/* harmony export */   "closeMenu": () => /* binding */ closeMenu
/* harmony export */ });
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ "./src/module/counter.js");




var menu = document.createElement('ul');
var arr = {
  newGame: 'New game',
  setting: 'Setting',
  bestScores: 'Best scores',
  rulesGame: 'Rules',
  solution: 'Solution'
};

function initList(arr) {
  for (var key in arr) {
    var li = document.createElement('li');
    li.className = 'menu__item';
    li.id = key;
    li.textContent = arr[key];
    menu.append(li);
  }
}

function openMenu() {
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    clearTimeout(_counter_js__WEBPACK_IMPORTED_MODULE_0__.timeId);
  } else if (!menu.classList.contains('active') && _counter_js__WEBPACK_IMPORTED_MODULE_0__.playTime == false) {
    return;
  } else {
    setTimeout(_counter_js__WEBPACK_IMPORTED_MODULE_0__.showTime, 1000);
  }
}

function closeMenu() {
  menu.classList.remove('active');
}

/***/ }),

/***/ "./src/module/sound.js":
/*!*****************************!*\
  !*** ./src/module/sound.js ***!
  \*****************************/
/*! namespace exports */
/*! export soundPlay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "soundPlay": () => /* binding */ soundPlay
/* harmony export */ });


function soundPlay() {
  var sound = new Audio();
  sound.src = './sound.mp3';
  sound.play();
  sound.volume = 0.3;
}

/***/ }),

/***/ "./src/sound.mp3":
/*!***********************!*\
  !*** ./src/sound.mp3 ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "sound.mp3");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=bundle.js.map