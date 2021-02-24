const express = require('express');

const app = express();

const mongoose = require('mongoose')

const cors = require('cors')
require('dotenv/config')

const postsRoutes = require('./routes/posts')

const bodyParser = require('body-parser')

//middlewares (running specified fnxs on router hits)

app.use(cors())

app.use(bodyParser.json()) 

app.use('/posts',postsRoutes)

//routes
app.get('/',(req,res)=>{
    res.send("home page")
});




//connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('connected to Db...!')
})
//Listeming to requests
app.listen(4000)