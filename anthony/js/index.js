const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("responsive");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  hamburger.classList.toggle("toggle");
});

const currentLocation = location.href;

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});





