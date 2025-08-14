---
title: "Photography Gallery"
teaser: "A selection of my favorite photographs from various projects and moments."
thumbnail: "/assets/projects/01_img.jpg"
layout: page
order: 99
---

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
  column-count: 3;
  column-gap: 16px;
}

@media (max-width: 900px) {
  .gallery {
    column-count: 2;
  }
}

@media (max-width: 600px) {
  .gallery {
    column-count: 1;
  }
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 16px;
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