const GRID_SIZE = 2;

let COLORS = [];

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, windowHeight);
  noLoop();
  noStroke();

  noiseDetail(10, 0.5);

  COLORS = [
    color("navy"),
    color("navy"),
    color("royalblue"),
    color("royalblue"),
    color("royalblue"),
    color("lightblue"),
    color("peachpuff"),
    color("saddlebrown"),
    color("#bcde17"),
    color("forestgreen"),
    color("forestgreen"),
    color("darkgreen"),
    color("darkgreen"),
    color("darkgreen"),
  ];
}

function draw() {
  background(255);

  for (let y = 0; y < height; y += GRID_SIZE) {
    for (let x = 0; x < width; x += GRID_SIZE) {
      let noise_val = COLORS.length * noise(x / 100, y / 100);
      let ci = floor(noise_val);

      let c0 = COLORS[ci];
      let c1 = ci < COLORS.length - 1 ? COLORS[ci + 1] : COLORS[ci];

      let c = lerpColor(c0, c1, (noise_val - ci) ** 4);

      fill(c);
      rect(x, y, GRID_SIZE, GRID_SIZE);
    }
  }
}
