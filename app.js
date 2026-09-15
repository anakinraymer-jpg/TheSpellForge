document.getElementById("year").textContent = new Date().getFullYear();

const STATUS_LABELS = {
  active: "Active",
  planned: "Planned",
};

function projectCard(project) {
  const card = document.createElement(project.link ? "a" : "div");
  card.className = "card";
  if (project.link) {
    card.href = project.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  } else {
    card.classList.add("card--placeholder");
  }

  const badge = `<span class="badge badge--${project.status}">${STATUS_LABELS[project.status] ?? project.status}</span>`;
  const stack = project.stack ? `<span class="stack">${project.stack}</span>` : "";

  card.innerHTML = `
    <div class="card-header">
      <h2>${project.name}</h2>
      ${badge}
    </div>
    <p class="tagline">${project.tagline}</p>
    ${stack}
  `;

  return card;
}

const grid = document.getElementById("projects");
for (const project of PROJECTS) {
  grid.appendChild(projectCard(project));
}
