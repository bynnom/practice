const THEME_STORAGE_KEY = "bynnom-theme";
const DEFAULT_THEME = "dark";

function getStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : DEFAULT_THEME;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    const isLight = theme === "light";
    button.setAttribute("aria-pressed", String(isLight));
    button.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    button.querySelector(".theme-toggle-label").textContent = isLight ? "Light" : "Dark";
  });
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
}

applyTheme(getStoredTheme());

document.querySelectorAll(".theme-toggle").forEach((button) => {
  button.addEventListener("click", toggleTheme);
});
