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

const knowledgeQuiz = {
    title: "Testează-ți cunoștințele despre manipulare",
    description: "Acest test evaluează cât de bine ai înțeles conceptele și informațiile prezentate despre manipulare. Răspunde la întrebări pentru a-ți testa cunoștințele.",
    questions: [
        {
            question: "Care dintre următoarele NU este un tip de manipulare prezentat pe site?",
            answers: [
                "Manipularea fizică",
                "Manipularea emoțională",
                "Manipularea psihologică",
                "Manipularea socială"
            ],
            correctAnswer: 0
        },
        {
            question: "Ce este 'gaslighting'-ul?",
            answers: [
                "O formă de manipulare prin complimente excesive",
                "O tehnică de a face pe cineva să se simtă vinovat",
                "O metodă de a face victima să se îndoiască de propria realitate",
                "O strategie de manipulare prin amenințări directe"
            ],
            correctAnswer: 2
        },
        {
            question: "Ce este 'love bombing'?",
            answers: [
                "O tehnică de manipulare prin afecțiune și atenție excesivă",
                "O formă de șantaj emoțional",
                "O metodă de manipulare prin izolare socială",
                "O strategie de manipulare prin critică constantă"
            ],
            correctAnswer: 0
        },
        {
            question: "Care este scopul principal al manipulării prin mass-media?",
            answers: [
                "Distrugerea relațiilor personale",
                "Obținerea de beneficii financiare directe",
                "Modelarea opiniei publice prin prezentarea selectivă a informațiilor",
                "Crearea de conflicte între grupuri sociale"
            ],
            correctAnswer: 2
        },
        {
            question: "De ce este important să recunoaștem manipularea?",
            answers: [
                "Doar pentru a evita relațiile toxice",
                "Pentru a manipula mai eficient la rândul nostru",
                "Pentru a ne proteja și a face alegeri informate în toate aspectele vieții",
                "Exclusiv pentru situații profesionale"
            ],
            correctAnswer: 2
        },
        {
            question: "Care dintre următoarele este un semn al manipulării emoționale?",
            answers: [
                "Comunicare deschisă și onestă",
                "Respect pentru limitele personale",
                "Inducerea sentimentului de vinovăție pentru control",
                "Încurajarea independenței"
            ],
            correctAnswer: 2
        },
        {
            question: "Ce rol are manipularea psihologică?",
            answers: [
                "Să ajute la dezvoltarea personală",
                "Să controleze gândurile sau percepțiile cuiva",
                "Să îmbunătățească relațiile sociale",
                "Să promoveze comunicarea deschisă"
            ],
            correctAnswer: 1
        },
        {
            question: "Care este efectul manipulării prin teamă?",
            answers: [
                "Creșterea încrederii în sine",
                "Îmbunătățirea relațiilor sociale",
                "Forțarea deciziilor sub presiune",
                "Dezvoltarea gândirii critice"
            ],
            correctAnswer: 2
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
const knowledgeQuizBtn = document.getElementById('knowledge-quiz-btn');
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
knowledgeQuizBtn.addEventListener('click', () => selectQuiz(knowledgeQuiz));
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
        button.textContent = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(index));
        answersEl.appendChild(button);
    });
    
    nextBtn.style.display = 'none';
}

// Select answer
function selectAnswer(index) {
    const buttons = answersEl.getElementsByClassName('answer-btn');
    for (let button of buttons) {
        button.classList.remove('selected');
        button.disabled = true;
    }
    buttons[index].classList.add('selected');
    
    if (currentQuiz === knowledgeQuiz) {
        // For knowledge quiz, check if answer is correct
        if (index === currentQuiz.questions[currentQuestion].correctAnswer) {
            score++;
        }
    } else {
        // For other quizzes, add score based on index
        score += currentQuiz.questions[currentQuestion].scores[index];
    }
    
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
    
    if (currentQuiz === knowledgeQuiz) {
        // Results for knowledge quiz
        const percentage = (score / currentQuiz.questions.length) * 100;
        scoreEl.textContent = `Ai răspuns corect la ${score} din ${currentQuiz.questions.length} întrebări (${percentage.toFixed(1)}%)`;
        
        let feedback = '';
        let recommendations = '';
        
        if (percentage >= 90) {
            feedback = "Excelent! Ai o înțelegere foarte bună a conceptelor despre manipulare.";
            recommendations = "Continuă să te informezi și să împărtășești cunoștințele tale cu alții pentru a-i ajuta să recunoască și să prevină manipularea.";
        } else if (percentage >= 70) {
            feedback = "Bine! Ai o bună înțelegere a majorității conceptelor despre manipulare.";
            recommendations = "Recitește secțiunile unde ai avut dificultăți pentru a-ți consolida cunoștințele.";
        } else if (percentage >= 50) {
            feedback = "Acceptabil. Ai înțeles conceptele de bază, dar mai este loc de îmbunătățire.";
            recommendations = "Îți sugerăm să revezi materialele de pe site, în special secțiunile despre tipurile și tehnicile de manipulare.";
        } else {
            feedback = "Ai nevoie de mai multă informare despre conceptele de manipulare.";
            recommendations = "Îți recomandăm să parcurgi din nou toate secțiunile site-ului și să acorzi o atenție deosebită exemplelor practice.";
        }
        
        feedbackEl.textContent = feedback;
        recommendationsEl.textContent = recommendations;
    } else {
        // Existing results logic for other quizzes
        const maxScore = currentQuiz.questions.length * 4;
        const percentage = (score / maxScore) * 100;
        
        scoreEl.textContent = `Scorul tău: ${percentage.toFixed(1)}%`;
        
        let feedback = '';
        let recommendations = '';
        
        if (percentage >= 75) {
            feedback = currentQuiz === victimQuiz
                ? "Rezultatele indică un nivel ridicat de manipulare în relația evaluată."
                : "Rezultatele indică prezența unor comportamente manipulative semnificative.";
            recommendations = "Este recomandat să consulți un specialist pentru suport și îndrumare.";
        } else if (percentage >= 50) {
            feedback = currentQuiz === victimQuiz
                ? "Există unele semne de manipulare în relația evaluată."
                : "Sunt prezente unele comportamente manipulative în interacțiunile tale.";
            recommendations = "Ar fi util să evaluezi mai atent dinamica relațiilor tale și să consideri discuții cu un specialist.";
        } else {
            feedback = currentQuiz === victimQuiz
                ? "Nu par să existe semne semnificative de manipulare în relația evaluată."
                : "Nu par să existe tendințe manipulative semnificative în comportamentul tău.";
            recommendations = "Continuă să fii atent(ă) la dinamica relațiilor tale și menține limite sănătoase.";
        }
        
        feedbackEl.textContent = feedback;
        recommendationsEl.textContent = recommendations;
    }
}

// Reset quiz
function resetQuiz() {
    currentQuiz = null;
    currentQuestion = 0;
    score = 0;
    quizStarted = false;
    
    quizStart.style.display = 'block';
    quizQuestions.style.display = 'none';
    quizResults.style.display = 'none';
    
    quizTitleEl.textContent = "Alege un test pentru a începe";
    quizDescriptionEl.textContent = "";
    startBtn.style.display = 'none';
} 