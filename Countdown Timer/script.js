const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const finalseconds = (newYearsDate - currentDate) / 1000;

    const day = Math.floor(finalseconds / 3600 / 24);
    const hour = Math.floor(finalseconds / 3600) % 24;
    const minute = Math.floor(finalseconds / 60) % 60;
    const second = Math.floor(finalseconds % 60);

    daysEl.innerHTML = day;
    hoursEl.innerHTML = formatTime(hour);
    minutesEl.innerHTML = formatTime(minute);
    secondsEl.innerHTML = formatTime(second);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    
}
//initial call of time difference
countdown();

setInterval(countdown,1000);