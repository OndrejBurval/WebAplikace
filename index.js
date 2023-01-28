// Importy
const express = require('express')
const {request, response } = require("express")
const fs = require('fs')

// Basic settings
const app = module.exports = express()
const port = process.env.PORT | 3000

// Hledá html - bez toho musejí být ejs soubory .ejs
app.engine('.html', require('ejs').__express)

// určuje render koncovku .html
app.set('view engine', 'html');

// Port Listener
app.listen(port, () => console.log("Server spuštěn => http://localhost:"+port))

// Static Files (CSS, JS, IMG)
app.use(express.static('./'))


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

app.get('/saveJson', (req, res) => {
    const query = req.query.data
    if (query){
        saveJson(query)
        res.redirect("/");
    } else {
        res.redirect("/404");
    }
})

// 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: "404 Page"
    });
})

const saveJson = (data) => {
    fs.appendFile(`public/data/formData.json`, data, function (err){
        if (err){
            console.log(err)
        }
    });
}



