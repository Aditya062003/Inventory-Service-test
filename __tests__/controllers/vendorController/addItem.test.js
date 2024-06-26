const mongoose = require("mongoose");
require("dotenv").config();
const request = require("supertest");
const app = require("../../../index");
const randomUtils = require("../../../utils/random.utils");

describe("POST /api/v1/vendor/menuitems", () => {
  it("Add an item to the menu", async () => {
    const res = await request(app)
      .post("/api/v1/inventory/vendor/menuitems")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWNjYzdmMmQ3N2RlM2UxMmUwZjYxNjIiLCJpYXQiOjE3MDc5MTkzNjEsImV4cCI6MTcwODM1MTM2MX0.ciIuu3Unw1_xXOzPV0SSBcIGhnTShOvpt456LDBYGgE"
      )
      .set("Accept", "application/json")
      .send({
        name: "Paneer Momos",
        is_veg: true,
        image_url: "https://i.ibb.co/jZgGpxX/momo-blog-500x500.jpg",
        price: 60,
        description: "A delicious paneer Momos with exotic red sauce.",
        quantity: 10,
        rating: 4.6,
        number_of_ratings: 30,
        tags: ["Paneer", "Momos", "Snacks"],
        category: "Momos",
        is_available: true,
        nutritional_values: "Calories: 500, Protein: 25g, Fat: 20g",
        is_healthy: false,
        on_offer: false,
        offer_price: 49,
      }).expect(401);
      // .expect(201);
  });
}, 100000);
