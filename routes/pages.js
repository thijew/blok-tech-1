// I'll be rendering all of my pages in this file

const express = require('express');
const pages = express.Router();

pages 
// Home page 
.get('/', (req, res) => {
    console.log("Welcome to the homepage")
    res.render('pages/home')
})


module.exports = pages;