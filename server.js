// server.js
// where your node app starts

// init project
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const shortUrl = require("./model/shortUrl")

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


//Connet to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds121999.mlab.com:21999/apitest");

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static(__dirname + 'public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store
app.get('/new/:urlToShorten(*)',(req,res,next)=>{
  var urlToShorten = req.params.urlToShorten;
  
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  
  var regex = expression;
  
 if(regex.test(urlToShorten)===true){
   var short = Math.floor(Math.random() * 100000).toString();
   
   var data = new shortUrl({
   originalURL : urlToShorten,
  shorterURL : short
   });
   
   data.save(function(err){
   if(err){
     return res.send("Error save to database");
   }
   });
   
 return res.json(data)
 }
  var data = new shortUrl({
   originalURL: 'URL entered does not follow the correct format',
  shorterURL : 'Invalid URL'
  });
  
  return res.json(data);
        });

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
