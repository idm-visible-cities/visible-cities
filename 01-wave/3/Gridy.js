class Gridy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.possibilities = ALL_TILE_IDXS.slice();
  }

  updateFromRight(mTile) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowRight(mTile));
  }

  updateFromBottom(mTile) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowBottom(mTile));
  }

  updateFromLeft(mTile) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowLeft(mTile));
  }

  updateFromTop(mTile) {
    this.possibilities = this.possibilities.filter((p) => TILES[p].allowTop(mTile));
  }
}
