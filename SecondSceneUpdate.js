import Component from "../engine/Component.js";


class SecondSceneUpdate extends Component {
    constructor(parent){
    super(parent);
    this.strings = ["Hi this is second Scene",
                    "Second Scene Text 1,",
                    "Second Scene Text 2",
                    "Second Scene Text 3",
                    "Second Scene Text 4"];
    this.stringIndex = 0;
}
update() {
    let text = this.parent.getComponent("Text");
    text.text = this.strings[this.stringIndex];
}

}
export default SecondSceneUpdate;