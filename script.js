//what question # are they at?
var questionNumber = 0;
//answered correctly
var correct = 0;
//answered incorrectly
var incorrect = 0;
//questions
var questions = [
    {
        question: "Which of the following is not a JavaScript data type?",
        A: "undefined",
        B: "boolean",
        C: "number",
        D: "float",
        Answer: "D",
    },
    {
        question: "Inside which HTML element is the JavaScript put?",
        A: "<head>",
        B: "<title>",
        C: "<script>",
        D: "<style>",
        Answer: "C",
    },
    {
        question: "What type of language is Javascript?",
        A: "Markup",
        B: "Scripting",
        C: "Programming",
        D: "All of the above.",
        Answer: "B",
    },
    {
        question: "What is the term for text that automatically continues from one line to the next?",
        A: "Word flowing",
        B: "Word binding",
        C: "Word wrapping",
        D: "Word processing",
        Answer: "C",
    },
    {
        question: "What is the original name of JavaScript?",
        A: "Java",
        B: "Mocha",
        C: "TScript",
        D: "JScript",
        Answer: "B",
    },
    {
        question: "Which of the following is used to comment in JavaScript?",
        A: "/*",
        B: "/?",
        C: "//",
        D: "None of the above.",
        Answer: "C",
    },
    {
        question: "True of false, null is an object.",
        A: "True",
        B: "False",
        Answer: "A",
    }
];
var test, test_progress, choice, choices, choiceA, choiceB, chocieC, choiceD;
//function to get elements
function get(x) {
    return document.getElementById(x);
}
//function to display question
function getQuestion () {
    test = get ("test");
    if (questionNumber >= questions.length) {
        test.innerHTML = "<h2>You answered " + correct + " questions correct.</h2>";
        get ("test_progress").innerHTML = "Quiz Completed"; 
        questionNumber = 0;
        correct = 0;
        return false;
    }
    get ("test_progress").innerHTML = "Question " + (questionNumber+1) + " of " + questions.length;

    question = questions[questionNumber].question;
    choiceA = questions[questionNumber].A;
    choiceB = questions[questionNumber].B;
    choiceC = questions[questionNumber].C;
    choiceD = questions[questionNumber].D;
//display question and answer options
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+choiceA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+choiceB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+choiceC+"</label><br><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+choiceD+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
//function to get correct answer
function getAnswer() {
    choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[questionNumber].answer){
    correct++;
  }
  questionNumber++;
  //on to next question
  getQuestion();
}
window.addEventListener("load", getQuestion);


