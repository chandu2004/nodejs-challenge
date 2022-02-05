var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RecordSchema = new Schema({
}, {timestamps: true});

module.exports = mongoose.model("Record", RecordSchema);