import { setupModel } from './setupModel.js';
import { GLTFLoader } from '../../three/examples/jsm/loaders/GLTFLoader.js';

async function load3dModel() {
  const loader = new GLTFLoader();

    const [ModelData] = await Promise.all([ 
      loader.loadAsync('../assets/models/B-frame.glb')
    ]);

    console.log('Importerad data',ModelData);

    const Model = setupModel(ModelData);
    //Model.position.set(0, 0, -5);

    

    return {
      Model,
    };
}

export { load3dModel };