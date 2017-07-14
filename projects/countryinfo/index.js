'use strict';

const fs = require('fs');

//The name of the country taken from the command line.
var input = process.argv[2];
var file = './countries.json';

//Part 2 module example.
var module = require('./json-file-reader.js');

module.jsonReader(file, input, function(err, data) {
  if (err) throw err;
  console.log(data);
});
