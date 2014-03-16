"use strict";


var allQuestions = [
    {
        question: "Who is Prime Minister of the United Kingdom?", 
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
        correctAnswer: 0
    },
    {question: "Drugie pytanie", 
    choices: ["Odpowiedz1", "Odpowiedz1", "Odpowiedz1", "Odpowiedz1"], 
    correctAnswer: 0
    },
    {question: "Stolica Polski to? ", 
    choices: ["Krakow", "Skrobow", "Warszawa", "Niestety Warszawa"], 
    correctAnswer: 3
    }
],
source = $('#quizMain').html(),
template = Handlebars.compile(source),
questionIndex = 0,
data = allQuestions[questionIndex],
html = template(data),
startTime  = new Date();

function getNextQuestion() {
    if(questionIndex < allQuestions.length-1) {
         questionIndex++;
         html = template(allQuestions[questionIndex]);
         $('.container').html(html).fadeIn();
    } else {
        var endTime = new Date();
        $('.container').html("koniec pytań twoj czas to: " + (endTime - startTime)/1000);

    }
}
function checkAnswer() {
    var answer = $(this);
    if(answer.data('answer') == allQuestions[questionIndex].correctAnswer) {
        console.log('correct');
        getNextQuestion();
    } else {
        console.log('nope');
    }
}

// // blocking code 
function getQuestions2 () {
    var jqXHR = $.ajax({
        url: 'questions.json'
        ,async: false
    });
    return JSON.parse(jqXHR.responseText);
}

//non blocking - still doesn't work 
function getQuestions () {
    var json = null;
    $.ajax({
        url: 'questions.json',
        success: function(data) {
            json = data;
        }
    });
    return json;
}

function getQuestions3 () {
    var obj = null;
    $.ajax({
        url: 'questions.json'
    })
    .done(function (data) {
        obj = data;
        console.log(data[0].question);
    });
}


$(document).ready(function () { 
    $('.container').append(html);
    $('.container').on('click','li', checkAnswer);
});
//check()
//getScore()
//promptUser()