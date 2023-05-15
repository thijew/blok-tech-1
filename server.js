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
app.get('/', (req, res) => {
    console.log("Welcome to the homepage")
    res.render('pages/home')
})
// Form page
app.get('/form', (req, res) => {
    console.log("Welcome to the formpage")
    res.render('pages/form')
})


app.post('/reserve', async (req, res) => {
    console.log(req.body);
    
    const reservations = {
      name: req.body.name,
      phone: req.body.phone,
      chickens: req.body.chickens,
      date: req.body.date,
      time: req.body.time
    }
  
    try {
      await db.collection('reservations').insertOne(reservations)
      res.render('pages/admin')
    } catch (e) {
      console.log(e);
      res.status(500).send('Error: could not save reservation')
    }
  })
  


//Set server to listen to port 
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
  })