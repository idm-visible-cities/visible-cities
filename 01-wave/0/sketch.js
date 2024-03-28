const GRID_SIZE = 100;

function quarter(x, y, w, h = 0) {
  h = h || w;
  arc(x, y, 2*w, 2*h, 0, PI/2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
}

function draw() {
  background(250, 50, 150);

  for (let y = 0; y < height; y += GRID_SIZE) {
    for (let x = 0; x < width; x += GRID_SIZE) {
      push();
      translate(x + GRID_SIZE / 2, y + GRID_SIZE / 2);
      rotate(radians(0));
      quarter(-GRID_SIZE / 2, -GRID_SIZE / 2, GRID_SIZE);
      pop();
    }
  }
}
