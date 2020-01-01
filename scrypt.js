var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var currentindex = 0;
var score = 0;
var alert =document.getElementById("alert");
var questions = [
    {
        title: "Commonly used data type Do Not include: ",
        choices: ["strings","booleance","alerts", "numbers"],
        answer : "alerts"    
    },
    {
        title: "The condition in an if/else statement is enclosed within: ",
        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
        answer : "square brackets"    
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
        answer : "numbers and strings"    
    },
    {
        title: "String values must be enclosed within --- when being assigned to variables ",
        choices: ["commas","curly brackets","quotes", "parentheses"],
        answer : "quotes"    
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal/bash","alerts", "console.log"],
        answer : "console.log"    
    },
]
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
    
// Time set

function gametime(){
    var count = 75
    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--
        }, 1000);

}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}

function displaynextQuestion(e){
    currentindex++
    correction(e.target.innerText == nextQuestions.answer)
    questionanswers.innerHTML=""
    if(currentindex < questions.length){    
        nextQuestions= questions[currentindex]
        displayQuestion(nextQuestions)  
    }else {
        currentindex = 0
        displayQuestion(nextQuestions)  
    }
     
}
function correction(response){
    
    if(response){
        alert.innerText= "good"
        console.log("Good")
    }else {
        alert.innerText="wrong"
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
