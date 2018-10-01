import Board from './board.js';
import Player from './player.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('tetris');
  const ctx = canvas.getContext('2d');
  ctx.scale(30, 30);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "1px serif";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText('Press Start to Play', (canvas.width/30)/2, (canvas.width/30)/2);


  // debugger
  let gameRun = false;
  let player = new Player();
  let board = new Board(canvas.width, canvas.height, ctx, player);

  // selecting the button
  const button = document.getElementById('start_game');
  button.onclick = () => {
    gameRun = true;

    if (gameRun) {
      board.updateBoard(); // re-renders the grid
    }
  };

  // for testing purposes only START
  window.board = board;
  window.player = player;
  // for testing purposes only END

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
});
