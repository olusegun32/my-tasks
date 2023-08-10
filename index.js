
// 1. Declare two variables: admin and name.

// let admin;
// let name;

// 2. Assign the value "John" to name.

// name = "john";


// 3. Copy the value from name to admin.

// admin = name;
// // 4. Show the value of admin using console.log (must output “John”).


// console.log (admin);

// // 5. Create a variable with the name of our planet. How would you name such a variable?

// The variable for our planet

// // 6. Create a variable to store the name of a current visitor to a website. How would you name that variable?

// The name of current visitor

// 7. What is the output of the script? put the output as a comment beside it. 

// let name = "Ilya";

// console.log( `hello ${1}` ); hello 1

// console.log( `hello ${"name"}` ); hello name

// console.log( `hello ${name}` ); hello Ilya

// 8. What will be the result for these expressions?
// 5 > 4    true
// "apple" > "pineapple"  false
// "2" > "12" true
// undefined == null true
// undefined === null false
// null == "\n0\n"  false
// null === +"\n0\n" false

// 9. Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.



// 10. Which of these codes are going to execute?

// What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' ); first
// if (-1 && 0) alert( 'second' ); second
// if (null || -1 && 1) alert( 'third' ); third

// 11. Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled

let userName = prompt("please login");

if(userName === 'Admin')
{
userName = prompt('password')
}else if(userName === null)
{
userName = alert('Canceled');
}else {
  alert('I do not know you')
}:


// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.


// 12. An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

// 13. switch (browser) {
//   case 'Edge':
//     console.log( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


// 14. Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.


// 15. initialize an array called arr = [1, 4, 3, 4, -9, 6, 20, 10].
//     The task is: find the sum of the array
//     NB: you will have to loop through it.
