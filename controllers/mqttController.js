const Device1Mode1 = require('../db/models').Device1;
const Device1Mode2 = require('../db/models').Device2;


const mqttController = (io, mqtt) => {
  // fired when a message is received
  mqtt.on('published', function(packet, client) {
    const data = packet.payload.toString();
    const topic = payload.topic.toString();
    if (data) {
      if (topic == "2677larkindwh") {
        const newData = {
          circulation: data.Circulation,
          supply: data.Supply
        }
  
        Device1Mode2.create(newData)
          .then(result => {
            const sendData = {
              topic: topic, 
              data: result.get()
            } 

            io.emit('event', sendData);
          })
          .catch((error) => {
            console.log(`2677larkindwh storing the data error: ${error}`);
          });
      } else {
        const newData = {
          indoor: data.Indoor,
          outdoor: data.Outdoor,
          return: data.Return
        }
  
        Device1Mode1.create(newData)
          .then(result => {
            const sendData = {
              topic: topic, 
              data: result.get()
            } 
            io.emit('event', sendData);
          })
          .catch((error) => {
            console.log(`2677larkindwh storing the data error: ${error}`);
          });
      }
    }
  });
} 

module.exports = mqttController;