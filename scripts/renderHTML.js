import { recipeForm } from './formHTMLConverter.js'

const contentElement = document.querySelector(".recipeTypeDiv")
const HTML = recipeForm()

export const render = () => {
    contentElement.innerHTML = HTML;
}