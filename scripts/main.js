// ---- KUŞLAR (renk dahil) ----
const birds = [
  {
    id: "calikusu",
    name: "Çalıkuşu",
    englishName: "Goldcrest",
    latinName: "Regulus regulus",
    image: "images/calikusu.jpg",
    infoTr:
      "Avrupa'nın en küçük kuşlarından biri; enerjik hareketleri ve ince sesiyle bilinir.",
    infoEn:
      "One of the smallest birds in Europe, known for its energetic movements and thin call.",
    color: "#F8EE7E",
    audio: "assets/audio/calikusu.mp3",
    photoCredit: "Matej Bizjak",
    photoSource: "Pexels",
    photoSourceUrl:
      "https://www.pexels.com/photo/captivating-goldcrest-on-rustic-tree-bark-30747632/",
    ebirdUrl: "https://ebird.org/species/goldcr1",
    trakusUrl:
      "https://www.trakus.org/kods_bird/uye/?fsx=2fsdl17@d&tur=%C7al%FDku%FEu",
  },
  {
    id: "mavi-bastankara",
    name: "Mavi Baştankara",
    englishName: "Eurasian Blue Tit",
    latinName: "Cyanistes caeruleus",
    image: "images/mavi-bastankara.jpg",
    infoTr:
      "Mavi ve sarı renkleriyle çok çekici, hareketli ve meraklı bir baştankara türü.",
    infoEn:
      "A very attractive, active, and curious tit species with blue and yellow colors.",
    color: "#4D7EBA",
    audio: "assets/audio/mavi-bastankara.mp3",
    photoCredit: "Doncoombez",
    photoSource: "Unsplash",
    photoSourceUrl:
      "https://unsplash.com/photos/a-small-blue-and-yellow-bird-perched-on-a-branch-MbrQXGQ1mfM",
    ebirdUrl: "https://ebird.org/species/blutit",
    trakusUrl:
      "https://www.trakus.org/kods_bird/uye/?fsx=2fsdl17@d&tur=Mavi%20ba%FEtankara",
  },
  {
    id: "uzunkuyruklu-bastankara",
    name: "Uzunkuyruklu Baştankara",
    englishName: "Long-tailed Tit",
    latinName: "Aegithalos caudatus",
    image: "images/uzunkuyruklu-bastankara.jpg",
    infoTr:
      "Minik gövdesine göre uzun kuyruğuyla dikkat çeken, toplu halde dolaşmayı seven bir tür.",
    infoEn:
      "A species that stands out with its long tail compared to its tiny body and likes moving in groups.",
    color: "#805A4E",
    audio: "assets/audio/uzunkuyruklu-bastankara.mp3",
    photoCredit: "Bob Brewer",
    photoSource: "Unsplash",
    photoSourceUrl:
      "https://unsplash.com/photos/brown-and-white-bird-on-tree-branch-jRkE-J2hZhI",
    ebirdUrl: "https://ebird.org/species/lottit1?siteLanguage=tr",
    trakusUrl:
      "https://www.trakus.org/kods_bird/uye/?fsx=2fsdl17@d&tur=Uzunkuyruklu%20ba%FEtankara",
  },
  {
    id: "buyuk-bastankara",
    name: "Büyük Baştankara",
    englishName: "Great Tit",
    latinName: "Parus major",
    image: "images/buyuk-bastankara.jpg",
    infoTr:
      "Siyah başı ve sarı gövdesiyle sık görülen, güçlü ötüşlü bir baştankara.",
    infoEn:
      "A commonly seen tit with a black head, yellow body, and a strong song.",
    color: "#C1B76F",
    audio: "assets/audio/buyuk-bastankara.mp3",
    photoCredit: "Petr Ganaj",
    photoSource: "Pexels",
    photoSourceUrl:
      "https://www.pexels.com/photo/great-tit-parus-major-bird-on-branch-19632855/",
    ebirdUrl: "https://ebird.org/species/gretit3?siteLanguage=tr",
    trakusUrl:
      "https://www.trakus.org/kods_bird/uye/?fsx=2fsdl17@d&tur=B%FCy%FCk%20ba%FEtankara",
  },
  {
    id: "civgin",
    name: "Çıvgın",
    englishName: "Common Chiffchaff",
    latinName: "Phylloscopus collybita",
    image: "images/civgin.jpg",
    infoTr:
      "Yapraklar arasında sürekli hareket eden, ince ve tekrarlı ötüşüyle tanınan küçük bir ötücü.",
    infoEn:
      "A small songbird known for constant movement among leaves and a thin, repetitive song.",
    color: "#A39767",
    audio: "assets/audio/civgin.mp3",
    photoCredit: "Petr Ganaj",
    photoSource: "Pexels",
    photoSourceUrl:
      "https://www.pexels.com/photo/common-chiffchaff-perched-on-a-branch-18930335/",
    ebirdUrl: "https://ebird.org/species/comchi1",
    trakusUrl:
      "https://www.trakus.org/kods_bird/uye/?fsx=2fsdl17@d&tur=%C7%FDvg%FDn",
  },
  {
    id: "kizilgerdan",
    name: "Kızılgerdan",
    englishName: "European Robin",
    latinName: "Erithacus rubecula",
    image: "images/kizilgerdan.jpg",
    infoTr:
      "Kırmızı göğsüyle tanınan, özellikle kış aylarında bahçelerde sık görülen sevimli bir tür.",
    infoEn:
      "A charming species recognized by its red chest, often seen in gardens especially during winter.",
    color: "#E68B35",
    audio: "assets/audio/kizilgerdan.mp3",
    photoCredit: "Amee Fairbank-Brown",
    photoSource: "Unsplash",
    photoSourceUrl:
      "https://unsplash.com/photos/brown-and-white-bird-on-brown-tree-branch-DRDkhR5ebAk",
    ebirdUrl: "https://ebird.org/species/eurrob1",
    trakusUrl:
      "https://www.trakus.org/kods_bird/uye/?fsx=2fsdl17@d&tur=K%FDz%FDlgerdan",
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
const ONBOARDING_SEEN_KEY = "bird-memory-onboarding-seen-session-v1";
const BEST_MOVES_KEY = "bird-memory-best-moves-v1";
const LANG_PREF_KEY = "bird-memory-language-v1";
// "experimental" to try the new modal look, "classic" for previous styling.
const ONBOARDING_VARIANT = "classic";
let activeBirdAudio = null;
let activeBirdId = null;

const boardEl = document.getElementById("game-board");
const movesEl = document.getElementById("moves-count");
const matchesEl = document.getElementById("matches-count");
const movesChipEl = document.getElementById("moves-chip");
const matchesChipEl = document.getElementById("matches-chip");
const langToggleBtn = document.getElementById("lang-toggle");
const soundToggleBtn = document.getElementById("sound-toggle");
const restartBtn = document.getElementById("restart-btn");
const helpBtn = document.getElementById("help-btn");
const gameTitleEl = document.getElementById("game-title");
const gameSubtitleEl = document.getElementById("game-subtitle");
const infoPanelEl = document.getElementById("info-panel");
const infoNameEl = document.getElementById("info-name");
const infoEnglishEl = document.getElementById("info-english");
const infoLatinEl = document.getElementById("info-latin");
const infoTextEl = document.getElementById("info-description");
const infoVisualEl = document.getElementById("info-visual");
const infoImageEl = document.getElementById("info-bird-image");
const infoCreditsEl = document.getElementById("info-credits");
const infoLinksTitleEl = document.getElementById("info-links-title");
const infoAudioCreditEl = document.getElementById("info-audio-credit");
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
const onboardingOverlayEl = document.getElementById("onboarding-overlay");
const onboardingModalEl = document.querySelector(
  "#onboarding-overlay .onboarding-modal",
);
const onboardingStartBtn = document.getElementById("onboarding-start-btn");
const onboardingCloseBtn = document.getElementById("onboarding-close-btn");
const onboardingTitleTextEl = document.getElementById("onboarding-title-text");
const onboardingLeadEl = document.getElementById("onboarding-lead");
const onboardingTextEl = document.getElementById("onboarding-text");
const onboardingNoteEl = document.getElementById("onboarding-note");
const onboardingControlsTitleEl = document.getElementById(
  "onboarding-controls-title",
);
const onboardingScoreTitleEl = document.getElementById(
  "onboarding-score-title",
);
const onboardingControlSoundEl = document.getElementById(
  "onboarding-control-sound",
);
const onboardingControlLangEl = document.getElementById(
  "onboarding-control-lang",
);
const onboardingControlRestartEl = document.getElementById(
  "onboarding-control-restart",
);
const onboardingScoreMovesEl = document.getElementById(
  "onboarding-score-moves",
);
const onboardingScoreMatchesEl = document.getElementById(
  "onboarding-score-matches",
);
const endTitleTextEl = document.getElementById("end-title-text");
const endRestartLabelEl = document.getElementById("end-restart-label");
const endObserveLabelEl = document.getElementById("end-observe-label");
const prefersReducedMotionMq = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

let isSoundEnabled = getInitialSoundPreference();
let currentLang = getInitialLanguage();
let endOverlayTimeout = null;
const END_OVERLAY_DELAY_AFTER_MATCH_MS = 250;
const ENABLE_COLLECT_FLY_ANIMATION = false;

if (onboardingOverlayEl && onboardingModalEl) {
  const useExperimentalOnboarding = ONBOARDING_VARIANT === "experimental";
  onboardingOverlayEl.classList.toggle(
    "onboarding-variant-experimental",
    useExperimentalOnboarding,
  );
  onboardingModalEl.classList.toggle(
    "is-experimental",
    useExperimentalOnboarding,
  );
}

const translations = {
  tr: {
    pageTitle: "Bird Memory Game 🐦",
    gameTitle: "Bird Memory Game",
    gameSubtitle: "Çevrendeki kuşları keşfet, hafızanı test et!",
    statMoves: "Hamle",
    statMatches: "Eşleşme",
    langSwitchTo: "İngilizceye geç",
    help: "Yardım",
    restart: "Yeniden başlat",
    soundOn: "Eşleşme seslerini kapat",
    soundOff: "Eşleşme seslerini aç",
    replay: "Kuş sesini dinle",
    replayStop: "Kuş sesini durdur",
    infoToggleShow: "Detayı göster",
    infoToggleHide: "Detayı gizle",
    infoEmptyTitle: "Bir eşleşme yap ve bu bölümü dolduralım.",
    infoEmptyText:
      "Her doğru eşleşmede, o kuş türü hakkında küçük bir not göreceksin. Böylece oyun oynarken tüylerini tanıdığın gibi türlerini de tanıyacaksın.",
    infoMissingText: "Bu tür hakkında henüz not eklenmedi.",
    infoImageAlt: "{name} görseli",
    infoLinksTitle: "Daha fazla bilgi için:",
    infoAudioCredit:
      "Bütün kuş sesleri için trakus.org kütüphanesi kullanılmıştır.",
    photoFallback: "© Fotoğraf: kaynak bilgisi eklenecek.",
    photoPrefix: "© Fotoğraf: ",
    onboardingClose: "Tanıtım penceresini kapat",
    onboardingTitle: "Kuşları keşfetmeye hazır mısın?",
    onboardingLead: "Fotoğraf ve isim kartlarını eşleştir, kuşları yakından tanı!",
    onboardingText:
      "Her doğru eşleşmede kuşun sesini duyabilir, bilgilerini öğrenebilirsin.",
    onboardingNote: "Unutma: Kartlardan biri görsel, diğeri isim olacak.",
    onboardingControls: "Kontroller",
    onboardingScoreTitle: "İlerleme",
    onboardingControlSound: "Kuş sesini aç / kapat",
    onboardingControlLang: "Dil değiştir",
    onboardingControlRestart: "Oyunu yeniden başlat",
    onboardingScoreMoves: "Hamle sayısı",
    onboardingScoreMatches: "Eşleşme sayısı",
    onboardingStart: "Kuş gözlemine başla",
    endClose: "Kapat",
    endTitle: "Tebrikler!",
    endRestart: "Yeniden başlat",
    endObserve: "Kuşları incele",
    endFirst:
      "Tebrikler! İlk gözlemini {moves} hamlede tamamladın. Bakalım bir sonraki sefer bu rekoru geliştirebilecek misin?",
    endNewRecord:
      "🏆 Yeni Kişisel Rekor!<br>Müthiş bir gözlem yeteneği! {moves} hamle ile yeni rekorunu kırdın. (Önceki rekorun: <strong>{best}</strong>)",
    endEqualRecord:
      "Harika bir gözlem! Bu turu tam {moves} hamlede tamamladın. Kişisel rekorunu koruyorsun! 🏆 Bir kez daha deneyip çıtayı yükseltmeye ne dersin?",
    endTryAgain:
      "Harika! Bu gözlemi {moves} hamlede tamamladın. Kişisel rekorun <strong>{best}</strong>. Bir kez daha denemeye ne dersin?",
  },
  en: {
    pageTitle: "Bird Memory Game 🐦",
    gameTitle: "Bird Memory Game",
    gameSubtitle: "Discover birds around you and test your memory!",
    statMoves: "Moves",
    statMatches: "Matches",
    langSwitchTo: "Switch to Turkish",
    help: "Help",
    restart: "Restart",
    soundOn: "Turn off match sounds",
    soundOff: "Turn on match sounds",
    replay: "Listen to bird call",
    replayStop: "Stop bird call",
    infoToggleShow: "Show details",
    infoToggleHide: "Hide details",
    infoEmptyTitle: "Make a match to fill this section.",
    infoEmptyText:
      "With each correct match, you will see a short note about that bird species. You can learn species while playing.",
    infoMissingText: "No note has been added for this species yet.",
    infoImageAlt: "{name} image",
    infoLinksTitle: "Learn more",
    infoAudioCredit: "All bird sounds are sourced from the trakus.org library.",
    photoFallback: "© Photo: source information will be added.",
    photoPrefix: "© Photo: ",
    onboardingClose: "Close onboarding dialog",
    onboardingTitle: "Ready to discover birds?",
    onboardingLead: "Match photo and name cards to get to know birds better!",
    onboardingText:
      "With each correct match, you can hear the bird call and learn quick facts.",
    onboardingNote: "Remember: one card is visual, the other is the name.",
    onboardingControls: "Controls",
    onboardingScoreTitle: "Progress",
    onboardingControlSound: "Toggle bird sound",
    onboardingControlLang: "Change language",
    onboardingControlRestart: "Restart game",
    onboardingScoreMoves: "Move count",
    onboardingScoreMatches: "Match count",
    onboardingStart: "Start birdwatching",
    endClose: "Close",
    endTitle: "Congrats!",
    endRestart: "Restart",
    endObserve: "Observe birds",
    endFirst:
      "Great job! You completed your first observation in {moves} moves. Can you beat this record next time?",
    endNewRecord:
      "🏆 New Personal Record!<br>Amazing observation skills! You set a new record with {moves} moves. (Previous record: <strong>{best}</strong>)",
    endEqualRecord:
      "Great observation! You finished this round in exactly {moves} moves. You are holding your personal record! 🏆 Want to try once more and raise the bar?",
    endTryAgain:
      "Great! You completed this observation in {moves} moves. Your personal record is <strong>{best}</strong> moves. Want to try again?",
  },
};

function getInitialSoundPreference() {
  try {
    const saved = localStorage.getItem(SOUND_PREF_KEY);
    if (saved === null) return true;
    return saved === "1";
  } catch {
    return true;
  }
}

function hasSeenOnboarding() {
  try {
    return sessionStorage.getItem(ONBOARDING_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markOnboardingSeen() {
  try {
    sessionStorage.setItem(ONBOARDING_SEEN_KEY, "1");
  } catch {
    // Ignore storage restrictions.
  }
}

function getBestMoves() {
  try {
    const saved = localStorage.getItem(BEST_MOVES_KEY);
    if (saved === null) return null;
    const parsed = Number(saved);
    if (!Number.isInteger(parsed) || parsed <= 0) return null;
    return parsed;
  } catch {
    return null;
  }
}

function setBestMoves(nextBestMoves) {
  try {
    localStorage.setItem(BEST_MOVES_KEY, String(nextBestMoves));
  } catch {
    // Ignore storage restrictions.
  }
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(LANG_PREF_KEY);
    return saved === "en" ? "en" : "tr";
  } catch {
    return "tr";
  }
}

function setLanguage(nextLang) {
  currentLang = nextLang === "en" ? "en" : "tr";
  try {
    localStorage.setItem(LANG_PREF_KEY, currentLang);
  } catch {
    // Ignore storage restrictions.
  }
  applyLanguage();
  updateBoardLanguage();
  if (currentInfoBird) {
    showBirdInfo(currentInfoBird);
  } else {
    setInfoEmptyState();
  }
}

function t(key) {
  return (
    translations[currentLang]?.[key] ??
    translations.tr[key] ??
    `[missing:${key}]`
  );
}

function format(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, token) => values[token] ?? "");
}

function getBirdPrimaryName(bird) {
  if (currentLang === "en") return bird.englishName || bird.name;
  return bird.name || bird.englishName;
}

function getBirdSecondaryName(bird) {
  const secondary = currentLang === "en" ? bird.name : bird.englishName;
  if (!secondary || secondary === getBirdPrimaryName(bird)) return "";
  return secondary;
}

function getBirdInfoText(bird) {
  if (currentLang === "en") return bird?.infoEn || bird?.infoTr || "";
  return bird?.infoTr || bird?.infoEn || "";
}

function setInfoEmptyState() {
  infoNameEl.textContent = t("infoEmptyTitle");
  infoEnglishEl.textContent = "";
  infoLatinEl.textContent = "";
  infoTextEl.textContent = t("infoEmptyText");
  infoVisualEl.classList.add("is-empty");
  infoImageEl.removeAttribute("src");
  infoImageEl.alt = "";
  infoEbirdLinkEl.href = "https://ebird.org/home";
  infoTrakusLinkEl.href = "https://www.trakus.org";
  infoCreditsEl.textContent = t("photoFallback");
  currentInfoBird = null;
  replayAudioBtn.disabled = true;
  updateReplayAudioButtonUI();
  infoPanelEl.classList.add("is-empty-state");
  infoPanelEl.classList.remove("updated");
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.title = t("pageTitle");
  gameTitleEl.textContent = t("gameTitle");
  gameSubtitleEl.textContent = t("gameSubtitle");
  movesChipEl.setAttribute("data-hover-label", t("statMoves"));
  matchesChipEl.setAttribute("data-hover-label", t("statMatches"));
  restartBtn.setAttribute("aria-label", t("restart"));
  restartBtn.setAttribute("data-hover-label", t("restart"));
  helpBtn.setAttribute("aria-label", t("help"));
  helpBtn.setAttribute("data-hover-label", t("help"));
  langToggleBtn.textContent = currentLang.toUpperCase();
  langToggleBtn.setAttribute("aria-label", t("langSwitchTo"));
  langToggleBtn.setAttribute("data-hover-label", t("langSwitchTo"));
  updateReplayAudioButtonUI();
  infoLinksTitleEl.textContent = t("infoLinksTitle");
  infoAudioCreditEl.textContent = t("infoAudioCredit");
  onboardingCloseBtn.setAttribute("aria-label", t("onboardingClose"));
  onboardingStartBtn.textContent = t("onboardingStart");
  onboardingLeadEl.textContent = t("onboardingLead");
  onboardingTextEl.textContent = t("onboardingText");
  onboardingNoteEl.innerHTML = `<span class="onboarding-note-icon" aria-hidden="true">✦</span><strong>${t("onboardingNote")}</strong>`;
  onboardingControlsTitleEl.textContent = t("onboardingControls");
  onboardingScoreTitleEl.textContent = t("onboardingScoreTitle");
  onboardingControlSoundEl.textContent = t("onboardingControlSound");
  onboardingControlLangEl.textContent = t("onboardingControlLang");
  onboardingControlRestartEl.textContent = t("onboardingControlRestart");
  onboardingScoreMovesEl.textContent = t("onboardingScoreMoves");
  onboardingScoreMatchesEl.textContent = t("onboardingScoreMatches");
  endTitleTextEl.textContent = t("endTitle");
  endRestartLabelEl.textContent = t("endRestart");
  endObserveLabelEl.textContent = t("endObserve");
  endCloseBtn.setAttribute("aria-label", t("endClose"));

  onboardingTitleTextEl.textContent = t("onboardingTitle");
  updateSoundToggleUI();
  infoToggleBtn.textContent = infoExpanded
    ? t("infoToggleHide")
    : t("infoToggleShow");
}

function updateSoundToggleUI() {
  const soundLabel = isSoundEnabled ? t("soundOn") : t("soundOff");
  soundToggleBtn.setAttribute("aria-pressed", String(isSoundEnabled));
  soundToggleBtn.setAttribute("aria-label", soundLabel);
  soundToggleBtn.setAttribute("data-hover-label", soundLabel);
}

function isCurrentInfoBirdAudioPlaying() {
  return Boolean(
    activeBirdAudio &&
      currentInfoBird &&
      activeBirdId &&
      currentInfoBird.id === activeBirdId,
  );
}

function updateReplayAudioButtonUI() {
  const isPlaying = isCurrentInfoBirdAudioPlaying();
  const replayLabel = isPlaying ? t("replayStop") : t("replay");
  replayAudioBtn.dataset.audioState = isPlaying ? "playing" : "idle";
  replayAudioBtn.setAttribute("aria-pressed", String(isPlaying));
  replayAudioBtn.setAttribute("aria-label", replayLabel);
  replayAudioBtn.setAttribute("data-hover-label", replayLabel);
}

function playBirdSound(bird, options = {}) {
  const { force = false, onEnded = null } = options;
  if ((!isSoundEnabled && !force) || !bird?.audio) return;

  if (activeBirdAudio) {
    activeBirdAudio.pause();
    activeBirdAudio.currentTime = 0;
    activeBirdAudio = null;
    activeBirdId = null;
  }

  const audio = new Audio(bird.audio);
  audio.volume = 0.85;
  audio.addEventListener(
    "ended",
    () => {
      if (activeBirdAudio === audio) {
        activeBirdAudio = null;
        activeBirdId = null;
        updateReplayAudioButtonUI();
        if (typeof onEnded === "function") onEnded();
      }
    },
    { once: true },
  );
  activeBirdAudio = audio;
  activeBirdId = bird.id || null;
  updateReplayAudioButtonUI();
  audio.play().catch(() => {
    if (activeBirdAudio === audio) {
      activeBirdAudio = null;
      activeBirdId = null;
      updateReplayAudioButtonUI();
    }
    // Autoplay/policy or file errors are safely ignored.
  });
}

function stopActiveBirdAudio() {
  if (!activeBirdAudio) return;
  activeBirdAudio.pause();
  activeBirdAudio.currentTime = 0;
  activeBirdAudio = null;
  activeBirdId = null;
  updateReplayAudioButtonUI();
}

function stopMatchFeedback() {
  stopActiveBirdAudio();
  clearTimeout(infoPanelUpdateTimeout);
  infoPanelUpdateTimeout = null;
  infoPanelEl.classList.remove("updated");
  document.querySelectorAll(".match-collect-fly").forEach((el) => el.remove());
}

function getBirdInfoLinks(bird) {
  const query = encodeURIComponent(bird?.latinName || bird?.name || "");
  return {
    ebird: bird?.ebirdUrl || `https://ebird.org/search?query=${query}`,
    trakus: bird?.trakusUrl || "https://www.trakus.org",
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getBirdCreditsHtml(bird) {
  if (!bird?.photoCredit || !bird?.photoSource) {
    return t("photoFallback");
  }

  const credit = `${t("photoPrefix")}${escapeHtml(bird.photoCredit)} / `;
  const source = escapeHtml(bird.photoSource);
  const sourceUrl = bird?.photoSourceUrl;
  if (!sourceUrl) {
    return `${credit}${source}`;
  }

  return `${credit}<a href="${escapeHtml(
    sourceUrl,
  )}" target="_blank" rel="noopener noreferrer">${source}</a>`;
}

function setInfoExpanded(nextExpanded) {
  infoExpanded = nextExpanded;
  infoToggleBtn.setAttribute("aria-expanded", String(infoExpanded));
  infoToggleBtn.textContent = infoExpanded
    ? t("infoToggleHide")
    : t("infoToggleShow");

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
      img.alt = getBirdPrimaryName(bird);
      w.appendChild(img);
      back.appendChild(w);
    } else {
      const label = document.createElement("div");
      label.className = "card-label";
      const main = document.createElement("div");
      main.className = "card-label-main";
      main.textContent = getBirdPrimaryName(bird);
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

function updateBoardLanguage() {
  cards.forEach((card, index) => {
    const cardEl = boardEl.querySelector(`.card[data-index="${index}"]`);
    if (!cardEl) return;
    const bird = birds[card.birdIndex];
    if (card.type === "image") {
      const imageEl = cardEl.querySelector(".card-image-wrapper img");
      if (imageEl) imageEl.alt = getBirdPrimaryName(bird);
      return;
    }
    const labelMainEl = cardEl.querySelector(".card-label-main");
    if (labelMainEl) labelMainEl.textContent = getBirdPrimaryName(bird);
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
  stopMatchFeedback();
  clearTimeout(endOverlayTimeout);
  endOverlayTimeout = null;
  hideEndOverlay();
  setInfoEmptyState();
  setInfoExpanded(!infoMobileMq.matches);
  syncInfoPanelMode();

  createCards();
  renderBoard();
  syncInfoPanelHeight();
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

  // Hızlı oynanışta yeni hamleyle birlikte önceki eşleşme geri bildirimini kes.
  stopMatchFeedback();

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
    el1.classList.add("match-reward");
    el2.classList.add("match-reward");
    el1.disabled = true;
    el2.disabled = true;

    el1.style.setProperty("--match-color", matchColor);
    el2.style.setProperty("--match-color", matchColor);

    setTimeout(() => {
      el1.classList.remove("match-pop");
      el2.classList.remove("match-pop");
      el1.classList.remove("match-reward");
      el2.classList.remove("match-reward");
    }, 320);

    matches++;
    matchesEl.textContent = matches;

    showBirdInfo(bird, { animate: true });
    playMatchCollectAnimation(bird);
    playBirdSound(bird);

    flippedIndices = [];

    if (matches === birds.length) {
      clearTimeout(endOverlayTimeout);
      const finalMatchesSnapshot = matches;
      endOverlayTimeout = setTimeout(() => {
        endOverlayTimeout = null;
        if (!gameOver && finalMatchesSnapshot === birds.length) {
          endGame();
        }
      }, END_OVERLAY_DELAY_AFTER_MATCH_MS);
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
  const primaryName = getBirdPrimaryName(bird);
  const secondaryName = getBirdSecondaryName(bird);
  infoNameEl.textContent = primaryName;
  infoEnglishEl.textContent = secondaryName;
  infoLatinEl.textContent = bird.latinName || "";
  infoTextEl.textContent = getBirdInfoText(bird) || t("infoMissingText");
  infoImageEl.src = bird.image;
  infoImageEl.alt = format(t("infoImageAlt"), { name: primaryName });
  const links = getBirdInfoLinks(bird);
  infoEbirdLinkEl.href = links.ebird;
  infoTrakusLinkEl.href = links.trakus;
  infoCreditsEl.innerHTML = getBirdCreditsHtml(bird);
  currentInfoBird = bird;
  replayAudioBtn.disabled = !bird.audio;
  updateReplayAudioButtonUI();
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
    }, 760);
  }
}

function playMatchCollectAnimation(bird) {
  if (
    !ENABLE_COLLECT_FLY_ANIMATION ||
    prefersReducedMotionMq.matches ||
    !bird?.image
  )
    return;

  const boardRect = boardEl.getBoundingClientRect();
  const targetEl = infoVisualEl.classList.contains("is-empty")
    ? infoPanelEl
    : infoVisualEl;
  const targetRect = targetEl.getBoundingClientRect();
  if (!boardRect.width || !targetRect.width) return;

  const fromX = boardRect.left + boardRect.width / 2;
  const fromY = boardRect.top + boardRect.height / 2;
  const toX = targetRect.left + targetRect.width / 2;
  const toY = targetRect.top + targetRect.height / 2;

  const flyEl = document.createElement("div");
  flyEl.className = "match-collect-fly";
  flyEl.style.left = `${fromX}px`;
  flyEl.style.top = `${fromY}px`;
  flyEl.style.setProperty("--collect-dx", `${toX - fromX}px`);
  flyEl.style.setProperty("--collect-dy", `${toY - fromY}px`);
  flyEl.style.setProperty(
    "--collect-accent",
    hexToRgba(bird.color || "#f4e9c6", 0.82),
  );

  const img = document.createElement("img");
  img.src = bird.image;
  img.alt = "";
  flyEl.appendChild(img);
  document.body.appendChild(flyEl);

  setTimeout(() => {
    flyEl.remove();
  }, 540);
}

function endGame() {
  gameOver = true;
  const previousBestMoves = getBestMoves();
  const isNewRecord = previousBestMoves === null || moves < previousBestMoves;
  const currentMovesHtml = `<strong>${moves}</strong>`;

  if (isNewRecord) {
    setBestMoves(moves);
    if (previousBestMoves === null) {
      showEndOverlay(format(t("endFirst"), { moves: currentMovesHtml }));
      return;
    }

    showEndOverlay(
      format(t("endNewRecord"), {
        moves: currentMovesHtml,
        best: previousBestMoves,
      }),
    );
    return;
  }

  if (moves === previousBestMoves) {
    showEndOverlay(format(t("endEqualRecord"), { moves: currentMovesHtml }));
    return;
  }

  showEndOverlay(
    format(t("endTryAgain"), {
      moves: currentMovesHtml,
      best: previousBestMoves,
    }),
  );
}

function showEndOverlay(message) {
  endResultEl.innerHTML = message;
  endOverlayEl.classList.add("show");
  endOverlayEl.setAttribute("aria-hidden", "false");
}

function hideEndOverlay() {
  endOverlayEl.classList.remove("show");
  endOverlayEl.setAttribute("aria-hidden", "true");
}

function showOnboarding() {
  onboardingOverlayEl.classList.add("show");
  onboardingOverlayEl.setAttribute("aria-hidden", "false");
}

function hideOnboarding() {
  onboardingOverlayEl.classList.remove("show");
  onboardingOverlayEl.setAttribute("aria-hidden", "true");
  markOnboardingSeen();
}

restartBtn.addEventListener("click", resetGame);
helpBtn.addEventListener("click", showOnboarding);
langToggleBtn.addEventListener("click", () => {
  setLanguage(currentLang === "tr" ? "en" : "tr");
});
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
onboardingStartBtn.addEventListener("click", hideOnboarding);
onboardingCloseBtn.addEventListener("click", hideOnboarding);
endOverlayEl.addEventListener("click", (e) => {
  if (e.target === endOverlayEl) hideEndOverlay();
});
onboardingOverlayEl.addEventListener("click", (e) => {
  if (e.target === onboardingOverlayEl) hideOnboarding();
});
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (onboardingOverlayEl.classList.contains("show")) {
    hideOnboarding();
    return;
  }
  if (endOverlayEl.classList.contains("show")) hideEndOverlay();
});
replayAudioBtn.addEventListener("click", () => {
  if (!currentInfoBird?.audio) return;
  if (isCurrentInfoBirdAudioPlaying()) {
    stopActiveBirdAudio();
    return;
  }
  playBirdSound(currentInfoBird, { force: true });
});
infoToggleBtn.addEventListener("click", () => {
  setInfoExpanded(!infoExpanded);
});
infoMobileMq.addEventListener("change", syncInfoPanelMode);
window.addEventListener("resize", syncInfoPanelHeight);
applyLanguage();
syncInfoPanelMode();
resetGame();
if (!hasSeenOnboarding()) showOnboarding();
