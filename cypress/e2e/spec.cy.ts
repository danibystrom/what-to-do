describe("Todo Application", () => {
  beforeEach(() => {
    cy.exec("npm run reset");
    cy.visit("/");
  });

  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("On today's do's").should("be.visible");
  });
});
