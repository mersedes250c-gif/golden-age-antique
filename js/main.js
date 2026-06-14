const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Спасибо! Ваша заявка отправлена.");
    form.reset();
  });
});