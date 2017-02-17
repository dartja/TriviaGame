// countDown ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {
  $("#start").on("click", countDown.start);
};

//  Variable that will hold our setInterval that runs the countDown
var intervalId;

// Our countDown object
var countDown = {
    time: 80,

  
  start: function() {
      intervalId = setInterval(countDown.count, 1000);  //Use setInterval to start the count here.
  },
  
  
  count: function() {
      countDown.time--;  // increment time by 1, remember we cant use "this" here.

      var converted = countDown.timeConverter(countDown.time);  // Get the current time, pass that into the countDown.timeConverter function,
      console.log(converted);  // and save the result in a variable.

      $("#display").html(converted); // Use the variable we just created to show the converted time in the "display" div.
      
      if (countDown.time === 0) {
      location.replace("results.html");
    }

  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};




//Variables for your user pick and correct, incorrect or unanswered
//Work in progress

var userPick = "";
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;


var questions = {

  q1: {
    correctPick: "1c",
    incorrectPick: ['1a', '1b', '1d'],
    unansweredPick: ""
  },
  q2: {
    correctPick: "2c",
    incorrectPick: ['2a', '2b', '2d'],
    unansweredPick: ""
  },
  q3: {
    correctPick: "3d",
    incorrectPick: ['3a', '3b', '3c'],
    unansweredPick: ""
  },
  q4: {
    correctPick: "4b",
    incorrectPick: ['4a', '4c', '4d'],
    unansweredPick: ""
  },
  q5: {
    correctPick: "5d",
    incorrectPick: ['5a', '5b', '5c'],
    unansweredPick: ""
  },
  q6: {
    correctPick: "6d",
    incorrectPick: ['6a', '6b', '6c'],
    unansweredPick: ""
  },
};



//Load script when ready
$(document).ready(function(){
  

//Compare user score to random number and let them know win or loss
function compareToUserPick(){
  if (userPick === q6.correctPick){
      correctCount++;
      $(".correct").text("Correct: " + correctCount);
      
  }

  else if (userPick != q6.correctPick){
      incorrectCount++;
      $(".incorrect").text("Incorrect: " + incorrectCount);
  }
};


 /*function onSubmit(){
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var numQuestions = 6;
  var answersArr = ['1c', '2c', '3d', '4b', '5d', '6d'];

  var q1 = document.form['quiz']['q1'].value;
  var q2 = document.form['quiz']['q2'].value;
  var q3 = document.form['quiz']['q3'].value;
  var q4 = document.form['quiz']['q4'].value;
  var q5 = document.form['quiz']['q5'].value;
  var q6 = document.form['quiz']['q6'].value;

  for(var i = 1; i <= numQuestions; i++){
    if(eval('q' + i) == ''){
      incorrect++;
    }
    for(var i = 1; i <= numQuestions; i++){
      if(eval('q' + i) == answersArr[i - 1]){
        correct++;
      }
    }
  }   
    
    });

