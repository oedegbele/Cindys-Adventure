import GameObject from "../engine/GameObject.js"
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import BallUpdateComponent from "./BallUpdateComponent.js";

class CircleGameObject extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Circle(this, x,y,w,h));
    this.components.push(new CircleDraw(this, "yellow","yellow"));
    this.components.push(new BallUpdateComponent(this));
  }
}

export default CircleGameObject;