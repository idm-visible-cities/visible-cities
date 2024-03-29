const GRID_SIZE = 50;

const grid = [];
const updateQueue = [];
let hasUpdated = {};

function toI(x, y) {
  const x_count = ceil(width / GRID_SIZE);
  const x_p = floor(x / GRID_SIZE);
  const y_p = floor(y / GRID_SIZE);
  return y_p * x_count + x_p;
}

function addToQueue(idx) {
  if (!(idx in hasUpdated)) {
    updateQueue.push(idx);
    hasUpdated[idx] = idx;
  }
}

function updateGridElement(aGridy) {
  const mX = aGridy.x;
  const mY = aGridy.y;

  // update RIGHT
  if (mX + GRID_SIZE < width) {
    const rIdx = toI(mX + GRID_SIZE, mY);
    grid[rIdx].updateFromLeft(aGridy.possibilities);
    addToQueue(rIdx);
  }

  // update BOTTOM
  if (mY + GRID_SIZE < height) {
    const bIdx = toI(mX, mY + GRID_SIZE);
    grid[bIdx].updateFromTop(aGridy.possibilities);
    addToQueue(bIdx);
  }

  // update LEFT
  if (mX > GRID_SIZE) {
    const lIdx = toI(mX - GRID_SIZE, mY);
    grid[lIdx].updateFromRight(aGridy.possibilities);
    addToQueue(lIdx);
  }

  // update TOP
  if (mY > GRID_SIZE) {
    const tIdx = toI(mX, mY - GRID_SIZE);
    grid[tIdx].updateFromBottom(aGridy.possibilities);
    addToQueue(tIdx);
  }
}

function collapse(aGridy) {
  aGridy.possibilities = [random(aGridy.possibilities)];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
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
    const candidateIdx = toI(candidate.x, candidate.y);

    print("collapsing", candidateIdx);
    collapse(grid[candidateIdx]);

    updateQueue.push(candidateIdx);
    hasUpdated[candidateIdx] = candidateIdx;
  } else {
    noLoop();
  }

  while (updateQueue.length > 0) {
    const updateIdx = updateQueue.shift();
    updateGridElement(grid[updateIdx]);
  }
  hasUpdated = {};

  for (let i = 0; i < grid.length; i++) {
    const mGridy = grid[i];
    let mTile = TILES[mGridy.possibilities[0]];
    mTile.draw(mGridy.x, mGridy.y, GRID_SIZE);
  }
}

function mouseClicked() {
  redraw();
}
