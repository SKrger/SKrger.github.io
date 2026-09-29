(() => {
  const projects = Array.from(
    document.querySelectorAll(".project-feature, .project-card")
  );
  const tags = Array.from(document.querySelectorAll(".project-tag"));
  const status = document.querySelector("#project-filter-status");
  const resetButton = document.querySelector("#project-filter-reset");
  const featuredHeading = document.querySelector("#featured-project-heading");
  const moreProjectsHeading = document.querySelector("#more-projects-heading");
  const moreProjectsGrid = document.querySelector("#more-projects-grid");

  if (
    projects.length === 0 ||
    tags.length === 0 ||
    !(status instanceof HTMLElement) ||
    !(resetButton instanceof HTMLButtonElement) ||
    !(featuredHeading instanceof HTMLElement) ||
    !(moreProjectsHeading instanceof HTMLElement) ||
    !(moreProjectsGrid instanceof HTMLElement)
  ) {
    return;
  }

  let selectedTag = "";

  const normalize = (value) => value.trim().toLowerCase();

  const updateProjects = () => {
    let visibleCount = 0;

    projects.forEach((project) => {
      const projectTags = Array.from(
        project.querySelectorAll(".project-tag"),
        (tag) => normalize(tag.textContent ?? "")
      );
      const isVisible = !selectedTag || projectTags.includes(selectedTag);

      project.hidden = !isVisible;
      visibleCount += Number(isVisible);
    });

    const featuredProject = document.querySelector(".project-feature");
    const visibleCardCount = document.querySelectorAll(
      ".project-card:not([hidden])"
    ).length;

    featuredHeading.hidden = Boolean(featuredProject?.hidden);
    moreProjectsHeading.hidden = visibleCardCount === 0;
    moreProjectsGrid.hidden = visibleCardCount === 0;
    resetButton.hidden = !selectedTag;

    const selectedTagLabel = tags.find(
      (tag) => normalize(tag.textContent ?? "") === selectedTag
    )?.textContent?.trim();

    status.textContent = selectedTag
      ? `${visibleCount} ${visibleCount === 1 ? "project" : "projects"} tagged ${selectedTagLabel} shown.`
      : `Showing all ${visibleCount} projects.`;

    tags.forEach((tag) => {
      tag.setAttribute(
        "aria-pressed",
        String(normalize(tag.textContent ?? "") === selectedTag)
      );
    });
  };

  tags.forEach((tag) => {
    tag.setAttribute(
      "aria-label",
      `Filter projects tagged ${tag.textContent?.trim()}`
    );
    tag.addEventListener("click", () => {
      const clickedTag = normalize(tag.textContent ?? "");
      selectedTag = selectedTag === clickedTag ? "" : clickedTag;
      updateProjects();
    });
  });

  resetButton.addEventListener("click", () => {
    selectedTag = "";
    updateProjects();
  });

  updateProjects();
})();
