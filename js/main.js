const calculator = document.querySelector('.calculator');
const calculatorBtnDiv = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

calculatorBtnDiv.addEventListener('click', event => {
  button = event.target;
  const { buttonType, key } = button.dataset;
  const { previousButtonType } = calculator.dataset;
  const result = display.textContent;

  const operatorKeys = [...calculatorBtnDiv.children]
    .filter(btn => btn.dataset.buttonType === 'operator')
    .forEach(btn => btn.classList.remove('is-pressed'));

  if (buttonType === 'number') {
    if (result === '0') {
      display.textContent = key;
    } else {
      display.textContent = result + key;
    }
  }

  if (buttonType === 'decimal') {
    display.textContent = result + '.';
  }

  if (buttonType === 'operator') {
    button.classList.add('is-pressed');
    calculator.dataset.firstValue = result;
    calculator.dataset.operator = button.dataset.key;
  }

  if (buttonType === 'equal') {
    const firstValue = parseFloat(calculator.dataset.firstValue);
    const operator = calculator.dataset.operator;
    const secondValue = parseFloat(result);

    let newResult;
    if (operator === 'plus') newResult = firstValue + secondValue;
    if (operator === 'minus') newResult = firstValue - secondValue;
    if (operator === 'times') newResult = firstValue * secondValue;
    if (operator === 'divide') newResult = firstValue / secondValue;

    display.textContent = newResult;
  }

  if (buttonType === 'clear') {
    if (button.textContent === 'AC') {
      delete calculator.dataset.firstValue;
      delete calculator.dataset.operator;
    }

    display.textContent = '0';
    button.textContent = 'AC';
  }

  if (buttonType !== 'clear') {
    const clearBtn = calculator.querySelector('[data-key="clear"]');
    clearBtn.textContent = 'CE';
  }

  if (previousButtonType === 'operator') {
    display.textContent = key;
  }

  calculator.dataset.previousButtonType = buttonType;
});
