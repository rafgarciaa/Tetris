import Player from './player.js';

export default class Board {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.grid = [];

    this.piece = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];

    this.lastTime = 0;
    this.dropCounter = 0;
    this.dropInterval = 1000;

    this.collide = this.collide.bind(this);
    this.merge = this.merge.bind(this);
    this.updateBoard = this.updateBoard.bind(this);

    this.player = new Player(this.collide, this.merge);
    this.createGrid(10, 20);
  }

  collide() {
    const [p, o] = [this.piece, this.player.pos];

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

  clearBoard() {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  draw() {
    this.clearBoard();
    this.drawMatrix(this.grid, { x: 0, y: 0 });
    this.drawMatrix(this.piece, this.player.pos);
  }

  // draws either a single piece or the actual grid
  drawMatrix(matrix, offset) {
    matrix.forEach( (row, y) => {
      row.forEach( (value, x) => {
        if (value !== 0) {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  }

  dropPiece(time) {
    const deltaTime = time - this.lastTime;
    this.lastTime = time;

    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) {
      this.player.playerDrop();
      this.dropCounter = 0;
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
  }

  updateBoard(time = 0) {
    this.dropPiece(time);

    this.draw();
    requestAnimationFrame(this.updateBoard);
  }
}
