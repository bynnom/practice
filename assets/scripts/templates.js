const releaseConfirmationCopy = document.querySelector("#releaseConfirmationCopy");
const releaseConfirmationTemplate = document.querySelector("#release-confirmation-template textarea");

releaseConfirmationCopy?.addEventListener("click", async () => {
  const text = releaseConfirmationTemplate?.value.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    releaseConfirmationCopy.textContent = "Copied";
    setTimeout(() => {
      releaseConfirmationCopy.textContent = "Copy";
    }, 1200);
  } catch {
    releaseConfirmationCopy.textContent = "Copy failed";
    setTimeout(() => {
      releaseConfirmationCopy.textContent = "Copy";
    }, 1200);
  }
});
