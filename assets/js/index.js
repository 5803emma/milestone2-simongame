// Variables

let strictMode = true;
let pattern = [];
let playerPattern = [];
let turn;
let playerNumber;
let compCount;
let userCount;
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
    // Function checks if strict slider true/false when clicked
    // If true, return to initial new game status

    $(strictSlider).on("click", function() {
        if (strictSlider.checked == true) {
            strictMode = true;
            turn = 1;
            $(".block").addClass('disabled');
            clearInterval(playInterval);
            if ($(scoreBoard).text() == "-") {
                $(scoreBoard).text("-");
            }
            else {
                $(scoreBoard).text("0");
            }
            setTimeout(function() {
                removeLightOnAllBlocks();
            }, 400);
        }
        else {
            strictMode = false;
        }
    });

    // Block click events using the pattern array and block id numbers with respective audio and light

    $(block).click(function() {
        clearTimeout(playTimeout);
        removeLightOnAllBlocks();
        let blockId = $(this).attr('id');
        if (blockId == 1) {
            yellowLightWithAudio();
            playerPattern.push(parseInt(blockId));
        }
        if (blockId == 2) {
            blueLightWithAudio();
            playerPattern.push(parseInt(blockId));
        }
        if (blockId == 3) {
            redLightWithAudio();
            playerPattern.push(parseInt(blockId));
        }
        if (blockId == 4) {
            greenLightWithAudio();
            playerPattern.push(parseInt(blockId));
        }
        inspect();
    });
});

// Selects a number and places it into the pattern array

function randomNumber() {
    randomNum = Math.ceil(Math.random() * 4);
    pattern.push(randomNum);
    console.log(pattern);
}

// Function increases the turn by one. The user and computer are set to 0.
// The player pattern is an empty array.  Play is paused for 800 miliseconds for the user.
// The switch statement checks the numbers in the array and responds with the appropriate light & audio.
// The break avoids light and sound playing on the previous selected block.
// The pattern time runs will be equal to the computer count.
// When length of the array equals the computer count, play is no longer paused
// The user can interact with the blocks again.  The computer count increases by one.

function gamePlay() {
    turn++;
    userCount = 0;
    compCount = 0;
    playerPattern = [];
    playInterval = setInterval(function() {
        switch (pattern[compCount]) {
            case 1:
                yellowLightWithAudio();
                break;
            case 2:
                blueLightWithAudio();
                break;
            case 3:
                redLightWithAudio();
                break;
            case 4:
                greenLightWithAudio();
                break;
            default:
                break;
        }
        if (pattern.length === compCount) {
            clearInterval(playInterval);
            $(".block").removeClass('disabled');
        }
        compCount++;
    }, 800);
}

// Functions which give the light and audio to the blocks

function yellowLightWithAudio() {
    $(yellowBlock).addClass('bright-yellow');
    playTimeout();
    playAudio('yellow');
}

function blueLightWithAudio() {
    $(blueBlock).addClass('bright-blue');
    playTimeout();
    playAudio('blue');
}

function redLightWithAudio() {
    $(redBlock).addClass('bright-red');
    playTimeout();
    playAudio('red');
}

function greenLightWithAudio() {
    $(greenBlock).addClass('bright-green');
    playTimeout();
    playAudio('green');
}

// This function removes the lights from the blocks
// The timeout is set to 500 miliseconds

function playTimeout() {
    gameTimeout = setTimeout(function() {
        removeLightOnAllBlocks();
    }, 500);
}

// Function that generates the audio for events

function playAudio(audioPlayed) {
    let sound = $(`#sound-${audioPlayed}`)[0];
    sound.currentTime = 0;
    sound.play();
}

// Return blocks to their default colours by removing css classes

function removeLightOnAllBlocks() {
    $(yellowBlock).removeClass("bright-yellow");
    $(blueBlock).removeClass("bright-blue");
    $(redBlock).removeClass("bright-red");
    $(greenBlock).removeClass("bright-green");
}

// JQuery function to add bright colours to all blocks

function addLightsToAllBlocks() {
    $(yellowBlock).addClass("bright-yellow");
    $(blueBlock).addClass("bright-blue");
    $(redBlock).addClass("bright-red");
    $(greenBlock).addClass("bright-green");
}

// Game Over Modal displaying achieved score

function displayModal() {
    $('#loseModal').modal('show');
    $(loseModalDisplay).text(turn);
}

// Function which checks matching input and increments counter if match true

function inspect () {
    playerNumber++;
    let playerAndCompPatternMatch = playerPattern[playerNumber - 1] === pattern[playerNumber - 1];
    let playerAndCompPatternDontMatch = playerPattern[playerNumber - 1] !== pattern[playerNumber - 1];

// Statement which checks if 15 correct array matches have been entered in strict mode 
// If this is true, the game stops, all blocks are disabled and the winGame function runs

    if (playerNumber === 15 && strictMode && playerAndCompPatternMatch) {
        clearInterval(playInterval);
        $(".block").addClass('disabled');
        winGame();
    }
   
// Statement which checks if player array matches computer array.
// If this is true another random number enters the array, the number display is updated
// The gamePlay function runs after 500 miliseconds

    else if (playerAndCompPatternMatch) {
        if (playerPattern.length === turn) {
            randomNumber();
            $(scoreBoard).text(playerNumber);
            $(".block").addClass('disabled');
            setTimeout(gamePlay, 500);
        }
}

// If there is not a match between player and computer array and strict mode is off
// Disable all blocks, do not increment turn, play error audio, display scoreboard text
// After 600 miliseconds, repeat the previous pattern with timeout function

 else if (playerAndCompPatternDontMatch && !strictMode) {
        $(".block").addClass('disabled');
        turn--;
        playAudio('lost');
        $(scoreBoard).text('Oops!');
        addLightsToAllBlocks();
        setTimeout(function() {
            removeLightOnAllBlocks();
            $(scoreBoard).text('Nope!');
            setTimeout(function() {
                $(scoreBoard).text(turn);
                setTimeout(gamePlay, 500);
            }, 600);
        }, 600);
    }

// If there is not a match between player and computer array and strict mode is on
// Disable all blocks, play lose game audio, display scoreboard text
// Add bright class to all blocks, display lose game modal with score achieved

else {
        $(".block").addClass('disabled');
        playAudio('lost');
        $(scoreBoard).text('LOSE');
        addLightsToAllBlocks();
        setTimeout(function() {
            removeLightOnAllBlocks();
            setTimeout(function() {
                $(scoreBoard).text(turn);
                displayModal();
            }, 500);
        }, 300);
    }
}

// 15 has been achieved.  Display victory in score counter.
// Add bright class to all blocks.  Stop play timeout.
// Play win game audio.  Display win game modal.

function winGame() {
    $(scoreBoard).text("VICTORY!");
    clearTimeout(playTimeout);
    addLightsToAllBlocks();
    setTimeout(function() {
        $(winModalDisplay).text(turn);
        $('#winModal').modal('show');
        playAudio('win');
    }, 900);
}