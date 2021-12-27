const allCatigories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCatigories.length}`)
    
const categoryArray = document.querySelectorAll('h2'); 

for (let i = 0; i < categoryArray.length; i += 1) { 

    console.log(`Category: ${categoryArray[i].textContent}`)

    const sumOfElements = categoryArray[i].nextElementSibling.children.length;
    console.log(`Elements: ${sumOfElements}`)
}


