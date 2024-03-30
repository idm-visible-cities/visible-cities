let noiseFactor = 200;
let gridWidth = 12;

function noiseColor(n) {
  let COLORS = [
    color(0, 100, 255),
    color(0, 215, 255),
    color(250, 215, 180),
    color(50, 45, 8),
    color(0, 100, 0),
  ];

  let fColor = COLORS[0];
  if (n < 0.35) {
    fColor = COLORS[0];
  } else if (n < 0.5) {
    let t = map(n, 0.35, 0.5, 0, 1);
    fColor = lerpColor(COLORS[0], COLORS[1], t);
  } else if (n < 0.55) {
    let t = map(n, 0.5, 0.55, 0, 1);
    fColor = lerpColor(COLORS[1], COLORS[2], t);
  } else if (n < 0.65) {
    let t = map(n, 0.55, 0.65, 0, 1);
    fColor = lerpColor(COLORS[2], COLORS[3], t);
  } else {
    let t = map(n, 0.65, 1, 0, 1);
    fColor = lerpColor(COLORS[3], COLORS[4], t);
  }
  return fColor;
}

function setup() {
  // createCanvas(windowWidth, windowHeight, WEBGL);
  createCanvas(600, windowHeight, WEBGL);
  noStroke();

  noiseDetail(6, 0.5);
}

function draw() {
  background(220, 20, 120);
  rotateX(PI / 2.5);
  translate(-width / 2, -height / 2);
  translate(0, 100, 0);

  beginShape(QUAD_STRIP);
  for (let y = 0; y < height; y += gridWidth) {
    vertex(0, y, -200);
    vertex(0, y + gridWidth, -200);

    for (let x = 0; x < width; x += gridWidth) {
      let nLevel0 = noise(
        x / noiseFactor,
        y / noiseFactor,
        frameCount / noiseFactor
      );

      let nLevel1 = noise(
        x / noiseFactor,
        (y + gridWidth) / noiseFactor,
        frameCount / noiseFactor
      );

      let z0 = map(nLevel0, 0.5, 1, 0, 128, true);
      let z1 = map(nLevel1, 0.5, 1, 0, 128, true);

      fill(noiseColor(nLevel0));
      vertex(x, y, z0);

      fill(noiseColor(nLevel1));
      vertex(x, y + gridWidth, z1);
    }
    vertex(width, y, -200);
    vertex(width, y + gridWidth, -200);
  }
  endShape();
}
