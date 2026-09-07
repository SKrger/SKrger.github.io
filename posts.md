---

layout: single
title: Posts
permalink: /posts/
---

Some notes and things I'm learning about while building data projects and improving my Python workflow.

<div class="card-grid card-grid--two">
{% for post in site.posts %}
 <article class="project-card post-card">
 <h2>
   <a href="{{ post.url }}">{{ post.title }}</a>
 </h2>

 <p class="card-label">{{ post.date | date: "%B %Y" }}</p>

 <p>{{ post.excerpt }}</p>

 <a class="text-link" href="{{ post.url }}">Read more <span aria-hidden="true">→</span></a>
</article>
{% endfor %}
</div>
