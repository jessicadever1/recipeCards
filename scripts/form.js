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
                                <label for="mealSelect"><h3 class="mealSelectTitle">Select a meal</h3>
                                <select class="mealSelect" id="mealSelect">
                                    <option value="0" class="select">  Please select a meal...</option>
                                    <option value="1" id="breakfastSelect">Breakfast</option>
                                    <option value="2" class="lunchSelect">Lunch</option>
                                    <option value="3" class="snackSelect">Snack</option>
                                    <option value="4" class="dinnerSelect">Dinner</option>
                                    <option value="5" class="dessertSelect">Dessert</option> 
                                </select>
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
                                <select class="recipeIngredients__quantity" type="text" placeholder="quantity" id="recipeIngredientsQuantity">
                                    <option value="0">Quantity<option>
                                    <option value="2">&#8539;<option>
                                    <option value="3">&#188;<option>
                                    <option value="4">&#8531;<option>
                                    <option value="5">&#189;<option>
                                    <option value="6">&#8532;<option>
                                    <option value="7">&#190;<option>
                                    <option value="8">1<option>
                                    <option value="10">1 &#8539;<option>
                                    <option value="11">1 &#188;<option>
                                    <option value="12">1 &#8531;<option>
                                    <option value="13">1 &#189;<option>
                                    <option value="14">1 &#8532;<option>
                                    <option value="15">1 &#190;<option>
                                    <option value="16">2<option>
                            </select>
                            <select id="unitSelected" class="recipeIngredients__unit" type="text" placeholder="Unit">Unit
                                    <option value="0">Unit</option>
                                    <option value="1">teaspoon</option>
                                    <option value="2">tablespoon</option>
                                    <option value="3">cup</option>
                                    <option value="4">oz</option>
                                    <option value="5">pint</option>
                                    <option value="6">quart</option>
                                    <option value="7">gallon</option>
                            </select>
                                <input id="ingredientInput" class="recipeIngredients__ingredient" type="text" placeholder="Ingredient Name">
                                <input id="ingredientBrand" class="recipeIngredients__brand" type="text" placeholder="Brand">
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