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
///////////////////hidetweet////////////////////////////////
router.post("/hidetweet/:tweetid",function (request, response){

  var tweetid =request.params.tweetid;
  var UserId =request.body.UserId;

  con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO `hiddentweets` (tweetid, userid) VALUES ('"+tweetid+"', '"+UserId+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(" added-hidden tweet: " + result.affectedRows);
      response.send({"result":"added hidden tweet"});
    });
  });
  
});
////////////////////unhidetweet///////////////////////////////
router.delete("/unhidetweet/:tweetid",function (request, response){

  var tweetid =request.params.tweetid;


  con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM `hiddentweets` WHERE tweetid = '"+tweetid+"' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(" unhide tweet: " + result.affectedRows);
      response.send({"result":"unhide tweet "});
    });
  });
  
});
////////////////////////////// followeduserstweets////////////////////////////////////////////////////////
router.post("/followeduserstweets/:Followedid",function (request, response){
  var Followedid =request.params.Followedid;
  


  con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM `tweets` WHERE UserId = '"+Followedid+"'";
    con.query(sql, function (err, result) {
  
      if (err) throw err;
      console.log("Retrieve all followed tweet sucssefully successfulley");
      
      response.json(result)
      
    });
  });
  
});

module.exports = router;
