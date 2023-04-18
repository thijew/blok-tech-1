require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb')

// Make a connection to mongodb

async function runDB() {
  const uri =
    `mongodb+srv://${process.env.DB_USERNAME}
    :${process.env.DB_PASS}
    @${process.env.DB_HOST}
    /${process.env.DB_NAME}?retryWrites=true&w=majority`

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  console.log("Trying to connect to db:")

  client.connect(err => {
    if (err) { throw err }
    else { console.log("Connected to db") }
  })
}
module.exports = runDB