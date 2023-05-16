require('dotenv').config()

//Require express
const express = require('express')
const app = express()
//Make a connection to the db
const runDB = require('./config/db')
runDB().then(console.log("connected to DB"))


const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = (process.env.DB_URI)

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })

const db = client.db(process.env.DB_NAME)

// require body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// set port
const port = process.env.PORT

//Serve static files
app.use(express.static('static'))

// Set ejs
app.set('view engine', 'ejs')


//Pages
// Home page 
app.get('/', (req, res, next) => {
    console.log("Welcome to the homepage")
    try {
    res.render('pages/home')
    } catch (err) {
      next(err);
    }
})
// Form page
app.get('/form', async (req, res, next) => {
    console.log("Welcome to the formpage")
    try {
    res.render('pages/form')
    } catch (err) {
      next(err);
    }
})
// Admin page
app.get('/admin', async (req, res, next) => {
    console.log("Welcome to the admin page")

    try {
    const chickens = await db.collection('chickens').find().toArray()
    res.render('pages/admin', { chickens: chickens })
    console.log(chickens)
  } catch (err) {
    next(err);
  }

})

//Post the form information
app.post('/reserve', async (req, res, next) => {
    console.log(req.body);

    try {
    const reservations = {
      name: req.body.name,
      phone: req.body.phone,
      chickens: req.body.chickens,
      date: req.body.date,
      time: req.body.time
    }
      await db.collection('reservations').insertOne(reservations)
      res.render('pages/admin', reservations)
    } catch (err) {
      next(err);
    }
  })
  


//Set server to listen to port 
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
  })