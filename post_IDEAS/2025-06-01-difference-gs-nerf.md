---
layout: page
title:  "Gaussian Splatting vs. Neural Radiance Fields"
date:   2025-06-01 16:21:00 +0530
categories: ["general"]
---

The very first time I worked with NeRFs, I wanted to become a NeRF-pert — a term I coined myself to describe a true expert in NeRFs. My journey began during my master’s program in 2022, in a course called *The Future of Digital Media*. The course focused on understanding a current research topic in computer science. At the time, a company near my university had just announced a master thesis opening in Neural Rendering. To prepare for it, I chose NeRFs as my topic and quickly became fascinated. I built a small NeRF implementation in Google Colab and explored various applications based on the NeRF algorithm, including Luma AI. Later, I wrote my master’s thesis on *NeRFs in the Industrial Metaverse*.

Close to my deadline, I slowly began to feel like a real *NeRF-pert*. I understood almost every aspect of NeRFs. I explored several limitations of NeRFs rooted in their neural network architecture. This rigidity revealed some challenges when applying NeRFs to real-world or industrial scenarios. But just then, a new paper dropped: **3D Gaussian Splatting**.

Gaussian Splatting removed the neural network component with an explicit 3D representation — offering flexibility, real-time performance, and more interpretable rendering behavior. It felt like the NeRF world had suddenly flipped.

And then… the inner conflict began. Me, proudly wearing the title NeRFpert, suddenly faced an existential crisis:
Was I supposed to leave NeRF behind? After everything we went through? I mean—sure, 3D Gaussian Splatting is fast, flexible, and kind of brilliant. But NeRF... NeRF was my first love. Let’s just say: I wasn’t ready to move on. Not yet. Still, I had to admit—reluctantly—that 3DGS isn’t just “not that bad.” It’s actually impressive. After almost two years of internal battle - Team NeRF vs. Team Gaussian Splatting - I slowly came to a realization:
It doesn’t have to be a fight.

It’s not NeRF vs. 3DGS. It’s NeRF or 3DGS, depending on the problem you want to solve. Like two tools in the same toolbox. Or two Pokémon - each with its own strengths. So, I gave them a new title: *Radiance Fields* (RF). Maybe at the end, I am just a *RF-pert*. Because it’s about how we represent radiance — and what we want to achieve with it.

So, let’s try to break down both approaches - what makes them unique, when to use them, and where they shine (or struggle).