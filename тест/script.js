const quizData = [
    {
        question: "Что такое ПИ?",
        a:"Число",
        b:"Буква",
        c:"Символ",
        d:"Сокращение",
        correct: "a",
    },

    {
        question: "Как называется столица Франции?",
        a:"Берлин",
        b:"Лондон",
        c:"Париж",
        d:"Рим",
        correct: "c",
    },

    {
        question: "Сколько планет в солнечной системе?",
        a:"8",
        b:"9",
        c:"10",
        d:"7",
        correct: "a",
    },

    {
        question: "Как называется самая высокая гора на Земле?",
        a:"Эверест",
        b:"Килиманджаро",
        c:"Макинли",
        d:"Эльбрус",
        correct: "a",
    },
];

const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question');

const a_text=document.getElementById('a_text');

const b_text=document.getElementById('b_text');

const c_text=document.getElementById('c_text');

const d_text=document.getElementById('d_text');

const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

function getSelected(){
    let answer=undefined;
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked=false;
    });
}

submitBtn.addEventListener('click', ()=>{
    const answer=getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length}questions.</h2>
            <button onclick='location.reload()'>Reload</button>`;
        }
    }
});