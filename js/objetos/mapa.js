export class Village {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    draw(ctx, cameraX, cameraY) {
        ctx.drawImage(this.image, this.x + cameraX, this.y + cameraY);
    }
}
