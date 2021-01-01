import { copyOfRecipe, getRecipes } from "./recipeDataProvider.js";
import { breakfastRecipeHTMLConverter } from "./breakfastHTMLconverter.js"

const contentElement = document.querySelector('.recipeList')

const renderRecipe = (recipeArray) => {
    const allRecipesConvertedToStrings = recipeArray.map(
        (recipe) => {
            return breakfastRecipeHTMLConverter(recipe)
        }
    ).join("")
    contentElement.innerHTML = allRecipesConvertedToStrings
}

export const recipeList = () => {
    getRecipes()
        .then(() => {
            const allRecipes = copyOfRecipe()
            renderRecipe(allRecipes)
        })
}


