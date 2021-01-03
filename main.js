import { renderQuantitySelect } from './scripts/ingredientInput/quantityRender.js';
import { render } from './scripts/selectAMeal/renderSelectMealHTML.js'
import {renderUnits} from './scripts/units/unitRender.js'
import { recipeFormComponent } from './scripts/form.js'

render();
renderQuantitySelect();
renderUnits();
recipeFormComponent();