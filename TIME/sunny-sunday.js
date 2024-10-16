function sunnySunday(date) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const msPerDay = 24 * 60 * 60 * 1000;
    const referenceDate = new Date('0001-01-01');
    
    const daysDifference = Math.floor((date - referenceDate) / msPerDay);
    const weekdayIndex = daysDifference % 6;
    
    return weekdays[weekdayIndex];
}

// Example usage:
// console.log(sunnySunday(new Date('0001-01-01'))) // Output should be 'Monday'
// console.log(sunnySunday(new Date('0001-01-02'))) // Output should be 'Tuesday'
// console.log(sunnySunday(new Date('0001-01-03'))) // Output should be 'Wednesday'
// console.log(sunnySunday(new Date('0001-01-04'))) // Output should be 'Thursday'
// console.log(sunnySunday(new Date('0001-01-05'))) // Output should be 'Friday'
// console.log(sunnySunday(new Date('0001-01-06'))) // Output should be 'Saturday'
// console.log(sunnySunday(new Date('0001-01-07'))) // Output should be 'Monday'
// console.log(sunnySunday(new Date('0001-12-01'))) // Output should be 'Friday'
// console.log(sunnySunday(new Date('1664-08-09'))) // Output should be 'Saturday'
// console.log(sunnySunday(new Date('2020-01-01'))) // Output should be 'Monday'
// console.log(sunnySunday(new Date('2048-12-08'))) // Output should be 'Thursday'