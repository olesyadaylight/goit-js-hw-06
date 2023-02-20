function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonCreateBox = document.querySelector(`button[data-create="create"]`);
console.log(buttonCreateBox.dataset.create);
const buttonDestroyBox = document.querySelector(`button[data-destroy="destroy"]`);
console.log(buttonDestroyBox.dataset.destroy);
const inputNumber = document.querySelector(`input`);
console.log(inputNumber.value);
const divBoxes = document.querySelector(`#boxes`);



function getAmount() {
  let amount = inputNumber.value;
  console.log(amount);
  createBoxes(amount);

};

function createBoxes(amount) {
  let basicSize = 30;
  for (let i = 0; i < amount; i+=1) {
    let size = basicSize + i * 10;
    const div = document.createElement(`div`);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `${ getRandomHexColor() }`;
    divBoxes.appendChild(div);
  
  }
}
    

 buttonCreateBox.addEventListener(`click`, getAmount);
buttonDestroyBox.addEventListener(`click`, onDestroyBoxes);


 function onDestroyBoxes() {
   boxes.innerHTML = "";

 };


