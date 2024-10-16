const every = (array, test) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (!test(array[i], i, array)) return false;
    }
    return true;
};

const some = (array, test) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (test(array[i], i, array)) return true;
    }
    return false;
};

const none = (array, test) => !some(array, test);