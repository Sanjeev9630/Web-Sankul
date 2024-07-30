const express = require('express');
const orderController = require('../controller/orderController')

const router = express.Router();

router.post('/placeorder', orderController.placeorder)
router.get('/getallorder', orderController.getAllOrderList)

module.exports = router ;