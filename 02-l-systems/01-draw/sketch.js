let state;
let stateIdx;

const DRAWSTEP = 20;
const LINELEN = 2 * DRAWSTEP;

RULES = {
  A: "ABC",
  B: "CCB",
  C: "BBC",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  strokeWeight(2);
  state = "A";
}

function draw() {
  background(250, 50, 150);

  let nState = "";
  for (let si = 0; si < state.length; si++) {
    const mLetter = state[si];
    nState += RULES[mLetter] || mLetter;
  }
  if (nState.length < 2 ** 12 - 1) {
    state = nState;
  }

  let x = 0;
  let y = 0;

  for (let si = 0; si < state.length; si++) {
    const mSymbol = state[si];

    if (mSymbol == 'A') {
      line(x, y, x + LINELEN, y + LINELEN);
      y += DRAWSTEP;
    } else if (mSymbol == 'B') {
      line(x, y, x + LINELEN, y + LINELEN);
      x += DRAWSTEP;
      y += DRAWSTEP;
    } else if (mSymbol == 'C') {
      line(x, y, x - LINELEN, y + LINELEN);
      x -= DRAWSTEP;
      y += DRAWSTEP;
    }

    if (y > height) {
      x += LINELEN;
      y = 0;
    }
  }
}

function mouseClicked() {
  redraw();
}
