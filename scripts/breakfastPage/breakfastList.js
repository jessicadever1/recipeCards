import { copyOfRecipes, getRecipes, } from "../recipeDataProvider.js";
import { breakfastRecipeHTMLConverter } from "./breakfastHTMLconverter.js"

const contentElement = document.querySelector('.breakfastRecipeList')
// const eventHub = document.querySelector('.containsMainDiv')

// eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id === "selectRecipeButton") {
//         const customEvent = new CustomEvent("newRecipeRecorded")
//         eventHub.dispatchEvent(customEvent)
//     }
// })

// eventHub.addEventListener("newRecipeRecorded", customEvent => {
//     recipeListComponent()
// })

let breakfastRecipeCards = []

export const recipeListComponent = () => {
    getRecipes().then( () => {
        let recipes = copyOfRecipes()
        for (const recipe of recipes) {
            if (recipe.mealType === "Breakfast") {
            breakfastRecipeCards.push(breakfastRecipeHTMLConverter(recipe))
        }}
        contentElement.innerHTML += breakfastRecipeCards.join("")
    })

}

// eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id === "selectRecipeButton") {
//         const recipeName = document.querySelector("#recipeName").value
//         const calorieCount = document.querySelector("#calorieCount").value
//         const totalTime = document.querySelector("#totalTime").value

//         const Logged = {
//             recipeName: recipeName,
//             calorieCount: calorieCount,
//             totalTime: totalTime
//         }
//         saveRecipe(newRecipeLogged)
//     }
// })

// const renderRecipe = (recipeArray) => {
//     const allRecipesConvertedToStrings = recipeArray.map(
//         (recipe) => {
//             return breakfastRecipeHTMLConverter(recipe)
//         }
//     ).join("")
//     contentElement.innerHTML = allRecipesConvertedToStrings
// }

// export const recipeList = () => {
//     getRecipes()
//         .then(() => {
//             const allRecipes = copyOfRecipe()
//             renderRecipe(allRecipes)
//         })
// }


