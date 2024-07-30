const express = require('express');
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const app = express();

dotenv.config();
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Welcome to code for express app')
})

app.use('/order', require('./routes/orderRoute'))
app.use('/product', require('./routes/productRoute'))

mongoose.connect('mongodb+srv://shsanjeev25:tv7bpbXVivIumFae@cluster25.jnfzowf.mongodb.net/WebSankul').then(() => {
    console.log('Connected to db');
}).catch((err) => {
    console.log(err);
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})