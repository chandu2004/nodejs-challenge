const Record = require("../models/RecordModel");
const { body, validationResult } = require('express-validator');
const apiResponse = require("../helpers/apiResponse");


/**
 * Record List
 * 
 * @param {string}      startDate 
 * @param {string}      endDate
 * @param {number}      minCount
 * @param {number}      maxCount
 * 
 * @returns {Object}
 */
 exports.filterRecords = [
	body("startDate", "startDate must not be empty.").isLength({ min: 1 }).trim(),
	body("endDate", "endDate must not be empty.").isLength({ min: 1 }).trim(),
    body("minCount", "minCount must not be empty.").not().isEmpty(),
    body("maxCount", "maxCount must not be empty.").not().isEmpty(),
	sanitizeBody("*").escape(),
	(req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}
			else {
                // handle filter logic
			}
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];
