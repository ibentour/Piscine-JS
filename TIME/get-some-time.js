// First Selution 
function firstDayWeek(week, year) {
    let date = 1 + (week - 1) * 7
    let monday = new Date(year, 0, date)

    while (monday.getDay() !== 1) {
        monday.setDate(monday.getDate() - 1)
    }
    if (monday.getFullYear() === year - 1) return '01-01-' + year
    if (year.toString().slice(0, 2) === '00') monday.setDate(monday.getDate() + 1);

    const padZero = (num) => (num < 10 ? '0' + num : num);
    return `${padZero(monday.getDate())}-${padZero(monday.getMonth() + 1)}-${year.toString().slice(0, 2) === '00' ? '00' + monday.getFullYear().toString().slice(-2) : monday.getFullYear()}`;
}
console.log(firstDayWeek(1, 2023))

// Second Correct solution :

// function firstDayWeek(week, year) {
//     // Create a date object for the 1st of January of the given year
//     const firstJan = new Date(year, 0, 1);
    
//     // Calculate the day of the week for the 1st of January
//     const dayOfWeek = firstJan.getDay();
    
//     // Calculate the offset to the first Monday of the year
//     const offset = (dayOfWeek === 0) ? 1 : (8 - dayOfWeek);
    
//     // Calculate the date of the first Monday of the given week
//     const firstDayOfWeek = new Date(firstJan);
//     firstDayOfWeek.setDate(firstJan.getDate() + (week - 1) * 7 + offset - 1);
    
//     // If the calculated date is before the 1st of January, return the 1st of January
//     if (firstDayOfWeek < firstJan) {
//       return `01-01-${year}`;
//     }
    
//     // Format the date as dd-mm-yyyy
//     const day = String(firstDayOfWeek.getDate()).padStart(2, '0');
//     const month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0');
//     const formattedDate = `${day}-${month}-${year}`;
    
//     return formattedDate;
//   }

  
// Example usage:
// console.log(firstDayWeek(43, '1983')); // Output: "02-01-2023"
// console.log(firstDayWeek(2, "2023")); // Output: "09-01-2023"
// console.log(firstDayWeek(53, "2023")); // Output: "01-01-2023"