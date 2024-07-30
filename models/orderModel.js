const mongoose =  require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: Number,
            required: true,
        },
        productId: {
            type: mongoose.Schema.ObjectId,
            ref: "products",
        },
        quantity: {
            type: Number,
            required: true,
        },
        purchasedDate: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model("Orders", orderSchema);