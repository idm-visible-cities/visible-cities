const GRID_SIZE = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
}

function draw() {
  background(250, 50, 150);
  noStroke();

  for (let y = 0; y < height; y += GRID_SIZE) {
    for (let x = 0; x < width; x += GRID_SIZE) {
      let mTile = random(TILES);
      mTile.draw(x, y, GRID_SIZE);
    }
  }
}
