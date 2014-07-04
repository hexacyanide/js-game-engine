function World() {
  this.height = 800;
  this.width = 800;
  
  this.tiles = [][];
}

World.prototype.getTile = function(x, y) {
  return this.tiles[x + 400][y + 400];
};
