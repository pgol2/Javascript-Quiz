"use strict";
$(document).ready(function () {
//config
var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 0},
                    {question: "Drugie pytanie", choices: ["Odpowiedz1", "Odpowiedz1", "Odpowiedz1", "Odpowiedz1"], correctAnswer: 0},
                    {question: "Stolica Polski to? ", choices: ["Krakow", "Skrobow", "Warszawa", "Niestety Warszawa"], correctAnswer: 3}],
questionIndex = 0,
indexMax = allQuestions.length,
correctIndex = allQuestions[0].correctAnswer,
question = allQuestions[0].question,
answers = allQuestions[0].choices,
correct = 0,
$htmlQuestion = $('#question'),
$htmlAnswers = $('#answers'),
$nextButton = $('.next'),
$prevButton = $('.prev');

//methods
function appendQuestion() {
    $htmlQuestion.html(question);
    $htmlAnswers.html('');
    var list = "";
    for(var i in answers) {
        list += '<li data-answer=' + i +'>' + answers[i] + '</li>';
    }
    $htmlAnswers.html(list);
}
function nextQuestion() {
    questionIndex += 1;
    if(questionIndex < indexMax) {
        question = allQuestions[questionIndex].question;
        answers = allQuestions[questionIndex].choices;

        if(questionIndex === indexMax-1) {
            $nextButton.html('finish');
        }
    } else {
        getScore();
    }
}
function insertNextQuestion() {
    nextQuestion();
    appendQuestion();
}
function checkAnswer() {
    if( correctIndex === $(this).data('answer') ) {
        ++correct;
        console.log(correct);
        alert('dobrze');
    } else {
        alert('zle');
    }
}
function getScore() {
    alert('twoj wynik to: ' + Math.round(correct/allQuestions.length * 100) + " %");
}

//main 
appendQuestion();
$nextButton.on('click', insertNextQuestion);
$htmlAnswers.on('click', 'li', checkAnswer);

});

// Quiz initiation
// beginning();
// generate_question();
// evaluate_answer();
// previous_question();


