const { vModelDynamic } = require("@vue/runtime-dom");

// https://docs.cypress.io/api/introduction/api.html
describe("general", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081");
  });

  describe("site access", () => {
    it("Visits the app root url", () => {
      cy.contains("h1", "Webshop");
    });
  });

  describe("performance of add-button", () => {
    it("click add-btn and add quantity", () => {
      cy.get("#add-btn").click();
      cy.get("#quantity").should("have.length", 1);
    });
  });

  describe("load api", () => {
    it("loads the api", () => {
      cy.request("http://localhost:3000/products");
    });
  });
});
