const container = document.querySelector('.container');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const mTime = document.querySelector('.mTime');
const sTime = document.querySelector('.sTime');
const msTime = document.querySelector('.msTime');
let interval;
let seconds = 0;
let milliseconds = 0;
let isTimerRunning = false;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetAndStopTimer);

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;

        interval = setInterval(() => {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }

            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            const displayMilliseconds = Math.floor(milliseconds / 10); // Convert to 0-99

            
            mTime.textContent = minutes;
            sTime.textContent = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
            msTime.textContent = displayMilliseconds < 10 ? '0' + displayMilliseconds : displayMilliseconds;

            console.log(`Minutes: ${minutes}, Seconds: ${remainingSeconds}, Milliseconds: ${displayMilliseconds}`);
        }, 10);
    }
}

function stopTimer() {
    if (isTimerRunning) {
        clearInterval(interval);
        isTimerRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetAndStopTimer() {
    clearInterval(interval);
    isTimerRunning = false;
    seconds = 0;
    milliseconds = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;

    
    mTime.textContent = '0';
    sTime.textContent = '00';
    msTime.textContent = '00';
}

mTime.textContent = '0';
sTime.textContent = '00';
msTime.textContent = '00';
