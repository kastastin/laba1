'use strict';

const form = document.getElementById('form'),
    smallPictures = document.querySelector('.small-images'),
    middlePictures = document.querySelector('.middle-images'),
    bigPictures = document.querySelector('.big-images');

form.addEventListener('submit', chooseSize);

function chooseSize(event) {
    event.preventDefault();
    const size = form.querySelector('[name="size"]');
    smallPictures.hidden = true;
    middlePictures.hidden = true;
    bigPictures.hidden = true;
    showPictures(size.value);
}

function showPictures(size) {
    switch (size) {
        case 'small':
            smallPictures.hidden = false;
            break;
        case 'middle':
            middlePictures.hidden = false;
            break;
        case 'big':
            bigPictures.hidden = false;
            break;
        default:
            smallPictures.hidden = false;
            middlePictures.hidden = false;
            bigPictures.hidden = false;
            break;
    }  
}