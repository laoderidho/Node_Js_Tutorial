// deklarasi variable di typescript

// deklarasi variable mempunyai rules setelah nama variable: tipe data
const namaSaya: string ="Ridho";

let umurSaya: number = 20;

let isMaried: boolean;

let test: any; // tipe data any artinya variable nya bisa apa saja (string, number, boolean)

// tipe data array
let mhs : string[];

mhs = ["Ridho", "Rizki", "Rizal"];

// objek type
type Mahasiswa = {
    nama: string;
    umur: number;
    // tanda tanya berarti opsional
    jurusan?: string;
}

let getMhs: Mahasiswa

getMhs = {
    nama: "Ridho",
    umur: 20,
    jurusan: "Teknik Informatika"
}

console.log(getMhs);

// function
// arti string di belakang kurung menandakan bahwa fungsi ini harus mengembalikan nilai string
const myFunc = (): string =>{
    return "Hello World";
}

console.log(myFunc());

// void function artinya fungsi tersebut tidak mempunyai return 
const funcVoid = (): void => console.log("Hello World");

funcVoid();

// function dengan parameter harus di function nya di deklarasikan tipe datanya

const getHello= (name: string, age: number) : string=> `Hello ${name} umur saya ${age}`;

const sum = (val1: number, val2: number): number => val1 + val2;

console.log(getHello("Ridho", 20));

// interface 

interface Car{
    brand: string;
    color: string;
    year: number;
}

// inheritance interface
interface Tesla extends Car{
    autoPilot: boolean;
    model: string;
    chargeListrik: boolean;
}

const ModelX: Tesla = {
    brand: "Tesla",
    color: "Black",
    year: 2021,
    autoPilot: true,
    model: "X",
    chargeListrik: true
}

const getDataTesla = (cars: Tesla) : string =>{
    return `Mobil ${cars.brand} warna ${cars.color} tahun ${cars.year} model ${cars.model} autopilot ${cars.autoPilot} charge listrik ${cars.chargeListrik}`;
}

console.log(getDataTesla(ModelX));