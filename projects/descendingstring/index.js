//Descending String Interval:

function descendIntoHell(stairs) {

  if (stairs <= 0) {
    console.log('Welcome to Hell >:)');
  } else {
    setTimeout(function(){
      console.log(' *'.repeat(stairs));
      return descendIntoHell(stairs - 1);
    }, 1000);
  }

}

descendIntoHell(10);
