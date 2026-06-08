console.log("Bienvenue sur le site UNILUK");

const animatedItems = document.querySelectorAll(".card, .panel, .person, .callout");

animatedItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(28px)";
  item.style.transition = "opacity 0.55s ease, transform 0.55s ease";
});

const revealItem = (item) => {
  item.style.opacity = "1";
  item.style.transform = "translateY(0)";
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealItem(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedItems.forEach((item) => observer.observe(item));
} else {
  animatedItems.forEach(revealItem);
}

const backToTopButton = document.createElement("button");
backToTopButton.type = "button";
backToTopButton.className = "back-to-top";
backToTopButton.setAttribute("aria-label", "Retour en haut");
backToTopButton.textContent = "↑";
document.body.appendChild(backToTopButton);

const toggleBackToTop = () => {
  backToTopButton.style.display = window.scrollY > 300 ? "inline-flex" : "none";
};




window.addEventListener("scroll", toggleBackToTop);
toggleBackToTop();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
