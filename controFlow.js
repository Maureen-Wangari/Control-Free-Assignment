//A program that takes in an array of numbers and (squares) first four items and adds 10 to the last two . Return new array

function modifyArray(number) {


    for (let i = 0; i < number.length; i++) {
      if (i < 4) {

        number[i] = number[i] * number[i];
      } else if (i >= number.length - 2) {

        number[i] = number[i] + 10;
      }
    }
    return number;
  }

  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(modifyArray(myArray));





 //takes an array and use a while loop that breaks when the item is equal to the fourth index

  let people = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let i = 0;
  while (i < people.length) {
    if (people[i] === people[4]) {
      break;
    }
    console.log(people[i]);
    i++;
  }


//take in a an array of strings and use a continue statement when the item is at the second index


  function changeFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
      if (i === 2) continue; 
      console.log(fruits[i]);
    }
  }

  let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
  changeFruits(fruits);


//Takes an array of strings and logs (each element) using a for loop.

  function takeStrings(strings) {
    for (let i = 0; i < strings.length; i++) {
      console.log(strings[i]);
    }
  }

  let names = ["Maureen", "Priscilla","Margaret", "Susan", "Wato"];
  takeStrings(names);


 //function that takes a string and use a while loop to return the reversed string.


  function reverseString(str) {
    let reversed = '';
    let index = str.length - 1;
    while (index >= 0) {
      reversed += str[index];
      index--;
    }
    return reversed;
  }

  console.log(reverseString("Arsenal")); 