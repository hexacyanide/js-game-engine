var util = require('util');
var Tile = require('./tile');

function Village(location) {
  Tile.call(this);
  
  this.location = location;
  this.buildings = {
    resources: [],
    buildings: []
  };
}
util.inherits(Village, Tile);

Village.prototype.getBuilding = function(id) {
  return this.bui
};

module.exports = Village;
