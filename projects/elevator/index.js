'use strict';

//Elevator App: Picks up passenger and drops them off on their floor one at a$

const EventEmitter = require('events');

//An array of objects. We will use the shift method to remove
//the 0th passenger in the lobby.
var passengers = [
  {
    'name': 'Mickey',
    'destination': 4
  },
  {
    'name': 'Minnie',
    'destination': 10
  },
  {
    'name': 'Jerry',
    'destination': 2
  }
];

//Some global variables (states)
var currentFloor = 1;
var currentPassenger;

//The Event Emitter
var elevator = new EventEmitter();

//The Handlers
function upFunction(pass) {
  console.log('Floor: ', currentFloor);

  var destination = parseInt(pass.destination);

  if (currentFloor < destination) {
    console.log('*ding*');
    currentFloor++;

    if (currentFloor === 6) {
      console.log('*elevator muzac softly plays*');
    }

    setTimeout(function() {
      elevator.emit('up', currentPassenger);
    }, 1000);

  } else if (currentFloor === destination) {
    setTimeout(function() {
      console.log(pass.name + ' got off at Floor: ' + pass.destination);

      elevator.removeListener('up', upFunction);
      elevator.on('down', downFunction);

      setTimeout(function(){
        elevator.emit('down', downFunction);
      }, 1000);

    },1000);

  }
}

function downFunction() {
  console.log('Floor: ', currentFloor);

  if (currentFloor > 1) {
    console.log('*ding*');
    currentFloor--;

    setTimeout(function() {
      elevator.emit('down');
    },1000);

  } else if (currentFloor === 1) {

    setTimeout(function(){
      elevator.removeListener('down', downFunction);
      elevator.on('up', upFunction);

      if (passengers.length > 0) {
        currentPassenger = passengers[0];
        console.log(currentPassenger.name + ' stepped in');

        passengers.shift();

        setTimeout(function(){
          elevator.emit('up', currentPassenger);
        },1000);

      } else {

        setTimeout(function(){
          console.log('Congratulations! There are: ' + passengers.length + ' passengers left to take this extremely inefficient elevator');
        },1000);

      }
    },1000);
  }

}

//The Listener
elevator.on('down', downFunction);

//The Emitter
elevator.emit('down', currentPassenger);
