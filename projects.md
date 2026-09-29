---
layout: single
title: "Projects"
permalink: /projects/
classes: wide
---

These projects show how I approach a problem from source data to a usable result. They are deliberately end-to-end: I want to understand not only the analysis, but also the workflow that makes it repeatable.

<p id="project-filter-status" class="project-filter-status" role="status" aria-live="polite">Select a technology tag to filter projects.</p>
<button id="project-filter-reset" class="project-filter-reset" type="button" hidden>Show all projects</button>

<h2 id="featured-project-heading">Featured project</h2>

<article class="project-feature" data-reveal>
  <div>
    <p class="eyebrow">IN PROGRESS · DATA ENGINEERING</p>
    <h2>European Economic Data Pipeline</h2>
    <p class="project-feature__summary">A complete pipeline for collecting, transforming, and analyzing public statistical data from Eurostat.</p>
    <p>The project is a practical way to learn modern data engineering patterns: ingesting external data with dlt, orchestrating jobs with Dagster, modeling with dbt, and presenting results in Streamlit.</p>
    <p class="tag-list"><button class="project-tag" type="button" aria-pressed="false">Python</button><button class="project-tag" type="button" aria-pressed="false">Eurostat</button><button class="project-tag" type="button" aria-pressed="false">dlt</button><button class="project-tag" type="button" aria-pressed="false">Dagster</button><button class="project-tag" type="button" aria-pressed="false">dbt</button><button class="project-tag" type="button" aria-pressed="false">Streamlit</button></p>
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

<div id="more-projects-grid" class="card-grid card-grid--two">
  <article class="project-card" data-reveal>
    <p class="card-label">AI DATA TOOL · IN PROGRESS</p>
    <h3>Natural Language to SQL Assistant</h3>
    <p>A Streamlit assistant that turns plain-language questions into SQL and helps users explore data through a more accessible interface.</p>
    <p class="tag-list"><button class="project-tag" type="button" aria-pressed="false">Python</button><button class="project-tag" type="button" aria-pressed="false">Streamlit</button><button class="project-tag" type="button" aria-pressed="false">DuckDB</button><button class="project-tag" type="button" aria-pressed="false">LLM</button></p>
    <a class="text-link" href="https://github.com/SKrger/nl-to-sql-assistant">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
  <article class="project-card" data-reveal>
    <p class="card-label">NOSQL DATA PRODUCT · IN DEVELOPMENT</p>
    <h3>Activity Tracker</h3>
    <p>A personal activity dashboard for recording time, exploring categories, and learning how to design a practical MongoDB application.</p>
    <p class="tag-list"><button class="project-tag" type="button" aria-pressed="false">Python</button><button class="project-tag" type="button" aria-pressed="false">MongoDB</button><button class="project-tag" type="button" aria-pressed="false">PyMongo</button><button class="project-tag" type="button" aria-pressed="false">Streamlit</button><button class="project-tag" type="button" aria-pressed="false">Docker</button></p>
    <a class="text-link" href="https://github.com/SKrger/activity-tracker-nosql">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
  <article class="project-card" data-reveal>
    <p class="card-label">LEARNING PROJECT · JUST STARTED</p>
    <h3>NYC Taxi with PySpark</h3>
    <p>An early-stage project using NYC taxi data to learn Apache Spark and build practical experience with PySpark data processing.</p>
    <p class="tag-list"><button class="project-tag" type="button" aria-pressed="false">Python</button><button class="project-tag" type="button" aria-pressed="false">PySpark</button><button class="project-tag" type="button" aria-pressed="false">Apache Spark</button><button class="project-tag" type="button" aria-pressed="false">Data processing</button></p>
    <a class="text-link" href="https://github.com/SKrger/nyc-taxi-pyspark">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
  <article class="project-card" data-reveal>
    <p class="card-label">DATA PRODUCT</p>
    <h3>Movie Review Explorer</h3>
    <p>An end-to-end ETL project designed around an interactive Streamlit experience for exploring movie review data.</p>
    <p class="tag-list"><button class="project-tag" type="button" aria-pressed="false">Dagster</button><button class="project-tag" type="button" aria-pressed="false">dbt</button><button class="project-tag" type="button" aria-pressed="false">Streamlit</button></p>
    <span class="project-status">Project details coming soon</span>
  </article>
  <article class="project-card" data-reveal>
    <p class="card-label">PRACTICE PROJECT</p>
    <h3>dbt Fundamentals exercises</h3>
    <p>Practice work following dbt Fundamentals and related courses, with a focus on transformation and analytical modeling.</p>
    <p class="tag-list"><button class="project-tag" type="button" aria-pressed="false">dbt</button><button class="project-tag" type="button" aria-pressed="false">SQL</button><button class="project-tag" type="button" aria-pressed="false">Data modeling</button></p>
    <a class="text-link" href="https://github.com/SKrger/dbt-Fundamentals-dbt-Studio-">View on GitHub <span aria-hidden="true">→</span></a>
  </article>
</div>

## Developer tooling explorations

These smaller projects helped me learn how to work effectively with modern developer tools and AI-assisted workflows.

| Project | What I practiced |
| --- | --- |
| [Getting Started with GitHub Copilot](https://github.com/SKrger/skills-getting-started-with-github-copilot) | Explaining, planning, and developing code collaboratively with Copilot |
| [Integrate MCP with GitHub Copilot](https://github.com/SKrger/skills-integrate-mcp-with-copilot) | Extending an AI workflow with Model Context Protocol |

<script src="{{ '/assets/js/project-filter.js' | relative_url }}" defer></script>
