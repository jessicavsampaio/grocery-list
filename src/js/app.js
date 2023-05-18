const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = form.elements.product.value;
    const qty = form.elements.qty.value;
    const newLi = document.createElement('li');
    
    newLi.append (`${qty} ${product}`);
    list.appendChild(newLi);

    form.reset();
})