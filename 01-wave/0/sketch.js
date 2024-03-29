const GRID_SIZE = 100;
let NUM_COLS;
let NUM_ROWS;

function quarter(x, y, w, h = 0) {
  h = h || w;
  arc(x, y, 2*w, 2*h, 0, PI/2);
}

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
    const y = yi * GRID_SIZE;
    for (let xi = 0; xi < NUM_COLS; xi++) {
      const x = xi * GRID_SIZE;

      push();
      translate(x + GRID_SIZE / 2, y + GRID_SIZE / 2);
      rotate(radians(0));
      quarter(-GRID_SIZE / 2, -GRID_SIZE / 2, GRID_SIZE);
      pop();
    }
  }
}
