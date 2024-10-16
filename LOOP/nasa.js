function nasa(n) {
    let arr = []
     for (let i = 1; i <= n; i++) {
         if (i % 3 === 0 && i % 5 === 0) {
            arr.push("NASA")
        } else if (i % 5 === 0) {
            arr.push("SA")   
        } else if (i % 3 === 0) {
            arr.push("NA")
        } else {
            arr.push(i)
        }
     }
     let string = arr.join(" ")
     return string
 }