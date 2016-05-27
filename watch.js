(function(){
  'use strict';

  /* You can select an item in the DOM by it's id attribute */
  var startButton = document.getElementById('start-button');

  /* Or you can select items using a CSS style selector */
  var hours = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  /*
  We can declare some variables without having to assign anything to them yet,
  but we can't assign anything to them before declaring them
  */
  var startTime;
  var currentText;

  /*
  We can always check what is in a variable
  by logging its contents to the console
  */
  console.log(startButton);

  /*
  We create functions by using the special "function" key word
  */
  function toggleButton(){
    currentText = startButton.textContent;
    var randomNumber = '10';

    hoursColorCode = hours

    colorCode = hoursColorCode + minutesColorCode + secondsColorCode // AB CD 33

    /* if statements are how we can control when certain code runs */
    if(currentText == 'Start'){
      startButton.textContent = 'Stop';
      startButton.style.backgroundColor = '#BBBBBB';
      startButton.style.backgroundColor = '#BBBB' + secondsColorCode;
      startButton.style.backgroundColor = '#' + colorCode;

    } else{
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = '#DDDDDD';
    }
  }

  function millisecondsToInterval(ms){
    var msLeft = ms;

    var msInHour = 60000 * 60;
    var msInMinute = 60000;
    var msInSecond = 1000;

    // We can devide two numbers using a forward slash
    // We can use Math.floor() to chop off decimal values after doing math
    var hourCount = Math.floor(msLeft / msInHour);

    /*
    Besides regular division we can do modulo division which returns the remainder
    */
    msLeft = msLeft % msInHour;

    var minuteCount = Math.floor(msLeft / msInMinute);
    msLeft = msLeft % msInMinute;

    var secondCount = Math.floor(msLeft / msInSecond);

    return [hourCount, minuteCount, secondCount];
  }

  function displayInterval(interval){
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  function logElapsedTime(){
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elasped = millisecondsToInterval(elapsedTime);

    displayInterval(elasped);
  }

  function startButtonHandler(){
    startTime = new Date();
    toggleButton();
    window.setInterval(logElapsedTime, 1000);
  }

  startButton.addEventListener('click', startButtonHandler);
}());


/*
Begining Demo

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
*/
