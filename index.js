/**
 * Created by bernardwilliams on 7/15/17.
 */
var ClozeCard = require('./ClozeCard');
var questions = require('./questions');
var inquirer = require('inquirer');
var logo = require('./logo');
var cards = [];
var cardCount = questions.length;
var countRight = 0;
var count = 0;

//Load the ClozeCards
for (var i = 0; i < questions.length; i++) {

    var obj = new ClozeCard;
    obj.fullText = questions[i].fulltext;
    obj.cloze = questions[i].missingText;
    obj.partial = questions[i].partialText;
    cards.push(obj);
}

//console.log(JSON.stringify(cards, null, 2));

var askQuestion = function () {
    // if statement to ensure that our questions are only asked five times
    if (count < cardCount) {
        console.log("---------------------");
        console.log("Here is question " + (count + 1) + " of " + cards.length );
        console.log("---------------------");
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "text",
                message: cards[count].partial
            }
        ]).then(function (answers) {
            cards[count].text = answers.text;
            //console.log(cards[count].rightAnswer());
            if (cards[count].rightAnswer() === true) {
                countRight ++;
                console.log("You answered " + countRight + " question(s) right");
            } else {
                console.log("You answered this question wrong");
            }
            count++;
            askQuestion();
        });
        // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
    }
    else {
        console.log("---------------------");
        console.log("----- Game Over -----");
        console.log("---------------------");
        console.log("You have completed all of the questions");
        console.log("You answered " + countRight + " of " + cards.length + " question(s) right");
    }
}

//console.log(logo);
console.log("");
askQuestion();