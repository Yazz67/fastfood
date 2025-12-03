
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const btnLocation = document.querySelector(".btn-location"); // bouton livraison
const navLinks = document.querySelectorAll(".nav-link"); // tous les liens du menu

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active"); // affiche/masque le menu
  menuToggle.classList.toggle("open"); // anime le burger
  btnLocation.classList.toggle("active"); // active aussi le bouton livraison
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    navbar.classList.remove("active");
    btnLocation.classList.remove("active"); // désactive le bouton livraison
  });
});




const slides = document.querySelectorAll(".home-img img");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// clic sur les points
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.getAttribute("data-index"));
    showSlide(currentIndex);
  });
});

const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
});

// Header
animate.reveal('.nav', { origin: 'top' });

// Section Home
animate.reveal('.home-img', { origin: 'bottom' });
animate.reveal('.home-buttons', { origin: 'bottom' });
animate.reveal('.carousel-dots', { origin: 'bottom', delay: 600 });
animate.reveal('.home .heading .rounded-text', { origin: 'right' });
animate.reveal('.home .heading p', { origin: 'bottom' });
animate.reveal('.home .breadcrumb', { origin: 'left' });


// Section Menu
animate.reveal('.menu .heading', { origin: 'top' });
animate.reveal('.menu-content .rental-box', { interval: 150 });

// Section Contact
animate.reveal('.contact .heading', { origin: 'top' });
animate.reveal('.map-container', { origin: 'left' });
animate.reveal('.contact-info', { origin: 'right' });
animate.reveal('.contact-buttons a', { interval: 100 });

// Section Horaires
animate.reveal('.horaires-container h2', { origin: 'top' });
animate.reveal('.horaire-card', { interval: 120 });

// Footer
animate.reveal('.footer-container', { origin: 'bottom' });
animate.reveal('.footer-bottom', { origin: 'bottom', delay: 500 });
animate.reveal('.footer p', { origin: 'bottom', delay: 500 });





