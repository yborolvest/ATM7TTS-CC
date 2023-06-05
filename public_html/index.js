const socket = require("ws"); 
var clients = [];
const webSocket = new socket.Server({ port: 5555 });

webSocket.on('connection', wsClient => {
    console.log('Client connected');
    clients.push(wsClient);

    wsClient.on('message', messageData => {
        console.log('Message received: ' + messageData);
        clients.forEach(client => {
            client.broadcast(JSON.stringify({func:messageData}))
        })
    });

    wsClient.on('close', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(wsClient), 1);
    });
})
webSocket.broadcast = function broadcast(messageData) {
    webSocket.clients.forEach(function each(client) {
        if (client.readyState === socket.OPEN) {
            client.send(messageData);
        }
    });
};