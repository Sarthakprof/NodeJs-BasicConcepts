// Callback is an asynchronous equivalent for a function.
// A callback function is called at the completion of a given task

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");