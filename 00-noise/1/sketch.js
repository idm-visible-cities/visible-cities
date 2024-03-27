const GRID_SIZE = 2;

let COLORS = [];

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, 600);
  noLoop();
  noiseDetail(6, 0.4);

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
  noStroke();

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
