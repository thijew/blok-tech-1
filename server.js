require('dotenv').config()

//Require express
const express = require('express')
const app = express()
//Make a connection to the db
const runDB = require('./config/db')
runDB().then(console.log("connected to DB"))


const port = process.env.PORT

// Set ejs
app.set('view engine', 'ejs')

// Routes
// const pages = require('./routes/pages')
// const form = require('./routes/reserve')


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



// Using routes

// Home
// app.use('/', pages)
// app.use('/form', form)

//Set server to listen to port 
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });