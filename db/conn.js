// Import necessary modules

const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})