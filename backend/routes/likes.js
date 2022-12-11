const express = require('express');
const router = express.Router();
const db = require("../config/dbconfig");
const orderBy=require("lodash/orderBy");


// connect with database
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tweetapplication"
});


//Like a tweet
router.post("/liketweet/:UserId/:TweetId",function(request, response){
    var Id =request.body.id;
    var UserId =request.params.UserId;
    var TweetId =request.params.TweetId;
   
  
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO likes (ID, UserId,TweetId) VALUES ('"+Id+"', '"+UserId+"','"+TweetId+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Tweet liked successfulley");
        response.send({"result":"Tweet added successfulley"});
      });
    });
  });

//unLike a tweet


//////////////////////////////////////////////////////////////////////////
module.exports = router;
