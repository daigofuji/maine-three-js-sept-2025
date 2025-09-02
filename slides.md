---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: cover.jpg
# some information about your slides (markdown enabled)
title: Taming Three.js with React Three Fiber
info: |
  ## Maine JS Lightning Talk by Daigo Fujiwara-Smith
  September 9, 2025

  Learn more at [daigofuji.github.io/maine-three-js-sept-2025](https://daigofuji.github.io/maine-three-js-sept-2025/)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  # ogImage: https://cover.sli.dev
  ogImage: auto

---

# Taming Three.js with React Three Fiber

**Daigo Fujiwara-Smith**

Newsroom Developer, The Boston Globe

Maine JS Lightning Talk - September 9, 2025

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<p class="mt-12 text-xs">Photo by <a href="https://unsplash.com/@xavi_cabrera?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Xavi Cabrera</a> on <a href="https://unsplash.com/photos/a-stack-of-legos-sitting-on-top-of-each-other-gLosTt_i3E0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>

---
layout: default
layoutClass: gap-16
---
# Table of contents

<Toc minDepth="1" maxDepth="1" />

---
layout: two-cols
layoutClass: gap-16
---
# About me

- Daigo Fujiwara-Smith
- The Boston Globe (Working remotely from Portland, ME)
- Newsroom Developer
- Originally from Japan
- Creates interactive graphics, charts, maps, data visualizations, and builds special section websites. Helps reporters/editors with data.
- Former Certified Flash Developer (Seriously.)

::right::
<img src="/daigo.jpg" alt="daigo" class="" />

---
layout: image-right
image: /three.jpg
---

# Hitting the wall with Three.js (for me)

- Awesome! Beautiful!
- Don't have to write raw WebGL code

## ...but
- Still lots of code, imperative API
- Manual DOM manipulation
- Complex scene management
- Repetitive boilerplate code
- Hard to integrate with React apps

---
layout: two-cols
layoutClass: gap-16
---

# What is WebGL?

- **Plugin-free 3D graphics:** Renders 3D graphics directly in your browser without needing any extra software or plugins.

- **Based on an industry standard:** Built on OpenGL ES, a widely-used standard for portable graphics.

::right::
<img src="/webgl-logo.svg" alt="webgl-logo" class="w-full h-auto" />

---
layout: two-cols-header
layoutClass: gap-16
---

# A Brief History of HTML canvas and WebGL

- 2004: Apple introduces the `<canvas>` element.

- 2006: Mozilla engineer Vladimir Vukićević begins prototyping 3D graphics within `<canvas>`.

- 2009: The Khronos Group forms the WebGL working group, bringing together major tech companies to standardize the technology.

- 2011: WebGL 1.0 is released.

- 2014: The HTML5 specification standardizes `<canvas>`, solidifying its role as a key part of the modern web.

<p class="text-sm">SOURCES: <a href="https://architosh.com/2019/02/webgl-2-0-why-its-the-path-to-stable-open-standards-based-3d-web-graphics/">Architosh</a>, <a href="https://www.khronos.org/webgl/">Khronos Group</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">Mozilla Developer Network</a></p>

::right::

Something clever about web standard and how it enables cross-platform 3D graphics.

<!-- Khronos group included major tech companies like Apple, Google, Microsoft, Mozilla, AMD, Intel, NVIDIA, and Qualcomm -->

---
layout: two-cols
layoutClass: gap-16
---

# Three.js TL;DR 🌟

- A JavaScript library that lets you create 3D graphics in the browser using WebGL, so that no need to write raw WebGL code.

- WebGL Abstraction: No need to write raw WebGL code/GPU assembly code

- Lights/Shadows: Built-in support.

- Geometries/Materials: Predefined shapes (cubes, spheres, planes etc.) and surface appearances.

::right::
<img src="/threejs-icon.svg" alt="threejs-icon" class="w-full h-auto" />

---

# Three.js Core Concepts/Minimum set up

- **Scene**: Container for all 3D objects Your 3D world (holds objects, lights, cameras).
- **Camera**: Viewpoint into 3D world  
- **Renderer**: Draws the 3D scene onto a `<canvas>` element.
- **Objects & Lights**: 3D models (meshes = geometry + material) and lighting

---

# Enter React Three Fiber

pmnd.rs or Poimandres, is an open-source developer collective. They create and maintain useful tools for the React ecosystem, including React Three Fiber.

- React *renderer* for Three.js (not just a wrapper)
- **Core Idea:** It translates declarative JSX into imperative Three.js commands for you.
- Component-based architecture
- Automatic cleanup & lifecycle management
- Same Three.js objects, better DX

## Analogy
- Imperative = HOW (The step-by-step recipe)
- Declarative = WHAT (The final order)
---
layout: two-cols
---

# Code Comparison

**Vanilla Three.js (20+ lines):**
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({color: 0xff6b9d});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// ... more setup code
```

::right::
**React Three Fiber (8 lines):**
```jsx
<Canvas>
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="hotpink" />
  </mesh>
</Canvas>
```

---

# Why R3F Finally Clicked

- Familiar React patterns
- Declarative approach I already knew
- No more manual DOM manipulation
- Component reusability
- All React hooks are already available (e.g., useState, onClick)
- added hooks like useFrame, useLoader, and useThree, as well as onPointerOver/onPointerOut etc.
- Great developer experience
- But there's more! Amazing ecosystem

---

# Power of Drei (@react-three/drei)

- A collection of useful helpers and abstractions for R3F
- Simplifies common tasks (e.g., loading models, handling events)
- Encourages best practices and performance optimizations
- Easily load 3D models like GLTF formats (.glb files) using [useGLTF](https://drei.docs.pmnd.rs/loaders/gltf-use-gltf).
- Easily make a text into 3D objects using [Text](https://drei.docs.pmnd.rs/abstractions/text) and [Text3D](https://drei.docs.pmnd.rs/abstractions/text3d)

---

# Simple Demo 

```jsx
<Canvas>
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="hotpink" />
  </mesh>
</Canvas>

---

# Conclusion & Resources

Recap: R3F makes 3D web development accessible to React developers.

The Workflow: React for logic, state, and composition + Three.js for 3D power.

## Resources

- React Three Fiber Docs: [r3f.docs.pmnd.rs](https://r3f.docs.pmnd.rs/getting-started/introduction)

- Drei Docs: [drei.pmnd.rs](https://drei.pmnd.rs)

- Examples: [pmnd.rs/r3f](https://r3f.docs.pmnd.rs/getting-started/examples)

- Bruno Simon's [threejs-journey.com](https://threejs-journey.com)

---
class: text-center
---

# Thank You!
## Questions?

@DaigoFuji in most social media.

- [GitHub](https://github.com/daigofuji)

- [LinkedIn](https://www.linkedin.com/in/daigo/)


**[github.com/daigofuji/maine-three-js-sept-2025](https://github.com/daigofuji/maine-three-js-sept-2025)**

*Presented at Maine JS Lightning Talks*

<PoweredBySlidev mt-10 />
