function sameAmount(str, rexp1, rexp2) {
    rexp1 = new RegExp(rexp1, "g")
    rexp2 = new RegExp(rexp2, "g")
    let matched1 = str.match(rexp1)
    let matched2 = str.match(rexp2)
    return matched1 !== null && matched2 !== null && matched1.length === matched2.length
}