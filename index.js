var http = require("http")

var connect = require("connect");
var socketio = require("socket.io");

// Create the static server
var app = connect.createServer(
    connect.static(__dirname + "/static")
)
var server = http.createServer(app)

// Startup socket.io
var io = socketio.listen(server);
io.set("log level", 0)

// Do the stuff
io.sockets.on("connection", function (socket) {
    socket.emit("add", {
        id: "test",
        title: "Test Graph"
    });

    socket.emit("add", {
        id: "hello-world",
        title: "Hello World Graph"
    });
});

// Run the whole thing
var PORT = 8080;

server.listen(PORT);
console.log("Serving", __dirname + "/static", "on port", PORT)