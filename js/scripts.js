$(document).ready(function () {

	var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0},
						{question: "Drugie pytanie", choices: ["Odpowiedz1", "Odpowiedz1", "Odpowiedz1", "Odpowiedz1"], correctAnswer:0}];

	var $questionhtml = $('#question');

	var $answers = $('#answers');

	for(var i in allQuestions) {
		var $question = allQuestions[i].question;
		console.log($question);
		$questionhtml.html($question);
		for(var j in allQuestions[i].choices) {
			$answers.append('<li><input type="radio" name="answer" data-answer="' + j +'" value="' + allQuestions[i].choices[j] + '" class="answer">' + allQuestions[i].choices[j] + '</li>');
		}
		var correct = allQuestions[i].correctAnswer;
		$('.answer').on('click', function(){
			if($(this).data('answer') === correct) {
				console.log('dobra dop');
			} else {
				console.log('zla odp');
			}
		});
	}
});
//TO dop
//obsluga wiekszej ilosci pytan
//interaktywne menu po lewej
//pare efektow z JQ


// Quiz initiation
  // beginning();
  // generate_question();
  // evaluate_answer();
  // previous_question();