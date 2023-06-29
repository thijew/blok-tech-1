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
app.get('/home', (req, res, next) => {
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
    //Get all data from the db 
    const reservations = await db.collection('reservations').find().toArray()    // filter reservations by date
    reservations.filter(day => {
      return day.date
    })


    // Get an array of all the chicken reservations for the day
    const chickenReservations = ["2", "2", "2", "2", "2"];

    // Count up the array of chickens
    const totalChickenReservations = chickenReservations.reduce((total, chickens) => {
      return total + parseInt(chickens);
    }, 0);

    // Get the weather API
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.56&longitude=4.61&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin"
    let response = await fetch(url);
    let weather = await response.json();
    // console.log(weather)

    res.render('pages/admin', { weather, reservations, totalChickenReservations })
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
    res.render('pages/confirmation', { reservations })
  } catch (err) {
    next(err);
  }
})

// Confirmation page
app.get('/confirmation', async (req, res, next) => {
  console.log("Welcome to the confirmation page")

  const reservations = await db.collection('reservations').findOne()
  console.log(reservations)
  try {
    res.render('pages/confirmation', { reservations })
  } catch (err) {
    next(err);
  }
})


//Set server to listen to port 
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})

// 404
app.use((req, res) => {
  res.status(404).render('pages/404');
});
