---
layout: page
title: Experience
---


<div class="experience">
  {% for exp in site.experience %}
  <div class="exp post">
      <!-- <span id="textbox">0 -->
        <div style="overflow: auto;">  
          <h2 class="exp-title post-title alignleft">
            <a href="{{ exp.website }}" target="_blank">{{ exp.title }}</a>
          </h2>
          <div class="alignright">{{ exp.duration }}</div>
        </div>
      <!-- </span> -->
      <span class="exp-tagline post-date">
        {{ exp.tagline }}
      </span>
    {{ exp.content }}
  </div>
  {% endfor %}
</div>