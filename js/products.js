'use strict';

const form = document.getElementById('form'),
    btn = document.getElementById('show'),
    products = [];

form.addEventListener('submit', addProducts);
btn.addEventListener('click', showProducts);

// Додати товар
function addProducts(event) {
    event.preventDefault();

    const name = form.querySelector('[name="name"]'),
        price = form.querySelector('[name="price"]'),
        count = form.querySelector('[name="count"]');

    products.push([name.value, price.value, count.value]);
    alert('Ви додали продукт!');
}

// Показати всі товари
function showProducts() {
    let cost = +'';
    products.forEach(item => {
        cost += item[1] * item[2];
    });
    let message = '';
    for (let i = 0; i < products.length; i++) {
        message += `<h4>${i + 1}. Назва: ${products[i][0]}` +
            `<br>Кількість: ${products[i][2]}` +
            `<br>Ціна: ${products[i][1]} грн<br>` +
            `Вартість: ${products[i][1] * products[i][2]} грн<hr></h4>`;
    }
    message += `<br><br>Загальна сума: ${cost}`;
    document.body.innerHTML = message;
}