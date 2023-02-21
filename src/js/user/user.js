/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
export default class Player {
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
