---
layout: page
title:  "An easy introduction to Neural Radiance Fields"
date:   2024-12-19 21:21:21 +0530
categories: ["general"]
---
I'd like to begin by introducing the idea of capturing reality in its three-dimensionality.​

What if we could capture reality in all of its breathtaking complexity? The interplay of light, material properties, depth information, intricacies of a three-dimensional scene that are often get lost in two-dimensional images. Now, imagine taking it a step further, not just capturing this scene in its three-dimensional glory, but also immersing ourselves in it through virtual reality. To step inside that scene, to feel that we are truly a part of it.​
<div class="gif-pair">
    <img src="{{ '/assets/2024-12-19/ingp_what_if_1.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">
    <img src="{{ '/assets/2024-12-19/ingp_what_if_2.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 2">
</div>
In these videos, I am presenting you generated neural radiance fields, and the level of detail in capturing the reality in this scene representations is remarkable.​

For example, the following video impressively illustrates how **NeRFs** are able to represent complex material properties like the transparent lens. These properties are often challenging to capture using methods like photogrammetry or LiDAR sensors. Notably, the video highlights the lens's light-dependent reflections, clearly showcasing **NeRF's** remarkable ability to accurately capture real-world details in 3D. But how does this magic works?​

<img src="{{ '/assets/2024-12-19/sensor_ngp.gif' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">

## Overview 

*The key idea of NeRF is to synthesize novel views of complex scenes by optimizing an underlying continuous volumetric scene function using a sparse set of input images.*

First, we start with a dataset of images paired with corresponding camera positions, so we need to know from which position the image was taken. We then train a neural network to optimize the representation of the radiance field. Once this training is complete, we can query the neural radiance field to visualize what the scene would look like from a particular position, viewed from a particular angle, and then render new images or videos that were not previously captured in our input images.

<img src="{{ '/assets/2024-12-19/input_output_nerfs.png' | prepend: site.baseurl }}" alt="Training NeRFs">

In general, The **NeRF** algorithm is a technique that generates 3D representations of a scene from 2D images by using advanced machine learning. The technique involves encoding the entire scene into a neural network, which predicts the light intensity – also known as radiance -- at any point in the 2D image to generate novel 3D views from different angles. I won’t delve further into the algorithm here but I refer to the original paper for interested reader.

<img src="{{ '/assets/2024-12-19/nerfs_process.png' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 1">

Nevertheless, I would like to highlight the following feature in more detail. The network outputs the density of a point and the color the point has when viewing from a certain angleThe density is not view dependent, the property of the water surface is not changing during different views, but the color is as you can obtain on the visuailization here.​ 
<img src="{{ '/assets/2024-12-19/radiance_field.png' | prepend: site.baseurl }}" alt="Neural Radiance Field GIF 2">

NeRFs operates on light fields that characterize shapes, textures and material effects directly -- the way different materials like cloth or metal look in light, for example. In contrast, other 3D processing techniques start with shapes and then add on textures and material effects using secondary processes.​  