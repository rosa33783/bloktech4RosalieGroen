import express from "express"
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import dotenv from 'dotenv';

//door config worden de bestand van dotenv gelezen

dotenv.config();

//Hij laadt de veriabelen en kunnen toegang krijgen via process.env hier uit komt de mangodb uri

//nmp run start en zie je een bericht

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  //nmp run start en zie je een bericht
  }).then(() => {
    console.log('Verbonden met MongoDB');
  }).catch((error) => {
    console.error('Fout bij verbinden met MongoDB:', error);
  });
  
 const Schema = mongoose.Schema;

 const userSchema = new Schema({

   name: { type: String, required: true },

   hobby: { type: String, required: true },

   age: { type: Number, required: true },
 });

 const User = mongoose.model('User', userSchema);

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');

app.use(express.static('static'))


app.get('/test', function (req, res) {

     res.send('huh')
})

app.get('/matched', (req, res) => {

      res.render('matched');
  });

app.get('/weather', (req, res) => {

      res.render('weather');
  });

  app.get('/home', async (req, res) => {
    const users = await User.findOne()
    res.render('matched', {users});
});


app.get('/matched', async (req, res) => {
  try {
    const users = await User.find();
    res.render('matched', { users });
  } catch (error) {
    console.error('Error fetching user information:', error);
    res.render('error');
  }
});

app.listen(3000);

