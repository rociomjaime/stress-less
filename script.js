var mysql = require('mysql');
var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tamagotchi",
  database: "schedule_info"
});

function insertUsername() {
   var usern = document.getElementById("username");
   var sql = "INSERT INTO username(username)";

}

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //var sql1 = "CREATE TABLE ";
  con.query(insertUsername, function(err, result){
    if (err) throw err;
    console.log("Table updated");
  })
});
