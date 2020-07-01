$().ready(function () {
	variables() //Объявление глобальных переменных

	$startTrigger.click(function () { //Запуск теста
		startingTest()
	})


	//Добавление стилей выбранного ответа

	$a0.click(function () {
		answerSelected($a0)
	})

	$a1.click(function () {
		answerSelected($a1)
	})

	$a2.click(function () {
		answerSelected($a2)
	})

	$a3.click(function () {
		answerSelected($a3)
	})


})



function variables() {

	//Объявление всех необходимых селекторов

	$a0 = $('[data-test-role="answer0Holder"]')
	$a1 = $('[data-test-role="answer1Holder"]')
	$a2 = $('[data-test-role="answer2Holder"]')
	$a3 = $('[data-test-role="answer3Holder"]')
	$answersHolder = $('[data-test-role="answersHolder"]')
	$startScreen = $('[data-test-role="startScreen"]')
	$startScreenChilds = $('[data-test-role="startScreen"] *')
	$startTrigger = $('[data-test-role="startTestButton"]')
	$submitTrigger = $('[data-test-role="submitQuestion"]')
	$questionTitle = $('[data-test-role="questionTitle"]')
	$questionText = $('[data-test-role="questionText"]')
	$questionImgInner = $('[data-test-role="qImgInner"]')
	$questionImg = $('[data-test-role="qImg"]')
	$testScreenChilds = $('[data-test-role="questionTitle"], [data-test-role="questionText"],[data-test-role="answersHolder"]')
	$testScreen = $('[data-test-role="testScreen"]')
	$finishScreen = $('[data-test-role="finishScreen"]')
	$result = $('[data-test-role="result"]')
	$questions = $('[data-test-role="questions"]')
	$restartTrigger = $('[data-test-role="restartTestButton"]')
	$finishScreen = $('[data-test-role="finishScreen"]')
	$finishScreenChilds = $('[data-test-role="finishScreen"]')

	$loader = $('[data-test-role="loading"]')



	//Классы состояния элементов

	$answerSelected = 'answer--selected'
	$answersWithImages = 'answer--image'
	$answersWithText = 'answer--text'

	//Информация о тесте

	$currentQuestion = 1 //Текущий вопрос.
	$amountOfQuestions = 20 //Общее количество вопросов

	$amountOfTrueAnswers = 0 //Количество праильных ответов пользоователя

	//Настройки
	$shuffleAnswers = true
	$transitionPreloader = true

	//Данные тестирования

	$quiz = [

		//Вопрос 1
		{
			"question": "Кому принадлежал этот особняк до революции 1917 года?",
			"questionImg": "assets/images/37/main/places/mansion-of-klementyev.jpg",
			"textAnswers": [
				"Клементьевой А. А.",
				"Дудину М.А.",
				"Горбунову Г.К.",
				"Лосеву Н.И."
			],
			"imgAnswers": "",
			"trueAnswer": $a0
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
			"trueAnswer": $a3
		},
		//Вопрос 3
		{
			"question": "Как называется этот храм?",
			"questionImg": "assets/images/37/main/places/church-of-icon-of-god-mother.jpg",
			"textAnswers": [
				"Храм иконы Божьей Матери",
				"Церковь Покрова",
				"Храм Спас на Крови",
				"Храм Вознесения Господня"
			],
			"imgAnswers": "",
			"trueAnswer": $a0
		},
		//Вопрос 4
		{
			"question": "Когда город Середа был переименован в город Фурманов?",
			"questionImg": "",
			"textAnswers": [1918, 2005, 1925, 1941],
			"imgAnswers": "",
			"trueAnswer": $a3
		},
		//Вопрос 5
		{
			"question": "Какое здание изображено на фотографии?",
			"questionImg": "assets/images/37/main/places/surgical-dept.jpg",
			"textAnswers": [
				"Больница №1",
				"Казармы",
				"Усадьба Горбунова Г.К.",
				"Школа №8"
			],
			"imgAnswers": "",
			"trueAnswer": $a0
		},


		//Вопрос 6
		{
			"question": "Какой из изображенных на фото храмов построен в начале 18 века?",
			"questionImg": "",
			"textAnswers": [],
			"imgAnswers": [
				"assets/images/37/main/places/church-of-icon-of-god-mother.jpg", "assets/images/37/main/places/intercession-church.jpg", "assets/images/37/main/streets/bolshaya-furmanovskaya-st-furmanov.jpg", "assets/images/37/main/places/i-don-t-know-what-church-it-is.jpg"
			],
			"trueAnswer": $a2
		},
		//Вопрос 7
		{
			"question": "Как называется этот храм?",
			"questionImg": "assets/images/37/main/places/intercession-church.jpg",
			"textAnswers": [
				"Церковь Покрова",
				"Храм Вознесения Господня",
				"Храм Спас на Крови",
				"Храм иконы Божьей Матери"
			],
			"imgAnswers": "",
			"trueAnswer": $a0
		},
		//Вопрос 8
		{
			"question": "Кому принадлежала эта усадьба?",
			"questionImg": "assets/images/37/main/places/mansion-of-losev.jpg",
			"textAnswers": [
				"Фабриканту Горбунову Г.К.",
				"Художнику Трубникову Д.А.",
				"Писателю Фурманову Д.А.",
				"Купцу Лосеву Н.И."
			],
			"imgAnswers": "",
			"trueAnswer": $a3
		},
		//Вопрос 9
		{
			"question": "Как называется этот храм?",
			"questionImg": "assets/images/37/main/places/ascension-church.jpg",
			"textAnswers": [
				"Храм Вознесения Господня",
				"Храм Спаса на Крови",
				"Храм иконы Божьей Матери",
				"Церковь Покрова"
			],
			"imgAnswers": "",
			"trueAnswer": $a0
		},
		//Вопрос 10
		{
			"question": "С какой целью использовалось это здание до революции?",
			"questionImg": "assets/images/37/main/places/eight-school.jpg",
			"textAnswers": [
				"Школа для рабочих",
				"Рабочие казармы",
				"Техническое училище",
				"Больница для рабочих"
			],
			"imgAnswers": "",
			"trueAnswer": $a0
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
			"trueAnswer": $a2
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
			"trueAnswer": $a2
		},
		//Вопрос 13
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
			"trueAnswer": $a1
		},
		//Вопрос 14
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
			"trueAnswer": $a2
		},
		//Вопрос 15
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
			"trueAnswer": $a2
		},
		//Вопрос 16
		{
			"question": "Кому установлен этот бюст?",
			"questionImg": "assets/images/37/main/places/gorbunov-grig-klem-censored.jpg",
			"textAnswers": [
				"В.А.Лапшину",
				"Д.А.Фурманову",
				"Д.А.Трубникову",
				"Г.К.Горбунову"
			],
			"imgAnswers": "",
			"trueAnswer": $a3
		},
		//Вопрос 17
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
			"trueAnswer": $a1
		},
		//Вопрос 18
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
			"trueAnswer": $a1
		},
		//Вопрос 19
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
			"trueAnswer": $a2
		},
		//Вопрос 20
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
			"trueAnswer": $a2
		}
	]



}

function startingTest() {

	// $startScreenChilds.fadeOut()
	$startScreen.remove()
	verifyingQuestion()

}

function showQuestion(currentQuestion) {

	//Ячейки данных вопроса
	$questionTextData = $quiz[$currentQuestion - 1].question
	$questionImgData = $quiz[$currentQuestion - 1].questionImg
	$answersData = $quiz[$currentQuestion - 1].textAnswers
	$answersImgData = $quiz[$currentQuestion - 1].imgAnswers

	var questionTitle = 'Вопрос ' + currentQuestion + ' / ' + $amountOfQuestions + '.'
	var questionText = $questionTextData
	var questionImg = $questionImgData


	$questionTitle.text(questionTitle) //Заполнение заголовка
	$questionText.text(questionText) //Заполнение текста вопроса



	if (!questionImg) { //Появление иллюстрации к вопросу
		$questionImgInner.fadeOut()
	} else {
		var qImg = $('<img class="question__image" src="' + questionImg + '" data-test-role="qImg">')
		qImg.attr('src', questionImg)
		qImg.attr('data-test-role', 'qImg')
		$('.question__image').remove()
		$questionImgInner.fadeIn()
		qImg.appendTo('[data-test-role="qImgInner"]')
	}

	for (i = 0; i < 4; i++) {
		$('[data-test-role="answer' + i + 'Holder"]').removeClass($answerSelected)
	}

	if ($answersImgData) {
		for (i = 0; i < 4; i++) {
			var aImg = $('<img class="answer__img" data-test-role="answer' + i + '" src="' + $answersImgData[i] + '">')
			$('[data-test-role="answer' + i + 'Holder"]').empty()
			aImg.appendTo('[data-test-role="answer' + i + 'Holder"]')
			$('[data-test-role="answer' + i + 'Holder"]').addClass($answersWithImages)
			$('[data-test-role="answer' + i + 'Holder"]').removeClass($answersWithText)
		}
		$answersHolder.attr('data-test-option', 'imageAnswerHolder')
	} else {
		for (i = 0; i < 4; i++) {
			$('[data-test-role="answer' + i + 'Holder"]').empty()
			$('[data-test-role="answer' + i + 'Holder"]').text($answersData[i])
			$('[data-test-role="answer' + i + 'Holder"]').addClass($answersWithText)
			$('[data-test-role="answer' + i + 'Holder"]').removeClass($answersWithImages)
		}
		$answersHolder.attr('data-test-option', '')

	}

	if ($shuffleAnswers) {
		$('.answer').shuffle()
	}

	if ($transitionPreloader) {
		setTimeout(function () {
			hideLoading()
		}, 400)
	}

}

function answerSelected(answer) {

	for (i = 0; i < 4; i++) {
		$('[data-test-role="answer' + i + 'Holder"]').removeClass($answerSelected)
	}

	answer.addClass($answerSelected)
	verifyingAnswer(answer)


}

function verifyingAnswer(answer) {

	var trueAnswer = $quiz[$currentQuestion - 1].trueAnswer

	if (answer == trueAnswer) {
		$amountOfTrueAnswers++
		$currentQuestion++
		verifyingQuestion()
		console.info(true)
	} else {
		$currentQuestion++
		verifyingQuestion()
		console.error(false)
	}

}

function verifyingQuestion() {

	if ($currentQuestion == $amountOfQuestions + 1) {

		if ($transitionPreloader) {
			showLoading()
		}

		finishTest()

	} else {

		if ($transitionPreloader) {
			showLoading()
		}

		setTimeout(function () {

			showQuestion($currentQuestion)
		}, 500)

	}

}

function showLoading() {
	$loader.css('display', 'flex')
	$testScreen.css('display', 'none')
	$testScreenChilds.css('display', 'none')
	$questionImg.css('display', 'none')
}

function hideLoading() {
	$loader.css('display', 'none')
	$testScreen.css('display', 'flex')
	$testScreenChilds.css('display', 'flex')
	$questionImg.css('display', 'none')

}

function finishTest() {

	$testScreen.remove()

	$result.text($amountOfTrueAnswers)
	$questions.text($amountOfQuestions)

	setTimeout(function () {
		$finishScreen.css('display', 'flex')
		hideLoading()
	}, 390)

	setTimeout(function () {
		hideLoading()
	}, 400)

}
