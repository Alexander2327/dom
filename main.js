/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game/game.js
/* eslint-disable linebreak-style */
class Game {
  constructor(element) {
    this.element = element;
  }
  addCellImg(index) {
    const cells = this.element.querySelectorAll('.cell');
    for (const cell of cells) {
      if (cell.dataset.id == index) {
        cell.classList.add('active');
        return cell.dataset.id;
      }
    }
  }
  deleteCellImg(index) {
    const cells = this.element.querySelectorAll('.cell');
    for (const cell of cells) {
      if (cell.dataset.id == index) {
        cell.classList.remove('active');
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/user/user.js
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
class Player {
  constructor(element) {
    this.element = element;
    this.makeClick = this.makeClick.bind(this);
    this.element.addEventListener('click', this.makeClick);
  }
  makeClick(e) {
    if (e.target.classList.contains('active')) {
      this.updateScore('hit');
      e.target.classList.remove('active');
    } else {
      this.updateScore('loose');
    }
  }
  updateScore(result) {
    if (result === 'hit') {
      const score = document.querySelector('.score-item');
      score.textContent = Number(score.textContent) + 1;
    } else {
      const score = document.querySelector('.score-item');
      const looseScore = document.querySelector('.loose-score-item');
      if (looseScore.textContent == 4) {
        score.textContent = 0;
        looseScore.textContent = 0;
      } else {
        looseScore.textContent = Number(looseScore.textContent) + 1;
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */


document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(document.querySelector('.game-field'));
  const player = new Player(document.querySelector('.game-field'));
  function getRandom(min, max) {
    let current = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const newId = Math.floor(Math.random() * (max - min + 1) + min);
    if (current == newId) {
      return getRandom(1, 16, current);
    }
    return newId;
  }
  let randomCellId = getRandom(1, 16);
  let currentCellId = game.addCellImg(randomCellId);
  setTimeout(() => {
    setInterval(() => {
      game.deleteCellImg(currentCellId);
      randomCellId = getRandom(1, 16, currentCellId);
      currentCellId = game.addCellImg(randomCellId);
    }, 1000);
  }, 1000);
});
;// CONCATENATED MODULE: ./src/index.js
/* eslint-disable linebreak-style */


/******/ })()
;