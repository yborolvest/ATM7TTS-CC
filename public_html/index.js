const socket = require("ws"); 
var clients = [];
const webSocket = new socket.Server({ port: 5555 });

webSocket.on('connection', wsClient => {
    console.log('Client connected');
    clients.push(wsClient);

    wsClient.on('message', messageData => {
        console.log('Message received: ' + messageData);
        clients.forEach(client => {
            client.send(messageData.toString());
        });
    })
    wsClient.on('close', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(wsClient), 1);
    });
})