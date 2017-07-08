var fs = require('fs');

//fs.readFile('./copy.txt', 'utf-8', function(err, data) {
//  if (err) throw err;
//  console.log('1 ', data);
//});

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

//fs.open('fsopen.txt', 'w', function(err, file) {
//  if (err) throw err;
//  console.log('saved!');
//});

var newContent = 'This file was created by fs and now this is being appended to it!\n';

fs.appendFile('fsopen.txt', newContent, function(err) {
  if (err) throw err;
  console.log('7 Updated!');
});

fs.appendFile('fsopen.txt', 'Some more content added!', function(err) {
  if (err) throw err;
  console.log('8 Updated!');
});

//The wrote.txt file gets created, read, and the renamed. That's why you won't see it when we run node.

fs.rename('wrote.txt', 'new_wrote.js', function(err) {
  if (err) throw err;
  console.log('9 File was RENAMED!');
});

