// import Piece from './piece.js';

export default class Player {
  constructor(collide, merge) {
    this.collide = collide;
    this.merge = merge;
    this.pos = { x: 5, y: 5 };
    // this.piece = new Piece();
  }

  playerDrop() {
    this.pos.y++;

    if (this.collide()) {
      this.pos.y--;
      this.merge();
      this.pos.y = 0;
    }
  }

  playerMove(dir) {
    this.pos.x += dir;

    if (this.collide()) {
      this.pos.x -= dir;
    }
  }
}
