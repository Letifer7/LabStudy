const dateInfo = document.getElementById("date-info");
const timeInfo = document.getElementById("time-info");
const stringRepresentation = document.getElementById("string-representation");

const weekDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

function setDate() {
    const date = new Date();
    dateInfo.textContent = date.toLocaleDateString();
    timeInfo.textContent = date.toLocaleTimeString();
    stringRepresentation.textContent = getStringRepresentation(date);
}

function getStringRepresentation(date) {
    const monthNumber = date.getMonth();
    const dayNumber = date.getDay();
    const month = months[monthNumber];
    const day = weekDays[dayNumber];
    return month + " " + day;
}

setInterval(setDate, 1000);