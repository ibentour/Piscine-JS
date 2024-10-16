function format(date, formatString) {
    const formatters = {
      y: (d) => Math.abs(d.getFullYear()).toString(),
      yyyy: (d) => Math.abs(d.getFullYear()).toString().padStart(4, '0'),
      G: (d) => d.getFullYear() < 0 ? 'BC' : 'AD',
      GGGG: (d) => d.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini',
      M: (d) => (d.getMonth() + 1).toString(),
      MM: (d) => (d.getMonth() + 1).toString().padStart(2, '0'),
      MMM: (d) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()],
      MMMM: (d) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()],
      d: (d) => d.getDate().toString(),
      dd: (d) => d.getDate().toString().padStart(2, '0'),
      E: (d) => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()],
      EEEE: (d) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()],
      h: (d) => ((d.getHours() % 12) || 12).toString(),
      hh: (d) => ((d.getHours() % 12) || 12).toString().padStart(2, '0'),
      H: (d) => d.getHours().toString(),
      HH: (d) => d.getHours().toString().padStart(2, '0'),
      m: (d) => d.getMinutes().toString(),
      mm: (d) => d.getMinutes().toString().padStart(2, '0'),
      s: (d) => d.getSeconds().toString(),
      ss: (d) => d.getSeconds().toString().padStart(2, '0'),
      a: (d) => d.getHours() < 12 ? 'AM' : 'PM'
    };
  
    function formatToken(token) {
      return formatters[token] ? formatters[token](date) : token;
    }
  
    let result = '';
    let currentToken = '';
    let inBrackets = false;
  
    for (let i = 0; i < formatString.length; i++) {
      const char = formatString[i];
  
      if (char === '[' || char === '<') {
        inBrackets = true;
        result += char;
        continue;
      }
  
      if (char === ']' || char === '>') {
        inBrackets = false;
        if (currentToken) {
          result += formatToken(currentToken);
          currentToken = '';
        }
        result += char;
        continue;
      }
  
      if (/[a-zA-Z]/.test(char)) {
        currentToken += char;
      } else {
        if (currentToken) {
          result += formatToken(currentToken);
          currentToken = '';
        }
        result += char;
      }
    }
  
    if (currentToken) {
      result += formatToken(currentToken);
    }
  
    return result;
  }

const d = new Date('7 January 1985, 3:08:19');
console.log(format(d, 'HH(mm)ss [dd] <MMM>')); // Output: '03(08)19 [07] <Jan>'