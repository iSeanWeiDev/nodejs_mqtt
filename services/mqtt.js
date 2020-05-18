require('dotenv').config()
const mosca = require( 'mosca' );

const settings = {
  port: normalizePort(process.env.MQTT_SERVER || 1883),
};

const server = new mosca.Server(settings);
 
server.on('clientConnected', function(client) {
    // console.log('client connected', client.id);
});
 
// fired when a message is received
server.on('published', function(packet, client) {
  // console.log('Published', packet.payload);
  console.log(packet.payload.toString())
});
 
server.on('ready', setup);
 
// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = server;