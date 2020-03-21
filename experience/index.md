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
        <div class="alignright">Jan 2019</div>
      </span>
      <span style="clear: both;" class="exp-tagline post-date">
        {{ exp.tagline }}
      </span>
      
       
    {{ exp.content }}


  </div>
  {% endfor %}
</div>

<!--
<div class="experience">
  {% for exp in site.experience %}
  <div class="exp post">
    <div id="textbox">
        <h2 class="exp-title post-title alignleft">
            {{ exp.title }}
        </h2>
        <h5 class="alignright">Jan 2019</h5>h5>
    </div>
    <span class="project-tagline post-date">
        {{ project.tagline }}
    </span>

    {{ project.content }}


  </div>
  {% endfor %}
</div>
-->