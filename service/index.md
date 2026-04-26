---
layout: page
title: Talks & Service
permalink: /service/
---

<div class="entries paginated" data-page-size="3">
  {% for item in site.service %}
  <article class="entry">
    <div class="entry-head">
      <h2 class="entry-title">
        {% if item.website and item.website != "" %}
          <a href="{{ item.website }}" target="_blank" rel="noopener">{{ item.title }}</a>
        {% else %}
          {{ item.title }}
        {% endif %}
      </h2>
      {% if item.duration %}<span class="entry-duration">{{ item.duration }}</span>{% endif %}
    </div>
    {% if item.tagline %}<span class="entry-meta">{{ item.tagline }}</span>{% endif %}
    <div class="entry-body">
      {{ item.content }}
    </div>
  </article>
  {% endfor %}
</div>
