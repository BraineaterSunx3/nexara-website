/*
 * Nexara Lab (Ideen-Abstimmung) + Community-Forum
 * Echtes Backend über Firebase Firestore (Projekt: nexara-website-community).
 * Kein Login nötig: Mehrfach-Abstimmung wird nur per localStorage im selben
 * Browser verhindert (bewusst simpel, siehe Firestore-Regeln im Projekt).
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  increment,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDzVWtTx1kG_U8IAa9tvyEb403bitBSyI",
  authDomain: "nexara-website-community.firebaseapp.com",
  projectId: "nexara-website-community",
  storageBucket: "nexara-website-community.firebasestorage.app",
  messagingSenderId: "853273310714",
  appId: "1:853273310714:web:dbe840f10b5d7328dce043",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function currentLang() {
  return document.documentElement.getAttribute("lang") || "de";
}
function t(key, fallback) {
  const dict = window.NEXARA_I18N && window.NEXARA_I18N[currentLang()];
  return (dict && dict[key] !== undefined) ? dict[key] : fallback;
}
function esc(str) {
  const d = document.createElement("div");
  d.textContent = str == null ? "" : String(str);
  return d.innerHTML;
}
function relTime(date) {
  if (!date) return "";
  const lang = currentLang();
  const diffMs = Date.now() - date.getTime();
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return lang === "de" ? "gerade eben" : "just now";
  if (min < 60) return lang === "de" ? `vor ${min} Min.` : `${min} min ago`;
  const h = Math.floor(min / 60);
  if (h < 24) return lang === "de" ? `vor ${h} Std.` : `${h} h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return lang === "de" ? `vor ${d} Tag${d === 1 ? "" : "en"}` : `${d} day${d === 1 ? "" : "s"} ago`;
  return date.toLocaleDateString(lang === "de" ? "de-DE" : "en-US");
}

/* ===================== Nexara Lab: Ideen-Abstimmung ===================== */

const votedIdeas = (() => {
  try { return new Set(JSON.parse(localStorage.getItem("nexara_lab_voted") || "[]")); }
  catch (e) { return new Set(); }
})();
function saveVoted() {
  try { localStorage.setItem("nexara_lab_voted", JSON.stringify([...votedIdeas])); } catch (e) {}
}

let labIdeas = [];
let labLoaded = false;
let labFailed = false;

function renderLabList() {
  const wrap = document.getElementById("lab-list");
  if (!wrap) return;
  if (labFailed) {
    wrap.innerHTML = `<p class="board-empty">${esc(t("lab_error", "Ideen konnten nicht geladen werden."))}</p>`;
    return;
  }
  if (!labLoaded) {
    wrap.innerHTML = `<p class="board-loading">${esc(t("lab_loading", "Ideen werden geladen …"))}</p>`;
    return;
  }
  if (labIdeas.length === 0) {
    wrap.innerHTML = `<p class="board-empty">${esc(t("lab_empty", "Noch keine Ideen — reich die erste ein!"))}</p>`;
    return;
  }
  const sorted = [...labIdeas].sort((a, b) => (b.votes || 0) - (a.votes || 0));
  wrap.innerHTML = sorted.map((idea) => {
    const voted = votedIdeas.has(idea.id);
    return `
      <div class="idea-card">
        <button type="button" class="vote-btn${voted ? " voted" : ""}" data-id="${esc(idea.id)}"
          title="${esc(t(voted ? "lab_voted_title" : "lab_vote_title", "Abstimmen"))}" ${voted ? "disabled" : ""}>
          <span class="vote-arrow">▲</span>
          <span class="vote-count">${idea.votes || 0}</span>
        </button>
        <div class="idea-body">
          <h5>${esc(idea.title)}</h5>
          ${idea.description ? `<p>${esc(idea.description)}</p>` : ""}
        </div>
      </div>`;
  }).join("");

  wrap.querySelectorAll(".vote-btn:not([disabled])").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");
      if (votedIdeas.has(id)) return;
      btn.setAttribute("disabled", "true");
      try {
        await updateDoc(doc(db, "lab_ideas", id), { votes: increment(1) });
        votedIdeas.add(id);
        saveVoted();
      } catch (e) {
        btn.removeAttribute("disabled");
        console.error("Vote failed", e);
      }
    });
  });
}

function initLabBoard() {
  const listEl = document.getElementById("lab-list");
  if (!listEl) return; // page without the Lab board

  const q = query(collection(db, "lab_ideas"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snap) => {
    labIdeas = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    labLoaded = true;
    labFailed = false;
    renderLabList();
  }, (err) => {
    console.error("lab_ideas listen failed", err);
    labFailed = true;
    renderLabList();
  });

  const form = document.getElementById("idea-form");
  const note = document.getElementById("idea-form-note");
  if (form) {
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const titleEl = document.getElementById("idea-title");
      const descEl = document.getElementById("idea-desc");
      const title = titleEl.value.trim();
      const description = descEl.value.trim();
      if (!title) {
        note.textContent = t("lab_submit_empty", "Bitte gib einen Titel ein.");
        note.className = "form-note err";
        return;
      }
      const submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      note.textContent = t("lab_submit_sending", "Wird gesendet …");
      note.className = "form-note";
      try {
        await addDoc(collection(db, "lab_ideas"), {
          title: title.slice(0, 119),
          description: description.slice(0, 1999),
          votes: 0,
          createdAt: serverTimestamp(),
        });
        titleEl.value = "";
        descEl.value = "";
        note.textContent = t("lab_submit_ok", "Danke! Deine Idee wurde eingereicht.");
        note.className = "form-note ok";
      } catch (e) {
        console.error("idea submit failed", e);
        note.textContent = t("lab_submit_err", "Da ist etwas schiefgelaufen. Versuch's noch mal.");
        note.className = "form-note err";
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
}

/* ===================== Community-Forum ===================== */

const CATEGORIES = ["charaktere", "feedback", "fragen", "offtopic"];
let activeCategory = "charaktere";
let forumPosts = []; // all posts, filtered client-side by category
let forumLoaded = false;
let forumFailed = false;
const openThreads = new Set(); // post ids with an expanded reply thread
const repliesByPost = {}; // postId -> array of reply data (loaded lazily)
const replyListeners = {}; // postId -> unsubscribe fn

function renderForumList() {
  const wrap = document.getElementById("forum-list");
  if (!wrap) return;
  if (forumFailed) {
    wrap.innerHTML = `<p class="board-empty">${esc(t("forum_error", "Beiträge konnten nicht geladen werden."))}</p>`;
    return;
  }
  if (!forumLoaded) {
    wrap.innerHTML = `<p class="board-loading">${esc(t("forum_loading", "Beiträge werden geladen …"))}</p>`;
    return;
  }
  const posts = forumPosts.filter((p) => p.category === activeCategory);
  if (posts.length === 0) {
    wrap.innerHTML = `<p class="board-empty">${esc(t("forum_empty", "Noch keine Beiträge in dieser Kategorie — schreib den ersten!"))}</p>`;
    return;
  }
  wrap.innerHTML = posts.map((post) => {
    const name = post.name && post.name.trim() ? post.name.trim() : t("forum_anon", "Anonym");
    const created = post.createdAt && post.createdAt.toDate ? post.createdAt.toDate() : null;
    const open = openThreads.has(post.id);
    const replies = repliesByPost[post.id] || [];
    return `
      <div class="post-card">
        <div class="post-meta"><span class="post-name">${esc(name)}</span><span class="post-date">${esc(relTime(created))}</span></div>
        <p class="post-message">${esc(post.message)}</p>
        <div class="post-actions">
          <button type="button" class="reply-toggle" data-id="${esc(post.id)}">
            💬 <span>${esc(t("forum_reply_btn", "Antworten"))}</span>${replies.length ? ` (${replies.length})` : ""}
          </button>
        </div>
        <div class="reply-thread" ${open ? "" : "hidden"} data-id="${esc(post.id)}">
          <div class="reply-list">
            ${replies.map((r) => {
              const rname = r.name && r.name.trim() ? r.name.trim() : t("forum_anon", "Anonym");
              const rcreated = r.createdAt && r.createdAt.toDate ? r.createdAt.toDate() : null;
              return `<div class="reply-item"><div class="post-meta"><span class="post-name">${esc(rname)}</span><span class="post-date">${esc(relTime(rcreated))}</span></div><p class="post-message">${esc(r.message)}</p></div>`;
            }).join("")}
          </div>
          <form class="reply-form" data-id="${esc(post.id)}">
            <input type="text" class="reply-name" maxlength="50" placeholder="${esc(t("forum_reply_name_ph", "Name (optional)"))}" data-i18n-placeholder="forum_reply_name_ph" />
            <textarea class="reply-message" maxlength="1900" rows="2" required placeholder="${esc(t("forum_reply_ph", "Antwort schreiben …"))}" data-i18n-placeholder="forum_reply_ph"></textarea>
            <button type="submit" class="btn btn-ghost btn-sm">${esc(t("forum_reply_submit", "Antworten"))}</button>
            <p class="form-note"></p>
          </form>
        </div>
      </div>`;
  }).join("");

  wrap.querySelectorAll(".reply-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      if (openThreads.has(id)) {
        openThreads.delete(id);
      } else {
        openThreads.add(id);
        subscribeReplies(id);
      }
      renderForumList();
    });
  });

  wrap.querySelectorAll(".reply-form").forEach((form) => {
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const postId = form.getAttribute("data-id");
      const nameEl = form.querySelector(".reply-name");
      const msgEl = form.querySelector(".reply-message");
      const note = form.querySelector(".form-note");
      const message = msgEl.value.trim();
      if (!message) {
        note.textContent = t("forum_submit_empty", "Bitte schreib eine Nachricht.");
        note.className = "form-note err";
        return;
      }
      const submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      note.textContent = t("forum_submit_sending", "Wird gesendet …");
      note.className = "form-note";
      try {
        await addDoc(collection(db, "forum_posts", postId, "replies"), {
          name: (nameEl.value || "").trim().slice(0, 59),
          message: message.slice(0, 1899),
          createdAt: serverTimestamp(),
        });
        msgEl.value = "";
        nameEl.value = "";
        note.textContent = t("forum_reply_ok", "Antwort veröffentlicht.");
        note.className = "form-note ok";
      } catch (e) {
        console.error("reply submit failed", e);
        note.textContent = t("forum_submit_err", "Da ist etwas schiefgelaufen. Versuch's noch mal.");
        note.className = "form-note err";
      } finally {
        submitBtn.disabled = false;
      }
    });
  });
}

function subscribeReplies(postId) {
  if (replyListeners[postId]) return; // already subscribed
  const q = query(collection(db, "forum_posts", postId, "replies"), orderBy("createdAt", "asc"));
  replyListeners[postId] = onSnapshot(q, (snap) => {
    repliesByPost[postId] = snap.docs.map((d) => d.data());
    if (openThreads.has(postId)) renderForumList();
  }, (err) => console.error("replies listen failed", err));
}

function setActiveCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll("#forum-filter .cat-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-cat") === cat);
  });
  renderForumList();
}

function initForumBoard() {
  const listEl = document.getElementById("forum-list");
  if (!listEl) return; // page without the forum board

  document.querySelectorAll("#forum-filter .cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => setActiveCategory(btn.getAttribute("data-cat")));
  });

  const q = query(collection(db, "forum_posts"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snap) => {
    forumPosts = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    forumLoaded = true;
    forumFailed = false;
    renderForumList();
  }, (err) => {
    console.error("forum_posts listen failed", err);
    forumFailed = true;
    renderForumList();
  });

  const form = document.getElementById("post-form");
  const note = document.getElementById("post-form-note");
  if (form) {
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const nameEl = document.getElementById("post-name");
      const msgEl = document.getElementById("post-message");
      const message = msgEl.value.trim();
      if (!message) {
        note.textContent = t("forum_submit_empty", "Bitte schreib eine Nachricht.");
        note.className = "form-note err";
        return;
      }
      const submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      note.textContent = t("forum_submit_sending", "Wird gesendet …");
      note.className = "form-note";
      try {
        await addDoc(collection(db, "forum_posts"), {
          category: activeCategory,
          name: (nameEl.value || "").trim().slice(0, 59),
          message: message.slice(0, 2899),
          createdAt: serverTimestamp(),
        });
        msgEl.value = "";
        nameEl.value = "";
        note.textContent = t("forum_submit_ok", "Danke! Dein Beitrag wurde veröffentlicht.");
        note.className = "form-note ok";
      } catch (e) {
        console.error("post submit failed", e);
        note.textContent = t("forum_submit_err", "Da ist etwas schiefgelaufen. Versuch's noch mal.");
        note.className = "form-note err";
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
}

document.addEventListener("nexaralangchange", () => {
  renderLabList();
  renderForumList();
});

document.addEventListener("DOMContentLoaded", () => {
  initLabBoard();
  initForumBoard();
});
