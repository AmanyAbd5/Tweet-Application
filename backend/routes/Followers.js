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
router.post("/addfollower/:FollowerId",function(request, response){

    var FollowerId =request.params.FollowerId;
    var FollowedId =request.body.FollowedId;
    
  
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO `followers` (FollowerId, FollowedId) VALUES ('"+FollowerId+"', '"+FollowedId+"')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("you are follow person");
        response.send({"result":"you are follow person"});
      });
    });
  }
  );
  router.delete("/unfollowauser/:FollowerId",function(request, response){

    var FollowerId =request.params.FollowerId;
    
  
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "DELETE FROM `followers` WHERE FollowerId = '"+FollowerId+"' ";

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("you are unfollow him now ");
        response.send({"result":"you are follow person"});
      });
    });
  }
  );
  module.exports = router;
