
let setAlarmButton = document.getElementById("set-alarm");
let startAlarmButton = document.getElementById("start-alarm");
let stopAlarmButton = document.getElementById("stop-alarm");

setAlarmButton.addEventListener("click", setAlarm);
startAlarmButton.addEventListener("click", startAlarm);
stopAlarmButton.addEventListener("click", stopAlarm);


let alarmTime;
let alarmInterval;

function setAlarm() {
    setAlarmButton.removeEventListener('click', setAlarm)
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;


    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        alert("Invalid time. Please enter a valid time.");
        return;
    }

    // Calculate alarm time
    alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(0);
    let message = "Alarm set for " + formatTime(alarmTime);
    alert(message);
}

function startAlarm() {
    if (!alarmTime) {
        alert("Please set the alarm first.");
        return;
    }

    let now = new Date();
    let timeDiff = alarmTime.getTime() - now.getTime();

    if (timeDiff < 0) {
        alert("The alarm time has already passed.");
        return;
    }

    alarmInterval = setTimeout(function () {

        alert("Wake up!");
    }, timeDiff);
}

function stopAlarm() {
    clearTimeout(alarmInterval);


    alarmTime = null;

    alert("Alarm stopped.");
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes + " " + ampm;
    return time;
}
