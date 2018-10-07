import Player from './player.js';
import Piece from './piece.js';

export default class Board {
  constructor(width, height, ctx, nextPieceCtx) {
    this.gameRun = false;
    this.gamePause = true;
    this.gameFinished = false;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.nextPieceCtx = nextPieceCtx;
    this.grid = [];

    this.colors = [
      null,
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBgKD1y/D+Ifn7sCIOklQ2YBgFkNlgADSwpK2VkBGkW4udjuLp9GzY1OMW0Pb3AehhjurrBtpMLwC6AORlkKjEA2bUYBvBzcYPN+PjtKwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Br69fYxDV1EKNRrLCgBQXvPv4iQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQBReJAxJHOTqwAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Ly04z+IfnXhJoOYgTqYBgFkNlgADfTG5TMygjQL8/EzXD90CpsanGKadmZgPYzFiyaCbScXgF0AczLIVGIAsmsxDODj4gGb8enbFwYQG0SjAxQDkL0AcgEuTciGEHQBNltxGoDuApLDgFwD3tx+yCCiKo8ajWSFASkuePvpIwN6okNJSNjSAUwTiAYBmAE4vUBsIGI1ACRIDAAFHgyAvQDLGMRohqmBZyaQAKEMBXMuzIUwF4CyMwBvl5MXVeEacQAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg+D8l5T+I3vf0G4OTNBeYBgFkNlgADTi3L2NkBGsWFmfYd+k+NjU4xZz0FMF6GPdWRoFtJxeAXQB3sp4iUeYguxbTAH5hiCEf3zIwgNggGg2gGIDsBZC/cGlCNoOwC7DYitMADBcQEQr4vUCkARdefmUwEOdGjUaywoAkL7x9yYCe6FASEtgF6ACqiQFEgwA01eL2AiVhADKVGAAKPBgAewGWMYjRDFMDz0wgAUIZCuZfmAthLgBlZwBvBonjT09XegAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg2Fvy6T+IvvnlGIM6jxWYBgFkNlgADWTN8GBkBGnmE+FiOP1gDzY1OMVMFVzAehinZewA204uALsA5mSQqcQAZNdiGMAtwAw24+uHvwwgNohGBygGIHsB5AJcmpANIegCbLbiNADdBSSHAbkGPPh0hUGBTwc1GskKA1Jc8OnNNwb0RIeSkLClA5gmEA0CMANweoHYQMRqAEiQGAAKPBgAewGWMYjRDFMDz0wgAUIZCuZcmAthLgBlZwBQ3ZP3OaGtaAAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBgeJXf8h9EH/n4ksGGXxxMgwAyGyyABoIWTGZkBGnmExdj2HbrMjY1OMW81HTBehjXJeSCbScXgF0AczLIVGIAsmsxDGAXEQSb8fPNewYQG0SjAxQDkL0AcgEuTciGEHQBNltxGoDuApLDgFwDrnx8w6DDL4IajWSFASku+PTyFQN6okNJSNjSAUwTiAYBmAE4vUBsIGI1ACRIDAAFHgyAvQDLGMRohqmBZyaQAKEMBXMuzIUwF4CyMwBUFZC9raUyoQAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVQ4T2NkYGBg+Hln0n8QfeLSGwYLPREwDQLIbLAAGrAPamJkBGlm4+RjOHTyHjY1OMXszJXAehgPrqsD204uALsA5mSQqcQAZNdiGsDOAzHj5xcGBhAbRKMBFAOQvQB2AQ5NyGYQdgEWW3EagOECIgIBvxeINODK7bcMOqrCqNFIVhiQ4oVf3z8xoCc6lISELR3ANIFoEIAZgNsLlIQByFRiACjwYADsBVjGIEYzTA08M4EECGUomH9hLoS5AJSdASaukfnTt+kFAAAAAElFTkSuQmCC"
    ];

    this.lastTime = 0;
    this.dropCounter = 0;
    this.dropInterval = 500;

    this.collide = this.collide.bind(this);
    this.clearGrid = this.clearGrid.bind(this);
    this.merge = this.merge.bind(this);
    this.rotatePiece = this.rotatePiece.bind(this);

    this.player = new Player(
        this.collide,
        this.merge,
        this.rotatePiece,
        this.clearGrid
    );

    this.piece = new Piece().generatePiece();
    this.nextPiece = new Piece().generatePiece();
    this.createGrid(10, 20);
  }
//
  collide(pos) {
    const [p, o] = [this.piece, pos];

    for (let y = 0; y < p.length; y++) {
      for (let x = 0; x < p[y].length; x++) {
        if (p[y][x] !== 0 &&
            (this.grid[y + o.y] &&
            this.grid[y + o.y][x + o.x]) !== 0) {
              return true;
        }
      }
    }
    return false;
  }

  createGrid(w, h) {
    while (h--) {
      this.grid.push(new Array(w).fill(0));
    }
    return this.grid;
  }

  clearGrid() {
    if (this.collide( this.player.pos )) {
      this.grid.forEach( row => row.fill(0));
      this.player.score = 0;
      this.gameOver();
    }
    this.gridSweep();
  }

  clearBoard() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  clearNextPiece() {
    this.nextPieceCtx.clearRect(0, 0, 200, 140);
  }

  draw() {
    this.clearBoard();
    this.drawMatrix(this.grid, { x: 0, y: 0 });
    this.drawMatrix(this.piece, this.player.pos);
    this.drawNextPiece(this.nextPiece);
    this.drawOutline();
  }

  // draws either a single piece or the actual board grid
  drawMatrix(matrix, offset) {
    matrix.forEach( (row, y) => {
      row.forEach( (value, x) => {
        if (value !== 0) {

          let imageTag = document.createElement('img');
          imageTag.src = this.colors[value];
          this.ctx.drawImage(imageTag, x + offset.x , y + offset.y , 1, 1);

        }
      });
    });
  }

  drawOutline() {
    // ghost piece logic
    for ( let y = 0; y < 20; y++ ) {
      if (this.collide( { x: this.player.pos.x, y: y } ) && y >= this.player.pos.y) {

        this.piece.forEach( (row, j) => {
          row.forEach( (value, i) => {
            if (value !== 0) {

              this.ctx.fillStyle = 'rgba(255,255,255,0.15)';
              this.ctx.fillRect(i + this.player.pos.x, j + y - 1, 1, 1);

            }
          });
        });

      return false;
      }
    }
  }

  drawNextPiece() {
    this.nextPiece.forEach( (row, y) => {
      row.forEach( (value, x) => {
        if (value !== 0 && value !== 7) {

          let imageTag = document.createElement('img');
          imageTag.src = this.colors[value];
          this.nextPieceCtx.drawImage(imageTag, x + 1, y, 1, 1);

        }

        if (value === 7) { // this will account for the O piece to be rendered in the middle
          let imageTag = document.createElement('img');
          imageTag.src = this.colors[value];
          this.nextPieceCtx.drawImage(imageTag, x + 2, y + 0.5, 1, 1);
        }
      });
    });
  }

  dropPiece(time, dropInterval) {
    const deltaTime = time - this.lastTime;
    this.lastTime = time;

    this.dropCounter += deltaTime;
    if (this.dropCounter > dropInterval) {
      this.player.drop();
      this.dropCounter = 0;
    }
  }

  gameOver() {
    this.clearBoard();
    this.clearNextPiece();
    this.gameRun = false;
    this.gameFinished = true;
    this.ctx.font = "1px serif";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText('Game Over.', 5, 5);
    this.ctx.fillText('Press Enter to Retry.', 5, 8);
    this.gamePause = false;
  }

  gridSweep() {
    let rowCount = 0;
    // outer iterates over the rows of the grid
    // this outer loop starts at the bottom
    outer: for (let j = this.grid.length - 1; j > 0; j--) {
      // this inner loop iterates over the columns
      for (let i = 0; i < this.grid[j].length; i++) {
        if (this.grid[j][i] === 0) {
          continue outer;
        }
      }

      const row = this.grid.splice(j, 1)[0].fill(0);
      this.grid.unshift(row);
      j++;
      this.player.score += (rowCount + 1) * 100;
    }
  }

  merge() {
    this.piece.forEach( (row, y) => {
      row.forEach( (value, x) => {
        if (value !== 0) {
          this.grid[y + this.player.pos.y][x + this.player.pos.x] = value;
        }
      });
    });

    this.dropInterval = 500;
    this.updateNextPiece();
    this.clearNextPiece();
    this.drawNextPiece();
  }

  pause() {
    this.ctx.font = "1px serif";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText('Paused.', 5, 5);

    this.ctx.fillText('Press Enter to Unpause.', 5, 8);
  }

  rotatePiece(dir) {
    for (let j = 0; j < this.piece.length; j++) {
      for (let i = 0; i < j; i++) {
        [
          this.piece[i][j],
          this.piece[j][i],
        ] = [
          this.piece[j][i],
          this.piece[i][j],
        ];
      }
    }

    if (dir > 0) {
      this.piece.forEach( row => row.reverse() );
    } else {
      this.piece.reverse();
    }

    this.player.rotate(this.piece, dir);
  }

  updateBoard(time = 0) {
    if (this.gameRun && !this.gamePause) {
      this.dropPiece(time, this.dropInterval);
      this.draw();
      this.updateScore();
      requestAnimationFrame(this.updateBoard);
    } else if (!this.gameRun && !this.gamePause) {
      this.gameOver();
    }
  }

  updateNextPiece() {
    this.piece = this.nextPiece;
    this.nextPiece = new Piece().generatePiece();
  }

  updateScore() {
    document.getElementById('score').innerText = this.player.score;
  }

  // end of class
}
