const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divBoxes= document.querySelector('#boxes')
const input = document.querySelector('input');

 
btnCreate.addEventListener('click', createBoxes)

function createBoxes(amount) {
amount = input.value
amount = Number(amount)

   let size = 20;
 
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div')
 

    function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    newDiv.style.backgroundColor = getRandomHexColor();
   
    size += 10;
     newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
  
    
    newDiv.classList.add('forRemove')
    divBoxes.appendChild(newDiv)
    
  }

} 


btnDestroy.addEventListener('click', destroyBoxes)

function destroyBoxes() { 
  const removeDivs = document.querySelectorAll('.forRemove')
  for (let i = 0; i < removeDivs.length; i += 1) {
    removeDivs[i].remove();
  }
  input.value = '';
  
}
