// class Score {
//     constructor(){
//         this.score = score; 
//     }
// }

const rl = require("readline");
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const steps = {
    start: {
      message: "Do you want to find out your personality today? yes/no",
      yes: "firstQuestion",
      no: () => {
        console.log("press 'esc' to exit the test.");
        readline.close();
      },
    },
    end: {
      message: "Do you want to play again? yes/no",
      yes: "start",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    firstQuestion: {
        message: "Are you an introvert? yes/no",
        introvert: "home",
        extrovert: "partyAnimal"
    },
    home: {
      message: "Do you enjoy being with more than 20 people? yes/no",
      no: "numberOfPeople"
      },
    numberOfPeople: {
        message: "What number of people do you feel comfortable surrounding yourself with? 0 - infinity",
        infinity: () => {
            console.log(`You're a filthy party animal!`);
            readline.close();
        }, 
    }
};
    // put more steps here


  let currentStep = "start";

  function logStep() {
    const step = steps[currentStep];

    if (step) {
      readline.question(`${step.message || ""} `, (input) => {
        handleAnswer(input);
      });
    }
  }

  function handleAnswer(answer) {
    let step;

    if (answer === "yes") {
      step = steps[currentStep].yes;
    } else if (isNumber(answer) < 10) {
      console.log(`${answer} indicates you're an introvert!`);
    } else if ( isNumber(answer) >= 10 && isNumber(answer) < 25){
        console.log(`${answer} indicates you're an ambivert!`)
    } else if ( isNumber(answer) >= 25 && isNumber(answer) < infinity){
        console.log(`${answer}?!? You sure you're an introvert?`)
        // jumps to extrovert question
    }
    else {
      step = steps[currentStep].no;
    }

    if (typeof step === "function") {
      step();
      return;
    }

    if (typeof step === "string") {
      currentStep = step;
    } else {
      currentStep = "end";
    }
    logStep();
  }

  function isNumber(num) {
    const value = parseInt(num);
    return !isNaN(value);
  }

  console.clear();
  logStep();
}

startGame();