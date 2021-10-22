const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dataemp', { useNewUrlParser: true }, (err) => {
    if (!err) console.log('DB Connected');
    if (err) console.log(err);
});

require('./employee.model');