export class Village {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}
