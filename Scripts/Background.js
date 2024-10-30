import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

var canvas = document.querySelector("canvas");
var renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setClearColor(0xF0F0F0);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ 
  color: 0x00ff00, 
  wireframe: true,
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 1;

function resize() {
  var width = canvas.clientWidth;
  var height = canvas.clientHeight;
  if (width != canvas.width || height != canvas.height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function render(time) {
    time *= 0.001;
    resize();
    cube.rotation.x = time;
    cube.rotation.y = time * 0.31;
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}
render();