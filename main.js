import * as THREE from "three";
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';
import * as dat from 'dat.gui';

if ( !WebGL.isWebGLAvailable() ) {
	alert("WebGL is unsupported, animations would break")
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls( camera, renderer.domElement);
orbit.autoRotate = true;

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.z = 5;
camera.position.y = 2;
orbit.update();


const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);



const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

const sphereGeometry = new THREE.SphereGeometry(4, 40, 40);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: false});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

sphere.position.x = -10;

const gui = new dat.GUI();

const options = {
	sphereColor: '#ffea00'
}

gui.addColor(options, 'sphereColor').onChange(e => {
	sphere.material.color.set(e)
})

// Three JS Line

const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const linePoints = [];
linePoints.push(new THREE.Vector3(1, 1, 1));
linePoints.push(new THREE.Vector3(2, 0, 0));
// linePoints.push( new THREE.Vector3( 10, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
const line = new THREE.Line(lineGeometry, lineMaterial);

scene.add(line);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
