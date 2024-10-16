const pick = (obj, keys) => {
    const isString = typeof keys === "string";
    const keySet = isString ? new Set([keys]) : new Set(keys);
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => 
            isString ? key === keys : keySet.has(key)
        )
    );
};

const omit = (obj, keys) => {
    const isString = typeof keys === "string";
    const keySet = isString ? new Set([keys]) : new Set(keys);
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => 
            isString ? key !== keys : !keySet.has(key)
        )
    );
};