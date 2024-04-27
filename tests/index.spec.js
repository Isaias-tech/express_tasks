const { describe, it, afterAll, expect } = require("@jest/globals");
const supertest = require("supertest");
const server = require("../src/index.js");

describe("todo app", () => {

	it("should return a 200 status code and a json message", async () => {
		const res = await supertest(server).get("/");
		expect(res.status).toBe(200);
		expect(res.body.message).toBe("The app is up and running.");
	});

	afterAll(() => {
		server.close();
	});
});