// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
  offset: 100,
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
  // Hero Content Animation
  gsap.from('.hero-content', {
    duration: 1.5,
    x: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
  });

  gsap.from('.hero-content h1', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 1
  });

  gsap.from('.hero-content p', {
    duration: 1,
    y: 20,
    opacity: 0,
    ease: 'power2.out',
    delay: 1.3
  });

  gsap.from('.hero-content button', {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: 'elastic.out(1, 0.3)',
    delay: 1.6
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Parallax Effect for Hero
  window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    const scrollValue = window.scrollY;
    if (heroImage) {
      heroImage.style.transform = `translateY(${scrollValue * 0.4}px)`;
    }
  });

  // Interactive Feature Cards
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.3 });
    });
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function showAlert() {
  Swal.fire({
    title: 'Success!',
    text: 'Thank you for your interest! Our team will contact you soon.',
    icon: 'success',
    confirmButtonColor: '#0f67b1'
  });
}
