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

# LUMA AI - Gaussian Splatting for your Phone
Luma AI makes Gaussian Splatting accessible with a simple capture process. Unlike Scaniverse, it processes data in the cloud, taking about 20 to 30 minutes before delivering the final model. Originally focused on NeRFs, Luma AI switched to Gaussian Splatting for faster rendering and better compatibility. This update also brought Android support, expanding its reach beyond iOS. Luma AI offers multiple export formats for different workflows:
- Android: .obj, .gb, or AR viewing
- iOS: .obj, .usdz, Gaussian Splatting format, or raw point clouds

With its cloud-based approach and broad export support, Luma AI is a great choice for users who don’t mind waiting a bit for high-quality results.
<div style="display: flex; justify-content: center; margin: 20px 0;"> 
<iframe src="https://lumalabs.ai/embed/4d69d7d9-5dd5-41af-a5cc-e542184d8bd3?mode=video&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="375" height="500" frameborder="0" title="luma embed" style="border: none;"></iframe></div>
<div style="display: flex; justify-content: center; margin: 20px 0;"> 
<a style="justify-content: center;" href="https://lumalabs.ai/embed/4d69d7d9-5dd5-41af-a5cc-e542184d8bd3?mode=video&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false">Watch the example here</a> </div>

## KIRI Engine – 3D Gaussian Splatting with Advanced Mesh Conversion

KIRI Engine offers 3DGS along with a **Mesh 2.0 pipeline**, improving the conversion of Gaussian splats into detailed meshes. This update enhances handling of reflective and transparent materials using advanced normal prediction and reflection removal techniques.  

### Key Features
- Export options: Supports **OBJ, PLY, GLTF** for meshes and `.ply` for Gaussian Splats.  
- Automatic background removal: Helps isolate objects, though it can misidentify certain elements as part of the scene.  
- Adjustable lighting and contrast: Allows fine-tuning of scans for better results.  

### Key points
- **High mesh quality**
- **Cloud-based processing** 
- **Subscription model** – Pro version required (€90/year) to unlock scanning capabilities.  

KIRI Engine is a powerful tool for users who need high-quality meshes from Gaussian Splats, but its reliance on cloud computing and paid access model make it less accessible compared to free alternatives like Scaniverse.

<div style="display: flex; justify-content: center; gap: 10px;">
  <img width="30%" src="{{ '/assets/2024-12-20/KIRI_engine.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
  <img width="30%" src="{{ '/assets/2024-12-20/KIRI_engine_blur.jpeg' | prepend: site.baseurl }}" alt="KIRI Engine">
</div>

## Postshot – Gaussian Splatting for Windows User with NVIDIA GPU

Postshot is a powerful desktop software designed for creating photorealistic 3D scenes using Neural Radiance Fields (NeRFs) and Gaussian Splatting. Unlike mobile apps that rely on cloud processing, everything runs locally, giving users full control over their data.

Key Features
- Works with any camera – Capture scenes with a phone or DSLR and process them on your PC.
- Live preview during training – Watch the 3D model take shape in real time.
- Full local processing – No cloud uploads, ensuring faster iteration and data privacy.
- Advanced editing tools – Adjust lighting, contrast, and cropping within the software.
- Export support – Compatible with Blender, Unreal Engine, After Effects, and more.
- Camera position export/import – Maintain precise framing for seamless integration into other workflows.

Postshot is ideal for users with an Nvidia RTX GPU who want to process 3D representations without relying on cloud-based services. Simply capture a scene with your phone and load it into Postshot to start experimenting.