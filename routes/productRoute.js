const express = require('express');
const productController = require('../controller/productController')

const router = express.Router();

router.post('/add', productController.addProduct)
router.get('/getall', productController.getAllProduct)
router.get('/getSingle', productController.getSingleProduct)

module.exports = router ;