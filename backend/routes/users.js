var express = require('express');



var router = express.Router();
const db = require("../config/dbconfig");
const orderBy=require("lodash/orderBy");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/////////////////////////////////////////////////////////////////////////////////
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tweetapplication"
});

//con = require('./connection');


router.post("/adduser",function(request, response){

  var id =request.body.id;
  var Username =request.body.Username;
  var Fullname =request.body.Fullname;
  var Birthday =request.body.Birthday;
  var Password =request.body.Password;
  var Address =request.body.Address;

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (id,Username,Fullname,Birthday,Password,Address) VALUES ('"+id+"', '"+Username+"','"+Fullname+"','"+Birthday+"','"+Password+"','"+Address+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("user added successfulley");
      response.send({"result":"user added successfulley"});
    });
  });
});
//////////////////////////////////changepassword////////////////////////////////////////

router.post("/changepassword",function(request, response){
  var oldpass=request.body.oldpass;
  var newpass=request.body.newpass;
 var confirmpass=request.body.confirmpass;
 con.connect(function(err) {
  if (err) throw err;
//  var sql = "SELECT * FROM `users` WHERE Password='"+oldpass+"' and (UPDATE Password from users password= '"+confirmpass+"' WHERE id= ('"+id+"'))";

var sql="UPDATE users SET password = '"+confirmpass+"'  WHERE password ='"+oldpass+"';"
if (newpass==confirmpass){
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Retrieve all tweets successfulley");
  
    response.json("nwe and cofirm password matches")
    
});   };    

   })},);
  

///////////////////////////Rettweetlikes///////////////////////////////////////
router.post("/Retweetslikes/:page/:limit",function (request, response){
  var UserId =request.body.UserId;
  var TweetID =request.body.TweetID;
  
 var page =request.params.page;
  var limit =request.params.limit;

  const startIndex = (page -1)* limit;
  const endIndex = page * limit;

  con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM `likes` WHERE UserId = '"+UserId+"' AND TweetID ='"+TweetID+"' ";
    con.query(sql, function (err, result) {
  
      if (err) throw err;
      console.log("Retrieve all liked tweets successfulley");
      const resultusers = result.slice(startIndex , endIndex)
      response.json(resultusers)
      
    });
  });
  
});
////////////////////////////////////////////////////////
module.exports = router;
