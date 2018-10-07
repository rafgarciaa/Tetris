# [Tetris](http://tetris.rafgarcia.io)
A remake of the classic tile-matching puzzle video game which I am sure everyone is familiar with.
This game is implemented with HTML5 Canvas API played via web browser.

## Functionality & MVP
With this game, user's will be able to:

+ Start, pause, and reset the game.
+ Move pieces left and right.
+ Soft drop pieces.
+ Hard drop pieces. (under construction)
+ Toggle the background music

## Implementation
+ [Javascript](https://www.javascript.com/) for game logic.
+ [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for rendering.

### Board Creation
The board is a 2-dimensional array that consists a fixed width and height. In this case 10 x 20,
which is instantiated in the board class.

```
this.createGrid(10, 20);
```

```
createGrid(w, h) {
  while (h--) {
    this.grid.push(new Array(w).fill(0));
  }
  return this.grid;
}
```

The board visually looks like this:

Solarized dark                                                              | Solarized Ocean
:------------------------------------------------------------------------- :|:----------------------------------------------------------------------------------------:
![Board](https://github.com/rafgarciaa/Tetris/blob/master/assets/board.png) |  ![Tetris View](https://github.com/rafgarciaa/Tetris/blob/master/assets/tetris_view.png)

Empty slots are represented with a 0 and `merged` pieces represent a value (1 - 7) depending which
kind of piece it is.

"`Merged`" pieces are static pieces that are not moving. If you look closely, the dropping I piece on the right has not been "`merged`" onto the board yet.

### Piece Rotation
Each piece is represented using a matrix. This is how the T-piece is represented:

![Piece](https://github.com/rafgarciaa/Tetris/blob/master/assets/piece.png)

The rotatePiece function takes in a direction (1) when the `↑` (up arrow key) is pressed.
This rotates the piece clockwise.

```
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


## Wireframes
This game consist a single screen with the game board in the middle, next piece, score and
top score panes on the left, an instructions, links, and mute button pane on the right. Finally,
my portfolio page at the bottom of the canvas.

![Wireframes](https://github.com/rafgarciaa/Tetris/blob/master/assets/tetris_wireframes.jpg)

## Bonus Features
+ High Scores utilizing Google Firebase API
