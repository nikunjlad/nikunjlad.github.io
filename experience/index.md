---
layout: page
title: Experience
---


<div class="experience">
  {% for exp in site.experience %}
  <div class="exp post">
      <span id="textbox">
          <h2 class="exp-title post-title alignleft">
            {{ exp.title }}
          </h2>
        <div class="alignright">{{ exp.duration }}</div>
      </span>
      <span style="clear: both;" class="exp-tagline post-date">
        {{ exp.tagline }}
      </span>
    {{ exp.content }}
  </div>
  {% endfor %}
</div>