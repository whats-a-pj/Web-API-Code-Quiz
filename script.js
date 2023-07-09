//selecting the start button on html file
var startBtn = document.querySelector("#start");
//var submitBtn = document.querySelector("#submit");
//var nextQuestion = document.querySelector("#next-question");
//var previousQuestion = document.querySelector("#previous-question");

//empty arrays based on user input
var userAnswers = [];
var correctAnswers = [];
var wrongAnswers = [];

//"What does a .querySelector do?":[2] or b is the correct answer
var questionOneAnswers = {
    Question1: "What does a .querySelector do?",
    a: "Selects a question on the page", 
    b: "Selects a specific element of an html file",
    c: "Selects every question on an html file",
    d: "Selects a specific element of a Javascript file"
};

var questionOne = function() {
    if (userAnswers === questionOneAnswers[2]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionOneAnswers[2]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

var firstQ = function() {
    var firstQContent = document.querySelector("#questions");
    firstQContent.textContent = questionOneAnswers[0].a, b, c, d;
    
    
}
startBtn.addEventListener("click", firstQ);


/*do i need to add the questionOneAnswers object/array to the event listener to get it to display 
when user clicks the start button? */
//startBtn.addEventListener("click", firstQ());


//nextQuestion.addEventListener("click", /*function here*/);
//previousQuestion.addEventListener("click", /*function here*/);

//"What method would you use to mix around the output of contents in an array?"[4] or d is the correct answer
var questionTwoAnswers = {
    "Question #2": "What method would you use to mix around the output of contents in an array?",
    "a": "Math.mix",
    "b": "randomInt",
    "c": "randomArray",
    "d": "Math.random"
};

var questionTwo = function() {
    if (userAnswers === questionTwoAnswers[4]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionTwoAnswers[4]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

//"What is a DOM?"[3] or c is the correct answer
var questionThreeAnswers = {
    "Question #3": "What is a DOM?",
    "a": "Document Object Module",
    "b": "Document Options & Materials",
    "c": "Document Object Model",
    "d": "Document Orientation Mender"
};

var questionThree = function() {
    if (userAnswers === questionThreeAnswers[3]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionThreeAnswers[3]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

//"What does an .addEventListener do?"[1] or a is the correct answer
var questionFourAnswers = {
    "Question #4": "What does an .addEventListener do?",
    "a": "Runs a function or specified change to the page whenever an event is triggered by the user",
    "b": "User's computer microphone listens for a command to run a function",
    "c": "Runs a function every time a user listens to music on their computer",
    "d": "Runs a function every time a user adds an event to their dateCalender"
};

var questionFour = function() {
    if (userAnswers === questionFourAnswers[1]) {
        userAnswers = userAnswers.concat(correctAnswers)
    } else if (userAnswers !== questionFourAnswers[1]) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer()
    }
}

//"What method would you use to change the appearance of an element without using the css file?"[1] or a is correct answer
var questionFiveAnswers = {
    "Question #5": "What method would you use to change the appearance of an element without using the css file?",
    "a": ".setAttribute",
    "b": ".changeElement",
    "c": "setElement",
    "d": ".changeAttribute"
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

//todo object with functions/methods inside it for questions instead of separate functions?
//const quizQuestions = {
/*var allQuestions = [
    {
        prompt: "What does a .querySelector do?",
        answer: ["a: Selects a question on the page", 
        "b: Selects a specific element of an html file",
        "c: Selects every question on an html file",
        "d: Selects a specific element of a Javascript file",[1]]
    }
]*/

//todo create an object with ALL questions and array the answers and [index] the correct one?
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
