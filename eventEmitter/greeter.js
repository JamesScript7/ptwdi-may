//Party Time!

var EventEmitter = require('events');

var doorBell = new EventEmitter();

function greeter(guest){
  console.log('Hey ' + guest.name + ',' + ' you\'re ' + guest.age + ' years old.');

  if (guest.age < 21) {
    console.log('Hey, you must be over 21. Goodbye.');
  } else {
    console.log('Welcome to the party!');
  }

};

doorBell.on('ring', greeter);

var guest = {
  name: 'James',
  age: 30
};

//doorBell.emit('ring', guest);

//Inheritance style:

function Guest(a){
  this.pressBell = function() {
    this.emit('ring', a);
  }
};

function logic(obj) {
  if (obj.age < 21) {
    console.log(obj.name + ', you are underage.');
  } else {
    console.log('Hey ' + obj.name  + '. Welcome to the party!');
  }
}

Guest.prototype = new EventEmitter();

var guest1 = new Guest({'name': 'James', 'age': 30});
var guest2 = new Guest({'name': 'fort', 'age': 20});

Guest.prototype.on('ring', logic);

guest1.pressBell();
guest2.pressBell();
