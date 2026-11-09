---
title: "Coding Da Vinci — Gargoyles Tower Defense"
thumbnail: /assets/projects/gargoyles.png
teaser: "We digitally preserved historic gargoyle statues using photogrammetry and Blender post-processing, making them interactively accessible through a public museum game."
order: 1
description: "Digital preservation of medieval gargoyle sculptures from the Freiburg Minster, combining photogrammetry, 3D reconstruction, and an interactive Unity tower defense game."
---

This project focused on the **digital preservation of medieval gargoyle sculptures** from the *Freiburg Minster*, combining **photogrammetry**, **3D reconstruction**, and **interactive storytelling**.

As part of a multidisciplinary team, I was responsible for the **complete digital capture and cleanup of the gargoyle statues** using *Agisoft Metashape* and *Blender*. The goal was to bring these cultural artifacts into an **accessible and engaging form** for younger audiences and museum visitors.

<a class="btn btn-primary" rel="noopener noreferrer" href="https://sabinecelina.github.io/tower-defense/" target="_blank">→ Play the game</a>

---

### How the game came together

The game was built in 2022 by a team of four for the culture hackathon Coding da Vinci, based on material from the Münsterbauverein, the association that looks after Freiburg Minster. These are the steps, with images from our game design document.

#### 1. The idea

91 gargoyles decorate the outside of Freiburg Minster. Their practical job is drainage: they spit rainwater away from the walls. There is also a medieval myth that the monsters scare off real demons by showing them their own reflection. That myth became the game: gargoyles defend the Minster with water, and the demons they fight mirror them. We started with a visit to the Münsterbauverein, who showed us the Minster and its gargoyles.

#### 2. Capturing the gargoyles

We picked 10 of the 91 gargoyles and photographed them in the Münsterbauhütte, the Minster’s restoration workshop. Space was tight and the statues are too heavy to move, so we often couldn’t shoot from every angle or keep a constant distance. Agisoft Metashape turned the photos into 3D models, but not every model was usable.

<div class="figs"><figure><img src="/assets/projects/gargoyles/workshop.jpg" alt="Gargoyle statues in the restoration workshop of Freiburg Minster" loading="lazy" /><figcaption>Photographing in the restoration workshop</figcaption></figure><figure><img src="/assets/projects/gargoyles/scan-griffin.jpg" alt="Photogrammetric 3D model of the griffin gargoyle" loading="lazy" /><figcaption>The griffin as a Metashape model</figcaption></figure></div>

#### 3. From 5 million to 5,000 faces

The scans were far too detailed for a game that runs in the browser. In Blender I closed holes, repaired the meshes with sculpting and reduced them from about 5 million to 5,000 faces with Quad Remesher. A normal map baked from the high-resolution model onto the low-poly one keeps the stone detail visible.

<div class="figs"><figure><img src="/assets/projects/gargoyles/lowpoly-human.jpg" alt="Finished low-poly model of the human gargoyle" loading="lazy" /><figcaption>The finished human gargoyle</figcaption></figure></div>

#### 4. Demons from a scanned gargoyle

The demons are built from the griffin scan. It got a skeleton, was pulled into a symmetrical pose and remodelled, keeping only the original head and tail tip. A new skeleton with 36 bones drives the walk cycle, including tail and wing movement. One team member is from Mexico, so the textures borrow from Mexican embroidery and from alebrijes, the colourful fantasy creatures from Mexican folk art.

<div class="figs"><figure><img src="/assets/projects/gargoyles/demon-rig.jpg" alt="Skeleton of the demon griffin in Blender" loading="lazy" /><figcaption>The demon’s 36-bone skeleton</figcaption></figure><figure><img src="/assets/projects/gargoyles/demon-texture.jpg" alt="Demon with a colourful texture inspired by Mexican folk art" loading="lazy" /><figcaption>A textured demon in the game</figcaption></figure></div>

#### 5. Water as the weapon

The gargoyles fight with water. The jet is a Shader Graph in Unity’s Universal Render Pipeline that takes a target position and a progress value, so a script can build a jet up and let it fade towards the target. Particle systems add the splash on impact.

<div class="figs"><figure><img src="/assets/projects/gargoyles/water-jet.jpg" alt="Water jet effect in Unity" loading="lazy" /><figcaption>The water jet shader</figcaption></figure><figure><img src="/assets/projects/gargoyles/water-jet-2.jpg" alt="Variant of the water jet in a different colour" loading="lazy" /><figcaption>Variants via material settings</figcaption></figure></div>

#### 6. Bach on the organ

Freiburg Minster has had an organ since the 15th century, so the soundtrack is organ music by Bach. Recording on the Minster organ didn’t fit into the short timeline, but we got to see and hear it. Our team member who trained as an organist recorded the pieces on his home organ as MIDI and produced them in FL Studio with a virtual pipe organ. In the levels you hear the opening bars of the Fantasia and Fugue in G minor (BWV 542).

<div class="figs"><figure><img src="/assets/projects/gargoyles/organ.jpg" alt="The organ of Freiburg Minster" loading="lazy" /><figcaption>The organ in Freiburg Minster</figcaption></figure><figure><img src="/assets/projects/gargoyles/daw.jpg" alt="MIDI recording in the FL Studio DAW" loading="lazy" /><figcaption>Producing the recordings in FL Studio</figcaption></figure></div>

#### 7. The finished game

The game runs as a Unity WebGL build in the browser and was released on 22 July 2022 for the museum night that weekend.

<div class="figs"><figure><img src="/assets/projects/gargoyles/menu.jpg" alt="Main menu of Gargoyles Tower Defense" loading="lazy" /><figcaption>Main menu with gargoyle selection</figcaption></figure><figure><img src="/assets/projects/gargoyles/gameplay.jpg" alt="Gameplay view of the medieval town with gargoyles and demons" loading="lazy" /><figcaption>A level in progress</figcaption></figure></div>

---

### Technologies & Skills

- **Photogrammetry:** Agisoft Metashape  
- **3D Modeling:** Blender (retopology, sculpting, normal baking)  
- **Game Integration:** Unity  
- **Optimization:** Mesh simplification, UV mapping, shader integration  
- **Public Presentation:** Hackathon and museum context  

---

> This project shows how cultural artifacts can be digitally preserved and reimagined through real-time media – combining historical accuracy with modern technology and design.
