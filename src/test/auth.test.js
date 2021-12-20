const app = require('../app');
const request = require("supertest");
let data ={};

describe("testing-auth-routes", () => {
    it("POST /api/v1/auth/login - success", async () => {
      const { body } = await request(app).post("/api/v1/auth/login").send({
        email: 'luwjistik.test@mailinator.com',
        password: 'test12345'
      }); //uses the request function that calls on express app instance
      expect(body).toHaveProperty("data.token");
      expect(body).toHaveProperty("data.refreshToken");
      expect(body).toHaveProperty("data.email","luwjistik.test@mailinator.com");
      data = {
        token :body.data.token,
        refreshToken: body.data.refreshToken,
        id: body.data.id
      };
    });
    it("POST /api/v1/auth/refresh-token - success", async () => {
      const { body } = await request(app).post("/api/v1/auth/refresh-token").send({
          userId : data.id,
          refreshToken: data.refreshToken
      }); //uses the request function that calls on express app instance
      expect(body).toHaveProperty("data");
      expect(body).toHaveProperty("message","OK");
      expect(body).toHaveProperty("data.token");
    });
    
    it("POST /api/v1/auth/logout - success", async () => {
      const { body } = await request(app).post("/api/v1/auth/logout").set({
        authorization: 'Bearer '+ data.token
      }); //uses the request function that calls on express app instance
      expect(body).toHaveProperty("data");
      expect(body).toHaveProperty("message","OK");
    });

  });
