function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(`.change-color`);
const nameColor = document.querySelector(`.color`);
const body = document.querySelector(`body`);
changeColorBtn.addEventListener(`click`, () => {
  let hexColor = getRandomHexColor();
  body.style.background = hexColor;
  nameColor.textContent = hexColor;

});
console.log(getRandomHexColor());