---
layout: page
title: Projects
---

<div class="project-list">
  {% assign sorted_projects = site.projects | sort: "order" %}
  {% for project in sorted_projects %}
    {% capture direction %}{% cycle '', 'reverse' %}{% endcapture %}
    <div class="project-entry {{ direction }}">
      <a href="{{ project.url | prepend: site.baseurl }}">
        <img class="project-thumb" src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }} thumbnail">
      </a>
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.teaser }}</p>
        <a class="read-more" href="{{ project.url | prepend: site.baseurl }}">→ Read more</a>
      </div>
    </div>
  {% endfor %}
</div>
