---
layout: page
title:  "The Cutting-Edge World of 3D Representations: Tools, Techniques, and More"
date:   2024-12-20 16:21:00 +0530
categories: ["general"]
---

# WORK IN PROGRESS

Photogrammetry and tools like Metashape are well-known and have been around for quite some time. But since the groundbreaking Neural Radiance Fields (NeRFs) paper in 2021, the game has changed. Suddenly, there were new methods to capture 3D scenes with unprecedented realism. The challenge? For a long time, these techniques were so cutting-edge that only developers could experiment with them – no user-friendly tools in sight.

Fast forward to today, and the landscape looks very different. A variety of tools have emerged, making it easier than ever for non-developers to dive into the world of 3D representations like NeRFs and Gaussian Splattings. In this blog post, I’ll take a closer look at these tools, evaluate their strengths and weaknesses, and show how they’re pushing 3D representation to new heights. This blog aims to answer the question: What’s possible with Gaussian Splattings as of today? Let’s find out!

## Scaniverse - Free 3D Scanner - Gaussian Splatting for iOS

When it comes to capturing the world in 3D, Scaniverse stands out as a game-changer. This app doesn’t just create 3D models with your iPhone or iPad – it takes things a step further. Using cutting-edge Gaussian Splattings, Scaniverse can process a high-quality 3D scene directly on an iPad in just two minutes. And the best part? It doesn’t rely on cloud processing – everything happens locally, keeping your data private and the workflow fast.

<video class="scaniverse" width="80%" controls autoplay loop>
  <source src="{{ '/assets/2024-12-20/scaniverse_canon.mp4' | prepend: site.baseurl }}" type="video/mp4">
Your browser does not support the video tag.
</video>

But the magic doesn’t stop there. Scaniverse allows you to export your models as PLY files, opening the door to advanced editing in tools like Blender or other 3D software. This makes it not only an excellent scanning app but also a versatile tool for creators looking to take their projects to the next level.

## KIRI Engine: 3D Scanner App for iPhone, Android and Web

KIRI Engine continues to push the boundaries of 3D scanning by offering tools like 3D Gaussian Splatting (3DGS) and its improved 3DGS to Mesh 2.0 pipeline. This update enhances the conversion of Gaussian splats into surface meshes with better handling of reflective and transparent materials, thanks to advanced normal prediction and reflection removal techniques. KIRI Engine supports multiple export formats for meshes (OBJ, PLY, GLTF, and more), and a .ply file for gaussian splattings. 

A highlight of KIRI Engine is its new masking functionality, which automatically removes backgrounds from 3DGS models. This feature is designed to help create cleaner outputs, perfect for isolated objects. However, as shown in the images below, the app mistakenly includes the books in the object rather than recognizing them as part of the background. Additionally, the quality of the Gaussian Splats appears lower compared to Scaniverse. 

<div style="display: flex; justify-content: center; gap: 10px;">
  <img width="30%" src="{{ '/assets/2024-12-20/KIRI_engine.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
  <img width="30%" src="{{ '/assets/2024-12-20/KIRI_engine_blur.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
</div>
