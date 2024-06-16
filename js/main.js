const calculator = document.querySelector('.calculator');
const calculatorBtnDiv = calculator.querySelector('.calculator__keys');

calculatorBtnDiv.addEventListener('click', event => {
  button = event.target;
  const { buttonType, key } = button.dataset;

  if (buttonType === 'number') {
    console.log('Pressed number');
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
