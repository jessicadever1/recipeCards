import { copyOfRecipes, getRecipes, } from "../recipeDataProvider.js";
import { lunchRecipeHTMLConverter } from "./lunchHTMLConverter.js"

const contentElement = document.querySelector('.lunchRecipeList')

let lunchRecipeCards = []

export const lunchRecipeListComponent = () => {
    getRecipes().then( () => {
        let recipes = copyOfRecipes()
        for (const recipe of recipes) {
            if (recipe.mealType === "Lunch") {
            lunchRecipeCards.push(lunchRecipeHTMLConverter(recipe))
        }}
        contentElement.innerHTML += lunchRecipeCards.join("")
    })
}