let button = document.querySelector('.generate');
let hb = document.querySelector('.hb');
let l = document.querySelector('.l');
let shoe = document.querySelector('.shoe');

let male = document.querySelector('#male');
let female = document.querySelector('#female');
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', function () {
  if (male.checked) {
    hb.innerHTML = "Нв  -------- " + getRandom(110, 160) + " г/л.";
    shoe.innerHTML = "ШОЕ ---- " + getRandom(1, 10) + " мм/год.";
  } else if (female.checked) {
    hb.innerHTML = "Нв  -------- " + getRandom(120, 140) + " г/л.";
    shoe.innerHTML = "ШОЕ ---- " + getRandom(2, 15) + " мм/год.";
  }
  l.innerHTML = "Л --------- " + (getRandom(40, 90) * 0.1).toFixed(1);
})