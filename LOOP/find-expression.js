function findExpression(target) {
    function helper(current, expression) {
        if (current > target) return undefined
        if (current === target) return expression

        // Try multiplying by 2
        const resultMul = helper(current * 2, expression + " " + mul2)
        if (resultMul !== undefined) return resultMul

        // Try adding 4
        const resultAdd = helper(current + 4, expression + " " + add4)
        return resultAdd
    }

    return helper(1, '1')
}
