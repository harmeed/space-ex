const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');

const logger = require('morgan');

const usersRouter = require('./routes/users');
const mongoDB = require('./database/db');




mongoDB();






const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));




const port = process.env.PORT || 3000;


app.use('/users', usersRouter);

app.listen (port,()=>{
    console.log('server is running on port '+ port);
    console.log(process.env.NODE_ENV);
});


