'use strict';

if(process.env.NODE_ENV != 'production') {
  require('babel-register');
  var modulesDir = __dirname+"/modules"
} else {
  var modulesDir = __dirname+"/lib"
  var g = require('idle-gc');
  g.start();
} 

var Application = require('nxus-core').Application

var myApp = new Application({modulesDir: modulesDir});

myApp.start()

module.exports = myApp;