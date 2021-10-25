// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection is working");
    }).catch((error) => {
        console.log("Error");
    })



const moveS = new mongoose.Schema({ title: String, year: Number, score: Number, rating: String });

mongoose.model('Move', moveS);

