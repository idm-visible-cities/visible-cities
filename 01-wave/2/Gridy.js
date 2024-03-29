class Gridy {
  constructor(xi, yi, i) {
    this.xi = xi;
    this.yi = yi;
    this.i = i;
    this.possibilities = ALL_TILE_IDXS.slice();
  }

  debug(w, h = 0) {
    h = h || w;
    const t = `${this.xi}x${this.yi} (${this.i}): ${this.possibilities}`;
    text(t, this.xi * w, this.yi * h, w, h);
  }
}
