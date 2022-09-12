import GameObject from "../engine/GameObject.js"
import MainSceneUpdate from "./MainSceneUpdate.js";
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import Input from "../engine/Input.js";

class TextGameObject extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Text(this, x,y, "", "35px sans"));
    this.components.push(new TextDraw(this, "black", "black"));
    this.components.push(new MainSceneUpdate(this));

  }

}

export default TextGameObject;