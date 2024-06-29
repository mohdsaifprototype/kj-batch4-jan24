function loading() {
  setTimeout(() => {
    var a = document.querySelector(".progress");
    a.style.cssText = `width:22%`;
  }, 1000);
  setTimeout(() => {
    var a = document.querySelector(".progress");
    a.style.cssText = `width:45%`;
  }, 2000);
  setTimeout(() => {
    var a = document.querySelector(".progress");
    a.style.cssText = `width:85%`;
  }, 4600);
  setTimeout(() => {
    var a = document.querySelector(".progress");
    a.style.cssText = `width:98%`;
  }, 5200);
  setTimeout(() => {
    var a = document.querySelector(".progress");
    a.style.cssText = `width:100%`;
  }, 8000);

  setTimeout(() => {
    var btn = document.querySelector(".button-pushable");
    var head = document.getElementById("quiz");
    head.style.cssText = `display:block !important`;
    btn.style.cssText = `display:block !important`;
    var loader = document.querySelector(".progress-container");
    loader.style.cssText = `display:none`;
  }, 9000);

  const a = document.querySelector(".number");
  let count = 0;

  const intervalId = setInterval(() => {
    if (count === 100) {
      clearInterval(intervalId);
    } else {
      count += 1;
      a.innerHTML = count + "%";
    }
  }, 100);
}

loading();

//   const progressbar = document.querySelector(".progress");

// const changeProgress = (progress) => {
//   progressbar.style.width = `${progress}%`;
// };

// /* change progress after 1 second (only for showcase) */
// setTimeout(() => changeProgress(22), 1000);
// setTimeout(() => changeProgress(45), 2000);
// setTimeout(() => changeProgress(85), 4600);
// setTimeout(() => changeProgress(98), 5266);
// setTimeout(() => changeProgress(100), 8000);
