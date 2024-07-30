const productSchema = require("../models/productModel")


const addProduct = async(req, res) => {
    try {
        if(!req.body) return "Please Enter all the details of Products"
        const { productId, name, price, description, availableQuantity } = req.body ;

        const productquery = await productSchema.create({ productId, name, price, description, availableQuantity })
        res.status(200).send({ message: "Product Added Successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Error In adding Product" })
    }
}

const getAllProduct = async(req, res) => {
    try {
        const productquery = await productSchema.find({})
        console.log(Object.keys(productquery).length)
        if(Object.keys(productquery).length === 0) return res.status(404).send({ message: "No Product Exist"})

        res.status(200).send({ productquery, message: " All Products fetched Successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Error In getting categories" })
    }
}

const getSingleProduct = async(req, res) => {
    try {
        const { productId } = req.query
        const productquery = await productSchema.find({ productId: productId })
        console.log(productquery)

        if(Object.keys(productquery).length === 0) return res.status(404).send({ message: "No Product Exist"})

        res.status(200).send({ productquery, message: " Category fetched Successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Error In getting categories" })
    }
}

module.exports = {
    addProduct, getAllProduct, getSingleProduct
}