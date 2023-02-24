import { Player } from '../objetos/jogador.js';
import { Village } from '../objetos/mapa.js';
import { loadImage } from '../utils/loader.js';

canvas.width =  1024
canvas.height = 576

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.player = null;
        this.village = null;
        this.ctx.width = 1024;
        this.ctx.height = 576;
    }

    async start() {
        await this.loadAssets();
        this.player = new Player(this.canvas.width / 2, this.canvas.height / 2, this.playerImage);
        this.village = new Village(-3424, -2950, this.villageImage);
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowUp' || event.code === 'KeyW') {
              this.player.moveUp();
              console.log('sim');
            } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
              this.player.moveDown();
            } else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
              this.player.moveLeft();
            } else if (event.code === 'ArrowRight' || event.code === 'KeyD') {
              this.player.moveRight();
            }
          });
        this.update();
    }

    async loadAssets() {
        this.playerImage = await loadImage('./img/npcs/personagem_baixo.png');
        this.villageImage = await loadImage('./img/maps/mapa_vilarejo_01.png');
    }

    update() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        //Calcula a posiçao da camera em relaçao ao jogador
        const cameraX = this.canvas.width / 2 - this.player.x;
        const cameraY = this.canvas.height / 2 - this.player.y;

        //Desenha a vila e o jogador, com o deslocamento da camera
        this.village.draw(this.ctx, cameraX, cameraY);
        this.player.draw(this.ctx, cameraX, cameraY);

        requestAnimationFrame(() => this.update());
    }
}
