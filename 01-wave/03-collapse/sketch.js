const GRID_SIZE = 100;
let NUM_COLS;
let NUM_ROWS;

const grid = [];

function toI(xi, yi) {
  return yi * NUM_COLS + xi;
}

function updateGridElement(aGridy) {
  const mX = aGridy.xi;
  const mY = aGridy.yi;

  const tileIdx = aGridy.possibilities[0];

  // update RIGHT
  if (mX + 1 < NUM_COLS) {
    grid[toI(mX + 1, mY)].updateFromLeft(tileIdx);
  }

  // update BOTTOM
  if (mY + 1 < NUM_ROWS) {
    grid[toI(mX, mY + 1)].updateFromTop(tileIdx);
  }

  // update LEFT
  if (mX > 0) {
    grid[toI(mX - 1, mY)].updateFromRight(tileIdx);
  }

  // update TOP
  if (mY > 0) {
    grid[toI(mX, mY - 1)].updateFromBottom(tileIdx);
  }
}

function collapse(aGridy) {
  aGridy.possibilities = [random(aGridy.possibilities)];
  updateGridElement(aGridy);
}

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

  const byPossibilities = grid.toSorted((a, b) => a.possibilities.length - b.possibilities.length);
  const candidates = byPossibilities.filter((p) => p.possibilities.length > 1);

  if (candidates.length > 0) {
    const candidate = candidates[0];
    print("collapsing", candidate.i);
    collapse(grid[candidate.i]);
  } else {
    noLoop();
  }

  for (let i = 0; i < grid.length; i++) {
    const mGridy = grid[i];
    let mTile = TILES[mGridy.possibilities[0]];

    try {
      mTile.draw(mGridy.xi, mGridy.yi, GRID_SIZE);
    } catch {
      print(i, mTile);
    }
    mGridy.debug(GRID_SIZE);
  }
}

function mouseClicked() {
  redraw();
}
