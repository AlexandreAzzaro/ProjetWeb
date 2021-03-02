import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import stuffRoute from "./routes/stuff.js"
import userRoute from "./routes/User.js"
//import MongoClient from 'mongodb'
const app = express();

//Creation connexion mong


//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.v7oal.mongodb.net/Cluster0?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//   client.close();
// });

mongoose.connect(uri,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//reglage du probleme CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoute);
app.use('/api/auth', userRoute);

export default app;