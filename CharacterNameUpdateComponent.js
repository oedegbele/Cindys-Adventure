import Component from "../engine/Component.js";


class CharacterNameUpdateComponent extends Component{
    constructor(parent){
        super(parent)
        this.strings = "Cindy";
        
    }
    update(){
        let text = this.parent.getComponent("Text");
        text.text = this.strings;
    }
}

export default CharacterNameUpdateComponent;