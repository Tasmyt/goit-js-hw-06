const itemsRef = document.querySelectorAll(`.item`);

console.log(`Number of categories:`, itemsRef.length);


itemsRef.forEach(item => {
    console.log(`Category:`, item.querySelector(`h2`).textContent);
    console.log(`Elements:`, item.querySelector(`ul`).children.length);
})