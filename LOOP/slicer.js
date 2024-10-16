function slice(strOrarr, start = 0, idx = strOrarr.length) {
    let result = []
    if (start < 0){
        start = strOrarr.length + start
    }
    
    if (idx < 0){
        idx = strOrarr.length + idx
    }

    for (let i = start; i < idx; i++) {
        result.push(strOrarr[i])
    }
    
    if (typeof(strOrarr) === 'object') {
        return result
    } else {
        return result.join('')
    }
}