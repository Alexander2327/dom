import Game from './game/game'

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(document.querySelector('.game-field'));

    function getRandom(min, max, current=null) {
        const newId = Math.floor(Math.random() * (max - min + 1) + min);
        if (current === newId) {
            getRandom(1, 16, current);
        } else {
            return newId;
        }
    }

    let randomCellId = getRandom(1, 16);
    let currentCellId = game.addCellImg(randomCellId);
 
    setTimeout(() => {
        const NewInterval = setInterval(() => {
            game.deleteCellImg(currentCellId);
            randomCellId = getRandom(1, 16, currentCellId);
            currentCellId = game.addCellImg(randomCellId);
        }, 1000)
    }, 1000) 
})