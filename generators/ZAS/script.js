let button = document.querySelector('.generate');
let zasElements = {
  pv: document.getElementById('pv'),
  ph: document.getElementById('ph'),
  bc: document.getElementById('bc'),
  l: document.getElementById('l'),
  kep: document.getElementById('kep'),
};

function getRandom(min, max, decimalPlaces = 0) {
  const factor = Math.pow(10, decimalPlaces);
  return ((Math.random() * (max - min) + min) * factor / factor).toFixed(decimalPlaces);
}

button.addEventListener('click', function () {
  animateTextChange(zasElements.pv, getRandom(1015, 1020));
  animateTextChange(zasElements.ph, getRandom(4.0, 7.0, 1));
  animateTextChange(zasElements.l, `${getRandom(0, 2)}-${getRandom(0, 2)}-${getRandom(0, 2)}`);
  animateTextChange(zasElements.kep, `${getRandom(0, 3)}-${getRandom(0, 3)}-${getRandom(0, 3)}`);
});

function animateTextChange(element, newText) {
  element.style.transition = 'opacity 0.3s ease-in-out';
  element.style.opacity = 0;
  setTimeout(() => {
    element.textContent = newText;
    element.style.opacity = 1;
  }, 300);
}

document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.querySelector('.copy-button');
  const copyText = document.querySelectorAll('.pv, .ph,.bc, .l, .kep');

  const clipboard = new ClipboardJS(copyButton, {
    text: (trigger) => {
      const textToCopy = Array.from(copyText).map((p) => p.textContent).join('\n');
      return textToCopy;
    },
  });

  clipboard.on('success', (e) => {
    e.clearSelection();
    const copiedAlert = document.createElement('div');
    copiedAlert.textContent = 'Текст скопійовано!';
    copiedAlert.className = 'alert';
    document.body.appendChild(copiedAlert);
    setTimeout(() => {
      document.body.removeChild(copiedAlert);
    }, 2000);
  });

  clipboard.on('error', (e) => {
    alert('Помилка копіювання тексту. Використайте Ctrl+C або Command+C.');
  });
});
