const formRef = document.querySelector(`.login-form`);
formRef.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
if (email === "" || password === "") {
    alert ("Please fill in all the fields!");
  }
    const formData = {
        email, password
    };
    console.log(formData);
     event.currentTarget.reset();
};