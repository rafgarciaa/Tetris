import Board from './board.js';

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('tetris');
  const ctx = canvas.getContext('2d');
  ctx.scale(30, 30);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "1px serif";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText('Press Enter to Play', (canvas.width/30)/2, (canvas.width/30)/2);

  let gameRun = false;
  let board = new Board(canvas.width, canvas.height, ctx);

  document.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      gameRun = true;
    }

    if (gameRun) {
      board.updateBoard(); // re-renders the grid
      board.updateScore();
    }
  });

  // for testing purposes only START
  window.board = board;
  window.player = board.player;
  window.board.merge = board.merge;
  // for testing purposes only END

  document.addEventListener('keydown', e => { // listens for player input
    e.preventDefault();
    if (e.keyCode === 37) { // left
      board.player.move(-1);
    } else if (e.keyCode === 39) { // right
      board.player.move(1);
    } else if (e.keyCode === 40) { // drop
      board.player.drop();
      board.dropCounter = 0;
    } else if (e.keyCode === 83) {
      board.rotatePiece(-1);
    } else if (e.keyCode === 68) {
      board.rotatePiece(1);
    }
  });
});
