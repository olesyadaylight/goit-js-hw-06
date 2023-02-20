const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector(`#ingredients`);
console.log(ulRef);
const liListRef = ingredients.map((name) => {
  const liRef = document.createElement(`li`);
  liRef.textContent = name;
  return liRef;
});

ulRef.append(...liListRef);

