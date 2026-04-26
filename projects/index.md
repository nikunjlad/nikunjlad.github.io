---
layout: page
title: Projects
permalink: /projects/
---

A mix of computer-vision, deep-learning, and classical machine-learning work
— spanning research, course projects, and side experiments.

<div class="entries paginated" data-page-size="3">
  {% assign all_projects = site.cvprojects | concat: site.dsprojects %}
  {% for project in all_projects %}
    {%- comment -%}
    Pull the cover image src out of the project body (or use frontmatter `image:`
    if set) AND remove that <img> tag from the rendered content so it doesn't
    show twice. Robust to img attached to text in same paragraph.
    {%- endcomment -%}
    {%- assign img_src = project.image -%}
    {%- assign body_content = project.content -%}
    {%- if img_src == nil or img_src == "" -%}
      {%- if project.content contains "<img" -%}
        {%- assign img_attrs = project.content | split: "<img" | last | split: ">" | first -%}
        {%- assign img_src = img_attrs | split: 'src="' | last | split: '"' | first -%}
        {%- assign full_img_tag = "<img" | append: img_attrs | append: ">" -%}
        {%- assign body_content = project.content | replace: full_img_tag, "" -%}
      {%- endif -%}
    {%- endif -%}
  <article class="entry{% if img_src and img_src != '' %} entry-has-image{% endif %}">
    <h2 class="entry-title">
      {% if project.website %}
        <a href="{{ project.website }}" target="_blank" rel="noopener">{{ project.title }}</a>
      {% else %}
        {{ project.title }}
      {% endif %}
    </h2>
    {% if project.tagline %}<span class="entry-meta">{{ project.tagline }}</span>{% endif %}
    {% if img_src and img_src != "" %}
    <div class="entry-main">
      <a class="entry-image" href="{{ project.website }}" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">
        <img src="{{ img_src }}" alt="" loading="lazy">
      </a>
      <div class="entry-body-wrap">
        <div class="entry-body">
          {{ body_content }}
        </div>
        {% if project.skills %}
        <div class="entry-tags">
          {% for skill in project.skills %}<span class="tag">{{ skill }}</span>{% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
    {% else %}
    <div class="entry-body">
      {{ body_content }}
    </div>
    {% if project.skills %}
    <div class="entry-tags">
      {% for skill in project.skills %}<span class="tag">{{ skill }}</span>{% endfor %}
    </div>
    {% endif %}
    {% endif %}
  </article>
  {% endfor %}
</div>
