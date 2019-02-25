'use strict';

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  counter.innerHTML = localStorage.counter ? localStorage.counter : 0;
}

let buttons = document.querySelector(".wrap-btns");
let counter = document.getElementById('counter');

buttons.addEventListener('click', onClick);

function onClick() {
  if (event.target.id === 'increment') counter.innerHTML++
  if (event.target.id === 'decrement' && counter.innerHTML > 0) counter.innerHTML--
  if (event.target.id === 'reset') counter.innerHTML = 0;
  localStorage.setItem('counter', counter.innerHTML);
}
