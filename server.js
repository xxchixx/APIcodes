var express = require('express');
var app = express();
var fs = require("fs");

//This line is used to parse data
app.use(express.json());

var user = {
   "user4" : {
      "name" : "joshua",
      "password" : "password4",
      "profession" : "staff",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      //Update user using the received JSON
      var newUser = user["user4"];
      var newUsername = "user" + newUser.id;
      data[newUsername] = newUser;
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})