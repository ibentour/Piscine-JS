const filter = (arr, predicate) => {
    const length = arr.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        if (predicate(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

const reject = (arr, predicate) => {
    const length = arr.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        if (!predicate(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

const partition = (arr, predicate) => [
    filter(arr, predicate),
    reject(arr, predicate)
];