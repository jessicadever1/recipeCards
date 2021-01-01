let recipes = []

export const copyOfRecipes = () => {
    return recipes.slice()
}

export const getRecipes = () => {
    return fetch('http://localhost:8088/recipes')
        .then(response => response.json())
        .then(parsedRecipes => {
            recipes = parsedRecipes
        })
}

// export const saveRecipe = (newRecipe) => {
//     fetch("http://localhost:8088/recipes",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newRecipe)
//     })
//         .then(getRecipes(newRecipe))
//         .then(dispatchStateChangeEvent(newRecipe))
// }