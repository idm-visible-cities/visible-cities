const GRID_SIZE = 100;
let NUM_COLS;
let NUM_ROWS;

const grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  NUM_COLS = ceil(width / GRID_SIZE);
  NUM_ROWS = ceil(height / GRID_SIZE);

  noLoop();
  noStroke();

  for (let yi = 0; yi < NUM_ROWS; yi++) {
    for (let xi = 0; xi < NUM_COLS; xi++) {
      grid.push(new Gridy(xi, yi, grid.length));
    }
  }
}

function draw() {
  background(250, 50, 150);

  for (let i = 0; i < grid.length; i++) {
    const mGridy = grid[i];
    let mTile = TILES[mGridy.possibilities[0]];
    mTile.draw(mGridy.xi, mGridy.yi, GRID_SIZE);
    mGridy.debug(GRID_SIZE);
  }
}
