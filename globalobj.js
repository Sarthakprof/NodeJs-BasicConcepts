// Let's try to print the value of __filename

console.log( __filename );


// Let's try to print the value of __dirname

console.log( __dirname );

//The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds
function printHello() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
setTimeout(printHello, 2000);

// The clearTimeout(t) global function is used to stop a timer that was previously created with setTimeout(). 

 
 // Now call above function after 2 seconds
 var t = setTimeout(printHello, 2000);
 
 // Now clear the timer
 clearTimeout(t);


 // The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds.
 setInterval(printHello, 2000)