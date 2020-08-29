const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost/api-rest-02', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,

})
app.use('/', require('./src/routes'));


app.listen(process.env.port || 3001);