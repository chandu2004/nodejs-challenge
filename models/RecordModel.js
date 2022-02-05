var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var recordSchema = new Schema({
    key: {
      type: String
    },
    value: {
      type: String
    },
    createdAt: {
    type: Date
    },
    counts: {
        type: [Number]
      }
}, {timestamps: true});

module.exports = mongoose.model("Record", recordSchema);