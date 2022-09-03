const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Let's Connect the DataBase...
const database = module.exports = () => {
    const connectionParams = {
       useNewUrlParser: true,
       useUnifiedTopology: true,
    }
    try{
mongoose.connect('mongodb+srv://Dronzer:Dronzer@dronzer.grl5zsn.mongodb.net/?retryWrites=true&w=majority', connectionParams)
console.log('Database Connected Succesfully');
    } catch(error) {
console.log(error);
console.log('Database Connction Failed');
    }
} 

database();


module.exports = app;