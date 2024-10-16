const get = (src, path) => {
    const keys = path.split('.')
    let final = src
    keys.forEach(element => {
        if (final == undefined) return final
        final = final[element]
    })
    return final
}