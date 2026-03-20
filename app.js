const btn = document.getElementById("btn");
const numberOfWeeks = document.getElementById("weeks");
const inputBox = document.getElementById("inputBox");
const label = document.getElementById("label");
const totalBtn = document.getElementById("totalBtn");
const topContainer = document.getElementById("top-container");
const resultBox = document.getElementById("resultBox");
const resetDiv = document.getElementById("resetDiv");
const footer = document.getElementById("footer");

function textBox(val) {
  const calculateBtn = document.createElement("button");
  inputBox.classList.add("inputBox");
  calculateBtn.textContent = "Calculate";
  calculateBtn.classList.add("calbtn");
  calculateBtn.setAttribute("id", "totalBtn");

  for (let i = 1; i <= val; i++) {
    const textField = document.createElement("input");
    textField.setAttribute("type", "text");
    textField.setAttribute("placeholder", "Enter " + i + " assignment score");
    textField.setAttribute("id", "week" + i);
    inputBox.append(textField);
  }

  btn.remove();
  numberOfWeeks.remove();
  label.remove();
  topContainer.remove();
  footer.style.marginTop = "200px";

  inputBox.append(calculateBtn);

  calculateBtn.addEventListener("click", (e) => {

    if (val == 4) {
      const week1value = parseInt(document.getElementById("week1").value);
      const week2value = parseInt(document.getElementById("week2").value);
      const week3value = parseInt(document.getElementById("week3").value);
      const week4value = parseInt(document.getElementById("week4").value);
      calculatefun1(week1value, week2value, week3value, week4value);
    }

    if (val == 8) {
      const week1value = parseInt(document.getElementById("week1").value);
      const week2value = parseInt(document.getElementById("week2").value);
      const week3value = parseInt(document.getElementById("week3").value);
      const week4value = parseInt(document.getElementById("week4").value);
      const week5value = parseInt(document.getElementById("week5").value);
      const week6value = parseInt(document.getElementById("week6").value);
      const week7value = parseInt(document.getElementById("week7").value);
      const week8value = parseInt(document.getElementById("week8").value);
      calculatefun2(week1value, week2value, week3value, week4value, week5value, week6value, week7value, week8value);
    }

    if (val == 12) {
      const week1value  = parseInt(document.getElementById("week1").value);
      const week2value  = parseInt(document.getElementById("week2").value);
      const week3value  = parseInt(document.getElementById("week3").value);
      const week4value  = parseInt(document.getElementById("week4").value);
      const week5value  = parseInt(document.getElementById("week5").value);
      const week6value  = parseInt(document.getElementById("week6").value);
      const week7value  = parseInt(document.getElementById("week7").value);
      const week8value  = parseInt(document.getElementById("week8").value);
      const week9value  = parseInt(document.getElementById("week9").value);
      const week10value = parseInt(document.getElementById("week10").value);
      const week11value = parseInt(document.getElementById("week11").value);
      const week12value = parseInt(document.getElementById("week12").value);
      calculatefun3(week1value, week2value, week3value, week4value, week5value, week6value, week7value, week8value, week9value, week10value, week11value, week12value);
    }
  });
}

function validateInputValue(value) {
  if (isNaN(value)) return false;
  if (value < 0 || value > 100) return false;
  return true;
}

function calculatefun1(week1value, week2value, week3value, week4value) {
  if (!validateInputValue(week1value) || !validateInputValue(week2value) || !validateInputValue(week3value) || !validateInputValue(week4value)) {
    resultDiv(NaN); return;
  }
  var week4list = [week1value, week2value, week3value, week4value];
  var sorted4week = week4list.sort(compareNumbers).reverse();
  var bestofthree = ((sorted4week[0] + sorted4week[1] + sorted4week[2]) / 3) * 0.25;
  resultDiv(bestofthree);
}

function calculatefun2(week1value, week2value, week3value, week4value, week5value, week6value, week7value, week8value) {
  if (!validateInputValue(week1value) || !validateInputValue(week2value) || !validateInputValue(week3value) || !validateInputValue(week4value) || !validateInputValue(week5value) || !validateInputValue(week6value) || !validateInputValue(week7value) || !validateInputValue(week8value)) {
    resultDiv(NaN); return;
  }
  var week8list = [week1value, week2value, week3value, week4value, week5value, week6value, week7value, week8value];
  var sorted8week = week8list.sort(compareNumbers).reverse();
  var bestofsix = ((sorted8week[0] + sorted8week[1] + sorted8week[2] + sorted8week[3] + sorted8week[4] + sorted8week[5]) / 6) * 0.25;
  resultDiv(bestofsix);
}

function calculatefun3(week1value, week2value, week3value, week4value, week5value, week6value, week7value, week8value, week9value, week10value, week11value, week12value) {
  if (!validateInputValue(week1value) || !validateInputValue(week2value) || !validateInputValue(week3value) || !validateInputValue(week4value) || !validateInputValue(week5value) || !validateInputValue(week6value) || !validateInputValue(week7value) || !validateInputValue(week8value) || !validateInputValue(week9value) || !validateInputValue(week10value) || !validateInputValue(week11value) || !validateInputValue(week12value)) {
    resultDiv(NaN); return;
  }
  var week12list = [week1value, week2value, week3value, week4value, week5value, week6value, week7value, week8value, week9value, week10value, week11value, week12value];
  var sorted12week = week12list.sort(compareNumbers).reverse();
  var bestofeight = ((sorted12week[0] + sorted12week[1] + sorted12week[2] + sorted12week[3] + sorted12week[4] + sorted12week[5] + sorted12week[6] + sorted12week[7]) / 8) * 0.25;
  resultDiv(bestofeight);
}

function compareNumbers(a, b) {
  return a - b;
}

function resultDiv(inpvalue) {
  const h1     = document.createElement("h1");
  const h2     = document.createElement("h2");
  const h2one   = document.createElement("h2");
  const h2two   = document.createElement("h2");
  const h2three = document.createElement("h2");
  const btn = document.createElement("button");

  btn.textContent = "Reset";
  btn.classList.add("resetBtn");
  h1.textContent = "Your result is";
  h2.textContent = inpvalue.toFixed(2);

  if (h2.textContent !== "NaN") {
    resultBox.append(h1);
    resultBox.append(h2);
    resultBox.classList.add("resultBoxStyle");

    if (inpvalue >= 10) {
      resultBox.classList.add("result-pass");
    } else {
      resultBox.classList.add("result-fail");
    }

  } else {
    h1.remove();
    h2.textContent = "Error:";
    h2one.textContent  = "1. You might not have entered all the assignment scores";
    h2two.textContent  = "2. You might have entered negative values";
    h2three.textContent = "3. You might have entered values greater than 100";
    resultBox.append(h2);
    resultBox.append(h2one);
    resultBox.append(h2two);
    resultBox.append(h2three);
    resultBox.classList.add("resultBoxStyle");
    resultBox.classList.add("result-fail");
  }

  resetDiv.append(btn);
  inputBox.remove();

  btn.addEventListener("click", function () {
    window.location.href = "/";
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const weekValue = numberOfWeeks.value;
  textBox(weekValue);
});
