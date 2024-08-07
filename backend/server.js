const express = require('express');
const mongoose = require('mongoose');

const app = express();

 app.use(express.json());
 
app.use(cors())

const port = 4000

const todoroutes = require('./routes/todoroutes');

app.use('/api',todoroutes);

const mongoUrl = "mongodb+srv://rehmanorange1:K7C3dTCF70o0o9Hp@cluster0.r16heyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{})

mongoose.connect('connected', () => {
    console.log("connected to mongoDB successfully")
})

Server.listen('port',() => {
    console.log("My server has started on port"+ port )
})