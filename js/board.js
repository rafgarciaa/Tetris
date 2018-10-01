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

    this.lastTime = 0;
    this.dropCounter = 0;
    this.dropInterval = 1000;

    // this.draw = this.draw.bind(this);
    this.drawPiece = this.drawPiece.bind(this);
    this.dropPiece = this.dropPiece.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }

  clearBoard() {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  // draw() {
  //   this.clearBoard();
  //   this.drawPiece(this.player.pos);
  // }

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

  dropPiece(time) {
    // debugger
    const deltaTime = time - this.lastTime;
    this.lastTime = time;

    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) {
      this.player.pos.y++;
      this.dropCounter = 0;
    }
  }

  // update = updateBoard
  updateBoard(time = 0) {
    this.drawPiece(this.player.pos);
    this.dropPiece(time);
    // this.draw();
    this.clearBoard();
    this.drawPiece(this.player.pos);
    requestAnimationFrame(this.updateBoard);
  }
}
