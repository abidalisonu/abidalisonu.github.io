<script setup>
import FailoverDiagram from './components/FailoverDiagram.vue'
import { profile, highlights, work, experience, skills } from './data.js'

const year = new Date().getFullYear()
</script>

<template>
  <a class="skip" href="#work">Skip to work</a>

  <header class="top">
    <div class="wrap top-inner">
      <a href="#" class="mark">{{ profile.name }}</a>
      <nav aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="btn btn-small" :href="profile.cv" download>Download CV</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <p class="availability"><span class="dot" aria-hidden="true"></span>{{ profile.availability }}</p>
          <h1>{{ profile.name }}</h1>
          <p class="role">{{ profile.role }}, working in {{ profile.stack }}</p>
          <p class="statement">{{ profile.statement }}</p>
          <div class="actions">
            <a class="btn" :href="`mailto:${profile.email}`">Email me</a>
            <a class="btn btn-ghost" :href="profile.cv" download>Download CV</a>
          </div>
          <p class="links">
            <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
            <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
            <span>{{ profile.location }}</span>
          </p>
        </div>
        <div class="hero-visual">
          <p class="visual-label">How the platform I'm building now handles a site outage</p>
          <FailoverDiagram />
        </div>
      </div>
    </section>

    <section class="facts" aria-label="Highlights">
      <div class="wrap facts-grid">
        <p v-for="h in highlights" :key="h.value"><strong>{{ h.value }}</strong> {{ h.label }}</p>
      </div>
    </section>

    <section id="work" class="section">
      <div class="wrap">
        <h2>Selected work</h2>
        <p class="lede">Client names are kept generic. Details describe my role and the engineering, not confidential material.</p>

        <article v-for="w in work" :key="w.id" class="case" :class="{ feature: w.diagram }">
          <div class="case-head">
            <h3>{{ w.title }}</h3>
            <p class="case-meta">{{ w.context }}, {{ w.period }}</p>
            <ul class="chips" aria-label="Technologies">
              <li v-for="t in w.tech" :key="t">{{ t }}</li>
            </ul>
          </div>
          <div class="case-body">
            <div>
              <h4>The problem</h4>
              <p>{{ w.problem }}</p>
            </div>
            <div>
              <h4>What I did</h4>
              <ul class="approach">
                <li v-for="(a, i) in w.approach" :key="i">{{ a }}</li>
              </ul>
            </div>
            <div class="outcome">
              <h4>Result</h4>
              <p>{{ w.outcome }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="experience" class="section alt">
      <div class="wrap">
        <h2>Experience</h2>
        <ol class="timeline">
          <li v-for="e in experience" :key="e.company + e.period">
            <span class="period">{{ e.period }}</span>
            <div>
              <p class="t-role">{{ e.role }}</p>
              <p class="t-company">{{ e.company }}, {{ e.place }}</p>
            </div>
          </li>
        </ol>
        <p class="edu">BS Software Engineering, University of Gujrat, 2012 – 2016. WES-evaluated.</p>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="wrap">
        <h2>Skills</h2>
        <div class="skills">
          <div v-for="s in skills" :key="s.group">
            <h3>{{ s.group }}</h3>
            <p>{{ s.items.join(', ') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="wrap">
        <h2>Let's talk about your team</h2>
        <p class="contact-text">
          I work remotely from Dubai with full overlap with European and Middle Eastern hours, and I'm comfortable with async work across other time zones.
        </p>
        <a class="email" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <p class="links">
          <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="profile.cv" download>Download CV (PDF)</a>
        </p>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="wrap">© {{ year }} {{ profile.name }}. Built with Vue.js.</div>
  </footer>
</template>

<style scoped>
.skip {
  position: absolute;
  left: -999px;
  top: 8px;
  background: var(--ink);
  color: var(--paper);
  padding: 8px 12px;
  z-index: 20;
}
.skip:focus {
  left: 8px;
}

/* Header */
.top {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}
.top-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 60px;
}
.mark {
  font-weight: 700;
  font-stretch: 112%;
  text-decoration: none;
  font-size: 1.05rem;
}
nav {
  display: flex;
  gap: 20px;
  margin-left: auto;
}
nav a {
  text-decoration: none;
  color: var(--muted);
  font-size: 0.95rem;
}
nav a:hover {
  color: var(--ink);
}

/* Buttons */
.btn {
  display: inline-block;
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 8px;
  border: 2px solid var(--ink);
}
.btn:hover {
  background: var(--signal);
  border-color: var(--signal);
}
.btn-ghost {
  background: transparent;
  color: var(--ink);
}
.btn-ghost:hover {
  color: var(--paper);
}
.btn-small {
  padding: 7px 14px;
  font-size: 0.9rem;
}

/* Hero */
.hero {
  padding: 72px 0 56px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
}
.availability {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 20px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 4px var(--signal-soft);
}
h1 {
  font-size: clamp(3rem, 7vw, 5.4rem);
  font-weight: 800;
  font-stretch: 118%;
  letter-spacing: -0.02em;
  line-height: 0.95;
}
.role {
  margin-top: 16px;
  font-size: 1.25rem;
  font-weight: 600;
}
.statement {
  margin-top: 20px;
  max-width: 34em;
  color: var(--muted);
  font-size: 1.1rem;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 22px;
  margin-top: 22px;
  font-size: 0.95rem;
  color: var(--muted);
}
.links a {
  color: var(--ink);
  text-underline-offset: 3px;
}
.hero-visual {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 22px 22px 18px;
}
.visual-label {
  font-weight: 600;
  margin-bottom: 14px;
}

/* Facts */
.facts {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--panel);
}
.facts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.facts-grid p {
  padding: 22px 24px 22px 0;
  color: var(--muted);
  font-size: 0.98rem;
}
.facts-grid p + p {
  padding-left: 24px;
  border-left: 1px solid var(--line);
}
.facts-grid strong {
  display: block;
  color: var(--ink);
  font-size: 1.6rem;
  font-stretch: 112%;
  font-weight: 700;
}

/* Sections */
.section {
  padding: 88px 0;
}
.section.alt {
  background: var(--panel);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  font-stretch: 112%;
  letter-spacing: -0.01em;
}
.lede {
  margin-top: 12px;
  color: var(--muted);
  max-width: 40em;
}

/* Case studies */
.case {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  padding: 44px 0;
  border-top: 1px solid var(--line);
  margin-top: 44px;
}
.case + .case {
  margin-top: 0;
}
.case h3 {
  font-size: 1.45rem;
  font-weight: 700;
}
.case.feature h3 {
  font-size: 1.7rem;
}
.case-meta {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.95rem;
}
.chips {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chips li {
  font-family: var(--mono);
  font-size: 0.78rem;
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--signal-soft);
  color: var(--ink);
}
.case-body {
  display: grid;
  gap: 22px;
  max-width: 44em;
}
h4 {
  margin: 0 0 6px;
  font-size: 1rem;
  font-weight: 700;
}
.approach {
  margin: 0;
  padding-left: 1.1em;
}
.approach li + li {
  margin-top: 6px;
}
.outcome {
  border-left: 3px solid var(--signal);
  padding-left: 16px;
}

/* Timeline */
.timeline {
  list-style: none;
  padding: 0;
  margin: 36px 0 0;
}
.timeline li {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}
.period {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--muted);
  padding-top: 3px;
}
.t-role {
  font-weight: 700;
}
.t-company {
  color: var(--muted);
}
.edu {
  margin-top: 24px;
  color: var(--muted);
}

/* Skills */
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 40px;
  margin-top: 36px;
}
.skills h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.skills p {
  color: var(--muted);
}

/* Contact */
.contact {
  padding: 96px 0;
  background: var(--ink);
  color: var(--paper);
}
.contact h2 {
  color: var(--paper);
}
.contact-text {
  margin-top: 16px;
  max-width: 38em;
  opacity: 0.8;
}
.email {
  display: inline-block;
  margin-top: 28px;
  font-size: clamp(1.4rem, 4vw, 2.4rem);
  font-weight: 700;
  font-stretch: 110%;
  color: var(--paper);
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
  word-break: break-all;
}
.email:hover {
  color: var(--signal);
}
.contact .links,
.contact .links a {
  color: var(--paper);
}
.foot {
  padding: 24px 0;
  font-size: 0.88rem;
  color: var(--muted);
}

/* Responsive */
@media (max-width: 900px) {
  .hero-grid,
  .case {
    grid-template-columns: 1fr;
  }
  .hero-grid {
    gap: 40px;
  }
  .case {
    gap: 20px;
  }
  .skills {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  nav {
    display: none;
  }
  .top-inner {
    justify-content: space-between;
  }
  .wrap {
    padding: 0 16px;
  }
  .hero {
    padding: 44px 0 40px;
  }
  .facts-grid {
    grid-template-columns: 1fr;
  }
  .facts-grid p,
  .facts-grid p + p {
    padding: 16px 0;
    border-left: 0;
  }
  .facts-grid p + p {
    border-top: 1px solid var(--line);
  }
  .section {
    padding: 64px 0;
  }
  .timeline li {
    grid-template-columns: 1fr;
    gap: 2px;
  }
  .skills {
    grid-template-columns: 1fr;
  }
}
</style>
