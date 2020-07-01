$().ready(function() {

	variables();



	$('#startTest').click(function() {

		$('#startScreen .title').fadeOut(50);
		$('#startScreen .description').fadeOut(50);
		$('#startScreen .test-btn').fadeOut(50);
		$('#startScreen').hide();
		showQuestion('вариант 1', 'вариант 2', 'вариант 3' ,'вариант 4');

	})

	$('#submit1').click(function(){

		checkingAnswers($trueAnswersID[$currentQuestion])

	})



})

function variables() {
	$currentQuestion = 1;
	$amoutOfQuestions = 30;
	$questions = ['Текст вопроса 1', 'Текст вопроса 2', 'Текст вопроса 3', 'Текст вопроса 4'];
	$amountOfTrueAnswers = 0;
	$trueAnswersId = ['$("#radio1")', '$("#radio3")', '$("#radio4")', '$("#radio2")'];
	$nextButtonID = '#submit';
	$currentBtnID = '$("' + $nextButtonID + $currentQuestion + '")';
}

function showQuestion(answer1, answer2, answer3, answer4) {

	var questionTitle = 'Вопрос ' + $currentQuestion + ' / ' + $amoutOfQuestions + '.';
	$('#test #numberOfQuestion').text(questionTitle).fadeIn();
	$('#test #textOfQuestion').text($questions[$currentQuestion - 1]).fadeIn();

	$answers = [answer1, answer2, answer3, answer4];

	$('#answer1').text($answers[0]);
	$('#answer2').text($answers[1]);
	$('#answer3').text($answers[2]);
	$('#answer4').text($answers[3]);
	$('#test').fadeIn()

}


function checkingAnswers(trueAnswerID) {

	if ($('#radio1').prop('checked') || $('#radio2').prop('checked') || $('#radio3').prop('checked') || $('#radio4').prop('checked')) {

		//если выбран верный ответ

		if (trueAnswerID.prop('checked')) {

			$amountOfTrueAnswers++;
			//console.log($amountOfTrueAnswers);
			$('#warining').css('display', 'none').fadeOut();
			$currentQuestion++;
			showQuestion('вариант 9', 'вариант 10', 'вариант 11', 'вариант 12');
			
		}

		//если выбран неверный ответ

		else {

			$('#warining').css('display', 'none').fadeOut();
			$currentQuestion++;
			showQuestion('вариант 9', 'вариант 10', 'вариант 11', 'вариант 12')

		}
	}
	//если не выбран ответ
	else {
		$('#warining').css('display', 'flex').fadeIn();
	}

}
