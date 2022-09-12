import Scene from "../engine/Scene.js"
import StartGameObject from "./StartGameObject.js";
import ButtonGameObject from "./ButtonGameObject.js";

class StartScene extends Scene {
  constructor() {
    super("Main Pong Scene");
  }
  start(){
    this.gameObjects.push(new StartGameObject(345,203,"Visual Novel Game","white"));
   this.gameObjects.push(new StartGameObject(350,200,"Visual Novel Game","orange"));
   this.gameObjects.push(new StartGameObject(620,400,"Start","orange"));
  }
}

export default StartScene;
