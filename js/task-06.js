

const inputRef = document.querySelector(`#validation-input`);
console.log(inputRef);
   inputRef.addEventListener(`blur`,(event)=>{

  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) { 
    console.log(inputRef.value.length);
    console.log(Number(inputRef.dataset.length));
    inputRef.classList.add('valid');
    inputRef.classList.remove(`invalid`);
    
  } else {
    inputRef.classList.remove('valid');
     inputRef.classList.add('invalid');
  }
});


