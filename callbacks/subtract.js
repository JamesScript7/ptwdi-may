function subtract(a,b,callback){
  //testing with error
  //callback(new Error('yes'));
  //testing without error
  callback(null, a - b);
}

subtract(10, 5, function(err, val){
  if (err) throw err;
  console.log(val);
});
