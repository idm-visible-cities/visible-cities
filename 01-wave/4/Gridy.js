class Gridy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.possibilities = ALL_TILE_IDXS.slice();
  }

  updateFromRight(tileIdx) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowRight(tileIdx));
  }

  updateFromBottom(tileIdx) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowBottom(tileIdx));
  }

  updateFromLeft(tileIdx) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowLeft(tileIdx));
  }

  updateFromTop(tileIdx) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowTop(tileIdx));
  }
}
