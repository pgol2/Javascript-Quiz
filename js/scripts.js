"use strict";


$(document).ready(function() {

    $.getJSON("questions.json")

    .done(function (data) {
        Quiz.init({
            source: $('#quizMain').html()
            , allQuestions: data
            , container: $('.container')
            , statusBar: $('.bar')
        });
    })

    .fail(function() {
        $('#wrapper').html("<p> Filed to load JSON ! </p>")
    })

    .always(function () {
        console.log("this is allways callback");
    });
});



