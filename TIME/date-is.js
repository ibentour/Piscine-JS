function isValid(date) {
    if (date instanceof Date) return !isNaN(date.getTime());
    if (typeof date === "number") return !isNaN(new Date(date).getTime());
    return false;
}

function isAfter(date1, date2) {
    return new Date(date1) > new Date(date2);
}

function isBefore(date1, date2) {
    return new Date(date1) < new Date(date2);
}

function isFuture(date) {
    return isValid(date) && new Date(date) > new Date();
}

function isPast(date) {
    return isValid(date) && new Date(date) < new Date();
}
  
// Example usage (commented out):
  
//   const now = new Date();
//   const futureDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
//   const pastDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
//   const invalidDate = new Date('invalid');
  
//   console.log('Is now valid?', isValid(now));
//   console.log('Is future date after now?', isAfter(futureDate, now));
//   console.log('Is past date before now?', isBefore(pastDate, now));
//   console.log('Is future date in the future?', isFuture(futureDate));
//   console.log('Is past date in the past?', isPast(pastDate));
//   console.log('Is invalid date valid?', isValid(invalidDate));
  