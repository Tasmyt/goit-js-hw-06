const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsRef = [];
// ingredients.forEach(ingredient => {
//   const liEl = document.createElement(`li`);
//   liEl.textContent = ingredient;
//   liEl.classList.add(`.item`);
//   ingredientsRef.push(liEl);
// }
// )
// document.querySelector(`#ingredients`).append(...ingredientsRef);
// console.log(document.querySelector(`#ingredients`))

const ingredientsRef = ingredients.map(ingredient => {
  const liEl = document.createElement(`li`);
  liEl.textContent = ingredient;
  liEl.classList.add(`.item`);
  return liEl;
});

document.querySelector(`#ingredients`).append(...ingredientsRef);
console.log(document.querySelector(`#ingredients`))