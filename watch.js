(function(){
  'use strict';

  var startButton = document.getElementById('start-button');
  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds');

  var startTime;
  var currentText;

  console.log(startButton);

  function toggleButton(){
    currentText = startButton.textContent;

    if(currentText == 'Start'){
      startButton.textContent = 'Stop';
      startButton.style.backgroundColor = 'red';
    } else{
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = 'green';
    }
  }

  function millisecondsToInterval(ms){
    var numMsInHour = 60000 * 60;
    var numMsInMinute = 60000;
    var numMsInSecond = 1000;

    var hourCount = Math.floor(ms / numMsInHour);
    var minuteCount = Math.floor(ms / numMsInMinute);
    var secondCount = Math.floor(ms / numMsInSecond);

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
