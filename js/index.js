import { Game } from './jogo/jogo.js';
//Conecta ao canvas e inicia o jogo
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const game = new Game(canvas);
    game.start();
});
