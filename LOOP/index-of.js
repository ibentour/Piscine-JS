const indexOf = (arr, value, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1

}

const lastIndexOf = (arr, value, index = arr.length) => {
    for (let i = index; i >= 0; i--) {
        if (arr[i] === value) {
        return i
        }
    }
    return -1
}

const includes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
        return true
        }
    }
    return false
}