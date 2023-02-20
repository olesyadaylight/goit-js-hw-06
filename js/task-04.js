const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
console.log(decrementButtonRef.dataset.action);
const incrementButtonRef = document.querySelector('button[data-action="increment"]');
console.log(incrementButtonRef.dataset.action);
const valueRef = document.querySelector(`#value`);
console.log(valueRef);

let counterValue = 0;
const decrement = () => {
    counterValue -= 1;
    valueRef.textContent=counterValue;
};
const increment = () => {
    counterValue += 1;
    valueRef.textContent=counterValue;
};
decrementButtonRef.addEventListener(`click`, decrement);
incrementButtonRef.addEventListener(`click`, increment);

//  const counterValue = {
//      value: 0,
//      decrement() {
//          this.value -= 1;
//     },
//     increment() {
//          this.value += 1;
//      },
//  };

// decrementButtonRef.addEventListener(`click`, () =>{
//       counterValue.decrement();
//      console.log(counterValue);
//      valueRef.textContent = counterValue.value;});

// incrementButtonRef.addEventListener(`click`, () => {
//     counterValue.increment();
//      console.log(counterValue);
//      valueRef.textContent = counterValue.value;});
