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
}
console.log(hobbit.meals[3]);

const michael = { 
    name: 'michael', 
    'job title': 'dancer',
}
const john = {
    name: 'john', 
    'job title': 'golfer'
}
const tim = {
    name: 'tim', 
    'job title': 'unemployed', 
}
const nameArray = [michael, john, tim]; 
for(const name in nameArray){
    console.log(`${nameArray[name].name} : ${nameArray[name]['job title']}`);
}