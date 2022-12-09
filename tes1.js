//ini adalah main
//untuk menggunakan main file / file utama maka kita harus memberi command npm init -y
const express = require('express') //mengambil modul dari express
const app = express() //mendeklarasikan lagi method express dalam 1 variable
const port = 3000  //mendeklarasikan di mana port tersebut di localhost browser

//routes utama kita di method get
app.get('/', (req, res)=>{ //tanda / sebenarnya adalah menu home / menu utama dalam browser
    res.send('Hello World') //kirim response ke browser berisi Hello World
})

app.get('/home', (req, res)=>{
    res.send('Hello Ridho')
})

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`) //ini untuk memuat browser nya
})