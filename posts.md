---

layout: single
title: Posts
permalink: /posts/
---

Some notes and things I'm learning about.


<ul>
{% for post in site.posts %}
    <article class="post-card">
  <h2>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h2>

  <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>

  <p>{{ post.excerpt }}</p>

  <a href="{{ post.url }}">Read more →</a>
  <br><br><br>
</article>
{% endfor %}
</ul>

