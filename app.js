import express from "express"
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import {User} from './models/User.js';
import "./handlebarsConfig.js";

const app = express();

//door config worden de bestand van dotenv gelezen
dotenv.config();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('static'))

mongoose.connect(process.env.MONGODB_URI, {
  //nmp run start en zie je een bericht
  }).then(() => {
    console.log('Verbonden met MongoDB');
  }).catch((error) => {
    console.error('Fout bij verbinden met MongoDB:', error);
  });
 

 const Schema = mongoose.Schema;

  // Define a Mongoose schema
  const checkBoxSchema = new Schema({
    category: {type: String, required: true},
    name: { type: String, required: true},
  });
  

  // Create a Mongoose model based on the schema
  const checkBox = mongoose.model('checkBox', checkBoxSchema);
  
  // Define a route for retrieving data based on the Category
  app.get('/data', (req, res) => {
    const category = req.query.category;
  
    // Query the database for documents with the matching Category
    checkBox.find({ category: cooking })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.error('Error retrieving data:', error);
        res.status(500).send('Internal Server Error');
      });
  });
  
app.get('/', async (req, res) => {
  res.render('home');
});

app.get('/test', function (req, res) {
  res.send('huh')
})

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get('/matched', (req, res) => {
  res.render('matched');
});

app.listen(3000, () => {
  console.log('App connected: port 3000')
});

