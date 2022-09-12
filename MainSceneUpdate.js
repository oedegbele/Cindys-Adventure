import Component from "../engine/Component.js"
import Input from "../engine/Input.js";
import Text from "../engine/Text.js";
import Game from "../engine/Game.js";

class MainSceneUpdate extends Component {
  constructor(parent) {
    super(parent);
    this.strings = ["Hello, my name is Cindy",
                    "Line 1",
                    "Line 2",
                    "Line 3"];
    this.stringIndex = 0;
  }

update() {
  let text = this.parent.getComponent("Text");
  
  text.text = this.strings[this.stringIndex]; // add .substring() - pass in time char / time 
}

}
export default MainSceneUpdate;