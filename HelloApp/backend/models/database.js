const {model, Schema} = require("mongoose")

const database = new Schema({
     name: {
        type: String,
        required: true
    },
        device: {
        type: String,
        required: true
    },
        model: {
        type: String,
        required: true
    },
        phone: {
        type: String,
        required: true
    },
        problem: {
        type: String,
        required: true
    },
        email: {
        type: String,
        required: false
    }
})

module.exports = model("Database", database)