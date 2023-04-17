//Require express
const express = require('express')
const app = express()
//Make a connection to the db
const runDB = require('./config/db')
runDB()


require('dotenv').config()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("does it work?")
    res.render('index')
})




app.listen(process.env.port)