import { loadImage } from '../utils/loader.js';

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = null;
    this.speed = 5;
    this.loadImage();
  }
  async loadImage() {
    this.image = await loadImage('./img/npcs/personagem_baixo.png');
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
