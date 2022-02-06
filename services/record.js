const Record = require("../models/Record");

/**
 * @description Get records for range
 * @param {date} startDate
 * @param {date} endDate
 * @param {number} minCount
 * @param {number} maxCount
 * @return {array}
 */

module.exports.getFilteredRecords = ({
	startDate,
	endDate,
	minCount,
	maxCount,
}) =>
	Record.aggregate([
		{
			$match: {
				createdAt: { $lte: new Date(endDate), $gte: new Date(startDate) },
			},
		},
		{
			$addFields: {
				totalCount: { $sum: "$counts" },
			},
		},
		{
			$match: {
				totalCount: { $gte: minCount, $lte: maxCount },
			},
		},
		{
			$project: {
				_id: 0,
				key: 1,
				createdAt: 1,
				totalCount: 1,
			},
		},
	]);
