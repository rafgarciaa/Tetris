import Board from './board.js';
import Player from './player.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('tetris');
  const ctx = canvas.getContext('2d');

  ctx.scale(30, 30);

  // ctx.fillStyle = 'grey';
  // ctx.fillRect(0, 0, canvas.width, canvas.width);

  let player = new Player();
  let board = new Board(canvas.width, canvas.height, ctx, player);
  board.drawPiece(player.pos);
  board.updateBoard();

  window.board = board;
  window.player = player;

  // let gameRun = false;
  // const game = new Game();
  //
  // // selecting the button
  // const button = document.getElementById('start_game');
  //
  // button.onclick = () => {
  //   // toggleButton(button);
  //   gameRun = true;
  //
  //   if (gameRun) {
  //     game.update(); // re-renders the grid
  //   }
  // };

  document.addEventListener('keydown', e => { // listens for player input
    if (e.keyCode === 37) { // left
      board.player.pos.x--;
    } else if (e.keyCode === 39) { // right
      board.player.pos.x++;
    }
    // else if (e.keyCode === 40) { // drop
    //   // board.player.playerDrop();
    //   board.dropCounter = 0;
    // }
  });

  // window.merge = game.grid.merge;
});
