const mongoose =  require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productId: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        availableQuantity: {
            type: Number,
            required: true,
        }
    }
);

module.exports = mongoose.model("Products", productSchema);
