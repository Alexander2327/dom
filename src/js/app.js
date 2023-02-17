/* eslint-disable linebreak-style */
import Game from './game/game';

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(document.querySelector('.game-field'));

    function getRandom(min, max, current = null) {
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
