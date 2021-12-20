const app = require('../app');
const request = require("supertest");
const {orderData} = require('./data/order');
const {status} = require('../constants/orders');
let token;
describe("testing-order-routes", () => {
    it("POST /api/v1/auth/login - success", async () => {
      const { body } = await request(app).post("/api/v1/auth/login").send({
        email: 'luwjistik.test@mailinator.com',
        password: 'test12345'
      }); //uses the request function that calls on express app instance
      expect(body).toHaveProperty("data.token");
      expect(body).toHaveProperty("data.refreshToken");
      expect(body).toHaveProperty("data.email","luwjistik.test@mailinator.com");
      token = body.data.token;
    });

    it("POST /api/v1/orders - success", async () => {
      const { body } = await request(app).post("/api/v1/order").set({
        authorization: 'Bearer '+ token
      }).send(orderData); //uses the request function that calls on express app instance
      expect(body).toHaveProperty("data.status",status.OUT_DELVERY);
      expect(body).toHaveProperty("data.name", orderData.name);
      expect(body).toHaveProperty("data.orderId", orderData.orderId);
    });

    it("GET /api/v1/orders - success", async () => {
      const { body } = await request(app).get(`/api/v1/order/${orderData.orderId}`).set({
        authorization: 'Bearer '+ token
      }); //uses the request function that calls on express app instance
      expect(200);
      expect(Array.isArray(body.data)).toBe(true);
      expect(body).toHaveProperty("data.0.status",status.OUT_DELVERY);
      expect(body).toHaveProperty("data.0.name", orderData.name);
      expect(body).toHaveProperty("data.0.orderId", orderData.orderId);
    });
  });
