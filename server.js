const express = require('express')
const app = express()

require('dotenv').config();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("does it work?")
    res.render('index')
})




app.listen(process.env.port)