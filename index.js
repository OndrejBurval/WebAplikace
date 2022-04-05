// Importy
const express = require('express')
const {request, response } = require("express")
const { readFile, readFileSync } = require('fs')


// Basic settings
const app = module.exports = express()
const port = 3000

// Hledá html - bez toho musejí být ejs soubory .ejs
app.engine('.html', require('ejs').__express)

// určuje render koncovku .html
app.set('view engine', 'html');


// Port Listener
app.listen(port, () => console.log("Server spuštěn => http://localhost:"+port))

// Static Files (CSS, JS, IMG)
app.use(express.static('./'))

var users = [
    { name: 'tobi', email: 'tobi@learnboost.com' },
    { name: 'loki', email: 'loki@learnboost.com' },
    { name: 'jane', email: 'jane@learnboost.com' }
];


app.get('/', (req, res) => {
    res.render('index', {
        title: "Ondej Buřval Personal"
    });
})

app.get('/styleguide', (req, res) => {
    res.render('styleguide', {
        title: "Styleguide"
    });
})

// 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: "404 Page"
    });
})
