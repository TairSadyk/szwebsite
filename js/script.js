"strict";
editorialsSection = document.querySelector(".editorials");
collectionsSection = document.querySelector(".collections");
sections = document.querySelectorAll("section");

navLinks = document.querySelector(".nav__list");

navLinks.addEventListener("click", function (e) {
  const link = e.target.closest(".nav__link");
  if (!link || link.textContent === "contact") return;
  e.preventDefault();
  console.log(link.textContent);
  [...sections].forEach((sec) => {
    !sec.classList.contains("hidden") && sec.classList.add("hidden");
  });
  document.querySelector(`.${link.textContent}`).classList.remove("hidden");
});
