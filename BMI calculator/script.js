let bmi;
let button = document.querySelector("button");
let bmiValue = document.querySelector(".bmi");
let bmiResult = document.querySelector(".result");

button.addEventListener("click", () => {
  let heightInput = document.getElementById("height-input").value;
  let weightInput = document.getElementById("weight-input").value;
  bmi = weightInput / heightInput ** 2;
  bmiValue.innerText = bmi;
  if (bmi < 18.5) {
    bmiResult.innerText = " Sorry! You are Underweight";
  } else if (bmi < 24.9) {
    bmiResult.innerText = " Congrats! You are fully fit.";
  } else if (bmi < 150) {
    bmiResult.innerText = "Sorry! You are overweight";
  }
});
