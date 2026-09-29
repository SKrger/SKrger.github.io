---
layout: single
title: "Projects"
permalink: /projects/
classes: wide
---

These projects show how I approach a problem from source data to a usable result. They are deliberately end-to-end: I want to understand not only the analysis, but also the workflow that makes it repeatable.

<p class="project-filter-summary" hidden>
  Showing only projects tagged “<strong data-project-filter-value></strong>”.
  <a href="{{ '/projects/' | relative_url }}" data-clear-tag-filter>Clear filter</a>
</p>

## Featured project

{% assign featured_project = site.data.projects.featured %}

<article class="project-feature" data-project-card="true">
  <div>
    <p class="eyebrow">{{ featured_project.card_label }}</p>
    <h2>{{ featured_project.title }}</h2>
    <p class="project-feature__summary">{{ featured_project.summary }}</p>
    <p>{{ featured_project.description }}</p>
    <p class="tag-list">
      {% for tag in featured_project.tags %}
        <a href="{{ '/projects/' | relative_url }}?tag={{ tag | url_encode }}" data-project-tag="{{ tag }}">{{ tag }}</a>
      {% endfor %}
    </p>
    <a class="button button--primary" href="{{ featured_project.cta.url }}">{{ featured_project.cta.label }}</a>
  </div>
  <div class="project-feature__details">
    <p class="card-label">THE WORKFLOW</p>
    <ol>
      {% for step in featured_project.workflow %}
        <li>{{ step }}</li>
      {% endfor %}
    </ol>
  </div>
</article>

<h2 id="more-projects-heading">More project work</h2>

<div class="card-grid card-grid--two">
  {% for project in site.data.projects.more %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>

## Developer tooling explorations

These smaller projects helped me learn how to work effectively with modern developer tools and AI-assisted workflows.

| Project | What I practiced |
| --- | --- |
| [Getting Started with GitHub Copilot](https://github.com/SKrger/skills-getting-started-with-github-copilot) | Explaining, planning, and developing code collaboratively with Copilot |
| [Integrate MCP with GitHub Copilot](https://github.com/SKrger/skills-integrate-mcp-with-copilot) | Extending an AI workflow with Model Context Protocol |

<script>
  function normalizeTag(value) {
    return (value || '').replace(/\+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function applyProjectTagFilter() {
    const params = new URLSearchParams(window.location.search);
    const activeTag = normalizeTag(params.get('tag') || '');
    const cards = Array.from(document.querySelectorAll('[data-project-card]'));
    const filterSummary = document.querySelector('.project-filter-summary');
    const filterValue = document.querySelector('[data-project-filter-value]');
    const clearLink = document.querySelector('[data-clear-tag-filter]');
    const pageContent = document.querySelector('.page__content');

    let emptyState = pageContent ? pageContent.querySelector('.project-filter-empty') : null;
    if (!emptyState) {
      emptyState = document.createElement('p');
      emptyState.className = 'project-filter-empty';
      emptyState.textContent = 'No projects match this tag yet.';
      emptyState.hidden = true;
      if (pageContent) pageContent.appendChild(emptyState);
    }

    if (!activeTag) {
      if (filterSummary) filterSummary.hidden = true;
      if (clearLink) clearLink.parentElement.hidden = true;
      cards.forEach(function (card) { card.hidden = false; });
      return;
    }

    let visible = 0;

    cards.forEach(function (card) {
      const tags = Array.from(card.querySelectorAll('[data-project-tag]')).map(function (tagNode) {
        return normalizeTag(tagNode.textContent || tagNode.dataset.projectTag || '');
      });

      const matchesTag = tags.includes(activeTag);
      card.hidden = !matchesTag;
      if (matchesTag) visible += 1;
    });

    if (filterSummary) {
      filterSummary.hidden = false;
      if (filterValue) filterValue.textContent = decodeURIComponent(params.get('tag') || '');
    }

    if (clearLink) clearLink.parentElement.hidden = false;
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyProjectTagFilter);
  } else {
    applyProjectTagFilter();
  }
</script>
