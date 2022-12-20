import { EquirectangularReflectionMapping } from '../three/build/three.module.js'; 
import { RGBELoader } from '../three/examples/jsm/loaders/RGBELoader.js';



function loadHDR(scene) {
    new RGBELoader()
          .load("../assets/environment/photostudio1k.hdr", function(texture) {
            texture.mapping = EquirectangularReflectionMapping;
            //scene.background = texture;
            scene.environment = texture;
        });
      
}

export { loadHDR };
