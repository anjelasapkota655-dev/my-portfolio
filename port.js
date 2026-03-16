// Smooth scrolling
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
e.preventDefault();
alert("Thank you! Your message has been sent.");
this.reset();
});


// Smooth navigation for menu links

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Button scroll function

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  section.scrollIntoView({
    behavior: "smooth",
  });
}

// Typing Animation

const textArray = ["an IT Student", "a Web Developer", "a Tech Enthusiast"];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < textArray[index].length) {
    typingElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index++;
    if (index >= textArray.length) index = 0;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Dark Mode Toggle

const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("dark-mode-toggle");

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
