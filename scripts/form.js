import { saveRecipe } from './recipeDataProvider.js'

const contentElement = document.querySelector(".recipeForm")
const eventHub = document.querySelector(".containsMainDiv")

const renderForm = () => {
    contentElement.innerHTML = `
    <h2 class="recipeFormTitle">Add A Recipe</h2>
                    <div class="form">
                        <div class="topOfRecipeForm">
                            <div class="topLeftOfRecipeForm">
                                
                                <div class="recipeNameDiv">
                                    <label for="recipeNameInput"><h3 class="recipeName">Recipe Name</h3>
                                    <input type="text" id="recipeName" class="recipeNameInput"></input>
                                </div>
                                <div class="recipeTypeDiv">
                                    
                                </div>
                                    
                            </div>    
                            <div class="topRightOfRecipeForm">
                                    <div class="iconSelect">
                                    <div class="radioCSS">
                                        <input class="iconRadio" type="radio">
                                        <img src="images/vegan.png" alt="vegan icon" class="miniVeganIconPic">
                                    </div>
                                    <div class="radioCSS">   
                                        <input class="iconRadio" type="radio">
                                        <img src="images/vegetarian.png" alt="vegetarian icon" class="miniVegetarianIconPic">
                                    </div> 
                                    <div class="radioCSS">
                                        <input class="iconRadio" type="radio">
                                        <img src="images/whole30.png" alt="whole30 icon" class="miniWhole30IconPic">
                                    </div>
                                    <div class="radioCSS">
                                        <input class="iconRadio" type="radio">
                                        <img src="images/500.png" alt="500 call icon" class="miniFiveHundIconPic">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="recipeIngredientsDiv">
                            <h3 class="recipeIngredients">Ingredients</h3>
                            <div class="ingredientInputs">
                                <select class="recipeIngredients__quantity" type="text" placeholder="quantity"></select>
                                <select class="recipeIngredients__unit" type="text" placeholder="Unit">Unit</select>
                                <input id="ingredientInput" class="recipeIngredients__ingredient" type="text" placeholder="Ingredient Name">
                                <input id="ingredientBrand" class="recipeIngredients__brand" type="text" placeholder="Brand">
                            </div>
                            <div class="ingredientInputs">
                                <select class="recipeIngredients__quantity" type="text" placeholder="quantity">Quantity</select>
                                <select class="recipeIngredients__unit" type="text" placeholder="Unit">Unit</select>
                                <input class="recipeIngredients__ingredient" type="text" placeholder="Ingredient Name">
                                <input class="recipeIngredients__brand" type="text" placeholder="Brand">
                            </div>
                            <div class="ingredientInputs">
                                <select class="recipeIngredients__quantity" type="text" placeholder="quantity">Quantity</select>
                                <select class="recipeIngredients__unit" type="text" placeholder="Unit">Unit</select>
                                <input class="recipeIngredients__ingredient" type="text" placeholder="Ingredient Name">
                                <input class="recipeIngredients__brand" type="text" placeholder="Brand">
                            </div>
                        </div>
                        <div class="addAnotherIngredientDiv">
                            <button class="addAnotherIngredientButton">Add Another Ingredient</button>
                        </div>  
                        <div class="instructionsDiv">
                            <textarea id="instruction" class="instructionsTextarea" placeholder="Add instructions here..."></textarea>
                        </div>
                        <div class="selectRecipeDiv">
                            <button class="selectRecipeButton" id="selectRecipeButton">Recipe Complete</button>
                        </div>    
                    </div>
    `
}

export const recipeFormComponent = () => {
    renderForm()
}

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "selectRecipeButton") {
        const recipeName = document.querySelector("#recipeName").value
        const mealType = document.querySelector("#mealSelect").value
        // const vegan = document.querySelector(".").value
        // const vegetarian = document.querySelector(".").value
        // const whole30 = document.querySelector(".").value
        // const fiveHundCalories = document.querySelector(".").value
        // const servings = document.querySelector(".").value
        // const prepTime = document.querySelector(".").value
        // const cookTime = document.querySelector(".").value
        // const totalTime = document.querySelector(".").value
        // const ingredients = document.querySelector(".").value
        const quantity = document.querySelector("#recipeIngredientsQuantity").value
        const unit = document.querySelector("#unitSelected").value
        const name = document.querySelector("#ingredientInput").value
        const brand = document.querySelector("#ingredientBrand").value
        const instructions = document.querySelector("#instruction").value
    
        const newRecipe = {
            recipeName: recipeName,
            mealType: mealType,
            // vegan: vegan,
            // vegetarian: vegetarian,
            // whole30: whole30,
            // fiveHundCalories: fiveHundCalories,
            // servings: servings,
            // prepTime: prepTime,
            // cookTime: cookTime,
            // totalTime: totalTime,
            // ingredients: ingredients,
            quantity: quantity,
            unit: unit,
            name: name,
            brand: brand,
            instructions: instructions
        }
        saveRecipe(newRecipe)
    }
})