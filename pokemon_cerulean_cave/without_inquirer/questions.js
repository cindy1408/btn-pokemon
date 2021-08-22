'use strict'
const Health = require('../class.js')
const readline = require('readline');
const { resolve } = require('path');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pokemonHealth = new Health();

function checkHP(){
    if(pokemonHealth.healthPoints == 0){
        rl.close();
    } else {
        resolve();
    }
}

const question0 = () => {
    return new Promise ((resolve, reject) => {      
        rl.question('\nWelcome to Pokemon Cerulean Cave! Would you like to enter?\nyes/no\n', (userInput) => {
            if(userInput.toLowerCase().trim() === 'yes'){
                resolve()
                } else if (userInput.toLowerCase().trim() === 'no'){
                console.log(`\nNo problem! See you soon!`)
                  rl.close();
            } else {
                question0();
            }
        })
    })
}


const selectLevel = () => {
    return new Promise ((resolve, reject) => {
        rl.question(`Please select your desired level: easy, intermediate, expert\n`, (userInput) => {
            if(userInput.toLowerCase().trim() == 'easy'){
                pokemonHealth.maxHealth = 100; 
                pokemonHealth.numHealthPotions = 5; 
                pokemonHealth.probability = 60; 
                console.log(`You've selected EASY`);
                resolve();
            } else if (userInput.toLowerCase().trim() == 'intermediate'){
                pokemonHealth.maxHealth = 60; 
                pokemonHealth.numHealthPotions = 3; 
                pokemonHealth.probability = 30; 
                console.log(`You've selected INTERMEDIATE`);
                resolve();
            } else if (userInput.toLowerCase().trim() == 'expert'){
                pokemonHealth.maxHealth = 40; 
                pokemonHealth.numHealthPotions = 2;
                pokemonHealth.probability = 20; 
                console.log(`You've selected EXPERT`);
                resolve();
            } else {
                selectLevel();
            }
        })
    })
}


const question1 = () => {
    return new Promise ((resolve, reject) => {      
        rl.question('\nWhich pokemon do you want as your buddy? chose Pikachu, Charmander, Bulbasaur.\n', (userInput) => {
            let input = userInput.toLowerCase().trim();
            if( (input == 'pikachu') || (input == 'charmander' )|| (input == 'bulbasaur')) {
                pokemonHealth.name = userInput.toUpperCase();
                console.log(`\nYou enter the cave with your buddy ${pokemonHealth.name} and are surrounded by darkness. \n${pokemonHealth.name} is currently at ${pokemonHealth.healthPoints}HP and you have ${pokemonHealth.numHealthPotions} Health Potion, each heals 20HP!`)
                resolve();
            } else {
                console.log(`Please pick one of the 3 starters provided`);
                question1();
            }
        })
    })
}

const question2 = () => {
    return new Promise ((resolve, reject) => {
        rl.question('\nShould you walk left or right?\n', (userInput) => {
            if(userInput.toLowerCase().trim() === 'right'){
                console.log(`\nYou begin walking right. A wild Growlithe attacks!\n`)
                resolve();
            } else if(userInput.toLowerCase().trim() == 'left') {
                console.log(`\nYou stumble over a steep ledge and plummet to your death. \n${pokemonHealth.name} fell to ${pokemonHealth.deductingPoints(pokemonHealth.healthPoints)}HP\n`);
                rl.close();
            } else {
                question2();
            }
          
        })
    })
}

const question3 = () => {
    return new Promise ((resolve, reject) => {
        rl.question('Do you want to run or attack?\n', (userInput) => {
            if(userInput.toLowerCase().trim() === 'attack'){
                pokemonHealth.healthPoints = pokemonHealth.deductingPoints(10);
                console.log(`\nGrowlithe used Fire Spin! \n${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP\n${pokemonHealth.name} used Thunderbolt! \nGrowlithe fainted\n`)
                rl.question(`\nDo you want to use your health potion?\nyes/no\n`, (userInput) => {
                    if(userInput.toLowerCase().trim() == 'yes'){
                        pokemonHealth.healthPoints = pokemonHealth.healthPotions();
                        console.log(`You have used 1 health potion. You currently have ${pokemonHealth.minusHealthPotions()} health potion left.\n${pokemonHealth.name} is now recovered to ${pokemonHealth.healthPoints}HP!`);
                        resolve();
                    } else if (userInput.toLowerCase().trim() == 'no') {
                        console.log(`You chose not to use any health potion.\n ${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP\n`);
                        resolve()
                    } else {
                        question3();
                    }
                })
            } else if( userInput.toLowerCase().trim() == 'run' ) {
                console.log(`\nYou caught on fire before getting away! ${pokemonHealth.name}'s health fell to: ${pokemonHealth.deductingPoints(pokemonHealth.healthPoints)}HP and fainted\n`);
                rl.close();
            } else {
                question3();
            }
          
        })
    })
}

const question4 = () => {
    return new Promise ((resolve, reject) => {
        rl.question('\nYou continue walking and stumble upon a ladder\nDo you want to climb or continue straight?\nclimb or straight\n', (userInput) => {
            if(userInput.toLowerCase().trim() == 'climb'){
                console.log(`\nYou begin climbing...\n`)
                resolve()
            } else if (userInput.toLowerCase().trim() == 'straight') {
                rl.question(`\nYou walk forward and stumble into Snorlax's 'dining hall'.\nDo you play the PokeFlute or throw a golden raspberry?\nplay or throw\n`, (userInput) => {
                    if(userInput.toLowerCase().trim() == 'play'){
                        console.log(`Snorlax fell asleep and you walk back to the ladder to begin climbing\n`);
                        resolve()
                    } else if ( userInput.toLowerCase().trim() == 'throw' ) {
                        console.log(`Snorlax began eating happily, you go back to the ladder and begin climbing\n`);
                        resolve()
                    } else {
                        question4()
                    }
                });
            }
          
        })
    })
}

const question5 = () => {
    return new Promise ((resolve, reject) => {
        rl.question('As you reach the top, the ground starts shaking!\n... you see a bright light in the distance...\nDo you: turnback or approach?\n', (userInput) => {
            if(userInput.toLowerCase().trim() === 'approach' ){
                console.log(`\nYou approach the light and the legendary Cresselia appears!\n`)
                resolve()
            } else if ( userInput.toLowerCase().trim() == 'turnback' ){
                console.log(`In your haste, you lose your footing on the ladder and bump into Beedrill's hive on the way down.\nAn angry swarm of Beedrills stung you and ${pokemonHealth.name} to death!\n${pokemonHealth.name}'s fell to ${pokemonHealth.deductingPoints(pokemonHealth.healthPoints)}HP\n`);
                resolve()
                rl.close();
            } else {
                question5();
            }
          
        })
    })
}

const question6 = () => {
    return new Promise ((resolve, reject) => {
        rl.question('\nCresselia appears badly wounded.\nDo you attack or heal?\n', (userInput) => {
            if(userInput.toLowerCase().trim() === 'attack' ){
                pokemonHealth.healthPoints = pokemonHealth.deductingPoints(20);
                console.log(`\nCresselia used Struggle but missed!\n${pokemonHealth.name} used Tackle!\nCresselia fainted and ${pokemonHealth.name} took 20HP damage from Recoil.\n${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}\n`);
                console.log(`\nYou spot a mysterious shadow lurking around the corner.\nCuriousity gets the better of you. You decide to follow it.\n`);
                rl.question(`...But now you notice ${pokemonHealth.name} is missing, do you investigate?\n yes or no\n`, (userInput) => {
                    if((userInput.toLowerCase().trim() == 'yes')){
                        console.log(`\nAfter an hour of searching, you find your lifeless ${pokemonHealth.name} floating facedown in an underground pool.\nR.I.P`)
                        rl.close();
                    } else if (userInput.toLowerCase().trim() == 'no'){
                        console.log(`\nYou've been lured into Gengars shadows. You are now trapped in the dark.. alone.\n`)
                        rl.close();
                    } else {
                        question6();
                    }
                })
            } else if ( userInput.toLowerCase().trim() == 'heal' ){
                pokemonHealth.minusHealthPotions(1);
                console.log(`\nYou used 1 potion, you now have ${pokemonHealth.numHealthPotions} potions remaining\nCresselia appears grateful and takes flight, bursting through the cave walls, with you and ${pokemonHealth.name} on her back.`);
                resolve();
            }
          
        })
    })
}


const question7 = () => {
    return new Promise ((resolve, reject) => {
        rl.question(`While on Cresselia's back, you direct Cresselia to your home.\nOn the way, the 3 of you notice a floating figure in the mountains....\nYou land safely with ${pokemonHealth.name} and thanked Cresselia.\nDo you walk towards the floating figure or go home?\nfigure or home\n`, (userInput) => {
            if(userInput.toLowerCase().trim() === 'home' ){
                console.log(`\nYou ignore the floating figure and walked safely home with ${pokemonHealth.name}.\nYou have a lovely warm meal with your family.\n`)
                console.log(`Ending: Home Sweet Home.`)
                rl.close();
            } else if ( userInput.toLowerCase().trim() == 'figure' ){
                rl.question(`\nAs you walk cautiously forward, the figure becomes clearer......\nMEWTWO!\nYou want to catch it but its too strong!\nrun away or attack?\n`, (userInput) => {
                    if(userInput.toLowerCase().trim() == 'run away'){
                        console.log(`Ending: You ran back home and have an amazing story to tell.`)
                        rl.close();
                    } else if (userInput.toLowerCase().trim() == 'attack'){
                        pokemonHealth.healthPoints = pokemonHealth.deductingPoints(20)
                        console.log(`${pokemonHealth.name} uses Tackle!\nMewTwo uses Beam! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP! MewTwo looks unfazed...`);
                        rl.question(`Send ${pokemonHealth.name} to attack again?\nyes/no\n`, (userInput) => {
                            if(userInput.toLowerCase().trim() == 'yes'){
                                pokemonHealth.healthPoints = pokemonHealth.deductingPoints(20);
                                rl.question(`${pokemonHealth.name} use Tackle! MewTwo use Beam! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP.\nMewTwo appears injured!\nUse health potion on ${pokemonHealth.name}?\nyes/no\n`, (userInput) => {
                                    if(userInput.toLowerCase().trim() == 'yes'){
                                        pokemonHealth.numHealthPotions = pokemonHealth.minusHealthPotions();
                                        if(pokemonHealth.numHealthPotions == 0){
                                            console.log(`Looks like you've run out out of Health Potions.\n${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP.\n`);
                                            checkHP()
                                        } else {
                                            pokemonHealth.healthPoints = pokemonHealth.healthPotions();
                                            console.log(`You've used 1 Health Potion, you have ${pokemonHealth.numHealthPotions} Health Potions left.\n${pokemonHealth.name} now has ${pokemonHealth.healthPoints}!\n`)
                                        }
                                        resolve();
                                    } else if (userInput.toLowerCase().trim() == 'no'){
                                        console.log(`${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP\n`);
                                        resolve();
                                    } else {
                                        question7();
                                    }
                                })
                            } else if (userInput.toLowerCase().trim() == 'no'){
                                console.log(`You and ${pokemonHealth.name} try to make a run for it....\n MewTwo use Psystrike and both you and ${pokemonHealth.name} fainted`);
                                rl.close();
                            } else {
                                question7();
                            }
                        })
                    }
                })
            } else {
                question7();
            }
          
        })
    })
}


const question8 = () => {
    return new Promise ((resolve, reject) => {
        rl.question('Do you want to throw a Pokeball or attack?\nthrow or attack\n', (userInput) => {
            if(userInput.toLowerCase().trim() === 'attack' ){
                console.log(`\nEnding: MewTwo loses his patience and uses PsyStrike.\nYou both disintergrate.\n`)
                rl.close();
            } else if ( userInput.toLowerCase().trim() == 'throw' ){
                let probability = pokemonHealth.catchRate();
                if(probability == true){
                    console.log(`CONGRATULATIONS: YOU CAUGHT MEWTWO\n MewTwo was added to your Pokedex.`);
                    rl.close();
                } else {
                    pokemonHealth.healthPoints = pokemonHealth.deductingPoints(10);
                    console.log(`MewTwo busted out! MewTwo use Psycocut! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}`);
                    checkHP();
                } 
            } else {
                question9();
            }
          
        })
    })
};


const question9 = () => {
    return new Promise ((resolve, reject) => {
        rl.question('Use Health Potion or Throw Pokeball?\npotion/throw', (userInput) => {
            if(userInput.toLowerCase().trim() === 'potion' ){
                pokemonHealth.healthPoints = pokemonHealth.addHealthPotions();
                pokemonHealth.numHealthPotions = pokemonHealth.minusHealthPotions();
                console.log(`\nHealth potion was used.\n${pokemonHealth.name} now has ${pokemonHealth.healthPoints}HP and you have ${pokemonHealth.numHealthPotions} Health Potions left.`)
                question9();
            } else if ( userInput.toLowerCase().trim() == 'throw' ){
                let probability = pokemonHealth.catchRate();
                if(probability == true){
                    console.log(`CONGRATULATIONS: YOU CAUGHT MEWTWO\n MewTwo was added to your Pokedex.`);
                    resolve();
                } else {
                    console.log(`MewTwo busted out! MewTwo use Psycocut! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}`);
                    question9();
                } 
            } else {
                question9();
            }
          
        })
    })
};




function playAgain() {
    let again = rl.question("Would you like to enter again?\n");
    if (again == "yes") {
        main();
    } else if (again == "no") {
        rl.close();
    } else {
        console.log("Invalid answer. Type yes or no.\n");
        playAgain();
    }
}

const main = async () => {
    await question0();
    await selectLevel();
    await question1();
    await question2();
    await question3();
    await question4();
    await question5();
    await question6();
    await question7();
    await question8();
    await question9();
}


rl.on('close', () => {
    console.log("Game over");
    playAgain();
});

main();

