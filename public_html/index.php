<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebsocketTest CC:Tweaked</title>
</head>
<body>
    
<script> 
    var ws = new WebSocket("wss://silly.media:5555");
    ws.onopen = function() {
        ws.send("Hello, world");
    };
    ws.onmessage = function (evt) {
        alert(evt.data);
    };
</script>
</body>
</html>