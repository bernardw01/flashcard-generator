/**
 * Created by bernardwilliams on 7/15/17.
 */

var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = '';
    this.fullText = '';
    this.rightAnswer = function () {
        var answer = false;
        if (this.text == this.cloze) {
            answer = true;
        }
        console.log("---- Your Results ----");
        console.log("You entered: " + this.text );
        console.log("The answer was: " + this.cloze );
        //console.log(this.text + " vs " + this.cloze);
        return answer;
    };
}

module.exports = ClozeCard;