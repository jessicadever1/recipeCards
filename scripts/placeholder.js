import {breakfastRecipeHTMLConverter} from './breakfastHTMLconverter.js'

const contentElement = document.querySelector('.recipeList')
const HTML = breakfastRecipeHTMLConverter()

export const renderBreakfastRecipes = () => {
    contentElement.innerHTML = HTML;
}
