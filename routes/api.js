const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();

/* GET users listing. */
router.get('/data', apiController.getAllData);

module.exports = router;
