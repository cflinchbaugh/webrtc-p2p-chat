var Peer = require('simple-peer');
var peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false
});

peer.on('signal', function(data) {
    document.getElementById('your-id').value = JSON.stringify(data);
});

document.getElementById('connect').addEventListener('click', function() {
    var otherId = JSON.parse(document.getElementById('other-id').value);

    peer.signal(otherId);
});

document.getElementById('send-message').addEventListener('click', function() {
    var yourMessage = document.getElementById('your-message').value;

    peer.send(yourMessage);
});

peer.on('data', function(data) {
    document.getElementById('messages').textContent += data + '\n';
});