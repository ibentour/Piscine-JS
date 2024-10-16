function isFriday(date) {
    return new Date(date).getDay() === 5;
}

function isWeekend(date) {
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
}

function isLeapYear(date) {
    const year = new Date(date).getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
    const d = new Date(date);
    const nextDay = new Date(d);
    nextDay.setDate(d.getDate() + 1);
    return nextDay.getDate() === 1;
}