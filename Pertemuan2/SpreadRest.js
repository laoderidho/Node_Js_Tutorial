const mhs = ['Ridho', 'Salwa', 'Firman', 'John doe']

//spread Operator
const mh2 = ['Fahreza',...mhs]

console.log(mh2)

//rest Parameter
const myFunc = (...el) =>{
    return el
}

console.log(myFunc(1,3,5,1))