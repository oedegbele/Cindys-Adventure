import Component from "./Component.js";

class BackgroundDraw extends Component {
    constructor(parent, x, y) {
        super(parent);
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        let picture = this.parent.getComponent("Background");
        ctx.drawImage(picture.img, picture.x, picture.y);
    }
}

export default BackgroundDraw;