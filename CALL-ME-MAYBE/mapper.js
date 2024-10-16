const map = (arr, action) => {
    const length = arr.length;
    const res = new Array(length);
    for (let i = 0; i < length; i++) {
        res[i] = action(arr[i], i, arr);
    }
    return res;
};

const flatMap = (arr, action) => {
    const length = arr.length;
    const res = [];
    for (let i = 0; i < length; i++) {
        const mappedValue = action(arr[i], i, arr);
        if (Array.isArray(mappedValue)) {
            res.push(...mappedValue);
        } else {
            res.push(mappedValue);
        }
    }
    return res;
};