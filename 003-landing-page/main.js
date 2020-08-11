// @ts-nocheck

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.style.opacity = 0.8;
  } else {
    navbar.style.opacity = 1;
  }
});
