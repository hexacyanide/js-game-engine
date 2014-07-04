function Structure() {
  this.level = 0;
}

Structure.prototype.getLevel = function() {
  return this.level;
};

Structure.prototype.setLevel = function(level) {
  this.level = level;
};

module.exports = Structure;