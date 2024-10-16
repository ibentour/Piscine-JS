function filterKeys(obj, predicate) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => predicate(key))
    );
}

function mapKeys(obj, mapFn) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [mapFn(key), value])
    );
}

function reduceKeys(obj, reducer, initialValue) {
    const keys = Object.keys(obj);
    if (initialValue === undefined) {
      return keys.slice(1).reduce((acc, key) => reducer(acc, key), keys[0]);
    }
    return keys.reduce(reducer, initialValue);
  }