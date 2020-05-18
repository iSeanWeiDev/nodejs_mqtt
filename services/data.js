const Device1Model1 = require('../db/models').Device1;
const Device1Model2 = require('../db/models').Device2;

var DataService = {};
DataService.getAllDataDevice1 = getAllDataDevice1; 
DataService.getAllDataDevice2 = getAllDataDevice2; 

function getAllDataDevice1(callback) {
  Device1Model1.findAll()
    .then(results => {
      let sendData = [];
      for(let obj of results) {
        sendData.push(obj.get());
      }

      callback(sendData);
    })
}

function getAllDataDevice2(callback) {
  Device1Model2.findAll()
    .then(results => {
      let sendData = [];
      for(let obj of results) {
        sendData.push(obj.get());
      }

      callback(sendData);
    })
}

module.exports = DataService;
