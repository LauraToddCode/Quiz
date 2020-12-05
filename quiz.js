// BEATLES QUIZ

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let qusAnswered = 0;
let score = 0;

class Question {
    constructor(question, answerA, answerB, answerC, answerD, correctAnswer) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.correctAnswer = correctAnswer;
    }

    createAnswersArray(answerA, answerB, answerC, answerD) {
        let answersArray = [answerA, answerB, answerC, answerD];

        return answersArray;
    }

    writeQuestion(question, answerA, answerB, answerC, answerD) {
        $("#question").text(question);
        $("#answerA").text(answerA);
        $("#answerB").text(answerB);
        $("#answerC").text(answerC);
        $("#answerD").text(answerD);
    }
}

let question1 = new Question(
    "Where are the Beatles from?",
    "Liverpool",
    "Sheffield",
    "Manchester",
    "London",
    "Liverpool"
);

let question2 = new Question(
    "What is the first track on the Abbey Road album?",
    "Come Together",
    "Something",
    "Let It Be",
    "Golden Slumbers",
    "Come Together"
);

let question3 = new Question(
    "Who was the oldest of the Beatles?",
    "Ringo",
    "John",
    "Paul",
    "George",
    "Ringo"
);

let question4 = new Question(
    "What was the original title of 'Hey Jude'?",
    "Hey Jules",
    "Hey Dudes",
    "Stay Cool",
    "Hey Fella",
    "Hey Jules"
);

let question5 = new Question(
    "What was The Beatles first Official UK number 1 Single?",
    "From Me To You",
    "I Want To Hold Your Hand",
    "Twist And Shout",
    "A Hard Day's Night",
    "From Me To You"
);

let question6 = new Question(
    "On which street did Paul grow up?",
    "Forthlin Road",
    "Menlove Avenue",
    "Allerton Road",
    "Arnold Grove",
    "Forthlin Road"
);

let question7 = new Question(
    "Complete this John Lennon quote: 'For the people in the cheaper seats - clap your hands. And the rest of you, if you'd just...'",
    "Rattle your jewelry",
    "Throw your cash",
    "Wave your arms",
    "Leave",
    "Rattle your jewelry"
);

let question8 = new Question(
    "Which of these was the headquarters of Apple Corps?",
    "3 Savile Row",
    "2 Savile Row",
    "4 Savile Row",
    "2 Savile Road",
    "3 Savile Row"
);

let question9 = new Question(
    "When The Beatles travelled to India, what was the one essential Ringo insisted on taking with him?",
    "Heinz Baked Beans",
    "Jelly Babies",
    "His Own Pillow",
    "A Hairdryer",
    "Heinz Baked Beans"
);

let question10 = new Question(
    "Who was responsible for the famous Beatles haircut?",
    "Astrid Kirchherr",
    "Klaus Voorman",
    "Cynthia Lennon",
    "Brian Epstein",
    "Astrid Kirchherr"
);

let question11 = new Question(
    "Paul McCartney's brother Michael was a member of the group Scaffold. What stage name did he adopt?",
    "Mike McGear",
    "Mike McClure",
    "Mike McCarthy",
    "Mike McGann",
    "Mike McGear"
);

let question12 = new Question(
    "Which of these artists or bands did The Beatles support on tour?",
    "Helen Shapiro",
    "The Shadows",
    "Gerry and the Pacemakers",
    "Sandie Shaw",
    "Helen Shapiro"
);

let question13 = new Question(
    "Who took the photo for the Abbey Road album cover?",
    "Iain Macmillan",
    "Art Kane",
    "Curt Gunther",
    "Robert Whitaker",
    "Iain Macmillan"
);

let question14 = new Question(
    "Which of these people do not appear on the Sgt. Pepper album cover?",
    "Cassius Clay",
    "Fred Astaire",
    "Marlon Brando",
    "Oliver Hardy",
    "Cassius Clay"
);

let question15 = new Question(
    "When was the The Beatles first live appearance on the Ed Sullivan Show?",
    "February 1964",
    "September 1963",
    "June 1964",
    "September 1964",
    "February 1964"
);

let question16 = new Question(
    "Which was the only song on A Hard Day's Night in which George was the lead vocalist?",
    "I'm Happy Just To Dance With You",
    "If I Fell",
    "Everybody's Trying To Be My Baby",
    "I Need You",
    "I'm Happy Just To Dance With You"
);

let question17 = new Question(
    "What name was the Aunt who raised John Lennon known by?",
    "Mimi",
    "Maggie",
    "Martha",
    "Mae",
    "Mimi"
);

let question18 = new Question(
    "What was the final album that The Beatles recorded?",
    "Abbey Road",
    "Let It Be",
    "The White Album",
    "Sgt Pepper's Lonely Hearts Club Band",
    "Abbey Road"
);

let question19 = new Question(
    "The Queen presented the members of the Beatles with which award in October 1965?",
    "MBE",
    "OBE",
    "CBE",
    "CVO",
    "MBE"
);

let question20 = new Question(
    "What was the name of John Lennon’s band, joined by Paul McCartney in October 1957?",
    "The Quarrymen",
    "The Diddymen",
    "The Liverboys",
    "The Quatermass",
    "The Quarrymen"
);

let question21 = new Question(
    "Where did the idea for the song 'Lucy In The Sky With Diamonds' come from?",
    "A drawing by Julian Lennon",
    "A dream the John had",
    "A Rene Magritte painting",
    "An ancient carving seen in the British Museum",
    "A drawing by Julian Lennon"
);

let question22 = new Question(
    "What was the Beatles 4th studio album to be released?",
    "Beatles for Sale",
    "A Hard Day's Night",
    "Help",
    "With the Beatles",
    "Beatles for Sale"
);

let question23 = new Question(
    "What is the final track on the 'Let It Be' album?",
    "Get Back",
    "The Long and Winding Road",
    "Let It Be",
    "Across the Universe",
    "Get Back"
);

let question24 = new Question(
    "In which year did Brian Epstein become The Beatles manager?",
    "1962",
    "1961",
    "1963",
    "1964",
    "1962"
);

let question25 = new Question(
    "What was the first single to be release by The Beatles?",
    "Love Me Do",
    "Please Please Me",
    "From Me To You",
    "She Loves You",
    "Love Me Do"
);


let questionsArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25];

$(document).ready(function () {
    shuffle(questionsArray);

    let chosenQuestion = questionsArray[0];

    let answers = chosenQuestion.createAnswersArray(
        chosenQuestion.answerA,
        chosenQuestion.answerB,
        chosenQuestion.answerC,
        chosenQuestion.answerD
    );

    shuffle(answers);

    chosenQuestion.answerA = answers[0];
    chosenQuestion.answerB = answers[1];
    chosenQuestion.answerC = answers[2];
    chosenQuestion.answerD = answers[3];

    chosenQuestion.writeQuestion(
        chosenQuestion.question,
        chosenQuestion.answerA,
        chosenQuestion.answerB,
        chosenQuestion.answerC,
        chosenQuestion.answerD
    );
});
//When question chosen, pop it from the object. Happens when user clicks next?

let noOfQuestionsAnswered = 0;

$("#nextBtn").on("click", function () {
    
    noOfQuestionsAnswered += 1;

    if(noOfQuestionsAnswered == 19){
        $("#nextBtn").text("Finish");
    }


    if(noOfQuestionsAnswered == 20){
        $("#quizModal").css({
            "opacity": "1",
            "pointer-events": "auto"
        });

        $("#quizScore").text("You scored " + score + "/20");

        if (score > 14) {
            $("#quizScoreBand").text("You're the 5th Beatle!");
            $("#quizScoreComment").text("*Along with Pete Best, George Martin, Brian Epstein, Derek Taylor, Neil Aspinall, Stuart Sutcliffe, Billy Preston, Eric Clapton...and others")
        }
        else if (score > 9 && score < 15) {
            $("#quizScoreBand").text("Not bad. You know your Glass Onions");
        }
        else if (score > 4 && score < 10) {
            $("#quizScoreBand").text("You need to Get Back to school");
        }
        else if (score < 5) {
            $("#quizScoreBand").text("Beatles who?");
        }
    }
    else {
        $(".answers").css({
        "background-color": "#a8d9f8"
        })
        .removeClass("correctAnswerFlash");

        $(".answers").css({
            "pointer-events": "auto"
        });

        $("#nextBtn").css({
            "pointer-events": "none"
        });

        $("#rightOrWrong").text(" ");

        delete questionsArray[0];

        shuffle(questionsArray);

        let chosenQuestion = questionsArray[0];

        let answers = chosenQuestion.createAnswersArray(
            chosenQuestion.answerA,
            chosenQuestion.answerB,
            chosenQuestion.answerC,
            chosenQuestion.answerD
        );

        shuffle(answers);

        chosenQuestion.answerA = answers[0];
        chosenQuestion.answerB = answers[1];
        chosenQuestion.answerC = answers[2];
        chosenQuestion.answerD = answers[3];

        chosenQuestion.writeQuestion(
            chosenQuestion.question,
            chosenQuestion.answerA,
            chosenQuestion.answerB,
            chosenQuestion.answerC,
            chosenQuestion.answerD
        );

    }
    
});

$(".answers").on("mouseover", function () {
    let currentBackgroundColor = $(this).css("background-color");
    if (currentBackgroundColor == "rgb(168, 217, 248)") {
        $(this).css({
        "background-color": "#6AB8EE"
        });
    }
});

$(".answers").on("mouseout", function () {
    let currentBackgroundColor = $(this).css("background-color");
    if (currentBackgroundColor == "rgb(106, 184, 238)") {
        $(this).css({
        "background-color": "#a8d9f8"
        });
    }
});

$(".answers").on("click", function () {
    $(this).css({
        "background-color": "#FEDE00"
    });

    qusAnswered += 1;

    $("#qusAnswered").text(qusAnswered);

    let chosenQuestion = questionsArray[0];
    let correctAnswer = chosenQuestion.correctAnswer;

    $(".answers")
        .children()
        .each(function () {
        let allAnswers = $(this).text();
        if (allAnswers == correctAnswer) {
            $(this).parent().toggleClass("correctAnswerFlash");
        }
        });

    let chosenAnswer = $(this).children().text();

    console.log(`the correct answer is ${correctAnswer}`);
    console.log(`the chosen answer is ${chosenAnswer}`);

    if (chosenAnswer == correctAnswer) {
        score += 1;
        $("#score").text(score);

        $("#rightOrWrong").text("CORRECT!");
    }
    else {
        $("#rightOrWrong").text("WRONG!");
    }

    $(".answers").css({
        "pointer-events": "none"
    });

    $("#nextBtn").css({
        "pointer-events": "auto"
    });
});

$("#resetBtn").on("click", function(){
    questionsArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25];

    $("#quizModal").css({
        "opacity": "0",
        "pointer-events": "none"
    });

    $("#nextBtn").text("Next");

    noOfQuestionsAnswered = 0;
    score = 0;
    qusAnswered = 0;

    $("#qusAnswered").text(0);
    $("#score").text(0);

    $(".answers").css({
        "background-color": "#a8d9f8"
    })
    .removeClass("correctAnswerFlash");

    $(".answers").css({
        "pointer-events": "auto"
    });

    $("#nextBtn").css({
        "pointer-events": "none"
    });

    $("#rightOrWrong").text(" ");

    shuffle(questionsArray);

    let chosenQuestion = questionsArray[0];

    let answers = chosenQuestion.createAnswersArray(
        chosenQuestion.answerA,
        chosenQuestion.answerB,
        chosenQuestion.answerC,
        chosenQuestion.answerD
    );

    shuffle(answers);

    chosenQuestion.answerA = answers[0];
    chosenQuestion.answerB = answers[1];
    chosenQuestion.answerC = answers[2];
    chosenQuestion.answerD = answers[3];

    chosenQuestion.writeQuestion(
        chosenQuestion.question,
        chosenQuestion.answerA,
        chosenQuestion.answerB,
        chosenQuestion.answerC,
        chosenQuestion.answerD
    );
})

