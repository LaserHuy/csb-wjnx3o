/* script.js */
const message =
  "Thank you for submitting your request. The Kingdom will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
