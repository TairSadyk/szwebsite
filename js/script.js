"use strict";
const sections = document.querySelectorAll("section");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

navList.addEventListener("click", function (e) {
  const link = e.target.closest(".nav__link");
  if (!link || link.textContent === "contact") return;
  e.preventDefault();
  [...navLinks].forEach((link) => link.classList.remove("active"));
  !link.classList.contains("active") && link.classList.add("active");

  [...sections].forEach((sec) => {
    if (!sec.classList.contains("hidden")) {
      sec.classList.add("hidden");
    }
  });
  const section = document.querySelector(`.${link.textContent}`);
  section.classList.remove("hidden");

  document
    .querySelector("body")
    .scrollIntoView({ block: "start", behavior: "smooth" });
});
