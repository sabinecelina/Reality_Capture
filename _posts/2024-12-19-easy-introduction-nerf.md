---
layout: page
title:  "An easy introduction to Neural Radiance Fields"
date:   2024-12-19 21:21:21 +0530
categories: ["general"]
---

*"We live in a three dimensional world. Our perception and memories are
of three dimensional beings. Yet there is no way to capture and revisit
those moments like you are there. All we have to show for it are these 2D
slices we call photos. It’s time for that to change" (Yu and Jain, 2023)."*

I'd like to begin by introducing the idea of capturing reality in its three-dimensionality.​

What if we could capture reality in all its breathtaking complexity? The interplay of light, material properties, depth information, intricacies of a three-dimensional (3D) scene that are often get lost in two-dimensional (2D) images. Now, imagine taking it a step further, not just capturing this scene in its three-dimensional glory, but also immersing ourselves in it through virtual reality. To step into that scene, to feel that we are truly a part of it.​
<div class="gif-pair">
    <img src="{{ '/assets/2024-12-19/ingp_what_if_1.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">
    <img src="{{ '/assets/2024-12-19/ingp_what_if_2.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 2">
</div>
In these videos, I am presenting you generated neural radiance fields, and the level of detail in capturing the reality in these scene representations is remarkable.​

For example, the following video impressively illustrates how **NeRFs** are able to represent complex material properties like the transparent lens. These properties are often challenging to capture using methods like photogrammetry or LiDAR sensors. Notably, the video highlights the lens's light-dependent reflections, clearly showcasing **NeRF's** remarkable ability to accurately capture real-world details in 3D. But how does this magic works?​

<img src="{{ '/assets/2024-12-19/sensor_ngp.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">

*The key idea of NeRF is to synthesize novel views of complex scenes by optimizing an underlying continuous volumetric scene function using a sparse set of input images.*

First, we start with a dataset of images paired with corresponding camera positions, so we need to know from which position the image was taken. First, we start with a dataset of images paired with corresponding camera positions, so we need to know from which position the image was taken. This is typically done using a process called **Structure-from-Motion (SfM)**, and a popular tool for this is [COLMAP]({{ '/2024-12-27-colmap-sfm' | prepend: site.baseurl }}).
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

### TODO Placeholder image
<img src="{{ '/assets/2024-12-19/blender.png' | prepend: site.baseurl }}" alt="Blender Examples">

## Rendering in NeRF: From Data to Image

1. Ray Marching: Casting Rays Through the Scene
Imagine you’re looking through a virtual camera at your scene. For each pixel in your final image, a “ray” is sent from the camera into the 3D space. This process is called ray marching.
- Discrete Sampling: Along the ray’s path, the system takes many samples (points). At each sample, the NeRF predicts how much density and color exist at that location for the given viewing direction.

2. The Network Predicts Density and Color
NeRF itself is a trained neural network. For every point x in space and every viewing direction d, it predicts:

Density (σ) How “opaque” or “transparent” the material is at that point.

Radiance/Color (c) The color or light emission from that point in the direction of the camera, capturing effects like reflection or highlights.

Again: Why two outputs?

Density determines how light is absorbed or transmitted at a location.

Color can change depending on viewing angles and lighting, enabling realistic reflections or glossiness.

3. Accumulating Along the Ray
As the ray moves through the scene, the renderer collects (accumulates) density and color information at each sample point, effectively creating a volumetric representation of the scene. The final pixel color is determined by:

- Opacity vs. Transparency
-- High density means the material blocks light, so you mostly see that point’s color.
-- Low density means you might see color from deeper points along the ray.

- Weighted Color Blending
-- Each sampled point contributes to the final color, weighted by its density and distance. It’s similar to light scattering through fog: points that are closer and denser overshadow those behind them.

4. Merging All Pixels
This process repeats for every pixel in your image. The result is a synthetic view—the scene as if photographed from that exact camera angle.

Ray Marching is Computationally Intensive: A large number of samples per ray are needed to capture fine details like reflections or intricate textures.

Acceleration Strategies: Modern NeRF methods (e.g., instant-ngp) prioritize regions of interest and skip unnecessary samples, making rendering much faster.

## Takeaways
Neural Radiance Fields fundamentally changed how we think about reconstructing 3D scenes from 2D images. In just a few short years, we’ve seen dramatic advances that make training faster, rendering smoother, and handling huge environments easier [Awewome NeRFs](https://github.com/awesome-NeRF/awesome-NeRF).

If you’re intrigued by the potential of seamlessly creating 3D worlds from simple photos, now is a great time to dive in. Tools like instant-ngp and others let you train a NeRF in minutes rather than days, and ongoing research continues to refine and expand what’s possible. Ultimately, NeRFs promise to make the creation of immersive, photorealistic 3D experiences more accessible than ever.