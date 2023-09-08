
let question = document.getElementById("q1");
let answer1 = document.getElementById("ans1");
let answer2 = document.getElementById("ans2");
let answer3 = document.getElementById("ans3");
let answer4 = document.getElementById("ans4");
let score1 = 0;


const questione = [
    {
        que: 'Q 1 - ……………………. was the first person who travelled the South Pole.',
        sol1: "Tenzing Norgay",
        sol2: "Edmund Hillary",
        sol3: "Rober Peary",
        sol4: "Ronald Amundsen",
        correct: 3// Index of the correct answer (0-based)
    },
    {
        que: 'Q 2 - Which among the following is also popular as ‘Earth’s Twin?’',
        sol1: "Mercury",
        sol2: "Venus",
        sol3: "Mars",
        sol4: "Neptune",
        correct: 1
    },
    {
        que: 'Q 3 - Who among the following was the Last Governor of Bengal?’',
        sol1: "Lord Clive",
        sol2: "Warren Hastings",
        sol3: "Lord William Bentic",
        sol4: "Lord Canning",
        correct: 2
    },
    {
        que: 'Q 4 - The book, ‘The World as I See it,’ was written by …',
        sol1: "Adam Smith",
        sol2: "R. K. Narayanan",
        sol3: "Albert Einstein",
        sol4: "A. L. Basham",
        correct: 2,
    },
    {que: 'Q 5 - Which among the following cities is known for the aircraft industry?',
    sol1: "Bengaluru",
    sol2: "Bhilai",
    sol3: "Sindri",
    sol4: "Titagarh",
    correct: 1,

    },
    {
        que:'Q 6 - Panama Canal connects …',
        sol1:"Atlantic Ocean and Mediterranean Sea",
        sol2:"Atlantic Ocean and Pacific Ocean",
        sol3:"Atlantic Ocean and Indian Ocean",
        sol4:"Pacific Ocean and Indian Ocean",
        correct:2
    },
    {
        que:' Q 7 - As per the Census 2011, what is the life expectancy rate for female in India? Canal connects …',
        sol1:"65",
        sol2:"68",
        sol3:"82",
        sol4:"60",
        correct:2,
    },
        
    {   que:'Q 8 - The playing area of Baseball is known as …',
        sol1:"Arena",
        sol2:" Diamond",
        sol3:"Ring",
        sol4:"Pool",
        correct:2,
    }
];

let questionindex = 0

const interval = setInterval(countdown, 1000);

function countdown() {
const countElement = document.getElementById("counter");
let count1 = parseInt(countElement.textContent);

if (count1 === 0 || questionindex === questione.length) {
clearInterval(interval);
if (questionindex === questione.length) {
    // Quiz has ended, you can handle it here
    console.log("Quiz has ended");
} else {
    showAlertBox();
}
} else {
count1--;
countElement.textContent = count1;
}
}

function showAlertBox() {
    document.getElementById("alertBox").style.display = "block";
}

// Function to close the custom alert box
function closeAlertBox() {
    document.getElementById("alertBox").style.display = "none";
}
function startQuiz() {
    display(questionindex);
    countdown();
}
function endQuiz(){
    stop
}

function next() {
    question.innerText = questione[questionindex].que;
    answer1.textContent = questione[questionindex].sol1;
    answer2.textContent = questione[questionindex].sol2;
    answer3.textContent = questione[questionindex].sol3;
    answer4.textContent = questione[questionindex].sol4;
    questionindex++;
}
function Previous() {
    questionindex--;
    question.innerText = questione[questionindex].que;
    answer1.textContent = questione[questionindex].sol1;
    answer2.textContent = questione[questionindex].sol2;
    answer3.textContent = questione[questionindex].sol3;
    answer4.textContent = questione[questionindex].sol4;
}

function checkAnswer(x) {
    const correctIndex = questione[questionindex].correct;
    if (x=== correctIndex) {
        correcttbox();
        score1++;
    } else {
        wrongtbox();
    }

    // Move to the next question
    questionindex++;
    if (questionindex < questione.length) {
        display();
    } else {

        // You can add code to handle the end of the quiz here
        // For example, show a final score or a message.
        console.log("Final score: " + score1);
        document.getElementById("score").textContent=score1


    }
}

function display() {
    question.textContent = questione[questionindex].que;
    answer1.textContent = questione[questionindex].sol1;
    answer2.textContent = questione[questionindex].sol2;
    answer3.textContent = questione[questionindex].sol3;
    answer4.textContent = questione[questionindex].sol4;
}
window.onload = startQuiz;
function Submit(){
    document.getElementById("submitbox").style.display = "block";
    if(score1===0)
    {
document.getElementById("msg").innerHTML="Kya kar raha hai tu ???"
document.getElementById("img12").src="./assets/image/bhai.gif"

    }
    else if((score1===1)||(score1<=7))
    {
        document.getElementById("msg").innerHTML="Excellent Work"
        document.getElementById("img12").src="./assets/image/7H7j.gif"
        console.log(score1)

    }
    else if(score1===questione.length+1){
        document.getElementById("msg").innerHTML ="congratulations you gave answers to the all questions"
        document.getElementById("img12").src="./assets/image/S5q.gif"
        console.log(score1)
        console.log(questione.length+1)
    }
}

// Function to close the custom alert box
function closebox() {
    document.getElementById("submitbox").style.display = "none";
    document.getElementById("ansbox").style.display="none"
}
function correcttbox()
{
    document.getElementById("ansbox").style.display = "block";

    document.getElementById("p12").innerHTML="Correct Answer!"
    document.getElementById("img21").src="./assets/image/check-correct.gif"
}
function wrongtbox()
{
    document.getElementById("ansbox").style.display = "block";
    document.getElementById("p12").innerHTML="Wrong Answer!"
    document.getElementById("img21").src="./assets/image/Wrong.gif"
}

