---
layout: page
title:  "The Cutting-Edge World of 3D Representations"
date:   2025-03-01 16:21:00 +0530
categories: ["general"]
---

Curious about Gaussian Splatting but unsure where to start? You’re not alone.  

A key reason why **Gaussian Splatting** is gaining traction? **Performance.** Unlike traditional 3D meshes or AI-powered NeRFs, Gaussian Splats can render over **1 million points in real time**—even on mobile devices. That’s lightning-fast compared to methods that rely on expensive rendering pipelines or AI inference. But it’s not just about speed. **Gaussian Splatting excels at capturing real-world materials where traditional geometry falls short:**  

- **Handles “fuzzy” objects** – Hair, fur, smoke, clouds, grass? Gaussian Splats blend them naturally.  
- **No rigid surfaces** – Unlike meshes with hard boundaries, Gaussians allow for soft, organic transitions.  
- **Optimized for real-time applications** – Ideal for games, VR, AR, and interactive 3D without the heavy computational cost of NeRFs.  

## How does it compare to Photogrammetry and NeRFs?  
- **Photogrammetry (OBJ + texture)** → Produces detailed 3D meshes but struggles with soft, fuzzy, or transparent objects.  
- **NeRFs (neural networks)** → AI-powered 3D reconstructions with realistic lighting but require a trained model for rendering.  
- **Gaussian Splatting (PLY + colors)** → Uses thousands of tiny Gaussians to represent scenes, handling complex materials (hair, clouds, grass) better than traditional meshes.  

## The Common Thread: Structure from Motion (SfM)  

No matter which method you choose, **it all starts with SfM**—the foundation of modern 3D reconstruction:  

- **Photogrammetry** → Converts sparse point clouds into dense meshes (**RealityCapture**, **Agisoft Metashape**).  
- **NeRFs** → Uses camera parameters to train a neural network (**Instant-NGP**).  
- **Gaussian Splatting** → Optimizes Gaussian splats from a sparse cloud (**Postshot**, **Luma AI**, **Scaniverse**).  

Tools like **Colmap** and **RealityCapture** are widely used across these workflows, as they extract crucial camera intrinsics & extrinsics for NeRFs and Gaussian Splatting alike.  

## The Best Part? You Don’t Need to Be an Expert  

Getting started is easier than you think. This guide will walk you through everything—**step by step, without the tech overwhelm.** No endless installations, no PhD required. Just practical tools and a fast track to creating stunning 3D representations.  

**Ready to dive in? Let’s go.**  


### **Which Tool Should You Use? - A brief overview**  

- **For the fastest, easiest experience** → **Scaniverse** (local processing, quick results)  
- **For advanced cloud-based reconstruction** → **Luma AI** (high-quality outputs)  
- **For professional mesh conversion** → **KIRI Engine** (detailed outputs, but requires a subscription)  
- **For full local control and real-time training** → **Postshot** (best for users with an Nvidia GPU)  
- **For browser-based Gaussian Splatting** → **Polycam** (web app, easy entry point)  

If you want a **quick and free** way to experiment, **Scaniverse or Polycam Web** are great starting points. For those needing **higher-quality outputs** with additional control, **Luma AI or KIRI Engine** are strong choices. If **local processing is a must**, then **Postshot** is the best solution—especially for users with an RTX GPU.  

# Let’s Dive In – A Closer Look at Each Tool

Now that you have a bird’s-eye view, let’s break it down: how each tool works, what it’s best for, and how you can start using it today.

## Scaniverse – The Easiest Way to Splat (iOS & Android)

Want a fast, no-fuss way to generate a Gaussian Splat on your phone? Scaniverse is your new best friend.

**Why Scaniverse?**
- Super simple: Open the app, scan, done.
- Runs locally: No cloud processing, no privacy concerns.
- Works on both Android & iOS.

Bonus: You can export the gaussian splatting scans as PLY files, making it easy to refine in Blender, Unity, or Unreal Engine.
<div style="display: flex; justify-content: center; margin: 10px 0;"> <a style="justify-content: center;" href="https://scaniverse.com/scan/jc6wzmsom6tlplx6" target="_blank">Watch an interactive example here</a></div>
<video class="scaniverse" width="80%" controls autoplay loop muted> <source src="{{ '/assets/2024-12-20/scaniverse_canon.mp4' | prepend: site.baseurl }}" type="video/mp4"> Your browser does not support the video tag. </video>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Rendered video of a scan made by scaniverse</i>
</div>

If you're looking for a quick and accessible way to experiment with Gaussian Splatting, Scaniverse is a great place to start.

# LUMA AI - More Power, but with Cloud Processing
Luma AI makes Gaussian Splatting accessible with a simple capture process. Unlike Scaniverse, it processes data in the cloud, taking about 20 to 30 minutes before delivering the final model. Originally focused on NeRFs, Luma AI switched to Gaussian Splatting for faster rendering and better compatibility. If you don’t mind waiting a bit, Luma AI gives you high-quality Gaussian Splats by processing everything in the cloud.

### Key Features:
- Cloud-based processing (takes 20-30 min per scan)
- Supports iOS & Android
- Multiple export formats: OBJ, USDZ, GB, PLY

<div style="display: flex; justify-content: center; margin: 20px 0;"> 
<iframe src="https://lumalabs.ai/embed/4d69d7d9-5dd5-41af-a5cc-e542184d8bd3?mode=video&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="375" height="500" frameborder="0" title="luma embed" style="border: none;"></iframe></div>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Interactive demo of a scan made by LUMA AI</i></div>
## KIRI Engine – When You Need Pro-Level Mesh Conversion

The KIRI Engine app offers 3DGS along with a **Mesh 2.0 pipeline**, improving the conversion of Gaussian splats into detailed meshes. This update enhances handling of reflective and transparent materials using advanced normal prediction and reflection removal techniques.  

### Key Features
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

### Key Features
- Works with any camera – Capture scenes with a phone or DSLR and process them on your PC.
- Live preview during training – Watch the 3D model take shape in real time.
- Full local processing – No cloud uploads, ensuring faster iteration and data privacy.
- Advanced editing tools – Adjust lighting, contrast, and cropping within the software.
- Export support – Compatible with Blender, Unreal Engine, After Effects, and more.
- Camera position export/import – Maintain precise framing for seamless integration into other workflows.

Postshot is ideal for users with an Nvidia RTX GPU who want to process 3D representations without relying on cloud-based services. Simply capture a scene with your phone and load it into Postshot to start experimenting.

<video class="scaniverse" width="80%" controls autoplay loop muted> <source src="{{ '/assets/2024-12-20/postshot.mp4' | prepend: site.baseurl }}" type="video/mp4"> Your browser does not support the video tag. </video>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Screencast from the Postshot application</i></div>

## Polycam – Web-Based Simplicity

Polycam is a versatile 3D scanning tool that offers multiple ways to generate Gaussian Splattings through a web-based platform. Just upload images on the webpage for cloud-based Gaussian Splatting generation. However, exporting scans in multiple formats requires a professional subscription.

**Why Polycam?**

- Browser-based – No downloads required
- Supports up to 200 images for high-quality scans
- Includes measurement tools for accurate dimensions
- editing options like cropping, scaling, and adjustments before export.  

<div style="display: flex; justify-content: center; margin: 20px 0;"> 
<a style="justify-content: center;" href="https://poly.cam/capture/15725918-56a8-4010-b522-f97b9db69a69">Watch the example here</a> </div>
<div style="display: flex; justify-content: center; gap: 10px;">
  <img width="90%" src="{{ '/assets/2024-12-20/polycam.png' | prepend: site.baseurl }}" alt="KIRI Engine">
</div>
<div style="display: flex; justify-content: center; margin: 5px 0;"><i>Screenshot from PolyCam</i></div>

## BONUS: Supersplat – A Powerful Gaussian Editor
If you want to edit Gaussian Splats, check out Supersplat!

**What Can Supersplat Do?**
- Delete, transform, and adjust splats
- Select points by histogram (for precise editing)
- Color correction & compression
- Export to a web player for easy sharing

This makes Supersplat an invaluable tool for refining and optimizing Gaussian Splatting models.

## **Conclusion – Which Gaussian Splatting Tool is Right for You?**  

Gaussian Splatting has opened up new possibilities for **fast, high-quality 3D scene reconstruction**, and there are now several tools available, each catering to different needs. Whether you prioritize **ease of use, processing speed, or export flexibility**, there’s an option for you.  

### **The Future of Gaussian Splatting**  

With more tools adopting **Gaussian Splatting over traditional NeRFs**, it’s clear that this method is gaining traction for **real-time rendering and interactive 3D applications**. As the technology continues to evolve, we can expect even more **efficient workflows, better integrations, and improved accessibility** across devices and platforms.  

No matter which tool you choose, **Gaussian Splatting is making 3D scanning more powerful and flexible than ever before.** Now it’s your turn—pick a tool, start experimenting, and see what you can create!