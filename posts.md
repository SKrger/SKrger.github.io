---
layout: page
title: Posts
permalink: /posts/
---

Some notes and things I'm learning about.


<ul>
{% for post in site.posts %}
    <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  </article>
{% endfor %}
</ul>

