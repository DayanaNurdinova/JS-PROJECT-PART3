const checkBtn = document.querySelector("#gmail_button")
const input = document.querySelector("#gmail_input")
const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function checkGmail() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = "green"
    } else {
        input.style.borderColor = "red"
    }
}


checkBtn.addEventListener("click", checkGmail);

function isEmailValid(value){
    return regExp.test(value)
}




let box = document.querySelector(".child_block")

let posX = 0
let posY = 0

function moveBox () {
    if (posX <= 434 && posY === 0) {
        posX += 16
        box.style.left = `${posX}px`
        setTimeout(moveBox, 60)
    } else if (posX >= 434 && posY <= 434) {
        posY +=16
        box.style.top = `${posY}px`
        setTimeout(moveBox,60)
    } else if (posX > 0 && posY >= 434){
        posX -= 16
        box.style.left = `${posX}px`
        setTimeout(moveBox,60)
    } else if (posX <= 434 && posY >0) {
        posY -= 15
        box.style.top = `${posY}px`
        setTimeout(moveBox, 60)
    } else {
        posX++
        box.style.left = `${posX}px`
        setTimeout(moveBox, 10)
    }
}
moveBox()

let count = 0;
let intervalId = null;
let isRunning = false;

const counterElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resumeButton = document.getElementById("resume");
const resetButton = document.getElementById("reset");

function updateCounter() {
    count++;
    counterElement.textContent = count;
}

function startCounter() {
    if (!isRunning) {
        intervalId = setInterval(updateCounter, 300);
        isRunning = true;
    }
}

function stopCounter() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
}

function resumeCounter() {
    if (!isRunning) {
        intervalId = setInterval(updateCounter, 300);
        isRunning = true;
    }
}

function resetCounter() {
    stopCounter();
    count = 0;
    counterElement.textContent = count;
}



startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
resumeButton.addEventListener("click", resumeCounter);
resetButton.addEventListener("click", resetCounter);

