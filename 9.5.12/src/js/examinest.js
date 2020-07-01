"use strict"

function Options() {

  this.needToShuffleAnswers = true;
  this.needToShowLoadingScreen = true;
  //this.needToUseAnswersWithImages = true;

  this.classOfImageQuestion = 'question-image';

  this.classOfTextAnswer = 'answer.isText';
  this.classOfImageAnswer = 'answer.isImage';

}

function Selectors() {

  //Screens

  //Start screen

  this.startScreen = $('[data-test-role="start-screen"]');
  this.startScreenChilds = $('[data-test-role="start-screen"] *');

  //Start screen items

  this.startTestButton = $('[data-test-role="start-test-button"]');

  //Loading screen

  this.loadingScreen = $('[data-test-role="loading-screen"]');

  //Test screen

  this.testScreen = $('[data-test-role="test-screen"]');
  this.testScreenChilds = $('[data-test-role="test-screen *"]');

  //Finish screen

  this.finishScreen = $('[data-test-role="finish-screen"]');
  this.finishScreenChilds = $('[data-test-role="finish-screen"] *');
  this.userResult = $('[data-test-role="user-result"]');
  this.totalQuestions = $('[data-test-role="total-questions"]');
  this.restartTestButton = $('[data-test-role="restart-test-button"]');

  //Questions' data fields

  this.numberOfQuestion = $('[data-test-role="number-of-question"]');
  this.textOfQuestion = $('[data-test-role="text-of-question"]');

  this.innerOfImageOfQuestion = $('[data-test-role="inner-of-image-of-question"]');
  this.imageOfQuestion = $('[data-test-role="image-of-question"]');

}

function Information() {

  this.currentQuestion = 1;
  this.amountOfQuestions = 20;

  this.trueUsersAnswers = 0;

}

function Data() {

  this.data = [

    {
      "question": "Кому принадлежал этот особняк до революции 1917 года?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/mansion-of-klementyev.jpg",
      "textAnswers": [
        "Клементьевой А. А.",
        "Дудину М.А.",
        "Горбунову Г.К.",
        "Лосеву Н.И."
      ],
      "imgAnswers": "",
      "trueAnswer": 1
    },
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
      "trueAnswer": 4
    },
    {
      "question": "Как называется этот храм?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/church-of-icon-of-god-mother.jpg",
      "textAnswers": [
        "Храм иконы Божьей Матери",
        "Церковь Покрова",
        "Храм Спас на Крови",
        "Храм Вознесения Господня"
      ],
      "imgAnswers": "",
      "trueAnswer": 1
    },
    {
      "question": "Когда город Середа был переименован в город Фурманов?",
      "questionImg": "",
      "textAnswers": [1918, 2005, 1925, 1941],
      "imgAnswers": "",
      "trueAnswer": 4
    },
    {
      "question": "Какое здание изображено на фотографии?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/surgical-dept.jpg",
      "textAnswers": [
        "Больница №1",
        "Казармы",
        "Усадьба Горбунова Г.К.",
        "Школа №8"
      ],
      "imgAnswers": "",
      "trueAnswer": 1
    },


    {
      "question": "Какой из изображенных на фото храмов построен в начале 18 века?",
      "questionImg": "",
      "textAnswers": [],
      "imgAnswers": [
        "/MyMotherland/dist/assets/images/37/main/places/church-of-icon-of-god-mother.jpg", "/MyMotherland/dist/assets/images/37/main/places/intercession-church.jpg", "/MyMotherland/dist/assets/images/37/main/streets/bolshaya-furmanovskaya-st-furmanov.jpg", "/MyMotherland/dist/assets/images/37/main/places/i-don-t-know-what-church-it-is.jpg"
      ],
      "trueAnswer": 3
    },
    {
      "question": "Как называется этот храм?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/intercession-church.jpg",
      "textAnswers": [
        "Церковь Покрова",
        "Храм Вознесения Господня",
        "Храм Спас на Крови",
        "Храм иконы Божьей Матери"
      ],
      "imgAnswers": "",
      "trueAnswer": 1
    },
    {
      "question": "Кому принадлежала эта усадьба?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/mansion-of-losev.jpg",
      "textAnswers": [
        "Фабриканту Горбунову Г.К.",
        "Художнику Трубникову Д.А.",
        "Писателю Фурманову Д.А.",
        "Купцу Лосеву Н.И."
      ],
      "imgAnswers": "",
      "trueAnswer": 4
    },
    {
      "question": "Как называется этот храм?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/ascension-church.jpg",
      "textAnswers": [
        "Храм Вознесения Господня",
        "Храм Спаса на Крови",
        "Храм иконы Божьей Матери",
        "Церковь Покрова"
      ],
      "imgAnswers": "",
      "trueAnswer": 1
    },
    {
      "question": "С какой целью использовалось это здание до революции?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/eight-school.jpg",
      "textAnswers": [
        "Школа для рабочих",
        "Рабочие казармы",
        "Техническое училище",
        "Больница для рабочих"
      ],
      "imgAnswers": "",
      "trueAnswer": 1
    },
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
      "trueAnswer": 3
    },
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
      "trueAnswer": 3
    },
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
      "trueAnswer": 2
    },
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
      "trueAnswer": 3
    },
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
      "trueAnswer": 3
    },
    {
      "question": "Кому установлен этот бюст?",
      "questionImg": "/MyMotherland/dist/assets/images/37/main/places/gorbunov-grig-klem-censored.jpg",
      "textAnswers": [
        "В.А.Лапшину",
        "Д.А.Фурманову",
        "Д.А.Трубникову",
        "Г.К.Горбунову"
      ],
      "imgAnswers": "",
      "trueAnswer": 4
    },
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
      "trueAnswer": 2
    },
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
      "trueAnswer": 2
    },
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
      "trueAnswer": 3
    },
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
      "trueAnswer": 3
    }
  ]

}

function Test() {

  this.start = function () {

    Selectors.startScreen.hide;
    Questions.check()

  }

  this.finish = function () {
    Selectors.testScreen.hide();

    Selectors.userResult.text(Information.trueUsersAnswers);
    Selectors.totalQuestions.text(Information.amountOfQuestions);

    setTimeout(function () {
      Selectors.finishScreen.css('display', 'flex');
      Loading.hide();
    }, 390)
  }

}

function Answers() {

  this.firstAnswerButton = $('[data-test-role="1AnswerButton"]');
  this.secondAnswerButton = $('[data-test-role="2AnswerButton"]');
  this.thirdAnswerButton = $('[data-test-role="3AnswerButton"]');
  this.fourthAnswerButton = $('[data-test-role="4AnswerButton"]');

  this.answersHolder = $('[data-test-role="answersHolder"]');

  this.firstAnswerButton.click(function () {
    this.check(1)
  })

  this.secondAnswerButton.click(function () {
    this.check(2)
  })

  this.thirdAnswerButton.click(function () {
    this.check(3)
  })

  this.fourthAnswerButton.click(function () {
    this.check(4)
  })

  this.check = function (userAnswer) {

    var trueAnswer = Data.data[Information.currentQuestion - 1].trueAnswer;

    if (userAnswer == trueAnswer) {
      Information.trueUsersAnswers++;
      Information.currentQuestion++;

      Questions.check();
    } else {
      Information.currentQuestion++;

      Questions.check();
    }

  }

}

function Questions() {

  this.check = function () {

    if (Information.currentQuestion == Information.amountOfQuestions + 1) {
      if (Options.needToShowLoadingScreen) {
        Loading.show()
      }

      Test.finish()

    } else {
      if (Options.needToShowLoadingScreen) {
        Loading.show()
      }

      Questions.draw()
      

    }

  }

  this.draw = function () {

    var textOfQuestion = Data.data[Information.currentQuestion - 1].question;
    var imageOfQuestion = Data.data[Information.currentQuestion - 1].questionImg;
    var textAnswers = Data.data[Information.currentQuestion - 1].textAnswers;
    var imageAnswer = Data.data[Information.currentQuestion - 1].imgAnswers;

    var numberOfQuestion = 'Вопрос ' + Information.currentQuestion + ' / ' + Information.amountOfQuestions + '.';

    Selectors.numberOfQuestion.text(numberOfQuestion);
    Selectors.textOfQuestion.text(textOfQuestion);

    if (imageOfQuestion) {
      var questionImg = $('<img class="' + Options.classOfImageQuestion + '" src="' + imageOfQuestion + '" data-test-role="imageOfQuestion">');
      $('.' + Options.classOfImageQuestion).remove();
      Selectors.innerOfImageOfQuestion.fadeIn();
      questionImg.appendTo('[data-test-role="imageOfQuestion"]');
    } else {
      Selectors.innerOfImageOfQuestion.fadeOut();
    }

    if (imageAnswer) {
      for (i = 0; i < 4; i++) {
        var answerImg = $('<img class="Answer is-image" data-test-role="answer' + i + '" src="' + imageAnswer[i] + '">');
        $('[data-test-role="' + i + 'AnswerButton"]').empty();
        answerImg.appendTo('[data-test-role="answer' + i + 'Holder"]');
        $('[data-test-role="' + i + 'AnswerButton"]').addClass($answersWithImages);
        $('[data-test-role="' + i + 'AnswerButton"]').removeClass(Options.classOfTextAnswer);
      }
    } else {
      for (i = 0; i < 4; i++) {
        $('[data-test-role="' + i + 'AnswerButton"]').empty();
        $('[data-test-role="' + i + 'AnswerButton"]').text(textAnswers[i]);
        $('[data-test-role="' + i + 'AnswerButton"]').addClass(Options.classOfTextAnswer);
        $('[data-test-role="' + i + 'AnswerButton"]').removeClass(Options.classOfImageAnswer);
      }
    }

    if (Options.needToShuffleAnswers) {
      $('.answer').shuffle()
    }

    if (Options.needToShowLoadingScreen) {
      setTimeout(function () {
        Loading.hide()
      }, 400)
    }

  }

}

function Loading() {
  this.show = function () {
    Selectors.loadingScreen.removeClass('l-dn');
    Selectors.testScreen.addClass('l-dn');
    Selectors.testScreenChilds.addClass('l-dn');
  }

  this.hide = function () {
    Selectors.loadingScreen.addClass('l-dn');
    Selectors.testScreen.removeClass('l-dn');
    Selectors.testScreenChilds.removeClass('l-dn');
  }
}
