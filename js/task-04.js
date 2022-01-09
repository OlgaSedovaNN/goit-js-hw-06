const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;
const counterValue = document.querySelector('#value');
counterValue.value = 0;

decrementBtn.addEventListener('click', () => { 
    counterValue.value -= 1;
    return counterValue.textContent = counterValue.value
})

incrementBtn.addEventListener('click', () => { 
    counterValue.value += 1;
     return counterValue.textContent = counterValue.value
})