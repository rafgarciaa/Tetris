export default class Board {
  constructor(width, height, ctx, player) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.player = player;
    this.piece = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];

    this.draw = this.draw.bind(this);
    this.drawPiece = this.drawPiece.bind(this);
  }

  clearBoard() {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  draw() {
    this.clearBoard();
    this.drawPiece(this.player.pos);
  }

  // offset === playerPos
  drawPiece(playerPos) {
    this.piece.forEach( (row, y) => {
      row.forEach( (value, x) => {
        if (value !== 0) {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(x + playerPos.x, y + playerPos.y, 1, 1);
        }
      });
    });
  }

  // update = updateBoard
  updateBoard() {
    this.draw();
    requestAnimationFrame(this.updateBoard);
  }
}
