/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/tetris.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/board.js":
/*!*********************!*\
  !*** ./js/board.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./js/player.js\");\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece.js */ \"./js/piece.js\");\n\n\n\nclass Board {\n  constructor(width, height, ctx) {\n    this.width = width;\n    this.height = height;\n    this.ctx = ctx;\n    this.grid = [];\n\n    this.colors = [\n      null,\n      \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==\",\n      \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBgKD1y/D+Ifn7sCIOklQ2YBgFkNlgADSwpK2VkBGkW4udjuLp9GzY1OMW0Pb3AehhjurrBtpMLwC6AORlkKjEA2bUYBvBzcYPN+PjtKwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Br69fYxDV1EKNRrLCgBQXvPv4iQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQBReJAxJHOTqwAAAABJRU5ErkJggg==\",\n      \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Ly04z+IfnXhJoOYgTqYBgFkNlgADfTG5TMygjQL8/EzXD90CpsanGKadmZgPYzFiyaCbScXgF0AczLIVGIAsmsxDODj4gGb8enbFwYQG0SjAxQDkL0AcgEuTciGEHQBNltxGoDuApLDgFwD3tx+yCCiKo8ajWSFASkuePvpIwN6okNJSNjSAUwTiAYBmAE4vUBsIGI1ACRIDAAFHgyAvQDLGMRohqmBZyaQAKEMBXMuzIUwF4CyMwBvl5MXVeEacQAAAABJRU5ErkJggg==\",\n      \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg+D8l5T+I3vf0G4OTNBeYBgFkNlgADTi3L2NkBGsWFmfYd+k+NjU4xZz0FMF6GPdWRoFtJxeAXQB3sp4iUeYguxbTAH5hiCEf3zIwgNggGg2gGIDsBZC/cGlCNoOwC7DYitMADBcQEQr4vUCkARdefmUwEOdGjUaywoAkL7x9yYCe6FASEtgF6ACqiQFEgwA01eL2AiVhADKVGAAKPBgAewGWMYjRDFMDz0wgAUIZCuZfmAthLgBlZwBvBonjT09XegAAAABJRU5ErkJggg==\",\n      \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg2Fvy6T+IvvnlGIM6jxWYBgFkNlgADWTN8GBkBGnmE+FiOP1gDzY1OMVMFVzAehinZewA204uALsA5mSQqcQAZNdiGMAtwAw24+uHvwwgNohGBygGIHsB5AJcmpANIegCbLbiNADdBSSHAbkGPPh0hUGBTwc1GskKA1Jc8OnNNwb0RIeSkLClA5gmEA0CMANweoHYQMRqAEiQGAAKPBgAewGWMYjRDFMDz0wgAUIZCuZcmAthLgBlZwBQ3ZP3OaGtaAAAAABJRU5ErkJggg==\",\n      \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBgeJXf8h9EH/n4ksGGXxxMgwAyGyyABoIWTGZkBGnmExdj2HbrMjY1OMW81HTBehjXJeSCbScXgF0AczLIVGIAsmsxDGAXEQSb8fPNewYQG0SjAxQDkL0AcgEuTciGEHQBNltxGoDuApLDgFwDrnx8w6DDL4IajWSFASku+PTyFQN6okNJSNjSAUwTiAYBmAE4vUBsIGI1ACRIDAAFHgyAvQDLGMRohqmBZyaQAKEMBXMuzIUwF4CyMwBUFZC9raUyoQAAAABJRU5ErkJggg==\",\n      \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVQ4T2NkYGBg+Hln0n8QfeLSGwYLPREwDQLIbLAAGrAPamJkBGlm4+RjOHTyHjY1OMXszJXAehgPrqsD204uALsA5mSQqcQAZNdiGsDOAzHj5xcGBhAbRKMBFAOQvQB2AQ5NyGYQdgEWW3EagOECIgIBvxeINODK7bcMOqrCqNFIVhiQ4oVf3z8xoCc6lISELR3ANIFoEIAZgNsLlIQByFRiACjwYADsBVjGIEYzTA08M4EECGUomH9hLoS5AJSdASaukfnTt+kFAAAAAElFTkSuQmCC\"\n    ];\n\n    this.lastTime = 0;\n    this.dropCounter = 0;\n    this.dropInterval = 1000;\n\n    this.collide = this.collide.bind(this);\n    this.clearGrid = this.clearGrid.bind(this);\n    // this.draw = this.draw.bind(this);\n    // this.drawMatrix = this.drawMatrix.bind(this);\n    this.merge = this.merge.bind(this);\n    this.rotatePiece = this.rotatePiece.bind(this);\n    this.updateBoard = this.updateBoard.bind(this);\n    // this.updateScore = this.updateScore.bind(this);\n\n    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        this.collide,\n        this.merge,\n        this.rotatePiece,\n        this.clearGrid\n    );\n\n    this.piece = new _piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().generatePiece();\n    this.createGrid(10, 20);\n  }\n\n  collide() {\n    const [p, o] = [this.piece, this.player.pos];\n\n    for (let y = 0; y < p.length; y++) {\n      for (let x = 0; x < p[y].length; x++) {\n        if (p[y][x] !== 0 &&\n            (this.grid[y + o.y] &&\n            this.grid[y + o.y][x + o.x]) !== 0) {\n              return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  createGrid(w, h) {\n    while (h--) {\n      this.grid.push(new Array(w).fill(0));\n    }\n    return this.grid;\n  }\n\n  clearGrid() {\n    if (this.collide()) {\n      this.grid.forEach( row => row.fill(0));\n      this.player.score = 0;\n      // this.updateScore();\n    }\n    this.gridSweep();\n  }\n\n  clearBoard() {\n    this.ctx.fillStyle = 'black';\n    this.ctx.fillRect(0, 0, this.width, this.height);\n  }\n\n  draw() {\n    this.clearBoard();\n    this.drawMatrix(this.grid, { x: 0, y: 0 });\n    this.drawMatrix(this.piece, this.player.pos);\n  }\n\n  // draws either a single piece or the actual grid\n  drawMatrix(matrix, offset) {\n    matrix.forEach( (row, y) => {\n      row.forEach( (value, x) => {\n        if (value !== 0) {\n\n          let imageTag = document.createElement('img');\n          imageTag.src = this.colors[value];\n          this.ctx.drawImage(imageTag, x + offset.x , y + offset.y , 1, 1);\n\n          // this.ctx.fillStyle = 'blue';\n          // this.ctx.fillRect(x + offset.x, y + offset.y, 1, 1);\n        }\n      });\n    });\n  }\n\n  dropPiece(time) {\n    const deltaTime = time - this.lastTime;\n    this.lastTime = time;\n\n    this.dropCounter += deltaTime;\n    if (this.dropCounter > this.dropInterval) {\n      this.player.drop();\n      this.dropCounter = 0;\n    }\n  }\n\n  gridSweep() {\n    let rowCount = 1;\n    outer: for (let j = this.grid.length - 1; j > 0; j--) {\n      for (let i = 0; i < this.grid[j].length; i++) {\n        if (this.grid[j][i] === 0) {\n          continue outer;\n        }\n      }\n\n      const row = this.grid.splice(j, 1)[0].fill(0);\n      this.grid.unshift(row);\n      j++;\n\n      this.player.score += rowCount * 100;\n      rowCount *= 2;\n    }\n  }\n\n  merge() {\n    this.piece.forEach( (row, y) => {\n      row.forEach( (value, x) => {\n        if (value !== 0) {\n          this.grid[y + this.player.pos.y][x + this.player.pos.x] = value;\n        }\n      });\n    });\n\n    this.piece = new _piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().generatePiece();\n  }\n\n  rotatePiece(dir) {\n    for (let j = 0; j < this.piece.length; j++) {\n      for (let i = 0; i < j; i++) {\n        [\n          this.piece[i][j],\n          this.piece[j][i],\n        ] = [\n          this.piece[j][i],\n          this.piece[i][j],\n        ];\n      }\n    }\n\n    if (dir > 0) {\n      this.piece.forEach( row => row.reverse() );\n    } else {\n      this.piece.reverse();\n    }\n\n    this.player.rotate(this.piece, dir);\n  }\n\n  updateBoard(time = 0) {\n    this.dropPiece(time);\n\n    this.draw();\n    this.updateScore();\n    requestAnimationFrame(this.updateBoard);\n  }\n\n  updateScore() {\n    document.getElementById('score').innerText = this.player.score;\n  }\n\n  // end of class\n}\n\n\n//# sourceURL=webpack:///./js/board.js?");

/***/ }),

/***/ "./js/piece.js":
/*!*********************!*\
  !*** ./js/piece.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Piece; });\nclass Piece {\n  constructor() {\n    // this.pieces = \"TOLJISZ\";\n    this.pieces = {\n      'T': [\n        [0, 0, 0],\n        [5, 5, 5],\n        [0, 5, 0],\n      ],\n      'O': [\n        [7, 7],\n        [7, 7],\n      ],\n      'L': [\n        [0, 4, 0],\n        [0, 4, 0],\n        [0, 4, 4],\n      ],\n      'J': [\n        [0, 1, 0],\n        [0, 1, 0],\n        [1, 1, 0],\n      ],\n      'I': [\n        [0, 2, 0, 0],\n        [0, 2, 0, 0],\n        [0, 2, 0, 0],\n        [0, 2, 0, 0],\n      ],\n      'S': [\n        [0, 0, 0],\n        [0, 3, 3],\n        [3, 3, 0],\n      ],\n      'Z': [\n        [0, 0, 0],\n        [6, 6, 0],\n        [0, 6, 6],\n      ]\n    };\n  }\n\n  generatePiece() {\n    const pieces = \"TOLJISZ\";\n    const randPiece = pieces[\n      Math.floor( pieces.length * Math.random() )\n    ];\n    return this.pieces[randPiece];\n  }\n\n  // end of class\n}\n\n\n//# sourceURL=webpack:///./js/piece.js?");

/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n// import Piece from './piece.js';\n\nclass Player {\n  constructor(collide, merge, rotatePiece, clearGrid) {\n    this.collide = collide;\n    this.merge = merge;\n    this.rotatePiece = rotatePiece;\n    this.clearGrid = clearGrid;\n    this.pos = { x: 3, y: 0 };\n    this.reset = this.reset.bind(this);\n    this.score = 0;\n  }\n\n  drop() {\n    this.pos.y++;\n\n    if (this.collide()) {\n      this.pos.y--;\n      this.merge();\n      this.reset();\n    }\n  }\n\n  move(dir) {\n    this.pos.x += dir;\n\n    if (this.collide()) {\n      this.pos.x -= dir;\n    }\n  }\n\n  rotate(piece, dir) {\n    const pos = this.pos.x;\n    let offset = 1;\n    while(this.collide()) {\n      this.pos.x += offset;\n      offset = -(offset + (offset > 0 ? 1 : -1));\n\n      if (offset > piece[0].length) {\n        this.rotatePiece(piece, -dir);\n        this.pos.x = pos;\n        return;\n      }\n    }\n  }\n\n  reset() {\n    this.pos = { x: 3, y: 0 };\n    this.clearGrid();\n  }\n\n  // end of class\n}\n\n\n//# sourceURL=webpack:///./js/player.js?");

/***/ }),

/***/ "./js/tetris.js":
/*!**********************!*\
  !*** ./js/tetris.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./js/board.js\");\n\n\nwindow.addEventListener(\"keydown\", function(e) {\n    // space and arrow keys\n    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {\n        e.preventDefault();\n    }\n}, false);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('tetris');\n  const ctx = canvas.getContext('2d');\n  ctx.scale(30, 30);\n\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  ctx.font = \"1px serif\";\n  ctx.fillStyle = \"white\";\n  ctx.textAlign = \"center\";\n  ctx.fillText('Press Enter to Play', (canvas.width/30)/2, (canvas.width/30)/2);\n\n  let gameRun = false;\n  let board = new _board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height, ctx);\n\n  document.addEventListener('keydown', e => {\n    if (e.keyCode === 13) {\n      gameRun = true;\n    }\n\n    if (gameRun) {\n      board.updateBoard(); // re-renders the grid\n      board.updateScore();\n    }\n  });\n\n  // for testing purposes only START\n  window.board = board;\n  window.player = board.player;\n  window.board.merge = board.merge;\n  // for testing purposes only END\n\n  document.addEventListener('keydown', e => { // listens for player input\n    e.preventDefault();\n    if (e.keyCode === 37) { // left\n      board.player.move(-1);\n    } else if (e.keyCode === 39) { // right\n      board.player.move(1);\n    } else if (e.keyCode === 40) { // drop\n      board.player.drop();\n      board.dropCounter = 0;\n    } else if (e.keyCode === 83) {\n      board.rotatePiece(-1);\n    } else if (e.keyCode === 68) {\n      board.rotatePiece(1);\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./js/tetris.js?");

/***/ })

/******/ });