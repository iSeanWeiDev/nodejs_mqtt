const mqttController = (io, mqtt) => {
  // fired when a message is received
  mqtt.on('published', function(packet, client) {
    const data = packet.payload.toString();
    io.emit('event', data);
  });
} 

module.exports = mqttController;