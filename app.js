var bc = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// var me = new bc("front", 'back');
// console.log(me)

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);


