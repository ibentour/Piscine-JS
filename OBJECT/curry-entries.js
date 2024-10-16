function defaultCurry(obj1) {
    return (obj2) => ({ ...obj1, ...obj2 });
}

function mapCurry(func) {
    return (obj) => Object.fromEntries(Object.entries(obj).map(func));
}

function reduceCurry(reducer) {
    return (obj, initialValue) => Object.entries(obj).reduce(
        (acc, entry) => reducer(acc, entry),
        initialValue
    );
}

function filterCurry(predicate) {
    return (obj) => Object.fromEntries(
        Object.entries(obj).filter(predicate)
    );
}

function reduceScore(obj, initialValue) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj, initialValue);
}

function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}

function mapAverage(obj) {
    const avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [
            k,
            { ...v, averageScore: avgScores[k] }
        ])
    );
}
