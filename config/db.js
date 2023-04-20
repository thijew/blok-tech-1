require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb')

// Make a connection to mongodb

async function runDB() {
  const uri = (process.env.DB_URI)


  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })

  console.log("Trying to connect to db:")

await client.connect(err => {
  if (err) { throw err }
})

}
module.exports = runDB;