class Tile {
  constructor(draw, neighbors) {
    this.draw = draw;
    this.neighbors = neighbors;
  }

  allowRight(i) {
    return this.neighbors[0].includes(i);
  }
  allowBottom(i) {
    return this.neighbors[1].includes(i);
  }
  allowLeft(i) {
    return this.neighbors[2].includes(i);
  }
  allowTop(i) {
    return this.neighbors[3].includes(i);
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
  new Tile(empty, [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]]),
  new Tile(full, [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]]),
  new Tile(quarter(0), [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]]),
  new Tile(quarter(90), [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]]),
  new Tile(quarter(180), [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]]),
  new Tile(quarter(270), [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]]),
];
