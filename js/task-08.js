const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || mail.trim() === '' || password === '' || password.trim() === '') {
        alert("Пожалуйста, заполните все поля перед оправкой")
    } else {

        const formValue = {
            mail, password
        }
        console.log(formValue)
        form.reset()
    }
}