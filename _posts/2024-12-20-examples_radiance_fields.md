---
layout: page
title:  "The Cutting-Edge World of 3D Representations"
date:   2024-12-20 16:21:00 +0530
categories: ["general"]
---

# WORK IN PROGRESS

Heard about Gaussian Splatting? It’s everywhere, right? You look it up, get a rough idea, but have no clue where to start. Every tutorial tells you to install Nerfstudio or some other mysterious tool - just to create a single splat. Frustrating? I got you. Let’s explore the Gaussian Splatting ecosystem together, figure out what works easily, and get you started without the hassle.

If you’re reading this, you probably already have some clue, but let’s make sure we’re on the same page. Instead of using points or meshes, a scene is represented as thousands of 3D Gaussians. Each Gaussian has a position, orientation, scale, color, and transparency. They get blended naturally in rendering, avoiding gaps and noisy artifacts. Unlike NeRFs, which store scene information implicitly inside a neural network (meaning you need a model to "decode" the scene every time you want to render it), Gaussians are explicit.

This means:
- No black-box neural networks needed at inference time
- Faster rendering because there’s no complex function evaluation
- Direct manipulation – want to tweak the splats? Just edit them like pixels

In short: Gaussians give you full control over the data, while NeRFs are more like magic boxes that you have to ask nicely to show you an image.

So, let’s explore the tool landscape of Gaussian Splatting together. 

## Scaniverse - Gaussian Splatting for your Phone
If you want to create a Gaussian Splat without dealing with complex GitHub repositories or command-line setups, Scaniverse is an excellent choice. It lets you generate high-quality splats directly on your phone in just a few minutes.

*Why Scaniverse?*
- Simple and fast – Download the app, scan an object or scene, and generate a Gaussian Splat in no time.
- Works on Android and iOS – No need for a high-end PC or specialized hardware.
- No cloud processing – Everything happens locally on your device, meaning:
  - No long waiting times for cloud servers
  - Full control over your data and privacy

<video class="scaniverse" width="80%" controls autoplay loop muted> <source src="{{ '/assets/2024-12-20/scaniverse_canon.mp4' | prepend: site.baseurl }}" type="video/mp4"> Your browser does not support the video tag. </video> <div style="display: flex; justify-content: center; margin: 20px 0;"> <a style="justify-content: center;" href="https://scaniverse.com/scan/jc6wzmsom6tlplx6">Watch the example here</a> </div>

Scaniverse does more than just quick scans. It allows you to export models as PLY files, making it easy to refine and enhance them in Blender, Unity, or other 3D software. Whether you are a hobbyist or a professional, this feature opens the door to more advanced editing and creative possibilities.

If you're looking for a quick and accessible way to experiment with Gaussian Splatting, Scaniverse is a great place to start.

## KIRI Engine: 3D Scanner App for iPhone, Android and Web

KIRI Engine continues to push the boundaries of 3D scanning by offering tools like 3D Gaussian Splatting (3DGS) and its improved 3DGS to Mesh 2.0 pipeline. This update enhances the conversion of Gaussian splats into surface meshes with better handling of reflective and transparent materials, thanks to advanced normal prediction and reflection removal techniques. KIRI Engine supports multiple export formats for meshes (OBJ, PLY, GLTF, and more), and a .ply file for gaussian splattings. 

A highlight of KIRI Engine is its new masking functionality, which automatically removes backgrounds from 3DGS models. This feature is designed to help create cleaner outputs, perfect for isolated objects. However, as shown in the images below, the app mistakenly includes the books in the object rather than recognizing them as part of the background. Additionally, the quality of the Gaussian Splats appears lower compared to Scaniverse. 

<div style="display: flex; justify-content: center; gap: 10px;">
  <img width="30%" src="{{ '/assets/2024-12-20/KIRI_engine.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
  <img width="30%" src="{{ '/assets/2024-12-20/KIRI_engine_blur.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
</div>
