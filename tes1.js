//ini adalah main
//untuk menggunakan main file / file utama maka kita harus memberi command npm init -y
const express = require('express') //mengambil modul dari express
const app = express() //mendeklarasikan lagi method express dalam 1 variable
const port = 2500  //mendeklarasikan di mana port tersebut di localhost browser
const body = require('body-parser') //untuk mendeklarasikan agar bisa membaca postman, untuk menginstallnya cukup di beri command npm i body-parser

app.use(body.json()) //untuk memanggil json 

//routes utama kita di method get
app.get('/', (req, res)=>{ //tanda / sebenarnya adalah menu home / menu utama dalam browser
    res.send('Hello world') //kirim response ke browser berisi Hello World
})

app.get('/home', (req, res)=>{
    res.send('Hello Ridho')
})

app.post('/login', (req, res)=>{
    console.log({request: req.body}) //ini untuk memanggil request 
    res.send('Login succes')
})

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`) //ini untuk memuat browser nya
})

//npm i nodemon untuk menjadikan live server
// untuk run tekan nodemon mainfile.js