let button = document.querySelector('.generate');
let hb = document.querySelector('.hb');
let l = document.querySelector('.l');
let shoe = document.querySelector('.shoe');
let p = document.querySelector('.p');
let s = document.querySelector('.s');
let ll = document.querySelector('.ll');
let m = document.querySelector('.m');
const resultElement = document.getElementById('result');

let male = document.querySelector('#male');
let female = document.querySelector('#female');
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', function () {
  if (male.checked) {
    animateTextChange("Нв  -------- " + getRandom(110, 160) + " г/л.", hb);
    animateTextChange("ШОЕ ---- " + getRandom(1, 10) + " мм/год.", shoe);

    let totalSum = 100;

    let pValue = getRandom(1, 4);
    let sValue = getRandom(52, 72);
    let llValue = getRandom(19, 37);
    let mValue = totalSum - pValue - sValue - llValue;

    // Перевірка на вихід "М" із діапазону
    if (mValue < 3) {
      mValue = 3;
      llValue = totalSum - pValue - sValue - mValue;
    }

    animateTextChange("П --------- " + pValue, p);
    animateTextChange("С --------- " + sValue, s);
    animateTextChange("Л --------- " + llValue, ll);
    animateTextChange("М ------- " + mValue, m);
  } else if (female.checked) {
    animateTextChange("Нв  -------- " + getRandom(120, 140) + " г/л.", hb);
    animateTextChange("ШОЕ ---- " + getRandom(2, 15) + " мм/год.", shoe);

    let totalSum = 100;

    let pValue = getRandom(1, 4);
    let sValue = getRandom(52, 72);
    let llValue = getRandom(19, 37);
    let mValue = totalSum - pValue - sValue - llValue;

    // Перевірка на вихід "М" із діапазону
    if (mValue < 3) {
      mValue = 3;
      llValue = totalSum - pValue - sValue - mValue;
    }

    animateTextChange("П --------- " + pValue, p);
    animateTextChange("С --------- " + sValue, s);
    animateTextChange("Л --------- " + llValue, ll);
    animateTextChange("М ------- " + mValue, m);
  }
  animateTextChange("Л --------- " + (getRandom(40, 90) * 0.1).toFixed(1), l);
});

function animateTextChange(newText, element) {
  element.style.transition = "opacity 0.3s ease-in";
  element.style.opacity = 0;

  setTimeout(function () {
    element.textContent = newText;
    element.style.opacity = 1;
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.querySelector(".copy-button");
  const copyText = document.querySelectorAll(".hb, .l, .shoe, .p, .s, .ll, .m");

  const clipboard = new ClipboardJS(copyButton, {
    text: function (trigger) {
      const textTocopy = Array.from(copyText).map((p) => p.textContent).join("\n");
      return textTocopy;
    },
  });

  clipboard.on("success", function (e) {
    e.clearSelection();
    alert("Текст скопійовано!");
  });

  clipboard.on("error", function (e) {
    alert("Помилка копіювання тексту. Використайте Ctrl+C або Command+C.");
  });
});
