const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsItems = ingredients.map(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  newIngredient.classList.add('item')
  return newIngredient
});
const ingredientsList = document.querySelector('#ingredients')
const newingredientsList = ingredientsList.append(...ingredientsItems)
 
