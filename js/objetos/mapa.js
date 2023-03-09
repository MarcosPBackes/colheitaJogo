import { loadImage } from '../utils/loader.js';

export class Village {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = null;
    this.loadImage();
  }

  async loadImage() {
    this.image = await loadImage('./img/maps/mapa_vilarejo_01.png');
  }

  draw(ctx, cameraX, cameraY) {
    ctx.drawImage(this.image, this.x + cameraX, this.y + cameraY);
  }
}
