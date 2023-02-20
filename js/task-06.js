

const inputEl = document.querySelector(`#validation-input`);
console.log(inputEl);
 const onValidation=()=>
    {
    console.log(inputEl.value.length);
  if (inputEl.getAttribute('data-length') === String(inputEl.value.length)) { 
    
    inputEl.classList.add('valid');
    
  } else {
    inputEl.classList.remove('valid');
     inputEl.classList.add('invalid');
  }
};
inputEl.addEventListener(`blur`, onValidation);

