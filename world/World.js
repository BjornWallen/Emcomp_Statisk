import { createCamera } from '../components/camera.js';

//----------------------------------------------------
// importera fåglarna ** GLTF **
import { load3dModel } from '../components/3dModel/3dModel.js';
//------------------------------------------

import { createLights } from '../components/lights.js';
import { loadHDR } from '../components/hdri.js';

import { createScene } from '../components/scene.js';
import { createControls } from '../systems/controls.js';

import { createRenderer } from '../systems/renderer.js';
import { Resizer } from '../systems/Resizer.js';
import { Loop } from '../systems/Loop.js';

// These variables are module-scoped: we cannot access them
// from outside the module

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    //Skapa kamerakontroll
    controls = createControls(camera, renderer.domElement);

    //const meshGroup = createMeshGroup();
    const { mainLight, ambientLight } = createLights();

    // starta/stoppa animering
    loop.updatables.push(controls);
    
    scene.add(mainLight, ambientLight);

    // HDRI
    loadHDR(scene);
    
    const resizer = new Resizer(container, camera, renderer);
    
    //Uppdatera om webläsaren skalas om. Onödigt vid animering då animeringen uppdater ändå
    //resizer.onResize = () => {
    //  this.render();
    //};
  }

  async init() {
    
    const { Model } = await load3dModel();

    // fokusera kameran på Parrot
    controls.target.copy(Model.position);

    //loop.updatables.push(parrot);
    scene.add(Model);

  }

  render() {
    //draw a single frame
    renderer.render(scene, camera);
  }


  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

export { World };