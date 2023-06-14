/**
 * @fileoverview
 * Provides event handler for the Tic Tac Toe game.
 * 
 * @author Bernard Polidario
 */

const winningCombinations = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
];

class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getScore() {
        return this.score;
    }

    setScore() {
        this.score = score;
    }
}

class TicTacToe {
    constructor() {
        this.cells = document.querySelectorAll('.cell');
        this.messageBox = document.querySelector('.message');
        this.messageModal = document.querySelector('#message_modal');
        this.messageModalText = document.querySelector('#message_modal_text');
        this.playAgainBtn = document.querySelector('#message_modal_button');
        this.modalCloseBtn = document.querySelector('#message_modal_close');
        this.playersStick = ['X', 'O'];
        this.currentPlayer = 0;
        this.end = false;
        this.winner = false;
        this.init();
    }

    init() {
        this.cells.forEach(cell => {
            cell.addEventListener('click', this.handleCellClick.bind(this));
        });

        this.playAgainBtn.addEventListener('click', () => {
            window.location.reload();
        });

        this.modalCloseBtn.addEventListener('click', () => {
            this.messageModal.style.visibility = 'hidden';
            this.messageModal.style.opacity = '0';
            this.messageModal.style.pointerEvents = 'none';
        });
    }

    handleCellClick(e) {
        if (this.end) {
            this.showMsg(`Game is already over: ${this.playersStick[this.winner]} win !`, 'gameover');
            return;
        }

        const curCell = e.target;

        if (curCell.innerHTML !== '') {
            this.showMsg('Already played !');
            return;
        } else {
            this.hideMsg();
        }

        curCell.innerHTML = this.playersStick[this.currentPlayer];
        this.verify(winningCombinations);

        if (!this.end) {
            this.currentPlayer = (this.currentPlayer + 1) % this.playersStick.length;
        } else {
            if (this.winner === false) {
                this.showMsg('Game ended: No winner!', 'gameover');
            } else {
                this.showMsg(`Game ended: ${this.playersStick[this.winner]} win !`, 'gameover');
            }
        }
    }

    verify(winCombos) {
        let isWon = false;

        for (let i = 0; i < winCombos.length; i++) {
            const [a, b, c] = winCombos[i];

            if (
                this.cells[a].innerHTML === this.playersStick[this.currentPlayer] &&
                this.cells[b].innerHTML === this.playersStick[this.currentPlayer] &&
                this.cells[c].innerHTML === this.playersStick[this.currentPlayer]
            ) {
                this.winner = this.currentPlayer;
                isWon = true;
                break;
            }
        }
      
        if (!this.winner && !isWon) {
            let emptyCellFound = false;

            this.cells.forEach(cellEl => {
                if (cellEl.innerHTML === '') {
                    emptyCellFound = true;
                }
            });

            if (!emptyCellFound) {
                this.end = true;
            }
        } else {
            this.end = true;
        }
    }
      

    showMsg(msg, type = 'info') {
        if(type === 'info') {
            this.messageBox.textContent = msg;
            this.messageBox.style.display = 'block';
        } else {
            this.messageModalText.textContent = msg;
            this.messageModal.style.visibility = 'visible';
            this.messageModal.style.opacity = '1';
            this.messageModal.style.pointerEvents = 'auto';
        }
    }

    hideMsg() {
        this.messageBox.textContent = '';
        this.messageBox.style.display = 'none';
    }
}

const game = new TicTacToe();
