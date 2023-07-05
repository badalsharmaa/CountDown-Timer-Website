var interval;

function StartTimer() {
    var timerInput = Math.floor(document.getElementById("timer-input").value);
    var timer = document.getElementById("Timer");

    if (interval) {
        clearInterval(interval); //if interval already exist, clear it
    }

    if (isNaN(timerInput)) {
        timerInput = 0; //if input is not a number, set timerInput to 0
    }

    interval = setInterval(function () {
        timer.innerHTML = timerInput;

        timerInput--;
        if (timerInput < 0) {
            clearInterval(interval);
            timer.innerHTML = "0";
        }
    }, 1000);
}
function stopGame() {
    window.location.reload();
}