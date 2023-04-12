const express = require('express')
const app = express()
const port = 3000

app.listen(3000)

app.get('/', (req, res) => {
    console.log("does it work?")
    res.render('index')
})
