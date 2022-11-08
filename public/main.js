"use strict";
const scorePlayer1score = document.getElementById("player1Score");
const scorePlayer2score = document.getElementById("player2Score");
const scorePlayer1 = document.querySelector(".score-player1");
const scorePlayer2 = document.querySelector(".score-player2");
const resetBtn = document.getElementById("btnReset");
const boardGame = document.getElementById("boardGame");
const boardGameChild = boardGame === null || boardGame === void 0 ? void 0 : boardGame.querySelectorAll("div");
const btnStart = document.getElementById("btnStart");
const gameStart = document.getElementById("startGameContainer");
const resetBtnScore = document.querySelector(".btn-reset-score");
let turn = true;
let score1 = 0, score2 = 0;
const opinionToWin = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [2, 4, 6], [0, 4, 8]
];
function getNameFromPlayer() {
    const formPlayerName = document.getElementById("formPlayerName");
    const player1Name = document.getElementsByName("player1Name");
    const player2Name = document.getElementsByName("player2Name");
    const playerName = ["player1", "player2"];
    formPlayerName === null || formPlayerName === void 0 ? void 0 : formPlayerName.addEventListener("change", (event) => {
        console.log(event);
        console.log(event);
    });
}
function startGame() {
    btnStart === null || btnStart === void 0 ? void 0 : btnStart.addEventListener('click', () => {
        gameStart.style.display = "none";
        resetGame();
        gamesRules();
        resetButton();
        resetScore();
        console.log("start Gaming");
    });
}
function resetButton() {
    resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', resetGame);
    console.log("ResetButton");
}
function resetBoard() {
    for (let i = 0; i < 9; i++) {
        boardGameChild[i].innerText = '';
    }
    console.log("Reset Board");
}
function resetGame() {
    resetBoard();
}
function winOrNot(opinionToWin) {
    for (let i = 0; i < opinionToWin.length; i++) {
        if (boardGameChild[opinionToWin[i][0]].textContent === "x" &&
            boardGameChild[opinionToWin[i][1]].textContent === "x" &&
            boardGameChild[opinionToWin[i][2]].textContent === "x") {
            winGame(1);
        }
        else if (boardGameChild[opinionToWin[i][0]].textContent === "o" &&
            boardGameChild[opinionToWin[i][1]].textContent === "o" &&
            boardGameChild[opinionToWin[i][2]].textContent === "o") {
            winGame(2);
        }
    }
}
function gamesRules() {
    scorePlayer2.style.backgroundColor = "rgb(177, 190, 196)";
    scorePlayer1.style.backgroundColor = "green";
    boardGameChild.forEach((ceil) => {
        ceil.addEventListener('click', () => {
            if (ceil.textContent === '') {
                if (turn === true) {
                    ceil.textContent = "x";
                    scorePlayer1.style.backgroundColor = "";
                    scorePlayer2.style.backgroundColor = "green";
                    turn = false;
                }
                else if (turn === false) {
                    ceil.textContent = "o";
                    scorePlayer2.style.backgroundColor = "";
                    scorePlayer1.style.backgroundColor = "green";
                    turn = true;
                }
                else {
                }
                winOrNot(opinionToWin);
            }
            else {
                console.log("no good");
            }
        });
    });
}
function winGame(playerWin) {
    if (playerWin === 1) {
        score1++;
        scorePlayer1score.textContent = score1.toString();
        alert("Player 1 Wins");
    }
    else if (playerWin === 2) {
        score2++;
        scorePlayer2score.textContent = score2.toString();
        alert("Player 2 Wins");
    }
    resetBoard();
}
function resetScore() {
    resetBtnScore === null || resetBtnScore === void 0 ? void 0 : resetBtnScore.addEventListener('click', () => {
        score1 = 0;
        score2 = 0;
        scorePlayer1score.textContent = score1.toString();
        scorePlayer2score.textContent = score2.toString();
    });
}
getNameFromPlayer();
startGame();