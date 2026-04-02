/* =============================================
   DARK MODE
   ============================================= */
function toggleDark() {
  document.body.classList.toggle('dark');
  const ic = document.getElementById('dark-icon');
  ic.className = document.body.classList.contains('dark') ? 'bi bi-sun' : 'bi bi-moon';
}

/* =============================================
   TAB SWITCHING (About / Projects)
   ============================================= */
function switchTab(tab) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('view-' + tab).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =============================================
   DETAIL VIEWS (project pages)
   ============================================= */
function showDetail(key) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('view-' + key).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToProjects() {
  switchTab('projects');
}

/* =============================================
   RANDOM PROJECT
   ============================================= */
function randomPage() {
  const keys = ['work', 'stream', 'bankrupt', 'vball', 'insight'];
  showDetail(keys[Math.floor(Math.random() * keys.length)]);
}



/* =============================================
   PROJECT SEARCH + FILTER
   ============================================= */

function filterProjects() {
  const text = document.getElementById("project-search").value.toLowerCase();
  const tech = document.getElementById("project-filter").value;

  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector(".card-title")?.innerText.toLowerCase() || "";
    const tags = Array.from(card.querySelectorAll(".overlay-tag")).map(t => t.innerText);

    const matchText = title.includes(text);
    const matchTech = tech === "all" || tags.includes(tech);

    card.style.display = (matchText && matchTech) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const s = document.getElementById("project-search");
  const f = document.getElementById("project-filter");
  if (s) s.addEventListener("input", filterProjects);
  if (f) f.addEventListener("change", filterProjects);
});

/* =============================================
   HERO RANDOM START
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length) {
    const start = Math.floor(Math.random() * slides.length);
    slides.forEach((s, i) => s.style.animationDelay = ((i - start) * 4) + "s");
  }
});
