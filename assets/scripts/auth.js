const STUDY_HUB_AUTH_KEY = "bynnom-studyhub-auth";
const STUDY_HUB_USERNAME = "thieulvy";
const STUDY_HUB_PASSWORD = "150601";

function hasStudyHubAccess() {
  return sessionStorage.getItem(STUDY_HUB_AUTH_KEY) === "granted";
}

function grantStudyHubAccess() {
  sessionStorage.setItem(STUDY_HUB_AUTH_KEY, "granted");
}

function guardStudyHubPage() {
  if (!document.body.dataset.protectedPage) return;
  if (hasStudyHubAccess()) return;
  window.location.replace("../");
}

function setupStudyHubLogin() {
  const accessLink = document.querySelector("#studyHubAccessLink");
  const dialog = document.querySelector("#studyHubLoginDialog");
  const form = document.querySelector("#studyHubLoginForm");
  const cancelButton = document.querySelector("#studyHubLoginCancel");
  const usernameInput = document.querySelector("#studyHubUsername");
  const passwordInput = document.querySelector("#studyHubPassword");
  const errorText = document.querySelector("#studyHubLoginError");

  if (!accessLink || !dialog || !form || !cancelButton || !usernameInput || !passwordInput || !errorText) return;

  accessLink.addEventListener("click", (event) => {
    if (hasStudyHubAccess()) return;
    event.preventDefault();
    form.reset();
    errorText.textContent = "";
    dialog.showModal();
    dialog.focus({ preventScroll: true });
  });

  cancelButton.addEventListener("click", () => {
    document.activeElement?.blur();
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      document.activeElement?.blur();
      dialog.close();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === STUDY_HUB_USERNAME && password === STUDY_HUB_PASSWORD) {
      grantStudyHubAccess();
      window.location.href = accessLink.href;
      return;
    }

    errorText.textContent = "Incorrect username or password.";
    passwordInput.value = "";
    passwordInput.focus();
  });
}

guardStudyHubPage();
setupStudyHubLogin();
