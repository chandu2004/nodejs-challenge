const { body, validationResult } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const { getFilteredRecords } = require("../services/record");

/**
 * Get list of records within minCount & maxCount
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
	body("startDate", "Invalid startDate Format. Expected: YYYY-MM-DD")
		.escape()
		.matches(/^(\d{4})-(\d{2})-(\d{2})$/),
	body("endDate", "endDate must not be empty.").isLength({ min: 1 }).trim(),
	body("endDate", "Invalid endDate Format. Expected: YYYY-MM-DD")
		.escape()
		.matches(/^(\d{4})-(\d{2})-(\d{2})$/),
	body("minCount", "minCount must not be empty.").not().isEmpty(),
	body("maxCount", "maxCount must not be empty.").not().isEmpty(),
	async (req, res) => {
		try {
			// do validations on request body
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(
					res,
					"Validation Error.",
					errors.array()
				);
			} else {
				const records = await getFilteredRecords(req.body);
				if (records.length > 0) {
					return apiResponse.successResponseWithData(res, "success", records);
				} else {
					return apiResponse.successResponseWithData(res, "success", []);
				}
			}
		} catch (err) {
			console.log(err);
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	},
];
