let currentQuestion = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

// Load the first question
loadQuestion();

let selectedElement = null;
let myElements = document.querySelectorAll("input[type='radio']");
// let myElements = document.getElementsByClassName("radio");

myElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log(event);
    if (selectedElement) {
      selectedElement.nextElementSibling.style.cssText = "background: initial";
    }
    selectedElement = event.target;
    selectedElement.nextElementSibling.style.cssText = "background: yellow";
  });
  console.log(element);
});

/* 
Logics to be implemented
1. User shouldn't be able to modify the selected option after pressing submit
2. When the option is selected the label style should be changed
3. Make sure that only one selcted option should be highlighted not others
*/

// 2. Make sure that only one selcted option should be highlighted not others

var que = document.getElementById("total");
que.innerHTML = currentQuestion + 1 + "/" + questions.length;
let seconds = 0;
let minutes = 0;
let timerId;

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      // hours++;
    }
  }
  const formattedTime = formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("timer").innerText = formattedTime;
}

function formatTime(time) {
  return (time < 10 ? "0" : "") + time;
}

timerId = setInterval(updateTimer, 1000);

function loadQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "option";
    inputElement.value = option;
    inputElement.id = "option" + index;

    const label = document.createElement("label");
    label.textContent = option;
    label.setAttribute("for", "option" + index);

    optionsElement.appendChild(inputElement);
    optionsElement.appendChild(label);
    optionsElement.appendChild(document.createElement("br"));
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option.");
    return;
  }
  const answer = selectedOption.value;
  if (answer === questions[currentQuestion].answer) {
    resultElement.textContent = "Correct! " + questions[currentQuestion].answer;
  } else {
    resultElement.textContent =
      "Incorrect! The correct answer is " + questions[currentQuestion].answer;
  }
  document.getElementById("btn2").style.display = "block";
}

var timerElement = document.getElementById("timer");

function next() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    resultElement.innerHTML = "";
    document.getElementById("btn2").style.display = "none";
    que.innerHTML = currentQuestion + 1 + "/" + questions.length;
  } else {
    var print = document.getElementById("btn2");
    print.textContent = "Print";
    print.addEventListener("click", () => {
      window.print();
    });
    document.getElementById("btn1").style.display = "none";
    optionsElement.textContent = "";
    questionElement.textContent = "Quiz completed :)";
    resultElement.textContent = "";
    document.getElementById("time").textContent = "Total Time: ";
    document.getElementById("que").textContent = "Total Question: ";
    clearInterval(timerId);
  }
}

