import GameObject from "../engine/GameObject.js";
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";


class ButtonGameTextObject extends GameObject {
    constructor(parent,x,y){
        super(parent);
        this.components.push(new Text(this, x,y, "Next", "50px sans"));
        this.components.push(new TextDraw(this, "black", "black"))

    }
}

export default ButtonGameTextObject;