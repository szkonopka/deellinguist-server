const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
    content: {type: String, required: true},
    date: {type: Date, required: true},
    type: {type: String, required: true},
    userId: {type: Number, required: true}
})

module.exports = mongoose.model('Message', MessageSchema);