const mhs = ['Ridho', 'Salwa', 'Firman', 'John doe']

//spread Operator
const mh2 = ['Fahreza',...mhs]

console.log(mh2)

//rest Parameter
const myFunc = (...el) =>{
    let temp = 0;
    for(let i=0; i<el.length; i++){
        temp += el[i]
    }
    return temp
}

console.log(myFunc(1,3,5,1))