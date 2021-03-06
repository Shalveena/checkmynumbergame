"use strict";

// DOM elements ////////////////////////////////////
const secretNumDisplay = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const highscoreDisplay = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");

// Global variables ///////////////////////////////

// generate random number
let secretNum = Math.trunc(Math.random() * 20) + 1;

// declare and define score and highscore variables
let score = 20;
let highscore = 0;

// Functions /////////////////////////////////////

// function to change the textContent of the message variable:
const updateMsg = (message) => {
  document.querySelector(".message").textContent = message;
};

// function to change the score that is displayed
const updateScoreDisplay = (newScore) => {
  document.querySelector(".score").textContent = newScore;
};

// Check Button Clicked //////////////////////////////////////

// Listen for "Check!" button click
checkBtn.addEventListener("click", function () {
  // capture the number input by the user
  const numInput = Number(document.querySelector(".guess").value);

  // Compare number input by user vs secret number

  // If no number has been input, display message "Type a number!"
  if (!numInput) {
    updateMsg("β¨ Type a number!");

    // If the number is correct, display "You won!"
  } else if (numInput === secretNum) {
    console.log(typeof numInput, numInput);
    updateMsg("π You won!");
    updateScoreDisplay(score);
    document.querySelector("body").style.backgroundColor = "#60b347";
    secretNumDisplay.style.width = "30rem";
    secretNumDisplay.textContent = secretNum;
    // change highscore
    if (highscore < score) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }

    // If the numInput is higher than secretNum, display msg "Too high!"
    // If it is lower than secretNum, display "Too low!"
  } else {
    if (score > 1) {
      updateMsg(numInput > secretNum ? "πToo high!" : "π Too low!");
      score--;
      updateScoreDisplay(score);
    } else {
      updateMsg("βΉ You lost!");
      updateScoreDisplay("0");
    }
  }
});

// Again Button Clicked ///////////////////////////////////

againBtn.addEventListener("click", function () {
  score = 20;
  updateScoreDisplay(score);
  secretNumDisplay.style.width = "15rem";
  secretNumDisplay.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  updateMsg("Start guessing...");
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
});
