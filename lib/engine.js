var fs = require('fs');
var util = require('util');
var path = require('path');
var EventEmitter = require('events').EventEmitter;

/**
 * Represents a single game engine.
 *
 * @class Engine
 * @constructor
 */
function Engine(options, fn) {
  var self = this;
  
  this.world = null;
  
  this.cwd = options.cwd || process.cwd();
  this.config = options.config || './config.json';

  this.loadConfiguration(function(err) {
    if (err) {
      // logger.error(err);
      return this.shutdown(err);
    }
    
    fn();
  });

  EventEmitter.call(this);
}
util.inherits(Engine, EventEmitter);

/**
 *
 *
 */
Engine.prototype.loadConfiguration = function() {
  var self = this;
  var dir = path.resolve(this.cwd, this.config);
  
  fs.stat(dir, function(err, stats) {
    if (err) {
      self.emit('error', err);
      return fn(err);
    }
    
    if (!stats.isFile() || stats.isDirectory()) {
      var err = new Error('Configuration file is missing.');
      self.emit('error', err);
    }
    
    var config = fs.readFileSync(dir);
    var json = JSON.parse(config);  });
};

/**
 *
 *
 */
Engine.prototype.loadWorld = function() {
  // this.world = new World();
};

/**
 *
 *
 */
Engine.prototype.shutdown = function(err) {
  
};

module.exports = Engine;
