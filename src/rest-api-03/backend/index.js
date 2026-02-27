const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost/rest-api-03', {
     useUnifiedTopology: true,
     useNewUrlParser: true,
     useFindAndModify: false,
});

app.use('/', require('./src/routes'));

app.listen(process.env.port || 3003);