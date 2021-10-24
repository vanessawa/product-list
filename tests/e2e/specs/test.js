// https://docs.cypress.io/api/introduction/api.html

describe("site access", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8081");
    cy.contains("h1", "Webshop");
  });
});

describe("performance of add-button", () => {
  it("click add-btn", () => {
    cy.visit("http://localhost:8081");
    cy.get("#add-btn").click();
  });
});
