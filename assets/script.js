// variables for what I need to make a quiz
var score= document.getElementById('userScore');
var highScoresEl = document.getElementById('highScore');
var startBtn = document.getElementById('start');
var restartBtn= document.getElementById('restart');
var nextBtn = document.getElementById('next');
var quitBtn= document.getElementById('quit');
var questionText= document.getElementById('questionText');
var answersEl = document.getElementById('options');
var timerEl = document.getElementsByClassName('timer');
var currentQuestion = 0;
var score = 0;
var highScores= [];




restartBtn.addEventListener('click',restart);
nextBtn.addEventListener('click', next);
quitBtn.addEventListener('click', quit);
startBtn.addEventListener('click', start);

function start(){
  highScoresEl.classList.add('hide')
  console.log()
}


function startGame () {
  btnStart.classList.add('hide');
  questionText.classList.add('hide')
  showMyQuestions()

}

function showMyQuestions(question) {
  questionText.innerHTML = myQuestions.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.innerText
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
  })
}

function setNextQuestion (){

}
function resetState(){
  nextBtn.classList
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

