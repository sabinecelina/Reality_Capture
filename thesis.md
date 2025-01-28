---
layout: page
---

# Neural Radiance Fields in the context of the Industrial Metaverse

## Sabine Schleise

**Institution:** [Hochschule Furtwangen](https://www.hs-furtwangen.de/)

<div class="buttons" style="display: flex; gap: 10px;">
<a href="https://sabinecelina.github.io/masterthesis-nerf_mv/" class="btn btn-pink">Official Thesis Website</a>
</div>

## Abstract

With the advancement of virtual and augmented reality technologies, the term "Metaverse" is becoming increasingly familiar. The Metaverse represents a convergent virtual world for interaction, work, and entertainment. In the industrial sector, the Metaverse opens up new possibilities for training, product development, and collaboration.

One of the key elements of the virtual world is the ability to display three-dimensional (3D) scenes. Traditionally, triangle meshes with textures, point clouds, volumetric grids, and implicit surface functions have been the preferred methods for 3D scene representation due to their clear structure and fast GPU/CUDA compatibility ([Kerbl et al., 2023](https://dl.acm.org/doi/10.1145/3592433); [Tewari et al., 2020](https://onlinelibrary.wiley.com/doi/10.1111/cgf.14022)).

A new method called Neural Radiance Fields (NeRF) has recently emerged ([Mildenhall et al., 2020](https://www.matthewtancik.com/nerf)), which leverages continuous scene representations, typically employing a Multi-Layer Perceptron (MLP) optimized through volumetric ray-marching for the synthesis of novel views of captured scenes. Instead of directly reconstructing the complete 3D scene geometry, NeRF generates a volumetric representation called a "radiance field," capable of creating color and density at every point within the relevant 3D space.

However, using existing frameworks to generate a neural radiance field from real world data requires developer expertise and considerable effort, which significantly limits their adoption in industry. Therefore, we introduce a NeRF trainer to bridge this gap. This NeRF trainer implementation reduces the complexity of creating neural radiance fields by providing users with a user-friendly tool to construct their own 3D representations. We show the potential of the NeRF algorithm in generating highfidelity 3D scenes from 2D images and how it can advance the Metaverse in the industrial context.

## Highlights

- Training visualization demonstrating the speed of the process with 145 images captured from a 180-degree perspective.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
    <video autoplay muted loop style="width: 100%; max-width: 720px;">
      <source src="{{ '/assets/media/training-in-ngp.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

<div class="my-2">
  <h2 class="m-4">Results of Capturing Reality with NeRF</h2>
  <div class="video-container" style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px;">
    <!-- Row 1 -->
    <video autoplay muted loop style="flex: 1; max-width: 48%; height: auto;">
      <source src="{{ '/assets/media/PXL_sonne_video.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video autoplay muted loop style="flex: 1; max-width: 48%; height: auto;">
      <source src="{{ '/assets/media/VID_plarndt.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video autoplay muted loop style="flex: 1; max-width: 48%; height: auto;">
      <source src="{{ '/assets/media/video-auto.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video autoplay muted loop style="flex: 1; max-width: 48%; height: auto;">
      <source src="{{ '/assets/media/video-bank2.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <p>This visualization demonstrates the results of capturing reality with NeRF. Each video showcases different scenes and complexities, providing an overview of the capabilities of Neural Radiance Fields in various scenarios.</p>
</div>

- **Human Avatar Training:** Using Record3D to capture LiDAR data and then train a neural radiance field of a human in 2 minutes.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
    <video autoplay muted loop style="width: 100%; max-width: 720px;">
      <source src="{{ '/assets/media/matthias-avatar.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

- **Complexity of Hand Modeling:** Highlighting light condition challenges and the intricacies of capturing detailed geometries.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
    <video autoplay muted loop style="width: 100%; max-width: 720px;">
      <source src="{{ '/assets/media/hand-nerf.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

- **Large Scene Training:** Exploring spacious environments, VR integration, and their industrial applications.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
    <video autoplay muted loop style="width: 100%; max-width: 720px;">
      <source src="{{ '/assets/media/VID_Showroom.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

## Acknowledgments
Thank you for exploring my thesis work. This project represents months of research and experimentation to showcase the potential of Neural Radiance Fields within the industrial Metaverse. Special thanks to [Prof. Dr. Uwe Hahne](https://www.hs-furtwangen.de/zukunft-verbinden/personen/profil/2932-uwehahne) and Jakob Lindinger for their support and guidance.

---

For more details, visit the [website](https://sabinecelina.github.io/nerf-mv-privat/) or access the [code repository](https://github.com/sabinecelina/nerf-mv-privat).
