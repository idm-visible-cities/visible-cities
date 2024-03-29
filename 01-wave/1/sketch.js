const GRID_SIZE = 100;
let NUM_COLS;
let NUM_ROWS;

function setup() {
  createCanvas(windowWidth, windowHeight);
  NUM_COLS = ceil(width / GRID_SIZE);
  NUM_ROWS = ceil(height / GRID_SIZE);

  noLoop();
  noStroke();
}

function draw() {
  background(250, 50, 150);

  for (let yi = 0; yi < NUM_ROWS; yi++) {
    for (let xi = 0; xi < NUM_COLS; xi++) {
      let mTile = random(TILES);
      mTile.draw(xi, yi, GRID_SIZE);
    }
  }
}
