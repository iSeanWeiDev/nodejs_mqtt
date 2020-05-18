require('dotenv').config()
const mosca = require( 'mosca' );

const settings = {
  port: normalizePort(process.env.MQTT_SERVER || 1883),
};

const server = new mosca.Server(settings);
 
server.on('clientConnected', function(client) {
  console.log('client connected', client.id);
});

server.on('ready', () => {
  console.log(`Mosca server is up and running on port: ${settings.port}`);
});
 
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
}

module.exports = server;