function throttle(fn, delay) {
    let isThrottled = false

    return function(...args) {
        if (isThrottled) return
        isThrottled = true
        fn(...args)
        setTimeout(()=>{
            isThrottled = false
        },delay)
    }
}

function opThrottle(fn, delay,  { trailing = false, leading = false } = {} ) {
    let isThrottled = false
    return function(...args) {
        if (isThrottled) return
        isThrottled = true

        if (leading) {
            fn(...args)
        }

        setTimeout(()=> {
            if (trailing && !leading) {
                fn(...args)
            }
            isThrottled = false
        },delay)
    }
}