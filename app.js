(() => {
  const q = (selector) => document.querySelector(selector);
  const escapeHTML = (value = "") =>
    String(value).replace(
      /[&<>'"]/g,
      (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char],
    );

  const externalAttrs = (url = "") =>
    /^https?:\/\//.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";

  document.title = `${PROFILE.name} — Academic Homepage`;
  q('meta[property="og:title"]').content = `${PROFILE.name} — Academic Homepage`;
  q('meta[name="description"]').content = PROFILE.intro;
  q('meta[property="og:description"]').content = PROFILE.intro;
  q("#nav-name").textContent = PROFILE.name;
  q("#hero-name").textContent = PROFILE.name;
  q("#hero-eyebrow").textContent = PROFILE.eyebrow;
  q("#hero-headline").textContent = PROFILE.headline;
  q("#hero-intro").textContent = PROFILE.intro;
  q("#hero-status").innerHTML = `<span></span>${escapeHTML(PROFILE.status)}`;
  q("#profile-initials").textContent = PROFILE.initials;
  q("#footer-name").textContent = PROFILE.name;
  q("#footer-year").textContent = new Date().getFullYear();

  if (PROFILE.photo) {
    const photo = q("#profile-photo");
    photo.src = PROFILE.photo;
    photo.alt = `${PROFILE.name} portrait`;
    photo.hidden = false;
    q("#profile-initials").hidden = true;
  }

  q("#hero-links").innerHTML = PROFILE.links
    .map(
      (link) =>
        `<a class="button ${link.primary ? "button-primary" : "button-secondary"}" href="${escapeHTML(link.url)}"${externalAttrs(link.url)}>${escapeHTML(link.label)} <span>↗</span></a>`,
    )
    .join("");

  const tickerItems = PROFILE.interests.map((item) => `<span>${escapeHTML(item)} <i>✦</i></span>`).join("");
  q("#ticker-content").innerHTML = tickerItems + tickerItems;

  q("#about-text").innerHTML = PROFILE.about.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("");
  q("#quick-facts").innerHTML = PROFILE.facts
    .map(
      (fact) => `<div><dt>${escapeHTML(fact.label)}</dt><dd>${escapeHTML(fact.value)}</dd></div>`,
    )
    .join("");

  q("#research-list").innerHTML = PROFILE.research
    .map(
      (item, index) => `
        <article class="research-item reveal">
          <span class="research-index">0${index + 1}</span>
          <div>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.description)}</p>
          </div>
          <div class="tag-list">${item.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
        </article>`,
    )
    .join("");

  q("#publication-note").textContent = PROFILE.publicationNote;
  q("#all-publications-link").href = PROFILE.allPublicationsUrl;
  if (/^https?:\/\//.test(PROFILE.allPublicationsUrl)) {
    q("#all-publications-link").setAttribute("target", "_blank");
    q("#all-publications-link").setAttribute("rel", "noopener noreferrer");
  }
  q("#publication-list").innerHTML = PROFILE.publications
    .map(
      (paper) => `
        <li class="publication-item reveal">
          <span class="publication-year">${escapeHTML(paper.year)}</span>
          <div class="publication-main">
            <h3>${escapeHTML(paper.title)}</h3>
            <p>${escapeHTML(paper.authors)}</p>
            <p class="venue">${escapeHTML(paper.venue)}</p>
          </div>
          <div class="publication-links">
            ${paper.links.map((link) => `<a href="${escapeHTML(link.url)}"${externalAttrs(link.url)}>${escapeHTML(link.label)} ↗</a>`).join("")}
          </div>
        </li>`,
    )
    .join("");

  q("#project-grid").innerHTML = PROFILE.projects
    .map(
      (project) => `
        <a class="project-card project-${escapeHTML(project.accent)} reveal" href="${escapeHTML(project.url)}"${externalAttrs(project.url)}>
          <div class="project-top"><span>${escapeHTML(project.number)}</span><span>↗</span></div>
          <div class="project-mark" aria-hidden="true"><i></i><i></i><i></i></div>
          <div>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
            <span class="project-tech">${escapeHTML(project.tech)}</span>
          </div>
        </a>`,
    )
    .join("");

  q("#news-list").innerHTML = PROFILE.news
    .map(
      (item) => `
        <li class="reveal">
          <time>${escapeHTML(item.date)}</time>
          <p>${escapeHTML(item.text)}</p>
        </li>`,
    )
    .join("");

  q("#contact-text").textContent = PROFILE.contactText;
  q("#contact-email").href = `mailto:${PROFILE.email}`;
  q("#contact-email").innerHTML = `${escapeHTML(PROFILE.email)} <span>↗</span>`;
  q("#footer-links").innerHTML = PROFILE.social
    .map(
      (link) =>
        `<a href="${escapeHTML(link.url)}"${externalAttrs(link.url)}>${escapeHTML(link.label)}</a>`,
    )
    .join("");

  const menuToggle = q(".menu-toggle");
  const nav = q(".site-nav");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();
