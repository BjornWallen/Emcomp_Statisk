import { Color, Scene } from '../three/build/three.module.js';

function createScene() {
  const scene = new Scene();

  scene.background = new Color(0x4C5958);

  return scene;
}

export { createScene };