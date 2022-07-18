/*let variable 命名一个可以改变的变量
  const variable 命名一个不可改变的变量
  Js命名规则：第一个单词小写，第二个单词大写
             可以以$开头，也可以以_开头
             不能以数字开头*/

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//get input from input field, parse to integer
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//generate and writes calculation logic
function calculationLogic(originalResult, operator, calculateResult) {
  const decription = `${originalResult} ${operator} ${calculateResult}`;
  outputResult(currentResult, decription);
}

// 将用户输入的value加上currentvalue, userInput.value返回string类型，要转为integer进行计算
function add() {
  const enteredNumber = getUserNumberInput();
  const initial = currentResult;
  currentResult += enteredNumber;
  calculationLogic(initial, "+", enteredNumber);
  //add object(dictionary)
  const logEntry = {
    operation: "add",
    preResult: initial,
    number: enteredNumber,
    result: currentResult,
  };
  //add to logEntries array and show up in console
  logEntries.push(logEntry);
  console.log(logEntries);
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initial = currentResult;
  currentResult = currentResult - enteredNumber;
  calculationLogic(initial, "-", enteredNumber);
}

function multiple() {
  const enteredNumber = getUserNumberInput();
  const initial = currentResult;
  currentResult = currentResult * enteredNumber;
  calculationLogic(initial, "*", enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initial = currentResult;
  currentResult = currentResult / enteredNumber;
  calculationLogic(initial, "/", enteredNumber);
}

// reload page
function clear() {
  location.reload();
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiple);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);
//   currentResult = currentResult + 10;

//   let calculationDescription = defaultResult + ' + 10'可以表达为以下形式
// let calculationDescription = `${defaultResult} + 10`;
