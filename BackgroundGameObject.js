import GameObject from "../engine/GameObject.js";

import Text from "../engine/Text.js";

import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
class BackgroundGameObject extends GameObject {
    constructor(x,y,w,h,color){
        super(parent);

        this.components.push(new Rectangle(this,x,y,w,h));
        this.components.push(new RectangleDraw(this,color));        
}
}

export default BackgroundGameObject;