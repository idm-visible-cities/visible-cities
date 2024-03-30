const GRID_SIZE = 2;

let COLORS = [];

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, windowHeight);
  noLoop();
  noStroke();

  noiseDetail(2, 0.5);

  COLORS = [
    color("navy"),
    color("royalblue"),
    color("peachpuff"),
    color("saddlebrown"),
    color("forestgreen"),
    color("darkgreen"),
    color("darkgreen"),
  ];
}

function draw() {
  background(255);

  for (let y = 0; y < height; y+=GRID_SIZE) {
    for (let x = 0; x < width; x += GRID_SIZE) {
      let noise_val = COLORS.length * noise(x / 150, y / 150)
      let ci = floor(noise_val);

      let c0 = COLORS[ci];

      fill(c0);
      rect(x, y, GRID_SIZE, GRID_SIZE);
    }
  }
}
