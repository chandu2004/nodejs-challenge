const { chai, server } = require("./testConfig");

/**
 * Test cases to test the records API
 * Covered Routes:
 * (1) Home Page
 * (2) Filter records
 */

describe("Record", () => {
	// Prepare data for testing
	const userTestData = {
		startDate: "2016-01-26",
		endDate: "2018-02-02",
		minCount: 2700,
		maxCount: 3000,
	};

	const userTestData2 = {
		startDate: "2022-01-26",
		endDate: "2022-02-06",
		minCount: 7000,
		maxCount: 9000,
	};

	const userTestData3 = {
		startDate: "2022-01-26",
		minCount: 7000,
		maxCount: 9000,
	};

	describe("Navigate to Home page", () => {
		it("should return home page", (done) => {
			chai
				.request(server)
				.get("/")
				.send()
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});

	describe("/POST Filter Records", () => {
		it("It should send validation error", (done) => {
			chai
				.request(server)
				.post("/api/records")
				.send()
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});
	});

	describe("/POST Filter records", () => {
		it("It should filter records in DB", (done) => {
			chai
				.request(server)
				.post("/api/records")
				.send(userTestData)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("msg").eql("success");
					done();
				});
		});
	});

	describe("/POST Filter records", () => {
		it("It should return empty list", (done) => {
			chai
				.request(server)
				.post("/api/records")
				.send(userTestData2)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("records").length(0);
					done();
				});
		});
	});

	describe("/POST Filter records", () => {
		it("It should throw validation error for endDate", (done) => {
			chai
				.request(server)
				.post("/api/records")
				.send(userTestData3)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.property("msg").eql("Validation Error.");
					done();
				});
		});
	});

	describe("/GET random route", () => {
		it("It should throw 404 error", (done) => {
			chai
				.request(server)
				.post("/api/random")
				.send(userTestData)
				.end((err, res) => {
					res.should.have.status(404);
					res.body.should.have.property("msg").eql("Page not found");
					done();
				});
		});
	});
});
