import Board from './board.js';

window.addEventListener("keydown", function(e) {
    // space, arrow keys and enter
    if([13, 32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('DOMContentLoaded', () => {
  const boardCanvas = document.getElementById('tetris');
  const nextPieceCanvas = document.getElementById('next-piece');
  const boardCtx = boardCanvas.getContext('2d');
  boardCtx.scale(30, 30);

  let gameRun = false;
  let board = new Board(boardCanvas.width, boardCanvas.height, boardCtx);

  boardCtx.font = "1px serif";
  boardCtx.fillStyle = "white";
  boardCtx.textAlign = "center";
  boardCtx.fillText(
    'Press Enter to Play',
    (boardCanvas.width/30) / 2,
    (boardCanvas.width/30) / 2
  );
  // board background
  $l('#tetris').attr(
    'style',
    "background: url('./assets/stars.gif') no-repeat; background-size: cover;"
  );

  // next piece background
  $l('#next-piece').attr(
    'style',
    "background: url('./assets/stars.gif') no-repeat; background-size: cover;"
  );

  document.addEventListener('keydown', e => {
    if (e.keyCode === 13 && !gameRun) {
      gameRun = true;

      if (gameRun) {
        board.updateBoard(); // re-renders the grid
        board.updateScore();
      }
    }
  });

  // for testing purposes only START
  window.board = board;
  window.player = board.player;
  window.board.merge = board.merge;
  // for testing purposes only END

  document.addEventListener('keydown', e => { // listens for player input
    // e.preventDefault();
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
