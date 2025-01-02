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

