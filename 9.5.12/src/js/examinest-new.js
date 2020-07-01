window.addEventListener('load', () => {

});

let Selectors = {
  answers = {
    wrapper: document.querySelector('[data-test-role="answers"]'),
    first: document.querySelector('[data-test-role="answer0"]'),
    second: document.querySelector('[data-test-role="answer1"]'),
    third: document.querySelector('[data-test-role="answer2"]'),
    fourth: document.querySelector('[data-test-role="answer3"]'),
  },

  screens = {
    start = {
      screen: document.querySelector('[data-test-role="start-screen"]'),
      button: document.querySelector('[data-test-role="start-test-button"]'),
    },
    test: document.querySelector('[data-test-role="test-screen"]'),
    finish = {
      screen: document.querySelector('[data-test-role="finish-screen"]'),
      result: document.querySelector('[data-test-role="result"]'),
      questions: document.querySelector('[data-test-role="questions"]'),
      restartBtn: document.querySelector('[data-test-role="restart-test-button"]')
    },
    plug = {
      screen: document.querySelector('[data-test-role="plug"]')
    }
  },

  question = {
    title: document.querySelector('[data-test-role="number-of-question"]'),
    question: document.querySelector('[data-test-role="text-of-question"]'),
    imagewrap: document.querySelector('[data-test-role="image-of-question-wrapper"]'),
    image: document.querySelector('[data-test-role="image-of-question"]'),
  }
}

let Classes = {
  questionImage: 'question-image',
  textAnswersModifier: 'is-text',
  imageAnswersModifier: 'is-image'
}

let Preferences = {
  shuffleAnswers: true,
  showPlug: true
}

let Data = {

  images = {
    question1: '/motherland/dist/images/mm/37/main/places/mansion-of-klementyev.jpg',
    question3: '',
    question5: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question16: '',
    answer6_1: '',
    answer6_2: '',
    answer6_3: '',
    answer6_4: '',
  },

  quiz = [
    {
      question: "Кому принадлежал этот особняк до революции 1917 года?",
      questionImage: this.images.question1,
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersText: [],
      trueAnswer: Selectors.answers.first
    },
    {
      question: "",
      questionImage: "",
      answersText: [],
      answersImage: [],
      trueAnswer: Selectors.answers.first
    }
  ],

  currentQuestion = 1,
  totalQuestions = this.quiz.length,
}

let Question = {
  draw = function() {
    var questionTitle = `Вопрос ${Data.currentQuestion} / ${Data.totalQuestions}`;
    var questionText = Data.quiz[Data.currentQuestion - 1].question;
    var questionImage = Data.quiz[Data.currentQuestion - 1].questionImage;

    if (Data.quiz[Data.currentQuestion - 1].answersImage == []) {
      var answers = Data.quiz[Data.currentQuestion - 1].answersText
    } else {
      var answers = Data.quiz[Data.currentQuestion - 1].answersImage
    }

    if (Data.quiz[Data.currentQuestion - 1].questionImage) {
      while (Selectors.question.imagewrap.firstChild) {
        Selectors.question.imagewrap.removeChild(Selectors.question.imagewrap.firstChild)
      }
      var questionImageData = document.createElement('img');
      questionImageData.className = Classes.questionImage;
      questionImageData.setAttribute('src', Data.quiz[Data.currentQuestion - 1].questionImage);
      Selectors.question.imagewrap.appendChild(questionImageData)
    }

    Selectors.question.title.textContent = questionTitle;
    Selectors.question.question.textContent = questionText;
  }
}

function startTest () {
  hide(Selectors.screens.start.screen);
  show(Selectors.screens.plug.screen)
  setTimeout(() => {
    hide(Selectors.screens.plug.screen)
  }, 650);
  Question.draw()
  setTimeout(() => {
    show(Selectors.screens.test)
  }, 650);
}


Selectors.screens.start.button.addEventListener('click', startTest)
