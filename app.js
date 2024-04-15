alert("NOTE:\n 1. Enter all the week assignment score. if you have not attend particular week then enter it as 0\n 2. This is an unofficial nptel calculator")

const btn = document.getElementById("btn");
const numberOfWeeks = document.getElementById("weeks");
const inputBox = document.getElementById("inputBox");
const label = document.getElementById("label");
const totalBtn = document.getElementById("totalBtn");
const topContainer = document.getElementById("top-container");
const resultBox = document.getElementById("resultBox");
const resetDiv = document.getElementById("resetDiv");
const footer = document.getElementById("footer")

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
  footer.style.marginTop="200px"

  inputBox.append(calculateBtn);

 calculateBtn.addEventListener("click", (e) => {
    if(val==4){
        const week1 = document.getElementById("week1")
        const week2 = document.getElementById("week2")
        const week3 = document.getElementById("week3")
        const week4 = document.getElementById("week4")

        const week1value = parseInt(week1.value)
        const week2value = parseInt(week2.value)
        const week3value = parseInt(week3.value)
        const week4value = parseInt(week4.value)


        calculatefun1(week1value,week2value,week3value,week4value)
    }

    if(val==8){
        const week1 = document.getElementById("week1")
        const week2 = document.getElementById("week2")
        const week3 = document.getElementById("week3")
        const week4 = document.getElementById("week4")
        const week5 = document.getElementById("week5")
        const week6 = document.getElementById("week6")
        const week7 = document.getElementById("week7")
        const week8 = document.getElementById("week8")

        const week1value = parseInt(week1.value)
        const week2value = parseInt(week2.value)
        const week3value = parseInt(week3.value)
        const week4value = parseInt(week4.value)
        const week5value = parseInt(week5.value)
        const week6value = parseInt(week6.value)
        const week7value = parseInt(week7.value)
        const week8value = parseInt(week8.value)

        calculatefun2(week1value,week2value,week3value,week4value,week5value,week6value,week7value,week8value)
    }

    if(val==12){
        const week1 = document.getElementById("week1")
        const week2 = document.getElementById("week2")
        const week3 = document.getElementById("week3")
        const week4 = document.getElementById("week4")
        const week5 = document.getElementById("week5")
        const week6 = document.getElementById("week6")
        const week7 = document.getElementById("week7")
        const week8 = document.getElementById("week8")
        const week9 = document.getElementById("week9")
        const week10 = document.getElementById("week10")
        const week11 = document.getElementById("week11")
        const week12 = document.getElementById("week12")

        const week1value = parseInt(week1.value)
        const week2value = parseInt(week2.value)
        const week3value = parseInt(week3.value)
        const week4value = parseInt(week4.value)
        const week5value = parseInt(week5.value)
        const week6value = parseInt(week6.value)
        const week7value = parseInt(week7.value)
        const week8value = parseInt(week8.value)
        const week9value = parseInt(week9.value)
        const week10value = parseInt(week10.value)
        const week11value = parseInt(week11.value)
        const week12value = parseInt(week12.value)
        calculatefun3(week1value,week2value,week3value,week4value,week5value,week6value,week7value,week8value,week9value,week10value,week11value,week12value)
    }
  });

}
function calculatefun1(week1value,week2value,week3value,week4value){
    var week4list = [week1value,week2value,week3value,week4value]
    var sorted4week = week4list.sort(compareNumbers).reverse()
    var bestofthree = ((sorted4week[0]+sorted4week[1]+sorted4week[2])/3)*0.25
    if(bestofthree>=10){
      resultDiv(bestofthree)
    }
    else{
      resultDiv(bestofthree)
    }
} 
function calculatefun2(week1value,week2value,week3value,week4value,week5value,week6value,week7value,week8value){
    var week8list = [week1value,week2value,week3value,week4value,week5value,week6value,week7value,week8value]
    var sorted8week = week8list.sort(compareNumbers).reverse()
    var bestofsix = ((sorted8week[0]+sorted8week[1]+sorted8week[2]+sorted8week[3]+sorted8week[4]+sorted8week[5])/6)*0.25
    resultDiv(bestofsix)
}
function calculatefun3(week1value,week2value,week3value,week4value,week5value,week6value,week7value,week8value,week9value,week10value,week11value,week12value){
  var week12list = [week1value,week2value,week3value,week4value,week5value,week6value,week7value,week8value]
  var sorted12week = week12list.sort(compareNumbers).reverse()
  var bestofeight = ((sorted12week[0]+sorted12week[1]+sorted12week[2]+sorted12week[3]+sorted12week[4]+sorted12week[5]+sorted12week[6]+sorted12week[7])/8)*0.25
  resultDiv(bestofeight)
}

function compareNumbers(a, b) {
    return a - b;
  }

function resultDiv(inpvalue){
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const btn = document.createElement("button")
    btn.textContent= "Reset"
    btn.classList.add("resetBtn")
    h1.textContent = "Your result is"
    h2.textContent = inpvalue.toFixed(2)
    if(h2.textContent!=="NaN"){
    if(inpvalue>=10){
      resultBox.append(h1)
      resultBox.append(h2)
      resultBox.classList.add("resultBoxStyle")
    }else{
      resultBox.append(h1)
      resultBox.append(h2)
      resultBox.classList.add("resultBoxStyle")
      resultBox.style.backgroundColor="rgb(255, 75, 75)"
    }
  }else{
    h1.remove()
    h2.textContent="Please Enter all the assignment score"
    resultBox.append(h2)
    resultBox.classList.add("resultBoxStyle")
    resultBox.style.backgroundColor="rgb(255, 75, 75)"
  }

    resetDiv.append(btn)
    inputBox.remove()

    btn.addEventListener("click", function() {
      window.location.href = "/";
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const weekValue = numberOfWeeks.value;
  textBox(weekValue);
});