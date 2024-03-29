class Gridy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.possibilities = ALL_TILE_IDXS.slice();
  }

  updateFromRight(tileIdxs) {
    let newPossibilities = new Set([]);
    for (let ti = 0; ti < tileIdxs.length; ti++) {
      const allowed = this.possibilities.filter((p) => TILES[p].allowRight(tileIdxs[ti]));
      newPossibilities = newPossibilities.union(new Set(allowed));
    }
    this.possibilities = Array.from(newPossibilities);
  }

  updateFromBottom(tileIdxs) {
    let newPossibilities = new Set([]);
    for (let ti = 0; ti < tileIdxs.length; ti++) {
      const allowed = this.possibilities.filter((p) => TILES[p].allowBottom(tileIdxs[ti]));
      newPossibilities = newPossibilities.union(new Set(allowed));
    }
    this.possibilities = Array.from(newPossibilities);
  }

  updateFromLeft(tileIdxs) {
    let newPossibilities = new Set([]);
    for (let ti = 0; ti < tileIdxs.length; ti++) {
      const allowed = this.possibilities.filter((p) => TILES[p].allowLeft(tileIdxs[ti]));
      newPossibilities = newPossibilities.union(new Set(allowed));
    }
    this.possibilities = Array.from(newPossibilities);
  }

  updateFromTop(tileIdxs) {
    let newPossibilities = new Set([]);
    for (let ti = 0; ti < tileIdxs.length; ti++) {
      const allowed = this.possibilities.filter((p) => TILES[p].allowTop(tileIdxs[ti]));
      newPossibilities = newPossibilities.union(new Set(allowed));
    }
    this.possibilities = Array.from(newPossibilities);
  }
}
