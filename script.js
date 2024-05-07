const container = document.querySelector('.container');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const time = document.querySelector('.time');
const resetBtn = document.getElementById('reset');
let interval;
let seconds = 0;
let isTimerRunning = false;

time.textContent = seconds;


startBtn.addEventListener('click', startTimer); 
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetAndStopTimer);

function startTimer() {
   if(!isTimerRunning)
    {
        isTimerRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;

        interval = setInterval(() => {
            seconds++;
            // Update time displayed
            time.textContent = seconds;
            console.log(seconds);
        }, 1000);
    }
}

function stopTimer()
{
    startBtn.disabled = false;
    stopBtn.disabled = true;
    isTimerRunning = false;
    clearInterval(interval);
}

function resetTimer()
{
    startBtn.disabled = false;
    stopBtn.disabled = false;
    seconds = 0;
    time.textContent = seconds;
}

function resetAndStopTimer()
{
    stopTimer();
    resetTimer();
}