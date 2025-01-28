---
layout: page
---

<h1 style="text-align: center;">
Neural Radiance Fields in the context of the Industrial Metaverse
</h1>
<h3 style="text-align: center;">
Sabine Schleise <br>
Hochschule Furtwangen
</h3>

<div class="buttons" style="display: flex; gap: 10px; align-items: center;">
  <a href="https://sabinecelina.github.io/masterthesis-nerf_mv/" class="btn btn-pink">Official Thesis Website</a>
  <a href="https://otik.uk.zcu.cz/bitstream/11025/57388/1/B59-2024.pdf" class="btn btn-pink">Short Paper Version</a>
</div>
<br/>
<video autoplay muted loop style="flex: 1; max-width: 100%; height: auto;">
    <source src="{{ '/assets/ingp_whatif_1.mp4' | prepend: site.baseurl }}" type="video/mp4">
    Your browser does not support the video tag.
</video>
<p style="text-align: center;">
Rendered results from neural radiance fields. This visualization provides training outcomes of neural radiance fields applied to a variety of complex objects, each chosen to demonstrate specific capabilities and challenges.
</p>
## Abstract

With the advancement of virtual and augmented reality technologies, the term "Metaverse" is becoming increasingly familiar. The Metaverse represents a convergent virtual world for interaction, work, and entertainment. In the industrial sector, the Metaverse opens up new possibilities for training, product development, and collaboration. One of the key elements of the virtual world is the ability to display three-dimensional (3D) scenes. Traditionally, triangle meshes with textures, point clouds, volumetric grids, and implicit surface functions have been the preferred methods for 3D scene representation due to their clear structure and fast GPU/CUDA compatibility ([Kerbl et al., 2023](https://dl.acm.org/doi/10.1145/3592433); [Tewari et al., 2020](https://onlinelibrary.wiley.com/doi/10.1111/cgf.14022)).

A new method called Neural Radiance Fields (NeRF) has recently emerged ([Mildenhall et al., 2020](https://www.matthewtancik.com/nerf)), which leverages continuous scene representations, typically employing a Multi-Layer Perceptron (MLP) optimized through volumetric ray-marching for the synthesis of novel views of captured scenes. Instead of directly reconstructing the complete 3D scene geometry, NeRF generates a volumetric representation called a "radiance field," capable of creating color and density at every point within the relevant 3D space.

However, using existing frameworks to generate a neural radiance field from real world data requires developer expertise and considerable effort, which significantly limits their adoption in industry. Therefore, we introduce a NeRF trainer to bridge this gap. This NeRF trainer implementation reduces the complexity of creating neural radiance fields by providing users with a user-friendly tool to construct their own 3D representations. We show the potential of the NeRF algorithm in generating highfidelity 3D scenes from 2D images and how it can advance the Metaverse in the industrial context.

## Highlights

- **Instant-NGP:** Training process of a neural radiance field using instant-ngp. The object
was captured from a 180-degree perspective, utilizing 145 images for training. In
the training phase, rapid convergence is achieved in a mere 20 seconds, yielding a
visually compelling scene. This performance was attained using a Laptop A 3000
GPU. This visualization underscores the remarkable speed of the training procedure.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
    <video autoplay muted loop style="width: 100%; max-width: 720px;">
      <source src="{{ '/assets/media/training-in-ngp.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

## NeRF in the context of the Industrial Metaverse

- **Human Avatar Training:** This video presents a neural radiance field of a human avatar captured
with Record3D. Remarkably, the entire process of data preparation and model training
took a mere 2 minutes. While there are some areas that present challenges, the overall
representation of the avatar as a neural radiance field is commendably accurate and
realistic. It is also worth noting that this avatar is a static representation; it lacks a
rigid body or other physical components, limiting its range of motion and interaction.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
    <video autoplay muted loop style="width: 100%; max-width: 720px;">
      <source src="{{ '/assets/media/matthias-avatar.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

- **Complexity of Hand Modeling:** Highlighting light condition challenges and the intricacies of capturing detailed geometries. The result, while showcasing the potential of NeRF,
also underlines the intricacies and difficulties inherent in accurately capturing and
representing hands.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
    <video autoplay muted loop style="width: 100%; max-width: 720px;">
      <source src="{{ '/assets/media/hand-nerf.mp4' | prepend: site.baseurl }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

- **Large Scene Training:** Exploring spacious environments, VR integration, and their industrial applications.  The overall result turned
out very well except for the artifacts.
  <div style="display: flex; justify-content: center; margin: 20px 0;">
      <img src="{{ '/assets/media/buro.gif' | prepend: site.baseurl }}" alt="Large scenes">
  </div>

## Acknowledgments
Thank you for exploring my thesis work. This project represents months of research and experimentation to showcase the potential of Neural Radiance Fields within the industrial Metaverse. Special thanks to [Prof. Dr. Uwe Hahne](https://www.hs-furtwangen.de/zukunft-verbinden/personen/profil/2932-uwehahne) and Jakob Lindinger for their support and guidance.

For more details, visit the [website](https://sabinecelina.github.io/nerf-mv-privat/) or access the [code repository](https://github.com/sabinecelina/nerf-mv-privat).

---

<p>
    This thesis was honored with the <strong>Erwin-Sick-Award</strong>, recognizing its contribution to advancing research in Neural Radiance Fields within the Industrial Metaverse. 
    The award highlights the innovation and practical relevance of this work in shaping future technologies. 
    <a href="https://www.hs-furtwangen.de/zukunft-erleben/aktuelles/detail/978-junge-talente-ueberzeugen-mit-engagement" target="_blank" style="text-decoration: none; color: deeppink;">Read more about the award here.</a>
</p>
<img src="{{ '/assets/award_sick.jpg' | prepend: site.baseurl }}" id="about-img">