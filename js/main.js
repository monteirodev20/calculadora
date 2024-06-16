const calculator = document.querySelector('.calculator');
const calculatorBtnDiv = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

calculatorBtnDiv.addEventListener('click', event => {
  button = event.target;
  const { buttonType, key } = button.dataset;
  const result = display.textContent;

  if (buttonType === 'number') {
    if (result === '0') {
      display.textContent = key;
    } else {
      display.textContent = result + key;
    }
  }

  if (buttonType === 'decimal') {
    console.log('Pressed decimal');
  }

  if (buttonType === 'operator') {
    console.log('pressed operator');
  }

  if (buttonType === 'equal') {
    console.log('pressed equal');
  }

  if (buttonType === 'clear') {
    console.log('pressed clear');
  }
});
