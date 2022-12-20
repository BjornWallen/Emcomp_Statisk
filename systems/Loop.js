import { Clock } from '../three/build/three.module.js';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];

  }

  start() {
    this.renderer.setAnimationLoop(() => {
        
        // tell every animated object to tick forward one frame
        this.tick();

        // render a frame
        this.renderer.render(this.scene, this.camera);
      });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  //Här uppdateras det som ska animeras
  tick(){

    const delta = clock.getDelta();


    //Gå igenom listan av animerade object och uppdatera dem alla i tur och ordning
    for (const object of this.updatables) {
        object.tick(delta);
    }

  }
}

export { Loop }