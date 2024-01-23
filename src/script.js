let startButton = document.querySelector('.start-button')
let startWrapper = document.querySelector('.start-wrapper')
let quizWrapper = document.querySelector('.quiz-wrapper')
const answers = document.querySelectorAll('.answer-row button')
let question_text = document.querySelector('.question-heading')
let result_text = document.querySelector('.result-heading')

let question_answer
let num1
let num2
let right_answers = 0
let wrong_answers = 0
let questions_count = 0

function startGame() {
    startWrapper.classList.add('hide')
    quizWrapper.classList.remove('hide')
    if (questions_count < 50) {
        for (let i = 0; i < answers.length; i += 1) {
            answers[i].innerHTML = Math.floor(Math.random() * 200)
            answers[i].addEventListener('click', next_question)
            answers[i].addEventListener('click', check_answer(answers[i]))
            questions_count += 1
        }
        randomQuestion()
    }
}

function next_question() {
    if (questions_count < 50) {
        for (let i = 0; i < answers.length; i += 1) {
            answers[i].innerHTML = Math.floor(Math.random() * 200)
            answers[i].addEventListener('click', check_answer(answers[i]))
            questions_count += 1
        }
        randomQuestion()
    } else {
        result_text.innerHTML = 'you answer 10 questions, right: ' + right_answers + ', wrong: ' + wrong_answers
        quizWrapper.classList.add('hide')
        startWrapper.classList.remove('hide')
        result_text.classList.remove('hide')
        questions_count = 0
    }
}

function check_answer(item) {
    return function () {
        console.log(item)
        if (item.innerHTML == question_answer) {
            right_answers += 1
        } else {
            wrong_answers += 1
        }
    }
}

let sign
function randomQuestion() {
    if (Math.floor(Math.random() * 2) === 0) {
        sign = '-'
    } else {
        sign = '+'
    }

    num1 = Math.floor(Math.random() * 99)
    num2 = Math.floor(Math.random() * 99)
    while (num2 > num1 && sign === '-') {
        num1 = Math.floor(Math.random() * 99)
        num2 = Math.floor(Math.random() * 99)
    }
    let question = num1 + sign + num2


    if (sign == '+') {
        question_answer = num1 + num2
    } else {
        question_answer = num1 - num2
    }

    question_text.innerHTML = question
    answers[Math.floor(Math.random() * 5)].innerHTML = question_answer
}

startButton.addEventListener('click', startGame)