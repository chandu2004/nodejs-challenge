var express = require("express");
const RecordController = require("../controllers/RecordController");

var router = express.Router();

router.post("/", RecordController.filterRecords);

module.exports = router;
