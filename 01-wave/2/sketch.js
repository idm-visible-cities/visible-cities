const GRID_SIZE = 100;

const TILE_POSSIBILITIES = TILES.map((_, i) => i);
const GRID_POSSIBILITIES = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  for (let y = 0; y < height; y += GRID_SIZE) {
    for (let x = 0; x < width; x += GRID_SIZE) {
      GRID_POSSIBILITIES.push({
        x: x,
        y: y,
        possibilities: TILE_POSSIBILITIES.slice(),
      });
    }
  }
}

function draw() {
  background(250, 50, 150);
  noStroke();

  for (let i = 0; i < GRID_POSSIBILITIES.length; i++) {
    const mGridElement = GRID_POSSIBILITIES[i];
    const mGridPossibilities = mGridElement.possibilities;
    let mTile = TILES[mGridPossibilities[0]];

    if (mGridPossibilities.length > 1) {
      mTile = TILES[random(mGridPossibilities)];
    }
    mTile.draw(mGridElement.x, mGridElement.y, GRID_SIZE);
  }
}
