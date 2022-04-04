// Importy
const express = require('express')
const {request, response } = require("express")
const { readFile, readFileSync } = require('fs')


// Basic settings
const app = express()
const port = 3000

// Port Listener
app.listen(port, () => console.log("Server spuštěn => http://localhost:"+port))

// Static Files (CSS, JS, IMG)
app.use(express.static('./'))



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/styleguide', (req, res) => {
    res.sendFile(__dirname + '/views/styleguide.html');
})

// 404 page
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/404.html');
})
