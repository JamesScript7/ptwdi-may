'use strict';

const express = require('express');
const app = express();
const parser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// Template Literal to create a form:
// const form = (data) =>
// `
//   <style>
//     input {
//       padding: 20px;
//       border: 1px solid black;
//     }
//   </style>
//
//   <h1>${data.title}</h1>
//
//   <form action='/submit' method='POST'>
//     <input type="text" name="color">
//     <input type="submit">
//   </form>
// `

var data = {
  title: "Form",
  articles: [
    {
      title: "About Article",
      content: "lkjsfhadsfhoaiusdfhoiweafa",
      link: "/about"
    },
    {
      title: "2nd Article",
      content: "uiw3bry73g97rga973rga",
      link: "/index"
    }
  ]
};

/*
blog.articles.forEach((article) => {
  app.get(article.link, (req,res) => {
    response.render('blog-detail', {
      article: article,
      links: blog.article.map(article) => {
        return {
          title: article.title,
          link: article.link
        }
      }
    })
  });
});
*/

//map returns a new object! In this case just title and link.
//you can add '/' statically.
//show in header example with a flag.

app.get('/', function(req,res){
  // res.send(form({ title: 'Forms' }));
  res.render('index', data);
});

app.get('/about', function(req,res){
  // res.send(form({ title: 'Forms' }));
  res.render('about');
});

app.get('/contact', function(req,res) {
  res.render('contact');
})

app.post('/submit', function(req,res) {
  console.log(req.body);
  res.send('recieved!');
});

// You want the more specific path first
// app.get('/:name', function(req,res) {
//   res.send(req.params.name);
// });
//
// app.get('/hi/:name', function(req,res) {
//   res.send(`hi there, ${req.params.name}!`);
// });
//
// app.get(['/hel+o', '/hola'], function(req,res) {
//   res.send(req.dataVal);
// });
//
// app.get(['/ap?p?le', '/ale'], function(req,res) {
//   res.send('Apple or Ale?');
// });
//
// app.get('/page', function(req,res) {
//   res.send(req.query);
// });

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
