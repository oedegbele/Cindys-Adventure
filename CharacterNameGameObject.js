import GameObject from "../engine/GameObject.js"
import TextDraw from "../engine/TextDraw.js";
import Text from "../engine/Text.js";
import CharacterNameUpdateComponent from "./CharacterNameUpdateComponent.js";

class CharacterNameGameObject extends GameObject {
    constructor(x, y) {
        super();
        this.components.push(new Text(this, x, y, "", "40px sans"));
        this.components.push(new TextDraw(this, "black","red"));
        this.components.push(new CharacterNameUpdateComponent(this));
    
    }
  
    

}

export default CharacterNameGameObject;