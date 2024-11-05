import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
//Color's casue for some reason I can't find any that work from three.js examples
//Red: 0xff0000
//Green: 0x00ff00
//Blue: 0x0000ff
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

var canvas = document.querySelector("canvas");
var renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setClearColor(bgColor);
var bgColor = 0x000000 //var so it can be changed

// First Cube
var cubeGeometry = new THREE.CubeGeometry(1, 1, 1);
var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true,}); // red
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// Second Cube
var cube2Geometry = new THREE.CubeGeometry(1, 1, 1);
var cube2Material = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe:  true,}); // blue
var cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
// First Octahedron
var octaGeo = new THREE.OctahedronGeometry();
var octoMat = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe:  true,});  //red
var octo = new THREE.Mesh(octaGeo, octoMat);
// Second Ooctahedron
var octa2Geo = new THREE.OctahedronGeometry();
var octo2Mat = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:  true,}); // red
var octo2 = new THREE.Mesh(octa2Geo, octo2Mat);
// Sphere for testing
const sphereGeo = new THREE.SphereGeometry(1 , 16, 8);
const sphereMat = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} ); // blue
const sphere = new THREE.Mesh( sphereGeo, sphereMat ) ;

//Actually add the things
scene.add(cube);
scene.add(cube2);
// scene.add(octo);
// scene.add(octo2);
// scene.add(sphere);


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
// animates and renders evreyting based on time
export function render(time) {
    time *= 0.001;
    resize();
    cube.rotation.x = time;
    cube2.rotation.y= time * 0.31
    octo2.rotation.x= time 
    octo.rotation.y= time * 0.31
    sphere.rotation.y = time
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

// Call to display The background on page Load
render();