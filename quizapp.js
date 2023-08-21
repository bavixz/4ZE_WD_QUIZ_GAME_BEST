const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener('click',startGame);
nextButton.addEventListener("click",()=>{
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
startButton.classList.add("hide");
shuffledQuestions = question.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove("hide");
setNextQuestion();
}

function setNextQuestion(){
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click",selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}
function resetState() {
   nextButton.classList.add("hide");
   while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
   } 
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove("hide");
    }
    else{
        nextButton.classList("hide");
    }
}

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}


const question = [
    {
        question:"Which Formula 1 driver holds the record for the most World Drivers' Championship titles?",
        answers:[
            {text:"Lewis Hamilton",correct:false},
            {text:"Michael Schumacher",correct:true},
            {text:"Ayrton Senna",correct:false},
            {text:"Sebastian Vettel",correct:false}
        ]
    },{
        question:"In the sport of horse racing, which prestigious race is often referred to as 'The Run for the Roses'?",
        answers:[
            {text:"Kentucky Derby",correct:true},
            {text:"Grand National",correct:false},
            {text:"Melbourne Cup",correct:false},
            {text:"Epsom Derby",correct:false}
        ]
    },{
        question:"Which famous endurance race is held annually in France and is known for its 24-hour format?",
        answers:[
            {text:"Monaco Grand Prix",correct:false},
            {text:"Le Mans 24 Hours",correct:true},
            {text:"Daytona 500",correct:false},
            {text:"Nürburgring 24 Hours",correct:false}
        ]
    },{
        question:"Which country is home to the famous Suzuka International Racing Course, a track known for hosting Formula 1 races?",
        answers:[
            {text:"United Kingdom",correct:false},
            {text:"USA",correct:false},
            {text:"India",correct:false},
            {text:"Japan",correct:true}
        ]
    },{
        question:"Which legendary rally race is known for its challenging terrain, including snow, ice, and gravel roads, and is often considered one of the toughest motorsport events in the world?",
        answers:[
            {text:"Dakar Rally",correct:false},
            {text:"Monte Carlo Rally",correct:true},
            {text:"Baja 1000",correct:false},
            {text:"WRC Finland Rally",correct:false}
        ]
    }
]
