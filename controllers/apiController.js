const DataService = require('../services/data');

const apiController = {
  getAllData: (req, res) => {
    DataService.getAllDataDevice1(callback1 => {
      DataService.getAllDataDevice2(callback2 => {
        const sendData = {
          device1: callback1,
          device2: callback2
        }
  
        res.status(200).json(sendData);
      });
    })
  },
}

module.exports = apiController;
