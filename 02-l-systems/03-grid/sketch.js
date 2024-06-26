// https://www.robertdickau.com/lsys2d.html

const STEP = 32;
const ANGLE = 90;

let state;
let stateIdx;

RULES = {
  A: "+BDF-AFA-FBD+",
  B: "-ACF+BFB+FAC-",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
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
    const rWidth = STEP;

    if (mSymbol == "A") {
      fill(20, 80, 20);
      rect(x, y, rWidth);
    } else if (mSymbol == "B") {
      fill(20);
      rect(x, y, rWidth);
    } else if (mSymbol == "C") {
      fill(50);
      rect(x, y, rWidth);
    } else if (mSymbol == "D") {
      fill(200);
      rect(x, y, rWidth);
    }
  }
}

function mouseClicked() {
  redraw();
}
