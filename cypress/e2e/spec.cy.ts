describe("Todo Application", () => {
  beforeEach(() => {
    cy.exec("npm run reset");
    cy.visit("/");
  });

  it("should load the homepage and find header text", () => {
    // Användaren besöker sidan och ser rubriken men todo-listan, där användaren kan lägga till nya todos via inputfältet och klikka på knappen "Add do".
    cy.visit("/");
    cy.get("h1").contains("On today's do's").should("be.visible");
  });

  it("should be able to add a new todo", () => {
    // Användaren lägger till en ny todo och ser att den nya todo'n har lagts till i listan.
    cy.get("input").type("New todo");
    cy.get("button").click();
    cy.get("li").contains("New todo").should("be.visible");
  });

  it("should mark a todo as done", () => {
    // Användaren ska kunna markera en todo som klar.
    const newTodo = "New Todo Item";

    cy.get("input").type(newTodo);
    cy.contains("Add do").click();
    cy.contains(newTodo).should("be.visible");

    cy.get(`li:contains(${newTodo})`).find('[data-cy="todo-checkbox"]').check();

    cy.get(`li:contains(${newTodo})`)
      .find('[data-cy="todo-checkbox"]')
      .should("be.checked");
  });

  it("should be able to delete a todo", () => {
    // Användaren ska kunna ta bort en todo från listan.
    const newTodo = "New Todo Item";

    cy.get("input").type(newTodo);
    cy.contains("Add do").click();
    cy.contains(newTodo).should("be.visible");

    cy.get('[data-cy="delete-button"]').click();

    cy.contains(newTodo).should("not.exist");
  });

  it("should be able to edit a todo", () => {
    // Användaren ska kunna redigera en todo.
    const newTodo = "New Todo Item";
    const updatedTodo = "Updated Todo Item";

    cy.get("input").type(newTodo);
    cy.contains("Add do").click();
    cy.contains(newTodo).should("be.visible");

    cy.get(`li:contains(${newTodo})`).find('[data-cy="edit-button"]').click();

    cy.get("input").first().clear().type(updatedTodo);
    cy.contains("Update do").click();

    cy.contains(newTodo).should("not.exist");
    cy.contains(updatedTodo).should("be.visible");
  });
});
