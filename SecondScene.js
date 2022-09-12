import Scene from "../engine/Scene.js";
import TextGameObject2 from "./TextGameObject2.js"
import ButtonGameObject from "./ButtonGameObject.js";
import RectangleGameObject from "./WallGameObject.js";
import CharacterNameGameObject from "./CharacterNameGameObject.js";
import ButtonGameObject2 from "./ButtonGameObject2.js";
class SecondScene extends Scene {
    constructor() {
        super("Main Pog Scene");

    }
start(){
        //Add the walls
        let startX = 100;
        let startY = 100;
        let wallWidth = 10;
        let wallLength = 200;
        let textArea_width = wallLength - (MARGIN_SIDES * 2);
        //Textbox
        var MARGIN_SIDES = 10;
        var MARGIN_BOTTOM = 10;
        let TEXTAREA_HEIGHT = 150;
        let textArea_x = MARGIN_SIDES;
        let textArea_y = wallWidth - TEXTAREA_HEIGHT - MARGIN_BOTTOM;
        let gameObjects = [];
        let canvas = document.getElementById('canv');
          let ctx = canvas.getContext('2d');
          this.gameObjects.push(new RectangleGameObject(startX - 40, startY + 600, 300, -260));
          this.gameObjects.push(new RectangleGameObject(startX - 40, startY + 600, 1400, -200));
          this.gameObjects.push(new CharacterNameGameObject(60, 480, "Green")); // Character name
          this.gameObjects.push(new TextGameObject2(60, 550,)); // TextBox Text
          this.gameObjects.push(new ButtonGameObject2(1310,700, 150, -180,1340,625, "purple")); 
}

} 
export default SecondScene;