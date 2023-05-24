import express from "express"
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

//Hij laadt de veriabelen en kunnen toegang krijgen via process.env hier uit komt de mangodb uri

mongoose.connect(process.env.MONGODB_URI, {

//nmp run start en zie je een bericht

}).then(() => {

  console.log('Verbonden met MongoDB');

}).catch((error) => {

  console.error('Fout bij verbinden met MongoDB:', error);

});


const app = express();

const Schema = mongoose.Schema;

const userSchema = new Schema({

  name: { type: String, required: true },

  hobby: { type: String, required: true },

  age: { type: Number, required: true },

  image: { type: String, required: true },

});


const User = mongoose.model('User', userSchema);

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');

app.use(express.static('static'))

app.get('/', function (req, res) {
  res.send('Hello World roos')
})

app.get('/test', function (req, res) {
  res.send('huh')
})

app.get('/home', (req, res) => {

      res.render('home');
  });

app.get('/matched', (req, res) => {

      res.render('matched');
  });

app.listen(3000);

