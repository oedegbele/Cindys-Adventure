import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import StartUpdateComponent from "./StartUpdateComponent.js"

class StartGameObject extends GameObject{
  constructor(x,y,text,color){
    super();
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,this.text, "100px sans"))
    this.components.push(new TextDraw(this, this.color))
    this.components.push(new StartUpdateComponent(this))
  }
}

export default StartGameObject;