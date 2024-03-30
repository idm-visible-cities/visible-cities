const GRID_SIZE = 2;

let canvs = [];

function drawRandom(pg) {
  pg.background(250, 50, 150);
  pg.stroke(0);
  pg.fill(255);

  let x = pg.width / 2;
  let y = pg.height / 2;
  for (let i = 0; i < 512; i++) {
    pg.ellipse(x, y, 30);
    x += random(-pg.width / 50, pg.width / 50);
    y += random(-pg.height / 50, pg.height / 50);
  }
}

function drawGaussian(pg) {
  pg.background(250, 50, 150);
  pg.stroke(0);
  pg.fill(255);

  let x = pg.width / 2;
  let y = pg.height / 2;
  for (let i = 0; i < 512; i++) {
    x += randomGaussian(0, pg.width / 50);
    y += randomGaussian(0, pg.height / 50);
    pg.ellipse(x, y, 30);
  }
}

function drawNoise(pg) {
  pg.background(250, 50, 150);
  pg.stroke(0);
  pg.fill(255);

  let x = pg.width / 2;
  let y = pg.height / 2;
  for (let i = 0; i < 512; i++) {
    x += map(noise(i / 10, PI), 0, 1, -pg.width / 50, pg.width / 50);
    y += map(noise(i / 10, TWO_PI), 0, 1, -pg.height / 50, pg.height / 50);
    pg.ellipse(x, y, 30);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  for (let i = 0; i < 3; i++) {
    canvs.push(createGraphics(width / 3, height));
  }

  drawRandom(canvs[0]);
  drawGaussian(canvs[1]);
  drawNoise(canvs[2]);
}

function draw() {
  background(255);

  for (let i = 0; i < 3; i++) {
    image(canvs[i], i * canvs[i].width, 0);
  }
}
