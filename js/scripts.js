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
TODO:
loading JSON file 
*/
///////////////////////

var Quiz = {
    init: function(config) {
        this.config = config;
        this.questionIndex = 0;
        this.wrongAnswers = 0;
        this.compiledHtml = Handlebars.compile(this.config.source);
        this.htmlOut = this.compiledHtml(this.config.allQuestions[this.questionIndex]); //sorry for this one - temporary
        this.bindEvents();
        this.config.container.append(this.htmlOut);
        this.startTime = new Date();
        this.countVisits();
        this.getUserName();
    },
    bindEvents: function() {
        this.config.container.on('click', 'li', this.checkAnswer);
        $('#changeName').on('click', this.events.changeUserName);
        window.addEventListener("popstate", this.events.prevUrl);

    },
    getNextQuestion: function() {
        var container = $('.container');
        if(this.questionIndex < this.config.allQuestions.length-1){
            this.questionIndex++;
            this.htmlOut = this.compiledHtml(this.config.allQuestions[this.questionIndex]);
            //update url
            //history.pushState(null, null, this.questionIndex);
            this.events.updateProgressBar();
            container.html(this.htmlOut);
        } else {
            var endTime = new Date();
            container.html("koniec pytan twoj czas to: " + ( endTime- this.startTime)/1000 );
            if(!isNaN(this.wrongAnswers)){
                container.append("</br>" + this.wrongAnswers + " razy odpowiedziałeś źle na pytaine");
            }

        }
    },
    getQuestion: function(index){
        if( (index === this.questionIndex) || index < 0 ) return;
        if(index < this.config.allQuestions.length-1) {
            this.questionIndex = index;
            this.htmlOut = this.compiledHtml(this.config.allQuestions[this.questionIndex]);
            $('.container').html(this.htmlOut);
            //update url
            history.pushState(null, null, this.questionIndex);
        }
    }
    , checkAnswer: function() { // this - czyli klikniety link 
        var that = Quiz;
        $('.prompt').hide();
        if($(this).data('answer') === Quiz.config.allQuestions[Quiz.questionIndex].correctAnswer) {

            that.getNextQuestion();
        } else {
            $('.prompt').show();
            Quiz.wrongAnswers++;
        }
    },
    countVisits: function () {
        if(localStorage.getItem('visits') === null) { //periwsza wizyta
            localStorage.setItem('visits', 1);
        } else {
            var value = parseInt(localStorage.getItem('visits'));
            value += 1;
            localStorage.setItem('visits', value);
        }
    },
    getUserName: function() {
        var name = "";
        if(localStorage.getItem('username') === null) {
            name = prompt("What's your name?  ", "type here ");
            localStorage.setItem('username', name);
        } else {
            //add slide down on user here ! 
            $('.helloMessage').html("hello " + localStorage.getItem('username')).slideDown("slow");
        }
    },
    events: {
        changeUserName: function(e) {
            e.preventDefault();
            var name = "";
            name = prompt("What's your name? ", "type here");
            localStorage.setItem('username', name);
            $('.helloMessage').html("hello " + localStorage.getItem('username')).slideDown("slow");
        }
        ,prevUrl: function(e) {
           Quiz.getQuestion(this.questionIndex-1);
        }
        ,nextUrl: function(e) {
            
        }
        , updateProgressBar: function() {
            
            //$('progress').val(value);
        }
    }

}

var allQuestions = [        //objekt ze wszystkimi pytaniami
{
    question: "Complete this phrase. As sick as a...", 
    choices: ["Penguin", "Parrot", "Puffin", "Partridge"], 
    correctAnswer: 0
},
{
    question: "Which legal document states a person's wishes regarding the disposal of their property after death?", 
    choices: ["Will", "Shall", "Would", "Should"], 
    correctAnswer: 0
},
{
    question: "Complete the title of the James Bond film The Man With The Golden...", 
    choices: ["Eagle", "Tooth", "Delicious", "Gun" ], 
    correctAnswer: 3
},
{
    question: " In which sport do two teams pull at the opposite ends of a rope?", 
    choices: ["Ice hockey", "Basketball", "Tug of war", "Polo"], 
    correctAnswer: 2
}
];



$(document).ready(function() {
    $.getJSON("questions.json", function(data) {
       Quiz.init({
        source: $('#quizMain').html(),
        allQuestions: data,
        container: $('.container')
        }); 
    });
});



