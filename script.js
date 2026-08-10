import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";

// CYBERWORLD-001
// Milestone 4 - First Three.js World

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x020507);


// CAMERA

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 2, 8);


// RENDERER

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

document.body.appendChild(renderer.domElement);


// LIGHT

const ambientLight = new THREE.AmbientLight(
    0x00ffcc,
    0.4
);

scene.add(ambientLight);


// FLOOR

const floorGeometry = new THREE.PlaneGeometry(
    30,
    30
);

const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x050a0c,
    roughness: 0.8,
    metalness: 0.3
});

const floor = new THREE.Mesh(
    floorGeometry,
    floorMaterial
);

floor.rotation.x = -Math.PI / 2;

scene.add(floor);


// CENTRAL OBJECT

const geometry = new THREE.BoxGeometry(
    2,
    2,
    2
);

const material = new THREE.MeshStandardMaterial({
    color: 0x00ffcc,
    emissive: 0x003333,
    metalness: 0.8,
    roughness: 0.2
});

const cube = new THREE.Mesh(
    geometry,
    material
);

cube.position.y = 1;

scene.add(cube);


// ANIMATION

function animate() {

    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.01;

    renderer.render(
        scene,
        camera
    );
}

animate();


// WINDOW RESIZE

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);

// WORLD ENTRY

const bootScreen = document.getElementById("boot-screen");
const enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", () => {

    bootScreen.classList.add("hidden");

});
