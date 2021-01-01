let recipes = []

export const copyOfRecipe = () => {
    return recipes.slice()
}

export const getRecipes = () => {
    return fetch('http://localhost:8088/recipes')
        .then(response => response.json())
        .then(parsedRecipes => {
            recipes = parsedRecipes
        })
}