document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector("#start-button");
    const startSection = document.querySelector("#start-section");
    const instructions = document.querySelector("#instructions");
    const gameInterface = document.querySelector("#game-interface");
    const finishBtn = document.querySelector("#finish-button");
    const replayBtn = document.querySelector("#replay-button");
    const moves = document.querySelectorAll(".move");
    const userMoveEl = document.querySelector("#user-move");
    const computerMoveEl = document.querySelector("#computer-move");
    const resultMessage = document.querySelector("#result-message");
    const userScoreEl = document.querySelector("#user-score");
    const computerScoreEl = document.querySelector("#computer-score");

    let userScore = 0;
    let computerScore = 0;

    let choices = ["stone", "paper", "scissors"];
    let images = {
        stone: "./images/stone.png",
        paper: "./images/paper.png",
        scissors: "./images/scissor.png"
    };

    function getRandomChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function chooseWinner(userMove, computerMove) {
        if (userMove === computerMove) {
            return "It's a tie."
        } else if ((userMove === "stone" && computerMove === "scissors") || (userMove === "paper" && computerMove === "stone") || (userMove === "scissors" && computerMove === "paper"))  {
            userScore++;
            return "You win!"
        } else {
            computerScore++;
            return "Computer wins!"
        }
    }

    function updateScore() {
        userScoreEl.textContent = userScore;
        computerScoreEl.textContent = computerScore;
    }

    function resetGame() {
        userMoveEl.src = "./images/placeholder-icon.png";
        computerMoveEl.src = "./images/placeholder-icon.png";
        resultMessage.textContent = "Make your move!";
    }

    startBtn.addEventListener("click", () => {
        startSection.classList.add("hidden");
        gameInterface.classList.remove("hidden");
        instructions.classList.remove("hidden");
    });

    finishBtn.addEventListener("click", () => {
        gameInterface.classList.add("hidden");
        startSection.classList.remove("hidden");
        instructions.classList.add("hidden");
        resetGame();
        userScore = 0;
        computerScore = 0;
        updateScore();
    });

    moves.forEach(move => {
        move.addEventListener("click", (evt) => {
            const userMove = evt.target.dataset.move;
            const computerMove = getRandomChoice();

            userMoveEl.src = images[userMove];
            computerMoveEl.src = images[computerMove];

            const result = chooseWinner(userMove, computerMove);
            resultMessage.textContent = result;

            updateScore();
        });
    });

    replayBtn.addEventListener("click", () => {
        resetGame();
    });
});