import { copyOfRecipes, getRecipes, } from "../recipeDataProvider.js";
import { dinnerRecipeHTMLConverter } from "./dinnerHTMLConverter.js"

const contentElement = document.querySelector('.dinnerRecipeList')

let dinnerRecipeCards = []

export const dinnerRecipeListComponent = () => {
    getRecipes().then( () => {
        let recipes = copyOfRecipes()
        for (const recipe of recipes) {
            if (recipe.mealType === "Dinner") {
            dinnerRecipeCards.push(dinnerRecipeHTMLConverter(recipe))
        }}
        contentElement.innerHTML += dinnerRecipeCards.join("")
    })
}