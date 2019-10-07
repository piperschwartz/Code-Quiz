var timeEl = document.querySelector(".Time")
var questionsEl = document.querySelector(".questions");

var secondsLeft = 75;
var timerInterval;
//var highScoreEl = document.querySelector("#scoring");

function setTime() 
{
    timerInterval = setInterval(function() 
    {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    }, 1000);

}

function setTime() 
{
    timerInterval = setInterval (function ()
    {
        secondsLeft--;
        timeEl.textContent = "Time:" + secondsLeft;
    
      
        if(secondsLeft === 0) {
        }
     finish ();
        })



const startBtn = document.getElementById("start");
startBtn.addEventListener('click', function()
{
    setTime();
    startBtn.style.display = 'none';

    displayQuestions();
})

var questionIndex = 0;
var score = 0;


function displayQuestions() {
    questionsEl.textContent = "";

    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("p");
 
    questionText.textContent = question.title; 

       questionDiv.appendChild(questionText)

    
   for (i = 0; i < question.choices.length; i++) {
   
        var option = document.createElement("button");

        option.textContent = question.choices[i];
        option.setAttribute("class", "answer");
        option.addEventListener("click", function(e) {
          
            var optionClicked = (e.target.innerHTML);
            if(optionClicked === questions[questionIndex].answer)
            {
                alert("correct");
                displayQuestions(questionIndex++);
                score += 5;
                localStorage.setItem("score",score);
                console.log(score);
                //localStorage.getItem("score").innerHTML;
            }
            else {
                alert("incorrect");
                displayQuestions(questionIndex++)
                secondsLeft -= 15;
        
            
            }      
        }) 

        questionDiv.appendChild(option);
    }
    questionsEl.appendChild(questionDiv);
    }
   

}