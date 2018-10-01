// import Piece from './piece.js';

export default class Player {
  constructor(collide, merge, rotatePiece) {
    this.collide = collide;
    this.merge = merge;
    this.rotatePiece = rotatePiece;
    this.pos = { x: 5, y: 5 };
    // this.piece = new Piece();
  }

  drop() {
    this.pos.y++;

    if (this.collide()) {
      this.pos.y--;
      this.merge();
      this.pos.y = 0;
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

  // end of class
}
