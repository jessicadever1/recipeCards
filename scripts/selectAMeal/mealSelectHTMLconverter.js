/*
My first goal is to make sure that I can get the
HTML show up on the page.
*/

export const recipeForm = (placeholder) => {
    return `
    <label for="mealSelect"><h3 class="mealSelectTitle">Select a meal</h3>
    <select class="mealSelect" id="mealSelect">
        <option value="0" class="select">  Please select a meal...</option>
        <option value="1" id="breakfastSelect">Breakfast</option>
        <option value="2" class="lunchSelect">Lunch</option>
        <option value="3" class="snackSelect">Snack</option>
        <option value="4" class="dinnerSelect">Dinner</option>
        <option value="5" class="dessertSelect">Dessert</option> 
    </select>
    `
}