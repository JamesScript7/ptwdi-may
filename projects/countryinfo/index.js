'use strict';

const fs = require('fs');
//const jsonReader = require('./json-file-reader.js');

//process.argv.forEach(val, i) => {
//  console.log(`${i}: ${val}`);
//}

fs.readFile('./countries.json', 'utf-8',function(err, data){
  var countries = JSON.parse(data);

  //User will input the Country name:
  var input = process.argv[2];

  console.log(countries[0].name);
  //You have to iterate through the list
});
