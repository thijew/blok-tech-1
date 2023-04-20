require('dotenv').config()

//Require express
const express = require('express')
const app = express()
//Make a connection to the db
const runDB = require('./config/db')
runDB().then(console.log("connected to DB"))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("does it work?")
    res.render('index')
})

//test


app.listen(process.env.port)