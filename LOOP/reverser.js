function reverse(arr) {
    let tmp = []
    for (let x = arr.length-1; x >= 0; x--) {
        tmp.push(arr[x])
    }

    if (typeof(arr) === "string") {
        let x = tmp.join("")
        return x
    }
    return tmp
}