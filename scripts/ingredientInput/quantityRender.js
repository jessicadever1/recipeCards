import {quantityHTML} from './quantitySelectHTMLconverter.js'

const HTML = quantityHTML()
const contentElement = document.querySelector(".recipeIngredients__quantity")

export const renderQuantitySelect = () => {
        contentElement.innerHTML += HTML;
}