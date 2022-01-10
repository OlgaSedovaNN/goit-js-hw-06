const allCatigories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCatigories.length}`)
    
const categoryNodeList = document.querySelectorAll('h2'); 

const categoriesNames = categoryNodeList.forEach(function (category) {
    console.log(`Category: ${category.textContent}`)
    console.log(`Elements: ${category.nextElementSibling.children.length}`)
});

