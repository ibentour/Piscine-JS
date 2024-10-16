const invert = (obj) => Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
);