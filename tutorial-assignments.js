let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases[5] = 'Rn';
console.log(nobleGases); 

console.log(nobleGases.length); 

let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];
console.log(elements[0]); 
console.log(elements[0][0]); 
console.log(elements[0][0][0]); 

let firstGroup = ['H', 'Li', 'Na', , 'K', 'Rb', 'Cs'];
console.log(firstGroup); 

firstGroup.length = 11;
console.log(firstGroup); 

firstGroup[15] = 'Fr';
console.log(firstGroup); 

let dough1 = ['flour', 'water', 'yeast', 'salt'];
let dough2 = ['flour', 'water', 'yeast', 'salt'];
console.log(dough1 === dough2); 

let dough3 = dough1;
console.log(dough1 === dough3); 

const compareArr = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};
console.log(compareArr(dough1, dough2)); 

let alkali = ['Li', 'Na', 'K'];
let alkEarth = ['Be', 'Mg', 'Ca'];
let metals = [...alkali, ...alkEarth];
console.log(metals); 

let metalsCopy = [...metals];
console.log(metalsCopy); 

function f1(first, second, third, ...others) {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);
}
f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'); 


function f2(...args) {
    console.log(args);
}
f2('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn');

let [firstRow, secondRow,,FourthRow] = nobleGases;
console.log(firstRow); 
console.log(secondRow); 
console.log(FourthRow); 

nobleGases.push('Rn'); 
console.log(nobleGases); 

let halogens = ['F', 'Cl'];
halogens.unshift('Br', 'I', 'At'); 
console.log(halogens); 

nobleGases.pop(); 
console.log(nobleGases); 

halogens.shift(); 
console.log(halogens); 

const first = [1, 2, 3];
const second = [4, 5, 6];
const merged = first.concat(second);
console.log(merged); 


