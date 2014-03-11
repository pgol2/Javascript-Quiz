"use strict";

$(document).ready(function () { 
    $('.container').append(html);
    $('#next').on('click', function() {
        getNextQuestion();      
    });    
});

var source = $('#quizMain').html();
var template = Handlebars.compile(source);

var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 0},
{question: "Drugie pytanie", choices: ["Odpowiedz1", "Odpowiedz1", "Odpowiedz1", "Odpowiedz1"], correctAnswer: 0},
{question: "Stolica Polski to? ", choices: ["Krakow", "Skrobow", "Warszawa", "Niestety Warszawa"], correctAnswer: 3}],
questionIndex = 0,
data = allQuestions[questionIndex],
html = template(data);

function getNextQuestion() {
    if(questionIndex < allQuestions.length-1) {
     questionIndex++;
     html = template(allQuestions[questionIndex]);
     $('.container').html(html);
 } else {
    $('.container').html("koniec pytań!");
}
}

//check()
//getScore()
//promptUser()