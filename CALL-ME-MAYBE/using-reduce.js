const defaultInitialValue = (value) => value === undefined ? 0 : value;

const adder = (arr, value) => arr.reduce((acc, item) => acc + item, defaultInitialValue(value));

const sumOrMul = (arr, value) => arr.reduce((acc, item) => 
    item % 2 === 0 ? acc * item : acc + item, 
    defaultInitialValue(value)
);

const funcExec = (arr, value) => arr.reduce((acc, item) => 
    typeof item === "function" ? item(acc, value) : acc, 
    defaultInitialValue(value)
);