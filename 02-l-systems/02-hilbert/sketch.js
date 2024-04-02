// https://www.robertdickau.com/lsys2d.html

const STEP = 40;
const ANGLE = 90;

let state;
let stateIdx;

RULES = {
  A: "+BF-AFA-FB+ ",
  B: "-AF+BFB+FA- ",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  strokeWeight(2);
  state = "A";
}

function draw() {
  background(250, 50, 150);
  text(state, 10, 10, width - 20, height - 20);

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
  let x1 = 0;
  let y1 = 0;

  for (let si = 0; si < state.length; si++) {
    const mSymbol = state[si];

    // UPDATE POSITION
    if (mSymbol == 'F') {
      x1 = x + STEP * cos(radians(currentAngle));
      y1 = y + STEP * sin(radians(currentAngle));
    } else if (mSymbol == '+') {
      currentAngle += ANGLE;
    } else if (mSymbol == '-') {
      currentAngle -= ANGLE;
    }

    // DRAW
    line(x, y, x1, y1);
    x = x1;
    y = y1;
  }
}

function mouseClicked() {
  redraw();
}
