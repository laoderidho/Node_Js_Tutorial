const Person = {
    name : 'Ridho',
    age : 20,
    //di bawah ini adalah method yang hampir sama dengan function tapi dalam bentuk object
    greet(myName , age){
        console.log(`Hello I ${myName} and i ${age} years old`)
    },
    Sum(num1, num2){
        console.log(num1+num2)
    }
}

const nama = 'Ridho';
const age = 19;

//seperti inilah cara memanggil Method
Person.greet(nama, age)
Person.Sum(2,3)