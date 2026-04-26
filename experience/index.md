---
layout: page
title: Experience
---

<div class="entries paginated" data-page-size="3">
  {% for exp in site.experience %}
  <article class="entry">
    <div class="entry-head">
      <h2 class="entry-title">
        {% if exp.website %}
          <a href="{{ exp.website }}" target="_blank" rel="noopener">{{ exp.title }}</a>
        {% else %}
          {{ exp.title }}
        {% endif %}
      </h2>
      {% if exp.duration %}<span class="entry-duration">{{ exp.duration }}</span>{% endif %}
    </div>
    {% if exp.tagline %}<span class="entry-meta">{{ exp.tagline }}</span>{% endif %}
    <div class="entry-body">
      {{ exp.content }}
    </div>
  </article>
  {% endfor %}
</div>
