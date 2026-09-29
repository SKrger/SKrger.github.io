---
layout: single
title: ""
classes: wide
---

<section class="hero" data-reveal>
  <div class="hero__content" data-reveal>
    <p class="eyebrow">DATA ANALYST · PYTHON · SQL</p>
    <h1>Turning messy data into useful decisions.</h1>
    <p class="hero__lede">I'm Sally, a data analyst building practical data products and learning in public as I grow into data engineering and data science.</p>
    <div class="hero__actions">
      <a class="button button--primary" href="{{ '/projects/' | relative_url }}">Explore my projects</a>
      <a class="button button--secondary" href="{{ '/about/' | relative_url }}">More about me</a>
    </div>
  </div>
  <figure class="hero__portrait" data-reveal>
    <img src="{{ '/assets/images/sally-portrait-dark.jpg' | relative_url }}" alt="Sally Krüger smiling in a dark blazer">
  </figure>
</section>

<section class="intro-grid" data-reveal>
  <div>
    <p class="eyebrow">HOW I WORK</p>
    <h2>Curious, structured, and hands-on.</h2>
  </div>
  <p>I enjoy understanding the question behind the data, building a dependable path from source to insight, and documenting the decisions along the way. My portfolio combines analytical thinking with the engineering practices that make data work easier to trust and maintain.</p>
</section>

<section class="focus-panel" data-reveal>
  <div>
    <p class="eyebrow">CURRENT FOCUS</p>
    <h2>Building an end-to-end Eurostat data pipeline</h2>
    <p>I'm exploring ingestion, transformation, orchestration, and presentation with dlt, dbt, Dagster, and Streamlit.</p>
  </div>
  <a class="text-link" href="{{ '/projects/' | relative_url }}">See the case study <span aria-hidden="true">→</span></a>
</section>

<section class="home-section">
  <p class="eyebrow">SELECTED WORK</p>
  <div class="card-grid card-grid--three">
    {% for project in site.data.projects.homepage %}
      {% include project-card.html project=project reveal=true %}
    {% endfor %}
  </div>
</section>

<section class="contact-panel" data-reveal>
  <p class="eyebrow">LET'S CONNECT</p>
  <h2>Looking for a team where thoughtful data work has real impact.</h2>
  <p>If you're hiring for an analytical, technically curious teammate, I'd be glad to connect.</p>
  <a class="button button--primary" href="https://www.linkedin.com/in/sally-krger/">Connect on LinkedIn</a>
</section>
