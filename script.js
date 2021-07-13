"use strict";

// DOM elements ////////////////////////////////////
const secretNumDisplay = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");

// Global variables ///////////////////////////////

// generate random number
let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);

// declare and define score and highscore variables
let score = 20;
let highscore = 0;

// Functions /////////////////////////////////////

// function to change the textContent of the message variable:
const updateMsg = (message) => {
  document.querySelector(".message").textContent = message;
};

// Check Button Clicked //////////////////////////////////////

// Listen for "Check!" button click
checkBtn.addEventListener("click", function () {
  // capture the number input by the user
  const numInput = Number(document.querySelector(".guess").value);

  // Compare number input by user vs secret number

  // If no number has been input, display message "Type a number!"
  if (!numInput) {
    updateMsg("⌨ Type a number!");

    // If the number is correct, display "You won!"
  } else if (numInput === secretNum) {
    console.log(typeof numInput, numInput);
    updateMsg("🎉 You won!");
    scoreDisplay.textContent = score;
    // change highscore
    if (highscore < score) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }

    // If the numInput is higher than secretNum, display msg "Too high!"
    // If it is lower than secretNum, display "Too low!"
  } else {
    if (score > 1) {
      updateMsg(numInput > secretNum ? "👇Too high!" : "👆 Too low!");
      score--;
      scoreDisplay.textContent = score;
    } else {
      updateMsg("☹ You lost!");
      scoreDisplay.textContent = 0;
    }
  }
});

// Again Button Clicked ///////////////////////////////////

againBtn.addEventListener("click", function () {
  score = 20;
  scoreDisplay.textContent = score;
  secretNumDisplay.textContent = "?";
  document.querySelector(".guess").value = "";
  updateMsg("Start guessing...");
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
});
