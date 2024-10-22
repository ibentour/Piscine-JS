function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
        try {
            const result = await callback(...args);
            return result;        } catch (error) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw error;
            }
        }
    };
}

function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
        const timeoutPromise = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );
        const callbackPromise = new Promise((resolve) =>
            resolve(callback(...args))
        );
        const result = await Promise.race([timeoutPromise, callbackPromise]).then(
            (result) => result
        );
        if (result instanceof Error) {
            throw result;
        }
        return result;
    };
}