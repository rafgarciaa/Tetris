export default class Piece {
  constructor() {
    this.pieces = "TOLJISZ";
  }

  createPiece(type) {
    if (type === 'T') {
      return [
        [0, 0, 0],
        [5, 5, 5],
        [0, 5, 0],
      ];
    } else if (type === 'O') {
      return [
        [7, 7],
        [7, 7],
      ];
    } else if (type === 'L') {
      return [
        [0, 4, 0],
        [0, 4, 0],
        [0, 4, 4],
      ];
    } else if (type === 'J') {
      return [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ];
    } else if (type === 'I') {
      return [
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
      ];
    } else if (type === 'S') {
      return [
        [0, 0, 0],
        [0, 3, 3],
        [3, 3, 0],
      ];
    } else if (type === 'Z') {
      return [
        [0, 0, 0],
        [6, 6, 0],
        [0, 6, 6],
      ];
    }
  }

  generatePiece() {
    const randPiece = this.pieces[
      Math.floor( this.pieces.length * Math.random() )
    ];
    return this.createPiece(randPiece);
  }

  rotate(piece, dir) {
    for (let j = 0; j < piece.length; j++) {
      for (let i = 0; i < j; i++) {
        [
          piece[i][j],
          piece[j][i],
        ] = [
          piece[j][i],
          piece[i][j],
        ];
      }
    }

    if (dir > 0) {
      piece.forEach( row => row.reverse());
    } else {
      piece.reverse();
    }
  }

  // end of class
}

// s - 83
// d - 68
