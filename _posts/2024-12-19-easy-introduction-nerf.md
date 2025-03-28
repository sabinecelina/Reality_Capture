---
layout: page
title:  "A gentle introduction to Neural Radiance Fields"
date:   2024-12-19 21:21:21 +0530
categories: ["general"]
---

*"We live in a three dimensional world. Our perception and memories are
of three dimensional beings. Yet there is no way to capture and revisit
those moments like you are there. All we have to show for it are these 2D
slices we call photos. It’s time for that to change" (Yu and Jain, 2023)."*

What if we could capture reality in all its breathtaking complexity? The interplay of light, material properties, depth information, intricacies of a three-dimensional (3D) scene that are often get lost in two-dimensional (2D) images. Now, imagine taking it a step further, not just capturing this scene in its three-dimensional glory, but also immersing ourselves in it through virtual reality. To step into that scene, to feel that we are truly a part of it.​
<div class="gif-pair">
    <img src="{{ '/assets/2024-12-19/ingp_what_if_1.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">
    <img src="{{ '/assets/2024-12-19/ingp_what_if_2.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 2">
</div>
In these videos, I am presenting you generated neural radiance fields, and the level of detail in capturing the reality in these scene representations is remarkable.​

For example, the following video impressively illustrates how **NeRFs** are able to represent complex material properties like the transparent lens. These properties are often challenging to capture using methods like photogrammetry or LiDAR sensors. Notably, the video highlights the lens's light-dependent reflections, clearly showcasing **NeRF's** remarkable ability to accurately capture real-world details in 3D. But how does this magic works?​

<img src="{{ '/assets/2024-12-19/sensor_ngp.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">

*The key idea of NeRF is to synthesize novel views of complex scenes by optimizing an underlying continuous volumetric scene function using a sparse set of input images.*

First, we start with a dataset of images paired with corresponding camera positions, so we need to know from which position the image was taken. First, we start with a dataset of images paired with corresponding camera positions, so we need to know from which position the image was taken. This is typically done using a process called **Structure-from-Motion (SfM)**, and a popular tool for this is [COLMAP](https://colmap.github.io).
We then train a neural network to optimize the representation of the radiance field. Once this training is complete, we can query the neural radiance field to visualize what the scene would look like from a particular position, viewed from a certain angle, and then render new images or videos that were not previously captured in our input images.

<img src="{{ '/assets/2024-12-19/input_output_nerfs.png' | prepend: site.baseurl }}" alt="Training NeRFs">

In general, the NeRF algorithm is a technique that generates 3D representations of a scene from 2D images using advanced machine learning. It encodes the entire scene into a neural network, which predicts the light intensity - also known as radiance - at any point in the 3D space to synthesize novel views from different angles. I won't go into the details of the algorithm here. Instead, I refer interested readers to the original paper.

<img src="{{ '/assets/2024-12-19/nerfs_process.png' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">

Nevertheless, let’s take a closer look at an important aspect of NeRFs: how they encode and render scene properties. The network outputs two components for each point in space:

*Density*: This represents how much light is absorbed or scattered at a given point. It is inherently view-independent, meaning it does not change regardless of the observer’s perspective. For example, the density of a water surface remains constant across all angles.

*Color*: In contrast, the color is view-dependent, as it is influenced by the angle of the light and the observer. This dependency allows NeRFs to capture dynamic effects like reflections or highlights that change as the viewpoint shifts.

This distinction between density and color is what enables NeRFs to recreate realistic effects such as the shimmering reflections on water or the gloss on a polished surface. You can see this interplay vividly in the next figure.

<img src="{{ '/assets/2024-12-19/radiance_field.png' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 2">

NeRFs operate on light fields that directly capture shapes, textures, and material effects. This allows them to recreate scenes with an unprecedented level of realism. Imagine capturing the shimmering effect of sunlight on water or the intricate reflection on a polished metal surface. NeRFs achieve this by encoding every scene detail into a neural network, enabling the synthesis of photorealistic views from any angle. In contrast, other 3D processing techniques (like Blender) typically start with shapes and then apply textures and material effects as secondary processes. 

<img src="{{ '/assets/2024-12-19/blender.png' | prepend: site.baseurl }}" alt="Blender Examples">

So, we’ve explored how a NeRF can take a bunch of 2D images and reconstruct them into a rich, 3D representation using a learned “light field.” But how do we actually render this newly formed 3D world so that it looks photorealistic on your screen?

In traditional computer graphics we often rely on ray tracing to simulate how light bounces around a scene, creating realistic reflections, shadows, and global illumination. NeRF’s approach shares a fundamental similarity: it also “traces” rays into a scene, except instead of hitting solid polygons or explicit geometry, those rays traverse a **continuous volumetric representation**.

While ray tracing is all about calculating precise light interactions on defined surfaces, NeRF uses ray marching to accumulate color and density directly from the learned radiance field. This means NeRF doesn’t need to store detailed models of every object in a scene; it relies on the neural network to decide how light would behave at each point in space. By looking at the parallels - both methods track rays through 3D space, but do so in fundamentally different ways - we can appreciate how NeRF builds on and complements classic ray tracing techniques to deliver next - level realism.

## Conclusion

Neural Radiance Fields fundamentally changed how we reconstruct 3D worlds from basic 2D images. Over just a few years, training has become faster, rendering more efficient, and the ability to handle large or complex environments has dramatically improved. If you’re captivated by the idea of turning ordinary photos into immersive 3D experiences, **now** is a fantastic time to explore. Tools like **instant-ngp** can train a NeRF in minutes (rather than days), and ongoing research continues to push the boundaries of what’s possible. Ultimately, NeRFs promise to make immersive, photorealistic 3D experiences accessible to anyone with a camera.

For a comprehensive list of NeRF frameworks and resources, check out [Awesome NeRFs](https://github.com/awesome-NeRF/awesome-NeRF).

Happy exploring!