console.log("hello");

var timeEl = document.querySelector(".Time");
var questionsEl = document.querySelector(".questions");

var secondsLeft = 75;
var timerInterval;
var questionIndex = 0;
var score = 0;
//var highScoreEl = document.querySelector("#scoring");
var hsElArray = [];

const viewHscores = document.getElementById("viewScores");
const nameDiv = document.getElementById("nameDiv");

function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
  }, 1000); 
  
}

  function stopQuiz() {
    clearInterval(timerInterval);

    secondsLeft = 0;

    document.querySelector("Time").innerHTML = "All Done!";

    questionsEl.textContent = "";

    score = score * (10 / questions.length);

    document.getElementById("finishPage").innerHTML = "Your final score is:" + score;

    nameDiv.style.display = "block";

    document.getElementById("hsInitials").value = "";
  }

  function retrieveName() {
    if (hsElArray.length ===0) {
      highScores = document.getElementById("hsInitials").value + " - " + score;
    }
    else {
      highScores = " " + document.getElementById("hsInitials").value + " - " + score;
    }

    localStorage.setItem("score", score);
    document.querySelector(".Time").innerHTML = "High Scores";
    document.getElementById("answer-div").innerHTML = hsElArray;
  
    
  }


const startBtn = document.getElementById("start");

// event listener for start button, to start the timer
startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";

  displayQuestions();
});

var questionIndex = 0;
var score = 0;

//function to loop through the questions
function displayQuestions() {

  questionsEl.textContent = "";

  var question = questions[questionIndex];
  var questionDiv = document.createElement("div");
  var questionText = document.createElement("p");

  questionText.textContent = question.title;

  questionDiv.appendChild(questionText);


  for (i = 0; i < question.choices.length; i++) 
      {
    var option = document.createElement("button");

    option.textContent = question.choices[i];
    option.setAttribute("class", "answer");

    option.addEventListener("click", function(e) {
      var optionClicked = e.target.innerHTML;
     
      if (optionClicked === questions[questionIndex].answer) {
       
        alert("correct");
        score += 5;
        localStorage.setItem("score", score);
      
        console.log(score);
        //localStorage.getItem("score").innerHTML;
        displayQuestions(questionIndex++); 
      } else {
        alert("incorrect");
        secondsLeft -= 15;  
          // put stop interval or change to high score page
      displayQuestions(questionIndex++); 
      }
      
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        retrieveName();
        

      }

      });
   
    questionDiv.appendChild(option);
  }
  questionsEl.appendChild(questionDiv);

};