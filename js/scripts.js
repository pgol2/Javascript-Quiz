"use strict";


$(document).ready(function() {

    var promise = $.getJSON("questions.json");
    promise.done(function (data) {
        Quiz.init({
            source: $('#quizMain').html()
            , allQuestions: data
            , container: $('.container')
            , statusBar: $('.bar')
        });
    });
});



