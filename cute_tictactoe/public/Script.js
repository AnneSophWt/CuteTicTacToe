
function initializeGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameEnded = false;

    document.getElementById('current-player').innerText = "Current Fighter: " + currentPlayer;
}

function playerMove(cellIndex) {
    if (!gameEnded && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        if (checkWin()) {
            gameEnded = true;
            alert("Stellar performance 🌟 " + currentPlayer + " You've achieved victory in the cosmic game of Tic-Tac-Toe! 👑🏆");
        } else if (checkDraw()) {
            gameEnded = true;
            alert("Looks like X and O's brains are on vacation today. It's a draw");
        } else {
            updateSpecificCell(cellIndex,currentPlayer)
            currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
        }

        

    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return combo.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameBoard.every(cell => {
        return cell !== '';
    });
}

const updateSpecificCell = (id, player) => {
    const nameCell = document.createElement("div")
    nameCell.classList += " cellText"
    nameCell.innerText = player

    document.getElementById('cell-' + id).replaceChildren(nameCell)
    document.getElementById('current-player').innerText = "Current Fighter: " + currentPlayer;
}

function updateDisplay() {
    gameBoard.forEach((cell, index) => {
        const nameCell = document.createElement("div")
        nameCell.classList += " cellText"
        nameCell.innerText = cell

        document.getElementById('cell-' + index).replaceChildren(nameCell)
    });
    document.getElementById('current-player').innerText = "Current Fighter: " + currentPlayer;
}

let currentPlayer;
let gameBoard;
let gameEnded;

document.addEventListener('DOMContentLoaded', (event) => {
    initializeGame();
});

