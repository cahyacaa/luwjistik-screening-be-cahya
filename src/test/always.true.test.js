const app = require('../app');
const request = require("supertest");

describe("testing-server-routes", () => {
    it("GET /api/v1 - success", async () => {
      const { body } = await request(app).get("/api/v1"); //uses the request function that calls on express app instance
      expect(body)
      .toEqual({
        "status": true,
        "message": "OK",
        "meta": {},
        "data":{}
      });
    });
  });
