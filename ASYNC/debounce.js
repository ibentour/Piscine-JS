function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function opDebounce(fn, delay, { leading = false } = {}) {
    let timer, firstCall = true;
    return function(...args) {
        if (firstCall && leading) {
            fn.apply(this, args);
            firstCall = false;
        }
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}