$(document).ready(function () {


	//config
	var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0},
						{question: "Drugie pytanie", choices: ["Odpowiedz1", "Odpowiedz1", "Odpowiedz1", "Odpowiedz1"], correctAnswer:0}],
	questionIndex = 0,
	indexMax = allQuestions.length,
	correctIndex = allQuestions[0].correctAnswer;
	question = allQuestions[0].question,
	answers = allQuestions[0].choices,
	$htmlQuestion = $('#question'),
	$htmlAnswers = $('#answers'),
	$nextButton = $('.next');
	$prevButton = $('.prev');

	//methods
	function appendQuestion() {
		$htmlQuestion.html(question);
		$htmlAnswers.html('');
		for(var i in answers) {
			$htmlAnswers.append('<li data-answer=' + i +'>' + answers[i] + '</li>');
		}
	}
	function nextQuestion() {
		questionIndex += 1;
		if(questionIndex < indexMax) {
			question = allQuestions[questionIndex].question;
			answers = allQuestions[questionIndex].choices;
		} else {
			alert('koniec pytan');
		}
	}
	function prevQuestion() {
		questionIndex -= 1;
		if(questionIndex < indexMax) {
			question = allQuestions[questionIndex].question;
			answers = allQuestions[questionIndex].choices;
		} else {
			alert('nie mozna sie dalej cofnac');
		}
	}
	function checkAnswer() {
	}
	function insertNextQuestion() {
		nextQuestion();
		appendQuestion();
	}
	function checkAnswer() {
		if( correctIndex === $(this).data('answer') ) {
			console.log('true');
		} else {
			console.log('false');
		}
	}
	//main 
	appendQuestion();
	$nextButton.on('click', insertNextQuestion);
	$htmlAnswers.on('click', 'li', checkAnswer);
});
