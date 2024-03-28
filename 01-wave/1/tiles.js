class Tile {
  constructor(draw, neighbors) {
    this.draw = draw;
    this.neighbors = neighbors;
  }
}

function empty(x, y, w, h = 0) {}

function full(x, y, w, h = 0) {
  h = h || w;
  rect(x, y, w, h);
}

function quarter(a) {
  return function (x, y, w, h = 0) {
    h = h || w;
    push();
    translate(x + w / 2, y + h / 2);
    rotate(radians(a));
    arc(-w / 2, -h / 2, 2 * w, 2 * h, 0, PI / 2);
    pop();
  };
}

const TILES = [
  new Tile(empty, []),
  new Tile(full, []),
  new Tile(quarter(0), []),
  new Tile(quarter(90), []),
  new Tile(quarter(180), []),
  new Tile(quarter(270), []),
];
