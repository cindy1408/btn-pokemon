const inquirer = require('inquirer');
const Health = require('./class.js');
const {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question7a,
    question8,
    question9,
    question9a,
    question10,
    question10a,
    question10b,
    question10c,
    question11,
    question12,
    } = require('./questions');


let pokemonHealth = new Health();


function checkHP(){
    if(pokemonHealth.healthPoints <= 0){
        zeroHealth();
    } else {
        return;
    }
}

async function main1(){
    await inquirer
        .prompt(question1)
        .then(userInput => {
            const answer = userInput.list1
            if(answer == 'Yes'){
               console.log(`\nYou are enter the cave.....\n`)
               main2();
            } else {
                endGame1();
            }
        })
};

async function main2(){
    await inquirer
        .prompt(question2)
        .then(userInput => {
            const answer = userInput.list2
            if(answer == 'Easy'){
                pokemonHealth.maxHealth = 100; 
                pokemonHealth.healthPoints = pokemonHealth.maxHealth;
                pokemonHealth.numHealthPotions = 5; 
                pokemonHealth.probability = 50; 
                main3();
            } else if (answer == 'Intermediate'){
                pokemonHealth.maxHealth = 70; 
                pokemonHealth.healthPoints = pokemonHealth.maxHealth;
                pokemonHealth.numHealthPotions = 3; 
                pokemonHealth.probability = 30; 
                main3();
            } else {
                pokemonHealth.maxHealth = 50; 
                pokemonHealth.healthPoints = pokemonHealth.maxHealth;
                pokemonHealth.numHealthPotions = 2;
                pokemonHealth.probability = 20; 
                main3();
            }
        })
}

async function main3(){
    await inquirer 
        .prompt(question3)
        .then(userInput => {
            const answer = userInput.list3
            pokemonHealth.name = answer.toUpperCase();
            
            console.log(`\nYou enter the cave with your buddy ${pokemonHealth.name} and are surrounded by darkness. \n${pokemonHealth.name} is currently at ${pokemonHealth.maxHealth}HP and you have ${pokemonHealth.numHealthPotions} Health Potions, each heals 20HP!\n`);
            main4();
        })
};

async function main4(){
    await inquirer
        .prompt(question4)
        .then(userInput => {
            const answer = userInput.list4;
            if(answer == 'Left'){
                console.log(`\nYou stumble over a steep ledge and plummet to your death. \n${pokemonHealth.name} fell to 0HP\n`);
                endGame();
            } else {
                console.log(`\nYou begin walking right. A wild Growlithe attacks!\n`);
                main5();
            }
        })
};

async function main5(){
    await inquirer
        .prompt(question5)
        .then(userInput => {
            const answer = userInput.list5;
            if(answer == 'Attack'){
                pokemonHealth.healthPoints = pokemonHealth.deductingPoints(10);
                console.log(`\nGrowlithe used Fire Spin! \n${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP\n${pokemonHealth.name} used Thunderbolt! \nGrowlithe fainted\n`);
                main6();
            } else {
                console.log(`\nYou caught on fire before getting away! ${pokemonHealth.name}'s health fell to 0HP and fainted\n`);
                endGame();
            }
        })
};

async function main6(){
    await inquirer
        .prompt(question6)
        .then(userInput => {
            const answer = userInput.list6;
            if(answer == 'Yes'){
                pokemonHealth.healthPoints = pokemonHealth.healthPotions();
                console.log(`\nYou have used 1 health potion. You currently have ${pokemonHealth.minusHealthPotions()} health potion left.\n${pokemonHealth.name} is now recovered to ${pokemonHealth.healthPoints}HP!\n`);
                main7();
            } else {
                console.log(`\nYou chose not to use any health potion.\n${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP\n`);
                main7();
            }
        })
}

async function main7(){
    await inquirer
        .prompt(question7)
        .then(userInput => {
            const answer = userInput.list7;
            if(answer == 'Climb the ladder'){
                console.log(`\nYou begin climbing...\n`)
                main8();
            } else {
                main7a();
            }
        })
}

async function main7a(){
    await inquirer
        .prompt(question7a)
        .then(userInput => {
            const answer = userInput.list7a;
            if(answer == 'Play PokeFlute'){
                console.log(`\nSnorlax fell asleep to your majestic playing and you walk back to the ladder to begin climbing\n`);
                main8();
            } else {
                console.log(`\nSnorlax begins eating happily, and so you go back to the ladder and begin climbing\n`);
                main8();
            }
        })
}

async function main8(){
    await inquirer
        .prompt(question8)
        .then(userInput => {
            const answer = userInput.list8;
            if(answer == 'Approach'){
                console.log(`\nYou approach the light and the legendary Cresselia appears!\n`);
                main9();
            } else {
                console.log(`\nIn your haste, you lose your footing on the ladder and bump into Beedrill's hive on the way down.\nAn angry swarm of Beedrills sting you and ${pokemonHealth.name} to death!\n${pokemonHealth.name}'s health fell to ${pokemonHealth.deductingPoints(pokemonHealth.healthPoints)}HP\n`);
                endGame();
            }
        })
}

async function main9(){
    await inquirer
        .prompt(question9)
        .then(userInput => {
            const answer = userInput.list9;
            if(answer == 'Attack'){
                pokemonHealth.healthPoints = pokemonHealth.deductingPoints(20);
                console.log(`\nCresselia used Struggle but missed!\n${pokemonHealth.name} used Tackle!\nCresselia fainted and ${pokemonHealth.name} took 20HP damage from Recoil.\n${pokemonHealth.name}'s health fell to ${pokemonHealth.healthPoints}HP\n`);
                console.log(`You spot a mysterious shadow lurking around the corner.\nCuriousity gets the better of you. You decide to follow it.\n`);
                main9a();
            } else {
                pokemonHealth.minusHealthPotions(1);
                console.log(`\nYou used 1 potion, you now have ${pokemonHealth.numHealthPotions} potions remaining\nCresselia appears grateful and takes flight, bursting through the cave walls, with you and ${pokemonHealth.name} on her back.\n`);
                main10();
            }
        })
}

async function main9a(){
    await inquirer
        .prompt(question9a)
        .then(userInput => {
            const answer = userInput.list9a;
            if(answer == 'Your missing Pokemon'){
                console.log(`\nAfter an hour of searching, you find your lifeless ${pokemonHealth.name} floating facedown in an underground pool.\nR.I.P\n`);
                endGame();
            } else {
                console.log(`\nYou've been lured into Gengars shadows. You are now trapped in a void of darkness... alone... forever.\n`);
                endGame();
            }
        })
}


async function main10(){
    await inquirer
        .prompt(question10)
        .then(userInput => {
            const answer = userInput.list10;
            if(answer == 'Go home'){
                console.log(`\nYou ignore the floating figure and walked safely home with ${pokemonHealth.name}.\nYou have a lovely warm meal with your family.\n`)
                console.log(`Ending: Home Sweet Home.\n`);
                endGame();
            } else {
                console.log(`\nAs you walk cautiously forward, the figure becomes clearer......\nMEWTWO!\n`);
                main10a();
            }
        })
}

async function main10a(){
    await inquirer
        .prompt(question10a)
        .then(userInput => {
            const answer = userInput.list10a;
            if(answer == 'Attack'){
                pokemonHealth.healthPoints = pokemonHealth.deductingPoints(20)
                console.log(`\n${pokemonHealth.name} uses Tackle!\nMewTwo uses Hyperbeam! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP! MewTwo looks unfazed...\n`);
                main10b();
            } else {
                console.log(`\nLuckily MewTwo doesn't spot you and ${pokemonHealth.name}...\n`)
                console.log(`Ending: You ran back home and have an amazing story to tell.\n`)
            }
        })
}

async function main10b(){
    await inquirer
        .prompt(question10b)
        .then(userInput => {
            const answer = userInput.list10b;
            if(answer == 'Yes'){
                pokemonHealth.healthPoints = pokemonHealth.deductingPoints(20);
                if(pokemonHealth.healthPoints == 0){
                    checkHP();
                } else {
                console.log(`\n${pokemonHealth.name} uses Tackle! MewTwo uses Psybeam! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP.\nMewTwo appears injured!\n`)
                main10c();
                }
            } else {
                console.log(`\nYou and ${pokemonHealth.name} try to make a run for it....\n MewTwo use Psystrike and both you and ${pokemonHealth.name} fainted\n`);
                endGame();
            }
        })
}

async function main10c(){
    await inquirer
        .prompt(question10c)
        .then(userInput => {
            const answer = userInput.list10c;
            if(answer == `Potion`){
                if(pokemonHealth.numHealthPotions == 0){
                    console.log(`\nLooks like you've run out out of Health Potions.\n${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP.\n`);
                    checkHP();
                    main11();
                } else {
                    pokemonHealth.numHealthPotions = pokemonHealth.minusHealthPotions();
                    pokemonHealth.healthPoints = pokemonHealth.healthPotions();
                    console.log(`\nYou've used 1 Health Potion, you have ${pokemonHealth.numHealthPotions} Health Potions left.\n${pokemonHealth.name} now has ${pokemonHealth.healthPoints}HP!\n`)
                    main11();
                }
            } else {
                console.log(`\n${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP\n`);
                main11();
            }
        })
}

async function main11(){
    await inquirer
        .prompt(question11)
        .then(userInput => {
            const answer = userInput.list11;
            if(answer == 'Attack'){
                console.log(`\nEnding: MewTwo loses his patience and uses PsyStrike.\nYou both disintergrate.\n`);
                endGame();
            } else if(answer == 'Potion'){
                if(pokemonHealth.numHealthPotions == 0){
                    console.log(`\nLooks like you've run out out of Health Potions.\n${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP.\n`);
                    checkHP();
                    main12();
                } else {
                    pokemonHealth.numHealthPotions = pokemonHealth.minusHealthPotions();
                    pokemonHealth.healthPoints = pokemonHealth.healthPotions();
                    console.log(`\nYou've used 1 Health Potion, you have ${pokemonHealth.numHealthPotions} Health Potions left.\n${pokemonHealth.name} now has ${pokemonHealth.healthPoints}!\n`)
                    main12();
                }
            } else {
                let chance = pokemonHealth.catchRate();
                if(chance == true){
                    console.log(`\nCONGRATULATIONS: YOU CAUGHT MEWTWO\nMewTwo was added to your Pokedex.\n`);
                    completed();
                } else {
                    pokemonHealth.healthPoints = pokemonHealth.deductingPoints(10);
                    console.log(`\nMewTwo busted out! MewTwo use Psycocut! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP\n`);
                    checkHP();
                    main12();
                } 
            }
        })
}

async function main12(){
    await inquirer
        .prompt(question12)
        .then(userInput => {
            const answer = userInput.list12;
            if(answer == 'Potion'){
                if(pokemonHealth.numHealthPotions == 0){
                    console.log(`\nLooks like you've run out out of Health Potions.\n${pokemonHealth.name} is still at ${pokemonHealth.healthPoints}HP.\n`);
                    checkHP();
                    main12();
                } else {
                    pokemonHealth.numHealthPotions = pokemonHealth.minusHealthPotions();
                    pokemonHealth.healthPoints = pokemonHealth.healthPotions();
                    console.log(`\nYou've used 1 Health Potion, you have ${pokemonHealth.numHealthPotions} Health Potions left.\n${pokemonHealth.name} now has ${pokemonHealth.healthPoints}HP!\n`)
                    main12();
                }
            } else {
                let chance = pokemonHealth.catchRate();
                if(chance == true){
                    console.log(`\nCONGRATULATIONS: YOU CAUGHT MEWTWO\n MewTwo was added to your Pokedex.\n`);
                    completed();
                } else {
                    pokemonHealth.deductingPoints(10);
                    if(pokemonHealth.healthPoints <= 0){
                        console.log(`\nMewTwo busted out! MewTwo use Psycocut!`)
                        checkHP();
                    } else {
                    console.log(`\nMewTwo busted out! MewTwo use Psycocut! ${pokemonHealth.name} fell to ${pokemonHealth.healthPoints}HP\n`);
                    main12();
                    }
                }
            }
        })
};

function endGame1(){
    console.log('No problem, see you soon!\n');
}
function endGame(){
    console.log(`Game Over!\n`);
    main1();
}

function zeroHealth(){
    console.log(`You've run out of health..\nGame Over\n`);
    main1();
}

function completed(){
    console.log(`Congratulations!\n`);
    main1();
}

main1();
