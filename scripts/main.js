// ---- KUŞLAR (renk dahil) ----
const birds = [
  {
    id: "calikusu",
    name: "Çalıkuşu",
    englishName: "Goldcrest",
    latinName: "Regulus regulus",
    image: "images/calikusu.jpg",
    info: "Avrupa'nın en küçük kuşlarından biri; enerjik hareketleri ve ince sesiyle bilinir.",
    color: "#F8EE7E",
    audio: "assets/audio/calikusu.mp3",
  },
  {
    id: "mavi-bastankara",
    name: "Mavi Baştankara",
    englishName: "Eurasian Blue Tit",
    latinName: "Cyanistes caeruleus",
    image: "images/mavi-bastankara.jpg",
    info: "Mavi ve sarı renkleriyle çok çekici, hareketli ve meraklı bir baştankara türü.",
    color: "#4D7EBA",
    audio: "assets/audio/mavi-bastankara.mp3",
  },
  {
    id: "uzunkuyruklu-bastankara",
    name: "Uzunkuyruklu Baştankara",
    englishName: "Long-tailed Tit",
    latinName: "Aegithalos caudatus",
    image: "images/uzunkuyruklu-bastankara.jpg",
    info: "Minik gövdesine göre uzun kuyruğuyla dikkat çeken, toplu halde dolaşmayı seven bir tür.",
    color: "#805A4E",
    audio: "assets/audio/uzunkuyruklu-bastankara.mp3",
  },
  {
    id: "buyuk-bastankara",
    name: "Büyük Baştankara",
    englishName: "Great Tit",
    latinName: "Parus major",
    image: "images/buyuk-bastankara.jpg",
    info: "Siyah başı ve sarı gövdesiyle sık görülen, güçlü ötüşlü bir baştankara.",
    color: "#C1B76F",
    audio: "assets/audio/buyuk-bastankara.mp3",
  },
  {
    id: "civgin",
    name: "Çıvgın",
    englishName: "Common Chiffchaff",
    latinName: "Phylloscopus collybita",
    image: "images/civgin.jpg",
    info: "Yapraklar arasında sürekli hareket eden, ince ve tekrarlı ötüşüyle tanınan küçük bir ötücü.",
    color: "#A39767",
    audio: "assets/audio/civgin.mp3",
  },
  {
    id: "kizilgerdan",
    name: "Kızılgerdan",
    englishName: "European Robin",
    latinName: "Erithacus rubecula",
    image: "images/kizilgerdan.jpg",
    info: "Kırmızı göğsüyle tanınan, özellikle kış aylarında bahçelerde sık görülen sevimli bir tür.",
    color: "#E68B35",
    audio: "assets/audio/kizilgerdan.mp3",
  },
];

// ---- OYUN DURUMU ----
let cards = [];
let flippedIndices = [];
let lockBoard = false;
let moves = 0;
let matches = 0;
let gameOver = false;
const SOUND_PREF_KEY = "bird-memory-sound-enabled";
let activeBirdAudio = null;

const boardEl = document.getElementById("game-board");
const movesEl = document.getElementById("moves-count");
const matchesEl = document.getElementById("matches-count");
const soundToggleBtn = document.getElementById("sound-toggle");
const infoPanelEl = document.getElementById("info-panel");
const infoNameEl = document.getElementById("info-name");
const infoEnglishEl = document.getElementById("info-english");
const infoLatinEl = document.getElementById("info-latin");
const infoTextEl = document.getElementById("info-description");
const infoVisualEl = document.getElementById("info-visual");
const infoImageEl = document.getElementById("info-bird-image");
const infoCreditsEl = document.getElementById("info-credits");
const infoEbirdLinkEl = document.getElementById("info-ebird-link");
const infoTrakusLinkEl = document.getElementById("info-trakus-link");
const replayAudioBtn = document.getElementById("replay-audio-btn");
const infoToggleBtn = document.getElementById("info-toggle");
const infoMobileMq = window.matchMedia("(max-width: 768px)");
let infoExpanded = true;
let infoPanelUpdateTimeout = null;
let currentInfoBird = null;
const endOverlayEl = document.getElementById("end-overlay");
const endResultEl = document.getElementById("end-result");
const endRestartBtn = document.getElementById("end-restart-btn");
const endObserveBtn = document.getElementById("end-observe-btn");
const endCloseBtn = document.getElementById("end-close-btn");

const highlightEl = document.getElementById("match-highlight");
const highlightImgEl = document.getElementById("match-image");
const highlightNameEl = document.getElementById("match-name");
const highlightLatinEl = document.getElementById("match-latin");
const highlightDescEl = document.getElementById("match-description");
const matchCloseBtn = document.getElementById("match-close-btn");
let highlightTimeout = null;
let isSoundEnabled = getInitialSoundPreference();
let endOverlayTimeout = null;
const MATCH_HIGHLIGHT_DURATION_MS = 1700;
const MATCH_HIGHLIGHT_AUDIO_FALLBACK_MS = 2400;
const MATCH_HIGHLIGHT_MIN_MS = 1600;
const MATCH_HIGHLIGHT_MAX_MS = 3000;
const END_OVERLAY_DELAY_AFTER_HIGHLIGHT_MS = 250;

function getInitialSoundPreference() {
  try {
    const saved = localStorage.getItem(SOUND_PREF_KEY);
    if (saved === null) return true;
    return saved === "1";
  } catch {
    return true;
  }
}

function updateSoundToggleUI() {
  soundToggleBtn.setAttribute("aria-pressed", String(isSoundEnabled));
  soundToggleBtn.setAttribute(
    "aria-label",
    isSoundEnabled ? "Ses: Açık" : "Ses: Kapalı"
  );
}

function playBirdSound(bird, options = {}) {
  const { force = false, onEnded = null } = options;
  if ((!isSoundEnabled && !force) || !bird?.audio) return;

  if (activeBirdAudio) {
    activeBirdAudio.pause();
    activeBirdAudio.currentTime = 0;
  }

  const audio = new Audio(bird.audio);
  audio.volume = 0.85;
  audio.addEventListener(
    "ended",
    () => {
      if (activeBirdAudio === audio) {
        activeBirdAudio = null;
        if (typeof onEnded === "function") onEnded();
      }
    },
    { once: true }
  );
  activeBirdAudio = audio;
  audio.play().catch(() => {
    // Autoplay/policy or file errors are safely ignored.
  });
}

function stopActiveBirdAudio() {
  if (!activeBirdAudio) return;
  activeBirdAudio.pause();
  activeBirdAudio.currentTime = 0;
  activeBirdAudio = null;
}

function hideMatchHighlight(options = {}) {
  const { stopAudio = true } = options;
  if (stopAudio) stopActiveBirdAudio();
  highlightEl.classList.remove("show");
  clearTimeout(highlightTimeout);
  highlightTimeout = null;
}

function getBirdInfoLinks(bird) {
  const query = encodeURIComponent(bird?.latinName || bird?.name || "");
  return {
    ebird: bird?.ebirdUrl || `https://ebird.org/search?query=${query}`,
    trakus: bird?.trakusUrl || "https://www.trakus.org",
  };
}

function getBirdCreditsText(bird) {
  const photoPart = bird?.photoCredit || "Fotoğraf: kaynak bilgisi eklenecek.";
  const audioPart = bird?.audioCredit || "Ses: kaynak bilgisi eklenecek.";
  return `Krediler: ${photoPart} ${audioPart}`;
}

function setInfoExpanded(nextExpanded) {
  infoExpanded = nextExpanded;
  infoToggleBtn.setAttribute("aria-expanded", String(infoExpanded));
  infoToggleBtn.textContent = infoExpanded ? "Detayı gizle" : "Detayı göster";

  if (infoMobileMq.matches) {
    infoPanelEl.classList.toggle("collapsed", !infoExpanded);
  } else {
    infoPanelEl.classList.remove("collapsed");
  }
}

function syncInfoPanelMode() {
  if (infoMobileMq.matches) {
    infoToggleBtn.hidden = false;
    infoPanelEl.classList.toggle("collapsed", !infoExpanded);
    infoPanelEl.style.removeProperty("--board-height");
  } else {
    infoToggleBtn.hidden = true;
    infoPanelEl.classList.remove("collapsed");
    syncInfoPanelHeight();
  }
}

function syncInfoPanelHeight() {
  if (infoMobileMq.matches) return;
  const boardHeight = boardEl.offsetHeight;
  if (boardHeight > 0) {
    infoPanelEl.style.setProperty("--board-height", `${boardHeight}px`);
  }
}

// ---- Yardımcılar ----
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createCards() {
  cards = [];
  birds.forEach((bird, birdIndex) => {
    cards.push({
      cardId: `${bird.id}-img`,
      birdId: bird.id,
      birdIndex,
      type: "image",
    });
    cards.push({
      cardId: `${bird.id}-name`,
      birdId: bird.id,
      birdIndex,
      type: "name",
    });
  });
  shuffle(cards);
}

function renderBoard() {
  boardEl.innerHTML = "";
  cards.forEach((card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card";
    button.dataset.index = index;
    button.dataset.birdIndex = card.birdIndex;

    const inner = document.createElement("div");
    inner.className = "card-inner";

    const front = document.createElement("div");
    front.className = "card-front";
    front.textContent = "";

    const back = document.createElement("div");
    back.className = "card-back";

    const bird = birds[card.birdIndex];

    if (card.type === "image") {
      const w = document.createElement("div");
      w.className = "card-image-wrapper";
      const img = document.createElement("img");
      img.src = bird.image;
      img.alt = bird.name;
      w.appendChild(img);
      back.appendChild(w);
    } else {
      const label = document.createElement("div");
      label.className = "card-label";
      const main = document.createElement("div");
      main.className = "card-label-main";
      main.textContent = bird.name;
      label.appendChild(main);
      if (bird.latinName) {
        const latin = document.createElement("div");
        latin.className = "card-label-latin";
        latin.textContent = bird.latinName;
        label.appendChild(latin);
      }
      back.appendChild(label);
    }

    inner.appendChild(front);
    inner.appendChild(back);
    button.appendChild(inner);
    button.addEventListener("click", onCardClick);
    button.addEventListener("mouseenter", onCardHover);
    boardEl.appendChild(button);
  });
}

function resetGame() {
  moves = 0;
  matches = 0;
  flippedIndices = [];
  lockBoard = false;
  gameOver = false;
  movesEl.textContent = moves;
  matchesEl.textContent = matches;
  stopActiveBirdAudio();
  hideMatchHighlight();
  clearTimeout(endOverlayTimeout);
  endOverlayTimeout = null;
  hideEndOverlay();
  infoNameEl.textContent = "Bir eşleşme yap ve bu bölümü dolduralım.";
  infoEnglishEl.textContent = "";
  infoLatinEl.textContent = "";
  infoTextEl.textContent =
    "Her doğru eşleşmede, o kuş türü hakkında küçük bir not göreceksin. Böylece oyun oynarken tüylerini tanıdığın gibi türlerini de tanıyacaksın.";
  infoVisualEl.classList.add("is-empty");
  infoImageEl.removeAttribute("src");
  infoImageEl.alt = "";
  infoEbirdLinkEl.href = "https://ebird.org/home";
  infoTrakusLinkEl.href = "https://www.trakus.org";
  infoCreditsEl.textContent =
    "Krediler: Fotoğraf bilgisi eklenecek. Ses bilgisi eklenecek.";
  currentInfoBird = null;
  replayAudioBtn.disabled = true;
  infoPanelEl.classList.add("is-empty-state");
  infoPanelEl.classList.remove("updated");
  setInfoExpanded(!infoMobileMq.matches);
  syncInfoPanelMode();

  createCards();
  renderBoard();
  syncInfoPanelHeight();

  // pop-up'ı board içine taşı (board merkezine hizalansın)
  boardEl.appendChild(highlightEl);
}

function onCardClick(e) {
  const cardEl = e.currentTarget;
  const index = Number(cardEl.dataset.index);

  if (lockBoard) return;
  if (
    cardEl.classList.contains("flipped") ||
    cardEl.classList.contains("matched")
  )
    return;

  cardEl.classList.add("flipped");
  flippedIndices.push(index);

  if (flippedIndices.length === 2) {
    moves++;
    movesEl.textContent = moves;
    checkMatch();
  }
}

function onCardHover(e) {
  if (!gameOver) return;
  const cardEl = e.currentTarget;
  if (!cardEl.classList.contains("matched")) return;
  const index = Number(cardEl.dataset.index);
  const bird = birds[cards[index].birdIndex];
  showBirdInfo(bird);
}

function checkMatch() {
  const [i1, i2] = flippedIndices;
  const card1 = cards[i1],
    card2 = cards[i2];
  const el1 = boardEl.querySelector(`.card[data-index="${i1}"]`);
  const el2 = boardEl.querySelector(`.card[data-index="${i2}"]`);

  if (card1.birdId === card2.birdId && card1.type !== card2.type) {
    const bird = birds[card1.birdIndex];
    const color = bird.color || "#4caf50";
    const matchColor = hexToRgba(color, 0.78);

    el1.classList.add("matched");
    el2.classList.add("matched");
    el1.classList.add("match-pop");
    el2.classList.add("match-pop");
    el1.disabled = true;
    el2.disabled = true;

    el1.style.setProperty("--match-color", matchColor);
    el2.style.setProperty("--match-color", matchColor);

    setTimeout(() => {
      el1.classList.remove("match-pop");
      el2.classList.remove("match-pop");
    }, 320);

    matches++;
    matchesEl.textContent = matches;

    showBirdInfo(bird, { animate: true });
    playBirdSound(bird, {
      onEnded: () => hideMatchHighlight({ stopAudio: false }),
    });
    const highlightDuration = showMatchHighlight(bird);

    flippedIndices = [];

    if (matches === birds.length) {
      clearTimeout(endOverlayTimeout);
      const finalMatchesSnapshot = matches;
      endOverlayTimeout = setTimeout(() => {
        endOverlayTimeout = null;
        if (!gameOver && finalMatchesSnapshot === birds.length) {
          endGame();
        }
      }, highlightDuration + END_OVERLAY_DELAY_AFTER_HIGHLIGHT_MS);
    }
  } else {
    lockBoard = true;
    setTimeout(() => {
      el1.classList.remove("flipped");
      el2.classList.remove("flipped");
      flippedIndices = [];
      lockBoard = false;
    }, 900);
  }
}

function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "").trim();
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function showBirdInfo(bird, options = {}) {
  const { animate = false } = options;
  if (infoMobileMq.matches && !infoExpanded) {
    setInfoExpanded(true);
  }
  infoNameEl.textContent = bird.name;
  infoEnglishEl.textContent = bird.englishName || "";
  infoLatinEl.textContent = bird.latinName || "";
  infoTextEl.textContent = bird.info || "Bu tür hakkında henüz not eklenmedi.";
  infoImageEl.src = bird.image;
  infoImageEl.alt = `${bird.name} görseli`;
  const links = getBirdInfoLinks(bird);
  infoEbirdLinkEl.href = links.ebird;
  infoTrakusLinkEl.href = links.trakus;
  infoCreditsEl.textContent = getBirdCreditsText(bird);
  currentInfoBird = bird;
  replayAudioBtn.disabled = !bird.audio;
  infoPanelEl.classList.remove("is-empty-state");
  infoVisualEl.classList.remove("is-empty");

  if (animate) {
    const accent = hexToRgba(bird.color || "#4f7c67", 0.62);
    infoPanelEl.style.setProperty("--info-accent", accent);
    infoPanelEl.classList.remove("updated");
    // Force reflow so animation replays on consecutive matches.
    void infoPanelEl.offsetWidth;
    infoPanelEl.classList.add("updated");
    clearTimeout(infoPanelUpdateTimeout);
    infoPanelUpdateTimeout = setTimeout(() => {
      infoPanelEl.classList.remove("updated");
    }, 560);
  }
}

function showMatchHighlight(bird) {
  highlightImgEl.src = bird.image;
  highlightImgEl.alt = bird.name;
  highlightNameEl.textContent = bird.name;
  highlightLatinEl.textContent = bird.latinName || "";
  highlightDescEl.textContent = bird.info || "";

  let durationMs = MATCH_HIGHLIGHT_DURATION_MS;
  const hasPlayableAudio =
    isSoundEnabled &&
    activeBirdAudio &&
    Number.isFinite(activeBirdAudio.duration) &&
    activeBirdAudio.duration > 0;
  const hasAudioButMetadataMissing =
    isSoundEnabled && !!bird?.audio && !hasPlayableAudio;

  if (hasPlayableAudio) {
    durationMs = Math.round(activeBirdAudio.duration * 1000 + 180);
  } else if (hasAudioButMetadataMissing) {
    durationMs = MATCH_HIGHLIGHT_AUDIO_FALLBACK_MS;
  }
  durationMs = Math.max(
    MATCH_HIGHLIGHT_MIN_MS,
    Math.min(MATCH_HIGHLIGHT_MAX_MS, durationMs)
  );

  highlightEl.classList.add("show");
  clearTimeout(highlightTimeout);
  highlightTimeout = setTimeout(() => {
    hideMatchHighlight();
  }, durationMs);
  return durationMs;
}

function endGame() {
  gameOver = true;
  showEndOverlay(`Tüm kuşları ${moves} hamlede eşleştirdiniz.`);
}

function showEndOverlay(message) {
  endResultEl.textContent = message;
  endOverlayEl.classList.add("show");
  endOverlayEl.setAttribute("aria-hidden", "false");
}

function hideEndOverlay() {
  endOverlayEl.classList.remove("show");
  endOverlayEl.setAttribute("aria-hidden", "true");
}

document.getElementById("restart-btn").addEventListener("click", resetGame);
soundToggleBtn.addEventListener("click", () => {
  isSoundEnabled = !isSoundEnabled;
  updateSoundToggleUI();
  try {
    localStorage.setItem(SOUND_PREF_KEY, isSoundEnabled ? "1" : "0");
  } catch {
    // Ignore storage restrictions.
  }
});
endRestartBtn.addEventListener("click", resetGame);
endObserveBtn.addEventListener("click", hideEndOverlay);
endCloseBtn.addEventListener("click", hideEndOverlay);
endOverlayEl.addEventListener("click", (e) => {
  if (e.target === endOverlayEl) hideEndOverlay();
});
highlightEl.addEventListener("click", (e) => {
  if (e.target === highlightEl) hideMatchHighlight();
});
matchCloseBtn.addEventListener("click", hideMatchHighlight);
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (highlightEl.classList.contains("show")) hideMatchHighlight();
  if (endOverlayEl.classList.contains("show")) hideEndOverlay();
});
replayAudioBtn.addEventListener("click", () => {
  if (!currentInfoBird?.audio) return;
  playBirdSound(currentInfoBird, { force: true });
});
infoToggleBtn.addEventListener("click", () => {
  setInfoExpanded(!infoExpanded);
});
infoMobileMq.addEventListener("change", syncInfoPanelMode);
window.addEventListener("resize", syncInfoPanelHeight);
updateSoundToggleUI();
syncInfoPanelMode();
resetGame();
