const Person = {
    name: "La Ode Ridho Fahreza" ,
    age: 20,
    hello(){
        console.log(`hello my Name is ${this.name} im a ${this.age} years old`)
    }
}

//ini function untuk memanggil objet sebagai parameter nya 
const myFunc = (Person)=>{
    console.log(Person.name);
}

//kurung kurawal di dalam parameter untuk memanggil object dan nama objectnya
const myFunc2 = ({age})=>{
    console.log(age)
}

//ini memanggil function dan menjadikan object Person sebagai argumennya
myFunc(Person)
myFunc2(Person)

//console.log di bawah memanggil deklarasi object yang di dalam Person
const {name, age} = Person;
console.log(`Hello ${name} your age is ${age}`)


