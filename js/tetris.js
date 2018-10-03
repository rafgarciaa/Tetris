import Board from './board.js';
import Sound from './sound.js';

window.addEventListener("keydown", function(e) {
    // space, arrow keys and enter
    if([13, 32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('DOMContentLoaded', () => {
  const boardCanvas = document.getElementById('tetris');
  const boardCtx = boardCanvas.getContext('2d');
  boardCtx.scale(30, 30);

  const nextPieceCanvas = document.getElementById('next-piece');
  const nextPieceCtx = nextPieceCanvas.getContext('2d');
  nextPieceCtx.scale(35, 35);

  let sound = new Sound('./assets/tetris_music.mp3');
  let board = new Board(
    boardCanvas.width,
    boardCanvas.height,
    boardCtx,
    nextPieceCtx
  );

  boardCtx.font = "1px serif";
  boardCtx.fillStyle = "white";
  boardCtx.textAlign = "center";
  boardCtx.fillText(
    'Press Enter to Play',
    (boardCanvas.width/30) / 2,
    (boardCanvas.width/30) / 2
  );

  // board background
  $k('#tetris').attr(
    'style',
    "background: url('./assets/stars.gif') no-repeat; background-size: cover;"
  );

  // next piece background
  // $k('#next-piece').attr(
  //   'style',
  //   "background: url('./assets/stars.gif') no-repeat; background-size: cover;"
  // );

  // sound button background
  $k('#sound-btn').attr(
    'style',
    "background: url('./assets/stars.gif') no-repeat; background-size: cover;"
  );

  document.addEventListener('keydown', e => {
    if (e.keyCode === 13 && !board.gameRun) {
      board.gameRun = true;

      if (board.gameRun) {
        board.updateBoard(); // re-renders the grid
        board.updateScore();
        sound.play();
        sound.soundOn = true;
      }

      console.table(board.grid);
    }
  });

  document.getElementById('sound-btn').onclick = function() {
    if (!board.gameRun) {
      sound.stop();
    } else if (board.gameRun && !sound.soundOn) {
      document.getElementById('sound-text').innerHTML = "Mute";
      sound.play();
      sound.soundOn = true;
    } else if (board.gameRun && sound.soundOn) {
      document.getElementById('sound-text').innerHTML = "Unmute";
      sound.stop();
      sound.soundOn = false;
    }
  };

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
