function flat(array, depth = 1) {
    if (!Array.isArray(array)) {
        throw new TypeError('First argument must be an array')
    }
    
    // Helper function to flatten the array recursively
    function flatten(arr, depth) {
        if (depth < 1) {
            return arr.slice()
        }
        
        return arr.reduce((acc, val) => {
            if (Array.isArray(val)) {
                acc.push(...flatten(val, depth - 1))
            } else {
                acc.push(val)
            }
            return acc
        }, [])
    }
    
    return flatten(array, depth)
}