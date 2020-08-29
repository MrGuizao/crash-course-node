const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const requireDir = require('require-dir');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/rest_api', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
})
// requireDir('./src/models');
// middleware
app.use('/', require('./src/routes'));
// app.use(bodyParser.json());
               

app.listen(process.env.port || 3000);