export class Player {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.speed = 5;
    }

    draw(ctx, cameraX, cameraY) {
        const spriteWidth = this.image.width / 4;
        const spriteHeight = this.image.height;
        ctx.drawImage(
            this.image,
            0,
            0,
            spriteWidth,
            spriteHeight, 
            this.x - spriteWidth / 2 + cameraX, 
            this.y - spriteHeight / 2 + cameraY, 
            spriteWidth, 
            spriteHeight
        );
    }
    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}
