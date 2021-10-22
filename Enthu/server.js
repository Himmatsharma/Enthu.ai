require('./models/db');
const express = require('express');
const router = require('./routes/route.js');
const path = require('path');
const exphbs = require('express-handlebars');

const bodyparser = require('body-parser');

var app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// app.use(bodyparser.json);
app.set('views', path.join(__dirname, '/views/'));

var hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
  });

// app.engine('hbs', exphbs({ 
//     extname: 'hbs', 
//     defaultLayout: 'mainLayout',    
//     layoutsDir: __dirname + '/views/layouts/' 
// }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Server is started');
})

app.use(router);