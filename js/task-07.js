const inputRef = document.querySelector(`#font-size-control`);
console.log(inputRef);
const textRef = document.querySelector(`#text`);
console.log(textRef);
inputRef.addEventListener(`input`,onTextChange);
function onTextChange() {
    textRef.style.fontSize = `${inputRef.value}px`;
};
