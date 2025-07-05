// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function divide(num1, num2) {
//   if (num2 === 0) {
//     alert("number is not dividible by 0");
//     return;
//   }
//   return num1 / num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(add(5, 7));
// console.log(subtract(8, 3));
// console.log(divide(16, 0));
// console.log(multiply(10, 6));

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input-digit");
  const digitBtn = document.querySelectorAll(".digit");
  const addBtn = document.getElementById("add");
  const subtractBtn = document.getElementById("subtract");
  const divideBtn = document.getElementById("divide");
  const multiplyBtn = document.getElementById("multiply");
  const equalToBtn = document.getElementById("equal-to");

  // Create a Variable to store the first number, second number and operators

  let currentInput = "";
  let firstNumber = null;
  let operator = null;

  //When digit is clicked, add it to the input box

  digitBtn.forEach(function (btn) {
    btn.addEventListener("click", () => {
      //Or use Anonymous function
      currentInput = currentInput + btn.textContent;
      input.value = currentInput;
    });
  });

  //Create a function to handle, first number and operator clicked and clears for the second number

  function handleOperator(op) {
    if (currentInput === "") return; //Do nothing if no digit is clicked
    firstNumber = parseFloat(currentInput); //convert string digit to an actual number and save it as first number
    operator = op; //Save the operator clicked by the user
    currentInput = ""; //Reset the input for second number
  }

  //Add event listener to the operator and pass it in an anonymous function

  addBtn.addEventListener("click", () => handleOperator("+")); //Or use Anonymous function
  subtractBtn.addEventListener("click", () => handleOperator("-"));
  multiplyBtn.addEventListener("click", () => handleOperator("*"));
  divideBtn.addEventListener("click", () => handleOperator("/"));

  //When the equal button is clicked, do the math i.e. calculate the userinputs

  equalToBtn.addEventListener("click", function () {
    if (currentInput === "" || firstNumber === null || operator === null)
      return; //i.e. do nothing
    const secondNumber = parseFloat(currentInput);
    let result;

    //Use switch-case statement when dealing with one value with multiply choices

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "/":
        if (secondNumber === 0) {
          alert("Error: Number can't be divided by zero");
          return;
        }
        result = firstNumber / secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;

      default:
        alert("Unknown Operator");
        break;
    }

    // input.value = `${firstNumber} ${operator} ${secondNumber} = ${result}`; this is used if the input type is text and not number because it displays the operators and equal sign
    
    input.value = result;

    //Reset for next calculation
    currentInput = "";
    firstNumber = null;
    operator = null;
  });
});
