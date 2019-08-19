require('dotenv').config();


const express = require('express');
const connectDB = require('./config/db');


// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

app.listen(process.env.PORT || 3000);