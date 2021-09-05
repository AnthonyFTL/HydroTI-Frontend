describe("As an user I want to register in the application to enter the plattforms", () => {
  it("should show error messages when a form field is missing", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get("button").contains("Registrar").click();
    cy.get("p[id=sign-up-role-helper-text]").should(
      "contain",
      "Seleccione un rol"
    );
    cy.get("p[id=sign-up-name-helper-text]").should(
      "contain",
      "Ingrese nombre"
    );
    cy.get("p[id=sign-up-lastname-helper-text]").should(
      "contain",
      "Ingrese apellidos"
    );
    cy.get("p[id=sign-up-email-helper-text]").should(
      "contain",
      "Ingrese correo electrónico"
    );
    cy.get("p[id=sign-up-password-helper-text]").should(
      "contain",
      "Ingrese contraseña"
    );
  });

  it("should check that password field and its confirmation are the same", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get("input[id=sign-up-password]").type("password!");
    cy.get("input[id=sign-up-password-confirmation]").type("password!.");
    cy.get("p[id=sign-up-password-confirmation-helper-text]").should(
      "contain",
      "Las contraseñas no coinciden "
    );
  });

  it("should check that the email provided has a valid format", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get("input[id=sign-up-email]").type("email");
    cy.get("p[id=sign-up-email-helper-text]").should(
      "contain",
      "El formato del correo no es válido"
    );
  });

  it("should check that the password provided has the required length", () => {
    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[id=sign-up-password]").type("pass");
    cy.get("p[id=sign-up-password-helper-text]").should(
      "contain",
      "La contraseña debe tener entre 8 y 14 caracteres"
    );

    cy.get("input[id=sign-up-password]").type("large_password_");
    cy.get("p[id=sign-up-password-helper-text]").should(
      "contain",
      "La contraseña debe tener entre 8 y 14 caracteres"
    );
  });

  it("should check that the password has special characters", () => {
    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[id=sign-up-password]").type("password");
    cy.get("p[id=sign-up-password-helper-text]").should(
      "contain",
      "La contraseña debe incluir caracteres especiales"
    );
  });

  it("should check that the name contains only letters and spaces", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get("input[id=sign-up-name]").type("name 1");
    cy.get("p[id=sign-up-name-helper-text]").should(
      "contain",
      "El nombre solo puede contener letras"
    );
  });

  it("should check that the lastname contains only letters and spaces", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get("input[id=sign-up-lastname]").type("name 1");
    cy.get("p[id=sign-up-lastname-helper-text]").should(
      "contain",
      "Los apellidos solo pueden contener letras"
    );
  });

  it("Should create the user correctly", () => {
    cy.intercept("POST", "http://localhost:8080/api/users", {}).as("signUp");
    cy.visit("http://localhost:3000/sign-up");
    cy.get("input[name=role]").check("ROLE_IRRIGATION_MANAGER", {
      force: true,
    });
    cy.get("input[id=sign-up-name]").type("name");
    cy.get("input[id=sign-up-lastname]").type("lastname");
    cy.get("input[id=sign-up-email]").type("mail@mail.com");
    cy.get("input[id=sign-up-password]").type("password!");
    cy.get("input[id=sign-up-password-confirmation]").type("password!{enter}");
    cy.wait("@signUp");
    cy.get("div[id=sign-up-confirmation]").should("exist");
  });
});
