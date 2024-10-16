const flow = (arr) => (...args) => {
    const initialValue = args.length > 1 ? arr[0](...args) : args[0];
    return arr.reduce((acc, fn) => fn(acc), initialValue);
};