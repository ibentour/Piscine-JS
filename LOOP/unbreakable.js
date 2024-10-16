const split = (str, delim) => {   
    let word = ""
    let arr = []
    let newDelim = delim

    str = str.replaceAll(delim, " ")

    delim = " "
    for (let i = 0; i < str.length; i++) {
       
        if (str[i] != delim) {
            word += str[i]
        } else {        
            arr.push(word)
            word = ""
        }
    }

    arr.push(word)
    if (newDelim == "") {
        arr.shift()
        arr.pop()
    }
    return arr
}

const join = (arr, concatStr) => {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
        if (i !== arr.length - 1) {
            str += concatStr
        }
    }
    return str
}
