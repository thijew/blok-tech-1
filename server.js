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

// Home page 
.get('/', (req, res) => {
    console.log("Welcome to the homepage")
    res.render('pages/home')
})


// Using routes
// Home
// app.use('/', pages)
// Form page



//Set server to listen to port 
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });