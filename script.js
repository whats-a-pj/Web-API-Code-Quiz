//selecting the start button on html file
var startBtn = document.querySelector("#start");
//var submitBtn = document.querySelector("#submit");
//var nextQuestion = document.querySelector("#next-question");
//var previousQuestion = document.querySelector("#previous-question");

//empty arrays based on user input
var userAnswers = [];
var correctAnswers = [];
var wrongAnswers = [];

//"What does a .querySelector do?":[1] or b is the correct answer
var allQuestions = [ 
    {
        Question1: "What does a .querySelector do?",
        firstQChoices: [ "Selects a question on the page", "Selects a specific element of an html file", "Selects every question on an html file", "Selects a specific element of a Javascript file"],
        firstQAnswer: "Selects a specific element of an html file"
    },
    {  
        Question2: "What method would you use to mix around the output of contents in an array?",
        secondQChoices: ["Math.mix", "randomInt", "randomArray", "Math.random"],
        secondQAnswer: "Math.random"
    },
    {
        Question3: "What is a DOM?",
        thirdQChoices: ["Document Object Module", "Document Options & Materials", "Document Object Model", "Document Orientation Mender"],
        thirdQAnswer: "Document Object Model"
    },
    {
        Question4: "What does an .addEventListener do?",
        fourthQChoices: ["Runs a function or specified change to the page whenever an event is triggered by the user", "User's computer microphone listens for a command to run a function", "Runs a function every time a user listens to music on their computer", "Runs a function every time a user adds an event to their dateCalender"],
        fourthQAnswer: "Runs a function or specified change to the page whenever an event is triggered by the user"
    },
    {
        Question5: "What method would you use to change the appearance of an element without using the css file?",
        fifthQChoices: [".setAttribute", ".changeElement", "setElement", ".changeAttribute"],
        fifthQAnswer: ".setAttribute"
    }
];

var questionOne = function() {
    if (userAnswers === allQuestions[0].firstQAnswer) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== allQuestions[0].firstQAnswer) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

var firstQ = function() {
    var firstQContent = document.querySelector("#questions");
    firstQContent.textContent = questionOneAnswers[0].a, b, c, d;
    
    
}
startBtn.addEventListener("click", firstQ);

//nextQuestion.addEventListener("click", /*function here*/);
//previousQuestion.addEventListener("click", /*function here*/);

var questionTwo = function() {
    if (userAnswers === questionTwoAnswers[4]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionTwoAnswers[4]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

var questionThree = function() {
    if (userAnswers === questionThreeAnswers[3]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionThreeAnswers[3]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

var questionFour = function() {
    if (userAnswers === questionFourAnswers[1]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionFourAnswers[1]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

var questionFive = function() {
    if (userAnswers === questionFiveAnswers[1]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionFiveAnswers[1]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

//todo Create for loop for right answers and wrong answers? make it so every question is 20%
/*for (var i=0; i < correctAnswers.length; i++) {
    var quizScore = somethingHere.prompt?(correctAnswers[i].prompt?);
    if (quizScore == correctAnswers[i].alert?) {
        correctAnswers++;
        window.alert("you got " + correctAnswers + " right.")
    } else if (quizScore = somethingHere.prompt?)(wrongAnswers[i].prompt?);
        wrongAnswers++;
        window.alert("you got " + wrongAnswers + " wrong.")
}*/

//todo add this to every question? or add a i-- ??
/*var quizTimer = 

function countDown() {
 var quizTimer = setTimeout(60000);
 quizTimer.clearInterval(0)
    
}

function wrongAnswerTimer() {
startTimer() current count -5000 milliseconds
take 5 seconds from timer every time user clicks wrong answer
}*/
