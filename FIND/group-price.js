function groupPrice(str) {
    let matches = [...str.matchAll(/(\$|([A-Z]{3}))(\d+)[.](\d+)/gi)]
    let final = []
    if (matches === null) return final
    matches.forEach((matched) => {
        final.push([
            matched[0], // entire match
            matched[3], // group 3 (dollars)
            matched[4]  // group 4 (cents)
        ])
    })
    return final
}
