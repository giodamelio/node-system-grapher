var socket = io.connect("http://alarmpi.local:8080/");
socket.on("test", function (data) {
    console.log(data);
});

console.log("Emitting awesome message");
socket.emit("Awesome message");