export default class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.piece = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
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
}
