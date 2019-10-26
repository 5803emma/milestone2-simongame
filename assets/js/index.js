// Variables

let strictMode = true;
let pattern = [];
let playerPattern = [];
let turn;
let playerCount;
let computerCount;
let playTimeout;
let playInterval;
let randomNum;

// JQuery variables caching modals, coloured blocks, buttons and score counter

const block = document.getElementsByClassName('block');
const yellowBlock = document.getElementById("1");
const blueBlock = document.getElementById("2");
const redBlock = document.getElementById("3");
const greenBlock = document.getElementById("4");
const playButton = document.getElementById("start");
const strictSlider = document.getElementById("strict");
const scoreBoard = document.getElementById("score-counter");
const startModal = document.getElementById("start-modal-button");
const startWinModal = document.getElementById("start-modal-win-button");
const loseModalDisplay = document.getElementById("lose-modal-display");
const winModalDisplay = document.getElementById("win-modal-display");

// Code inside the function below will wait until the Document Object Model is fully created

$(document).ready(function() {
    
    // New game function

function beginGame() {
    clearInterval(playInterval);
    removeLightOnAllBlocks();
    $(scoreBoard).text('0');
    pattern = [];
    turn = 0;
    $(".block").addClass('disabled');
    randomNumber();
    gamePlay();
}

// Function to start new game on click using: 
// The play button, the start button in the info modal, and the start button in the game won modal

    $(playButton).click(function() {
        beginGame();
    });

    $(startModal).on("click", function() {
        beginGame();
    });

    $(startWinModal).on("click", function() {
        beginGame();
    });
});