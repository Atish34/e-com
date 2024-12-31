const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: { type: String, reqiured: true },
    mobile: { type: String, reqiured: true },
    email: { type: String, reqiured: true },
    password: { type: String, reqiured: true },
    isActive: { type: Boolean, default: true },
})
module.exports = mongoose.model("customer", customerSchema) 