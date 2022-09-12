import * as THREE from "three";

export default class sketch {
  constructor({
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    ),
    renderer = new THREE.WebGLRenderer({ antialias: true }),
    width = window.innerWidth,
    height = window.innerHeight,
    container = document.body,
  }) {
    this.scene = scene;
    this.camera = camera;
    this.container = container;
    this.camera.position.z = 1;
    this.renderer = renderer;
    this.animations = (time) => {};
    this.renderer.setSize(width, height);
    container.appendChild(this.renderer.domElement);
  }

  addToScene(object) {
    this.scene.add(object);
  }

  render() {
    this.renderer.setAnimationLoop((time) => {
      this.animations(time);
      this.renderer.render(this.scene, this.camera);
    });
  }
}

const sample = new sketch({ container: document.getElementById("container") });

const plane_geometry = new THREE.PlaneGeometry(0.5, 0.5);
const plane_material = new THREE.MeshNormalMaterial({
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(plane_geometry, plane_material);
sample.plane = plane;
sample.addToScene(plane);

sample.animations = (time) => {
  sample.plane.rotation.x = time / 2000;
  sample.plane.rotation.y = time / 1000;
};

sample.render();
