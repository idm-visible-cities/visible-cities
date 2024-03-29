class Tile {
  constructor(draw, edges) {
    this.draw = draw;
    this.edges = edges;
  }

  allowRight(i) {
    return this.edges[0] == TILES[i].edges[2];
  }
  allowBottom(i) {
    return this.edges[1] == TILES[i].edges[3];
  }
  allowLeft(i) {
    return this.edges[2] == TILES[i].edges[0];
  }
  allowTop(i) {
    return this.edges[3] == TILES[i].edges[1];
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
  new Tile(empty, [0, 0, 0, 0]),
  new Tile(full, [1, 1, 1, 1]),
  new Tile(quarter(0), [0, 0, 1, 1]),
  new Tile(quarter(90), [1, 0, 0, 1]),
  new Tile(quarter(180), [1, 1, 0, 0]),
  new Tile(quarter(270), [0, 1, 1, 0]),
];

const ALL_TILE_IDXS = TILES.map((_, i) => i);
