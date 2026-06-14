const consultantButton = document.querySelector(".consultant-button");
const consultantBox = document.querySelector(".consultant-box");

consultantButton.addEventListener("click", () => {
  consultantBox.classList.toggle("active");
});