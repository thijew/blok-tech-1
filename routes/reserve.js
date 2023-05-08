// //Route to load the reservation page

const express = require('express')
const router = express.Router()
const add = require('../controllers/chickens')

router.post('/', add.add)