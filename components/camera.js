import { PerspectiveCamera } from '../three/build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.01, // near clipping plane
    10, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0.1, 0.2);

  return camera;
}

export { createCamera };