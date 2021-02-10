const daysText = document.querySelector("#days");
const hoursText = document.querySelector("#hours");
const minutesText = document.querySelector("#minutes");
const secondsText = document.querySelector("#seconds");
let countdown = {
    days: 13,
    hours: 23, 
    minutes: 59,
    seconds: 59 
};

updateCountdown();
setInterval(updateCountdown, 1000)

function updateCountdown() {
    if (countdown.seconds > 0) {
        countdown.seconds--;
    } else {
        countdown.seconds = 59;
        countdown.minutes--;
    }

    if (countdown.minutes < 0) {
        countdown.seconds = 59;
        countdown.minutes = 59;
        countdown.hours--;
    }

    if (countdown.hours === 0) {
        countdown.seconds = 59;
        countdown.minutes = 59;
        countdown.hours = 23;
        countdown.days--;
    }

    daysText.textContent = countdown.days;
    hoursText.textContent = countdown.hours;
    minutesText.textContent = countdown.minutes;
    secondsText.textContent = countdown.seconds;
}