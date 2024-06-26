const GRID_SIZE = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();

  noiseDetail(6, 0.5);
}

function draw() {
  background(255);

  for (let y = 0; y < height; y+=GRID_SIZE) {
    for (let x = 0; x < width; x+=GRID_SIZE) {
      let c = 255 * noise(x / 100, y / 100);

      // CHEAP BANDS !
      // c = floor(c / 50) * 50;

      fill(c);
      rect(x, y, GRID_SIZE, GRID_SIZE);
    }
  }
}
