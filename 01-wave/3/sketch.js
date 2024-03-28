const GRID_SIZE = 200;
const TILE_POSSIBILITIES = TILES.map((_, i) => i);
const GRID_POSSIBILITIES = [];

function toI(x, y) {
  const x_count = ceil(width / GRID_SIZE);
  const x_p = floor(x / GRID_SIZE);
  const y_p = floor(y / GRID_SIZE);
  return y_p * x_count + x_p;
}

function collapse(mGridElement) {
  const mGridPossibilities = mGridElement.possibilities;
  const mX = mGridElement.x;
  const mY = mGridElement.y;

  const mTile = random(mGridPossibilities)
  mGridElement.possibilities = [mTile];

  // update RIGHT
  if (mX + GRID_SIZE < width) {
    const mNeighbor = GRID_POSSIBILITIES[toI(mX + GRID_SIZE, mY)];
    mNeighbor.possibilities = mNeighbor.possibilities.filter((p) => TILES[p].allowLeft(mTile));
  }

  // update BOTTOM
  if (mY + GRID_SIZE < height) {
    const mNeighbor = GRID_POSSIBILITIES[toI(mX, mY + GRID_SIZE)];
    mNeighbor.possibilities = mNeighbor.possibilities.filter((p) => TILES[p].allowTop(mTile));
  }

  // update LEFT
  if (mX > GRID_SIZE) {
    const mNeighbor = GRID_POSSIBILITIES[toI(mX - GRID_SIZE, mY)];
    mNeighbor.possibilities = mNeighbor.possibilities.filter((p) => TILES[p].allowRight(mTile));
  }

  // update TOP
  if (mY > GRID_SIZE) {
    const mNeighbor = GRID_POSSIBILITIES[toI(mX, mY - GRID_SIZE)];
    mNeighbor.possibilities = mNeighbor.possibilities.filter((p) => TILES[p].allowBottom(mTile));
  }
}

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

  const byPossibilities = GRID_POSSIBILITIES.toSorted((a, b) => a.possibilities.length - b.possibilities.length);
  const candidates = byPossibilities.filter((p) => p.possibilities.length > 1);

  if (candidates.length > 0) {
    const candidate = candidates[0];
    print("collapsing", toI(candidate.x, candidate.y));
    collapse(GRID_POSSIBILITIES[toI(candidate.x, candidate.y)]);
  }

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

function mouseClicked() {
  redraw();
}
