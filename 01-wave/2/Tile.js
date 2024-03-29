class Tile {
  constructor(draw, edges) {
    this.draw = draw;
    this.edges = edges;
  }
}

function empty(xi, yi, w, h = 0) {}

function full(xi, yi, w, h = 0) {
  h = h || w;
  const x = xi * w;
  const y = yi * h;
  rect(x, y, w, h);
}

function quarter(a) {
  return function (xi, yi, w, h = 0) {
    h = h || w;
    const x = xi * w;
    const y = yi * h;

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

const ALL_TILE_IDXS = TILES.map((_, i) => i);
