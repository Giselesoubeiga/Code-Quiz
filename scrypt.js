var quizQuestions = document.getElementById("quiz-questions");
var btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    btnStart.classList.add("d-none")
    quizQuestions.classList.remove("d-none")
}

    
