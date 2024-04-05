// https://www.robertdickau.com/lsys2d.html

const STEP = 64;
const ANGLE = 90;

let state;
let stateIdx;

let fillAlpha = 255;

RULES = {
  A: "+BDF-AFA-FBD+",
  B: "-ACF+BFB+FAC-",
};

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  stroke(10);
  rectMode(CENTER);
  state = "A";
}

function draw() {
  background(250, 50, 150);
  orbitControl();
  translate(-width, -height);

  // UPDATE STATE
  let nState = "";
  for (let si = 0; si < state.length; si++) {
    const mLetter = state[si];
    nState += RULES[mLetter] || mLetter;
  }
  if (nState.length < 2 ** 13 - 1) {
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

    push();
    if (mSymbol == "A") {
      fill(20, 80, 20, fillAlpha);
      let hh = 1;
      translate(x, y, hh * rWidth);
      box(rWidth, rWidth, 2 * hh * rWidth);
    } else if (mSymbol == "B") {
      fill(20, fillAlpha);
      let hh = 1;
      translate(x, y, hh * rWidth);
      box(rWidth, rWidth, 2 * hh * rWidth);
    } else if (mSymbol == "C") {
      fill(50, fillAlpha);
      let hh = 1;
      translate(x, y, hh * rWidth);
      box(rWidth, rWidth, 2 * hh * rWidth);
    } else if (mSymbol == "D") {
      fill(200, fillAlpha);
      let hh = 1;
      translate(x, y, hh * rWidth);
      box(rWidth, rWidth, 2 * hh * rWidth);
    }
    pop();
  }
}

function keyReleased() {
  if (key == 'a' || key == 'A') {
    fillAlpha = 255 - fillAlpha;
  }
}
