import { DirectionalLight, AmbientLight, HemisphereLight} from '../three/build/three.module.js';


function createLights() {
  //create ambient light  
  const ambientLight = new HemisphereLight(
    'skyblue', //sky color
    'darkslategrey', //ground color
    5, //intensity
  );
  // create directional light 
    const mainLight = new DirectionalLight('white', 4)

    // position directional light
    mainLight.position.set(10, 10, 10)

  return { mainLight, ambientLight};
}

export { createLights };