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

<article class="project-feature" data-project-card="true">
  <div>
    <p class="eyebrow">IN PROGRESS · DATA ENGINEERING</p>
    <h2>European Economic Data Pipeline</h2>
    <p class="project-feature__summary">A complete pipeline for collecting, transforming, and analyzing public statistical data from Eurostat.</p>
    <p>The project is a practical way to learn modern data engineering patterns: ingesting external data with dlt, orchestrating jobs with Dagster, modeling with dbt, and presenting results in Streamlit.</p>
    <p class="tag-list"><a href="{{ '/projects/' | relative_url }}?tag={{ 'Python' | url_encode }}" data-project-tag="Python">Python</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Eurostat' | url_encode }}" data-project-tag="Eurostat">Eurostat</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'dlt' | url_encode }}" data-project-tag="dlt">dlt</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Dagster' | url_encode }}" data-project-tag="Dagster">Dagster</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'dbt' | url_encode }}" data-project-tag="dbt">dbt</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Streamlit' | url_encode }}" data-project-tag="Streamlit">Streamlit</a></p>
    <a class="button button--primary" href="https://github.com/SKrger/eurostat_data">View on GitHub</a>
  </div>
  <div class="project-feature__details">
    <p class="card-label">THE WORKFLOW</p>
    <ol>
      <li>Collect public economic indicators</li>
      <li>Transform and validate the data</li>
      <li>Orchestrate repeatable runs</li>
      <li>Make the results explorable</li>
    </ol>
  </div>
</article>

<h2 id="more-projects-heading">More project work</h2>

<div class="card-grid card-grid--two">
  <article class="project-card" data-project-card="true">
    <p class="card-label">AI DATA TOOL · IN PROGRESS</p>
    <h3>Natural Language to SQL Assistant</h3>
    <p>A Streamlit assistant that turns plain-language questions into SQL and helps users explore data through a more accessible interface.</p>
    <p class="tag-list"><a href="{{ '/projects/' | relative_url }}?tag={{ 'Python' | url_encode }}" data-project-tag="Python">Python</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Streamlit' | url_encode }}" data-project-tag="Streamlit">Streamlit</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'DuckDB' | url_encode }}" data-project-tag="DuckDB">DuckDB</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'LLM' | url_encode }}" data-project-tag="LLM">LLM</a></p>
    <a class="text-link" href="https://github.com/SKrger/nl-to-sql-assistant">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
  <article class="project-card" data-project-card="true">
    <p class="card-label">NOSQL DATA PRODUCT · IN DEVELOPMENT</p>
    <h3>Activity Tracker</h3>
    <p>A personal activity dashboard for recording time, exploring categories, and learning how to design a practical MongoDB application.</p>
    <p class="tag-list"><a href="{{ '/projects/' | relative_url }}?tag={{ 'Python' | url_encode }}" data-project-tag="Python">Python</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'MongoDB' | url_encode }}" data-project-tag="MongoDB">MongoDB</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'PyMongo' | url_encode }}" data-project-tag="PyMongo">PyMongo</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Streamlit' | url_encode }}" data-project-tag="Streamlit">Streamlit</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Docker' | url_encode }}" data-project-tag="Docker">Docker</a></p>
    <a class="text-link" href="https://github.com/SKrger/activity-tracker-nosql">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
  <article class="project-card" data-project-card="true">
    <p class="card-label">LEARNING PROJECT · JUST STARTED</p>
    <h3>NYC Taxi with PySpark</h3>
    <p>An early-stage project using NYC taxi data to learn Apache Spark and build practical experience with PySpark data processing.</p>
    <p class="tag-list"><a href="{{ '/projects/' | relative_url }}?tag={{ 'Python' | url_encode }}" data-project-tag="Python">Python</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'PySpark' | url_encode }}" data-project-tag="PySpark">PySpark</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Apache Spark' | url_encode }}" data-project-tag="Apache Spark">Apache Spark</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Data processing' | url_encode }}" data-project-tag="Data processing">Data processing</a></p>
    <a class="text-link" href="https://github.com/SKrger/nyc-taxi-pyspark">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
  <article class="project-card" data-project-card="true">
    <p class="card-label">DATA PRODUCT</p>
    <h3>Movie Review Explorer</h3>
    <p>An end-to-end ETL project designed around an interactive Streamlit experience for exploring movie review data.</p>
    <p class="tag-list"><a href="{{ '/projects/' | relative_url }}?tag={{ 'Python' | url_encode }}" data-project-tag="Python">Python</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Dagster' | url_encode }}" data-project-tag="Dagster">Dagster</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'dbt' | url_encode }}" data-project-tag="dbt">dbt</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Streamlit' | url_encode }}" data-project-tag="Streamlit">Streamlit</a></p>
    <span class="project-status">Project details coming soon</span>
  </article>
  <article class="project-card" data-project-card="true">
    <p class="card-label">PRACTICE PROJECT</p>
    <h3>dbt Fundamentals exercises</h3>
    <p>Practice work following dbt Fundamentals and related courses, with a focus on transformation and analytical modeling.</p>
    <p class="tag-list"><a href="{{ '/projects/' | relative_url }}?tag={{ 'dbt' | url_encode }}" data-project-tag="dbt">dbt</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'SQL' | url_encode }}" data-project-tag="SQL">SQL</a><a href="{{ '/projects/' | relative_url }}?tag={{ 'Data modeling' | url_encode }}" data-project-tag="Data modeling">Data modeling</a></p>
    <a class="text-link" href="https://github.com/SKrger/dbt-Fundamentals-dbt-Studio-">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
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
