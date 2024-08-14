const form = document.getElementById("form-col");
const modal = new bootstrap.Modal(document.getElementById("modalDiv"));
emailjs.init("SmiU6zjRwNeD_oofG");
// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    emailjs.sendForm("service_1557ajf", "template_wd419g9", form).then(
      function (response) {
        console.log("Success:", response);
        modal.show(); // Show the modal
      },
      function (error) {
        console.log("Error:", error);
        alert("Error sending email.");
      }
    );
  } else {
    form.reportValidity(); // Show validation messages
  }
});

// Reset form when modal is closed
document
  .getElementById("modalDiv")
  .addEventListener("hidden.bs.modal", function () {
    form.reset(); // Reset form fields
  });
