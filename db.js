const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log('Connected to DataBase'))
.catch((error) => console.log('Error connecting to DataBase', error));



