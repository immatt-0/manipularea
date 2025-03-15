// Quiz questions and answers
const victimQuiz = {
    title: "Sunt manipulat(ă)?",
    description: "Acest test te va ajuta să identifici potențiale semne de manipulare în relațiile tale. Răspunde sincer la întrebări gândindu-te la o relație sau situație specifică.",
    questions: [
        {
            question: "Te simți adesea vinovat(ă) după interacțiunile cu această persoană, chiar și pentru lucruri care nu par a fi vina ta?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Persoana respectivă îți minimizează frecvent realizările sau sentimentele?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Te simți nesigur(ă) în legătură cu propria percepție asupra realității când ești cu această persoană?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Persoana folosește informații personale împotriva ta sau te amenință subtil?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Te simți izolat(ă) de prieteni sau familie de când ești în această relație?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Simți că trebuie să 'mergi pe vârfuri' în preajma acestei persoane?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Persoana îți spune frecvent că ești 'prea sensibil(ă)' sau că 'exagerezi'?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Te simți epuizat(ă) emoțional după interacțiunile cu această persoană?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        }
    ]
};

const manipulatorQuiz = {
    title: "Manifest comportamente manipulative?",
    description: "Acest test te va ajuta să identifici potențiale comportamente manipulative în propriile tale acțiuni. Răspunde cu sinceritate pentru o evaluare cât mai precisă.",
    questions: [
        {
            question: "Folosești frecvent sentimentele de vinovăție pentru a-i determina pe alții să facă ce vrei?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Îți este greu să accepți un 'nu' ca răspuns?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Minimizezi realizările altora pentru a te simți mai bine?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Folosești informații personale despre alții pentru a obține ce vrei?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Te prefaci că ești victimă pentru a primi atenție sau simpatie?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Îi faci pe alții să se simtă vinovați când nu fac ce vrei tu?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Spui lucruri precum 'dacă m-ai iubi cu adevărat, ai face asta pentru mine'?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        },
        {
            question: "Îți este greu să recunoști când greșești sau să-ți ceri scuze sincer?",
            answers: [
                "Niciodată",
                "Rareori",
                "Uneori",
                "Frecvent",
                "Aproape întotdeauna"
            ],
            scores: [0, 1, 2, 3, 4]
        }
    ]
};

// Quiz state
let currentQuiz = null;
let currentQuestion = 0;
let score = 0;
let quizStarted = false;

// DOM elements
const victimQuizBtn = document.getElementById('victim-quiz-btn');
const manipulatorQuizBtn = document.getElementById('manipulator-quiz-btn');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const quizStart = document.getElementById('quiz-start');
const quizQuestions = document.getElementById('quiz-questions');
const quizResults = document.getElementById('quiz-results');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const scoreEl = document.getElementById('score');
const feedbackEl = document.getElementById('feedback');
const recommendationsEl = document.getElementById('recommendations');
const quizTitleEl = document.getElementById('quiz-title');
const quizDescriptionEl = document.getElementById('quiz-description');

// Event listeners
victimQuizBtn.addEventListener('click', () => selectQuiz(victimQuiz));
manipulatorQuizBtn.addEventListener('click', () => selectQuiz(manipulatorQuiz));
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);

// Select quiz type
function selectQuiz(quiz) {
    currentQuiz = quiz;
    quizTitleEl.textContent = quiz.title;
    quizDescriptionEl.textContent = quiz.description;
    startBtn.style.display = 'block';
}

// Start quiz
function startQuiz() {
    if (!currentQuiz) return;
    
    quizStarted = true;
    currentQuestion = 0;
    score = 0;
    quizStart.style.display = 'none';
    quizQuestions.style.display = 'block';
    quizResults.style.display = 'none';
    showQuestion();
}

// Show question
function showQuestion() {
    const question = currentQuiz.questions[currentQuestion];
    questionEl.textContent = question.question;
    answersEl.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersEl.appendChild(button);
    });
    
    nextBtn.style.display = 'none';
}

// Select answer
function selectAnswer(index) {
    const buttons = answersEl.getElementsByClassName('answer-btn');
    const question = currentQuiz.questions[currentQuestion];
    
    // Remove previous selections
    for (let button of buttons) {
        button.disabled = true;
        button.classList.remove('selected');
    }
    
    // Show selection
    buttons[index].classList.add('selected');
    score += question.scores[index];
    
    nextBtn.style.display = 'block';
}

// Next question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < currentQuiz.questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    quizQuestions.style.display = 'none';
    quizResults.style.display = 'block';
    
    const maxScore = currentQuiz.questions.length * 4;
    const percentage = (score / maxScore) * 100;
    
    scoreEl.textContent = `Scor: ${score} din ${maxScore} puncte`;
    
    // Provide feedback based on score and quiz type
    let feedback = '';
    let recommendations = '';
    
    if (currentQuiz === victimQuiz) {
        if (percentage <= 25) {
            feedback = "Rezultatele sugerează că este puțin probabil să fii într-o relație manipulatoare.";
            recommendations = "Continuă să menții limite sănătoase în relațiile tale și să fii atent(ă) la semnele de manipulare.";
        } else if (percentage <= 50) {
            feedback = "Există unele semne de comportament manipulator în relația ta, dar nu par să fie severe.";
            recommendations = "Ar fi util să discuți cu persoana respectivă despre comportamentele care te deranjează și să stabilești limite clare.";
        } else if (percentage <= 75) {
            feedback = "Rezultatele indică prezența unor comportamente manipulative semnificative în relația ta.";
            recommendations = "Este important să iei în considerare consultarea unui specialist și să evaluezi serios impactul acestei relații asupra ta.";
        } else {
            feedback = "Rezultatele indică un nivel ridicat de manipulare în relația ta.";
            recommendations = "Te încurajăm să cauți ajutor profesional și să iei măsuri pentru a-ți proteja bunăstarea emoțională și fizică.";
        }
    } else {
        if (percentage <= 25) {
            feedback = "Rezultatele sugerează că manifești rareori comportamente manipulative.";
            recommendations = "Continuă să menții relații sănătoase bazate pe respect și comunicare deschisă.";
        } else if (percentage <= 50) {
            feedback = "Există unele tendințe de comportament manipulator în acțiunile tale.";
            recommendations = "Încearcă să fii mai conștient(ă) de aceste comportamente și să dezvolți modalități mai sănătoase de a-ți exprima nevoile.";
        } else if (percentage <= 75) {
            feedback = "Rezultatele indică prezența unor comportamente manipulative semnificative în modul tău de a interacționa cu alții.";
            recommendations = "Ar fi benefic să lucrezi cu un specialist pentru a dezvolta modalități mai sănătoase de comunicare și relaționare.";
        } else {
            feedback = "Rezultatele indică un nivel ridicat de comportamente manipulative.";
            recommendations = "Te încurajăm să cauți ajutor profesional pentru a înțelege originea acestor comportamente și a dezvolta relații mai sănătoase.";
        }
    }
    
    feedbackEl.textContent = feedback;
    recommendationsEl.textContent = recommendations;
}

// Reset quiz
function resetQuiz() {
    currentQuiz = null;
    quizStarted = false;
    currentQuestion = 0;
    score = 0;
    
    quizStart.style.display = 'block';
    quizQuestions.style.display = 'none';
    quizResults.style.display = 'none';
    quizTitleEl.textContent = "Alege un test pentru a începe";
    quizDescriptionEl.textContent = "";
    startBtn.style.display = 'none';
} 