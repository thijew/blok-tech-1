require('dotenv').config()

//Require express
const express = require('express')
const app = express()
//Make a connection to the db
const runDB = require('./config/db')
runDB().then(console.log("connected to DB"))

const port = process.env.PORT

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("does it work?")
    res.render('pages/home')
})

//test


app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });