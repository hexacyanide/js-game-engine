var Location = require('./location');

function Tile(location) {
  this.location = location;
}

Tile.prototype.getLocation = function() {
  return this.location;
};

module.exports = Tile;