"use strict";
const editorialsSection = document.querySelector(".editorials");
const collectionsSection = document.querySelector(".collections");
const sections = document.querySelectorAll("section");

const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

navList.addEventListener("click", function (e) {
  const link = e.target.closest(".nav__link");
  if (!link || link.textContent === "contact") return;
  e.preventDefault();
  [...navLinks].forEach((link) => link.classList.remove("active"));
  !link.classList.contains("active") && link.classList.add("active");
  [...sections].forEach(
    (sec) => !sec.classList.contains("hidden") && sec.classList.add("hidden")
  );
  document.querySelector(`.${link.textContent}`).classList.remove("hidden");
});
