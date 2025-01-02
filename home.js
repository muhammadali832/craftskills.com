// JavaScript to toggle the menu on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Listen for the click event on the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the nav list and the menu toggle button
  navList.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Sticky Navigation Bar on Scroll
const navBar = document.querySelector('.manu-bar'); // Your menu bar

// Check when to apply sticky class on scroll
window.onscroll = () => {
  if (window.scrollY > 100) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
};

// Smooth Scroll for internal links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust for header height
      behavior: 'smooth',
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form-container form");
  const submitBtn = document.querySelector(".submit-btn");
  const responseMessage = document.getElementById("response-message");

  // Form field elements
  const nameField = form.querySelector('input[name="name"]');
  const emailField = form.querySelector('input[name="email"]');
  const messageField = form.querySelector('textarea[name="message"]');

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Form validation function
  function validateForm() {
      let isValid = true;

      // Clear previous error messages
      nameField.classList.remove('error');
      emailField.classList.remove('error');
      messageField.classList.remove('error');

      // Validate name
      if (nameField.value.trim() === "") {
          nameField.classList.add('error');
          isValid = false;
      }

      // Validate email
      if (!emailRegex.test(emailField.value.trim())) {
          emailField.classList.add('error');
          isValid = false;
      }

      // Validate message
      if (messageField.value.trim() === "") {
          messageField.classList.add('error');
          isValid = false;
      }

      return isValid;
  }

  // Show response message after form submission
  function showResponseMessage(message, isSuccess) {
      responseMessage.textContent = message;
      responseMessage.style.display = "block";
      responseMessage.style.color = isSuccess ? "green" : "red";

      // Hide the message after 3 seconds
      setTimeout(() => {
          responseMessage.style.display = "none";
      }, 3000);
  }

  // Handle form submission
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      // Validate form fields
      if (validateForm()) {
          // Simulate form submission (can be replaced with actual AJAX)
          setTimeout(() => {
              showResponseMessage("Your message has been sent successfully!", true);
              form.reset(); // Reset form fields after submission
              submitBtn.disabled = false;
              submitBtn.textContent = "Submit"; // Reset button text
          }, 1000); // Simulate a server response delay
      } else {
          showResponseMessage("Please fill in all fields correctly.", false);
      }
  });

  // Button loading state on click
  submitBtn.addEventListener("click", function() {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending..."; // Change button text during submission
  });
});

document.querySelector('.signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for signing up!');
});



