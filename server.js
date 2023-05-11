require('dotenv').config()

//Require express
const express = require('express')
const app = express()
//Make a connection to the db
const runDB = require('./config/db')
runDB().then(console.log("connected to DB"))
//require multer
// const multer = require('multer')
//require body-parser
// const bodyParser = require('body-parser');



//Server static files
app.use(express.static('static'))
// const path = require('path')
// app.use('static', express.static(path.join(__dirname, 'public')))


const port = process.env.PORT

// Set ejs
app.set('view engine', 'ejs')



//Pages
// Home page 
.get('/', (req, res) => {
    console.log("Welcome to the homepage")
    res.render('pages/home')
})
// Form page
.get('/form', (req, res) => {
    console.log("Welcome to the formpage")
    res.render('pages/form')
})
app.post('/form',  (req, res) => {
    console.log("running")
})

//Set server to listen to port 
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });