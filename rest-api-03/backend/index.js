const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/rest-api-3', {
     useUnifiedTopology: true,
     useNewUrlParser: true,
});
