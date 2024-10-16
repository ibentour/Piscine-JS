function chunk(array, size) {
    let doubleArray = []
    while (array.length > 0) {
        let arrayElement = array.splice(0, size)
        doubleArray.push(arrayElement)
    }
    return doubleArray
}