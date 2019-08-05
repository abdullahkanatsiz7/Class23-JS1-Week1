//1. Write a console.log statement saying "Hello World!" for each language that you know.

console.log("merhaba dünya!");//turkish
console.log("hello world!");//english
console.log("Ciao, mondo!");//Italian
console.log("Hola, mundo!")//Spanish
console.log("Halo, dunia!")// Indonesian

/*2. Consider the following code:
console.log('I'm awesome');
Copy the code in your .js file and run it. You will see that you will get a SyntaxError. Find a solution for this error. Hint: read the error message carefully, it also gives an indication of where the problem is.*/

// console.log('I'm awesome');

// solution number 1: using back tick (`)

console.log (`I'm awesome `);

// Solution number 2: using double quotes ("")
console.log("I'm awesome");


// Solution number 3: using backslash (\)
console.log("I'm awesome"); 

// 3.1
var x;
//3.2
console.log("the value of my variable x will be: quantity of books");
//3.3
console.log(x=4);
//3.4
var x=4;
//3.5
console.log("my total books amount");
//3.6
console.log(x);

//4. Declare a variable y and assign a string to it.
var y="cats,dogs,horse,";

//4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
console.log("my animals species");

//4.2 Now console.log the variable y.
console.log(y);

//4.3 Now assign a new string to the variable y.
var y="fish, butterfly";

//4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
console.log("new animal species");

//4.5 Now console.log y again.
console.log(y);

//5.1 Declare a variable z and assign the number 7.25 to it.
var z=7.25;

//5.2 console.log z.
console.log(z);

//5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
var a=z;
//5.4 console.log a.
console.log(Math.round(a));
//5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
//5.6 console.log the highest value.
console.log(Math.max(a,z));

//6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element
var seasons=[];

//6.2 Write a console.log statement that explains in words what you think the value of the array is.
console.log("there is 4 season in a year");

//6.3 console.log your array.
console.log(seasons);

//6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
var favorutianimals=['cat', 'horse'];

//6.5 Log your array.
console.log(favorutianimals);

//6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
favorutianimals.push( "Daan's favorite animal ('baby pig')");

//6.7 Log your new array!
console.log(favorutianimals);

//Let's consider the following string: let myString = "this is a test".
let myString = "this is a test";

//7.1 Add the string to your file and console.log it.
console.log(myString);

//7.2 Find a way to get the length of myString.
//7.3 console.log the length of myString.
console.log(myString.length);
