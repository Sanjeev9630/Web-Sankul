const orderSchema = require("../models/orderModel")


const placeorder = async(req, res) => {
    try {
        if(!req.body) return "Please Enter all the details of Order"
        const { orderId, productId, quantity, purchasedDate } = req.body ;
        // here we need to validate the number of quantities available
        const productquery = await orderSchema.create({ orderId, productId, quantity, purchasedDate })
        res.status(200).send({ message: "Order Placed Successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Error In placing Order" })
    }
}

const getAllOrderList = async(req, res) => {
    try {
        const productquery = await orderSchema.find({})
        console.log(productquery)
        if(Object.keys(productquery).length === 0) return res.status(404).send({ message: "No Orders Exist"})

        res.status(200).send({ productquery, message: " All Orders fetched Successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Error In getting orders" })
    }
}

module.exports = {
    placeorder, getAllOrderList
}