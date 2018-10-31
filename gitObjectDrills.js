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