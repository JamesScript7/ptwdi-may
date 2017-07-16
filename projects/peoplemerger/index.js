'use strict';

const fs = require('fs');

const  file1 = './people1.json',
       file2 = './people2.json',
completeFile = './peopleComplete.txt';

fs.readFile(file1, 'utf-8', function(err, data1) {
  if (err) throw err;
  const firstFile = JSON.parse(data1);

  fs.readFile(file2, 'utf-8', function(err, data2) {
    if (err) throw err;
    const secondFile = JSON.parse(data2);

    //Two seperate arrays become one.
    const total = firstFile.concat(secondFile);
    //Alphabetically sorts the items in the array, it's auto-magic!
    const sortedArr = total.sort();

    //1. If you wanted a customized format:

    sortedArr.forEach((val, i) => {
      var formatted = `${i + 1}. ${val}\n`;
      fs.appendFile(completeFile, formatted, function(err) {
        if (err) throw err;
      });
    });

    //2. If you wanted to save the array as is:

    // const stringArr = JSON.stringify(sortedArr);
    // fs.writeFile(completeFile, stringArr, function(err) {
    //   if (err) throw err;
    //   console.log('File written!');
    // });

    //fs.readFile for data2
    });
//fs.readFile for data1
});
