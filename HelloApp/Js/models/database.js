const {model, Schema} = require("mongoose")

const database = new Schema({
    title: {
        type: String,
        required: true
    },
     name: {
        type: String,
        required: true
    },
        devise: {
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
        required: true
    }
})

module.exports = model("Database", database)