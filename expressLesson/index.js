const express = require('express');
const app = express();

// You want the more specific path first
app.get('/hello/:name', function(req,res) {
  res.send(`hello ${req.params.name}!`);
});

app.get(['/hel+o', '/hola'], function(req,res) {
  res.send('Hello there!');
});

app.get(['apple', 'ale'], function(req,res) {
  res.send('Apple or Ale?');
})

app.get('/page', function(req,res) {
  res.send(req.query);
})

// STRING PATTERN EXAMPLES:
// * will match any letter (or none) in it's place.
// + character repetition of preceding char.
// ? will make preceding character optional.
// () to group your options. ex: (ello)?
// Don't use () right after '/'.

// QUERY STRING EXAMPLES
// It's going to be in key value pairs
// ?foor=bar&baz=quux

// Middleware
// next() move on to the next middleware
// app.use(function(req,res,next) {})

//HW:
//open a file for writing and log the request



//It's a catch all so you want it to be the last route
app.get('*', function(req,res) {
  res.status(404).send('Page not found!');
});

app.listen(3000, function(){
  console.log('listening');
});
