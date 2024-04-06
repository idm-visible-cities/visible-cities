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

const IMAGES = [];

function preload() {
  for (let i = 0; i < 13; i++) {
    const mi = loadImage(`imgs/${i}.jpg`);
    IMAGES.push(mi);
  }
}

function img(idx) {
  return function (xi, yi, w, h = 0) {
    h = h || w;
    const x = xi * w;
    const y = yi * h;
    image(IMAGES[idx], x, y, w, h);
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
  new Tile(img(0), [1, 1, 1, 0]),
  new Tile(img(1), [1, 1, 1, 1]),
  new Tile(img(2), [1, 0, 1, 1]),
  new Tile(img(3), [0, 1, 1, 1]),
  new Tile(img(4), [1, 1, 0, 1]),
  new Tile(img(5), [0, 1, 0, 1]),
  new Tile(img(6), [1, 1, 0, 0]),
  new Tile(img(7), [0, 1, 1, 0]),
  new Tile(img(8), [1, 0, 1, 0]),
  new Tile(img(9), [0, 0, 1, 1]),
  new Tile(img(10), [1, 0, 0, 1]),
  new Tile(img(11), [0, 0, 0, 1]),
  new Tile(img(12), [0, 0, 1, 0]),
];

const ALL_TILE_IDXS = TILES.map((_, i) => i);
