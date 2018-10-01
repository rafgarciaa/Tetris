// import Piece from './piece.js';

export default class Player {
  constructor(collide, merge, rotatePiece, clearGrid) {
    this.collide = collide;
    this.merge = merge;
    this.rotatePiece = rotatePiece;
    this.clearGrid = clearGrid;
    this.pos = { x: 3, y: 0 };
    this.reset = this.reset.bind(this);
    this.score = 0;
  }

  drop() {
    this.pos.y++;

    if (this.collide()) {
      this.pos.y--;
      this.merge();
      this.reset();
    }
  }

  move(dir) {
    this.pos.x += dir;

    if (this.collide()) {
      this.pos.x -= dir;
    }
  }

  rotate(piece, dir) {
    const pos = this.pos.x;
    let offset = 1;
    while(this.collide()) {
      this.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > piece[0].length) {
        this.rotatePiece(piece, -dir);
        this.pos.x = pos;
        return;
      }
    }
  }

  reset() {
    this.pos = { x: 3, y: 0 };
    this.clearGrid();
  }

  // end of class
}
