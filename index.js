var readlineSync = require("readline-sync");

var q = readlineSync.question("Please Enter Your Name : ");
console.log("Welcome " + q + " ! Let's test your knowledge on GAME OF THRONES");
console.log();
var score = 0;

var highscores = [
  {
    name: "Ashish",
    score: 5
  },
  {
    name: "Kalyan",
    score: 3
  }
]

var questionnaire = [
  {
    q: `What is the name of Jon Snow’s sword ?
        [a] Oathkeeper
        [b] Longclaw
        [c] Dark Sister
        [d] Lightbringer
        `, a: "b"
  },

  {
    q: `What is the sigil of House Stark ? 
        [a] direwolf
        [b] lion
        [c] 3 headed dragon
        [d] falcon
        `, a: "a"
  },
  {
    q: `What does Valar Morghulis mean ?
        [a] All men must serve
        [b] All men must cry
        [c] All men must die
        [d] Not Today
        `, a: "c"
  },
  {
    q: `What is Jon Snow's real name ?
        [a] Jon Stark
        [b] Aegon Targaryen
        [c] Jon Bolton
        [d] Aemond Targaryen
        `, a: "b"
  },
  {
    q: `What do we say to the Lord of Death ? 
        [a] O Sthree Repu Raa
        [b] We bow
        [c] Come Take me
        [d] Not Today
        `, a: "d"
  },
  {
    q: `Which clan did King Robert defeat to get the iron throne ?
        [a] Greyjoy
        [b] Lannister
        [c] Targaryen
        [d] Stark
        `, a: "c"
  },
  {
    q: `Who is called as the Young Wolf ?
        [a] Brandon Stark
        [b] Jon Snow
        [c] Robb Stark
        [d] Sansa Stark
        `, a: "c"
  },
  {
    q: `Who is called as Khaleesi ?
        [a] Sansa Stark
        [b] Arya Stark
        [c] Cersei Lannister
        [d] Daenerys Targaryen
        `, a: "d"
  },
  {
    q: `Who is also called as the imp ?
        [a] Tyrion Lannister
        [b] Ser Davos
        [c] Ser Jorah Marmont
        [d] Gregor Clegane
        `, a: "a"
  },
  {
    q: `Who is Kingslayer ?
        [a] Tyrion Lannister
        [b] Samwell Tarly
        [c] Jaime Lannister
        [d] Jon Arryn
        `, a: "c"
  }
]

function checc(question, answer) {
  console.log(question)
  var userAnswer = readlineSync.question("Your Option Here : ");
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log("Right Answer !");
  }
  else {
    console.log("You know Nothing ! Jon Snow");
  }
  console.log("Current Score : " + score);
  console.log();
}
function game() {
  for (var i = 0; i < questionnaire.length; i++) {
    checc(questionnaire[i].q, questionnaire[i].a);
  }
}

game();

console.log("Your Final Score is : " + score);
console.log("Thanks for playing !")
console.log();
console.log("Also check out the high scores !")
console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
console.log();


for (var i = 0; i < highscores.length; i++) {
  console.log("At the " + (i + 1) + " place :");
  console.log(highscores[i].name);
  console.log(highscores[i].score);
  console.log("--------------");
}

