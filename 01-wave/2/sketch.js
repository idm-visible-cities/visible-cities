const GRID_SIZE = 100;

const grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  for (let y = 0; y < height; y += GRID_SIZE) {
    for (let x = 0; x < width; x += GRID_SIZE) {
      grid.push(new Gridy(x,y));
    }
  }
}

function draw() {
  background(250, 50, 150);
  noStroke();

  for (let i = 0; i < grid.length; i++) {
    const mGridy = grid[i];
    let mTile = TILES[mGridy.possibilities[0]];
    mTile.draw(mGridy.x, mGridy.y, GRID_SIZE);
    text(i + ": " + mGridy.possibilities, mGridy.x, mGridy.y, GRID_SIZE, GRID_SIZE);
  }
}
