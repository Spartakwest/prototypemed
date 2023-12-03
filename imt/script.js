document.addEventListener('DOMContentLoaded', function () {
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDisplay = document.getElementById('result');
  const copyButton = document.getElementById('copy');

  // Function to calculate BMI
  function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height * 0.01 ** 2);
      resultDisplay.textContent = bmi.toFixed(1);
    } else {
      resultDisplay.textContent = '';
    }
  }

  // Calculate BMI when inputs change
  weightInput.addEventListener('input', calculateBMI);
  heightInput.addEventListener('input', calculateBMI);

  // Copy BMI to clipboard
  copyButton.addEventListener('click', function () {
    if (resultDisplay.textContent) {
      const textArea = document.createElement('textarea');
      textArea.value = resultDisplay.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('ІМТ скопійовано!');
    }
  });
});
