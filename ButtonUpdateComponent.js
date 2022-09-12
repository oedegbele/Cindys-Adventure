import Input from "../engine/Input.js";
import ButtonGameObject from "./ButtonGameObject.js";
import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Time from "../engine/Time.js";
import CindyGameObject from "./Sprites/CindySprite/CindyGameObject.js";
class ButtonUpdateComponent extends Component {
    constructor(parent) {
        super(parent);

    }

    update() {
        let mainSceneUpdate = Game.findByType("TextGameObject")[0];
        let mainSceneUpdateComponent = mainSceneUpdate.getComponent("MainSceneUpdate");
        let rectangle = this.parent.getComponent("Rectangle");
    

        if (Input.getMouseButtonDown(0)) {
            let mx = Input.getMousePosition().x;
            let my = Input.getMousePosition().y;

            if (mx > rectangle.x || mx < rectangle.x + rectangle.w && my > rectangle.y || my < rectangle.y + rectangle.h) {
                mainSceneUpdateComponent.stringIndex++;
                if (mainSceneUpdateComponent.stringIndex == 1){
                    var gameObject = Game.findByName("CindyNeckPieceRed")[0]
                  
                    gameObject.getComponent("CircleDraw").fillStyle="blue";
                }
                

                if (mainSceneUpdateComponent.stringIndex >= 4) {
                    Game.changeScene(2);
                }
            }
        }
    }
}
export default ButtonUpdateComponent;
