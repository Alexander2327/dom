export default class Game {
    constructor (element) {
        this._element = element;
    }

    addCellImg (index) {
        const cells = this._element.querySelectorAll('.cell');

        for (const cell of cells) {
            if (cell.dataset.id == index) {
                cell.classList.add('active');
                return cell.dataset.id;
            }
        }
    }

    deleteCellImg (index) {
        const cells = this._element.querySelectorAll('.cell');

        for (const cell of cells) {
            if (cell.dataset.id == index) {
                cell.classList.remove('active');
            }
        }
    }
}