function flags(obj) {
    const res = { alias: { h: 'help' }, description: '' };
    if (Object.keys(obj).length === 0) return res;

    const { help, ...restObj } = obj;
    
    Object.keys(restObj).forEach(key => {
        res.alias[key[0]] = key;
    });

    const descriptionArray = (help || Object.keys(restObj)).map(key => 
        `-${key[0]}, --${key}: ${restObj[key]}`
    );

    res.description = descriptionArray.length === 1 ? descriptionArray[0] : descriptionArray.join('\n');

    return res;
}