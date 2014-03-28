"use strict";

/*
Quiz {
    config: {
        source: "templejt",
        allQuestions: "pytania",
        container: "container dla templatow"
    },
    questionIndex, // domyslnie 0 
    htmlOut,
    startTime,
    endTime,
    compiledHtml,
    init(config),
    bindTemplates(),
}*
*/
///////////////////////

var Quiz = {
    init: function(config) {
        this.config = config;
        this.questionIndex = 0;
        this.compiledHtml = Handlebars.compile(this.config.source);
        this.htmlOut = this.compiledHtml(this.config.allQuestions[this.questionIndex]); //sorry for this one - temporary
        this.bindEvents();
        this.config.container.append(this.htmlOut);
        this.startTime = new Date();
    },
    bindEvents: function() {
        this.config.container.on('click', 'li', this.checkAnswer);
    },
    getNextQuestion: function() {
        if(this.questionIndex < this.config.allQuestions.length-1){
            this.questionIndex++;
            this.htmlOut = this.compiledHtml(this.config.allQuestions[this.questionIndex]);
            $('.container').html(this.htmlOut);
        } else {
            var endTime = new Date();
            $('.container').html("koniec pytan twoj czas to: " + ( endTime- this.startTime)/1000);
        }
    },
    checkAnswer: function() { // this - czyli klikniety link 
        var that = Quiz;
        if($(this).data('answer') == Quiz.config.allQuestions[Quiz.questionIndex].correctAnswer) {
            console.log('correct');
            that.getNextQuestion();
        } else {
            console.log('nope');
            alert('zła odpowiedź, popraw się!');
        }
    }

}

var allQuestions = [        //objekt ze wszystkimi pytaniami
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
];




$(document).ready(function() {
    Quiz.init({
        source: $('#quizMain').html(),
        allQuestions: allQuestions,
        container: $('.container')
    });

});

