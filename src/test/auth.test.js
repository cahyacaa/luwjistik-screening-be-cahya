const app = require('../app');
const request = require("supertest");

describe("testing-auth-routes", () => {
    it("POST /api/v1/auth/login - success", async () => {
      const { body } = await request(app).post("/api/v1/auth/login").send({
        email: 'luwjistik.test@mailinator.com',
        password: 'test12345'
      }); //uses the request function that calls on express app instance
      expect(body).toHaveProperty("data.token");
      expect(body).toHaveProperty("data.refreshToken");
      expect(body).toHaveProperty("data.email","luwjistik.test@mailinator.com");
    });
  });
