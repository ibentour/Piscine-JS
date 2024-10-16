function filterEntries(object, filterFunction) {
    return Object.fromEntries(
        Object.entries(object).filter(filterFunction)
    );
}

function mapEntries(object, mapFunction) {
    return Object.fromEntries(
        Object.entries(object).map(([key, value]) => {
            const [newKey, newValue] = mapFunction([key, value]);
            return [newKey, newValue];
        })
    );
}

function reduceEntries(object, reducerFunction, initialValue) {
    return Object.entries(object).reduce(
        (accumulator, entry) => reducerFunction(accumulator, entry),
        initialValue
    );
}

function lowCarbs(cart) {
    return filterEntries(cart, ([itemName, quantity]) => {
        const carbsPer100g = nutritionDB[itemName].carbs;
        const totalCarbs = (carbsPer100g / 100) * quantity;
        return Math.floor(totalCarbs) <= 50;
    });
}

function totalCalories(cart) {
    return Number(
        reduceEntries(
            cart,
            (totalCals, [itemName, quantity]) => {
                const caloriesPer100g = nutritionDB[itemName].calories;
                return totalCals + (caloriesPer100g / 100) * quantity;
            },
            0
        ).toFixed(1)
    );
}

function cartTotal(cart) {
    return Object.fromEntries(
        Object.entries(cart).map(([itemName, quantity]) => [
            itemName,
            Object.fromEntries(
                Object.entries(nutritionDB[itemName]).map(([nutrient, valuePer100g]) => [
                    nutrient,
                    Math.round((quantity / 100) * valuePer100g * 1000) / 1000
                ])
            )
        ])
    );
}