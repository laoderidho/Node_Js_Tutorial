"use strict";
// deklarasi variable di typescript
// deklarasi variable mempunyai rules setelah nama variable: tipe data
const namaSaya = "Ridho";
let umurSaya = 20;
let isMaried;
let test; // tipe data any artinya variable nya bisa apa saja (string, number, boolean)
// tipe data array
let mhs;
mhs = ["Ridho", "Rizki", "Rizal"];
let getMhs;
getMhs = {
    nama: "Ridho",
    umur: 20,
    jurusan: "Teknik Informatika"
};
console.log(getMhs);
// function
// arti string di belakang kurung menandakan bahwa fungsi ini harus mengembalikan nilai string
const myFunc = () => {
    return "Hello World";
};
console.log(myFunc());
// void function artinya fungsi tersebut tidak mempunyai return 
const funcVoid = () => console.log("Hello World");
funcVoid();
// function dengan parameter harus di function nya di deklarasikan tipe datanya
const getHello = (name, age) => `Hello ${name} umur saya ${age}`;
const sum = (val1, val2) => val1 + val2;
console.log(getHello("Ridho", 20));
const TeslaModelX = {
    brand: "Tesla",
    color: "Black",
    year: 2021,
    autoPilot: true,
    model: "X",
    chargeListrik: true
};
const getDataTesla = (cars) => {
    return `Mobil ${cars.brand} warna ${cars.color} tahun ${cars.year} model ${cars.model} autopilot ${cars.autoPilot} charge listrik ${cars.chargeListrik}`;
};
console.log(getDataTesla(TeslaModelX));
