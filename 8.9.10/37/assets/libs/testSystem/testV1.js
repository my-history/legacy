function checkingAnswer(){
	var trueAnswer = $questions[$currentQuestion - 1].trueAnswer
	if ($('#radio1').prop('checked') || $('#radio2').prop('checked') || $('#radio3').prop('checked') || $('#radio4').prop('checked')) {
		if (trueAnswer.is(':checked')) {
			//Выбран верный ответ
			$amountOfTrueAnswers++;
			$currentQuestion++;
			console.info($amountOfTrueAnswers);
			$('#warining').fadeOut();
			showQuestion($currentQuestion);
		}
		else {
			//Выбран неверный ответ
			$currentQuestion++;
			console.error($amountOfTrueAnswers);
			$('#warining').fadeOut();
			showQuestion($currentQuestion);
		}
	}
	else {
		$('#warining').css('display', 'flex');
	}
}

function finishTest() {

	$('#numberOfQuestion').fadeOut();
	$('#textOfQuestion').fadeOut();
	$('.qImgInner').fadeOut();
	$('#answers-list').fadeOut();
	$('#submit-question').fadeOut();
	$('#test').hide();
	
	$('#finishScreen .result .trueAnswers').text($amountOfTrueAnswers);
	$('#finishScreen .result .totalQuestions').text($amountOfQuestions);

	$('#finishScreen').css('display', 'flex');

	$('#restartTest').on('click', function() {

		restartTest();

	})

}

function restartTest() {

	$('#finish .title').fadeOut();
	$('#finish .trueAnswers').fadeOut();
	$('#finish .slash').fadeOut();
	$('#finish .totalQuestions').fadeOut();
	$('#finish .text').fadeOut();
	$('#finish .test-btn').fadeOut();
	$('#finish').hide();

	$currentQuestion = 1

	showQuestion($currentQuestion)

}

