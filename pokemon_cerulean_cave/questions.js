'use strict'

const question1 = [{
    type: 'list', 
    name: 'list1',
    message: 'Welcome to Pokemon Cerulean Cave! Would you like to enter?',
    choices: ['Yes', 'No'],
    default: 'Yes'
}]

const question2 = [{
    type: 'list', 
    name: 'list2',
    message: 'Please select your desired level:',
    choices: ['Easy', 'Intermediate', 'Expert'],
    default: 'Easy'
}]

const question3 = [{
    type: 'list', 
    name: 'list3',
    message: 'Which pokemon do you want as your buddy?',
    choices: ['Pikachu', 'Charmander', 'Bulbasaur'],
    default: 'Pikachu'
}]

const question4 = [{
    type: 'list', 
    name: 'list4',
    message: 'Should you walk left or right?',
    choices: ['Left', 'Right'],
    default: 'Left'
}]

const question5 = [{
    type: 'list', 
    name: 'list5',
    message: 'Do you want to: ',
    choices: ['Attack', 'Run'],
    default: 'Attack'
}]

const question6 = [{
    type: 'list', 
    name: 'list6',
    message: 'Do you want to use your health potion?',
    choices: ['Yes', 'No'],
    default: 'Yes'
}]

const question7 = [{
    type: 'list', 
    name: 'list7',
    message: 'You continue walking and stumble upon a ladder. However, you also hear noises coming from nearby. Do you...',
    choices: ['Climb the ladder', 'Investigate the noise'],
    default: 'Climb the ladder'
}]

const question7a = [{
    type: 'list', 
    name: 'list7a',
    message: `You walk forward and stumble into Snorlax's 'dining hall. Do you play the PokeFlute or throw a golden raspberry?`,
    choices: ['Play PokeFlute', 'Throw Golden Raspberry'],
    default: 'Play PokeFlute'
}]

const question8 = [{
    type: 'list', 
    name: 'list8',
    message: `As you reach the top, the ground starts shaking!\n... you see a bright light in the distance...`,
    choices: ['Turnback', 'Approach'],
    default: 'Turnback'
}]

const question9 = [{
    type: 'list', 
    name: 'list9',
    message: `Cresselia appears badly wounded.\nDo you...`,
    choices: ['Attack', 'Heal'],
    default: 'Attack'
}]

const question9a = [{
    type: 'list', 
    name: 'list9a',
    message: `..But now you notice your pokemon is missing, which do you investigate?`,
    choices: ['...The dark shadow', 'Your missing Pokemon'],
    default: 'Yes'
}]

const question10 = [{
    type: 'list', 
    name: 'list10',
    message: `While on Cresselia's back, you direct Cresselia to your home.\nOn the way, the 3 of you notice a floating figure in the mountains....\nThe both of you land safely and thank Cresselia.\nDo you....`,
    choices: ['Walk towards the floating figure', 'Go home'],
    default: 'Walk towards the floating figure'
}]

const question10a = [{
    type: 'list', 
    name: 'list10a',
    message: `You want to catch it but its too strong!\nDo you...`,
    choices: ['Run Away', 'Attack'],
    default: 'Run Away'
}]

const question10b = [{
    type: 'list', 
    name: 'list10b',
    message: `Attack again?`,
    choices: ['Yes', 'No'],
    default: 'Yes'
}]

const question10c = [{
    type: 'list',
    name: 'list10c',
    message: `Use health potion on your Pokemon?`,
    choices: ['Potion', 'No Potion'],
    default: 'Potion'
}]

const question11 = [{
    type: 'list',
    name: 'list11',
    message: `Do you want to throw a Pokeball, attack or use another Potion?`,
    choices: ['Throw Pokeball', 'Attack', 'Potion'],
    default: 'Throw Pokeball'
}]

const question12 = [{
    type: 'list',
    name: 'list12',
    message: `Use Health Potion or Throw Pokeball?`,
    choices: ['Potion', 'Throw'],
    default: 'Potion'
}]

module.exports = {
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
    }
