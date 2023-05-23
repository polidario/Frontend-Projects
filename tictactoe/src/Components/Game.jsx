import React from 'react';
import Board from './Board';

export default function Game() {
    let currentPlayer = 'X';

    document.querySelectorAll('.cell').forEach((cell) => {
        cell.addEventListener("click", () => { 
            cell.innerHTML = currentPlayer;
            cell.classList.add(currentPlayer);
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            // Checking if the player won
            const cells = document.querySelectorAll('.cell');
            const player1 = document.querySelector('#player1');
            const player2 = document.querySelector('#player2');

            cell.setAttribute('disabled', '');


            checkCells();
        });
    });

    // Checking if the cells are filled
    function checkCells() {
        const cells = document.querySelectorAll('.cell');
        let count = 0;
        cells.forEach((cell) => {
            if (cell.innerHTML !== '') {
                count++;
            }
        });
        if (count === 9) {
            return true;
        }
        return false;
    }

    return (
        <main>
            <div id="players" className="players">
                <div id="player1" className="player">
                    <h2>Player 1</h2>
                    <div id="player1Score" className="score"></div>
                </div>
                <div id="player2" className="player">
                    <h2>Player 2</h2>
                    <div id="player2Score"  className="score"></div>
                </div>
            </div>

            <div className="msg">You cannt play there</div>

            <Board />
        </main>
    );
}