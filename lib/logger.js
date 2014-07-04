var fs = require('fs');

function Logger(file, level) {
  this.file = file;
  this.level = level;
  
  this.stream = 
}

Logger.prototype.log = function(level) {
};

Logger.prototype.error = function() {
};

Logger.prototype._write = function(str) {
  this.stream.write(str + '\n');
};

module.exports = Logger;
