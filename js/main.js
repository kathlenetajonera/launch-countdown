const daysText = document.querySelector("#days");
const hoursText = document.querySelector("#hours");
const minutesText = document.querySelector("#minutes");
const secondsText = document.querySelector("#seconds");

updateTime();

setInterval(updateTime, 1000);

function updateTime() {
    const countdownDate = new Date("Feb 24, 2021 12:00:00").getTime();
    const currentDate = new Date().getTime();
    const distance = countdownDate - currentDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysText.textContent = days;
    hoursText.textContent = hours;
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
}