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
  q("#chinese-name").textContent = PROFILE.chineseName;
  q("#profile-role").textContent = PROFILE.role;
  q("#profile-affiliation").innerHTML = PROFILE.affiliation.map(escapeHTML).join("<br>");
  q("#hero-intro").textContent = PROFILE.intro;
  q("#hero-status").textContent = PROFILE.status;
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

  q("#ticker-content").innerHTML = PROFILE.interests
    .map((interest) => `<span>${escapeHTML(interest)}</span>`)
    .join("");

  q("#hero-links").innerHTML = PROFILE.links
    .map(
      (link) =>
        `<a href="${escapeHTML(link.url)}"${externalAttrs(link.url)}>${escapeHTML(link.label)}</a>`,
    )
    .join('<span aria-hidden="true">/</span>');

  q("#about-text").innerHTML = PROFILE.about
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");

  q("#quick-facts").innerHTML = PROFILE.facts
    .map(
      (fact) => `
        <article class="education-entry">
          <div class="entry-meta">${escapeHTML(fact.label)}</div>
          <div>
            <h3>${escapeHTML(fact.value)}</h3>
            ${fact.detail ? `<p>${escapeHTML(fact.detail)}</p>` : ""}
          </div>
        </article>`,
    )
    .join("");

  q("#research-list").innerHTML = PROFILE.research
    .map(
      (item) => `
        <article class="research-entry">
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
          <div class="tag-list">${item.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
        </article>`,
    )
    .join("");

  q("#project-grid").innerHTML = PROFILE.projects
    .map(
      (project) => `
        <article class="experience-entry">
          <div class="entry-meta">${escapeHTML(project.period)}</div>
          <div class="entry-main">
            <div class="entry-heading">
              <h3>${escapeHTML(project.title)}</h3>
              ${project.url && project.url !== "#" ? `<a href="${escapeHTML(project.url)}"${externalAttrs(project.url)}>View ↗</a>` : ""}
            </div>
            <p class="entry-role">${escapeHTML(project.role)}</p>
            <p>${escapeHTML(project.description)}</p>
            <p class="entry-tools">${escapeHTML(project.tech)}</p>
          </div>
        </article>`,
    )
    .join("");

  q("#publication-note").textContent = PROFILE.publicationNote;
  q("#publication-list").innerHTML = PROFILE.publications
    .map(
      (paper) => `
        <li class="publication-entry">
          <div class="entry-meta">${escapeHTML(paper.year)}</div>
          <div>
            <h3>${escapeHTML(paper.title)}</h3>
            <p>${escapeHTML(paper.authors)}</p>
            <p class="publication-venue">${escapeHTML(paper.venue)}</p>
            <div class="publication-links">
              ${paper.links.map((link) => `<a href="${escapeHTML(link.url)}"${externalAttrs(link.url)}>[${escapeHTML(link.label)}]</a>`).join(" ")}
            </div>
          </div>
        </li>`,
    )
    .join("");

  q("#news-list").innerHTML = PROFILE.news
    .map(
      (item) => `
        <li>
          <time>${escapeHTML(item.date)}</time>
          <p>${escapeHTML(item.text)}</p>
        </li>`,
    )
    .join("");

  q("#skills-list").innerHTML = PROFILE.skills
    .map(
      (skill) => `
        <div class="skill-row">
          <h3>${escapeHTML(skill.label)}</h3>
          <p>${escapeHTML(skill.value)}</p>
        </div>`,
    )
    .join("");

  q("#contact-text").textContent = PROFILE.contactText;
  q("#contact-email").href = `mailto:${PROFILE.email}`;
  q("#contact-email").textContent = PROFILE.email;
  q("#footer-links").innerHTML = PROFILE.social
    .map(
      (link) => `<a href="${escapeHTML(link.url)}"${externalAttrs(link.url)}>${escapeHTML(link.label)}</a>`,
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
})();
