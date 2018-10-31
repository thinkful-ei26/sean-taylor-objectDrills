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