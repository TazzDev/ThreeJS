import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, cubeMaterial );
scene.add( cube );

camera.position.z = 5;

// Three JS Line 

const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const linePoints = [];
linePoints.push( new THREE.Vector3( 1, 1, 1 ) );
linePoints.push( new THREE.Vector3( 2, 0, 0 ) );
// linePoints.push( new THREE.Vector3( 10, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( linePoints );
const line = new THREE.Line( lineGeometry, lineMaterial );

scene.add( line );




function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();