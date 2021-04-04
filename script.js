// get all important element 
const historyValue = document.querySelector('.history-value');
const outputValue = document.querySelector('.output-value');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const clearAll = document.getElementById('clear');
const backSpace = document.getElementById('backspace');

// initialize 
let histVal = '';
let outputVal = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//displaying numbers in the screen accepting just one dot
numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if(e.target.innerText === '.' && haveDot) {
      return;
    }
    outputVal += e.target.innerText;
    // console.log('i am clicking');
    outputValue.innerText = outputVal;
  })
  // console.log(outputValue);
})

// operations
operators.forEach(operator => {
  operator.addEventListener('click', (e) => {
    if (!outputVal) return;
    haveDot = false;
    const operatorName = e.target.innerText;
    if(histVal && outputVal && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(outputVal);
    }
    clearVal(operatorName);
    lastOperation = operatorName;
  })
})

clearVal = (name = '') => {
  histVal += outputVal + ' ' + name + ' ';
  historyValue.innerText = histVal;
  outputValue.innerText = '';
  outputVal = '';
}

//mathematical Operations
mathOperation = () => {
  if (lastOperation === "x") {
    result  = parseFloat(result) * parseFloat(outputVal);
  } else if (lastOperation === "+") {
    result  = parseFloat(result) + parseFloat(outputVal);
  } else if (lastOperation === "-") {
    result  = parseFloat(result) - parseFloat(outputVal);
  } else if (lastOperation === "/") {
    result  = parseFloat(result) / parseFloat(outputVal);
  } else if (lastOperation === "%") {
    result  = parseFloat(result) % parseFloat(outputVal);
  }
}

//targetting the equal button
equal.addEventListener('click', (e) => {
  if (!outputVal||!histVal ) return;
  haveDot = false;
  mathOperation();
  clearVal();
  outputValue.innerText = result;
  outputVal = result;
  histVal = '';
})

//clear All button
clearAll.addEventListener('click', () => {
  outputValue.innerText = '0';
  historyValue.innerText = '0';
  histVal = '';
  outputVal = '';
  result = '';
  // console.log('I am working perfectly')
})

// backspace
backSpace.addEventListener('click', (e) => {
  outputValue.innerText = '0';
  outputVal = ''
})
