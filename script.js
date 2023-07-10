//selecting the start button on html file
var startBtn = document.querySelector("#start");

//empty arrays based on user input
var userAnswers = [""];

// questions and answers written as an array of objects
var quizContents = [ 
    {
        question: "What does a .querySelector do?",
        choices: [ "Selects a question on the page", "Selects a specific element of an html file", "Selects every question on an html file", "Selects a specific element of a Javascript file"],
        answer: 1
    },
    {  
        question: "What method would you use to mix around the output of contents in an array?",
        choices: ["Math.mix", "randomInt", "randomArray", "Math.random"],
        answer: 3
    },
    {
        question: "What is a DOM?",
        choices: ["Document Object Module", "Document Options & Materials", "Document Object Model", "Document Orientation Mender"],
        answer: 2
    },
    {
        question: "What does an .addEventListener do?",
        choices: ["Runs a function or specified change to the page whenever an event is triggered by the user", "User's computer microphone listens for a command to run a function", "Runs a function every time a user listens to music on their computer", "Runs a function every time a user adds an event to their dateCalender"],
        answer: 0
    },
    {
        question: "What method would you use to change the appearance of an element without using the css file?",
        choices: [".setAttribute", ".changeElement", "setElement", ".changeAttribute"],
        answer: 0
    }
];

var allQuestions = [quizContents[0].question, quizContents[1].question, quizContents[2].question, quizContents[3].question, quizContents[4].question];
var correctAnswers = [quizContents[0].answer, quizContents[1].answer, quizContents[2].answer, quizContents[3].answer, quizContents[4].answer];
//var score = correctAnswers

var timer = document.querySelector(".timer")
var secondsLeft = 60;

function countDown() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        } else if (userAnswers !== correctAnswers[""])
        {
            secondsLeft = secondsLeft -5;
        }
    }, 1000);
}

var renderQuestions = function() {
    var replaceContent = function() {
        var oldContent = document.getElementsByClassName(".content2");
        var newContent = document.createElement(allQuestions[0], "h2");
        oldContent.replaceChildren(newContent, oldContent)
        newContent.textContent = allQuestions[i];
        document.appendChild(newContent);
    }
    replaceContent();
        //replaceContent = document.replaceChildren(".content2", "h2")
        //replaceContent.appendChild(allQuestions[0])
    //currentQuestion.textContent = allQuestions[0]
    //var currentAnswers = 
    countDown();
};

/*var renderQuestions = function() {
    var questionBox = document.querySelector("#questions");
    questionBox.textContent = quizContents[0].question;
    var optionOne = document.querySelector("#answers1");
    optionOne.textContent = quizContents[0].choices[0];
    var optionTwo = document.querySelector("#answers2");
    optionTwo.textContent = quizContents[0].choices[1];
    var optionThree = document.querySelector("#answers3");
    optionThree.textContent = quizContents[0].choices[2];
    var optionFour = document.querySelector("#answers4");
    optionFour.textContent = quizContents[0].choices[3];
    countDown();
    for (var i = 0; i < quizContents.length; i++) {
        //var userScore = quizContents[i];
        if (userAnswers === correctAnswers[i]) {
            //add a function to run next question
            //add local storage variable here
        } else if (userAnswers !== correctAnswers[0]) {
        }   //don't add to local storage
    }
};*/

startBtn.addEventListener("click", renderQuestions);


// var renderQuestions = function() {
// var clearContainer = document.replaceChildren(".content2")
// clearContainer.createElement("h2" + clearContainer.textContent + allQuestions[0].question);
// };


/*var secondQ = function() {
    var questionBox = document.querySelector("#questions");
    questionBox.textContent = allQuestions[1].question;
    var optionOne = document.querySelector("#answers1");
    optionOne.textContent = allQuestions[1].choices[0];
    var optionTwo = document.querySelector("#answers2");
    optionTwo.textContent = allQuestions[1].choices[1];
    var optionThree = document.querySelector("#answers3");
    optionThree.textContent = allQuestions[1].choices[2];
    var optionFour = document.querySelector("#answers4");
    optionFour.textContent = allQuestions[1].choices[3];
    //start timer function
}

var thirdQ = function() {
    var questionBox = document.querySelector("#questions");
    questionBox.textContent = allQuestions[2].question;
    var optionOne = document.querySelector("#answers1");
    optionOne.textContent = allQuestions[2].choices[0];
    var optionTwo = document.querySelector("#answers2");
    optionTwo.textContent = allQuestions[2].choices[1];
    var optionThree = document.querySelector("#answers3");
    optionThree.textContent = allQuestions[2].choices[2];
    var optionFour = document.querySelector("#answers4");
    optionFour.textContent = allQuestions[2].choices[3];
    //start timer function
}

var fourthQ = function() {
    var questionBox = document.querySelector("#questions");
    questionBox.textContent = allQuestions[3].question;
    var optionOne = document.querySelector("#answers1");
    optionOne.textContent = allQuestions[3].choices[0];
    var optionTwo = document.querySelector("#answers2");
    optionTwo.textContent = allQuestions[3].choices[1];
    var optionThree = document.querySelector("#answers3");
    optionThree.textContent = allQuestions[3].choices[2];
    var optionFour = document.querySelector("#answers4");
    optionFour.textContent = allQuestions[3].choices[3];
    //start timer function
}

var fifthQ = function() {
    var questionBox = document.querySelector("#questions");
    questionBox.textContent = allQuestions[4].question;
    var optionOne = document.querySelector("#answers1");
    optionOne.textContent = allQuestions[4].choices[0];
    var optionTwo = document.querySelector("#answers2");
    optionTwo.textContent = allQuestions[4].choices[1];
    var optionThree = document.querySelector("#answers3");
    optionThree.textContent = allQuestions[4].choices[2];
    var optionFour = document.querySelector("#answers4");
    optionFour.textContent = allQuestions[4].choices[3];
    //start timer function
}

/*var h1Title = document.body.header.createElement("h1");
h1Title.textContent = "Web API Coding Quiz";
document.body.header.appendChild(h1Title);
h1Q1.textContent = allQuestions[0].Question1; */

//click event for firstQ function
/*var questionOne = function() {
    if (userAnswers === allQuestions[0].answer) {
        userAnswers = userAnswers.concat(//todo add to score)
    } else if (userAnswers !== allQuestions[0].answer) {
        userAnswers = userAnswers.concat(wrongAnswers)
        //wrongAnswerTimer() timeRemaining = timeRemaining - 5;
    }
}*/

// var questionArea = document.getElementsByClassName("content2");
// var answerArea = document.getElementsByClassName("btn");
// questionArea = document.replaceChildren("ul");

//nextQuestion.addEventListener("click", /*function here*/);
//previousQuestion.addEventListener("click", /*function here*/);

/*var questionTwo = function() {
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
