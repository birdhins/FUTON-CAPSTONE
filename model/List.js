const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
      },
    description: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    photo: {
        type: String
    }
});

module.exports = mongoose.model('list', listSchema)