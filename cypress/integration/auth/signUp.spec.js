describe("As an user I want to register in the application to enter the plattforms", () => {
  it("Should create the user correctly", () => {
    cy.intercept("POST", "http://localhost:8080/api/users", {}).as("signUp");
    cy.visit("http://localhost:3000/sign-up");
    cy.get("input[name=role]").check("ROLE_IRRIGATION_MANAGER", {
      force: true,
    });
    cy.get("input[id=sign-up-name]").type("name");
    cy.get("input[id=sign-up-lastname]").type("lastname");
    cy.get("input[id=sign-up-email]").type("mail@mail.com");
    cy.get("input[id=sign-up-password]").type("password");
    cy.get("input[id=sign-up-password-confirmation]").type("password{enter}");
    cy.wait("@signUp");
    cy.get("div[id=sign-up-confirmation]").should("exist");
  });
});
