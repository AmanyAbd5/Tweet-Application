const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tweetRouter = require("./routes/tweet");
const FollowersRouter = require("./routes/Followers");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/tweet", tweetRouter);
app.use("/Followers", FollowersRouter);

module.exports = app;
