const currify = (fn) => {
    const currified = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...moreArgs) => currified(...args, ...moreArgs);
    return currified;
};