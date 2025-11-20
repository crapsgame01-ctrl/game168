:root {
  --bg-1: #0b1220;
  --bg-2: #071226;
  --accent-1: #0ea5a4; /* น้ำเงินเขียวแบบโปร */
  --accent-2: #7c3aed; /* ม่วงนีออน */
  --muted: #94a3b8;
  --text: #e6eef6;
  --surface: rgba(255, 255, 255, 0.02);
}

/* GLOBAL */
html, body, #root {
  height: 100%;
}

body {
  margin: 0;
  background:
    radial-gradient(1200px 600px at 10% 10%, rgba(14,165,164,0.03), transparent),
    radial-gradient(900px 400px at 90% 90%, rgba(124,58,237,0.02), transparent),
    linear-gradient(180deg, var(--bg-1), var(--bg-2));
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* TYPOGRAPHY */
h1 {
  font-size: clamp(28px, 3.6vw, 42px);
  line-height: 1.05;
  margin: 0 0 12px;
  color: var(--text);
}

h2 {
  font-size: clamp(20px, 2.4vw, 26px);
  margin: 0 0 10px;
  color: var(--text);
}

p {
  color: var(--muted);
  margin: 0 0 12px;
}

/* LAYOUT */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px;
}

/* HEADER */
.site-header {
  background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent);
  border-bottom: 1px solid rgba(255,255,255,0.02);
  position: sticky;
  top: 0;
  z-index: 40;
}

.site-header .muted {
  color: var(--muted);
}

/* NEON TEXT */
.neon {
  text-shadow:
    0 0 6px rgba(14,165,164,0.18),
    0 0 12px rgba(124,58,237,0.08);
}

/* BUTTONS */
.btn {
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
  border-radius: 8px;
  padding: 10px 14px;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  border: none;
}

.btn.primary {
  background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
  color: #fff;
  font-weight: 700;
}

.btn:focus {
  outline: 3px solid rgba(255,255,255,0.06);
  outline-offset: 2px;
}

.btn:hover {
  transform: translateY(-2px);
}

/* NAV */
nav a {
  color: var(--text);
  margin-right: 12px;
  text-decoration: none;
  font-weight: 600;
}

nav a:hover {
  opacity: 0.95;
}

/* GLOW UTILITIES */
.glow {
  transition: box-shadow .18s ease, transform .12s ease, opacity .12s ease;
}

.glow:hover {
  box-shadow: 0 10px 40px rgba(14,165,164,0.06);
  transform: translateY(-4px);
  opacity: 0.98;
}

/* CENTER ACTION BUTTON */
.center-action-container {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 60;
}

.center-action {
  pointer-events: auto;
  background: linear-gradient(90deg, rgba(14,165,164,0.92), rgba(124,58,237,0.92));
  color: #fff;
  padding: 14px 22px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  box-shadow: 
    0 12px 40px rgba(2,6,23,0.6),
    0 0 20px rgba(124,58,237,0.06);
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
}

.center-action:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 60px rgba(0,0,0,0.55);
}

.center-action:focus {
  outline: 3px solid rgba(255,255,255,0.12);
  outline-offset: 3px;
}

/* MOBILE */
@media (max-width: 520px) {
  .center-action {
    font-size: 15px;
    padding: 14px 20px;
    border-radius: 10px;
  }
}

/* SYSTEM CONSOLE BLOCK */
.system-console {
  background: var(--surface);
  border: 1px solid rgba(255,255,255,0.04);
  padding: 18px;
  border-radius: 10px;
  margin-top: 18px;
}

.system-console .muted {
  color: var(--muted);
}

.console-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
}

.console-result {
  flex: 1;
  background: rgba(0,0,0,0.25);
  padding: 12px;
  border-radius: 8px;
  color: var(--text);
  font-family: monospace;
  font-size: 13px;
}
