---
layout: page
title: Posts
permalink: /posts/
---

Some notes and things I'm learning about.


<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

