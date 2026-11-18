const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((element) => {
    element.textContent = "";
  });
  successMessage.textContent = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const course = document.getElementById("course").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (fullName.length < 2) {
    showError("fullNameError", "Please enter your name (at least 2 characters). ");
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  if (!/^\d{10}$/.test(mobile)) {
    showError("mobileError", "Enter a valid 10-digit mobile number.");
    isValid = false;
  }

  if (!course) {
    showError("courseError", "Please choose a course.");
    isValid = false;
  }

  if (!gender) {
    showError("genderError", "Please select an option.");
    isValid = false;
  }

  if (password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters.");
    isValid = false;
  }

  if (confirmPassword !== password || confirmPassword === "") {
    showError("confirmPasswordError", "The passwords do not match.");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = `Registration successful, ${fullName}! This demo does not send or save your details.`;
    form.reset();
  }
});
