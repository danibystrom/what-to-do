describe("Todo Application", () => {
  beforeEach(() => {
    cy.exec("npm run reset");
    cy.visit("/");
  });

  it("should load the homepage and find header text", () => {
    cy.visit("/");
    cy.get("h1").contains("On today's do's").should("be.visible");
  });

  it("should add a new todo", () => {
    cy.get("input").type("New todo");
    cy.get("button").click();
    cy.get("li").contains("New todo").should("be.visible");
  });
});
