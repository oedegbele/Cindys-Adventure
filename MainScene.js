import Scene from "../engine/Scene.js"
import RectangleGameObject from "./WallGameObject.js";
import TextGameObject from "./TextGameObject.js";
import ButtonGameObject from "./ButtonGameObject.js";
import CharacterNameGameObject from "./CharacterNameGameObject.js";
import CindyGameObject from "./Sprites/CindySprite/CindyGameObject.js";
import CindyRectangleParts from "./Sprites/CindySprite/CindyRectangleParts.js";
import CindyCircleParts from "./Sprites/CindySprite/CindyCircleParts.js";
import CindyControllerComponent from "./Sprites/CindySprite/CindyControllerComponent.js";
import PrefabCircle from "../engine/PrefabCircle.js";
import MainSceneUpdate from "./MainSceneUpdate.js";
// import ButtonGameTextObject from "./ButtonGameTextObject.js";
class MainScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }

  start() {

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

    for (let gameObject of CindyGameObject){
      this.gameObjects.push(gameObject); 
    }
    
    // this.gameObjects.push(new RectangleGameObject(startX - 40, startY + 500, wallLength + 1200, wallWidth - 900)); // Canvas Outline
    this.gameObjects.push(new RectangleGameObject(startX - 40, startY + 600, 300, -260)); // Character name box


    this.gameObjects.push(new RectangleGameObject(startX - 40, startY + 600, 1400, -200));

 
    this.gameObjects.push(new CharacterNameGameObject(60, 480, "Green")); // Character name

   
  
   
    this.gameObjects.push(new ButtonGameObject(1310, 700, 150, -180, 1340, 625, "purple"));
    this.gameObjects.push(new TextGameObject(60, 550,)); // TextBox Text
 

    
    // this.gameObjects.push(new BackgroundGameObject(0,0,backgroundImage));
    // Next Button Object


    //Add the ball
    // this.gameObjects.push(new BallGameObject(200, 200, 20))
  }
}



export default MainScene;