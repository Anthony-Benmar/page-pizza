/**
 * Pizza Amici Clone — main.js
 * Powered by GSAP, ScrollTrigger, and Swiper.js
 */

document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP Plugins
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    gsap.from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.4,
      ease: "power3.out"
    });

    gsap.from(".hero-buttons", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });

    // Staggered reveal for cards
    gsap.utils.toArray(".card-shape").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }

  // Initialize Swiper for reviews if present
  if (typeof Swiper !== "undefined") {
    const reviewSwiper = new Swiper(".reviews-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  }

  console.log("Pizza Amici Clone initialized successfully.");
});
