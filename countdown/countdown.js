// Nodes do DOM

var daysNode = document.querySelector("#days span");
var hoursNode = document.querySelector("#hours span");
var minutesNode = document.querySelector("#minutes span");
var secondsNode = document.querySelector("#seconds span");

// Setar valores

var days = 8;
var hours = 12;
var minutes = 44;
var seconds = 28;

// Temporizador dos segundos

setInterval(function () {

    secondsNode.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesNode.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursNode.textContent = hours < 10 ? "0" + hours : hours;
    daysNode.textContent = days < 10 ? "0" + days : days;

    if (seconds <= 0) {

        if (days >= 0 && hours <= 0 && minutes <= 0) {
            days -= 1;
            hours = 23;
            minutes = 59;
            seconds = 59;
        }

        if (hours >= 0 && minutes <= 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
        }

        if (minutes >= 0 && seconds <= 0) {
            minutes -= 1;
            seconds = 59;
        }
    }

    seconds -= 1;

}, 1000);

