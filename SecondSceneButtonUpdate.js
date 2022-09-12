import Input from "../engine/Input.js";
import Component from "../engine/Component.js";
import Game from "../engine/Game.js";

class SecondSceneButtonUpdate extends Component {
    constructor(parent){
        super(parent);
    }

    update() {
        let gameObject = Game.findByType("TextGameObject2")[0];
        let secondSceneUpdateComponent = gameObject.getComponent("SecondSceneUpdate");
        if (Input.getMouseButtonDown(0)) {
            secondSceneUpdateComponent.stringIndex++;
        } 
        if (secondSceneUpdateComponent.stringIndex > 4){
         
            Game.changeScene(4);
         } 
    } 
}
export default SecondSceneButtonUpdate;