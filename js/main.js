const calculator = document.querySelector('.calculator');
const calculatorBtnDiv = calculator.querySelector('.calculator__keys');

calculatorBtnDiv.addEventListener('click', event => {
  button = event.target;
  const { buttonType, key } = button.dataset;
});
