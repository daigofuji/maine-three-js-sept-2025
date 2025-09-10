---
theme: default

background: cover2.jpg
title: Taming Three.js with React Three Fiber (R3F)
info:  Maine JS Lightning Talk by Daigo Fujiwara-Smith, September 9, 2025
class: text-center
transition: slide-left
fonts:
  sans: Hepta Slab
  serif: Hepta Slab
seoMeta:
  ogImage: cover2.jpg

---

# Taming Three.js with React Three Fiber

## Daigo Fujiwara-Smith

Newsroom Developer, The Boston Globe

Maine JS Lightning Talk - September 9, 2025

Follow along at **[daigofuji.github.io/maine-three-js-sept-2025](https://daigofuji.github.io/maine-three-js-sept-2025/)**

<p class="mt-12 text-xs">Background image from <a href="https://threejs.org/examples/#webgl_interactive_cubes_gpu">ThreeJS Example page</a></p>

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
# About me 🙋🏻‍♂️

- Daigo Fujiwara-Smith
- The Boston Globe (Working remotely from Portland, ME)
- Newsroom Developer
- Originally from Japan
- Creates interactive graphics, charts, maps, data visualizations, and builds special section sites. Helps reporters/editors with data.
- Former Macromedia/Adobe Flash Developer (Seriously.)

::right::
<img src="/daigo.jpg" alt="daigo" class="" width="125" />

---
layout: image-right
image: /three.jpg
---

# Hitting the wall with Three.js (for me) 😭

- Awesome! Beautiful! [example 1](https://threejs.org/examples/#webgl_animation_keyframes) [2](https://bruno-simon.com/) [3](https://madbox.io) [4](https://threejs-journey.com/) [5](https://www.jesse-zhou.com/)
- Don't have to write raw WebGL code!

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

[WebGL from Khronos Group](https://www.khronos.org/webgl/) makes 3D graphics possible in the browser.

- **Plugin-free 3D graphics:** Renders 3D graphics directly in your browser without needing any extra software or plugins.

- **Based on an industry standard:** Built on OpenGL ES, a widely-used standard for portable graphics.

- Cross-platform, royalty-free open web standard.

::right::
<img src="/webgl-logo.svg" alt="webgl-logo" class="w-full h-auto" />

---
layout: default
---

# A Brief History of HTML `<canvas>` and WebGL 💻

- 2004: Apple introduces the `<canvas>` element.

- 2006: Mozilla engineer Vladimir Vukićević begins prototyping 3D graphics within `<canvas>`.

- 2009: The Khronos Group forms the WebGL working group, bringing together major tech companies to standardize the technology.

- 2010: Apple's Steve Jobs publishes an open letter titled ["Thoughts on Flash"](https://web.archive.org/web/20100522002542/https://www.apple.com/hotnews/thoughts-on-flash/), advocating for open web standards like HTML5 and WebGL over proprietary plugins like Adobe Flash.

- 2011: WebGL 1.0 is released.

- 2014: The HTML5 specification standardizes `<canvas>`, solidifying its role as a key part of the modern web.

<p class="text-sm">SOURCES: <a href="https://architosh.com/2019/02/webgl-2-0-why-its-the-path-to-stable-open-standards-based-3d-web-graphics/">Architosh</a>, <a href="https://www.khronos.org/webgl/">Khronos Group</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">Mozilla Developer Network</a></p>

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

- Three.js was first released by [Ricardo Cabello (Mr.doob)](https://github.com/mrdoob) in 2010(!). The code was originally developed in the ActionScript language used by Adobe Flash ([Source: Wikipedia](https://en.wikipedia.org/wiki/Three.js#History)).

::right::
<img src="/threejs-icon.svg" alt="threejs-icon" class="w-full h-auto" />

---

# Three.js (and 3D) Core Concepts and Minimum set up

- **Canvas**: HTML element where the 3D scene is rendered (in 2D).
- **Renderer**: Draws the 3D scene onto a `<canvas>` element.
- **Scene**: Container for all 3D objects Your 3D world (holds objects, lights, cameras).
- **Objects**: 3D models (meshes = geometry + material) and lighting
- **Lights**: Necessary to see objects (types: ambient, directional, point, spot, hemisphere etc.)
- **Camera**: Viewpoint into 3D world

---
layout: two-cols
layoutClass: gap-16
---
# Enter [React Three Fiber](https://github.com/pmndrs/react-three-fiber)

[pmnd.rs](https://pmnd.rs/) or Poimandres, is an open-source developer collective. They create and maintain useful tools for the React ecosystem, including React Three Fiber.

- [*React renderer*](https://reactjs.org/docs/codebase-overview.html#renderers) for Three.js (not just a wrapper)
- **Core Idea:** It translates *declarative* JSX into *imperative* Three.js commands for you.
- Component-based architecture
- [Automatic cleanup](https://github.com/pmndrs/r3f-website/blob/master/src/docs/api/automatic-disposal.mdx) & lifecycle management
- Same Three.js awesomeness, better DX (developer experience)

::right::
<img src="/r3f-icon.svg" alt="r3f-logo" />
<!-- Analogy is:
- Imperative = HOW (The step-by-step recipe)
- Declarative = WHAT (The final order) -->
---
layout: two-cols
layoutClass: gap-16
---

# Code Comparison 🤓

**Vanilla Three.js:**
```javascript
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({color: 0xff6b9d});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
renderer.render(scene, camera);
```

[Demo](https://daigofuji.github.io/maine-three-js-sept-2025/js-demo/) [Code](https://github.com/daigofuji/maine-three-js-sept-2025/blob/main/public/js-demo/index.html)

::right::
**React Three Fiber:**
```jsx
<Canvas>
  <ambientLight intensity={0.5} />
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#ff6b9d" />
  </mesh>
</Canvas>
```

[CodeSandbox](https://codesandbox.io/p/github/daigofuji/maine-three-js-demo/draft/silly-hopper?file=%2Fsrc%2FApp.jsx) 

---

# Why R3F Finally Clicked

- Familiar React patterns
- Declarative approach I already knew
- Modern JS/No more manual DOM manipulation
- Component reusability
- All React hooks are already available (e.g., useState, onClick)
- added hooks like [useFrame](https://r3f.docs.pmnd.rs/api/hooks#useframe) (for animations), [useLoader](https://r3f.docs.pmnd.rs/api/hooks#useloader), and [useThree](https://r3f.docs.pmnd.rs/api/hooks#usethree), as well as [Events](https://r3f.docs.pmnd.rs/api/events) like onPointerOver/onPointerOut etc.
- Great developer experience
- But **there's more!** Amazing ecosystem...

---
layout: two-cols
layoutClass: gap-16
---
# Power of Drei ([@react-three/drei](https://github.com/pmndrs/drei))

- A collection of useful helpers and abstractions for R3F
- Simplifies common tasks (e.g., loading models, handling events, creating controls, animations)
- Encourages best practices and performance optimizations
- Easily load 3D models like GLTF formats (.glb files) using [useGLTF](https://drei.docs.pmnd.rs/loaders/gltf-use-gltf).
- Easily make a text into 3D objects using [Text](https://drei.docs.pmnd.rs/abstractions/text) and [Text3D](https://drei.docs.pmnd.rs/abstractions/text3d)
::right::
<img src="/drei.png" alt="drei" />
---
layout: two-cols
layoutClass: gap-16
---

# Simple Demo, Conclusion & Resources

## Demo

- [CodeSandbox Example](https://codesandbox.io/p/github/daigofuji/maine-three-js-demo/draft/silly-hopper?file=%2Fsrc%2FApp.jsx)

- ["Here is what I have cooked up earlier"](https://github.com/daigofuji/maine-three-js-sept-2025/blob/main/react-demo/src/AppDrei.jsx)

## Recap

R3F makes 3D web development accessible to React developers (like me).

The Workflow: React for logic, state, and composition + Three.js for 3D power.

::right::
## Resources

- React Three Fiber Docs: [r3f.docs.pmnd.rs](https://r3f.docs.pmnd.rs/getting-started/introduction)

- Drei Docs: [drei.pmnd.rs](https://drei.pmnd.rs)

- Examples: [pmnd.rs/r3f](https://r3f.docs.pmnd.rs/getting-started/examples)

- Bruno Simon's [threejs-journey.com](https://threejs-journey.com) He covers [R3F](https://threejs-journey.com/lessons/what-are-react-and-react-three-fiber) , too!

## Future?

- [WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) (next-gen graphics API)

- [A-Frame](https://aframe.io/)

- Who knows? Web3, VR/AR, Metaverse on browser?

---
layout: two-cols
layoutClass: gap-16
---

# Q&A? Thank You! 🙏

**[github.com/daigofuji/maine-three-js-sept-2025](https://github.com/daigofuji/maine-three-js-sept-2025)** (View [source on github](https://github.com/daigofuji/maine-three-js-sept-2025))

## Please reach out/keep in touch:

**@DaigoFuji** in most social media.

- [GitHub](https://github.com/daigofuji)

- [LinkedIn](https://www.linkedin.com/in/daigo/)

- Email: daigo.fujiwara@globe.com

*Presented at [Maine JS Lightning Talks](https://www.meetup.com/mainejs/events/307703166/)*

<PoweredBySlidev mt-10 />

::right::

<img src="/rip_flash.jpg" alt="RIP Flash" class="full-width" /> 
<p class="text-xs"><a href="https://www.deviantart.com/toonmike/art/R-I-P-Flash-866959900">Image from Deviantart</a> (I was going to make this a 3D scene but I ran out of time)</p>