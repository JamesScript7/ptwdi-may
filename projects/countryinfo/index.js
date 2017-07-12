'use strict';

const fs = require('fs');

//Module Example:
//const jsonReader = require('./json-file-reader.js');

//The name of the country taken from the command line.
var input = process.argv[2];
var file = './countries.json';

fs.readFile(file, function(err, data){
  if (err) throw err;

  //Remember: Array of OBJECTS
  var country = JSON.parse(data);

  country.forEach((obj)=>{

    if (input === obj.name) {
      for (var key in obj) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${obj[key]}`);
      }
    }

  });


});
