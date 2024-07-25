// Question 1:
//Create an array named fruits that contains the following string elements:"apple","banana","mango","orange".
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
// Question 2:
//Declare an array named numbers that can contain only number elements and initialize it with the values: 10,20,30, and 40.
var numbers = [10, 20, 30, 40];
console.log(numbers);
// Question 3:
//Access the third element of the fruits array and assign it to a variable named thirdFruits.
fruits = ["apple", "mango", "orange", "banana"];
var thirdFruit = "fruits[banana]";
console.log(thirdFruit);
//Question 4:
//Change  the second element of the numbers array to 25.
var number = [10, 20, 30, 40];
number[1] = 25;
console.log(number);
//Question 5:
//Add the element "grape" to the end of the fruits array using the method.
var fruit = ["apple", "banana", "mango", "orange"];
fruit.push("grape");
console.log(fruit);
//Question 6:
//Remove the last element from the fruits array using the method and assign it to a variable
//named lastFruit.
var lastFruit = ["apple", "banana", "mango", "orange"];
lastFruit.pop();
console.log(lastFruit);
//Question 7:
//Remove the first element from the fruits array  the method and assign it to a variable named firstfruit.
var firstFruit = ["orange", "apple", "pineApple"];
firstFruit.shift();
console.log(firstFruit);
//Question 8:
//Add the element "kiwi" to the beginning of the fruits array using the method.
var fruits1 = ["apple", "mango", "banana", "pear"];
fruits1.unshift("kiwi");
console.log(fruits1);
//Question 9:
//Remove 2 elements from the fruits array starting from index 1 using the method.
var fruits2 = ["mango", "orange", "banana", "peach"];
fruits2.splice(1, 2);
console.log(fruits2);
//Question 10:
//Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
var TwoFruits = ["apple", "mango", "peach", "grapes"];
TwoFruits.splice(2, 0, "pineapple", "pear");
console.log(TwoFruits);
//Question 11:
// Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
var citrusFruits = ["apple", "banana", "orange", "mango"];
citrusFruits.splice(0, 2);
console.log(citrusFruits);
//Question 12:
// Create a new array named last TwoFruits that contains the last two elements of the fruits array using the method.
var lastTwoFruits = ["banana", "orange", "mango", "peach"];
lastTwoFruits.slice(-2);
console.log(lastTwoFruits);
