import { copyOfRecipes, getRecipes, } from "../recipeDataProvider.js";
import { dessertRecipeHTMLConverter } from "./dessertHTMLConverter.js"

const contentElement = document.querySelector('.dessertRecipeList')

let dessertRecipeCards = []

export const dessertRecipeListComponent = () => {
    getRecipes().then( () => {
        let recipes = copyOfRecipes()
        for (const recipe of recipes) {
            if (recipe.mealType === "Dessert") {
            dessertRecipeCards.push(dessertRecipeHTMLConverter(recipe))
        }}
        contentElement.innerHTML += dessertRecipeCards.join("")
    })
}