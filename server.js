require('dotenv').config()

//Require express
const express = require('express')
const app = express()
//Make a connection to the db
const runDB = require('./config/db')
runDB().then(console.log("connected to DB"))

const port = process.env.PORT

// Set ejs
app.set('view engine', 'ejs');


// Routes
const pages = require('./routes/pages')


// Using routes
app.use('/', pages)
app.get('/', (req, res) => {
    console.log("does it work?")
    res.render('pages/home')
})

//Set server to listen to port 
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });