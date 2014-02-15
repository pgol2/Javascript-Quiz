$(document).ready(function () {

	var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0}];

	var $question = $('#question');
	$question.html(allQuestions[0].question);

//	var answer = $('<li><input type="radio" name="answer" value="Example answer2" class="answer">Example answer1</li>');
	
	var $answers = $('#answers');


	for(var i=0; i<allQuestions.length; i++) {
		$question = allQuestions[i].question;
		for(var j=0; j<allQuestions[i].choices.length; j++) {
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
//test