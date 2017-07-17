'use strict';

var fs = require('fs');

function jsonReader(file, input, callback) {
  callback(
    fs.readFile(file, function(err, data) {
      if (err) throw err;
      var country = JSON.parse(data);

      country.forEach((obj) => {
        //Utilize .toLowerCase() so capitalization doesn't matter.
        if (input.toLowerCase() === obj.name.toLowerCase()) {
          for(let key in obj) {
            console.log(`${key.charAt(0).toUpperCase()}${key.slice(1)}: ${obj[key]}`);
          }
        }

      //forEach method
      });
    //fs.readFile for data
    })

  //jsReader and callback
  );
}

module.exports = {
  jsonReader: jsonReader
};
