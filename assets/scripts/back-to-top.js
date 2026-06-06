const BACK_TO_TOP_VISIBLE_OFFSET = 420;

const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.type = "button";
backToTopButton.setAttribute("aria-label", "Back to top");
document.body.append(backToTopButton);

function updateBackToTopVisibility() {
  backToTopButton.classList.toggle("is-visible", window.scrollY > BACK_TO_TOP_VISIBLE_OFFSET);
}

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
updateBackToTopVisibility();
