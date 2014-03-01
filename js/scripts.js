"use strict";

$(document).ready(function () {


//config
var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 0},
                    {question: "Drugie pytanie", choices: ["Odpowiedz1", "Odpowiedz1", "Odpowiedz1", "Odpowiedz1"], correctAnswer: 0},
                    {question: "Stolica Polski to? ", choices: ["Krakow", "Skrobow", "Warszawa", "Niestety Warszawa"], correctAnswer: 3}],
questionIndex = 0,                              //index aktualnego pytania 
indexMax = allQuestions.length,                 //maksymalny index pytan 
correctIndex = allQuestions[0].correctAnswer,   //index prawidlowej odp
question = allQuestions[0].question,            //akutalna odpowiedz wyswietlana
answers = allQuestions[0].choices,              //akutalne pytanie                        
$htmlQuestion = $('#question'),
$htmlAnswers = $('#answers');


function getNextQuestion() {
    if(questionIndex < indexMax) {
        correctIndex = allQuestions[questionIndex].correctAnswer;
        question = allQuestions[questionIndex].question;
        //console.log("poprawna" + correctIndex);
        $htmlQuestion.html(question);

        answers = allQuestions[questionIndex].choices;
        var outAnswers = ""; 
        for(var i in answers) {
            outAnswers += '<li data-answer="' + i + '">' + answers[i] + "</li>"; 
        }
        $htmlAnswers.html(outAnswers);
        questionIndex++;
    } else {
        getScore();
    }
}

function check() {
    if($(this).data('answer') === correctIndex) {
         $(".prompt").hide();
        getNextQuestion();
    } else {
        promptUser(false);
    }
}
function promptUser(correct) {
    var $message = $(".prompt");
    if(correct) {
        $message.addClass("bg-success");
        $message.html("Gratujacje!");
    } else {
        $message.addClass("bg-danger");
        $message.html("Niestety - wybierz inna odp");
    }
    $message.show();
}

function getScore() {
    promptUser(true);
}

getNextQuestion();
$htmlAnswers.on('click', 'li', check);
});


// To do
// -object
// -bootstrap & handlebars

