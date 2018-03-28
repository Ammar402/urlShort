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


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static(__dirname + 'public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store
app.get('/new/urlToShorten(*)',(req,res,next)=>{
  var urlToShorten = req.params.urlToShorten;
  return res.json({urlToShorten});
        });

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
