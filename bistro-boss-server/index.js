const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express')
const app=express()
const cors= require('cors')
require('dotenv').config()
const port=process.env.PORT || 5000;
// middle ware
app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("boss is runninh")
})

app.listen( port, ()=>{
    console.log(`Bistro boss is  sitting on port ${port}`)
})

const { MongoClient, ServerApiVersion } = require('mongodb');

const user = encodeURIComponent(process.env.DB_USER);
const pass = encodeURIComponent(process.env.DB_PASS);
const uri = `mongodb+srv://${user}:${pass}@cluster0.w0juy.mongodb.net/?appName=Cluster0;`
                                                                                              
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
    
  const menuCollection=client.db("bistroDB").collection("menu")

  const reviewCollection=client.db("bistroDB").collection("review")
   app.get('/menu', async(req,res)=>{
    const result=await menuCollection.find().toArray()
    res.send(result)
   })
   app.get('/review', async(req,res)=>{
    const result=await reviewCollection.find().toArray()
    res.send(result)
   })




    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
    // await client.close();
  }
}

run().catch(console.dir);