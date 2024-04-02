let state;
let stateIdx;
let steps;

RULES = {
  A: "ABC ",
  B: "CCB ",
  C: "BBC ",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  state = "A";
  steps = 0;
}

function draw() {
  background(250, 50, 150);
  text(steps + ": " + state, 10, 10, width-20, height-20);

  let nState = "";
  for (let si = 0; si < state.length; si++) {
    const mLetter = state[si];
    nState += RULES[mLetter] || mLetter;
  }
  state = nState;
  steps += 1;
}

function mouseClicked() {
  redraw();
}
