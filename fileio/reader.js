var fs = require('fs');

fs.readFile('./copy.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log('1 ', data);
});

var content = 'Here is some content that will be written in auto-magically';

fs.writeFile('./wrote.txt', content, function(err) {
  if (err) throw err;
  console.log('2 ' + 'file is written!');
});

fs.readFile('./wrote.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log('3 ', data);
})

//fs.unlink('./file.txt', function(err) {
//  if (err) throw err;
//  console.log('4 file.txt has been removed!');
//});

fs.readdir('.', function(err, files) {
  console.log('5 The files in this directory are: ' + files);
  console.log('6 The first file is: ' + files[0]);
});
