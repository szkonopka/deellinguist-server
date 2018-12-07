const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatlogSchema = new Schema({
    users: {type: Array, required: true, min: 2, max: 2},
    messages: {type:Array, required: true}
})

module.exports = mongoose.model('Chatlog', ChatlogSchema);