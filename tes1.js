//ini adalah main
//untuk menggunakan main file / file utama maka kita harus memberi command npm init -y
const express = require('express') //mengambil modul dari express
const app = express() //mendeklarasikan lagi method express dalam 1 variable
const port = 2500  //mendeklarasikan di mana port tersebut di localhost browser
const body = require('body-parser') //untuk mendeklarasikan agar bisa membaca postman, untuk menginstallnya cukup di beri command npm i body-parser
const db = require('./connection')
// const response = require('./response')

app.use(body.json()) //untuk memanggil json 

// //routes utama kita di method get
// app.get('/', (req, res)=>{ //tanda / sebenarnya adalah menu home / menu utama dalam browser
//     //di bawah ini adalah function yang memiliki 2 parameter yaitu 1 membuat query sql 2 apa yang akan di jalankan
//     db.query("SELECT * FROM mahasiswa WHERE nim = 2081007", (error, result)=>{
//         response(200, result, 'get all data from mahasiswa', res)
//     })
// })

app.get('/', (req, res)=>{
    res.send('Hello Ridho') 
    //get di gunakan untuk menampilkan apapun mau data / tabel maka akan di tampilkan di dalam browser
})

app.get('/:id', (req, res)=>{
    const id = req.params.id;
    res.send(`spesifik mahasiswa by id ${id}`)
})

app.use('/', (req, res)=>{})

app.post('/', (req, res)=>{
    //post di gunakan untuk menambahkan data di dalam database 
})

app.put('/', (req, res)=>{
    //put berguna untuk mengupdate data / mengganti data
})

app.delete('/', (req, res)=>{
    // delete di gunakan untuk menghapus data
})

// app.post('/login', (req, res)=>{
//     console.log({request: req.body}) //ini untuk memanggil request 
//     res.send('Login succes')
// })

// app.get('/find', (req, res)=>{
//     console.log(`find NIM`, req.query.nim)
//     const sql = `SELECT nama FROM mahasiswa WHERE nim = ${req.query.nim}`
//     db.query(sql, (error, result)=>{
//         response(200, result, 'find mhs in NIM', res)
//     })
// })

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`) //ini untuk memuat browser nya
})

//npm i nodemon untuk menjadikan live server
// untuk run tekan nodemon mainfile.js


