---
layout: page
title:  "The Cutting-Edge World of 3D Representations"
date:   2024-12-20 16:21:00 +0530
categories: ["general"]
---

# WORK IN PROGRESS

The challenge of reconstructing three-dimensional structures from two-dimensional images has long been a complex problem in computer vision. Structure-from-Motion (SfM) provided an early pipeline to tackle this challenge, enabling 3D scene reconstruction from image sequences. However, the field underwent a paradigm shift in 2020 with the introduction of Neural Radiance Fields (NeRFs). This groundbreaking technique revolutionized 3D capture, offering an unprecedented level of realism by encoding volumetric radiance fields within neural networks.

NeRFs rapidly gained popularity, excelling in photorealistic rendering, particularly in scenarios with complex lighting and reflective surfaces. Following the explosion of NeRFs, a new method emerged in 2023: Gaussian Splatting. Unlike NeRFs, which rely on deep neural networks, Gaussian Splatting represents 3D scenes using point-based rendering with Gaussian primitives. This approach significantly reduces computational demands, allowing for faster training and rendering while maintaining high-quality visual fidelity.

For years, these cutting-edge techniques were accessible only to developers, as user-friendly tools were nearly nonexistent. Fast forward to today, and the landscape has changed dramatically. A variety of accessible tools have emerged, empowering beginners to explore 3D representations like Gaussian Splatting with ease. Each of these tools caters to different needs, from quick mobile captures to high-end processing on powerful GPUs. The growing accessibility of these applications marks a turning point for 3D scene representation. What once required extensive computational resources and technical expertise is now within reach for hobbyists, artists, and professionals alike. Let’s take a look at some of the most prominent options available.

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
