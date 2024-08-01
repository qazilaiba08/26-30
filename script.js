// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let num = parseFloat(prompt("Enter a positive integer:"));

if (isNaN(num) || num <= 0) {
    alert("Please enter a valid positive number.");
} else {
    
    let roundValue = Math.round(num);
    let floorValue = Math.floor(num);
    let ceilValue = Math.ceil(num);

    document.write("Number: " + num + "<br>"+
        "Round off value: " + roundValue + "<br>"+
        "Floor value: " + floorValue + "<br>"+
        "Ceil value: " + ceilValue);
}
 document.write(num)

//  2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let float = parseFloat(prompt("Enter a negative floating point integer:"));

if (isNaN(float) || float >= 0) {
    alert("Please enter a valid positive number.");
} else {
    
    let roundValue = Math.round(float);
    let floorValue = Math.floor(float);
    let ceilValue = Math.ceil(float);

    document.write("Number: " + float + "<br>"+
        "Round off value: " + roundValue + "<br>"+
        "Floor value: " + floorValue + "<br>"+
        "Ceil value: " + ceilValue);
}
 document.write(float)

//  3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let absloute = parseFloat(prompt("Enter a absloute value :"))

if(isNaN(absloute)){
    alert("Please enter a valid number")
}else{
    let absloutevalue = Math.abs(absloute);

    document.write("The absolute value of " + absloute+ " is " + absloutevalue);
}

document.write(absloute)

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let dice = Math.floor(Math.random()*45) ;

document.write("Random dice value is : " + dice)

let random = Math.floor(Math.random()*45) + 1 ;

document.write("Random dice value is : " + random)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

let coinValue = Math.random() < 0.5 ? "Heads" : "Tails";

document.write("Random coin value is : " + coinValue);

let coinValue1 = Math.random() < 0.3 ? "Heads" : "Tails";

document.write("Random coin vaue is : " + coinValue1);

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

let randomNumber = Math.floor(Math.random() * 100) + 1;

document.write( "<br>"+ "Random number between 1 to 100 : "+ randomNumber)

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let userInput = prompt("Please enter your weight:");

// Extract the numerical value from the input using a regular expression
let weight = parseFloat(userInput.match(/[0-9.]+/));

if (!isNaN(weight)) {
    document.write("Your weight is: " + weight + " kg");
} else {
    console.log("Invalid input. Please enter a valid weight.");
}

document.write("<br>"+"The weight of user is "+weight)

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let secretNumber = Math.floor(Math.random() *10) +1;

let userIn =parseInt(prompt("Guess the secret number (between 1 and 10):"));

if(userIn === secretNumber){
    document.write("Congratulations! You guessed the secret number.");
}else{
    document.write("Sorry, the secret number was: " + secretNumber + ". Try again!")
}