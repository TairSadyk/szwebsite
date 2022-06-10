"use strict";
const editorialsSection = document.querySelector(".editorials");
const collectionsSection = document.querySelector(".collections");
const sections = document.querySelectorAll("section");

const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const allImgs = document.querySelectorAll(".portfolio-image");

navList.addEventListener("click", function (e) {
  const link = e.target.closest(".nav__link");
  if (!link || link.textContent === "contact") return;
  e.preventDefault();
  [...navLinks].forEach((link) => link.classList.remove("active"));
  !link.classList.contains("active") && link.classList.add("active");
  [...sections].forEach(
    (sec) => !sec.classList.contains("hidden") && sec.classList.add("hidden")
  );
  const section = document.querySelector(`.${link.textContent}`);
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();

  section1.scrollIntoView({ behavior: "smooth" });
});

// const imageReveal = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("portfolio-image--hidden");
//   observer.unobserve(entry.target);
// };
// const sectionObserver = new IntersectionObserver(imageReveal, {
//   root: null,
//   threshold: 0.15,
// });
// allImgs.forEach((img) => {
//   sectionObserver.observe(img);
//   img.classList.add("portfolio-image--hidden");
// });
