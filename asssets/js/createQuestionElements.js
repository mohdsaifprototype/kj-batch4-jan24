let oldContainer = document.querySelector(".container");
let container = document.createElement("div");
container.classList.add("container");
container.innerHTML = `
<a href="/index.html">
  <h1 class="p-5 text-center">Quiz Game</h1>
</a>
<div class="card m-5">
  <div class="card-body">
    <div class="row">
      <div class="col-12 col-md-6">
        <h2 class="my-4 mx-5">
          <span id="time">Timer: </span><span id="timer">00:00</span>
        </h2>
      </div>
      <div class="col-12 col-md-6">
        <h2 class="my-4 mx-5">
          <span id="que">Questions:</span> <span id="total"></span>
        </h2>
      </div>
      <div class="col-12">
        <div id="question" class="text-center my-4">Question</div>
      </div>
      <div class="col-12 col-md-6 p-5">
        <form class="options" id="options" action="#"></form>
      </div>
      <div class="col-12 col-md-6 p-5">
        <div id="result"></div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5 mx-5">
          <button type="button" onclick="checkAnswer()" class="button-pushable button-sm mt-3" role="button"
            id="btn1">
            <span class="button-shadow"></span>
            <span class="button-edge"></span>
            <span class="button-front text"> Submit </span>
          </button>
        </div>
        <div class="col-12 col-md-6">
          <button type="button" onclick="next()" class="button-pushable button-sm mt-3" role="button" id="btn2">
            <span class="button-shadow"></span>
            <span class="button-edge"></span>
            <span class="button-front text"> next </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

oldContainer.replaceWith(container);

function makeElement(
  Elem = "div",
  Class,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(Elem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = Class;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}
