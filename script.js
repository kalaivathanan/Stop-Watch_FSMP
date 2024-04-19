const hrs = document.getElementById('hrs');
const min = document.getElementById("min");
const sec = document.getElementById('sec');
const msec = document.getElementById("msec");

let [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];
let timer = null;
let isRunning = false;
let elapsedTime = 0;
let startTime = 0;


function start() {
    if (!isRunning) {
        startTime = new Date() - elapsedTime;
        if (!timer == null) {
            clearInterval(timer)
        }
        timer = setInterval(update, 10)
        isRunning = true;
    }
    
}
function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    isRunning = false;
    [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];
    startTime = 0;
    elapsedTime=0;
    hrs.innerHTML = hours.toString().padStart(2, 0);
    min.innerHTML = minutes.toString().padStart(2, 0);
    sec.innerHTML = seconds.toString().padStart(2, 0);
    msec.innerHTML = milliSeconds.toString().padStart(2, 0);
    
    
}
function update() {
    // milliSeconds++;
    // if (milliSeconds > 99) {
    //     milliSeconds=0;
    //     seconds++;
    //     if (seconds > 59) {
    //         seconds = 0;
    //         minutes++;
    //         if (minutes > 59) {
    //             minutes = 0;
    //             hours++;
    //             if (hours > 99) {
    //                 stop();
    //             }
    //         }
    //     }
    // }

    currentTime = new Date()
    elapsedTime = currentTime - startTime 

    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 99);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    seconds = Math.floor((elapsedTime / 1000) % 60);
    milliSeconds = Math.floor((elapsedTime % 1000) / 10);


    hrs.innerHTML = hours.toString().padStart(2, 0);
    min.innerHTML = minutes.toString().padStart(2, 0);
    sec.innerHTML = seconds.toString().padStart(2, 0);
    msec.innerHTML = milliSeconds.toString().padStart(2, 0);
    
}
