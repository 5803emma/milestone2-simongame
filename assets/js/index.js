// Variables

let strictMode = true;
let pattern = [];
let playerPattern = [];
let turn, playerCount, computerCount, playTimeout, playInterval;

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

// Code inside the function below will wait until Document Object Model is fully created

$(document).ready(function() {
    
// Function to start new game on click

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
            }, 500);
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
        checking();
    });
});

// New game function restores default settings

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

// Select a number and place it into the pattern array

function randomNumber() {
    randomNum = Math.ceil(Math.random() * 4);
    pattern.push(randomNum);
    console.log(pattern);
}

/* 
The Function is run when it's the computers turn to generate a pattern.
The turn will increment the turn by 1, set the player count and the computer count back to 0
and set the player pattern back to an empty string.
the player interval of 800 milliseconds is then run which holds a switch statement that will
check each of the numbers inside of the pattern array, it will produce a sound and light depending on which number
has been found in the switch statement & break after each avoiding each light and sound playing on the previous
pad that's been selected. The number of times this will be run is the number value of the computer count.
When the array 'pattern' length matches the computer count it will then stop the play interval and allow
the player to start clicking.
The computer count is then incremented by 1.
*/

function gamePlay() {
    turn++;
    playerCount = 0;
    computerCount = 0;
    playerPattern = [];
    playInterval = setInterval(function() {
        switch (pattern[computerCount]) {
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
        if (pattern.length === computerCount) {
            clearInterval(playInterval);
            $(".block").removeClass('disabled');
        }
        computerCount++;
    }, 800);
}


// Functions which give the light and audio to the blocks

function yellowLightWithAudio() {
    $(yellowBlock).addClass('bright-yellow');
    playerTimeout();
    playAudio('yellow');
}

function blueLightWithAudio() {
    $(blueBlock).addClass('bright-blue');
    playerTimeout();
    playAudio('blue');
}

function redLightWithAudio() {
    $(redBlock).addClass('bright-red');
    playerTimeout();
    playAudio('red');
}

function greenLightWithAudio() {
    $(greenBlock).addClass('bright-green');
    playerTimeout();
    playAudio('green');
}

// This function removes the lights from the blocks
// The timeout is set to 600 miliseconds

function playerTimeout() {
    playTimeout = setTimeout(function() {
        removeLightOnAllBlocks();
    }, 600);
}

// Function that generates the audio for each block

function playAudio(audioPlayed) {
    let sound = $(`#sound-${audioPlayed}`)[0];
    sound.currentTime = 0;
    sound.play();
}

// Return blocks to their default colours

function removeLightOnAllBlocks() {
    $(yellowBlock).removeClass("bright-yellow");
    $(blueBlock).removeClass("bright-blue");
    $(redBlock).removeClass("bright-red");
    $(greenBlock).removeClass("bright-green");
}

// Add bright colours to all blocks

function addLightsToAllBlocks() {
    $(yellowBlock).addClass("bright-yellow");
    $(blueBlock).addClass("bright-blue");
    $(redBlock).addClass("bright-red");
    $(greenBlock).addClass("bright-green");
}

// Game Over Modal

function displayModal() {
    $('#loseModal').modal('show');
    $(loseModalDisplay).text(turn);
}

/*
This is the function which does the entire checking of the game, this will increment the player count and has two variables assigned
which checks if the player pattern and computer pattern match and player pattern and computer pattern don't match.
This will then apply an if statement to check each of the possible scenarios during the game and implement an
outcome accordingly.
*/

function checking() {
    playerCount++;
    let playerAndCompSeqMatch = playerPattern[playerCount - 1] === pattern[playerCount - 1];
    let playerAndCompSeqDontMatch = playerPattern[playerCount - 1] !== pattern[playerCount - 1];
    /* 
    This if statement checks if the player has got to the 20th play count, strict mode is true and
    the player pattern array matches the computer pattern array. if so then the play interval is stopped,
    the pads are disabled and the winning function is run.
    */
    if (playerCount === 2 && strictMode && playerAndCompSeqMatch) {
        clearInterval(playInterval);
        $(".block").addClass('disabled');
        winGame();
    }
    /* 
    This statement checks to see if the player pattern array matches the computer pattern array. If it does,
    then a new random number is pushed into the computer array, pads are displayed, number display is updated
    to a new score and gameplay is then run on a set timeout.
    */
    else if (playerAndCompSeqMatch) {
        if (playerPattern.length === turn) {
            randomNumber();
            $(".block").addClass('disabled');
            $(scoreBoard).text(playerCount);
            setTimeout(gamePlay, 500);
        }
    }
    /* 
    This statement checks to see if the player pattern array doesn't match with the computer pattern array and strict
    mode is not active, it will disable the pads, switch the turn back to the previous turn and light all pads,
    this will then produce a losing sound along with "Try Again" displaying on the number display with a set timeout
    function to split each word, it will then remove all of the colours on the pads after a set timeout of 400 milliseconds,
    display the current score after a set timeout of 600 seconds and re-run the previous pattern again with the set timeout function.
    */
    else if (playerAndCompSeqDontMatch && !strictMode) {
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
    /* 
    With the only other option being to have the player pattern array not matching the computer pattern array and
    strict mode to be true, an else statement is then implemented to say the game has been lost in strict mode.
    This will disable the pads, produce a losing sound, display "lost" in the number display and make all pad flash.
    the flash is removed after a set timeout of 400 milliseconds. Then after 600 milliseconds, it will display a losing,
    modal informing the player of their score and display the score in the number display.
    */
    else {
        $(".block").addClass('disabled');
        playAudio('lost');
        $(scoreBoard).text('Lose');
        addLightsToAllBlocks();
        setTimeout(function() {
            removeLightOnAllBlocks();
            setTimeout(function() {
                $(scoreBoard).text(turn);
                displayModal();
            }, 600);
        }, 400);
    }
}

/* 
Function generated when the player wins the game. This will change the number display to say "WIN!",
flash all pads and stop the player timeout to avoid the player timeout to carry on running and
interrupting the lights generated by the pads all flashing. This will then set a timeout of 1400 milliseconds
to generate a winning noise and display the winning modal with the maximum score.
*/

function winGame() {
    $(scoreBoard).text("VICTORY!");
    clearTimeout(playerTimeout);
    addLightsToAllBlocks();
    setTimeout(function() {
        $(winModalDisplay).text(turn);
        $('#winModal').modal('show');
        playAudio('win');
    }, 1400);
}