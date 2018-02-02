var readline = require('readline');

var rl= readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.question("Enter: ", function (line){
  console.log(line);
})
