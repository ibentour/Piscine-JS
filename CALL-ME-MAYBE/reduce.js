const fold = (arr, f, acc) => {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
};

const foldRight = (arr, f, acc) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
};

const reduce = (arr, f) => {
    const length = arr.length;
    if (length === 0) throw new TypeError('Reduce of empty array with no initial value');
    let acc = arr[0];
    for (let i = 1; i < length; i++) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
};

const reduceRight = (arr, f) => {
    const length = arr.length;
    if (length === 0) throw new TypeError('Reduce of empty array with no initial value');
    let acc = arr[length - 1];
    for (let i = length - 2; i >= 0; i--) {
        acc = f(acc, arr[i], i, arr);
    }
    return acc;
};