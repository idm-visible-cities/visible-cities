// https://www.robertdickau.com/lsys2d.html

const STEP = 32;
const ANGLE = 90;

let state;
let stateIdx;

RULES = {
  A: "+BF-AFA-FB+",
  B: "-AF+BFB+FA-",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  rectMode(CENTER);
  state = "A";
}

function draw() {
  background(250, 50, 150);

  // UPDATE STATE
  let nState = "";
  for (let si = 0; si < state.length; si++) {
    const mLetter = state[si];
    nState += RULES[mLetter] || mLetter;
  }
  if (nState.length < 2 ** 14 - 1) {
    state = nState;
  }

  let currentAngle = 0;
  let x = 0;
  let y = 0;

  for (let si = 0; si < state.length; si++) {
    const mSymbol = state[si];

    // UPDATE POSITION
    if (mSymbol == "F") {
      x += STEP * cos(radians(currentAngle));
      y += STEP * sin(radians(currentAngle));
    } else if (mSymbol == "+") {
      currentAngle += ANGLE;
    } else if (mSymbol == "-") {
      currentAngle -= ANGLE;
    }

    // DRAW
    const rWidth = randomGaussian(STEP, STEP / 8);

    if (mSymbol == "A") {
      fill(20);
      rect(x, y, rWidth);
      rect(x, y, -rWidth);
    } else if (mSymbol == "B") {
      fill(50);
      rect(x, y, rWidth, -rWidth);
      rect(x, y, -rWidth, rWidth);
    } else if (mSymbol == "+") {
      fill(200);
      rect(x, y, rWidth, -1.5 * rWidth);
      rect(x, y, -1.5 * rWidth, rWidth);
    } else if (mSymbol == "-") {
      fill(20, 80, 20);
      rect(x, y, rWidth);
      rect(x, y, -rWidth);
    }
  }
}

function mouseClicked() {
  redraw();
}
