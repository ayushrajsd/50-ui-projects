const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const blurLoad = () => {
  load += 1;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - 30 * (load / 100)}px)`;
  console.log(load);
};
const int = setInterval(blurLoad, 30);
