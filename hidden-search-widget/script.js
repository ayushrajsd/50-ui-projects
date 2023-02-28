const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

search.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
