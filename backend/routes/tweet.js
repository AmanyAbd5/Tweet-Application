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

// add tweet    
router.post("/addtweet",function(request, response){

  var id =request.body.id;
  var UserId =request.body.UserId;
  var Description =request.body.Description;
  var Hashtag =request.body.Hashtag;
  var Date =request.body.Date;

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO tweets (id, UserId,Description,Hashtag,Date) VALUES ('"+id+"', '"+UserId+"','"+Description+"','"+Hashtag+"','"+Date+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Tweet added successfulley");
      response.send({"result":"Tweet added successfulley"});
    });
  });
});
// update tweet 
router.post("/updatetweet/:id",function(request, response){

  var id =request.params.id;
  var UserId =request.body.UserId;
  var Description =request.body.Description;
  var Hashtag =request.body.Hashtag;
  var Date =request.body.Date;

  con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE tweets SET UserId = '"+UserId+"',Description = '"+Description+"',Hashtag = '"+Hashtag+"',Date = '"+Date+"'  WHERE id = '"+id+"'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      response.send({"result":"Tweet update successfulley"});
    });
  });
});
//delete 
router.delete("/deletetweet",function (request, response){

  var id =request.body.id;

  con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM tweets WHERE id = '"+id+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
      response.send({"result":"Tweet delete successfulley"});
    });
  });
  
});

//Retrieve specific user tweets
router.get("/retrieveusertweets/:UserId",function (request, response){

  var UserId =request.body.UserId;

  con.connect(function(err) {
    if (err) throw err;
    
    var sql = "SELECT * FROM tweets WHERE UserId = '"+UserId+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      response.send({"result":"retrieve-tweets"});
    });
  });
  
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
      response.send({"result":"Tweet liked successfulley"});
    });
  });
});
//unlike a tweet n
router.post("/unliketweet/:UserId/:TweetId",function(request, response){
  var Id =request.params.id;
  var UserId =request.params.UserId;
  var TweetId =request.params.TweetId;
 

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DELETE FROM likes WHERE UserId = '"+UserId+"' AND TweetId = '"+TweetId+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Tweet unliked successfulley");
      response.send({"result":"Tweet unliked successfulley"});
    });
  });
});

//tweet likes SELECT COUNT(id) AS id_count FROM publishers WHERE id > 5  n

router.get("/tweetlikescount/:TweetId",function(request, response){
  var TweetId =request.params.TweetId;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT COUNT(id) AS id_count FROM likes WHERE TweetId = '"+TweetId+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      response.send({"result":" tweet-likes-count  retrived successfulley"});
    });
  });
});

////////////////////////////////////////SAVED LISTE///////////////////////////////////////////

//add tweet to Saved list
router.put("/AddtweettoSL/:TweetId/:UserId",function(request, response){
  var Id =request.body.id;
  var UserId =request.params.UserId;
  var TweetId =request.params.TweetId;
 

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO saved_tweets (id, TweetId,UserId) VALUES ('"+Id+"', '"+TweetId+"','"+UserId+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Tweet loaded to saved list successfulley");
      response.send({"result":"Tweet added to saved list successfulley"});
    });
  });
});

//delete tweet from saved list
router.post("/deletetweetFSL/:TweetId/:UserId",function(request, response){
  var Id =request.params.id;
  var UserId =request.params.UserId;
  var TweetId =request.params.TweetId;
 

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DELETE FROM saved_tweets WHERE TweetId = '"+TweetId+"' AND UserId = '"+UserId+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Tweet deleted From saved list successfulley");
      response.send({"result":"Tweet deleted From saved list successfulley"});
    });
  });
});

//////retrieveuserTweets





router.get("/retrieveuserinfo/:UserId",function (request, response){

  var id =request.body.id;

  con.connect(function(err) {
    if (err) throw err;
    
    var sql = "SELECT saved_tweets FROM saved_tweets WHERE id = '"+id+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      response.send({"result":"retrieve-user-info"});
    });
  });
});


//////////


router.get("/retrievesavedtweet/:page/:limit",function (request, response){

var UserId =request.body.UserId;
var page = request.params.page;
 var limit = request.params.limit;

 const si =(page-1) * limit ;
 const ei =page * limit ;
  con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM tweets WHERE UserId = '"+UserId+"' and id  IN (SELECT TweetId FROM saved_tweets WHERE UserId = '"+UserId+"')";
    con.query(sql, function (err, result) {
    
       const ru = result.slice(si , ei );
       console.log(ru);
       console.log("ret");
     response.send(ru)
    })
      })  
});

module.exports = router;
