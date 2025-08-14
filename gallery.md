---
title: "Photography Gallery"
layout: default
---

# My Photography Gallery

Welcome to my gallery! Here I share my passion for photography. All images are from my own projects and moments.

<div class="gallery">
  {% assign photos = site.static_files | where_exp: "file", "file.path contains 'assets/photography/'" %}
  {% for photo in photos %}
    <div class="gallery-item">
      <img src="{{ photo.path | relative_url }}" alt="Photography image" />
    </div>
  {% endfor %}
</div>

<style>
.gallery {
  display: grid;
  grid-template-columns: 1fr !important;
  gap: 16px;
}

.gallery-item {
  width: 100%;
  display: block;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: block;
}
</style> 