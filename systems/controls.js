import { OrbitControls } from '../three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas ) {
    
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.25;
    controls.minDistance = 0.075;
    controls.maxDistance = 0.5;

    controls.tick = () => controls.update();
    
    return controls;
    
}



export { createControls };