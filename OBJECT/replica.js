const isType = {
    array: Array.isArray,
    function: (value) => typeof value === 'function',
    object: (value) => 
        value !== null && 
        typeof value === 'object' && 
        !isType.array(value) && 
        !isType.function(value) && 
        !(value instanceof RegExp)
};

const replica = (target, ...sources) => {
    sources.forEach(source => {
        Object.entries(source).forEach(([key, value]) => {
            if (isType.object(value)) {
                if (!target.hasOwnProperty(key) || !isType.object(target[key])) {
                    target[key] = {};
                }
                replica(target[key], value);
            } else {
                target[key] = value;
            }
        });
    });
    return target;
};