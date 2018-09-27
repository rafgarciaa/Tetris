let canvas = document.getElementById("tetris");
let ctx = canvas.getContext('2d');
ctx.scale(30, 30);

ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const grid = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];

let draw = () => {
  drawGrid(player.grid, player.pos);
};

let drawGrid = (grid, offset) => {
  grid.forEach( (row, y) => {
    row.forEach( (value, x) => {
      if (value !== 0) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x + offset.x,
                     y + offset.y,
                     1, 1);
      }
    });
  });
};

let update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  requestAnimationFrame(update);
};

const player = {
  pos: {x: 5, y: 5},
  grid: grid,
};

update();
