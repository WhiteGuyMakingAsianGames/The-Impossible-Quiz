const questions = [
    { question: "Find the code", answer: "12345", hint: "Think simple—count from one to five." },
    // Other questions...
];

let currentQuestionIndex = 0;
let timer = 300; // 5 minutes in seconds

function startQuiz() {
    document.getElementById('start-scene').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    playBackgroundMusic();
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = questions[currentQuestionIndex].hint;
}

function checkAnswer() {
    const answerElement = document.getElementById('answer');
    if (answerElement.value === questions[currentQuestionIndex].answer) {
        playCorrectSound();
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            answerElement.value = '';
        } else {
            endQuiz();
        }
    } else {
        alert('Incorrect, try again.');
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timer--;
        if (timer < 0) {
            clearInterval(interval);
            alert('Time is up! You failed to complete the quiz.');
        }
    }, 1000);
}

function endQuiz() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('end-scene').classList.remove('hidden');
}

function playCorrectSound() {
    const msg = new SpeechSynthesisUtterance("Password correct");
    msg.rate = 0.75; // Slow down the speech rate
    window.speechSynthesis.speak(msg);
}

function playBackgroundMusic() {
    const audio = document.getElementById('background-music');
    audio.loop = true;
    audio.play();
}

window.onload = () => {
    document.getElementById('start-scene').classList.remove('hidden');
};
