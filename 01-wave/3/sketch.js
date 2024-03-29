const GRID_SIZE = 200;

const grid = [];

function toI(x, y) {
  const x_count = ceil(width / GRID_SIZE);
  const x_p = floor(x / GRID_SIZE);
  const y_p = floor(y / GRID_SIZE);
  return y_p * x_count + x_p;
}

function updateGridElement(aGridy) {
  const mX = aGridy.x;
  const mY = aGridy.y;

  const tileIdx = aGridy.possibilities[0];

  // update RIGHT
  if (mX + GRID_SIZE < width) {
    grid[toI(mX + GRID_SIZE, mY)].updateFromLeft(tileIdx);
  }

  // update BOTTOM
  if (mY + GRID_SIZE < height) {
    grid[toI(mX, mY + GRID_SIZE)].updateFromTop(tileIdx);
  }

  // update LEFT
  if (mX > GRID_SIZE) {
    grid[toI(mX - GRID_SIZE, mY)].updateFromRight(tileIdx);
  }

  // update TOP
  if (mY > GRID_SIZE) {
    grid[toI(mX, mY - GRID_SIZE)].updateFromBottom(tileIdx);
  }
}

function collapse(aGridy) {
  aGridy.possibilities = [random(aGridy.possibilities)];
  updateGridElement(aGridy);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();

  for (let y = 0; y < height; y += GRID_SIZE) {
    for (let x = 0; x < width; x += GRID_SIZE) {
      grid.push(new Gridy(x, y));
    }
  }
}

function draw() {
  background(250, 50, 150);

  const byPossibilities = grid.toSorted((a, b) => a.possibilities.length - b.possibilities.length);
  const candidates = byPossibilities.filter((p) => p.possibilities.length > 1);

  if (candidates.length > 0) {
    const candidate = candidates[0];
    print("collapsing", toI(candidate.x, candidate.y));
    collapse(grid[toI(candidate.x, candidate.y)]);
  }

  for (let i = 0; i < grid.length; i++) {
    const mGridy = grid[i];
    let mTile = TILES[mGridy.possibilities[0]];
    mTile.draw(mGridy.x, mGridy.y, GRID_SIZE);
    text(i + ": " + mGridy.possibilities, mGridy.x, mGridy.y, GRID_SIZE, GRID_SIZE);
  }
}

function mouseClicked() {
  redraw();
}
