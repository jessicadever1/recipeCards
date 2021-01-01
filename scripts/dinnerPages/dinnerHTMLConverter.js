export const dinnerRecipeHTMLConverter = (recipe) => {
    return `
        <section class="recipeCard" id="recipe--${recipe.id}">
            
                <img class="recipeMainImg" src="../images/${recipe.imgName}.JPG" alt="recipe picture">
                <div class="recipeCardContent">
                    <h2 class="recipeName" id="recipeName">${recipe.recipeName}</h2>
                    <p class="calorieCount" id="calorieCount">${recipe.totalCalories} Calories</p>
                    <p class="totalTime">Total Time: ${recipe.totalTime}</p>
                    <p class="rating">⭐⭐⭐⭐⭐</p>
                    <button class="toggleRecipeButton">See Full Recipe</button>
                </div>
            
        </section>
    `
}