const GRID_SIZE_X = 2;
const GRID_SIZE_Y = 4;

function setup() {
  createCanvas(600, windowHeight);
  noLoop();
  noFill();
  stroke(0);

  noiseDetail(4, 0.5);
}

function draw() {
  background(255);

  for (let y = 0; y < height; y += GRID_SIZE_Y) {
    beginShape();
    for (let x = 0; x < width; x += GRID_SIZE_X) {
      dy = map(noise(x / 80, y / 60), 0, 1, -50, 50);
      vertex(x, y + dy);
    }
    endShape();
  }
}
