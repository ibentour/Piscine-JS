const is = {
    num: n => typeof n === "number",
    str: n => typeof n === "string",
    arr: n => Array.isArray(n),
    obj: n => n && typeof n === "object" && !Array.isArray(n),
    fun: n => typeof n === "function"
};

const fusion = (obj1, obj2) => {
    const result = { ...obj1 };
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (is.obj(obj1[key]) && is.obj(obj2[key])) {
                result[key] = fusion(obj1[key], obj2[key]);
            } else if (is.arr(obj1[key]) && is.arr(obj2[key])) {
                result[key] = [...obj1[key], ...obj2[key]];
            } else if (is.num(obj1[key]) && is.num(obj2[key])) {
                result[key] = obj1[key] + obj2[key];
            } else if (is.str(obj1[key]) && is.str(obj2[key])) {
                result[key] = `${obj1[key]} ${obj2[key]}`;
            } else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
};