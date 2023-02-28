const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive += 1;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive -= 1;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

const update = () => {
  circle.forEach((cir, idx) => {
    if (idx < currentActive) {
      cir.classList.add("active");
    } else {
      cir.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";
  console.log((actives.length / circle.length) * 100 + "%");
  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
