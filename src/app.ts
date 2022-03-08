// function sum(a: number,b: number){
//     return a+b;

// }
// const a: number = 5;
// const b: number = 6;
// const result = sum(a,b);
// console.log(result);

let number1 : number = 5;
let number2 : number = 2.8;
let phrase : string = "Result is";
let permit : boolean = true;

const result = number1 + number2;
if(permit){
    console.log(phrase + result);
    
} else {
    console.log('Not show result');
    
}
type TPerson = {
    id: number;
    name: string;
    age: number;
    status?: boolean
}
const person: TPerson = {
    id: 1,
    name:"Tuan",
    age: 20
}
const persons: TPerson[] = {
    { id: 1, name:"Tuan", age: 20,status: true},
    { id: 2, name:"Giang", age: 20,status: false},
}
console.log(person.name);

