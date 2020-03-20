---
layout: page
title: Publications
---

<div class="publications">
  {% for publication in site.publications %}
  <div class="publication post">
    <h2 class="publication-title post-title">
      <a href="{{ publication.website }}">
        {{ publication.title }}
      </a>
    </h2>
    <span class="publication-tagline post-date">
        {{ publication.tagline }}
    </span>

    {{ publication.content }}


  </div>
  {% endfor %}
</div>
