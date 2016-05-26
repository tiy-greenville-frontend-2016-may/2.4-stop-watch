
document.getElementById('title').textContent = 'New Title';
document.querySelector('h1').textContent = 'My Cool Title';

var mySuperCoolHeading = document.getElementById('title');
console.log(mySuperCoolHeading);

var myNumberFive = 5;

var myCoolString = 'This "is" a string';

console.log(myCoolString);

function myCoolCalculation(firstNumber, secondNumber){
  var sum = firstNumber + secondNumber;
  console.log(sum);
}

myCoolCalculation(10, 5);

myCoolCalculation(20, 20);
