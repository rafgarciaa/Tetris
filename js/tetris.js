import Board from './board.js';
import Sound from './sound.js';

window.addEventListener("keydown", function(e) {
    // space, arrow keys and enter
    if([13, 32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('DOMContentLoaded', () => {
  // board canvas and ctx
  const boardCanvas = document.getElementById('tetris');
  const boardCtx = boardCanvas.getContext('2d');
  boardCtx.scale(30, 30);

  // next piece canvas and ctx
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

  const gameStart = () => {

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

    // sound button background
    $k('#sound-btn').attr(
      'style',
      "background: url('./assets/stars.gif') no-repeat; background-size: cover;"
    );
  };

  gameStart();

  // game start or game pause
  document.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      board.gameRun = true;

      if (board.gameFinished) {
        board.gameFinished = false;
        board.updateBoard(); // re-renders the grid
        sound.play();
        sound.soundOn = true;
      } else {
        if (board.gameRun && !board.gameFinished) {
          board.gamePause = !board.gamePause;
          board.updateBoard(); // re-renders the grid
          sound.play();
          sound.soundOn = true;

          if (board.gamePause && !board.gameFinished) {
            board.pause();
            document.getElementById('sound-text').innerHTML = "Mute";
            sound.stop();
          }

        }
      }
    }
  });

  // sound button
  document.getElementById('sound-btn').onclick = function() {
    if (!board.gameRun) {
      sound.stop();
    } else if (board.gameRun && !board.gamePause && !sound.soundOn) {
      document.getElementById('sound-text').innerHTML = "Mute";
      sound.play();
      sound.soundOn = true;
    } else if (board.gameRun && !board.gamePause && sound.soundOn) {
      document.getElementById('sound-text').innerHTML = "Unmute";
      sound.stop();
      sound.soundOn = false;
    }
  };

  // player moves
  document.addEventListener('keydown', e => { // listens for player input
    // e.preventDefault();
    if (board.gameRun && !board.gamePause && !board.gameFinished) {
      if (e.keyCode === 37) { // left
        board.player.move(-1);
      } else if (e.keyCode === 39) { // right
        board.player.move(1);
      } else if (e.keyCode === 40) { // (down) soft drop
        board.player.drop();
        board.dropCounter = 0;
      } else if (e.keyCode === 38) { // (up) rotate clockwise
        board.rotatePiece(1);
      } else if (e.keyCode === 32) { // (space) hard drop
        board.player.hardDrop();
      }
    }
  });

  let database = firebase.database();
  const saveScore = (score) => {
    const newScore = {};
    newScore.name = document.getElementById('score-input').value;
    newScore.score = score;
    if (newScore.name.length === 0) newScore.name = '?';
    database.ref('scores/').push(newScore);
  };

  $k('#score-submit-btn').on('click', (e) => {
    e.preventDefault();
    saveScore(board.player.score);
    board.player.score = 0;
    boardCtx.clearRect(0, 0, boardCanvas.width, boardCanvas.height);
    $k('#scores-form').attr('style', 'display: none;');
    board.gameRun = false;
    board.gamePause = true;
    board.gameFinished = false;
    gameStart();
  });
});
