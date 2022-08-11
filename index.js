const resultField = document.querySelector("body > main > div > div.result");
const inputs = document.querySelectorAll(".calculator__input");
let num1;
let num2;
let operator;
let result;

inputs.forEach((e) => {
  e.addEventListener("change", (e) => {
    e.target.id === "input1"
      ? (num1 = parseInt(e.target.value))
      : (num2 = parseInt(e.target.value));
  });
});

document
  .querySelectorAll("body > main > div > div.operators > button")
  .forEach((e) =>
    e.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.textContent == "Clear") {
        operator = null;
        num1 = null;
        num2 = null;
        inputs[0].value = "";
        inputs[1].value = "";
        resultField.textContent = "Result..";
      } else if (e.target.textContent == "=") {
        Calculator(num1, num2, operator);
      } else {
        operator = e.target.textContent;
      }
    })
  );

function Calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      resultField.textContent = num1 + num2;
      break;
    case "-":
      resultField.textContent = num1 - num2;
      break;
    case "/":
      resultField.textContent = num1 / num2;
      break;
    case "*":
      resultField.textContent = num1 * num2;
      break;
    case "Modulo":
      resultField.textContent = num1 % num2;
      break;
  }
}
