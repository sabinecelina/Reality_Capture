---
layout: page
title:  "⁠Getting Started with Gaussian Splatting: Tools for Beginners"
date:   2025-03-01 16:21:00 +0530
categories: ["general"]
---

Curious about Gaussian Splatting but unsure where to start? You’re not alone. This tutorial is here to guide you - whether you’re just curious or ready to create your own Gaussian Splatting models. I will show you how to get started quickly and easily, helping you explore different tools and methods to generate stunning 3D representations with minimal effort.

## Getting Started Is Easier Than You Think

You don’t need to be an expert to start with Gaussian Splatting. No overwhelming setups, no complex installations, and definitely no PhD required. This guide will walk you through everything—step by step, with practical tools that help you create stunning 3D models effortlessly.

### **TL;DR Which Tool Should You Use? - A brief overview**  

If you want a **quick and free** way to experiment, **Scaniverse or Polycam Web** are great starting points. For those needing **higher-quality outputs** with additional control, **Luma AI or KIRI Engine** are strong choices. If **local processing is a must**, then **Postshot** is the best solution—especially for users with an RTX GPU.  

## Scaniverse – The Easiest Way to Splat (iOS & Android)

Want a fast, no-fuss way to generate a Gaussian Splat on your phone? Scaniverse is your new best friend.

**Why Scaniverse?**
- Super simple: Open the app, scan, done.
- Runs locally: No cloud processing, no privacy concerns.
- Works on both Android & iOS.
- editing options like cropping, scaling, and adjustments before export 

Bonus: You can export the gaussian splatting scans as PLY files, making it easy to refine in Blender, Unity, or Unreal Engine.
<div style="display: flex; justify-content: center; margin: 10px 0;"> <a style="justify-content: center;" href="https://scaniverse.com/scan/jc6wzmsom6tlplx6" target="_blank">Watch an interactive example here</a></div>
<video class="scaniverse" width="80%" controls autoplay loop muted> <source src="{{ '/assets/2024-12-20/scaniverse_canon.mp4' | prepend: site.baseurl }}" type="video/mp4"> Your browser does not support the video tag. </video>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Rendered video of a scan made by scaniverse</i>
</div>

If you're looking for a quick and accessible way to experiment with Gaussian Splatting, Scaniverse is a great place to start.

## Polycam – Web-Based Simplicity

Polycam is a 3D scanning tool that offers a web based way to generate Gaussian Splattings. Just upload images on the webpage for cloud-based Gaussian Splatting generation. However, exporting scans in multiple formats requires a professional subscription.

**Why Polycam?**

- Browser-based – No downloads required
- Supports up to 200 images for high-quality scans
- Includes measurement tools for accurate dimensions
- editing options like cropping, scaling, and adjustments before export 

<div style="display: flex; justify-content: center; margin: 20px 0;"> 
<a style="justify-content: center;" href="https://poly.cam/capture/15725918-56a8-4010-b522-f97b9db69a69">Watch the example here</a> </div>
<video class="scaniverse" width="80%" controls autoplay loop muted> <source src="{{ '/assets/2024-12-20/polycam.mov' | prepend: site.baseurl }}" type="video/mp4"> Your browser does not support the video tag. </video>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Screencast from the Polycam web-page</i></div>


# LUMA AI - More Power, but with Cloud Processing

Luma AI makes Gaussian Splatting accessible with a simple capture process. Unlike Scaniverse, it processes data in the cloud, taking about 20 to 30 minutes before delivering the final model. Originally focused on NeRFs, Luma AI switched to Gaussian Splatting for faster rendering and better compatibility. If you don’t mind waiting a bit, Luma AI gives you high-quality Gaussian Splats by processing everything in the cloud.

### Why LUMA AI
- Cloud-based processing (takes 20-30 min per scan)
- Supports iOS & Android
- Multiple export formats: OBJ, USDZ, GB, PLY

<div style="display: flex; justify-content: center; margin: 20px 0;"> 
<iframe src="https://lumalabs.ai/embed/4d69d7d9-5dd5-41af-a5cc-e542184d8bd3?mode=video&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=true" width="375" height="500" frameborder="0" title="luma embed" style="border: none;"></iframe></div>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Interactive demo of a scan made by LUMA AI</i></div>

## KIRI Engine – When You Need Pro-Level Mesh Conversion

The KIRI Engine app offers 3DGS along with a **Mesh 2.0 pipeline**, improving the conversion of Gaussian splats into detailed meshes. This update enhances handling of reflective and transparent materials using advanced normal prediction and reflection removal techniques.  

### Why KIRI Engine
- Automatic background removal: Helps isolate objects, though it can misidentify certain elements as part of the scene.  
- High mesh quality
- Cloud-based processing
- Adjustable lighting and contrast: Allows fine-tuning of scans for better results.  
- Export options: Supports **OBJ, PLY, GLTF** for meshes and `.ply` for Gaussian Splats.  

KIRI Engine is a powerful tool for users who need high-quality meshes from Gaussian Splats, but its reliance on cloud computing and paid access model (€90/year to unlock 3DGS) make it less accessible compared to free alternatives like Scaniverse.

<div style="display: flex; justify-content: center; gap: 10px;">
  <img width="50%" src="{{ '/assets/2024-12-20/KIRI_engine.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
  <img width="50%" src="{{ '/assets/2024-12-20/KIRI_engine_blur.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
</div>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Screenshots of a mesh generated by the KIRI Engine</i></div>

## Postshot – Desktop Power for NVIDIA Users

Postshot is a powerful desktop software designed for creating photorealistic 3D scenes using Neural Radiance Fields (NeRFs) and Gaussian Splatting. Unlike mobile apps that rely on cloud processing, everything runs locally, giving users full control over their data.

### Why Postshot
- Works with any camera – Capture scenes with your camera and process them on your PC.
- Live preview during training – Watch the 3D representation take shape in real time.
- Full local processing – No cloud uploads, ensuring faster iteration and data privacy.
- Advanced editing tools – Adjust lighting, contrast, and cropping within the software.
- Export support – Compatible with Blender, Unreal Engine, After Effects, and more.
- Camera position export/import – Maintain precise framing for seamless integration into other workflows.

Postshot is ideal for users with an Nvidia RTX GPU who want to process 3D representations without relying on cloud-based services. Simply capture a scene with your phone and load it into Postshot to start experimenting.

<video class="scaniverse" width="80%" controls autoplay loop muted> <source src="{{ '/assets/2024-12-20/postshot.mp4' | prepend: site.baseurl }}" type="video/mp4"> Your browser does not support the video tag. </video>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Screencast from the Postshot application</i></div>

## **Conclusion – Which Gaussian Splatting Tool is Right for You?**  

Gaussian Splatting has opened up new possibilities for **fast, high-quality 3D scene reconstruction**, and there are now several tools available, each catering to different needs. Whether you prioritize ease of use, processing speed, or export flexibility, there’s an option for you.  

### **The Future of Gaussian Splatting**  

With more tools adopting Gaussian Splatting over traditional NeRFs, it’s clear that this method is gaining traction for real-time rendering and interactive 3D applications. As the technology continues to evolve, we can expect even more efficient workflows, better integrations, and improved accessibility across devices and platforms.  

No matter which tool you choose, **Gaussian Splatting is making 3D scanning more powerful and flexible than ever before.** Now it’s your turn—pick a tool, start experimenting, and see what you can create!