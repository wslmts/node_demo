const dgram = require('dgram');
var client=dgram.createSocket("udp4");
var message = new Buffer("hi£¬ node.js is waiting for you");
client.send(message, 0, message.length, 4123, "127.0.0.1");
client.on("message",function(msg,rinfo){
    console.log("client get: " + msg + " from " + rinfo.address + ":" + rinfo.port);
});
client.on("listening",function(){
    var address = client.address();
    console.log("client listening " + address.address + ":" + address.port);
})