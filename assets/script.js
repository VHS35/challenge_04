// variables for what I need to make a quiz
var score= document.getElementById('userScore');
var highScoresEl = document.getElementById('highScore');
var startBtn = document.getElementById('start');
var restartBtn= document.getElementById('playAgain');
var nextBtn = document.getElementById('next');
var quitBtn= document.getElementById('quit');
var questionText= document.getElementById('questionText');
var answersEl = document.getElementById('options');
var timerEl = document.getElementsByClassName('timer-seconds');
var currentQuestion = 0;
var score = 0;
var highScores= [];


//  when the user clicks start I want the questions to appear and timer to start
restartBtn.addEventListener('click', playAgain);
nextBtn.addEventListener('click', next);
quitBtn.addEventListener('click', quit);
startBtn.addEventListener('click', startBtn);




function startGame () {
  btnStart.classList.add('hide');
  questionText.classList.add('hide')
  showMyQuestions();}

  function timerCountdown() {
    var timeLeft = 15;
  var timeInterval = setInterval(function () {
   
    if (timeLeft > 1) {
      
      timerEl.textContent = timeLeft + ' seconds remaining';
    
      timeLeft--;
    } else if (timeLeft === 1) {
      
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {

      timerEl.textContent = 'Times up';

      clearInterval(timeInterval);
     
 
    }
  }, 1000);
}


function showMyQuestions() {
  // $('#question-text').text(myQuestions[questionIndex.question]);
  // $('#answer1').text(myQuestions[questionIndex.options[0]])
  // $('#answer2').text(myQuestions[questionIndex.options[1]])
  // $('#answer3').text(myQuestions[questionIndex.options[2]])
  
  
  questionText.innerHTML = myQuestions.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.innerText
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct = answer.correct
    }

  });
  }

function setNextQuestion (){

}


function selectAnswer(){

}



// my quiz questions

var myQuestions = [
  	{
  		question: "DOM stands for _____.",
      options: [
        'Day of Month',
        'Document Object Model', 
        'Director of Music', 
      ],
      answer: 'Document Object Model'
    },
  	{
  		question: "This Object describes a user interaction with the keyboard.",
  		options: [
       'KeyboardEvent', 
       'InputEvent', 
  		 'MouseEvent', 
      ],
      answer: 'KeyboardEvent'
  	},
    {
  		question: "Which operator is used to assign a value to a variable?",
  		options: [
        'X',
        '==', 
  		  '=', 
      ],
      answer: '='
  		},
    {
  		question: "How do you create a function in JavaScript?",
  		options: [
        'function:myFunction()', 
  			'function=function()', 
  		  'function myFunction()', 
      ],
      answer: 'function myFunction()'
      },
  ];

function endQuiz(){}