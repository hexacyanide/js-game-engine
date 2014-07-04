/**
 * Creates a new Location object at the specified coordinates.
 */
function Location(x, y) {
  this.x = x;
  this.y = y;
}

/**
 * Returns the X coordinate of this Location object.
 */
Location.prototype.getX = function() {
  return this.x;
};

/**
 * Returns the Y coordinate of this Location object.
 */
Location.prototype.getY = function() {
  return this.y;
};

/**
 * Calculates the distance between two Location objects.
 */
Location.prototype.distance = function(location) {
  if (!location instanceof Location) {
    throw new TypeError();
  }
  
  var diff = function(a, b) {
    var n = a - b;
    if (n < 0) n *= -1;
    
    return n;
  };

  var x = diff(this.x, location.getX());
  var y = diff(this.y, location.getY());
  
  return Math.sqrt((x * x) + (y * y));
};

/**
 * Creates a Location object with the same coordinates as the current instance
 */
Location.prototype.clone = function() {
  return new Location(this.x, this.y);
};

module.exports = Location;
