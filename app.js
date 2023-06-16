import express from "express"
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import {User} from './models/User.js';
const app = express();

//door config worden de bestand van dotenv gelezen
dotenv.config();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('static'))

//Hij laadt de veriabelen en kunnen toegang krijgen via process.env hier uit komt de mangodb uri

//nmp run start en zie je een bericht



mongoose.connect(process.env.MONGODB_URI, {
  //nmp run start en zie je een bericht
  }).then(() => {
    console.log('Verbonden met MongoDB');
  }).catch((error) => {
    console.error('Fout bij verbinden met MongoDB:', error);
  });
  
//  const Schema = mongoose.Schema;

//  const userSchema = new Schema({

//    name: { type: String, required: true },

//    hobby: { type: String, required: true },

//    age: { type: Number, required: true },
//  });

//  const User = mongoose.model('User', userSchema);


app.get('/', async (req, res) => {
  // const user = new User({
  //   name: 'Rosalie',
  //   hobby: 'Programmeren',
  //   age: 20,
  //   image: 'hoi.png',
  // });

  // await user.save()
  // .then((data) => {
  //   if (err) console.log('error', err)
  //   console.log('the data', data)
  // })
  res.render('home');
});

app.get('/test', function (req, res) {
  res.send('huh')
})

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get("/matched", async (req, res) => {
  try {
    const users = await User.find({}, "name age hobby"); // Haal alle gebruikersgegevens op
    res.render("matched", { users }); // Rendert de "matched" pagina en stuurt de gebruikersgegevens als gegevens mee
  } catch (error) {
    console.error("Fout bij ophalen van gebruikers:", error);
    res.status(500).json({ error: "ERROOOORR" });
  }
});

// app.get('/data', async (req, res) => {

//   const { guitar, cooking, gaming, knitting, painting } = req.query;


//   const categoryQuery = {};

//   const aantalQuery = {};




//   if (guitar) {categoryQuery.Category = "guitar";}

//   if (cooking) {categoryQuery.Category = "cooking";}

//   if (gaming) {aantalQuery.Category = "gaming";}

//   if (knitting) {aantalQuery.Category = "knitting";}

//   if (painting) {aantalQuery.Category = "painting";}

//   const shop = await Shop.findOne({ $or: [categoryQuery, aantalQuery] });

//   res.render('data', shop);

// });


app.listen(3000, () => {
  console.log('App connected: port 3000')
});

