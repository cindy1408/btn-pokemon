const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, 
                                    output: process.stdout});

class health{
    constructor(){
        this.healthPoints = 50;
    }
    deductingPoint(damage){
        this.healthPoints = this.healthPoints - damage; 
        return this.healthPoints;
    }
    fullHealth(){
        let maxHealth = new health();
        this.healthPoints = maxHealth.healthPoints;
        return this.healthPoints
    }
}

rl.question('Do you want to enter Pokemon Cerulean Cave? \n', 
    (userInput) => {
        if(userInput.trim() == 'yes'){
            let userHealth = new health;
            console.log(`Your Pikachu is on: ${userHealth.healthPoints}HP`);
            rl.question('Which direction do you want to walk in? left or right?\n',
            (userInput) => {
                if(userInput == 'left'){
                    let remainingHealth = userHealth.deductingPoint(50);
                    console.log(`Your Pikachu's remaining health is: ${remainingHealth}HP \nYou fell to your death!`)
                    rl.close();
                } else {
                rl.question(`You've turned right. A wild Growlithe attacked! run or attack \n`, 
                (userInput) => {
                    if(userInput == 'attack'){
                        let remainingHealth = userHealth.deductingPoint(3);
                        console.log(`Pikachu used Thunderbolt! \nGrowlithe fainted, Pikachu has now got ${remainingHealth}HP`);
                        rl.question(`There's a ladder in front of you, continue straight or climb the ladder?`, 
                        (userInput) => {
                            if(userInput.trim() == 'climb' || 'climb ladder' || 'climb the ladder'){
                                rl.question(`The ground starts shaking as you see a bright light.... \n do you: run away or approach?`, 
                                (userInput) => {
                                    if(userInput.trim() == 'approach'){
                                        console.log(`You've approached the light and Cresselia has appeared!`)
                                        rl.question(`Do you want to battle? yes/no`, 
                                        (userInput) => {
                                            if(userInput.trim() == 'yes'){
                                                let health = userHealth.deductingPoint(30);
                                                rl.question(`Cresselia is now injured, Pikachu has a remaining health of ${health}.\nDo you want Cresselia to fly you out of the cave?`, 
                                                (userInput) => {
                                                    if(userInput.trim() == 'yes'){
                                                        rl.question(`You're on Cresselia, you see a river and a forest, which path do you take?`,
                                                        (userInput) => {
                                                            if(userInput.trim() == 'forest'){
                                                                let recover = userHealth.fullHealth();
                                                                console.log(`You've stubled upon Blissey! Blissey healed your Pikachu to full health! \nPikachu now has ${recover}.`)
                                                            } else{
                                                            console.log(`You've drowned`)
                                                            rl.close();
                                                            }
                                                        })
                                                    }
                                                    console.log(`You've starved in the cave.`)
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        let remainingHealth = userHealth.deductingPoint(50);
                        console.log(`You caught on fire before getting away! Pikachu's remaining health is now: ${remainingHealth}HP.`)
                        rl.close();
                    }
                })
                }
            } )
    }
})


rl.on('close', () => {
    console.log("Game over");
});

