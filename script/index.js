'use strict';

document.querySelector('.side-bar-header .icon-add').addEventListener('click', function () {
    document.querySelector('.side-bar-header .icon-add').classList.toggle('active-add');
    document.querySelector('.search-new-city').classList.toggle('visible-search');

});

document.querySelector(' .icon-menu').addEventListener('click', function () {
    document.querySelector('.icon-menu').classList.toggle('active-icon-menu');
    document.querySelector('.side-bar').classList.toggle('active-side-bar');
});

let checkboxList = document.querySelectorAll('.place-elect [type="checkbox"]');
let checkboxArray = Array.prototype.slice.call(checkboxList, 0);

checkboxArray.forEach(function (item) {
    item.addEventListener('click', function () {
        if (checkboxArray.some(function (el) {
                return el.checked;
            })) {
            document.querySelector('.icon-delete').classList.add('hide-icon');
            document.querySelector('.side-bar-header .icon-check').classList.remove('hide-icon');
        } else {
            document.querySelector('.icon-delete').classList.remove('hide-icon');
            document.querySelector('.side-bar-header .icon-check').classList.add('hide-icon');
        }
    });
});