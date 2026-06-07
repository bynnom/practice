const textGeneratorForm = document.querySelector("#textGeneratorForm");
const paragraphCount = document.querySelector("#paragraphCount");
const sentencesPerParagraph = document.querySelector("#sentencesPerParagraph");
const wordsPerSentence = document.querySelector("#wordsPerSentence");
const textGeneratorOutput = document.querySelector("#textGeneratorOutput");
const textGeneratorCopy = document.querySelector("#textGeneratorCopy");
const toolOptions = document.querySelectorAll("[data-tool-target]");
const toolPanels = document.querySelectorAll(".tool-panel");
const originalText = document.querySelector("#originalText");
const changedText = document.querySelector("#changedText");

const WORDS = [
  "consectetur",
  "adipiscing",
  "elit",
  "integer",
  "vehicula",
  "magna",
  "fermentum",
  "pulvinar",
  "dapibus",
  "facilisis",
  "suspendisse",
  "curabitur",
  "molestie",
  "vestibulum",
  "aliquam",
  "porttitor",
  "rhoncus",
  "mauris",
  "vulputate",
  "ultricies",
  "pretium",
  "dictum",
  "tempor",
  "sodales",
  "nibh",
  "massa",
  "ornare",
  "lectus",
  "gravida",
  "venenatis",
];

const SAMPLE_ORIGINAL_TEXT = `async function verifyUserProfile(page: Page) {
  await page.goto('/profile');

  await page.locator('[data-testid="full-name"]').fill('Nguyen Van A');
  await page.locator('[data-testid="phone-number"]').fill('0909123456');
  await page.locator('[data-testid="province"]').selectOption('HCM');
  await page.locator('[data-testid="submit-button"]').click();

  await expect(page.locator('[data-testid="success-message"]'))
    .toHaveText('Application submitted successfully');
}`;

const SAMPLE_CHANGED_TEXT = `async function verifyUserProfile(page: Page) {
  await page.goto('/registration');

  await page.locator('[data-testid="full-name"]').fill('Nguyen Van A');
  await page.locator('[data-testid="phone-number"]').fill('0909123456');
  await page.locator('[data-testid="province"]').selectOption('HN');
  await page.locator('[data-testid="submit-button"]').click();

  await expect(page.locator('[data-testid="success-message"]'))
    .toHaveText('Application submit successfully');
}`;

let originalDiffText = SAMPLE_ORIGINAL_TEXT;
let changedDiffText = SAMPLE_CHANGED_TEXT;

function clampNumber(value, min, max) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return min;
  return Math.min(Math.max(number, min), max);
}

function randomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function selectTool(toolId) {
  toolOptions.forEach((option) => {
    const isActive = option.dataset.toolTarget === toolId;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-current", String(isActive));
  });

  toolPanels.forEach((panel) => {
    panel.hidden = panel.id !== toolId;
  });
}

function buildSentence(wordCount) {
  const words = [];

  while (words.length < wordCount) {
    words.push(randomWord());
  }

  const sentence = words.slice(0, wordCount).join(" ");
  return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}.`;
}

function buildParagraph(sentenceCount, wordCount) {
  const sentences = [];

  for (let sentenceIndex = 0; sentenceIndex < sentenceCount; sentenceIndex += 1) {
    sentences.push(buildSentence(wordCount));
  }

  return sentences.join(" ");
}

function generateText() {
  const paragraphs = clampNumber(paragraphCount.value, 1, 20);
  const sentences = clampNumber(sentencesPerParagraph.value, 1, 12);
  const words = clampNumber(wordsPerSentence.value, 4, 24);

  paragraphCount.value = paragraphs;
  sentencesPerParagraph.value = sentences;
  wordsPerSentence.value = words;

  const generatedParagraphs = Array.from({ length: paragraphs }, () => buildParagraph(sentences, words));
  textGeneratorOutput.value = generatedParagraphs.join("\n\n");
}

textGeneratorForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  generateText();
});

[paragraphCount, sentencesPerParagraph, wordsPerSentence].forEach((control) => {
  control?.addEventListener("change", generateText);
});

textGeneratorCopy?.addEventListener("click", async () => {
  const text = textGeneratorOutput.value.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    textGeneratorCopy.textContent = "Copied";
    setTimeout(() => {
      textGeneratorCopy.textContent = "Copy";
    }, 1200);
  } catch {
    textGeneratorCopy.textContent = "Copy failed";
    setTimeout(() => {
      textGeneratorCopy.textContent = "Copy";
    }, 1200);
  }
});

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getEditorText(editor) {
  const renderedLines = editor.querySelectorAll(".diff-line");
  if (renderedLines.length > 0) {
    return Array.from(renderedLines)
      .map((line) => (line.textContent === "\u00a0" ? "" : line.textContent))
      .join("\n");
  }

  return editor.innerText.replace(/\n$/, "");
}

function moveCaretToEnd(element) {
  const range = document.createRange();
  const selection = window.getSelection();

  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function buildDiffRows(originalLines, changedLines) {
  const rowCount = originalLines.length + 1;
  const columnCount = changedLines.length + 1;
  const table = Array.from({ length: rowCount }, () => Array(columnCount).fill(0));

  for (let row = originalLines.length - 1; row >= 0; row -= 1) {
    for (let column = changedLines.length - 1; column >= 0; column -= 1) {
      if (originalLines[row] === changedLines[column]) {
        table[row][column] = table[row + 1][column + 1] + 1;
      } else {
        table[row][column] = Math.max(table[row + 1][column], table[row][column + 1]);
      }
    }
  }

  const diffRows = [];
  let row = 0;
  let column = 0;

  while (row < originalLines.length && column < changedLines.length) {
    if (originalLines[row] === changedLines[column]) {
      diffRows.push({ type: "unchanged", marker: " ", text: originalLines[row] });
      row += 1;
      column += 1;
    } else if (table[row + 1][column] >= table[row][column + 1]) {
      diffRows.push({ type: "removed", marker: "-", text: originalLines[row] });
      row += 1;
    } else {
      diffRows.push({ type: "added", marker: "+", text: changedLines[column] });
      column += 1;
    }
  }

  while (row < originalLines.length) {
    diffRows.push({ type: "removed", marker: "-", text: originalLines[row] });
    row += 1;
  }

  while (column < changedLines.length) {
    diffRows.push({ type: "added", marker: "+", text: changedLines[column] });
    column += 1;
  }

  return diffRows;
}

function renderTextDiff() {
  const activeEditor = document.activeElement;
  const originalValue = originalDiffText;
  const changedValue = changedDiffText;

  if (!originalValue && !changedValue) {
    originalText.innerHTML = "";
    changedText.innerHTML = "";
    return;
  }

  const originalLines = originalValue ? originalValue.split("\n") : [];
  const changedLines = changedValue ? changedValue.split("\n") : [];
  const diffRows = buildDiffRows(originalLines, changedLines);
  const originalRows = diffRows.filter((row) => row.type !== "added");
  const changedRows = diffRows.filter((row) => row.type !== "removed");

  originalText.innerHTML = originalRows
    .map((row) => `<span class="diff-line ${row.type}">${escapeHtml(row.text) || "&nbsp;"}</span>`)
    .join("");
  changedText.innerHTML = changedRows
    .map((row) => `<span class="diff-line ${row.type}">${escapeHtml(row.text) || "&nbsp;"}</span>`)
    .join("");

  if (activeEditor === originalText || activeEditor === changedText) {
    moveCaretToEnd(activeEditor);
  }
}

let isSyncingDiffScroll = false;

toolOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectTool(option.dataset.toolTarget);
  });
});

[originalText, changedText].forEach((textarea) => {
  textarea?.addEventListener("input", () => {
    if (textarea === originalText) {
      originalDiffText = getEditorText(originalText);
    } else {
      changedDiffText = getEditorText(changedText);
    }

    renderTextDiff();
  });
  textarea?.addEventListener("paste", (event) => {
    event.preventDefault();
    document.execCommand("insertText", false, event.clipboardData.getData("text/plain"));
  });
  textarea?.addEventListener("copy", (event) => {
    event.clipboardData.setData("text/plain", getEditorText(textarea));
    event.preventDefault();
  });
});

originalText?.addEventListener("scroll", () => {
  if (isSyncingDiffScroll) return;
  isSyncingDiffScroll = true;
  changedText.scrollTop = originalText.scrollTop;
  changedText.scrollLeft = originalText.scrollLeft;
  requestAnimationFrame(() => {
    isSyncingDiffScroll = false;
  });
});

changedText?.addEventListener("scroll", () => {
  if (isSyncingDiffScroll) return;
  isSyncingDiffScroll = true;
  originalText.scrollTop = changedText.scrollTop;
  originalText.scrollLeft = changedText.scrollLeft;
  requestAnimationFrame(() => {
    isSyncingDiffScroll = false;
  });
});

generateText();

if (originalText && changedText) {
  renderTextDiff();
}
