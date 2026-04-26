---
layout: page
title: Publications
---

<div class="entries">
  {% for publication in site.publications %}
  <article class="entry">
    <h2 class="entry-title">
      {% if publication.website %}
        <a href="{{ publication.website }}" target="_blank" rel="noopener">{{ publication.title }}</a>
      {% else %}
        {{ publication.title }}
      {% endif %}
    </h2>
    {% if publication.tagline %}<span class="entry-meta">{{ publication.tagline }}</span>{% endif %}
    <div class="entry-body">
      {{ publication.content }}
    </div>
    {% if publication.skills %}
    <div class="entry-tags">
      {% for skill in publication.skills %}<span class="tag">{{ skill }}</span>{% endfor %}
    </div>
    {% endif %}
  </article>
  {% endfor %}
</div>
