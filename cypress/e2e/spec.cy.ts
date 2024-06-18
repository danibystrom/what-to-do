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

  // it("should edit a todo", () => {
  //   const newTodo = "New Todo Item";
  //   const updatedTodo = "Updated Todo Item";

  //   // Lägg till en ny todo
  //   cy.get("input").type(newTodo);
  //   cy.contains("Add do").click();
  //   cy.contains(newTodo).should("be.visible");

  //   // Klicka på redigeringsknappen med hjälp av data-cy attribut
  //   cy.get('[data-cy="edit-button"]').click();

  //   // Uppdatera todo med ny text
  //   cy.get("input").clear().type(updatedTodo);
  //   cy.contains("Update do").click();

  //   // Kontrollera att todo är uppdaterad
  //   cy.contains(updatedTodo).should("be.visible");
  // });

  it("should delete a todo", () => {
    const newTodo = "New Todo Item";

    // Add a new todo
    cy.get("input").type(newTodo);
    cy.contains("Add do").click();
    cy.contains(newTodo).should("be.visible");

    // Delete the todo
    cy.get('[data-cy="delete-button"]').click();

    // Check that todo is deleted
    cy.contains(newTodo).should("not.exist");
  });
});
