const Name = 'Ridho';
const age = 20;
const hobby = 'chess'

console.log(`my name is ${Name} i ${age} years old`)

//this the function
const myFunc=(name, ages, hobys)=>{ //this a parameter
    return `my name is ${name} i ${ages} years old, and i like ${hobys}`
}

console.log(myFunc(Name, age, hobby)) //this arguments