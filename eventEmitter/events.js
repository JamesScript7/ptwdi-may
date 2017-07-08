var eventEmitter = require('events');

//Emitting:
var myEmitter = new eventEmitter();

myEmitter.on('my-event', function(message){
  console.log(message);
});

//myEmitter.emit('my-event', 'hey');

//Telephone Example:
//Removing a listener.
var telephone = new eventEmitter();

var rings = 0;

var listener = function(msg){
  console.log(msg);
  rings++;
  if (rings == 2) {
    telephone.removeListener('ring', listener);
  }
  console.log('ring! The phone has rung ' + rings + ' times');
};

telephone.on('ring', listener);

telephone.emit('ring', 'first ring');
telephone.emit('ring', 'second ring');
//This won't run because the listener was removed!
telephone.emit('ring', 'third ring');

//Cat Example:
//A class inherting from eventEmitter!

function Cat() {
  this.speak = function(){
    this.emit('speak', 'meow');
  };
};

Cat.prototype = new eventEmitter();

var myCat = new Cat();

myCat.on('speak', function(msg){
  console.log(msg);
});

myCat.speak();
