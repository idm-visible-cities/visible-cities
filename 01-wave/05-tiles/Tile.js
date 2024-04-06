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

function empty(a) {
  return function (xi, yi, w, h = 0) {
  }
}

function full(a) {
  return function (xi, yi, w, h = 0) {
    h = h || w;
    const x = xi * w;
    const y = yi * h;
    rect(x, y, w, h);
  }
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

function stripe(a) {
  return function (xi, yi, w, h = 0) {
    h = h || w;
    const x = xi * w;
    const y = yi * h;

    push();
    translate(x + w / 2, y + h / 2);
    rotate(radians(a));
    rect(-w / 2, -h / 6, w, h / 3);
    pop();
  }
}

function cross(a) {
  return function (xi, yi, w, h = 0) {
    h = h || w;
    const x = xi * w;
    const y = yi * h;

    rect(x, y + h / 3, w, h / 3);
    rect(x + w / 3, y, w / 3, h);
  }
}

function tee(a) {
  return function (xi, yi, w, h = 0) {
    h = h || w;
    const x = xi * w;
    const y = yi * h;

    push();
    translate(x + w / 2, y + h / 2);
    rotate(radians(a));
    rect(-w / 2, -h / 6, w, h / 3);
    rect(-w / 6, 0, w/3, h / 2);
    pop();
  }
}

function connector(a) {
  return function (xi, yi, w, h = 0) {
    h = h || w;
    const x = xi * w;
    const y = yi * h;

    push();
    translate(x + w / 2, y + h / 2);
    rotate(radians(a));
    rect(-w / 2, -h / 6, w, h / 3);
    arc(-w / 2, 0, w, h, -PI / 2, PI / 2);
    pop();
  }
}

const TILES = [
  new Tile(empty(0), [0, 0, 0, 0]),
  new Tile(full(0), [1, 1, 1, 1]),
  new Tile(quarter(0), [0, 0, 1, 1]),
  new Tile(quarter(90), [1, 0, 0, 1]),
  new Tile(quarter(180), [1, 1, 0, 0]),
  new Tile(quarter(270), [0, 1, 1, 0]),
  new Tile(stripe(0), [2, 0, 2, 0]),
  new Tile(stripe(90), [0, 2, 0, 2]),
  new Tile(cross(0), [2, 2, 2, 2]),
  new Tile(tee(0), [2, 2, 2, 0]),
  new Tile(tee(90), [0, 2, 2, 2]),
  new Tile(tee(180), [2, 0, 2, 2]),
  new Tile(tee(270), [2, 2, 0, 2]),
  new Tile(connector(0), [2, 0, 1, 0]),
  new Tile(connector(90), [0, 2, 0, 1]),
  new Tile(connector(180), [1, 0, 2, 0]),
  new Tile(connector(270), [0, 1, 0, 2]),
];

const ALL_TILE_IDXS = TILES.map((_, i) => i);
