var connect = require('connect');

var PORT = 8080;

connect.createServer(
    connect.static(__dirname + "/static")
).listen(PORT);
console.log("Serving", __dirname + "/static", "on port", PORT)