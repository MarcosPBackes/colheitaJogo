import { Game } from './jogo/jogo.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const game = new Game(canvas);
    game.start();
});
