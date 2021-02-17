'use script';

// всі кнопки
const buttons = document.querySelectorAll('button');

// перебір всіх кнопок
for (let i = 0; i < buttons.length; i++) {

    // обробка всіх подій
    buttons[i].addEventListener('click', () => {
        location.href = `exercise${i+1}.html`;
    });
}