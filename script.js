let startTime;
let updatedTime;
let difference;
let timerId;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerId = setInterval(updateDisplay, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        running = true;
    }
});

stopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timerId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        running = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    display.textContent = '00:00:00';
    difference = 0;
    running = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;
}