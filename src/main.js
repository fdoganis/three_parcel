   import * as THREE from 'three'

   // NOTE: three/addons alias or importmap does not seem to be supported by Parcel, use three/examples/jsm/ instead 

   import {
     OrbitControls
   } from 'three/examples/jsm/controls/OrbitControls.js';

   import {
     GLTFLoader
   } from 'three/examples/jsm/loaders/GLTFLoader.js';

   // Example of hard link to official repo for data, if needed
   // const MODEL_PATH = 'https://raw.githubusercontent.com/mrdoob/three.js/r148/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb';


   // INSERT CODE HERE

   const scene = new THREE.Scene();
   const aspect = window.innerWidth / window.innerHeight;
   const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   const controls = new OrbitControls(camera, renderer.domElement);
   controls.listenToKeyEvents(window); // optional

   const geometry = new THREE.BoxGeometry(1, 1, 1);
   const material = new THREE.MeshNormalMaterial();
   const cube = new THREE.Mesh(geometry, material);

   scene.add(cube);

   camera.position.z = 3;

   // Main loop

   const render = (time) => {

     // requestAnimationFrame(render);
     renderer.setAnimationLoop(render); // requestAnimationFrame() replacement, compatible with XR 

     cube.rotation.x = time / 2000;
     cube.rotation.y = time / 1000;
     renderer.render(scene, camera);
   };

   render();
