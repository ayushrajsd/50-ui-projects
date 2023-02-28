const buttonToggle = document.querySelectorAll(".faq-toggle");
buttonToggle.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  })
);
