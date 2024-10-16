function countLeapYears(date) {
    const year = date.getFullYear();
    // Calculate the number of leap years using the formula:
    // - Years divisible by 4
    // - Subtract years divisible by 100 (not leap years unless divisible by 400)
    // - Add years divisible by 400
    const leapYears = (Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400));
    return leapYears > 0 ? leapYears-1 : leapYears 
}

// console.log(countLeapYears(new Date('0001-12-01')))
// console.log(countLeapYears(new Date('1664-08-09')))
// console.log(countLeapYears(new Date('2020-01-01')))
// console.log(countLeapYears(new Date('2048-12-08')))