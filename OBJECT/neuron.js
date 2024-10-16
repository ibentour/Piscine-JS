function neuron(arr) {
    const res = {};
    const types = ['questions', 'orders', 'affirmations'];

    for (const item of arr) {
        const [type, ...rest] = item.split(' ');
        const typeMatch = types.find(t => new RegExp(`${t}:`, 'i').test(type));
        
        if (typeMatch) {
            const [statement, response] = parseStatement(rest.join(' '));
            const key = statement.toLowerCase().replace(/[?!]/g, '').replace(/ /g, '_');
            const singularType = typeMatch.slice(0, -1);
            
            res[typeMatch] = res[typeMatch] || {};
            res[typeMatch][key] = res[typeMatch][key] || { [singularType]: statement, responses: [] };
            res[typeMatch][key].responses.push(response);
        }
    }
    return res;
}

function parseStatement(str) {
    const [statement, ...responseParts] = str.split('-');
    return [
        statement.trim(),
        responseParts.join('-').trim().replace(/^Response:\s*/i, '')
    ];
}