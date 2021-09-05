describe("As an user I want to sign in to access the functionality", () => {
  it("Should authenticate user given the correct credentials", () => {
    cy.intercept("POST", "http://localhost:8080/api/auth/token", {
      username: "username",
      token: "token",
    }).as("signIn");
    cy.visit("http://localhost:3000/sign-in");
    cy.get("input[id=sign-in-email]").type("mail@mail.com");
    cy.get("input[id=sign-in-password]").type("password{enter}");
    cy.wait("@signIn");
    cy.url().should("include", "/home");
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "userDetails")
      .should("exist");
  });

  it("Show error message given incorrect credentials", () => {
    cy.intercept("POST", "http://localhost:8080/api/auth/token", {
      statusCode: 401,
      body: {
        message: "Authentication failed: bad credentials.",
      },
    }).as("signIn");
    cy.visit("http://localhost:3000/sign-in");
    cy.get("input[id=sign-in-email]").type("mail@mail.com");
    cy.get("input[id=sign-in-password]").type("password{enter}");
    cy.wait("@signIn");
    cy.get("div[id=error-alert]").contains(
      "Authentication failed: bad credentials."
    );
  });
});
