const input = document.querySelector('#validation-input');
const dataNumber = Number(input.dataset.length)
input.addEventListener('blur', () => { 
    if (input.value.length !== dataNumber) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    } else { 
        input.classList.remove('invalid')
        input.classList.add('valid')
    }

})
