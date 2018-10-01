export default class Piece {
  constructor() {
    // this.pieces = "TOLJISZ";
    this.pieces = {
      'T': [
        [0, 0, 0],
        [5, 5, 5],
        [0, 5, 0],
      ],
      'O': [
        [7, 7],
        [7, 7],
      ],
      'L': [
        [0, 4, 0],
        [0, 4, 0],
        [0, 4, 4],
      ],
      'J': [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
      'I': [
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
      ],
      'S': [
        [0, 0, 0],
        [0, 3, 3],
        [3, 3, 0],
      ],
      'Z': [
        [0, 0, 0],
        [6, 6, 0],
        [0, 6, 6],
      ]
    };
  }

  generatePiece() {
    const pieces = "TOLJISZ";
    const randPiece = pieces[
      Math.floor( pieces.length * Math.random() )
    ];
    return this.pieces[randPiece];
  }

  // end of class
}
