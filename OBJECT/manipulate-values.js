const filterValues = (object, predicate) => 
    Object.fromEntries(Object.entries(object).filter(([_, value]) => predicate(value)));

const mapValues = (object, transformer) => 
    Object.fromEntries(Object.entries(object).map(([key, value]) => [key, transformer(value)]));

const reduceValues = (object, reducer, initialAccumulator = 0) => 
    Object.values(object).reduce(reducer, initialAccumulator);