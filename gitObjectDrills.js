'use strict';

const loaf = {
    flour: 300, 
    water:210,
    hydration: function(){
        return (this.flour + this.water)/100;
    }
};
console.log(loaf.flour, loaf.water); 
console.log(loaf.hydration()); 

const obj = {
    foo: 'Foo',
    bar: 'Bar',
    fum: 'Fum',
    quux: 'Quux',
    spam: 'Spam',
};

for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
} 
const hobbit = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(hobbit.meals[3]);

const michael = { 
    name: 'michael', 
    'job title': 'dancer',
};
const john = {
    name: 'john', 
    'job title': 'golfer',
    boss: 'michael',
};
const tim = {
    name: 'tim', 
    'job title': 'unemployed',
    boss: 'john', 
};
const nameArray = [michael, john, tim]; 
for(const name in nameArray){
    if (!nameArray[name].boss){
        console.log(`${nameArray[name]['job title']} ${nameArray[name].name} doesn't report to anybody`);
    } else {
    console.log(`${nameArray[name]['job title']} ${nameArray[name].name} reports to ${nameArray[name].boss}`);
    }
}

const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

const decode = function(word) {
    let firstLetter = word[0];
    const keys = Object.keys(cipher);
    if (keys.includes(firstLetter)) {
        let letterPosition = cipher[firstLetter];
        return word[letterPosition];
    } else {
        return ' ';
    }
};

const decodeWords = function(s) {
    const words = s.split(' ');
    let output = '';
    for (const word in words) {
        output += decode(words[word]);
    }
    // for (let i=0; i<words.length; i++) {
    //     output += decode(words[i]);
    // }
    return output;
};

console.log(decodeWords('craft block argon meter bells brown croon droop'));
function createCharacter(name,nickName, race, origin, attack, defense ){
    const x = attack;
    const y = defense;  

    return { 
        name: `${name}`, 
        nickName: `${nickName}`, 
        race: `${race}`, 
        origin:`${origin}`, 
        attack:`${attack}`, 
        defense: `${defense}`, 
        describe: function(){
            return `${name} has a race of ${race} and is from ${origin}.`;
        },
        evaluateFight: function(charater){
            if( this.attack < character.defense){
                return `${character} takes zero damage!`;
            }
            else{
                return 'Your opponent takes' + this.attack - charater.defense + 'damage and you receive' + charater.attack - this.defense + 'damage';
            }

        }
    }
}
const gandolf = createCharacter('Gandalf the White', 'gandalf', 'Wizard' ,'Middle Earth', 10 , 6  ); 
const bilbo = createCharacter('Bilbo Baggins','bilbo','Hobbit' ,'The Shire', 2 ,1 );
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3 , 2   );
const aragorn = createCharacter('Aragorn son of Arathorn' ,'aragorn' ,  'Man' , 'Dunnedain' , 6 ,8  );
const legolas = createCharacter('Legolas', 'legolas', 'Elf' ,'Woodland Realm' , 8 ,5 ); 
const legend = createCharacter('Legend', 'Death', 'God','The Universe', 100, 100 ); 
const arrayOfCharaters = [gandolf, bilbo, frodo, aragorn, legolas, legend]; 
arrayOfCharaters.find(value => value.nickName == 'aragorn').describe(); 
const hobbitArray = arrayOfCharaters.filter(value => value.race == 'Hobbit'); 
const attackArray = arrayOfCharaters.filter(value => value.attack > 5); 
//creating a new weapon and description for gandolf
gandolf.weapon = 'mages staff'; 
gandolf.describe = function(){
    return `${gandolf.name} has a race of ${gandolf.race} and yields a  ${gandolf.weapon}.`;
},
//and so on for the rest of the charaters 
bilbo.weapon = ' running away'; 
frodo.weapon = 'courage'; 
aragorn.weapon = ' a huge sword'; 
legolas.weapon = ' anything he can get his hands on'; 
legend.weapon = ' mystical powers'; 