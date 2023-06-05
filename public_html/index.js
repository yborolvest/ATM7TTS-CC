const socket = require("ws"); 
var clients = [];
const webSocket = new socket.Server({ port: 5555 });

webSocket.on("connection", ws => {
    console.log("connected!");
    ws.on("message", message => {
        console.log(message);
        webSocket.broadcast(message);
    });
});

webSocket.broadcast = function broadcast(message) {
    webSocket.clients.forEach(function each(client) {
        if (client.readyState === socket.OPEN) {
            client.send(message);
        }
    })
};