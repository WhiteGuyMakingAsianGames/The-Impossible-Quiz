const questions = [
    { question: "Find the code", answer: "12345", hint: "Think simple—count from one to five." },
    { question: "Find the code", answer: "23456", hint: "Starts with 23, ends with 56—middle part is all numbers in order." },
    { question: "Find the code", answer: "34567", hint: "Begins at 3, finishes at 7—with numbers in sequence in between." },
    { question: "Find the code", answer: "45678", hint: "Starts with 4 and ends with 78—pay attention to the numbers in the middle." },
    { question: "Find the code", answer: "56789", hint: "Kicks off with 5 and wraps up with 89, look for the pattern inside." },
    { question: "Find the code", answer: "67890", hint: "Sequential digits: start at 6, end at 0." },
    { question: "Find the code", answer: "78901", hint: "Starts with 7, ends with 1—middle is a smooth sequence." },
    { question: "Find the code", answer: "89012", hint: "Starts at 8 and ends with 12—the middle part completes the sequence." },
    { question: "Find the code", answer: "90123", hint: "Begins with 9, closes at 23—middle is a series of zeros and ones." },
    { question: "Find the code", answer: "01234", hint: "Starts at zero, ends at 34—focus on what's in between." },
    { question: "Find the code", answer: "12345", hint: "Another straightforward one—starts at 12, ends at 45." },
    { question: "Find the 8-digit code", answer: "12345678", hint: "Starts with 1234, ends with 5678—keep it sequential." },
    { question: "Find the 8-digit code", answer: "23456789", hint: "Starts with 2345, ends with 6789—sequential numbers all the way." },
    { question: "Find the 8-digit code", answer: "34567890", hint: "Kicks off with 3456, wraps up with 7890—just follow the sequence." },
    { question: "Find the 8-digit code", answer: "45678901", hint: "Starts with 4567, ends with 8901—complete the sequence." },
    { question: "Crack the code", answer: "2357111317192329", hint: "This is where it gets tricky. Imagine a slot machine, but each reel has digits from 0 to 9, and they rotate at different speeds. Stop each reel to reveal the code, but be careful: each digit can only appear once. The digits are hidden in sequences of prime numbers. Decode the prime numbers to find the correct sequence."}
];

let currentQuestionIndex = 0;
let timer = 600; // 10 minutes in seconds

function startQuiz() {
    document.getElementById('start-scene').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
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

window.onload = () => {
    document.getElementById('start-scene').classList.remove('hidden');
};
