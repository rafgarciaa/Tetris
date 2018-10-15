# [Tetris!](http://tetris.rafgarcia.io)
A remake of the classic tile-matching puzzle video game. This game is implemented with HTML5 Canvas API played via web browser.

## Functionality & MVP
With this game, users are be able to:

+ Start, pause, and reset the game.
+ Move pieces left and right.
+ Rotate pieces.
+ Soft drop pieces.
+ Hard drop pieces.
+ Toggle the background music.
+ Keep track of their score.

## Implementation
+ [Javascript](https://www.javascript.com/) for game logic.
+ [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for rendering.
+ [KingDOM](https://github.com/rafgarciaa/kingDOM) for DOM manipulation.

### Board Creation
The board is a 2-dimensional array that consists a fixed width and height. In this case 10 x 20,
which is instantiated in the board class.

```javascript
this.createGrid(10, 20);
```

```javascript
createGrid(width, height) {
  while (height--) {
    this.grid.push(new Array(width).fill(0));
  }
}
```

The board visually looks like this:

| As a table:                                                               | In the actual canvas:                                                                  |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
![Board](https://github.com/rafgarciaa/Tetris/blob/master/assets/board.png) |  ![Tetris View](https://github.com/rafgarciaa/Tetris/blob/master/assets/tetris_view.png)

Empty slots are represented with a 0 and `merged` pieces represent a value (1 - 7) depending which
kind of piece it is.

"`Merged`" pieces are static pieces that are not moving. If you look closely, the dropping I piece on the right has not been "`merged`" onto the board yet.

### Piece Rotation
Each piece is represented using a matrix. This is how the T-piece looks like visually:

| As a table:                                                                  | In the actual canvas:                                                                |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
![T-Piece](https://github.com/rafgarciaa/Tetris/blob/master/assets/piece.png)  | ![T-Piece View](https://github.com/rafgarciaa/Tetris/blob/master/assets/t_piece.png) |

The rotatePiece function takes in a direction (1) when the `↑` (up arrow key) is pressed.
This rotates the piece clockwise.

```javascript
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
```

The code representation above can be visually represented as follows:
![Piece Rotation](https://github.com/rafgarciaa/Tetris/blob/master/assets/rotate.gif)

## Bonus Features
+ High Scores utilizing Google Firebase API
