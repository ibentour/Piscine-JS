function interpolation({ step = 0, start = 0, end = 0, callback = () => {}, duration = 0 } = {}) {
    if (step <= 0 || duration <= 0) return;

    const distance = (end - start) / step;
    const interval = duration / step;
    let count = 0;

    const timer = setInterval(() => {
        if (count < step) {
            callback([start + distance * count, interval * (count + 1)]);
            count++;
        } else {
            clearInterval(timer);
        }
    }, interval);
}