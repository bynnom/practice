const STORAGE_KEY = "qc-study-hub-items-v1";
const STATE_KEY = "qc-study-hub-state-v1";
const DELETED_SEEDS_KEY = "qc-study-hub-deleted-seeds-v1";

const els = {
  categoryNav: document.querySelector("#categoryNav"),
  pageTitle: document.querySelector("#pageTitle"),
  searchInput: document.querySelector("#searchInput"),
  confidenceFilter: document.querySelector("#confidenceFilter"),
  notesView: document.querySelector("#notesView"),
  flashcardView: document.querySelector("#flashcardView"),
  quizView: document.querySelector("#quizView"),
  editorView: document.querySelector("#editorView"),
  totalCards: document.querySelector("#totalCards"),
  doneCards: document.querySelector("#doneCards"),
  reviewCards: document.querySelector("#reviewCards"),
  modeButtons: document.querySelectorAll(".mode-btn"),
  flashCategory: document.querySelector("#flashCategory"),
  flashCounter: document.querySelector("#flashCounter"),
  flashQuestion: document.querySelector("#flashQuestion"),
  flashAnswer: document.querySelector("#flashAnswer"),
  prevFlash: document.querySelector("#prevFlash"),
  nextFlash: document.querySelector("#nextFlash"),
  toggleAnswer: document.querySelector("#toggleAnswer"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizExpected: document.querySelector("#quizExpected"),
  quizAnswer: document.querySelector("#quizAnswer"),
  quizScore: document.querySelector("#quizScore"),
  markReviewQuiz: document.querySelector("#markReviewQuiz"),
  markDoneQuiz: document.querySelector("#markDoneQuiz"),
  knowledgeForm: document.querySelector("#knowledgeForm"),
  itemCategory: document.querySelector("#itemCategory"),
  itemPriority: document.querySelector("#itemPriority"),
  itemQuestion: document.querySelector("#itemQuestion"),
  itemAnswer: document.querySelector("#itemAnswer"),
  bulkInput: document.querySelector("#bulkInput"),
  bulkImportBtn: document.querySelector("#bulkImportBtn"),
  editBanner: document.querySelector("#editBanner"),
  cancelEditBtn: document.querySelector("#cancelEditBtn"),
  saveItemBtn: document.querySelector("#saveItemBtn")
};

let items = loadItems();
let studyState = loadState();
let deletedSeedIds = loadDeletedSeedIds();
let selectedCategory = "Tất cả";
let mode = "notes";
let flashIndex = 0;
let quizIndex = 0;
let quizDone = 0;
let editingId = null;

const navGroups = [
  { label: "Tất cả", categories: null },
  { label: "HR & công ty", categories: ["Giới thiệu bản thân", "HR", "Công ty"] },
  { label: "Dự án thực tế", categories: ["Dự án", "Kinh nghiệm nổi bật"] },
  { label: "Testing nền tảng", categories: ["Testing cơ bản", "Testcase"] },
  { label: "API & SQL", categories: ["API", "SQL"] },
  { label: "Automation", categories: ["Automation"] },
  { label: "Agile & quản lý test", categories: ["Agile/Scrum", "Test management"] },
  { label: "UI & Mobile", categories: ["UI/UX", "Mobile/App"] },
  { label: "AI trong testing", categories: ["AI trong testing"] }
];

function loadItems() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const deletedSeeds = loadDeletedSeedIds();
  if (!saved) return window.seedKnowledge.filter((item) => !deletedSeeds.has(item.id));
  try {
    const savedItems = JSON.parse(saved);
    const savedById = new Map(savedItems.map((item) => [item.id, item]));
    const seedIds = new Set(window.seedKnowledge.map((item) => item.id));
    const mergedSeed = window.seedKnowledge
      .filter((item) => !deletedSeeds.has(item.id))
      .map((seedItem) => {
        const savedItem = savedById.get(seedItem.id);
        return savedItem?.userEdited ? savedItem : seedItem;
      });
    const customItems = savedItems.filter((item) => !seedIds.has(item.id));
    return [...mergedSeed, ...customItems];
  } catch {
    return window.seedKnowledge.filter((item) => !deletedSeeds.has(item.id));
  }
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STATE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(studyState));
}

function loadDeletedSeedIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(DELETED_SEEDS_KEY)) || []);
  } catch {
    return new Set();
  }
}

function saveDeletedSeedIds() {
  localStorage.setItem(DELETED_SEEDS_KEY, JSON.stringify([...deletedSeedIds]));
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getVisibleItems() {
  const query = normalize(els.searchInput.value.trim());
  const confidence = els.confidenceFilter.value;
  const stateRank = {
    done: 0,
    new: 1,
    review: 2
  };

  return items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => {
      const group = navGroups.find((entry) => entry.label === selectedCategory);
      const matchesCategory = !group?.categories || group.categories.includes(item.category);
      const haystack = normalize(`${item.category} ${item.question} ${item.answer}`);
      const matchesSearch = !query || haystack.includes(query);
      const currentState = studyState[item.id] || "new";
      const matchesConfidence = confidence === "all" || currentState === confidence;
      return matchesCategory && matchesSearch && matchesConfidence;
    })
    .sort((left, right) => {
      const leftState = studyState[left.item.id] || "new";
      const rightState = studyState[right.item.id] || "new";
      return stateRank[leftState] - stateRank[rightState] || left.index - right.index;
    })
    .map(({ item }) => item);
}

function renderNav() {
  els.categoryNav.innerHTML = navGroups
    .map((group) => {
      const count = group.categories
        ? items.filter((item) => group.categories.includes(item.category)).length
        : items.length;
      return `<button class="${group.label === selectedCategory ? "active" : ""}" data-category="${group.label}">
        <span>${group.label}</span><strong>${count}</strong>
      </button>`;
    })
    .join("");
}

function renderStats() {
  const states = Object.values(studyState);
  els.totalCards.textContent = items.length;
  els.doneCards.textContent = states.filter((value) => value === "done").length;
  els.reviewCards.textContent = states.filter((value) => value === "review").length;
}

function priorityLabel(priority) {
  return {
    high: "Ưu tiên cao",
    medium: "Ưu tiên vừa",
    low: "Ưu tiên thấp"
  }[priority || "medium"];
}

function renderNotes() {
  const visible = getVisibleItems();
  els.pageTitle.textContent = selectedCategory === "Tất cả" ? "Tất cả kiến thức" : selectedCategory;
  els.notesView.innerHTML = visible.length
    ? visible
        .map((item) => {
          const state = studyState[item.id] || "new";
          return `<article class="note-card ${state}" data-id="${item.id}">
            <div class="card-meta">
              <span>${item.category}</span>
              <span>${priorityLabel(item.priority)}</span>
            </div>
            <h3>${escapeHtml(item.question)}</h3>
            <div class="answer-body">${formatAnswer(item.answer)}</div>
            <div class="card-actions">
              <button data-action="review" class="${state === "review" ? "selected" : ""}">Cần ôn</button>
              <button data-action="done" class="${state === "done" ? "selected" : ""}">Đã tự tin</button>
              <button data-action="edit">Sửa</button>
              <button data-action="delete">Xóa</button>
            </div>
          </article>`;
        })
        .join("")
    : `<div class="empty-state">Không tìm thấy mục phù hợp. Thử đổi từ khóa hoặc thêm kiến thức mới.</div>`;
}

function renderFlashcard() {
  const visible = getVisibleItems();
  if (!visible.length) {
    els.flashCategory.textContent = "";
    els.flashCounter.textContent = "0/0";
    els.flashQuestion.textContent = "Không có flashcard phù hợp";
    els.flashAnswer.textContent = "Hãy đổi bộ lọc hoặc thêm kiến thức mới.";
    return;
  }

  flashIndex = Math.max(0, Math.min(flashIndex, visible.length - 1));
  const item = visible[flashIndex];
  els.flashCategory.textContent = item.category;
  els.flashCounter.textContent = `${flashIndex + 1}/${visible.length}`;
  els.flashQuestion.textContent = item.question;
  els.flashAnswer.innerHTML = formatAnswer(item.answer);
  els.flashAnswer.classList.add("hidden");
  els.toggleAnswer.textContent = "Hiện đáp án";
}

function renderQuiz() {
  const visible = getVisibleItems();
  if (!visible.length) {
    els.quizQuestion.textContent = "Không có câu hỏi phù hợp";
    els.quizExpected.textContent = "Hãy đổi bộ lọc hoặc thêm kiến thức mới.";
    els.quizScore.textContent = "0/0";
    return;
  }

  quizIndex = Math.max(0, Math.min(quizIndex, visible.length - 1));
  const item = visible[quizIndex];
  els.quizQuestion.textContent = item.question;
  els.quizExpected.innerHTML = formatAnswer(item.answer);
  els.quizAnswer.value = "";
  els.quizScore.textContent = `${quizDone}/${visible.length}`;
}

function renderMode() {
  els.notesView.classList.toggle("hidden", mode !== "notes");
  els.flashcardView.classList.toggle("hidden", mode !== "flashcards");
  els.quizView.classList.toggle("hidden", mode !== "quiz");
  els.editorView.classList.toggle("hidden", mode !== "editor");
  els.modeButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === mode));

  if (mode === "flashcards") renderFlashcard();
  if (mode === "quiz") renderQuiz();
}

function render() {
  renderNav();
  renderStats();
  renderNotes();
  renderMode();
}

function setItemState(id, state) {
  studyState[id] = state;
  saveState();
  render();
}

function deleteItem(id) {
  const isSeedItem = window.seedKnowledge.some((item) => item.id === id);
  if (isSeedItem) {
    deletedSeedIds.add(id);
    saveDeletedSeedIds();
  }

  items = items.filter((item) => item.id !== id);
  delete studyState[id];
  saveItems();
  saveState();
  render();
}

function nextVisibleIndex(current) {
  const visible = getVisibleItems();
  if (!visible.length) return 0;
  return (current + 1) % visible.length;
}

function previousVisibleIndex(current) {
  const visible = getVisibleItems();
  if (!visible.length) return 0;
  return (current - 1 + visible.length) % visible.length;
}

function addItem(item) {
  items.unshift({
    id: crypto.randomUUID(),
    category: item.category.trim(),
    question: item.question.trim(),
    answer: item.answer.trim(),
    priority: item.priority || "medium"
  });
  saveItems();
}

function updateItem(id, changes) {
  items = items.map((item) => {
    if (item.id !== id) return item;
    return {
      ...item,
      category: changes.category.trim(),
      question: changes.question.trim(),
      answer: changes.answer.trim(),
      priority: changes.priority || item.priority || "medium",
      userEdited: true
    };
  });
  saveItems();
}

function startEdit(id) {
  const item = items.find((entry) => entry.id === id);
  if (!item) return;

  editingId = id;
  mode = "editor";
  els.itemCategory.value = item.category;
  els.itemPriority.value = item.priority || "medium";
  els.itemQuestion.value = item.question;
  els.itemAnswer.value = item.answer;
  els.editBanner.classList.remove("hidden");
  els.saveItemBtn.textContent = "Cập nhật kiến thức";
  renderMode();
  els.itemQuestion.focus();
}

function stopEdit() {
  editingId = null;
  els.knowledgeForm.reset();
  els.editBanner.classList.add("hidden");
  els.saveItemBtn.textContent = "Lưu kiến thức";
}

function bulkImport(text) {
  const blocks = text
    .split(/\n(?=[^\n]{4,90}\n)/)
    .map((block) => block.trim())
    .filter(Boolean);

  const imported = blocks.map((block) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const question = lines.shift() || "Kiến thức mới";
    return {
      category: "Kiến thức mới",
      question,
      answer: lines.join("\n"),
      priority: "medium"
    };
  });

  imported.filter((item) => item.answer).forEach(addItem);
  return imported.length;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}

function formatAnswer(value) {
  const blocks = [];
  let list = null;
  const flushList = () => {
    if (!list) return;
    blocks.push(`<${list.type}>${list.items.map((item) => `<li>${item}</li>`).join("")}</${list.type}>`);
    list = null;
  };

  value.split(/\n+/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      return;
    }

    const bullet = line.match(/^[-*]\s+(.+)/);
    const ordered = line.match(/^\d+[.)]\s+(.+)/);

    if (bullet || ordered) {
      const type = bullet ? "ul" : "ol";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push(escapeHtml((bullet || ordered)[1]));
      return;
    }

    flushList();
    blocks.push(`<p>${escapeHtml(line)}</p>`);
  });

  flushList();
  return blocks.join("");
}

els.categoryNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  flashIndex = 0;
  quizIndex = 0;
  quizDone = 0;
  render();
});

els.searchInput.addEventListener("input", () => {
  flashIndex = 0;
  quizIndex = 0;
  quizDone = 0;
  render();
});

els.confidenceFilter.addEventListener("change", () => {
  flashIndex = 0;
  quizIndex = 0;
  quizDone = 0;
  render();
});

els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    renderMode();
  });
});

els.notesView.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  const card = event.target.closest(".note-card");
  if (!button || !card) return;
  if (button.dataset.action === "delete") deleteItem(card.dataset.id);
  else if (button.dataset.action === "edit") startEdit(card.dataset.id);
  else setItemState(card.dataset.id, button.dataset.action);
});

els.prevFlash.addEventListener("click", () => {
  flashIndex = previousVisibleIndex(flashIndex);
  renderFlashcard();
});

els.nextFlash.addEventListener("click", () => {
  flashIndex = nextVisibleIndex(flashIndex);
  renderFlashcard();
});

els.toggleAnswer.addEventListener("click", () => {
  els.flashAnswer.classList.toggle("hidden");
  els.toggleAnswer.textContent = els.flashAnswer.classList.contains("hidden") ? "Hiện đáp án" : "Ẩn đáp án";
});

els.markReviewQuiz.addEventListener("click", () => {
  const visible = getVisibleItems();
  if (visible[quizIndex]) setItemState(visible[quizIndex].id, "review");
  quizIndex = nextVisibleIndex(quizIndex);
  renderQuiz();
});

els.markDoneQuiz.addEventListener("click", () => {
  const visible = getVisibleItems();
  if (visible[quizIndex]) setItemState(visible[quizIndex].id, "done");
  quizDone += 1;
  quizIndex = nextVisibleIndex(quizIndex);
  renderQuiz();
});

els.knowledgeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = {
    category: els.itemCategory.value,
    priority: els.itemPriority.value,
    question: els.itemQuestion.value,
    answer: els.itemAnswer.value
  };

  if (editingId) updateItem(editingId, item);
  else addItem(item);

  stopEdit();
  render();
});

els.cancelEditBtn.addEventListener("click", () => {
  stopEdit();
  renderMode();
});

els.bulkImportBtn.addEventListener("click", () => {
  const count = bulkImport(els.bulkInput.value);
  els.bulkInput.value = "";
  render();
  alert(`Đã nhập ${count} mục. Bạn có thể đổi category sau bằng export/import JSON nếu cần.`);
});

render();
