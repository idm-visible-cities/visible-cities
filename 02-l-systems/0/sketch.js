// https://www.youtube.com/watch?v=E1B4UoSQMFw

const GRID_SIZE = 100;
let NUM_COLS;
let NUM_ROWS;

function setup() {
  createCanvas(windowWidth, windowHeight);
  NUM_COLS = ceil(width / GRID_SIZE);
  NUM_ROWS = ceil(height / GRID_SIZE);

  noLoop();
}

function draw() {
  background(250, 50, 150);

  for (let yi = 0; yi < NUM_ROWS; yi++) {
    const y = yi * GRID_SIZE;
    for (let xi = 0; xi < NUM_COLS; xi++) {
      const x = xi * GRID_SIZE;
      rect(x, y, GRID_SIZE);
    }
  }
}
