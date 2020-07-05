$().ready(function () {
	variables()
	startTest()

	
	$('#submit-question').on('click', function () { //Переход на следующий вопрос
		questionSumbitted()
	})

	

})

function questionSumbitted() {
	if ($currentQuestion == $amountOfQuestions) {
		finishTest()
	}
	else {
		checkingAnswer()
	}
}

function variables() { //Все используемые переменные

	$currentQuestion = 1
	$amountOfQuestions = 22

	$amountOfTrueAnswers = 0

	$quiz = [

		//Вопрос 1
		{
			"question": "Кому принадлежал этот особняк до революции 1917 года?",
			"questionImg": "img/main/klementyevaHouse.jpg",
			"textAnswers": [
				"Клементьевой А. А.",
				"Дудину М.А.",
				"Горбунову Г.К.",
				"Лосеву Н.И."
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer0')
		},
		//Вопрос 2
		{
			"question": "Когда село Середа получило статус города?",
			"questionImg": "",
			"textAnswers": [
				1925,
				2005,
				1941,
				1918
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer3')
		},
		//Вопрос 3
		{
			"question": "Как называется этот храм?",
			"questionImg": "img/main/KrasnayaCerkov.jpg",
			"textAnswers": [
				"Храм иконы Божьей Матери Всех Скорбящих Радости",
				"Церковь Покрова Пресвятой богородицы",
				"Храм Спас на Крови",
				"Храм Вознесения Господня"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer0')
		},
		//Вопрос 4
		{
			"question": "Когда город Середа был переименован в город Фурманов?",
			"questionImg": "",
			"textAnswers": [1918, 2005, 1925, 1941],
			"imgAnswers": "",
			"trueAnswer": $('#answer3')
		},
		//Вопрос 5
		{
			"question": "Какое здание изображено на фотографии?",
			"questionImg": "img/main/Xirurgiya.jpg",
			"textAnswers": [
				"Хирургическое отделение больницы №1",
				"Казармы",
				"Усадьба Горбунова Г.К.",
				"Школа №8"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer0')
		},
		//Вопрос 6
		{
			"question": "Какой из изображенных на фото храмов построен в начале 18 века?",
			"questionImg": "",
			"textAnswers": [],
			"imgAnswers": [
				"img/main/KrasnayaCerkov.jpg", "img/main/XramPokrova.jpg", "img/main/WhiteCerkov.jpg", "img/main/someChurch.JPG"
			],
			"trueAnswer": $('#answerImg2')
		},
		//Вопрос 7
		{
			"question": "Как называется этот храм?",
			"questionImg": "img/main/XramPokrova.jpg",
			"textAnswers": [
				"Церковь Покрова Пресвятой богородицы",
				"Храм Вознесения Господня",
				"Храм Спас на Крови",
				"Храм иконы Божьей Матери Всех Скорбящих Радости"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer0')
		},
		//Вопрос 8
		{
			"question": "Кому принадлежала эта усадьба?",
			"questionImg": "img/main/sovetskaya_f.jpg",
			"textAnswers": [
				"Фабриканту Горбунову Г.К.",
				"Художнику Трубникову Д.А.",
				"Писателю Фурманову Д.А.",
				"Купцу Лосеву Н.И."
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer3')
		},
		//Вопрос 9
		{
			"question": "Как называется этот храм?",
			"questionImg": "img/main/WhiteCerkov.jpg",
			"textAnswers": [
				"Храм Вознесения Господня",
				"Храм Спаса на Крови",
				"Храм иконы Божьей Матери Всех Скорбящих Радости",
				"Церковь Покрова Пресвятой богородицы"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer0')
		},
		//Вопрос 10
		{
			"question": "С какой целью использовалось это здание до революции?",
			"questionImg": "img/main/nijnii_dvor_f.jpg",
			"textAnswers": [
				"Школа для рабочих",
				"Рабочие казармы",
				"Техническое училище",
				"Больница для рабочих"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer0')
		},
		//Вопрос 11
		{
			"question": "Когда село Середа было впервые упомянуто в исторических документах?",
			"questionImg": "",
			"textAnswers": [
				1588,
				1624,
				1561,
				1141
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer2')
		},
		//Вопрос 12
		{
			"question": "Когда родился Дмитрий Андреевич Фурманов?",
			"questionImg": "",
			"textAnswers": [
				1892,
				1889,
				1891,
				1890
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer2')
		},
		//Вопрос 13
		{
			"question": "Когда был основан музей Д. А. Фурманова?",
			"questionImg": "",
			"textAnswers": [
				1958,
				1964,
				1970,
				1957
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer0')
		},
		//Вопрос 14
		{
			"question": "В каком веке появились первые текстильные предприятия на территории нашего города?",
			"questionImg": "",
			"textAnswers": [
				"В конце 17 века",
				"В 19 веке",
				"В 20 веке",
				"В 18 веке"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer1')
		},
		//Вопрос 15
		{
			"question": "Кто основал музей Д. А. Фурманова?",
			"questionImg": "",
			"textAnswers": [
				"Администрация города",
				"Д.А.Трубников",
				"В.А.Лапшин",
				"Г.К.Горбунов"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer2')
		},
		//Вопрос 16
		{
			"question": "В каком году Д. А. Фурманов написал свой знаменитый роман \"Чапаев\"?",
			"questionImg": "",
			"textAnswers": [
				1924,
				1940,
				1923,
				1930
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer2')
		},
		//Вопрос 17
		{
			"question": "Входил ли Д. А. Трубников в Союз Художников России?",
			"questionImg": "",
			"textAnswers": [
				"Входил, но в последствии был исключен",
				"Нет, Д. А. Трубников не был художником",
				"Да, входил",
				"Нет, во времена Трубникова Союза Художников России не существовало"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer2')
		},
		//Вопрос 18
		{
			"question": "Кому установлен этот бюст?",
			"questionImg": "img/main/Gorbunov.jpg",
			"textAnswers": [
				"В.А.Лапшину",
				"Д.А.Фурманову",
				"Д.А.Трубникову",
				"Г.К.Горбунову"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer3')
		},
		//Вопрос 19
		{
			"question": "Как называлась улица Советская до Октябрьской революции?",
			"questionImg": "",
			"imgAnswers": "",
			"textAnswers": [
				"Улица Дарвина",
				"Улица Купеческая",
				"Улица Карла Маркса",
				"Улица 1905 года"
			],
			"trueAnswer": $('#answer1')
		},
		//Вопрос 20
		{
			"question": "Как называется высокий холм недалеко от села Михайловское?",
			"questionImg": "",
			"textAnswers": [
				"Воронья гора",
				"Волотова гора",
				"Болотов холм",
				"Воробьевы горы"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer1')
		},
		//Вопрос 21
		{
			"question": "На какой улице Середы располагался памятник \"царю-освободителю\"?",
			"questionImg": "",
			"textAnswers": [
				"Революционная",
				"Возрождения",
				"Большая Фурмановская",
				"Тимирязева"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer2')
		},
		//Вопрос 22
		{
			"question": "К какой губернии принадлежала Середа до 1918 года?",
			"questionImg": "",
			"textAnswers": [
				"Нерехтская",
				"Владимирская",
				"Костромская",
				"Ивановская"
			],
			"imgAnswers": "",
			"trueAnswer": $('#answer2')
		}
	]
}


function startTest() { //Запуск теста по кнопке
	$('#startTest').click(function () {
		startingTest()
	})
}


function startingTest() { //Исчезновение стартового экрана, отрисовка первого вопроса
	$('#start .title').fadeOut()
	$('#start .description').fadeOut()
	$('#start .test-btn').fadeOut()
	$('#start').hide()
	showQuestion($currentQuestion)
}

function showQuestion(currentQuestion) { //Отрисовка вопроса

	//Локальные переменные

	var questionTitle = 'Вопрос ' + currentQuestion + ' / ' + $amountOfQuestions + '.'
	var question = $quiz[$currentQuestion - 1].question
	var questionImg = $quiz[$currentQuestion - 1].questionImg
	var answerImg = $quiz[$currentQuestion - 1].imgAnswers

	//Печать заголовков

	$('#test #numberOfQuestion').text(questionTitle)
	$('#test #textOfQuestion').text(question)


	//Скрытие обертки картинки вопроса
	$('#qImgInner').fadeOut()


	//Отрисовка картинки вопроса (при наличии значения с путем к картинке в атрибуте questionImg у $quiz)
	if (questionImg) {
		var qImg = $('<img class="questionImg">')
		qImg.attr('src', questionImg)
		$('#qImg').empty()
		$('#qImgInner').fadeIn()
		qImg.appendTo('#qImg')
	} else {

		$('#qImgInner').fadeOut()

	}


	//Отрисовка вариантов ответа
	if (answerImg[0] === undefined || answerImg[1] === undefined || answerImg[2] === undefined || answerImg[3] === undefined) { //Текстовых
		for (var i = 0; i < 4; i++) {
			$('.textAnswer:eq(' + i + ')').text($quiz[currentQuestion - 1].textAnswers[i])
			$('#answerImg' + i).empty()
		}
		$('#answers-list').removeClass('answersImg')
		$('#answersImgHolder').fadeOut()
		$('#textAnswers').fadeIn()

	}

	else { //Картинками

		var aImg
		
		for (var i = 0; i < 4; i++) {

			aImg = $('<img class="answerImg" data-test-i-img="' + i + '">')
			aImg.attr('src', answerImg[i])
			aImg.appendTo('#answerImg' +  i)			
		}

		$('#answers-list').addClass('answersImg')
		$('#textAnswers').fadeOut()
		$('#answersImgHolder').fadeIn()

	}

	//Изменение текста кнопки под последним вопросом
	if (currentQuestion == $amountOfQuestions) {
		$('#submit-question').text('Завершить тест');
	}

	//Появление формы
	$('#numberOfQuestion').fadeIn()
	$('#textOfQuestion').fadeIn()
	$('#qImgInner').fadeIn()
	$('#answers-list').fadeIn()
	$('#submit-question').fadeIn()
	$('#test').fadeIn(700);

}

function checkingAnswer() { //Проверка выбранного ответа

	var trueAnswer = $quiz[$currentQuestion - 1].trueAnswer

	
	if ((trueAnswer.hasClass('answerImgInner__active')) || trueAnswer.hasClass('textAnswer__active')) { //Выбран верный ответ

		$amountOfTrueAnswers++
		$currentQuestion++
		console.group('Your answer on %i question', $currentQuestion - 1)
		console.warn('true! ' + $amountOfTrueAnswers)
		console.groupEnd()
		showQuestion($currentQuestion)

		$('.answerImgInner__active').each(function () {

			$('.answerImgInner__active').removeClass('answerImgInner__active')

		})

	}

	else {

		$currentQuestion++
		console.group('Your answer on %i question', $currentQuestion - 1)
		console.error('false! ' + $amountOfTrueAnswers)
		console.groupEnd()
		showQuestion($currentQuestion)

	}

}

function finishTest() {

	$('#numberOfQuestion').fadeOut()
	$('#textOfQuestion').fadeOut()
	$('#qImgInner').fadeOut()
	$('#answers-list').fadeOut()
	$('#submit-question').fadeOut()

	$('.trueAnswers').text($amountOfTrueAnswers)
	$('.totalQuestions').text($amountOfQuestions)

	$('#finish').css('display', 'flex')

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
